import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { locationsData } from '@/lib/locationsData';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: 'Service Areas | Star Cleaning SC',
  description: 'Star Cleaning SC provides top-rated house cleaning services across the Charleston Lowcountry, including Charleston, Summerville, and Mount Pleasant.',
};

export default function LocationsHub() {
  const locations = Object.values(locationsData);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Cleaning products background"
            fill
            className="object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-6">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Charleston Lowcountry</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Our Service Areas
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
