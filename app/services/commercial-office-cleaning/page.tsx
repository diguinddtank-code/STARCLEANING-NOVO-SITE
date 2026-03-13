import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, Building2, Briefcase, Store } from 'lucide-react';

export const metadata = {
  title: 'Commercial & Office Cleaning Services in Charleston, SC | Star Cleaning SC',
  description: 'Professional commercial and office cleaning in Charleston, SC. Veteran-owned, reliable, and thorough cleaning for your business. Get a free quote today!',
  alternates: {
    canonical: 'https://starcleaningsc.com/services/commercial-office-cleaning',
  }
};

export default function CommercialCleaningPage() {
  return (
    <>
      <Script id="commercial-cleaning-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Commercial & Office Cleaning Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Star Cleaning SC",
            "telephone": "(843) 297-9935",
            "url": "https://starcleaningsc.com"
          },
          "areaServed": ["Charleston, SC", "North Charleston, SC", "Summerville, SC"],
          "description": "Expert commercial and office cleaning services in Charleston, SC.",
          "serviceType": "Commercial Cleaning"
        })
      }} />

      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-800/50 to-transparent blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-medium text-sm mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Serving Charleston, SC & Surrounding Areas
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Commercial Cleaning</span> for Your Business
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Maintain a pristine, productive workspace with our veteran-owned commercial cleaning services. We deliver military-grade precision to offices, retail spaces, and facilities across the Lowcountry.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <Link href="/quote" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                  Get a Free Commercial Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:8432979935" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                  (843) 297-9935
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mb-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">5-Star Rated</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-1">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">Veteran-Owned</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                    <ThumbsUp className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">100% Guaranteed</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-1">
                    <Leaf className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">Eco-Friendly</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[2rem] blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Clean modern office space in Charleston SC" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Badge 1 */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transform translate-y-4 hover:translate-y-0 transition-transform duration-500 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-inner">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Fully Insured</p>
                      <p className="text-blue-200 text-xs">$2M Policy</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                    <p className="text-white font-medium flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                      "They transformed our office environment completely."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Elevate Your Business Image with Expert Commercial Cleaning in Charleston, SC</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A clean workspace is not just about aesthetics; it is a fundamental driver of employee productivity, health, and client perception. When searching for reliable <strong>commercial cleaning in Charleston, SC</strong>, businesses need a partner who understands the unique demands of professional environments. Star Cleaning SC brings 18 years of military-honed discipline to every office, retail store, and commercial facility we service. We know that a spotless reception area builds immediate trust with your visitors, while sanitized breakrooms and restrooms keep your workforce healthy and focused. Our background-checked, highly trained team utilizes eco-friendly, pet-safe products to deliver a superior clean without harsh chemical odors, ensuring your business operations run smoothly and your brand shines brightly in the competitive Lowcountry market.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Commercial Cleaning Includes</h2>
            <p className="text-lg text-slate-600">We customize our checklists to fit your facility's specific needs, but our standard commercial service covers all the critical areas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Workspaces & Offices</h3>
              <ul className="space-y-3">
                {['Dusting desks, monitors, and electronics', 'Emptying individual trash bins', 'Vacuuming carpets and rugs', 'Sweeping and mopping hard floors', 'Sanitizing high-touch points (doorknobs, light switches)', 'Cleaning glass doors and interior windows'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Store className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Reception & Common Areas</h3>
              <ul className="space-y-3">
                {['Straightening magazines and seating areas', 'Dusting reception desks and decor', 'Polishing glass entryways', 'Vacuuming high-traffic areas', 'Sanitizing shared equipment (copiers, water coolers)', 'Emptying central waste receptacles'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Breakrooms & Restrooms</h3>
              <ul className="space-y-3">
                {['Sanitizing toilets, sinks, and urinals', 'Restocking paper products and soap', 'Cleaning microwave interiors and exteriors', 'Wiping down breakroom tables and counters', 'Cleaning refrigerator exteriors', 'Mopping floors with disinfectant'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who is This Service For? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Who Benefits from Our Commercial Cleaning?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate Offices</h3>
              <p className="text-slate-600">Law firms, tech companies, and corporate headquarters that require a pristine, professional environment to impress high-value clients and maintain employee morale.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Store className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Retail Boutiques</h3>
              <p className="text-slate-600">Local shops and storefronts in Charleston that need spotless floors, gleaming display windows, and dust-free shelves to create an inviting shopping experience.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Small Businesses</h3>
              <p className="text-slate-600">Agencies, studios, and local service providers who want to outsource their cleaning to a reliable, background-checked team so they can focus entirely on their core business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Onboarding Process</h2>
            <p className="text-slate-400 text-lg">We make it incredibly easy to upgrade your facility's cleanliness with zero disruption to your daily operations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 w-full animate-pulse"></div>
            </div>
            
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 relative z-10 border-4 border-slate-900 shadow-xl">1</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Facility Walkthrough</h3>
              <p className="text-slate-400">We visit your location to assess the square footage, identify high-traffic areas, and understand your specific operational requirements and security protocols.</p>
            </div>
            
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 relative z-10 border-4 border-slate-900 shadow-xl">2</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Custom Proposal</h3>
              <p className="text-slate-400">You receive a tailored cleaning schedule (daily, weekly, or bi-weekly) and a transparent pricing quote based exactly on the services your business actually needs.</p>
            </div>
            
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 relative z-10 border-4 border-slate-900 shadow-xl">3</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Consistent Execution</h3>
              <p className="text-slate-400">Our dedicated, uniformed team arrives on schedule, delivering a meticulous clean while respecting your workspace, allowing your team to thrive in a fresh environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-blue-600 p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Commercial Cleaning Pricing in Charleston</h2>
              <p className="text-blue-100">Transparent, competitive rates tailored to your business.</p>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                When business owners ask, "How much does commercial cleaning cost in Charleston, SC?", the answer depends heavily on the facility's size, the frequency of service, and the specific tasks required. Unlike residential cleaning, commercial spaces have vastly different foot traffic and usage patterns.
              </p>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                We do not believe in one-size-fits-all contracts. Instead, we provide customized quotes after a brief, free facility walkthrough. Whether you need a light weekly touch-up for a small boutique or comprehensive daily sanitization for a bustling corporate office, we build a plan that fits your operational budget without compromising on our military-grade standards.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Factors that influence your custom quote:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Total square footage</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Number of restrooms/breakrooms</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Frequency of service</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Specialized equipment needs</li>
                </ul>
              </div>
              <div className="mt-8 text-center">
                <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors">
                  Request Your Custom Proposal <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Callout */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Serving Businesses Across the Lowcountry</h2>
          <p className="text-slate-600 text-lg mb-8">
            Star Cleaning SC provides reliable commercial cleaning services to businesses throughout the greater Charleston area. Whether your office is downtown or in the surrounding suburbs, our team is ready to serve you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Charleston', 'North Charleston', 'Mount Pleasant', 'Summerville', 'James Island', 'Daniel Island'].map((city) => (
              <span key={city} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {city}, SC
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer after-hours commercial cleaning in Charleston?",
                a: "Absolutely. We understand that cleaning during business hours can disrupt your operations. We offer flexible scheduling, including evenings and weekends, to ensure your workspace is cleaned without interfering with your staff or clients."
              },
              {
                q: "Is your commercial cleaning staff insured and background-checked?",
                a: "Yes. Security and trust are paramount, especially in commercial environments. As a veteran-owned business, we maintain strict standards. Every team member undergoes a comprehensive background check, and our company is fully licensed, bonded, and insured for your complete peace of mind."
              },
              {
                q: "Do we need to provide our own cleaning supplies or equipment?",
                a: "No, you do not need to supply anything. Star Cleaning SC brings all necessary commercial-grade equipment and our own eco-friendly, highly effective cleaning products. If your facility requires specific specialized chemicals, we can accommodate those requests during our initial consultation."
              },
              {
                q: "Do you require long-term commercial cleaning contracts?",
                a: "We believe in earning your business through consistent, high-quality service, not locking you into rigid long-term contracts. We offer flexible month-to-month agreements that can be adjusted as your business needs change."
              },
              {
                q: "How do you handle building security and keys?",
                a: "We take facility security very seriously. We have strict key-handling protocols and alarm management procedures in place. Only authorized, background-checked team members assigned to your specific facility will have access to your building credentials."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Trusted by Local Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "David M.",
                role: "Law Firm Partner, Downtown Charleston",
                text: "We switched to Star Cleaning SC six months ago, and the difference is night and day. Our conference rooms always look immaculate for client meetings. Their attention to detail and professionalism are exactly what we needed."
              },
              {
                name: "Sarah L.",
                role: "Tech Startup Founder, North Charleston",
                text: "Finding a reliable cleaning service that works around our erratic startup hours was tough until we found this veteran-owned crew. They are punctual, thorough, and the eco-friendly products mean our office never smells like harsh chemicals."
              },
              {
                name: "Michael T.",
                role: "Retail Store Manager, Mount Pleasant",
                text: "First impressions are everything in retail. Star Cleaning ensures our floors shine and our fitting rooms are spotless every single morning. Their communication is excellent, and they truly care about the quality of their work."
              }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a Spotless Workspace?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Partner with Charleston's most reliable commercial cleaning team. Let us handle the mess so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-50 transition-colors text-lg">
              Get Your Free Custom Quote
            </Link>
            <a href="tel:8432979935" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors border border-blue-500 text-lg">
              Call (843) 297-9935
            </a>
          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <section className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Other Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/residential-cleaning" className="hover:text-blue-400 transition-colors">Residential Cleaning</Link></li>
                <li><Link href="/services/deep-cleaning" className="hover:text-blue-400 transition-colors">Deep Cleaning</Link></li>
                <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-blue-400 transition-colors">Move-In/Out Cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Specialty Cleaning</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-blue-400 transition-colors">Airbnb Cleaning</Link></li>
                <li><Link href="/services/post-construction-cleaning" className="hover:text-blue-400 transition-colors">Post-Construction</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/locations/charleston" className="hover:text-blue-400 transition-colors">Charleston, SC</Link></li>
                <li><Link href="/locations/north-charleston" className="hover:text-blue-400 transition-colors">North Charleston, SC</Link></li>
                <li><Link href="/locations/summerville" className="hover:text-blue-400 transition-colors">Summerville, SC</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
