import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Motion from '@/components/motion/Motion';
import { Eyebrow, Title, Stars, GoogleG } from './ui';
import { homeReviews } from '@/data/reviews';
import { FACTS } from '@/lib/site';
import { BUSINESS_CONFIG } from '@/lib/businessConfig';
import type { ReviewCardProps } from '@/components/ReviewCard';

/** Verified Google reviews in two rows drifting in opposite directions (pause on hover). */
export default function ReviewWall({ authors, place }: { authors?: string[]; place?: string }) {
  const picked: ReviewCardProps[] = authors?.length
    ? [...authors.map((a) => homeReviews.find((r) => r.author === a)).filter(Boolean) as ReviewCardProps[], ...homeReviews.filter((r) => !authors.includes(r.author))]
    : homeReviews;
  const strong = picked.filter((r) => r.text.length >= 60);

  const card = (r: ReviewCardProps, hidden: boolean) => (
    <figure key={`${r.author}-${hidden}`} aria-hidden={hidden || undefined} className="mx-2.5 flex w-[19rem] shrink-0 flex-col rounded-[1.5rem] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(0,40,85,0.35)] ring-1 ring-star-dark/5 sm:w-[23rem] sm:p-7">
      <div className="flex items-center justify-between">
        <Stars className="h-4 w-4" />
        <GoogleG className="h-5 w-5" />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">“{r.text}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-star-blue/10 font-serif text-sm font-semibold text-star-blue">{r.author.charAt(0)}</span>
        <span>
          <span className="block text-sm font-bold text-star-dark">{r.author}</span>
          <span className="block text-xs text-slate-500">Google review{r.date ? ` · ${r.date}` : ''}</span>
        </span>
      </figcaption>
    </figure>
  );

  const row = (list: ReviewCardProps[], reverse: boolean) => (
    <div className="ticker overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className={`ticker-track flex w-max items-stretch ${reverse ? 'reverse' : ''}`} style={{ animationDuration: '70s' }}>
        {list.map((r) => card(r, false))}
        {list.map((r) => card(r, true))}
      </div>
    </div>
  );

  return (
    <Motion as="section" className="cv overflow-hidden bg-[#F7F4EF] py-20 lg:py-28" aria-labelledby="reviews-title">
      <div className="mx-auto mb-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
        <div className="lg:col-span-7">
          <Eyebrow>Real Google reviews</Eyebrow>
          <Title id="reviews-title" lead={place ? `What ${place} neighbors` : 'What our clients'} accent="say about us." />
        </div>
        <div data-anim="up" className="flex items-center gap-5 lg:col-span-5 lg:justify-end">
          <p className="font-serif text-7xl font-medium leading-none text-star-dark">
            <span data-anim="count">{FACTS.rating}</span>
          </p>
          <div>
            <Stars className="h-5 w-5" />
            <p className="mt-1 text-sm font-semibold text-slate-600">{FACTS.reviewCountDisplay} reviews on Google</p>
            <a href={BUSINESS_CONFIG.googleMapsShareUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-star-blue hover:underline">
              Read them all <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
      <div data-anim="up">
        {row(strong, false)}
      </div>
    </Motion>
  );
}
