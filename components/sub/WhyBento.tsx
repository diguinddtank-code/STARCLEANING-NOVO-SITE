import React from 'react';
import Image from 'next/image';
import Motion from '@/components/motion/Motion';
import Spotlight from './Spotlight';
import { Eyebrow, Title } from './ui';
import { FACTS } from '@/lib/site';

/**
 * "Why us" as a bento: one large photo card with the core promise, the local reasons as
 * numbered cards with a pointer-following glow, and a fact strip.
 */
const SPANS = ['md:col-span-6 lg:col-span-7', 'md:col-span-3 lg:col-span-4', 'md:col-span-3 lg:col-span-3'];

export default function WhyBento({
  eyebrow,
  title,
  accent,
  items,
  image,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  items: { title: string; desc: string }[];
  image: { src: string; alt: string };
}) {
  return (
    <Motion as="section" className="cv bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Title lead={title} accent={accent} />
          </div>
          <p data-anim="up" className="text-base leading-relaxed text-slate-600 lg:col-span-5 lg:text-lg">
            Same promise in every home: a background-checked team, a checklist we actually follow, and a free re-clean if anything was missed.
          </p>
        </div>

        <Spotlight className="grid gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Photo card */}
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-star-dark md:col-span-6 lg:col-span-5 lg:row-span-2 lg:min-h-[30rem]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="scale-110 object-cover opacity-80" data-parallax="10" />
            <div className="absolute inset-0 bg-gradient-to-t from-star-dark via-star-dark/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="font-serif text-6xl font-medium leading-none sm:text-7xl">
                <span data-anim="count">{FACTS.years}</span>
                <span className="ml-2 text-2xl italic text-blue-300">years</span>
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-blue-50">
                Veteran-owned and independent. Not a franchise, not an app: when you call, you talk to us.
              </p>
            </div>
          </div>

          {items.map((it, i) => (
            <div
              key={it.title}
              className={`spotlight group rounded-[1.75rem] border border-slate-200/80 bg-[#FAFAF8] p-7 transition-colors duration-500 hover:border-star-blue/30 sm:p-8 ${SPANS[i % SPANS.length]}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm text-star-blue">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-2 w-2 rounded-full bg-star-blue/20 transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-star-blue" />
              </div>
              <h3 className="mt-8 font-serif text-2xl font-medium leading-tight text-star-dark">{it.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{it.desc}</p>
            </div>
          ))}
        </Spotlight>
      </div>
    </Motion>
  );
}
