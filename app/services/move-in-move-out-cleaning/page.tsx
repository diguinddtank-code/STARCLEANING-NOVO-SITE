import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Key, Truck, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Move-In & Move-Out Cleaning Charleston SC | Star Cleaning SC',
  description: 'Secure your deposit or enjoy a fresh start. Our veteran-owned move-in/move-out cleaning in Charleston SC guarantees a spotless, sanitized empty home.',
};

export default function MoveInMoveOutCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
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
                Flawless <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Move-In & Move-Out</span> Cleaning
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Secure your deposit or enjoy a fresh start. Our veteran-owned team guarantees a spotless, sanitized empty home so you can focus on the move.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <Link href="/quote" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                  Get a Free Estimate <ArrowRight className="w-5 h-5" />
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
                  <span className="text-sm text-slate-300 font-medium">Deposit Safe</span>
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
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Spotless empty living room ready for move-in" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Badge 1 */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transform translate-y-4 hover:translate-y-0 transition-transform duration-500 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-inner">
                      <Key className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Turnkey Ready</p>
                      <p className="text-blue-200 text-xs">Move right in</p>
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
                      "Got my full deposit back. The place looked better than when I moved in!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* INTRO PARAGRAPH */}
        <div className="prose prose-lg max-w-none mb-16 text-slate-700">
          <p>
            Packing boxes, coordinating movers, and changing addresses is exhausting enough without having to scrub an empty house. Whether you are trying to secure your security deposit or wanting a sanitized fresh start in a new place, our <strong>move-in move-out cleaning in Charleston SC</strong> is the answer. Star Cleaning SC is a veteran-owned business that brings 18 years of disciplined experience to every apartment turnover and empty house cleaning. We know exactly what landlords and property managers look for during final walk-throughs in North Charleston, and we know how to make a newly purchased home in Summerville feel truly yours. We clean inside cabinets, tackle appliance interiors, and scrub baseboards, all using eco-friendly, pet-safe products so your new chapter starts perfectly clean.
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
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving All of Charleston & The Lowcountry</h2>
        <p className="text-slate-600 mb-6 text-lg">Whether you are moving across town or relocating to the area, we provide premier empty house cleaning across the entire region.</p>
        <div className="flex flex-wrap gap-3 mb-16">
          <Link href="/locations/charleston" className="px-4 py-2 bg-white border border-slate-200 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors">Charleston</Link>
          <Link href="/locations/north-charleston" className="px-4 py-2 bg-white border border-slate-200 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors">North Charleston</Link>
          <Link href="/locations/ladson" className="px-4 py-2 bg-white border border-slate-200 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors">Ladson</Link>
          <Link href="/locations/summerville" className="px-4 py-2 bg-white border border-slate-200 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors">Summerville</Link>
          <Link href="/locations/james-island" className="px-4 py-2 bg-white border border-slate-200 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors">James Island</Link>
          <Link href="/locations/daniel-island" className="px-4 py-2 bg-white border border-slate-200 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors">Daniel Island</Link>
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
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"Moving is so stressful, but Star Cleaning SC made the exit process a breeze. They did a move-out clean on our apartment in Charleston, and the property manager was so impressed. We got our full deposit back without a single question!"</p>
            <p className="font-bold text-slate-900">— Michael B.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"We bought a house in Summerville that had been sitting vacant and was pretty dusty. The team came in and did a phenomenal move-in clean. Knowing the inside of the fridge and all the cabinets were sanitized gave me such peace of mind before unpacking."</p>
            <p className="font-bold text-slate-900">— Lauren C.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"Highly professional and incredibly thorough. I needed an empty house cleaning in Ladson before putting my property on the market. The place sparkled and smelled amazing. It definitely helped us get top dollar for the house."</p>
            <p className="font-bold text-slate-900">— James H.</p>
          </div>
        </div>

        {/* CLOSING CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Move-In/Move-Out Cleaning in Charleston?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let the stress of cleaning overshadow the excitement of your move. Let our background-checked professionals handle the heavy scrubbing so you can focus on the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-lg transition-colors text-lg shadow-md">
              Get Your Free Quote
            </Link>
            <a href="tel:8432979935" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors text-lg border border-blue-500">
              Call Now: (843) 297-9935
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
            View all our <Link href="/locations" className="text-blue-600 hover:underline">service areas</Link> or check out our <Link href="/faq" className="text-blue-600 hover:underline">FAQ page</Link> for more details.
          </p>
        </div>
      </div>
      
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
              "url": "https://starcleaningsc.com"
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
