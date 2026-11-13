import React from 'react';
import { MessageSquareText, Phone, ShieldCheck, Clock3, KeyRound } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { FACTS } from '@/lib/site';

/**
 * Closing section with the quote form. The form component is used exactly as everywhere else
 * (same fields, webhook and tracking); this section only frames it.
 */
export default function BookSection({ place, service }: { place?: string; service?: string }) {
  const what = service ? `${service.toLowerCase()}` : 'cleaning';
  return (
    <section id="book" className="cv relative isolate scroll-mt-20 overflow-hidden bg-star-dark py-20 text-white lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-60 -top-20 -z-10 h-[44rem] w-[44rem] bg-[radial-gradient(closest-side,rgba(0,74,173,0.55),transparent)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5 lg:pt-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Free quote · 60 seconds</span>
          </div>
          <h2 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Your time back <span className="italic text-blue-300">starts here.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-blue-100 sm:text-lg">
            Tell us about your home and we’ll confirm your exact {what} price{place ? ` in ${place}` : ''}, personally. No credit card, no obligation.
          </p>

          <ol className="mt-10 space-y-5">
            {[
              { icon: Clock3, t: 'Answer a few quick questions', d: 'Bedrooms, bathrooms, size and how often.' },
              { icon: MessageSquareText, t: 'We text or call you back', d: `With your exact price and the next open dates. ${FACTS.hours}.` },
              { icon: KeyRound, t: 'Your team arrives fully equipped', d: 'You don’t need to be home or buy a thing.' },
              { icon: ShieldCheck, t: 'Covered by our 24-hour guarantee', d: 'Anything missed is re-cleaned free.' },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-200 ring-1 ring-white/15">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold">{t}</span>
                  <span className="block text-sm text-blue-200">{d}</span>
                </span>
              </li>
            ))}
          </ol>

          <a href={`tel:${FACTS.phoneRaw}`} className="mt-10 inline-flex items-center gap-2 text-base font-bold text-white underline decoration-blue-300/50 underline-offset-4 hover:decoration-white">
            <Phone className="h-4 w-4 text-blue-300" /> Prefer to talk? {FACTS.phone}
          </a>
        </div>

        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
