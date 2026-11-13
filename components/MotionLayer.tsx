"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll motion (GSAP + ScrollTrigger), mounted once in the root layout.
 *
 * Speed first: GSAP is not part of the page bundle. It is downloaded on the visitor's first
 * interaction (scroll, touch, key, mouse move), so it never competes with the first paint, the
 * headline or the forms, and visitors who never scroll never download it.
 *
 * It only animates elements that are still below the fold when it starts, so nothing the
 * visitor is already looking at blinks, and the hero / LCP is never touched. It leaves alone:
 * forms and any section that holds a form, the site header and footer, anything that already
 * has its own animation (framer-motion ScrollReveal, CSS animate-*), and [data-motion-skip].
 * Visitors who ask for reduced motion get no animation at all.
 *
 * Effects:
 * - section headings: eyebrow, heading and intro paragraph rise in one after another
 * - grid items (cards, columns, tiles): rise in with a short stagger
 * - checklists (lists with icons): items slide in one by one
 * - photos: the frame wipes open from the bottom while the photo settles
 * - tables, quotes, figures: fade up
 * - [data-count]: the number counts up when it appears
 * - blog posts: thin reading-progress bar under the top edge
 */

type Gsap = typeof import('gsap').gsap;
type ScrollTriggerType = typeof import('gsap/ScrollTrigger').ScrollTrigger;
type Lib = { gsap: Gsap; ScrollTrigger: ScrollTriggerType };

let libPromise: Promise<Lib> | null = null;
function loadLib(): Promise<Lib> {
  if (!libPromise) {
    libPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([g, st]) => {
      g.gsap.registerPlugin(st.ScrollTrigger);
      return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger };
    });
  }
  return libPromise;
}

const EASE = 'power3.out';
const SKIP =
  'form, [data-motion], [data-motion-skip], header.sticky, footer, nav, [role="dialog"], [aria-hidden="true"], [class*="animate-"], [style*="opacity"], [style*="transform"]';

function isSkipped(el: Element): boolean {
  if (el.closest(SKIP)) return true;
  const section = el.closest('section');
  return !!section && !!section.querySelector('form');
}

/** Only elements the visitor has not seen yet (below the fold, and actually rendered). */
function isBelowFold(el: Element): boolean {
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && r.top > window.innerHeight * 0.92;
}

function hasAnimatedAncestor(el: Element, taken: Set<Element>): boolean {
  for (let p = el.parentElement; p; p = p.parentElement) if (taken.has(p)) return true;
  return false;
}

type Reveal = { els: Element[]; from: gsap.TweenVars; to: gsap.TweenVars; stagger: number };

