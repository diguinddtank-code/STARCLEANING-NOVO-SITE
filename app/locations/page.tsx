import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { locationsData } from '@/lib/locationsData';
import { MapPin } from 'lucide-react';

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
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="relative pt-14 sm:pt-16 pb-16 lg:pt-24 lg:pb-28 overflow-hidden bg-[#0A192F] text-white">
        {/* Background elements with rich depth and ambient light */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/hero-background.jpg"
            alt="Cleaning products laid out on a wooden surface"
            fill
            priority
            className="object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/85 via-[#0D2447]/80 to-[#0A192F]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.18),transparent_70%)]" />
          <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-0 w-96 h-96 bg-star-blue/10 rounded-full blur-3xl pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-star-blue/15 border border-star-blue/30 backdrop-blur-md mb-6 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">Charleston Lowcountry</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-sm">
            Our Service Areas
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed">
            Providing military-precision house cleaning across the Charleston Lowcountry. Find your city below to learn more about our local services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link 
                key={loc.slug} 
                href={`/locations/${loc.slug}`}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{loc.name}, SC</h2>
                <p className="text-slate-500 text-sm">View cleaning services &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
