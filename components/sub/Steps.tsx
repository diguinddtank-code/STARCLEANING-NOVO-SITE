"use client";

import React, { useRef } from 'react';
import { useMotion } from '@/lib/motion';
import { Eyebrow } from './ui';
import SplitWords from '@/components/motion/SplitWords';

/**
 * How it works: a line fills as the section scrolls by and each step lights up when reached.
 * Horizontal on desktop, vertical on phones.
 */
export default function Steps({ steps, title = 'From quote to clean,', accent = 'in four easy steps.' }: { steps: { title: string; text: string }[]; title?: string; accent?: string }) {
  const ref = useRef<HTMLElement>(null);

  useMotion(ref, ({ gsap, ScrollTrigger }, root) => {
    const mm = gsap.matchMedia();
    const items = Array.from(root.querySelectorAll<HTMLElement>('.step'));
    const track = root.querySelector('.step-track');
    const fill = root.querySelector('.step-fill');
    if (!track || !fill) return;

    const words = root.querySelectorAll('h2 .swi');
    const r = root.getBoundingClientRect();
    if (r.top > window.innerHeight * 0.9) {
      gsap.set(words, { yPercent: 110 });
      gsap.set(items, { autoAlpha: 0, y: 40 });
      ScrollTrigger.create({
        trigger: root,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(words, { yPercent: 0, duration: 1.1, stagger: 0.045, ease: 'expo.out' });
          gsap.to(items, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, ease: 'expo.out', delay: 0.2 });
        },
      });
    }

    items.forEach((el) => el.classList.remove('is-on'));
    const light = (progress: number) => {
      // Steps light up as the line reaches them and stay lit.
      items.forEach((el, i) => { if (progress >= i / items.length + 0.02 || (i === 0 && progress > 0)) el.classList.add('is-on'); });
    };

    mm.add('(min-width: 768px)', () => {
      const t = gsap.fromTo(fill, { scaleX: 0, scaleY: 1 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: track, start: 'top 75%', end: 'top 25%', scrub: 0.5, onUpdate: (s) => light(s.progress) } });
      light(t.scrollTrigger?.progress ?? 0);
    });
    mm.add('(max-width: 767px)', () => {
      const t = gsap.fromTo(fill, { scaleY: 0, scaleX: 1 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: track, start: 'top 70%', end: 'bottom 60%', scrub: 0.5, onUpdate: (s) => light(s.progress) } });
      light(t.scrollTrigger?.progress ?? 0);
    });
    return () => mm.revert();
  });

  return (
    <section ref={ref} data-motion="" className="cv bg-white py-20 lg:py-32" aria-labelledby="steps-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 id="steps-title" className="font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-star-dark sm:text-5xl lg:text-[3.4rem]">
            <SplitWords parts={[`${title} `, { text: accent, className: 'italic text-star-blue' }]} />
          </h2>
        </div>

        <div className="step-track relative mt-14 lg:mt-20">
          {/* Track: vertical on phones, horizontal from md */}
          <span aria-hidden="true" className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-slate-200 md:left-0 md:top-[1.35rem] md:h-px md:w-full" />
          <span aria-hidden="true" className="step-fill absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px origin-top bg-star-blue md:left-0 md:top-[1.35rem] md:h-px md:w-full md:origin-left" />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} className="step is-on group relative pl-16 md:pl-0 md:pt-16">
                <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white font-serif text-lg text-slate-400 transition-all duration-500 group-[.is-on]:border-star-blue group-[.is-on]:bg-star-blue group-[.is-on]:text-white group-[.is-on]:shadow-[0_0_0_8px_rgba(0,74,173,0.08)]">
                  {i + 1}
                </span>
                <h3 className="font-serif text-2xl font-medium leading-tight text-star-dark">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
