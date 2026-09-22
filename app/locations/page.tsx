import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { locationsData } from '@/lib/locationsData';
import { MapPin, ArrowRight, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Service Areas | Star Cleaning SC',
  description: 'Star Cleaning SC provides top-rated house cleaning services across the Charleston Lowcountry, including Charleston, Summerville, and Mount Pleasant.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/locations',
  },
};

export default function LocationsHub() {
  const locations = Object.values(locationsData);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-star-blue/10 selection:text-star-blue flex flex-col">
      <Navbar />
      
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-[#FAF9F7] border-b border-slate-100 overflow-hidden">
        {/* Ambient warmth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute -bottom-24 left-10 w-96 h-96 bg-amber-50/80 rounded-full blur-3xl mix-blend-multiply" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up" delay={50}>
            <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-5">
              <span className="w-6 sm:w-8 h-px bg-star-blue"></span>
              <div className="flex items-center gap-1.5 text-star-blue font-bold uppercase tracking-[0.18em] text-[11px] sm:text-xs">
                <MapPin className="w-3.5 h-3.5 text-star-blue" />
                <span>Charleston Lowcountry</span>
              </div>
              <span className="w-6 sm:w-8 h-px bg-star-blue"></span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-6">
              Our Service <span className="text-star-blue">Areas.</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Providing trusted, thorough house cleaning services across the Charleston Lowcountry for over 18 years. Find your city below to learn more about our local services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-700 bg-white p-3 sm:px-6 sm:py-3 rounded-2xl sm:rounded-full border border-slate-200/80 shadow-xs max-w-lg sm:max-w-none mx-auto">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /> Veteran Owned &bull; 18+ Years
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1 text-slate-800">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 shrink-0" /> 4.9 Rated on Google
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1.5 text-star-blue">
                <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" /> 100% Guaranteed
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          LOCATIONS GRID
         ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {locations.map((loc, idx) => (
              <ScrollReveal key={loc.slug} direction="up" delay={idx * 60}>
                <Link 
                  href={`/locations/${loc.slug}`}
                  className="bg-[#FAF9F7] hover:bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-star-blue/30 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full transform hover:-translate-y-1"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-2xl shadow-xs border border-slate-200/60 flex items-center justify-center mb-5 text-star-blue group-hover:bg-star-blue group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl font-medium text-slate-900 mb-2 group-hover:text-star-blue transition-colors">
                      {loc.name}, SC
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      Reliable residential, deep cleaning, and turnover services for {loc.name} homeowners.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-star-blue font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-200/60">
                    <span>View Location Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
