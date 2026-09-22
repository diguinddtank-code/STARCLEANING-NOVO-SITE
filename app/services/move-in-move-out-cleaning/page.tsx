import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import ReviewCard from '@/components/ReviewCard';
import OwnerMessage from '@/components/OwnerMessage';
import CleaningForAReason from '@/components/CleaningForAReason';
import ServiceAreas from '@/components/ServiceAreas';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Key, Truck, Sparkles, Phone } from 'lucide-react';

export const metadata = {
  title: 'Move-In & Move-Out Cleaning Charleston SC | Star Cleaning SC',
  description: 'Secure your deposit or enjoy a fresh start. Our veteran-owned move-in/move-out cleaning in Charleston SC guarantees a spotless, sanitized empty home.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/services/move-in-move-out-cleaning',
  },
};

export default function MoveInMoveOutCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Script id="move-in-move-out-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Move-In & Move-Out Cleaning Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Star Cleaning SC",
                "telephone": "(843) 297-9935",
                "url": "https://www.starcleaningsc.com"
              },
              "areaServed": ["Charleston, SC", "North Charleston, SC", "Summerville, SC", "Ladson, SC", "James Island, SC", "Daniel Island, SC"],
              "description": "Veteran-owned move-in/move-out cleaning in Charleston SC guaranteeing a spotless, sanitized empty home.",
              "serviceType": "Move-In/Move-Out Cleaning"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Do you guarantee I will get my security deposit back?", "acceptedAnswer": { "@type": "Answer", "text": "While we cannot guarantee the actions of your landlord regarding property damage or lease terms, we do guarantee our cleaning. If your landlord points out a cleaning issue within 24 hours, we will return to fix it at no extra charge." } },
                { "@type": "Question", "name": "Do I need to leave the electricity and water on?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. We require active power and running hot water to properly operate our vacuums, clean appliances, and mop the floors." } },
                { "@type": "Question", "name": "Do you clean carpets or just vacuum them?", "acceptedAnswer": { "@type": "Answer", "text": "We provide thorough, detailed vacuuming of all carpets. However, we do not offer hot water extraction (steam cleaning) for carpets. If your lease requires professional carpet shampooing, you will need to hire a specialized carpet vendor." } },
                { "@type": "Question", "name": "Can I book a move out cleaning in North Charleston on short notice?", "acceptedAnswer": { "@type": "Answer", "text": "We understand that moving schedules can be unpredictable. While we recommend booking 1-2 weeks in advance, please call us—we will do everything we can to accommodate short-notice requests in North Charleston." } },
                { "@type": "Question", "name": "Are you the best move in cleaners in Daniel Island?", "acceptedAnswer": { "@type": "Answer", "text": "Our clients certainly think so! Our veteran-owned discipline ensures that every cabinet, drawer, and baseboard in your new Daniel Island home is meticulously sanitized before you move your family in." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                { "@type": "ListItem", "position": 2, "name": "Move-In & Move-Out Cleaning", "item": "https://www.starcleaningsc.com/services/move-in-move-out-cleaning" }
              ]
            }
          ]
        })
      }} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image card */}
            <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/move-in-out.webp"
                alt="Moving boxes packed in a living room ready for a move-in or move-out clean"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Turnkey Ready</p>
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Move Right In</p>
                <div className="w-8 h-0.5 bg-white/80 mt-2"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 mb-4 font-bold text-xs uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 text-star-blue fill-star-blue" />
                Top-Rated Move-In/Move-Out Cleaning
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-heading leading-tight">
                Flawless Move-In &<br />
                <span className="text-star-blue">Move-Out Cleaning</span>
              </h1>
              <div className="w-12 h-1 bg-star-blue rounded-full my-4"></div>

              <div className="text-gray-600 text-base leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900 font-bold">Secure your deposit or enjoy a fresh start.</strong>{' '}
                  Our veteran-owned team guarantees a spotless, sanitized empty home so you can focus on the move, serving Charleston, SC and the surrounding Lowcountry.
                </p>
              </div>

              {/* Trust badges row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2.5 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Veteran-Owned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Deposit Safe</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Eco-Friendly</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 sm:gap-4 mt-6">
                <Link
                  href="/#quote"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-star-blue hover:bg-star-dark text-white px-4 sm:px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5 whitespace-nowrap text-center"
                >
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <a
                  href="tel:+18432979935"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-4 sm:px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-xs hover:border-star-blue/30 whitespace-nowrap text-center shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-star-blue shrink-0" />
                  <span>(843) 297-9935</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service area strip */}
        <div className="bg-slate-50 border-t border-slate-100 py-4">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <MapPin className="w-4 h-4 text-star-blue shrink-0" />
            <span className="text-star-blue font-bold text-xs uppercase tracking-widest shrink-0">Proudly Serving</span>
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
              Charleston • North Charleston • Summerville • Ladson • James Island • Daniel Island • And Surrounding Areas
            </span>
          </div>
        </div>
      </section>

      <OwnerMessage />

      <CleaningForAReason />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* INTRO PARAGRAPH */}
        <div className="prose prose-lg max-w-3xl mx-auto mb-16 text-slate-700">
          <p>
            Packing boxes, coordinating movers, and changing addresses is exhausting enough without having to scrub an empty house. Whether you are trying to secure your security deposit or wanting a sanitized fresh start in a new place, our <Link href="/locations/charleston" className="text-star-blue font-semibold hover:underline">move-in move-out cleaning in Charleston SC</Link> is the answer. Star Cleaning SC is a veteran-owned business that brings 18 years of disciplined experience to every apartment turnover and empty house cleaning. We know exactly what landlords and property managers look for during final walk-throughs in North Charleston, and we know how to make a newly purchased home in Summerville feel truly yours. We clean inside cabinets, tackle appliance interiors, and scrub baseboards, all using eco-friendly, pet-safe products so your new chapter starts perfectly clean.
          </p>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our Move-In/Move-Out Cleaning</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">This service is specifically designed for empty homes. Without furniture in the way, we can perform a highly detailed, wall-to-wall sanitation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kitchen & Appliances</h3>
              <ul className="space-y-3">
                {['Clean inside/outside cabinets and drawers', 'Scrub interior of refrigerator and freezer', 'Degrease interior of oven and stovetop', 'Sanitize countertops, sinks, and fixtures'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bathrooms</h3>
              <ul className="space-y-3">
                {['Intensive scrubbing of showers, tubs, and grout', 'Clean inside/outside vanities and cabinets', 'Disinfect toilets completely (base and behind)', 'Clean mirrors and polish chrome fixtures'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Whole-House Detailing</h3>
              <ul className="space-y-3">
                {['Hand-wipe baseboards, door frames, window sills', 'Clean interior windows and glass doors', 'Dust ceiling fans, fixtures, and air vents', 'Vacuum carpets thoroughly (edges/corners)', 'Sweep and mop hard floors to a shine'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 text-center font-medium flex items-center justify-center gap-3 max-w-2xl mx-auto shadow-sm">
            <Leaf className="w-6 h-6 text-emerald-500" />
            All products used are pet-safe and eco-friendly.
          </div>
        </div>

        {/* WHO IS THIS SERVICE FOR? */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Needs Moving Cleaning Services?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Renters Wanting Their Security Deposit Back</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Property managers are notoriously strict during move-out inspections. A dusty ceiling fan or a dirty oven can cost you hundreds of dollars from your deposit. Our apartment turnover cleaning is designed to meet the highest landlord standards. We handle the grueling deep cleaning so you can hand over the keys with confidence and get your money back.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Home Sellers Preparing for the Market</h3>
            <p className="text-slate-600 text-sm leading-relaxed">First impressions are everything in real estate. If you are listing your home, an empty, sparkling clean house looks larger, brighter, and more appealing to potential buyers. We remove the scuff marks, dust bunnies, and lingering odors, presenting your property in its absolute best light to help you secure top dollar.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">New Homeowners Wanting a Fresh Start</h3>
            <p className="text-slate-600 text-sm leading-relaxed">You just bought your dream home, but you don't know how the previous owners lived. Before you unpack a single box or let your kids crawl on the floors, you want the peace of mind that the space is completely sanitized. We eradicate the previous owner's dirt, pet dander, and germs, giving you a literal clean slate.</p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Simple 3-Step Process</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">Book Online or Call</h3>
            <p className="text-slate-600">Let us know your moving dates. We highly recommend scheduling the cleaning for the day after the movers leave (for move-outs) or the day before your furniture arrives (for move-ins).</p>
          </div>
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">We Show Up & Get to Work</h3>
            <p className="text-slate-600">Our background-checked team arrives with all necessary equipment. Since the house is empty, we can efficiently execute our top-to-bottom moving cleaning checklist.</p>
          </div>
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">3</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">You Enjoy a Spotless Space</h3>
            <p className="text-slate-600">Walk into a perfectly sanitized home. With our 100% satisfaction guarantee, you can focus entirely on unpacking and settling into your new life.</p>
          </div>
        </div>

        {/* PRICING TRANSPARENCY BLOCK */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Much Does Move-Out Cleaning Cost in Charleston, SC?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            When searching for "how much does move out cleaning cost in Charleston SC," you will find that pricing depends heavily on the size and condition of the empty property. Because this service includes time-consuming tasks like cleaning inside appliances and cabinets, it is priced higher than a standard maintenance clean. Factors that affect the quote include the total square footage, the number of bathrooms, and whether the home has been heavily lived-in or well-maintained. We provide upfront, transparent estimates with no hidden fees.
          </p>
          <p className="text-white font-medium text-lg">
            Contact us today for a free, no-obligation quote based on your specific property.
          </p>
        </div>

        {/* SERVICE AREA CALLOUT */}
        <div className="my-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-3 block flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" /> Service Coverage Map
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
              Serving All of Charleston & The Lowcountry
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              We proudly bring our elite, veteran-owned move-in and move-out cleaning services directly to your doorstep. Choose your neighborhood below to connect with our local precision teams:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mb-6">
            {[
              { name: "Charleston", url: "/locations/charleston", hover: "Historic Peninsula & Downtown", zip: "29401" },
              { name: "North Charleston", url: "/locations/north-charleston", hover: "Boeing, Tanger & Park Circle", zip: "29405" },
              { name: "Summerville", url: "/locations/summerville", hover: "Flowertown & Nexton builds", zip: "29483" },
              { name: "Ladson", url: "/locations/ladson", hover: "Military PCS & Suburban homes", zip: "29456" },
              { name: "James Island", url: "/locations/james-island", hover: "Beachside & Marshland retreats", zip: "29412" },
              { name: "Daniel Island", url: "/locations/daniel-island", hover: "Wando River Waterfront estate care", zip: "29492" }
            ].map((loc, i) => (
              <Link 
                key={i} 
                href={loc.url} 
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 block relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider mb-1 block">Zip {loc.zip}</span>
                    <h3 className="font-extrabold text-white text-base md:text-lg group-hover:text-blue-300 transition-colors">{loc.name}</h3>
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-snug group-hover:text-slate-300 transition-colors font-light">{loc.hover}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl transform translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you guarantee I will get my security deposit back?</h3>
            <p className="text-slate-600">A: While we cannot guarantee the actions of your landlord regarding property damage or lease terms, we do guarantee our cleaning. If your landlord points out a cleaning issue within 24 hours, we will return to fix it at no extra charge.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do I need to leave the electricity and water on?</h3>
            <p className="text-slate-600">A: Yes, absolutely. We require active power and running hot water to properly operate our vacuums, clean appliances, and mop the floors.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you clean carpets or just vacuum them?</h3>
            <p className="text-slate-600">A: We provide thorough, detailed vacuuming of all carpets. However, we do not offer hot water extraction (steam cleaning) for carpets. If your lease requires professional carpet shampooing, you will need to hire a specialized carpet vendor.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Can I book a move out cleaning in North Charleston on short notice?</h3>
            <p className="text-slate-600">A: We understand that moving schedules can be unpredictable. While we recommend booking 1-2 weeks in advance, please call us—we will do everything we can to accommodate short-notice requests in North Charleston.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Are you the best move in cleaners in Daniel Island?</h3>
            <p className="text-slate-600">A: Our clients certainly think so! Our veteran-owned discipline ensures that every cabinet, drawer, and baseboard in your new Daniel Island home is meticulously sanitized before you move your family in.</p>
          </div>
        </div>

        {/* SOCIAL PROOF BLOCK */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ReviewCard
            theme="light"
            variant="grid"
            text="Moving is so stressful, but Star Cleaning SC made the exit process a breeze. They did a move-out clean on our apartment in Charleston, and the property manager was so impressed. We got our full deposit back without a single question!"
            author="Michael B."
            location="Charleston"
          />
          <ReviewCard
            theme="light"
            variant="grid"
            text="We bought a house in Summerville that had been sitting vacant and was pretty dusty. The team came in and did a phenomenal move-in clean. Knowing the inside of the fridge and all the cabinets were sanitized gave me such peace of mind before unpacking."
            author="Lauren C."
            location="Summerville"
          />
          <ReviewCard
            theme="light"
            variant="grid"
            text="Highly professional and incredibly thorough. I needed an empty house cleaning in Ladson before putting my property on the market. The place sparkled and smelled amazing. It definitely helped us get top dollar for the house."
            author="James H."
            location="Ladson"
          />
        </div>

        {/* CLOSING CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Move-In/Move-Out Cleaning in Charleston?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let the stress of cleaning overshadow the excitement of your move. Let our background-checked professionals handle the heavy scrubbing so you can focus on the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#quote" className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-lg transition-colors text-lg shadow-md">
              Get Your Free Quote
            </Link>
            <a href="tel:+18432979935" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors text-lg border border-blue-500">
              Call or Text: (843) 297-9935
            </a>
          </div>
        </div>

        {/* INTERNAL LINKING BLOCK */}
        <div className="border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Our Other Cleaning Services</h2>
          <ul className="space-y-3 mb-6">
            <li><Link href="/services/residential-cleaning" className="text-blue-600 hover:underline font-medium">Residential Cleaning</Link>: Keep your home consistently spotless with weekly or bi-weekly visits.</li>
            <li><Link href="/services/deep-cleaning" className="text-blue-600 hover:underline font-medium">Deep Cleaning</Link>: A top-to-bottom intensive clean for homes that need a serious reset.</li>
            <li><Link href="/services/vacation-rental-airbnb-cleaning" className="text-blue-600 hover:underline font-medium">Vacation Rental Cleaning</Link>: Fast, reliable turnovers to keep your 5-star host rating intact.</li>
            <li><Link href="/services/commercial-office-cleaning" className="text-blue-600 hover:underline font-medium">Commercial Office Cleaning</Link>: Professional janitorial services for a healthier, more productive workspace.</li>
            <li><Link href="/services/post-construction-cleaning" className="text-blue-600 hover:underline font-medium">Post-Construction Cleaning</Link>: We remove the drywall dust and debris after your renovation project.</li>
          </ul>
          <p className="text-slate-600">
            View all our <Link href="/locations" className="text-blue-600 hover:underline">service areas</Link> or check out our <Link href="/#faq" className="text-blue-600 hover:underline">FAQ page</Link> for more details.
          </p>
        </div>
      </div>

      <ServiceAreas />

      <Footer />

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Move-In/Move-Out Cleaning",
            "serviceType": "Empty House Cleaning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Star Cleaning SC",
              "telephone": "(843) 297-9935",
              "url": "https://www.starcleaningsc.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Charleston"},
              {"@type": "City", "name": "North Charleston"},
              {"@type": "City", "name": "Ladson"},
              {"@type": "City", "name": "Summerville"},
              {"@type": "City", "name": "James Island"},
              {"@type": "City", "name": "Daniel Island"}
            ],
            "description": "Professional move-in move-out cleaning in Charleston SC. We sanitize empty homes, clean inside appliances, and guarantee satisfaction.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
              }
            }
          })
        }}
      />
    </main>
  );
}
