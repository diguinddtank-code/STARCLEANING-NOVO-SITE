'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const BookingForm = dynamic(() => import('../../components/BookingForm'));

export default function PromoClient() {
  // Configuração Sazonal - Fácil de alterar para Black Friday, Natal, Spring, etc.
  const seasonalPromo = {
    badge: "SUMMER SPARKLE SPECIAL",
    title: "Keep the Beach Sand Outside.",
    subtitle: "Enjoy 10% off your initial deep clean and 15% off your first regular cleaning.",
    code: "SUMMER SPARKLE",
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-gray-100 selection:bg-yellow-200 selection:text-slate-900">
      
      {/* Minimal Sticky Promo Bar */}
      <div className="bg-yellow-500 text-slate-950 px-4 py-2.5 text-center text-xs sm:text-sm font-bold tracking-widest uppercase z-50 shadow-md relative">
        <span className="flex items-center justify-center gap-2">
          <i className="fas fa-sun"></i>
          {seasonalPromo.badge} — LIMITED TIME OFFER
        </span>
      </div>

      {/* Main Section */}
      <main className="relative flex-grow flex flex-col items-center pt-6 pb-12 overflow-hidden">
        {/* Video Background with Dark Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
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
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/60 to-slate-950"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-8 relative z-10 w-full max-w-4xl flex flex-col items-center">
          
          {/* Header / Logo */}
          <div className="w-full flex justify-between items-center mb-10 px-2 sm:px-0">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity relative h-10 md:h-12 w-36 md:w-40">
                  <Image 
                      src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
                      alt="Star Cleaning" 
                      fill
                      priority
                      sizes="(max-width: 768px) 144px, 160px"
                      className="object-contain brightness-0 invert" 
                      referrerPolicy="no-referrer"
                  />
              </Link>
              <a href="tel:8432979935" className="text-white hover:text-yellow-400 font-bold tracking-wider transition-colors text-sm sm:text-base flex items-center gap-2">
                  <i className="fas fa-phone-alt text-xs"></i>
                  <span className="hidden sm:inline">(843) 297-9935</span>
                  <span className="sm:hidden">Call Now</span>
              </a>
          </div>

          {/* Headlines */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 w-full"
          >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 font-heading tracking-tight drop-shadow-lg">
                  {seasonalPromo.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto drop-shadow-sm">
                  {seasonalPromo.subtitle}
              </p>
          </motion.div>

          {/* The Form Component */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full relative max-w-3xl"
          >
              <div className="w-full">
                  <BookingForm hideSidebar={true} variant="glass" showPricing={false} showScheduling={false} isPromo={true} promoCode={seasonalPromo.code} />
              </div>
              
              {/* Trust Badge Below Form */}
              <div className="flex flex-col items-center justify-center gap-2 mt-8">
                  <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><i className="fas fa-shield-alt"></i> 100% Guaranteed</span>
                      <span className="opacity-30">•</span>
                      <span className="flex items-center gap-1.5"><i className="fas fa-lock"></i> No Credit Card Required</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-2">*Terms and conditions apply. Mention "{seasonalPromo.code}" when you contact us if not using the form.</div>
              </div>
          </motion.div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 bg-slate-950 py-8 text-center border-t border-white/5">
          <div className="container mx-auto px-4 flex flex-col items-center gap-4">
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest">
                  <i className="fas fa-arrow-left"></i> Visit Main Website
              </Link>
              <p className="text-xs text-slate-700 font-medium">
                  &copy; {new Date().getFullYear()} Star Cleaning LLC. All rights reserved.
              </p>
          </div>
      </footer>

    </div>
  );
}
