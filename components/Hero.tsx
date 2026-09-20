"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  onStartQuote?: (data: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuote }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Helper to safely call onStartQuote
  const handleStartQuote = (data: any) => {
    if (onStartQuote) {
      onStartQuote(data);
    }
  };

  // States for Zip Code Logic
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
        } catch (error) {
            setCity(null);
        } finally {
            setIsCheckingZip(false);
        }
    } else {
        setCity(null);
    }
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent | React.TouchEvent) => {
    if (e) e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData.entries());

    if (!data.fullName || !data.email || !data.phone) {
        alert("Please fill in your details to get your price.");
        return;
    }

    setIsSubmitting(true);

    // Simulate a brief processing time for UX, but NO webhook is sent here.
    await new Promise(resolve => setTimeout(resolve, 500));

    // Pass data up to App component and scroll to BookingForm
    handleStartQuote({
        ...data,
        zipCode: zipCode
    });

    setIsSubmitting(false);
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden">

      {/* Mobile background video: full-bleed behind the copy, washed out enough to stay legible */}
      <div className="lg:hidden absolute inset-0 bg-gray-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-background.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/45"></div>
      </div>

      {/* Desktop background video, right side, fading into white behind the copy */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] bg-gray-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-background.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:pt-14 sm:pb-10 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Mobile: Copy (old card-based hero design, restored) */}
          <div className="lg:hidden text-center animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Trust capsule */}
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-gray-200/50 px-4 py-2 rounded-full shadow-sm mb-6 mx-auto">
                <div className="flex text-yellow-400 text-[10px] gap-0.5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Veteran Owned & 18 Years Strong
                </span>
            </div>

            {/* Headline card */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-sm border border-white/50">
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.1] mb-2 font-heading">
                Charleston&apos;s Best<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-star-blue">House Cleaning.</span>
                </h1>

                <h2 className="text-sm sm:text-lg text-gray-700 max-w-lg mx-auto leading-relaxed font-semibold">
                Take back your weekend. Join neighbors in <strong>Charleston, North Charleston, Summerville &amp; Nexton</strong> who trust our top-rated maid service.
                </h2>
            </div>

            {/* Two-button CTA row */}
            <div className="flex w-full gap-3">
                <Link
                  href="/#quote"
                  className="flex-1 bg-star-blue hover:bg-star-dark text-white rounded-xl shadow-md text-center flex flex-col items-center justify-center border-b-4 border-blue-900 active:border-b-0 active:translate-y-1 transition-all py-3"
                >
                  <span className="font-bold text-sm leading-tight uppercase tracking-wide">Free Estimate</span>
                  <div className="mt-0.5 bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold text-yellow-300">
                      SAVE 20%
                  </div>
                </Link>

                <a
                  href="tel:+18432979935"
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-xl font-bold text-sm shadow-md text-center flex items-center justify-center gap-2 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 transition-all py-3"
                >
                  <i className="fas fa-phone-alt text-lg"></i>
                  <span>Call or Text</span>
                </a>
            </div>

            {/* Trust indicators + Google social proof */}
            <div className="flex flex-col items-center gap-3 mt-5">
                <div className="flex justify-center gap-4 text-[10px] font-bold text-gray-600 uppercase tracking-wide bg-white/60 py-2 px-4 rounded-full backdrop-blur-md shadow-sm border border-white/50">
                    <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> Insured</div>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> Vetted</div>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> 5-Stars</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-100 px-3 py-1.5 rounded-full shadow-sm">
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        </div>
                        <div className="flex text-yellow-400 text-[10px] gap-0.5">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </div>
                        <span className="text-[10px] font-bold text-gray-600">5.0 Rating</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-pink-50/90 backdrop-blur-md border border-pink-100 rounded-full pl-1 pr-3 py-1 shadow-sm">
                        <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0 bg-white">
                            <Image src="/images/cleaning-for-a-reason-badge.png" alt="Cleaning for a Reason" fill sizes="16px" className="object-contain" />
                        </div>
                        <span className="text-[10px] font-bold text-pink-600">Cleaning for a Reason</span>
                    </div>
                </div>
            </div>

          </div>

          {/* Desktop: Copy */}
          <div className="hidden lg:block text-left animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-star-blue"></span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-star-blue">
                House Cleaning in Charleston, SC
              </span>
            </div>

            <h1 className="text-6xl font-black text-gray-900 leading-[1.1] font-heading">
              A Cleaner Home.<br />
              <span className="text-star-blue">More Time For What Matters.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
              Charleston-area families trust us with the cleaning, so their weekends are free for what matters, not floors.
            </p>

            {/* CTA: scrolls to the pre-filled BookingForm below */}
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5"
              >
                Claim My Free Time Back
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>

              <span className="text-xs text-gray-600 font-semibold">Free estimate. No obligation. Booked in under a minute.</span>
            </div>

            {/* Trust strip */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col items-start gap-4">
                <div className="text-sm font-bold text-gray-700 leading-relaxed">
                    Veteran Owned &nbsp;&bull;&nbsp; 18+ Years in the Lowcountry &nbsp;&bull;&nbsp; Background-Checked
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                    <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5">
                        <div className="flex text-yellow-400 text-xs gap-0.5">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </div>
                        <span className="text-sm font-bold text-gray-700">5.0</span>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-pink-50 border border-pink-100 rounded-full pl-1 pr-3.5 py-1">
                        <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 bg-white">
                            <Image src="/images/cleaning-for-a-reason-badge.png" alt="Cleaning for a Reason" fill sizes="20px" className="object-contain" />
                        </div>
                        <span className="text-[11px] font-bold text-pink-600">Cleaning for a Reason Partner</span>
                    </div>
                </div>
            </div>

          </div>

          {/* Right: Free estimate form (desktop only — mobile flow scrolls straight to the full booking form) */}
          <div className="hidden lg:flex justify-end animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-gray-100">

              <div className="mb-6">
                  <h3 className="text-xl font-black text-gray-900 font-heading">Get Your Time Back</h3>
                  <p className="text-gray-500 text-sm mt-1">Free, no-obligation estimate. Takes less than a minute.</p>
              </div>

              <form ref={formRef} className="space-y-3.5" onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-star-blue/20 focus:border-star-blue block p-3.5 transition-all focus:bg-white placeholder-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-star-blue/20 focus:border-star-blue block p-3.5 transition-all focus:bg-white placeholder-gray-400"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-star-blue/20 focus:border-star-blue block p-3.5 transition-all focus:bg-white placeholder-gray-400"
                    />
                    <div className="relative">
                        <input
                            type="text"
                            name="zipCode"
                            placeholder="Zip Code"
                            required
                            value={zipCode}
                            onChange={handleZipChange}
                            maxLength={5}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-star-blue/20 focus:border-star-blue block p-3.5 transition-all focus:bg-white placeholder-gray-400"
                        />
                         {isCheckingZip && (
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                                <i className="fas fa-circle-notch fa-spin text-star-blue text-xs"></i>
                            </div>
                        )}
                    </div>
                  </div>

                  {city && (
                    <div className="bg-green-50 border border-green-100 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5">
                         <i className="fas fa-check-circle text-green-500 text-sm shrink-0"></i>
                         <p className="text-green-800 text-xs font-semibold">We serve <span className="font-bold">{city}</span>!</p>
                    </div>
                  )}

                  <div className="relative">
                    <select
                        name="serviceType"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-2 focus:ring-star-blue/20 focus:border-star-blue block p-3.5 transition-all focus:bg-white appearance-none cursor-pointer"
                    >
                        <option>Standard House Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Move In / Move Out</option>
                        <option>Vacation Rental</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-star-blue hover:bg-star-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5 active:scale-[0.99] flex justify-center items-center gap-2 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                        <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                        <>
                            <span>Get My Price</span>
                            <i className="fas fa-arrow-right text-sm"></i>
                        </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 pt-1">
                     <i className="fas fa-lock text-gray-300 text-[10px]"></i>
                     <span className="text-[10px] text-gray-400 font-medium">Your information is secure and never shared.</span>
                  </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