function init({ gsap, ScrollTrigger }: Lib, pathname: string) {
  const main = document.querySelector('main') ?? document.body;
  const taken = new Set<Element>();
  const pick = (el: Element) => {
    if (taken.has(el) || hasAnimatedAncestor(el, taken) || isSkipped(el) || !isBelowFold(el)) return false;
    taken.add(el);
    return true;
  };

  // Phase 1, reads only: the layout is measured once and nothing is written yet.
  const reveals: Reveal[] = [];
  const add = (els: Element[], from: gsap.TweenVars, to: gsap.TweenVars, stagger = 0.09) => {
    if (els.length) reveals.push({ els, from, to, stagger });
  };

  // 1. Section headings: the small heading group (eyebrow, h2, intro) rises in as a sequence.
  main.querySelectorAll('h2').forEach((h2) => {
    const parent = h2.parentElement;
    const kids = parent ? Array.from(parent.children) : [];
    const isGroup =
      !!parent &&
      parent !== main &&
      kids.length <= 4 &&
      kids.every((k) => !k.matches('.grid, ul, ol, table, form, img, section')) &&
      parent.getBoundingClientRect().height < 420;
    add((isGroup ? kids : [h2]).filter(pick), { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8 }, 0.12);
  });

  // 2. Cards, tiles and columns inside grids.
  const gridItems: Element[] = [];
  main.querySelectorAll('.grid').forEach((grid) => {
    const kids = Array.from(grid.children);
    if (kids.length < 2) return;
    kids.forEach((k) => {
      if (k.getBoundingClientRect().height <= window.innerHeight * 1.3 && pick(k)) gridItems.push(k);
    });
  });
  add(gridItems, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.75 });

  // 3. Checklists: lists whose items carry an icon.
  main.querySelectorAll('ul, ol').forEach((list) => {
    const items = Array.from(list.children).filter((li) => li.matches('li') && li.querySelector('svg, i'));
    if (items.length >= 3 && items.length <= 12) {
      add(items.filter(pick), { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.55 }, 0.07);
    }
  });

  // 4. Tables, quotes and figures.
  add(Array.from(main.querySelectorAll('table, blockquote, figure')).filter(pick), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 });

  // 5. Photos inside a cropped frame: the frame wipes open from the bottom while the photo settles.
  const masks: { img: Element; frame: Element; radius: string }[] = [];
  main.querySelectorAll('img').forEach((img) => {
    if (isSkipped(img) || !isBelowFold(img)) return;
    let frame: Element | null = img.parentElement;
    for (let i = 0; frame && i < 3 && getComputedStyle(frame).overflow !== 'hidden'; i++) frame = frame.parentElement;
    if (!frame || getComputedStyle(frame).overflow !== 'hidden') return;
    const h = img.getBoundingClientRect().height;
    // Only frames that tightly wrap the photo (never a whole section that happens to clip).
    if (h >= 160 && frame.getBoundingClientRect().height <= h * 1.3 && !masks.some((m) => m.frame === frame)) {
      masks.push({ img, frame, radius: getComputedStyle(frame).borderRadius || '0px' });
    }
  });

  // 6. Count-up numbers: <span data-count>18</span>, keeps decimals and any prefix/suffix.
  type Counter = { el: HTMLElement; raw: string; head: string; tail: string; target: number; decimals: number };
  const counters: Counter[] = [];
  main.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const raw = el.textContent ?? '';
    const m = raw.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m || isSkipped(el) || !isBelowFold(el)) return;
    counters.push({
      el,
      raw,
      head: m[1],
      tail: m[3],
      target: parseFloat(m[2].replace(/,/g, '')),
      decimals: (m[2].split('.')[1] ?? '').length,
    });
  });
  const fmt = (c: Counter, v: number) =>
    `${c.head}${v.toLocaleString('en-US', { minimumFractionDigits: c.decimals, maximumFractionDigits: c.decimals })}${c.tail}`;

  const article = pathname.startsWith('/blog/') ? main.querySelector('article') : null;

  const ctx = gsap.context(() => {
    // Phase 2, writes only: put everything in its starting state.
    reveals.forEach((r) => gsap.set(r.els, r.from));
    masks.forEach(({ img, frame, radius }) => {
      gsap.set(frame, { clipPath: `inset(100% 0% 0% 0% round ${radius})` });
      gsap.set(img, { scale: 1.3 });
    });
    counters.forEach((c) => {
      c.el.textContent = fmt(c, 0);
    });
    let bar: HTMLDivElement | null = null;
    if (article) {
      bar = document.createElement('div');
      bar.setAttribute('aria-hidden', 'true');
      bar.className = 'reading-progress';
      document.body.appendChild(bar);
    }

    // Phase 3: scroll triggers.
    reveals.forEach((r) =>
      ScrollTrigger.batch(r.els, {
        start: 'top 90%',
        once: true,
        onEnter: (group) => gsap.to(group, { ...r.to, stagger: r.stagger, ease: EASE, overwrite: true }),
      })
    );
    masks.forEach(({ img, frame, radius }) =>
      ScrollTrigger.create({
        trigger: frame,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          gsap
            .timeline()
            .to(frame, { clipPath: `inset(0% 0% 0% 0% round ${radius})`, duration: 1.3, ease: 'expo.inOut' })
            .to(img, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0.1)
            .set(frame, { clearProps: 'clipPath' }),
      })
    );
    counters.forEach((c) => {
      const state = { v: 0 };
      ScrollTrigger.create({
        trigger: c.el,
        start: 'top 92%',
        once: true,
        onEnter: () =>
          gsap.to(state, {
            v: c.target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              c.el.textContent = fmt(c, state.v);
            },
            onComplete: () => {
              c.el.textContent = c.raw;
            },
          }),
      });
    });
    if (bar && article) {
      gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: article, start: 'top top', end: 'bottom bottom', scrub: 0.3 } });
    }
  });

  // Lazy images and fonts change the page height after start: keep trigger positions right.
  let t: ReturnType<typeof setTimeout> | undefined;
  const ro = new ResizeObserver(() => {
    clearTimeout(t);
    t = setTimeout(() => ScrollTrigger.refresh(), 200);
  });
  ro.observe(document.body);

  return () => {
    clearTimeout(t);
    ro.disconnect();
    ctx.revert();
    counters.forEach((c) => {
      c.el.textContent = c.raw;
    });
    document.querySelectorAll('.reading-progress').forEach((b) => b.remove());
  };
}

export default function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Demo / test runs of the quote form stay completely static.
    if (new URLSearchParams(window.location.search).get('demo') === '1') return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;
    let idleId: number | undefined;
    // Without an interaction nothing below the fold is ever seen, so GSAP is only fetched on the
    // first scroll / touch / key / mouse move: visitors who only look at the top never download it.
    const events = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel', 'mousemove'] as const;

    const start = () => {
      events.forEach((ev) => window.removeEventListener(ev, start, true));
      loadLib().then((lib) => {
        if (cancelled) return;
        // Measure in an idle slice so the first scroll frames stay smooth.
        const w = window as any;
        const run = () => {
          if (!cancelled) cleanup = init(lib, pathname);
        };
        idleId = w.requestIdleCallback ? w.requestIdleCallback(run, { timeout: 400 }) : window.setTimeout(run, 50);
      });
    };

    if (libPromise) {
      start(); // already loaded on a previous page (client-side navigation)
    } else {
      events.forEach((ev) => window.addEventListener(ev, start, { capture: true, passive: true, once: true }));
    }

    return () => {
      cancelled = true;
      events.forEach((ev) => window.removeEventListener(ev, start, true));
      const w = window as any;
      if (idleId !== undefined) (w.cancelIdleCallback ? w.cancelIdleCallback(idleId) : clearTimeout(idleId));
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
