import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import OwnerMessage from './components/OwnerMessage';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
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
        <Hero />
        
        <ScrollReveal direction="up" delay={200}>
          <TrustBar />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <OwnerMessage />
        </ScrollReveal>
        
        <Services />
        
        <ScrollReveal direction="left">
          <BeforeAfter />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <FAQ />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <BookingForm />
        </ScrollReveal>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;