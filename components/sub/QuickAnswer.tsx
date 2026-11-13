import React from 'react';
import Motion from '@/components/motion/Motion';
import { Eyebrow, Title } from './ui';

/**
 * Answer-first block: a direct, quotable answer (what search engines and AI assistants lift into
 * their answers) plus the key facts as a definition list.
 */
export default function QuickAnswer({
  question,
  answer,
  facts,
  updated = 'November 2026',
}: {
  question: string;
  answer: string;
  facts: { label: string; value: string }[];
  updated?: string;
}) {
  return (
    <Motion as="section" className="bg-white py-20 lg:py-28" aria-labelledby="quick-answer">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <Eyebrow>The short answer</Eyebrow>
          <Title id="quick-answer" lead={question} />
          <p data-anim="up" className="mt-5 text-sm text-slate-500">
            Updated {updated} · Written by the Star Cleaning SC team
          </p>
        </div>
        <div className="lg:col-span-7">
          <p data-anim="up" className="font-serif text-xl leading-relaxed text-slate-700 sm:text-2xl sm:leading-relaxed">
            {answer}
          </p>
          <dl data-anim="stagger" className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-[#FAFAF8] p-5">
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">{f.label}</dt>
                <dd className="mt-2 text-[15px] font-bold leading-snug text-star-dark">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Motion>
  );
}
