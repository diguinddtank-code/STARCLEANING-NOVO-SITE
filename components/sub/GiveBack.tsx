import React from 'react';
import Image from 'next/image';
import Motion from '@/components/motion/Motion';
import SplitWords from '@/components/motion/SplitWords';

/**
 * Cleaning for a Reason partnership. No filter blurs (they rendered as a grey smear over the copy);
 * the seal sits in a slowly turning ring of text instead.
 */
export default function GiveBack() {
  return (
    <Motion as="section" className="cv relative overflow-hidden bg-[#FBF5F7] py-20 lg:py-28" aria-labelledby="give-back-title">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className="flex justify-center lg:col-span-5">
          <div data-anim="pop" className="relative h-64 w-64 sm:h-72 sm:w-72">
            <svg viewBox="0 0 200 200" className="give-ring absolute inset-0 h-full w-full text-pink-500" aria-hidden="true">
              <defs>
                <path id="give-ring-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
              </defs>
              <text className="fill-current text-[10.5px] font-bold uppercase tracking-[0.32em]">
                <textPath href="#give-ring-path">Proud partner · Cleaning for a Reason · Clean homes for cancer patients ·</textPath>
              </text>
            </svg>
            <div className="absolute inset-9 rounded-full bg-white shadow-[0_30px_60px_-30px_rgba(219,39,119,0.45)]">
              <Image src="/images/cleaning-for-a-reason-badge.png" alt="Cleaning for a Reason proud partner seal" fill sizes="13rem" className="object-contain p-2" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-3">
            <span data-anim="line" className="h-px w-8 bg-pink-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">Giving back to our community</span>
          </div>
          <h2 id="give-back-title" data-anim="words" className="font-serif text-[2rem] font-medium leading-[1.1] tracking-tight text-star-dark sm:text-5xl">
            <SplitWords parts={['Proud partner of ', { text: 'Cleaning for a Reason.', className: 'italic text-pink-600' }]} />
          </h2>
          <div data-anim="stagger" className="mt-7 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              When someone is going through cancer treatment, everyday chores are the last thing they should have to worry about. That’s why we partnered with Cleaning for a Reason, a nonprofit that provides free, professional home cleanings to patients across the country.
            </p>
            <p>
              Right here in the Lowcountry, our crew donates its time and supplies to give local families a spotless, restful space when they need it most. It’s our way of caring for the neighbors who make this community home.
            </p>
          </div>
        </div>
      </div>
    </Motion>
  );
}
