"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';

const HERO_ALT = 'A family laughing with their golden retriever in a bright, spotless living room';

interface HeroProps {
  onStartQuote?: (data: any) => void;
}

const fieldClass =
  'block w-full rounded-[0.85em] border border-white/25 bg-white/15 p-[0.85em] text-[1em] text-white placeholder-white/70 transition-all focus:border-white/70 focus:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/20';

const Hero: React.FC<HeroProps> = ({ onStartQuote }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState<string | null>(null);
  const [isCheckingZip, setIsCheckingZip] = useState(false);

  const handleZipChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(val);

    if (val.length === 5) {
      setIsCheckingZip(true);
      try {
        const response = await fetch(`https://api.zippopotam.us/us/${val}`);
        if (response.ok) {
          const data = await response.json();
          setCity(data.places[0]['place name']);
        } else {
          setCity(null);
        }
      } catch {
        setCity(null);
      } finally {
        setIsCheckingZip(false);
      }
    } else {
      setCity(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = Object.fromEntries(new FormData(formRef.current).entries());
    if (!data.fullName || !data.email || !data.phone) return;

    setIsSubmitting(true);
    // Brief processing time for UX. No webhook is sent here; the booking form below does that.
    await new Promise((resolve) => setTimeout(resolve, 500));
    onStartQuote?.({ ...data, zipCode });
    setIsSubmitting(false);
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-900 h-[min(86svh,700px)] min-h-[600px] lg:h-auto lg:w-full lg:min-h-[480px] lg:max-h-[760px] lg:aspect-[1951/805]"
    >
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/hero-family-desktop.webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-family-mobile.webp"
          alt={HERO_ALT}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_22%] lg:object-center"
        />
      </picture>

      {/* Readability scrims: top and bottom on mobile (headline up top, CTA below the faces), left on desktop */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.25)_32%,rgba(2,6,23,0.05)_55%,rgba(2,6,23,0.88)_100%)] lg:hidden" />
      <div className="absolute inset-0 -z-10 hidden lg:block bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />

      {/* Mobile: headline at the top, CTA at the bottom, family in between. Desktop: copy stays in the left third. */}
      <div className="relative flex h-full flex-col items-center justify-between px-5 pb-11 pt-11 text-center sm:px-8 sm:pb-14 sm:pt-14 lg:w-[38%] lg:items-start lg:justify-center lg:pb-0 lg:pl-[5vw] lg:pr-2 lg:pt-0 lg:text-left">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 sm:mb-4 lg:mb-4 lg:text-[clamp(0.7rem,0.95vw,1.05rem)]">
            <span className="hidden sm:inline lg:hidden">Star Cleaning SC &bull; </span>Charleston &amp; Summerville, SC
          </p>

          <h1 className="font-serif text-[3.15rem] font-medium leading-[1.04] tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-[clamp(2.2rem,4.5vw,6.25rem)]">
            Life&apos;s too short<br /> to spend it<br /> <span className="italic text-blue-300">cleaning.</span>
          </h1>
        </div>

        {/* Mobile / tablet CTA (desktop uses the glass form instead) */}
        <div className="flex w-full flex-col items-center gap-2.5 lg:hidden">
          <Link
            href="/quote"
            className="inline-flex w-full max-w-[21rem] items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/25 bg-star-blue px-8 py-4 text-lg font-black text-white shadow-[0_12px_32px_rgba(0,74,173,0.6)] transition-all hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Reclaim My Weekend
            <i className="fas fa-arrow-right text-sm"></i>
          </Link>
          <p className="text-xs font-semibold text-white/85">Free estimate &bull; No obligation &bull; Takes 60 seconds</p>
        </div>
      </div>

      {/* Desktop glass estimate form, tucked into the right edge of the photo */}
      <div style={{ fontSize: "clamp(13px, 0.98vw, 18px)" }} className="absolute right-[3vw] top-1/2 hidden w-[clamp(300px,25vw,480px)] -translate-y-1/2 rounded-[1.7em] border border-white/30 bg-slate-950/25 p-[1.5em] shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm lg:block">
        <h3 className="font-heading text-[1.5em] font-black leading-tight text-white">Get Your Time Back</h3>
        <p className="mb-[1.1em] mt-[0.3em] text-[0.88em] text-white/80">Free, no-obligation estimate in under a minute.</p>

        <form ref={formRef} className="space-y-[0.75em]" onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required className={fieldClass} />
          <input type="email" name="email" placeholder="Email Address" required className={fieldClass} />

          <div className="grid grid-cols-2 gap-[0.75em]">
            <input type="tel" name="phone" placeholder="Phone" required className={fieldClass} />
            <div className="relative">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                required
                value={zipCode}
                onChange={handleZipChange}
                maxLength={5}
                className={fieldClass}
              />
              {isCheckingZip && (
                <i className="fas fa-circle-notch fa-spin absolute right-[0.9em] top-1/2 -translate-y-1/2 text-[0.85em] text-white/80"></i>
              )}
            </div>
          </div>

          {city && (
            <div className="flex items-center gap-2 rounded-[0.85em] border border-emerald-300/30 bg-emerald-400/20 px-[0.9em] py-[0.6em]">
              <i className="fas fa-check-circle text-[1em] text-emerald-300"></i>
              <p className="text-[0.88em] font-semibold text-emerald-50">We serve <span className="font-bold">{city}</span>!</p>
            </div>
          )}

          <div className="relative">
            <select
              name="serviceType"
              className={`${fieldClass} cursor-pointer appearance-none pr-[2.6em]`}
              defaultValue="Standard House Cleaning"
            >
              <option className="text-slate-900">Standard House Cleaning</option>
              <option className="text-slate-900">Deep Cleaning</option>
              <option className="text-slate-900">Move In / Move Out</option>
              <option className="text-slate-900">Vacation Rental</option>
            </select>
            <i className="fas fa-chevron-down pointer-events-none absolute right-[1.1em] top-1/2 -translate-y-1/2 text-[0.85em] text-white/70"></i>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-[0.3em] flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[0.85em] border border-white/25 bg-star-blue py-[1em] text-[1.08em] font-bold text-white shadow-lg shadow-blue-950/40 transition-all hover:bg-blue-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                <span>Reclaim My Weekend</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 pt-[0.2em]">
            <i className="fas fa-lock text-[0.75em] text-white/60"></i>
            <span className="text-[0.78em] font-medium text-white/70">Your information is secure and never shared.</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
