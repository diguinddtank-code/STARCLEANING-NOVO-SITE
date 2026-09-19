import React from 'react';
import Image from 'next/image';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          {/* Texture, contained within the card */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-8 text-center md:text-left">

            {/* Badge */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
              <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>
              <Image
                src="/images/cleaning-for-a-reason-badge.png"
                alt="Cleaning for a Reason - Proud Partner - Clean Homes for Cancer Patients"
                fill
                sizes="96px"
                className="object-contain p-2.5 relative z-10"
              />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-2.5 border border-white/20">
                <i className="fas fa-ribbon"></i> Cleaning With a Purpose
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-heading leading-tight mb-1.5">
                Proud Partner of Cleaning for a Reason
              </h2>
              <p className="text-pink-50 text-sm leading-relaxed">
                We donate free house cleanings to women undergoing treatment for cancer, right here in the Lowcountry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningForAReason;
