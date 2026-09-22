import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden border-y border-rose-100/50">
      {/* Subtle organic background aura */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Free-standing Circular Seal / Logo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 drop-shadow-lg transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/cleaning-for-a-reason-badge.png"
                  alt="Cleaning for a Reason - Proud Partner"
                  fill
                  sizes="(max-width: 768px) 192px, 208px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Authentic, Warm American Copy without AI Clichés */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="w-8 h-px bg-pink-500"></span>
                <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs">
                  Giving Back to Our Community
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-5">
                Proud Partner of <span className="text-pink-600">Cleaning for a Reason.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                When someone is going through cancer treatment, everyday chores are the last thing they should have to worry about. That is why we partnered with Cleaning for a Reason, a nonprofit dedicated to providing free, professional home cleanings to patients across the country.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Right here in the Charleston Lowcountry, our crew donates our time and supplies to give local families a spotless, restful space when they need it most. It is our way of caring for the neighbors who make this community home.
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CleaningForAReason;
