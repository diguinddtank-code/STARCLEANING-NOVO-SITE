"use client";

import React, { useRef } from 'react';
import { useMotion, isBelowFold } from '@/lib/motion';

/**
 * Wraps a section and animates its [data-anim] descendants when they scroll into view.
 * Content is rendered fully visible on the server; GSAP only takes over elements that are
 * still below the fold when it starts (see lib/motion.ts).
 *
 *   data-anim="up"       fade + rise
 *   data-anim="stagger"  its children fade + rise one after another
 *   data-anim="mask"     image frame wipes open from the bottom while the photo settles
 *   data-anim="words"    each .sw > .swi word slides up out of its line (see SplitWords)
 *   data-anim="line"     a rule draws from the left
 *   data-anim="count"    the number counts up (keeps prefix, suffix and decimals)
 *   data-anim="pop"      small scale-in, for badges and seals
 *   data-delay="0.2"     optional delay in seconds
 */
type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header';
  'aria-label'?: string;
  'aria-labelledby'?: string;
};

const EASE = 'expo.out';

export default function Motion({ children, className, id, as = 'div', ...aria }: Props) {
  const ref = useRef<HTMLElement>(null);

  useMotion(ref, ({ gsap, ScrollTrigger }, root) => {
    const all = Array.from(root.querySelectorAll<HTMLElement>('[data-anim]')).filter((el) => isBelowFold(el));
    const delay = (el: Element) => parseFloat(el.getAttribute('data-delay') || '0');
    const onEnter = (el: Element, fn: () => void, start = 'top 88%') =>
      ScrollTrigger.create({ trigger: el, start, once: true, onEnter: fn });

    // Reads first (computed radius for masks), then writes, then triggers.
    const radius = new Map<Element, string>();
    all.forEach((el) => {
      if (el.dataset.anim === 'mask') radius.set(el, getComputedStyle(el).borderRadius || '0px');
    });

    all.forEach((el) => {
      const type = el.dataset.anim;
      const d = delay(el);
      switch (type) {
        case 'up':
          gsap.set(el, { autoAlpha: 0, y: 44 });
          onEnter(el, () => gsap.to(el, { autoAlpha: 1, y: 0, duration: 1.1, delay: d, ease: EASE }));
          break;
        case 'stagger': {
          const kids = Array.from(el.children);
          gsap.set(kids, { autoAlpha: 0, y: 48 });
          onEnter(el, () => gsap.to(kids, { autoAlpha: 1, y: 0, duration: 1, delay: d, stagger: 0.11, ease: EASE }));
          break;
        }
        case 'pop':
          gsap.set(el, { autoAlpha: 0, scale: 0.8, rotate: -6 });
          onEnter(el, () => gsap.to(el, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.9, delay: d, ease: 'back.out(1.8)' }));
          break;
        case 'line':
          gsap.set(el, { scaleX: 0, transformOrigin: '0% 50%' });
          onEnter(el, () => gsap.to(el, { scaleX: 1, duration: 1.2, delay: d, ease: 'power4.inOut' }));
          break;
        case 'mask': {
          const r = radius.get(el) ?? '0px';
          const media = el.querySelector('img, video');
          gsap.set(el, { clipPath: `inset(100% 0% 0% 0% round ${r})` });
          if (media) gsap.set(media, { scale: 1.35 });
          onEnter(
            el,
            () => {
              const tl = gsap.timeline({ delay: d });
              tl.to(el, { clipPath: `inset(0% 0% 0% 0% round ${r})`, duration: 1.35, ease: 'expo.inOut' });
              if (media) tl.to(media, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0.15);
              tl.set(el, { clearProps: 'clipPath' });
            },
            'top 85%'
          );
          break;
        }
        case 'words': {
          const words = el.querySelectorAll('.swi');
          gsap.set(words, { yPercent: 110 });
          onEnter(el, () => gsap.to(words, { yPercent: 0, duration: 1.1, delay: d, stagger: 0.045, ease: EASE }));
          break;
        }
        case 'count': {
          const raw = el.textContent ?? '';
          const m = raw.match(/^(\D*)([\d.,]+)(.*)$/);
          if (!m) break;
          const target = parseFloat(m[2].replace(/,/g, ''));
          const decimals = (m[2].split('.')[1] ?? '').length;
          const state = { v: 0 };
          const render = () => {
            el.textContent = `${m[1]}${state.v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${m[3]}`;
          };
          render();
          onEnter(el, () =>
            gsap.to(state, { v: target, duration: 2, delay: d, ease: 'power3.out', onUpdate: render, onComplete: () => { el.textContent = raw; } })
          );
          break;
        }
        default:
          break;
      }
    });

    // Parallax for elements that ask for it (any position): data-parallax="-12" (yPercent range)
    root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
      const amount = parseFloat(el.dataset.parallax || '10');
      gsap.fromTo(
        el,
        { yPercent: -amount / 2 },
        { yPercent: amount / 2, ease: 'none', scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: 0.8 } }
      );
    });
  });

  const Tag = as as any;
  return (
    <Tag ref={ref} id={id} className={className} data-motion="" {...aria}>
      {children}
    </Tag>
  );
}
