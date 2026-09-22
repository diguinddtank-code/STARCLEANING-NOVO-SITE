import { notFound } from 'next/navigation';
import { locationsData } from '@/lib/locationsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import ReviewCard from '@/components/ReviewCard';
import OwnerMessage from '@/components/OwnerMessage';
import CleaningForAReason from '@/components/CleaningForAReason';
import ServiceAreas from '@/components/ServiceAreas';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Star, ShieldCheck, Clock, MapPin, Leaf, Home as HomeIcon, ArrowRight, Phone } from 'lucide-react';

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

  // Parse markdown-like bolding in intro, turning the primary keyword phrase
  // into a real internal link instead of just bold text styled to look like one
  const renderIntro = (text: string, linkHref?: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const label = part.slice(2, -2);
        if (linkHref) {
          return (
            <Link key={i} href={linkHref} className="text-star-blue font-semibold hover:underline">
              {label}
            </Link>
          );
        }
        return <strong key={i} className="text-slate-900">{label}</strong>;
      }
      return part;
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-star-blue/10 selection:text-star-blue">
      <Navbar />

      {/* =========================================================================
          HERO SECTION: Responsive, Clean & Mobile-Optimized
         ========================================================================= */}
      <section className="relative py-10 sm:py-16 lg:py-24 bg-[#FAF9F7] border-b border-slate-100 overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute -bottom-24 left-10 w-96 h-96 bg-amber-50/80 rounded-full blur-3xl mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Copy Column (Full width on mobile) */}
            <div className="lg:col-span-7 text-left">
              <ScrollReveal direction="up" delay={50}>
                
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
                  <span className="w-6 sm:w-8 h-px bg-star-blue"></span>
                  <div className="inline-flex items-center gap-1.5 text-star-blue font-bold uppercase tracking-[0.18em] text-[11px] sm:text-xs">
                    <MapPin className="w-3.5 h-3.5 text-star-blue shrink-0" />
                    <span>Serving {data.name}, SC</span>
                  </div>
                </div>

                {/* H1 Heading in Brand Serif */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
                  House Cleaning Services in{' '}
                  <span className="text-star-blue">{data.name}, SC.</span>
                </h1>

                {/* Subtitle / Copy */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl">
                  {data.hero.subtitle || `Experience the trusted, veteran-owned house cleaning service that ${data.name} families rely on. Thorough, reliable, and 100% satisfaction guaranteed.`}
                </p>

                {/* Call to Actions (Optimized side-by-side on both mobile and desktop) */}
                <div className="flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
                  <Link
                    href="/quote"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-star-blue hover:bg-star-dark text-white px-4 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-star-blue/20 whitespace-nowrap text-center"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  </Link>

                  <a
                    href="tel:+18432979935"
                    className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-colors shadow-xs hover:border-star-blue/30 whitespace-nowrap text-center shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-star-blue shrink-0" />
                    <span>(843) 297-9935</span>
                  </a>
                </div>

                {/* Trust Badges: Perfectly Aligned & Stacked on Mobile */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200/80">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
                    
                    {/* Google Rating Item */}
                    <div className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 shadow-xs sm:shadow-none">
                      <div className="w-8 h-8 rounded-full bg-slate-50 sm:bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex text-yellow-400 text-xs gap-0.5">
                          <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 leading-tight">4.9 Rated on Google</span>
                      </div>
                    </div>

                    {/* Veteran Owned */}
                    <div className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 shadow-xs sm:shadow-none sm:border-l sm:border-slate-200/80 sm:pl-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800 leading-tight">Veteran Owned</span>
                        <span className="text-[11px] text-slate-500">18+ Years Serving SC</span>
                      </div>
                    </div>

                    {/* Background Checked */}
                    <div className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-100 shadow-xs sm:shadow-none sm:border-l sm:border-slate-200/80 sm:pl-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-star-blue border border-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800 leading-tight">Background-Checked</span>
                        <span className="text-[11px] text-slate-500">100% Vetted Staff</span>
                      </div>
                    </div>

                  </div>
                </div>

              </ScrollReveal>
            </div>

            {/* Right Photo Column: Desktop & Tablet only (hidden on mobile as requested) */}
            <div className="hidden lg:block lg:col-span-5">
              <ScrollReveal direction="left" delay={150}>
                <div className="relative mx-auto max-w-md">
                  {/* Clean Photography Card */}
                  <div className="relative aspect-[4/3.5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white group">
                    <Image
                      src="/images/residential.png"
                      alt={`Star Cleaning SC team members cleaning a home in ${data.name}`}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Elegant overlay caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif font-bold text-lg leading-tight">100% Satisfaction Guarantee</p>
                          <p className="text-xs text-slate-200 mt-0.5">Reliable &amp; pet-friendly house cleaning</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial handwritten note */}
                  <p className="font-handwriting text-3xl text-star-blue absolute -bottom-6 right-2 text-right leading-tight z-20 drop-shadow-sm select-none pointer-events-none">
                    More Time For What Matters.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          INTRO / ABOUT LOCAL SERVICE SECTION
         ========================================================================= */}
      <section className="bg-white py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Image card */}
            <ScrollReveal direction="right" delay={100}>
              <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/images/clean-living-room.jpg"
                  alt={`Bright, tidy living room after a Star Cleaning SC deep clean in ${data.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
                  <p className="uppercase tracking-[0.2em] text-xs font-bold text-blue-200">Clean Spaces</p>
                  <p className="font-serif text-xl sm:text-2xl font-medium mt-1">Brighter Days for {data.name}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal direction="left" delay={100}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                    Top-Rated in {data.name}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-6">
                  Trusted House Cleaning<br />
                  in <span className="text-star-blue">{data.name}, SC.</span>
                </h2>

                <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4 mb-8">
                  <p>
                    <strong className="text-slate-900 font-bold">Life gets busy. Let us handle the cleaning.</strong>{' '}
                    {renderIntro(data.intro, '/services/residential-cleaning')}
                  </p>
                </div>

                {/* Trust icons row */}
                <div className="grid grid-cols-3 gap-3 py-6 border-y border-slate-100">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-star-blue flex items-center justify-center mx-auto mb-2">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 block">Vetted Team</span>
                    <span className="text-[11px] text-slate-500">100% background-checked</span>
                  </div>

                  <div className="text-center border-x border-slate-100">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 block">Pet-Safe</span>
                    <span className="text-[11px] text-slate-500">Gentle &amp; eco-friendly</span>
                  </div>

                  <div className="text-center">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2">
                      <HomeIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 block">18+ Years</span>
                    <span className="text-[11px] text-slate-500">Lowcountry experience</span>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2.5 sm:gap-4 mt-8">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 bg-star-blue hover:bg-star-dark text-white px-6 sm:px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-star-blue/20 whitespace-nowrap text-center"
                  >
                    <span>Get a Free Estimate</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

        {/* Proudly serving strip */}
        {data.landmarks && (
          <div className="bg-slate-50 border-t border-slate-100 py-3.5 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <MapPin className="w-4 h-4 text-star-blue shrink-0" />
              <span className="text-star-blue font-bold text-xs uppercase tracking-widest shrink-0">Proudly Serving:</span>
              <span className="text-slate-600 text-xs sm:text-sm font-medium">
                {data.landmarks.join(' • ')} • And Surrounding Neighborhoods
              </span>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SERVICES SECTION
         ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Capabilities</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">
                Our Cleaning Services in <span className="text-star-blue">{data.name}.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive cleaning solutions tailored to your home's unique needs.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Residential Cleaning", desc: "Regular upkeep to keep your home consistently fresh and welcoming.", img: "/images/residential.png", alt: "Star Cleaning SC team members wiping down a glass table in a client's living room", href: "/services/residential-cleaning" },
              { title: "Deep Cleaning", desc: "Intensive, top-to-bottom cleaning targeting hidden dirt and grime.", img: "/images/deep-cleaning.webp", alt: "Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray", href: "/services/deep-cleaning" },
              { title: "Move In/Out Cleaning", desc: "Detailed cleaning to ensure you get your deposit back or start fresh.", img: "/images/move-in-out.webp", alt: "Moving boxes packed in a living room ready for a move-in or move-out clean", href: "/services/move-in-move-out-cleaning" },
              { title: "Airbnb/Vacation Rental", desc: "Fast, reliable turnover cleaning to guarantee 5-star guest reviews.", img: "/images/airbnb.webp", alt: "Hand holding a phone with the Airbnb app open in a rental apartment kitchen", href: "/services/vacation-rental-airbnb-cleaning" },
              { title: "Commercial Office", desc: "Professional cleaning for a healthier, more productive workspace.", img: "/images/commercial.webp", alt: "Wiping down an office desk near a computer monitor", href: "/services/commercial-office-cleaning" },
              { title: "Post-Construction", desc: "Thorough removal of drywall dust and debris after renovations.", img: "/images/post-construction.webp", alt: "Room mid-renovation with construction dust and debris on the floor", href: "/services/post-construction-cleaning" }
            ].map((service, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 60}>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.img}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-slate-900 mb-2 group-hover:text-star-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                    </div>
                    <Link
                      href={service.href}
                      className="text-star-blue font-bold text-sm inline-flex items-center gap-1.5 hover:underline mt-auto"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US
         ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">The Star Standard</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">
                Why {data.name} Homeowners Choose <span className="text-star-blue">Star Cleaning.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We bring reliability, care, and attention to detail to every home we touch.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {data.whyChooseUs.map((item: any, i: number) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="bg-[#FAF9F7] p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-star-blue mb-4">
                    <CheckCircle2 className="w-5 h-5 text-star-blue" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Message & Non-Profit Mission */}
      <OwnerMessage />
      <CleaningForAReason />

      {/* =========================================================================
          REVIEWS SECTION
         ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Real Feedback</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">
                What Our Clients in <span className="text-star-blue">{data.name} Say.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Read authentic testimonials from homeowners right in your community.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {data.reviews.map((rev: any, i: number) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="bg-[#FAF9F7] p-8 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex text-yellow-400 gap-1 mb-4">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-6">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{rev.author}</span>
                    <span className="text-xs text-star-blue font-semibold">{data.name}, SC</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
         ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#FAF9F7] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Clear Answers</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">
                {data.name} Cleaning <span className="text-star-blue">FAQs.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Got questions about scheduling, access, or products in {data.name}? We have answers.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {data.faqs.map((faq: any, i: number) => (
              <ScrollReveal key={i} direction="up" delay={i * 60}>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* =========================================================================
          BOOKING FORM SECTION
         ========================================================================= */}
      <section id="book-now" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
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
                Get your free, no-obligation cleaning quote in {data.name} in minutes.
              </p>
            </div>
          </ScrollReveal>
          <BookingForm showPricing={false} />
        </div>
      </section>

      <Footer />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": `https://www.starcleaningsc.com/locations/${data.slug}#localbusiness`,
                "name": `Star Cleaning SC - ${data.name}`,
                "image": "https://www.starcleaningsc.com/images/residential.png",
                "telephone": "+1-843-297-9935",
                "email": "contact@starcleaningsc.com",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": data.name,
                  "addressRegion": "SC",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": data.coordinates.lat,
                  "longitude": data.coordinates.lng
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Saturday"],
                    "opens": "09:00",
                    "closes": "15:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=100068655907779",
                  "https://instagram.com/star.cleaningsc",
                  "https://share.google/udkA7cxV0VCC39Ag2"
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
                  "ratingValue": "4.9",
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
