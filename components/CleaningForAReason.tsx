import React from 'react';
import Image from 'next/image';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="py-6 lg:py-7 bg-gradient-to-r from-pink-50 via-white to-pink-50 border-y border-pink-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">

          {/* Badge */}
          <div className="relative shrink-0">
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

          <div className="max-w-xl">
            <p className="font-black text-gray-900 text-base sm:text-lg leading-snug">
              Proud Partner of <span className="text-pink-500">Cleaning for a Reason</span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              We donate free house cleanings to women undergoing treatment for cancer, right here in the Lowcountry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningForAReason;
