import React from 'react';
import Motion from '@/components/motion/Motion';
import { FACTS } from '@/lib/site';

/** Navy band of verified numbers that count up as they appear. */
export default function StatsBand() {
  const stats = [
    { v: String(FACTS.years), suffix: '', label: 'years caring for Lowcountry homes' },
    { v: FACTS.rating, suffix: '★', label: `Google rating from ${FACTS.reviewCountDisplay} reviews` },
    { v: '2', prefix: '$', suffix: 'M', label: 'general liability coverage' },
    { v: '24', suffix: 'h', label: 'free re-clean guarantee' },
  ];
  return (
    <Motion as="section" className="cv relative isolate overflow-hidden bg-star-dark py-16 text-white lg:py-20" aria-label="Star Cleaning SC in numbers">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-star-blue/40 to-transparent" />
      <dl data-anim="stagger" className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse border-l border-white/15 pl-5 sm:pl-7">
            <dt className="mt-2 text-sm leading-snug text-blue-200">{s.label}</dt>
            <dd className="font-serif text-5xl font-medium leading-none sm:text-6xl">
              {s.prefix}
              <span data-anim="count">{s.v}</span>
              <span className="text-blue-300">{s.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Motion>
  );
}
