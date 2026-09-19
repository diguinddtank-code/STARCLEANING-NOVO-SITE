import { notFound } from 'next/navigation';
import { locationsData } from '@/lib/locationsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import ReviewCard from '@/components/ReviewCard';
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
      canonical: `https://www.starcleaningsc.com/locations/${data.slug}`,
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
            src="/images/hero-background.jpg"
            alt="Cleaning products laid out on a wooden surface"
            fill
            className="object-cover opacity-10"
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
                  href="tel:+18432979935" 
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
                    src="/images/residential.png"
                    alt={`Star Cleaning SC team members cleaning a home in ${data.name}`}
                    fill
                    className="object-cover"
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
                  src="/images/clean-living-room.jpg"
                  alt={`Bright, tidy living room after a Star Cleaning SC deep clean in ${data.name}`}
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
                {data.localDetails && (
                  <p className="text-xl">
                    {data.localDetails}{' '}
                    Need more than a routine visit? See our dedicated{' '}
                    <Link href={`/deep-cleaning-${data.slug}-sc`} className="text-blue-600 font-semibold hover:text-blue-700">
                      {data.name} deep cleaning page
                    </Link>{' '}
                    for baseboard-to-vent detailing built around this area's specific dirt and dust.
                  </p>
                )}
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
              { title: "Residential Cleaning", desc: "Regular upkeep to keep your home consistently fresh and welcoming.", img: "/images/residential.png", alt: "Star Cleaning SC team members wiping down a glass table in a client's living room", href: "/services/residential-cleaning" },
              { title: "Deep Cleaning", desc: "Intensive, top-to-bottom cleaning targeting hidden dirt and grime.", img: "/images/deep-cleaning.webp", alt: "Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray", href: "/services/deep-cleaning" },
              { title: "Move In/Out Cleaning", desc: "Detailed cleaning to ensure you get your deposit back or start fresh.", img: "/images/move-in-out.webp", alt: "Moving boxes packed in a living room ready for a move-in or move-out clean", href: "/services/move-in-move-out-cleaning" },
              { title: "Airbnb/Vacation Rental", desc: "Fast, reliable turnover cleaning to guarantee 5-star guest reviews.", img: "/images/airbnb.webp", alt: "Hand holding a phone with the Airbnb app open in a rental apartment kitchen", href: "/services/vacation-rental-airbnb-cleaning" },
              { title: "Commercial Office", desc: "Professional cleaning for a healthier, more productive workspace.", img: "/images/commercial.webp", alt: "Wiping down an office desk near a computer monitor", href: "/services/commercial-office-cleaning" },
              { title: "Post-Construction", desc: "Thorough removal of drywall dust and debris after renovations.", img: "/images/post-construction.webp", alt: "Room mid-renovation with construction dust and debris on the floor", href: "/services/post-construction-cleaning" }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{data.serviceDescriptions?.[i] || service.desc}</p>
                  <Link href={service.href} className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
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
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/deep-cleaning.webp')] bg-cover bg-center" />
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
                  "Sweep and mop all hard floors",
                  ...(data.checklistExtra?.standard ? [data.checklistExtra.standard] : [])
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
                  "Wipe down cabinet exteriors",
                  ...(data.checklistExtra?.deep ? [data.checklistExtra.deep] : [])
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
              <ReviewCard
                key={i}
                text={review.text}
                author={review.author}
                location={`${data.name}, SC`}
                rating={5}
                theme="light"
                variant="grid"
              />
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
          <BookingForm showPricing={false} />
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
              href="tel:+18432979935" 
              className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-xl font-semibold transition-all"
            >
              Call or Text (843) 297-9935
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
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "name": "Star Cleaning SC",
                "image": "https://www.starcleaningsc.com/star-cleaning-sc.jpg",
                "@id": `https://www.starcleaningsc.com/locations/${data.slug}`,
                "url": `https://www.starcleaningsc.com/locations/${data.slug}`,
                "telephone": "+18432979935",
                "email": "admin@starcleaningsc.com",
                "priceRange": "$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "sameAs": [
                  "https://instagram.com/star.cleaningsc",
                  "https://www.google.com/search?kgmid=/g/11wqhvvy11&hl=en"
                ],
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
                },
                "review": data.reviews.map((review: any) => ({
                  "@type": "Review",
                  "author": { "@type": "Person", "name": review.author },
                  "reviewBody": review.text,
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                })),
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "reviewCount": data.reviews.length
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": data.faqs.map((faq: any) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.starcleaningsc.com/locations" },
                  { "@type": "ListItem", "position": 3, "name": data.name, "item": `https://www.starcleaningsc.com/locations/${data.slug}` }
                ]
              }
            ]
          })
        }}
      />
    </main>
  );
}
