'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import TrustBar from '../../components/TrustBar';
import OwnerMessage from '../../components/OwnerMessage';

const BookingForm = dynamic(() => import('../../components/BookingForm'));

export default function PromoClient() {
  // Labor Day Promo Configuration
  const seasonalPromo = {
    badge: "LABOR DAY SPECIAL",
    title: "Relax This Labor Day. We'll Handle the Mess.",
    subtitle: "Enjoy 20% off your first deep clean. You've earned the break.",
    code: "LABORDAY20",
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-200 selection:text-slate-900">
      
      {/* Promo Bar - Elegant Navy with subtle red accent */}
      <div className="bg-[#0a192f] text-white px-4 py-3 text-center text-xs sm:text-sm font-bold tracking-widest uppercase z-50 shadow-md relative border-b border-red-600/50">
        <span className="flex items-center justify-center gap-2">
          <i className="fas fa-flag-usa text-red-500"></i>
          {seasonalPromo.badge} — LIMITED TIME OFFER
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-950 pb-20">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 poster="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
            >
                <source src="https://i.imgur.com/Q7QVFW7.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
          
          <div className="container mx-auto px-4 sm:px-8 relative z-10 w-full max-w-5xl flex flex-col items-center">
            
            {/* Header / Logo & Phone */}
            <div className="w-full flex justify-between items-center mb-6 mt-6 px-2 sm:px-0">
                <Link href="/" className="inline-block hover:opacity-90 transition-opacity relative h-10 md:h-14 w-36 md:w-48">
                    <Image 
                         src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
                         alt="Star Cleaning" 
                         fill
                        priority
                        sizes="(max-width: 768px) 144px, 192px"
                        className="object-contain brightness-0 invert" 
                         referrerPolicy="no-referrer"
                    />
                </Link>
                <a href="tel:8432979935" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg backdrop-blur-sm">
                    <i className="fas fa-phone-alt text-sm md:text-base"></i>
                </a>
            </div>

            {/* Headlines */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 max-w-3xl mx-auto px-2"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 font-heading tracking-tight drop-shadow-lg">
                    {seasonalPromo.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto drop-shadow-sm mb-6">
                    {seasonalPromo.subtitle}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white/95 text-xs sm:text-sm md:text-base font-bold drop-shadow-md">
                    <span className="flex items-center gap-1.5"><i className="fas fa-star text-yellow-400"></i> 5-Star Rated</span>
                    <span className="hidden sm:inline opacity-50">•</span>
                    <span className="flex items-center gap-1.5"><i className="fas fa-shield-alt text-green-400"></i> 100% Guaranteed</span>
                    <span className="hidden sm:inline opacity-50">•</span>
                    <span className="flex items-center gap-1.5"><i className="fas fa-clock text-blue-300"></i> 60-Sec Quote</span>
                </div>
            </motion.div>

            {/* The Form Component */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full relative"
            >
                <BookingForm hideSidebar={true} variant="glass" showPricing={false} showScheduling={false} isPromo={true} promoCode={seasonalPromo.code} />
                
                {/* Trust Badges Below Form */}
                <div className="flex flex-col items-center justify-center gap-2 mt-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-white/80 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <i className="fas fa-lock text-green-400"></i> No credit card required
                    </div>
                    <div className="text-[10px] text-white/60 mt-1">*Terms and conditions apply. Mention "{seasonalPromo.code}" when you contact us if not using the form.</div>
                </div>
            </motion.div>

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

      {/* About Us / Main Website Link */}
      <section className="bg-white py-16 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 font-heading">Want to learn more about us?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Discover our full range of services, read more customer reviews, and see why we are the top-rated cleaning company in Charleston and Summerville.
              </p>
              <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl border border-gray-200 transition-all hover:-translate-y-1 shadow-sm">
                  Visit Our Main Website <i className="fas fa-arrow-right text-sm"></i>
              </Link>
          </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-yellow-500 text-4xl mx-auto mb-8 shadow-lg">
                  <i className="fas fa-award"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 font-heading">Our 100% Satisfaction Guarantee</h2>
              <p className="text-gray-600 md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                  We are obsessed with quality. If you are not completely satisfied with your cleaning, let us know within 24 hours and we will return to re-clean the area for free. Your peace of mind is our top priority.
              </p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100">
                      <i className="fas fa-check-circle text-green-500"></i>
                      <span className="font-bold text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100">
                      <i className="fas fa-user-check text-green-500"></i>
                      <span className="font-bold text-gray-700">Background Checked</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100">
                      <i className="fas fa-flag-usa text-blue-500"></i>
                      <span className="font-bold text-gray-700">Veteran Owned</span>
                  </div>
              </div>
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
