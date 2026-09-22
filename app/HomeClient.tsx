"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import OwnerMessage from '../components/OwnerMessage';
import CleaningForAReason from '../components/CleaningForAReason';
import TeamPreview from '../components/TeamPreview';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import ExitIntentPopup from '../components/ExitIntentPopup';
import ServiceAreas from '../components/ServiceAreas';

const Home = () => {
  const [prefilledData, setPrefilledData] = useState<any>(null);

  const handleStartQuote = (data: any) => {
    setPrefilledData(data);
    // Smooth scroll to quote section with a delay to ensure DOM is ready
    setTimeout(() => {
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-yellow-200 selection:text-star-blue">
      {/* Top Notification Bar - Optimized for Mobile One-Line */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-center py-1.5 lg:py-2.5 text-[10px] md:text-sm font-bold uppercase tracking-wider shadow-sm relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="animate-pulse bg-white text-yellow-500 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shadow-sm shrink-0"><i className="fas fa-bolt text-[8px] md:text-[10px]"></i></span>
              <span className="truncate">
                <span className="hidden sm:inline">New Customer Special: </span>
                <span className="underline decoration-blue-900 decoration-2 underline-offset-2">20% OFF</span>
                <span className="hidden sm:inline"> Your First Deep Clean!</span>
                <span className="sm:hidden"> First Deep Clean!</span>
              </span>
          </div>
      </div>

      <Navbar />
      
      <main className="w-full">
        <Hero onStartQuote={handleStartQuote} />
        
        <TrustBar />
        
        <ScrollReveal direction="up" delay={50}>
          <OwnerMessage />
        </ScrollReveal>

        <CleaningForAReason />

        <TeamPreview />

        <Services />
        
        <ScrollReveal direction="up" delay={50}>
          <BeforeAfter />
        </ScrollReveal>
        
        <Testimonials />
        
        <FAQ />

        <ScrollReveal direction="up" delay={50}>
          <ServiceAreas />
        </ScrollReveal>
        
        <ScrollReveal direction="up" id="quote" delay={50}>
          <section className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Free Instant Quote</span>
                  <span className="w-8 h-px bg-star-blue"></span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mt-4 mb-4 tracking-tight leading-[1.15]">
                  Ready to Get Your <span className="text-star-blue">Time Back?</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                  Answer a few quick questions and get your free, no-obligation quote in minutes.
                </p>
              </div>
              <BookingForm initialData={prefilledData} showPricing={false} />
            </div>
          </section>
        </ScrollReveal>
      </main>
      
      <ExitIntentPopup />
      <Footer />
    </div>
  );
};

export default Home;
