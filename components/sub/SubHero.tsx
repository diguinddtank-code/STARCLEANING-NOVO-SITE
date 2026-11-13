import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck, BadgeCheck, Flag, ChevronRight } from 'lucide-react';
import { Stars, GoogleG } from './ui';
import { FACTS } from '@/lib/site';
import type { ReviewCardProps } from '@/components/ReviewCard';

type Props = {
  crumbs: { name: string; path: string }[];
  eyebrow: string;
  title: [string, string];
  lead: string;
  image: { src: string; alt: string };
  watermark: string;
  card?: string;
  review?: ReviewCardProps;
  cta?: { label: string; href: string };
};

const firstSentence = (t: string) => {
  const s = t.replace(/\s…$/, '').split(/(?<=[.!?])\s/)[0];
  return s.length > 150 ? `${s.slice(0, 147).trim()}…` : s;
};

/**
 * Inner-page hero. Entrance is CSS-only (starts with the first paint): the h1 is never hidden,
 * the photo only scales in. Floating review card uses a real Google review.
 */
export default function SubHero({ crumbs, eyebrow, title, lead, image, watermark, card, review, cta = { label: 'Get my free quote', href: '#book' } }: Props) {
  return (
    <section data-motion="" className="relative isolate overflow-hidden bg-[#F7F4EF]">
      {/* Watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 left-0 right-0 -z-10 select-none overflow-hidden whitespace-nowrap text-center font-serif text-[22vw] font-medium leading-none tracking-tight text-outline lg:-bottom-10 lg:text-[15vw]">
        {watermark}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] bg-[radial-gradient(closest-side,rgba(0,74,173,0.07),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="sub-rise mb-8 lg:mb-12">
          <ol className="flex flex-wrap items-center gap-1 text-xs font-semibold text-slate-500">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3 text-slate-400" aria-hidden="true" />}
                {i < crumbs.length - 1 ? (
                  <Link prefetch={false} href={c.path} className="transition-colors hover:text-star-blue">
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-star-dark">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="sub-rise sub-d1 mb-5 flex items-center gap-3">
              <span className="sub-draw h-px w-10 bg-star-blue" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-star-blue">{eyebrow}</span>
            </div>

            <h1 className="font-serif text-[2.6rem] font-medium leading-[1.04] tracking-tight text-star-dark sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]">
              {title[0]}{' '}
              <span className="relative inline italic text-star-blue">
                {title[1]}
                <svg aria-hidden="true" className="sub-underline pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-star-blue/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2 9 C 50 2, 120 2, 198 7" pathLength={1} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{lead}</p>

            <div className="sub-rise sub-d4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={cta.href}
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-star-blue px-8 py-4 text-base font-bold text-white shadow-[0_14px_30px_-10px_rgba(0,74,173,0.6)] transition-all hover:-translate-y-0.5 hover:bg-star-dark"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${FACTS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-star-dark/15 bg-white px-7 py-4 text-base font-bold text-star-dark transition-colors hover:border-star-blue/40 hover:text-star-blue"
              >
                <Phone className="h-4 w-4 text-star-blue" />
                Text or call {FACTS.phone}
              </a>
            </div>

            <ul className="sub-rise sub-d5 mt-9 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 border-t border-star-dark/10 pt-6 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2 whitespace-nowrap">
                <GoogleG className="h-4 w-4" />
                {FACTS.rating} · {FACTS.reviewCountDisplay} reviews
              </li>
              <li className="flex items-center gap-2 whitespace-nowrap">
                <Flag className="h-4 w-4 text-star-blue" /> Veteran-owned
              </li>
              <li className="flex items-center gap-2 whitespace-nowrap">
                <BadgeCheck className="h-4 w-4 text-star-blue" /> Background-checked
              </li>
              <li className="flex items-center gap-2 whitespace-nowrap">
                <ShieldCheck className="h-4 w-4 text-star-blue" /> 24h re-clean guarantee
              </li>
            </ul>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] sm:aspect-[5/5] lg:aspect-[4/5]">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-slate-200 shadow-[0_40px_90px_-30px_rgba(0,40,85,0.55)] lg:rounded-[2.5rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  className="sub-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-star-dark/45 via-transparent to-transparent" />
              </div>

              {/* Rating seal */}
              <div className="sub-rise sub-d5 absolute -right-2 top-6 sm:-right-6 lg:-right-8">
                <div className="sub-float rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-black/5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-medium leading-none text-star-dark">{FACTS.rating}</span>
                    <div>
                      <Stars className="h-3.5 w-3.5" />
                      <p className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <GoogleG className="h-3 w-3" /> {FACTS.reviewCountDisplay} Google reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {card && (
                <div className="sub-rise sub-d6 absolute right-4 top-1/2 hidden rounded-full bg-star-dark px-4 py-2 text-xs font-bold text-white shadow-lg sm:block lg:-right-4">
                  {card}
                </div>
              )}

              {/* Real review */}
              {review && (
                <figure className="sub-rise sub-d6 absolute -bottom-8 left-3 right-3 sm:-left-6 sm:right-auto sm:max-w-[20rem] lg:-left-10">
                  <div className="rounded-2xl bg-white p-5 shadow-[0_24px_50px_-20px_rgba(0,40,85,0.45)] ring-1 ring-black/5">
                    <Stars className="h-3.5 w-3.5" />
                    <blockquote className="mt-2 font-serif text-[15px] italic leading-snug text-slate-700">“{firstSentence(review.text)}”</blockquote>
                    <figcaption className="mt-3 flex items-center gap-2 text-xs font-bold text-star-dark">
                      <GoogleG className="h-3.5 w-3.5" />
                      {review.author} <span className="font-medium text-slate-400">· Google review</span>
                    </figcaption>
                  </div>
                </figure>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
