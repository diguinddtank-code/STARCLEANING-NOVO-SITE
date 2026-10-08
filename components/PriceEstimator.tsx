"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SIZE_RANGES, FREQUENCIES, planEstimate, high, money, type Frequency } from '@/lib/pricing';

const pill = (active: boolean) =>
  `whitespace-nowrap rounded-xl border px-2 py-3 text-[13px] font-bold transition-all ${
    active
      ? 'border-star-blue bg-star-blue text-white shadow-[0_8px_20px_-8px_rgba(0,74,173,0.7)]'
      : 'border-slate-200 bg-white text-slate-700 hover:border-star-blue/40 hover:text-star-blue'
  }`;

const PriceEstimator: React.FC = () => {
  const [sizeIndex, setSizeIndex] = useState(2);
  const [optionIndex, setOptionIndex] = useState(0);
  const [frequency, setFrequency] = useState<Frequency>('Bi-Weekly');

  const range = SIZE_RANGES[sizeIndex];
  const safeOption = Math.min(optionIndex, range.options.length - 1);
  const plan = planEstimate(sizeIndex, safeOption, frequency);

  return (
    <section id="estimate" className="border-t border-slate-100 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-star-blue"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-star-blue">Transparent pricing</span>
            <span className="h-px w-8 bg-star-blue"></span>
          </div>
          <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight text-star-dark sm:text-4xl md:text-5xl">
            See your estimate <span className="italic text-star-blue">in seconds.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Pick your home size and the clean you need. No sign-up, no obligation.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(0,40,85,0.35)] lg:grid-cols-12">
          {/* Controls */}
          <div className="flex flex-col justify-center space-y-6 p-5 sm:p-8 lg:col-span-7 lg:p-10">
            <div>
              <label htmlFor="estimate-size" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Home size
              </label>
              <div className="relative">
                <select
                  id="estimate-size"
                  value={sizeIndex}
                  onChange={(e) => setSizeIndex(Number(e.target.value))}
                  className="block w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-3.5 pl-4 pr-11 text-base font-semibold text-slate-900 transition-colors focus:border-star-blue focus:outline-none focus:ring-2 focus:ring-star-blue/20"
                >
                  {SIZE_RANGES.map((r, i) => (
                    <option key={r.label} value={i}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
              </div>
            </div>

            {range.options.length > 1 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Bedrooms and bathrooms</p>
                <div className="grid grid-cols-2 gap-2">
                  {range.options.map((o, i) => (
                    <button key={`${o.beds}-${o.baths}`} type="button" aria-pressed={i === safeOption} onClick={() => setOptionIndex(i)} className={pill(i === safeOption)}>
                      {o.beds} bed &middot; {o.baths} bath
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">How often</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {FREQUENCIES.map((f) => (
                  <button key={f} type="button" aria-pressed={f === frequency} onClick={() => setFrequency(f)} className={pill(f === frequency)}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="relative flex flex-col justify-between gap-6 bg-gradient-to-br from-star-dark via-[#06356f] to-star-blue p-5 text-white sm:p-8 lg:col-span-5 lg:p-10">

            <div aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Estimated price</p>
              <div className="mt-4 divide-y divide-white/15">
                <div className="flex items-baseline justify-between gap-3 whitespace-nowrap pb-4">
                  <span className="text-sm font-semibold text-blue-100">{plan.initialLabel}</span>
                  <span className="text-sm text-blue-200">
                    up to{' '}
                    <motion.span
                      key={`${sizeIndex}-${safeOption}-${frequency}-i`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block font-serif text-3xl font-medium tracking-tight text-white sm:text-5xl"
                    >
                      {money(high(plan.initial))}
                    </motion.span>
                  </span>
                </div>
                {plan.recurring && (
                  <div className="flex items-baseline justify-between gap-3 whitespace-nowrap pt-4">
                    <span className="text-sm font-semibold text-blue-100">Then {frequency}</span>
                    <span className="text-sm text-blue-200">
                      up to{' '}
                      <motion.span
                        key={`${sizeIndex}-${safeOption}-${frequency}-r`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block font-serif text-3xl font-medium tracking-tight text-white sm:text-5xl"
                      >
                        {money(high(plan.recurring))}
                      </motion.span>
                      <span className="ml-1">/visit</span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-[13px] leading-relaxed text-blue-100/90">
                Just an estimate, not a fixed price. We&apos;ll go over your exact price together before we start, and we&apos;re always happy to work with you on it.
              </p>
              <a
                href="#quote-form"
                className="mt-5 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-base font-black text-star-blue shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Get my exact quote
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
