import React from 'react';
import Image from 'next/image';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="py-6 lg:py-7 bg-gradient-to-r from-pink-50 via-white to-pink-50 border-y border-pink-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">

          {/* Badge with pulse ring */}
          <div className="relative shrink-0 animate-float">
            <div className="absolute inset-0 rounded-full bg-pink-300 animate-ping opacity-40"></div>
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-md border border-pink-100">
              <Image
                src="/images/cleaning-for-a-reason-badge.png"
                alt="Cleaning for a Reason badge"
                fill
                sizes="64px"
                className="object-contain p-1.5"
              />
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <p className="font-black text-gray-900 text-base sm:text-lg leading-snug">
              Proud Partner of <span className="text-pink-500">Cleaning for a Reason</span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Free house cleanings for women fighting cancer — on us.
            </p>
          </div>

          <a
            href="https://www.cleaningforareason.org"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Learn more <i className="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CleaningForAReason;
