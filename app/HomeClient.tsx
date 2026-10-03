"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import OwnerMessage from '../components/OwnerMessage';
import CleaningForAReason from '../components/CleaningForAReason';
import TeamPreview from '../components/TeamPreview';
import MoreThanClean from '../components/MoreThanClean';
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
    <div className="font-sans text-gray-800 bg-white selection:bg-blue-100 selection:text-star-blue">
      {/* Top contact bar */}
      <a href="tel:+18432979935" className="relative z-50 block bg-gradient-to-r from-star-dark via-star-blue to-star-dark py-2 text-center text-white shadow-sm transition-opacity hover:opacity-95 lg:py-2.5">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 whitespace-nowrap px-4 text-[11px] font-bold uppercase tracking-wider sm:text-xs lg:text-sm">
          <i className="fas fa-phone-alt text-[10px] lg:text-xs"></i>
          <span>Text or call</span>
          <span className="font-black">(843) 297-9935</span>
          <span className="hidden opacity-60 sm:inline">&bull;</span>
          <span className="hidden sm:inline">Free estimates, no obligation</span>
        </div>
      </a>

      <Navbar />
      
      <main className="w-full">
        <Hero onStartQuote={handleStartQuote} />
        
        <TrustBar overlap />
        
        <ScrollReveal direction="up" delay={50}>
          <OwnerMessage />
        </ScrollReveal>

        <CleaningForAReason />

        <MoreThanClean />

        <TeamPreview />

        <Testimonials />

        <Services />
        
        <ScrollReveal direction="up" delay={50}>
          <BeforeAfter />
        </ScrollReveal>
        
        
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
