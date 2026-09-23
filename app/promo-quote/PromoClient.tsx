'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TrustBar from '../../components/TrustBar';
import OwnerMessage from '../../components/OwnerMessage';
import TeamPreview from '../../components/TeamPreview';
import { ShieldCheck, Star, UserCheck, RotateCcw } from 'lucide-react';

const BookingForm = dynamic(() => import('../../components/BookingForm'));

export default function PromoClient() {
  const promoCode = "THANKS";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-amber-200 selection:text-star-blue">
      
      {/* Hero Section with Video Background & Form - Matching exact clean layout of /quote */}
      <section className="relative min-h-screen flex flex-col items-center pt-2 pb-12 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="/images/hero-background.jpg"
                className="absolute inset-0 w-full h-full object-cover object-center"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Clean Dark Overlay matching /quote */}
          <div className="absolute inset-0 bg-slate-900/50"></div>
          
          <div className="container mx-auto px-4 sm:px-8 relative z-10 w-full max-w-5xl flex flex-col items-center">
            
            {/* Header / Logo & Phone */}
            <div className="w-full flex justify-between items-center mb-6 mt-2 px-2 sm:px-0">
                <Link href="/" className="inline-block hover:opacity-90 transition-opacity relative h-10 md:h-14 w-36 md:w-48">
                    <Image 
                        src="/images/logo-mark.png"
                        alt="Star Cleaning" 
                        fill
                        priority
                        sizes="(max-width: 768px) 144px, 192px"
                        className="object-contain brightness-0 invert" 
                        referrerPolicy="no-referrer"
                    />
                </Link>
                <a href="tel:+18432979935" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg backdrop-blur-sm">
                    <i className="fas fa-phone-alt text-sm md:text-base"></i>
                </a>
            </div>

            {/* Headlines - Clean Thanksgiving focus */}
            <div className="text-center mb-8 max-w-3xl mx-auto px-2">
                <h1 className="font-serif text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-3 sm:mb-4 tracking-tight leading-tight drop-shadow-lg text-center">
                    Thanksgiving <span className="text-yellow-300">Cleaning.</span>
                </h1>
                
                {/* Highlights - Kept in a single line on mobile */}
                <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-6 text-white/95 text-[11px] min-[380px]:text-xs sm:text-base font-bold drop-shadow-md">
                    <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"><i className="fas fa-star text-yellow-400 text-[10px] sm:text-sm"></i> 4.9-Star Rated</span>
                    <span className="opacity-40">•</span>
                    <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"><i className="fas fa-shield-alt text-green-400 text-[10px] sm:text-sm"></i> 100% Guaranteed</span>
                    <span className="opacity-40">•</span>
                    <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"><i className="fas fa-clock text-blue-300 text-[10px] sm:text-sm"></i> 60-Sec Quote</span>
                </div>
            </div>

            {/* The Form Component */}
            <div className="w-full animate-slide-up-fade" style={{ animationDuration: '0.8s' }}>
                <BookingForm hideSidebar={true} variant="glass" showPricing={false} showScheduling={false} isPromo={true} promoCode={promoCode} />
                
                {/* Trust Badges Below Form */}
                <div className="flex flex-col items-center justify-center gap-2 mt-5 sm:mt-6 px-2">
                    <div className="inline-flex items-center justify-center text-center gap-2 text-xs sm:text-sm font-bold text-white/85 bg-black/35 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-sm max-w-full">
                        <i className="fas fa-lock text-green-400 shrink-0 text-xs sm:text-sm"></i>
                        <span className="text-center leading-snug">
                            No credit card required &bull; 20% Thanksgiving discount
                        </span>
                    </div>
                </div>
            </div>

          </div>
      </section>

      {/* Trust Bar / Social Proof */}
      <div className="bg-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-4">
              <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by families across Charleston, North Charleston, Summerville & Nexton</p>
              <TrustBar />
          </div>
      </div>

      {/* Owner Message Section */}
      <OwnerMessage />

      {/* Our Team Section */}
      <TeamPreview />

      {/* 100% Satisfaction Guarantee Section - Matches /quote refined clean design */}
      <section className="py-16 lg:py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-star-blue"></span>
              <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Zero-Risk Clean &bull; 100% Guaranteed</span>
              <span className="w-8 h-px bg-star-blue"></span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-5 tracking-tight leading-[1.15]">
              Your peace of mind is <span className="text-star-blue">our top priority.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We know welcoming someone into your home requires complete trust. If any area does not meet our uncompromising standards, we return within 24 hours to re-clean it at zero extra charge.
            </p>
          </div>

          {/* 3 Trust Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center mb-6">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-2.5">24h Free Re-Clean</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Not 100% delighted with any corner? Contact us within 24 hours. We dispatch a supervisor to inspect and re-clean it free of charge.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-star-blue/10 text-star-blue flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-2.5">100% Vetted & Checked</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every cleaner undergoes criminal background checks, in-person interviews, and rigorous white-glove training before ever touching your key.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-2.5">$2M Bonded & Insured</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full comprehensive general liability and bonding so your home, heirlooms, and family remain completely protected at all times.
              </p>
            </div>

          </div>

          {/* Google Verified & Trust Badge Bar */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Google Rating */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm p-2.5">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-bold text-slate-900 text-sm ml-1.5">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Google Verified Rating</span> &bull; 100+ five-star reviews in SC
                </p>
              </div>
            </div>

            {/* Badges List */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Veteran-Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Locally Operated</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Cleaning For A Reason Partner</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* About Us / Main Website Link */}
      <section className="bg-white py-16 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Explore Further</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">Want to learn more about us?</h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Discover our full range of services, read more customer reviews, and see why we are the top-rated cleaning company in Charleston and Summerville.
              </p>
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl border border-gray-200 transition-all hover:-translate-y-1 shadow-sm">
                  Visit Our Main Website <i className="fas fa-arrow-right text-sm"></i>
              </Link>
          </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-white border-t border-gray-100 py-10 text-center">
          <div className="container mx-auto px-4">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-900 transition-colors font-bold uppercase tracking-widest mb-6">
                  <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
              <p className="text-xs text-gray-400 font-medium">
                  &copy; {new Date().getFullYear()} Star Cleaning LLC. All rights reserved.
              </p>
          </div>
      </footer>
    </div>
  );
}
