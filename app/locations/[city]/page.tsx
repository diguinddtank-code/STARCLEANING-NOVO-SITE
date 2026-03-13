import { notFound } from 'next/navigation';
import { locationsData } from '@/lib/locationsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(locationsData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = locationsData[city];
  if (!data) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://starcleaningsc.com/locations/${data.slug}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = locationsData[city];

  if (!data) {
    notFound();
  }

  // Parse markdown-like bolding in intro
  const renderIntro = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-blue-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-6">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Serving {data.name}, SC</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                {data.hero.h1}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {data.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="#book-now" 
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  Get a Free Quote
                </Link>
                <a 
                  href="tel:8432979935" 
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  (843) 297-9935
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-10 pt-10 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-200 overflow-hidden relative">
                        <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-left">
                    <div className="flex text-yellow-400 text-xs">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                    <span className="font-medium text-white">5.0 Rated</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Veteran Owned
                </div>
              </div>
            </div>
            
            {/* Right Image Composition */}
            <div className="lg:w-1/2 relative hidden md:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Image */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-8 border-slate-900/50 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                    alt={`Cleaning service in ${data.name}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Spotless Guarantee</p>
                        <p className="text-blue-200 text-sm">100% satisfaction on every clean</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-white text-slate-900 rounded-2xl p-4 shadow-xl transform -rotate-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">Top Rated</span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">in {data.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://i.imgur.com/gpqI75Lh.jpg" 
                  alt={`Clean home in ${data.name}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 mb-6 font-medium text-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Top-Rated in {data.name}
              </div>
              <div className="prose prose-lg prose-blue text-slate-600 leading-relaxed">
                <p className="text-xl">{renderIntro(data.intro)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Cleaning Services in {data.name}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive cleaning solutions tailored to your home's unique needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Residential Cleaning", desc: "Regular upkeep to keep your home consistently fresh and welcoming.", img: "https://mistyclean.com/wp-content/uploads/2024/07/Banner-img-Professional-cleaning-Services-in-Maryland-scaled.webp" },
              { title: "Deep Cleaning", desc: "Intensive, top-to-bottom cleaning targeting hidden dirt and grime.", img: "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80" },
              { title: "Move In/Out Cleaning", desc: "Detailed cleaning to ensure you get your deposit back or start fresh.", img: "https://jjccservices.com/wp-content/uploads/2025/03/Move-In-Move-Out-Cleaning-Checklist-Latest-2021-Update.jpg" },
              { title: "Airbnb/Vacation Rental", desc: "Fast, reliable turnover cleaning to guarantee 5-star guest reviews.", img: "https://prohousekeepers.com/wp-content/uploads/2020/03/airbnb_pixabay-e1584981299557-1.jpg" },
              { title: "Commercial Office", desc: "Professional cleaning for a healthier, more productive workspace.", img: "https://nextdaycleaning.com/wp-content/uploads/2020/12/What-are-the-Benefits-of-Commercial-Office-Cleaning-1024x683.jpg" },
              { title: "Post-Construction", desc: "Thorough removal of drywall dust and debris after renovations.", img: "https://imperialcleaning.com/wp-content/uploads/2019/03/Post-Construction-Cleaning-Services.jpg" }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={service.img} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-slate-500 font-medium">Proudly serving {data.name} and surrounding areas.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Star Cleaning SC in {data.name}?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Veteran-owned, military precision, and a commitment to your complete satisfaction.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.whyChooseUs.map((reason: any, i: number) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-blue-900/80 border border-blue-700/50 backdrop-blur-sm hover:bg-blue-800/80 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Your Clean?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Transparent checklists so you know exactly what to expect.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
                Standard Clean
              </h3>
              <ul className="space-y-4">
                {[
                  "Dust all accessible surfaces",
                  "Wipe down exterior of appliances",
                  "Clean and sanitize countertops",
                  "Scrub and sanitize toilets, sinks, and showers",
                  "Vacuum all carpets and rugs",
                  "Sweep and mop all hard floors"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-blue-500" />
                Deep Clean Additions
              </h3>
              <ul className="space-y-4">
                {[
                  "Hand-wipe baseboards and door frames",
                  "Clean interior windows and sills",
                  "Deep scrub tile grout",
                  "Dust ceiling fans and light fixtures",
                  "Clean inside microwave and oven (upon request)",
                  "Wipe down cabinet exteriors"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by {data.name} Residents</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {data.reviews.map((review: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-slate-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book-now" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Book Your {data.name} Cleaning</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get a free, instant quote and schedule your cleaning online in under 60 seconds.</p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about our {data.name} cleaning services.</p>
          </div>
          
          <div className="space-y-6">
            {data.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner Home in {data.name}?</h2>
          <p className="text-xl text-blue-100 mb-10">Join hundreds of satisfied customers in the Lowcountry who trust Star Cleaning SC.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#book-now" 
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Book Now
            </Link>
            <a 
              href="tel:8432979935" 
              className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-xl font-semibold transition-all"
            >
              Call (843) 297-9935
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HouseCleaning",
            "name": "Star Cleaning SC",
            "image": "https://starcleaningsc.com/star-cleaning-sc.jpg",
            "@id": `https://starcleaningsc.com/locations/${data.slug}`,
            "url": `https://starcleaningsc.com/locations/${data.slug}`,
            "telephone": "+18432979935",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": data.name,
              "sameAs": `https://en.wikipedia.org/wiki/${data.name.replace(' ', '_')},_South_Carolina`
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": data.coordinates.lat,
                "longitude": data.coordinates.lng
              },
              "geoRadius": "20000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cleaning Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Move In/Out Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airbnb/Vacation Rental Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Office Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Construction Cleaning" } }
              ]
            }
          })
        }}
      />
    </main>
  );
}
