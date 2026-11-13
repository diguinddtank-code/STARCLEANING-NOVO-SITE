import React from 'react';
import { Plus, Phone, MessageSquareText } from 'lucide-react';
import Motion from '@/components/motion/Motion';
import { Eyebrow, Title } from './ui';
import { FACTS } from '@/lib/site';

/** FAQ with native <details> (crawlable, accessible, no JS) that opens smoothly where supported. */
export default function Faq({ faqs, title = 'Questions,', accent = 'answered.' }: { faqs: { q: string; a: string }[]; title?: string; accent?: string }) {
  return (
    <Motion as="section" className="cv bg-white py-20 lg:py-32" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>FAQ</Eyebrow>
            <Title id="faq-title" lead={title} accent={accent} />
            <div data-anim="up" className="mt-8 rounded-[1.5rem] bg-star-dark p-7 text-white">
              <p className="font-serif text-2xl font-medium leading-snug">Still wondering about something?</p>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">Text or call. A real person from our team answers, {FACTS.hours}.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={`sms:${FACTS.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-star-dark transition-colors hover:bg-blue-50">
                  <MessageSquareText className="h-4 w-4 text-star-blue" /> Text us
                </a>
                <a href={`tel:${FACTS.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                  <Phone className="h-4 w-4" /> {FACTS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-anim="stagger" className="faq divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} className="group" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left">
                <h3 className="font-serif text-xl font-medium leading-snug text-star-dark transition-colors group-hover:text-star-blue sm:text-2xl">{f.q}</h3>
                <span className="faq-icon mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-star-dark transition-all duration-300">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-12 text-base leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Motion>
  );
}
