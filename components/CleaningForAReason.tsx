import React from 'react';
import Image from 'next/image';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-pink-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 text-center lg:text-left">

          {/* Left: Badge + tag + headline */}
          <div className="flex flex-col items-center lg:items-start lg:w-2/5 shrink-0">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-5">
              <Image
                src="/images/cleaning-for-a-reason-badge.png"
                alt="Cleaning for a Reason - Proud Partner - Clean Homes for Cancer Patients"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>

            <span className="inline-flex items-center gap-1.5 text-pink-500 text-xs font-bold uppercase tracking-widest mb-3">
              <i className="fas fa-ribbon"></i> Cleaning With a Purpose
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-heading leading-tight">
              Proud Partner of <span className="text-pink-500">Cleaning for a Reason</span>
            </h2>
          </div>

          {/* Right: Copy */}
          <div className="lg:w-3/5 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              Cleaning for a Reason is a national nonprofit that provides free house cleanings to women undergoing treatment for cancer. Star Cleaning SC is honored to be a local partner, donating our time to families across the Lowcountry facing one of the hardest fights of their lives.
            </p>
            <p>
              When you're battling cancer, a clean home shouldn't be one more thing to worry about — so for our neighbors going through treatment, we show up free of charge, with the same care and precision we bring to every job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningForAReason;
