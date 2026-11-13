"use client";

import React, { useRef } from 'react';
import { useMotion } from '@/lib/motion';

/**
 * A big statement whose words light up one by one as it scrolls through the screen.
 * Fully readable without JS; GSAP dims the words and ties their brightness to scroll.
 */
export default function ScrubStatement({ text, note }: { text: string; note?: string }) {
  const ref = useRef<HTMLElement>(null);

  useMotion(ref, ({ gsap }, root) => {
    const words = root.querySelectorAll('.scrub-w');
    gsap.fromTo(
      words,
      { opacity: 0.16 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.12,
        scrollTrigger: { trigger: root.querySelector('p'), start: 'top 82%', end: 'bottom 45%', scrub: 0.6 },
      }
    );
    const glow = root.querySelector('.scrub-glow');
    if (glow) {
      gsap.fromTo(glow, { xPercent: -30 }, { xPercent: 30, ease: 'none', scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    }
  });

  return (
    <section ref={ref} data-motion="" className="cv relative isolate overflow-hidden bg-star-dark py-24 text-white lg:py-36">
      <div aria-hidden="true" className="scrub-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(0,74,173,0.5),transparent)]" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <svg viewBox="0 0 20 20" className="mb-8 h-6 w-6 text-blue-300" fill="currentColor" aria-hidden="true">
          <path d="M10 0l2.4 7.6L20 10l-7.6 2.4L10 20l-2.4-7.6L0 10l7.6-2.4z" />
        </svg>
        <p className="font-serif text-[1.9rem] font-medium leading-[1.22] tracking-tight sm:text-5xl sm:leading-[1.18] lg:text-[3.6rem]">
          {text.split(' ').map((w, i) => (
            <span key={i} className="scrub-w">
              {w}{' '}
            </span>
          ))}
        </p>
        {note && <p className="mt-10 font-handwriting text-3xl text-blue-300">{note}</p>}
      </div>
    </section>
  );
}
