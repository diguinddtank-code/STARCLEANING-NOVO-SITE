"use client";

import React, { useRef, useState } from 'react';
import { CircleSlash } from 'lucide-react';
import { useMotion, isBelowFold } from '@/lib/motion';
import { ICONS, Check, Eyebrow } from './ui';
import SplitWords from '@/components/motion/SplitWords';
import type { ChecklistRoom } from '@/lib/servicesData';

/**
 * Room-by-room checklist. Desktop: a sticky room index that follows the scroll; each item's
 * check mark is drawn as it comes into view. Mobile: stacked rooms. Complete without JS.
 */
export default function RoomChecklist({
  eyebrow = 'What’s included',
  title,
  accent,
  intro,
  rooms,
  extra,
  notIncluded,
}: {
  eyebrow?: string;
  title: string;
  accent: string;
  intro: string;
  rooms: ChecklistRoom[];
  extra?: string;
  notIncluded?: string[];
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const total = rooms.reduce((n, r) => n + r.items.length, 0) + (extra ? 1 : 0);

  useMotion(ref, ({ gsap, ScrollTrigger }, root) => {
    // Section title words
    const title = root.querySelector('[data-anim="words"]');
    if (title && isBelowFold(title)) {
      const w = title.querySelectorAll('.swi');
      gsap.set(w, { yPercent: 110 });
      ScrollTrigger.create({ trigger: title, start: 'top 88%', once: true, onEnter: () => gsap.to(w, { yPercent: 0, duration: 1.1, stagger: 0.045, ease: 'expo.out' }) });
    }

    // Items: the check draws, the text settles in
    root.querySelectorAll<HTMLElement>('.chk-item').forEach((item) => {
      if (!isBelowFold(item, 0.95)) return;
      const tick = item.querySelector('.tick-path');
      const text = item.querySelector('.chk-text');
      gsap.set(tick, { strokeDashoffset: 1 });
      gsap.set(text, { autoAlpha: 0.15, x: 14 });
      ScrollTrigger.create({
        trigger: item,
        start: 'top 86%',
        once: true,
        onEnter: () => {
          gsap.to(tick, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' });
          gsap.to(text, { autoAlpha: 1, x: 0, duration: 0.7, ease: 'expo.out' });
        },
      });
    });

    // Room panels: lift in, and drive the sticky index
    root.querySelectorAll<HTMLElement>('.room-panel').forEach((panel, i) => {
      if (isBelowFold(panel)) {
        gsap.set(panel, { y: 60, autoAlpha: 0 });
        ScrollTrigger.create({ trigger: panel, start: 'top 88%', once: true, onEnter: () => gsap.to(panel, { y: 0, autoAlpha: 1, duration: 1, ease: 'expo.out' }) });
      }
      ScrollTrigger.create({
        trigger: panel,
        start: 'top 55%',
        end: 'bottom 55%',
        onToggle: (self) => self.isActive && setActive(i),
      });
    });

    // Progress bar in the index
    const bar = root.querySelector('.room-progress');
    const list = root.querySelector('.room-list');
    if (bar && list) {
      gsap.fromTo(bar, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: list, start: 'top 55%', end: 'bottom 55%', scrub: 0.4 } });
    }
  });

  const go = (i: number) => {
    const el = ref.current?.querySelectorAll<HTMLElement>('.room-panel')[i];
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
  };

  return (
    <section ref={ref} data-motion="" className="cv bg-[#F7F4EF] py-20 lg:py-32" aria-labelledby="checklist-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Sticky index */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id="checklist-title" data-anim="words" className="font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-star-dark sm:text-5xl">
              <SplitWords parts={[`${title} `, { text: accent, className: 'italic text-star-blue' }]} />
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">{intro}</p>

            <div className="relative mt-10 hidden pl-6 lg:block">
              <span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-star-dark/10" />
              <span className="room-progress absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-star-blue" />
              <ol className="space-y-1">
                {rooms.map((r, i) => {
                  const Icon = ICONS[r.icon];
                  return (
                    <li key={r.room}>
                      <button
                        type="button"
                        onClick={() => go(i)}
                        className={`group flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition-all duration-500 ${
                          active === i ? 'bg-white shadow-[0_12px_30px_-18px_rgba(0,40,85,0.45)]' : 'hover:bg-white/60'
                        }`}
                      >
                        <span className={`font-serif text-sm tabular-nums transition-colors ${active === i ? 'text-star-blue' : 'text-slate-400'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <Icon className={`h-5 w-5 transition-colors ${active === i ? 'text-star-blue' : 'text-slate-400'}`} />
                        <span className={`flex-1 font-semibold transition-colors ${active === i ? 'text-star-dark' : 'text-slate-500'}`}>{r.room}</span>
                        <span className="text-xs font-bold text-slate-400">{r.items.length} tasks</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-6 text-sm font-semibold text-slate-500">
                <span className="font-serif text-2xl text-star-dark">{total}</span> tasks on every visit’s checklist
              </p>
            </div>
          </div>
        </div>

        {/* Rooms */}
        <div className="room-list space-y-6 lg:col-span-7">
          {rooms.map((r, i) => {
            const Icon = ICONS[r.icon];
            return (
              <article key={r.room} className="room-panel rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(0,40,85,0.4)] ring-1 ring-star-dark/5 sm:p-9">
                <header className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-star-blue/[0.07] text-star-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-serif text-sm text-slate-400">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-serif text-2xl font-medium text-star-dark">{r.room}</h3>
                  </div>
                </header>
                <ul className="space-y-4">
                  {r.items.map((it) => (
                    <li key={it} className="chk-item flex items-start gap-3.5">
                      <Check className="mt-0.5 h-6 w-6 shrink-0" />
                      <span className="chk-text text-[15px] leading-relaxed text-slate-700 sm:text-base">{it}</span>
                    </li>
                  ))}
                  {extra && i === rooms.length - 1 && (
                    <li className="chk-item flex items-start gap-3.5 rounded-xl bg-star-blue/[0.05] p-3">
                      <Check className="mt-0.5 h-6 w-6 shrink-0" />
                      <span className="chk-text text-[15px] font-semibold leading-relaxed text-star-dark sm:text-base">{extra}</span>
                    </li>
                  )}
                </ul>
              </article>
            );
          })}

          {notIncluded && notIncluded.length > 0 && (
            <aside className="room-panel rounded-[1.75rem] border border-dashed border-star-dark/20 p-6 sm:p-9">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                <CircleSlash className="h-4 w-4" /> Good to know: not included
              </h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {notIncluded.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-[15px] text-slate-600">
                    <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-slate-300" />
                    {n}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
