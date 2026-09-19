import React from 'react';
import Image from 'next/image';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500 relative overflow-hidden">
      {/* Decorative texture, matching the site's other bold CTA sections */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Big centered badge */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 drop-shadow-2xl">
          <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
          <Image
            src="/images/cleaning-for-a-reason-badge.png"
            alt="Cleaning for a Reason - Proud Partner - Clean Homes for Cancer Patients"
            fill
            sizes="160px"
            className="object-contain p-4 relative z-10"
          />
        </div>

        <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-white/20">
          <i className="fas fa-ribbon"></i>
          Cleaning With a Purpose
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-6">
          Proud Partner of<br className="hidden sm:block" /> Cleaning for a Reason
        </h2>

        <p className="text-pink-50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto font-medium">
          We donate free house cleanings to women undergoing treatment for cancer, right here in the Lowcountry — because fighting for your life shouldn't mean fighting your house too.
        </p>
      </div>
    </section>
  );
};

export default CleaningForAReason;
