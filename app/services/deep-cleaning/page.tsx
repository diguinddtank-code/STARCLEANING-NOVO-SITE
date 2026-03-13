import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Sparkles, Droplets, SprayCan } from 'lucide-react';

export const metadata = {
  title: 'Deep Cleaning Services in Charleston SC | Star Cleaning SC',
  description: 'Need a total home reset? Our veteran-owned deep cleaning in Charleston SC tackles grime, baseboards, and hidden dust with military precision. Get a quote!',
};

export default function DeepCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
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
                Top-to-Bottom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Deep Cleaning</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hit the reset button on your home's hygiene. Our veteran-owned team tackles grime, baseboards, and hidden dust with military precision.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <Link href="/#quote" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
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
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sparkling clean bathroom after a deep clean" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Badge 1 */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transform translate-y-4 hover:translate-y-0 transition-transform duration-500 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-inner">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Total Reset</p>
                      <p className="text-blue-200 text-xs">Top-to-bottom clean</p>
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
                      "They cleaned places I didn't even know were dirty. Amazing job!"
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
            Sometimes, a standard surface wipe-down just isn't enough to tackle months of accumulated dust, grime, and hard water stains. When your home needs a serious intervention, our professional <strong>deep cleaning in Charleston SC</strong> is the ultimate solution. At Star Cleaning SC, our veteran-owned team applies 18 years of experience and military precision to hunt down dirt in places you didn't even know existed. Whether you are prepping for the holidays in Mount Pleasant, doing an annual spring cleaning in Ladson, or just wanting to restore your home's original sparkle, we handle the heavy lifting. We scrub baseboards, degrease kitchen cabinets, and sanitize grout lines, all while using eco-friendly, pet-safe products that protect your family's health.
          </p>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our Deep Cleaning</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our deep clean goes far beyond the basics. It is a comprehensive, detailed house cleaning designed to target buildup and neglected areas.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <SprayCan className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kitchen Heavy-Duty</h3>
              <ul className="space-y-3">
                {['Degrease/hand-wipe exterior of all cabinets and drawers', 'Scrub and sanitize inside microwave and oven glass', 'Clean interior of refrigerator (upon request)', 'Scrub grout lines on countertops and backsplashes'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Droplets className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bathroom Sanitation</h3>
              <ul className="space-y-3">
                {['Intensive scrubbing to remove hard water stains/soap scum', 'Hand-wipe cabinet exteriors and sanitize hardware', 'Detailed scrubbing of tile grout in showers/tubs', 'Clean and disinfect trash can interior/exterior'].map((item, i) => (
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
                {['Hand-wipe all accessible baseboards, frames, sills', 'Dust ceiling fans, fixtures, and air vents', 'Vacuum and wipe down window blinds and shutters', 'Move light furniture to vacuum/mop underneath', 'Detail-dust intricate woodwork and heavy decor'].map((item, i) => (
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
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Needs a One-Time Deep Clean?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Host Preparing for a Major Event</h3>
            <p className="text-slate-600 text-sm leading-relaxed">If you are hosting Thanksgiving, a graduation party, or having out-of-town in-laws stay for the week, the pressure for your home to look perfect is immense. Our deep cleaning service ensures that every corner, baseboard, and guest bathroom is flawlessly sanitized. You can focus on planning the menu and entertaining, knowing your home will impress even the toughest critics.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Homeowner Needing a Seasonal Reset</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Life gets busy, and certain chores like wiping down blinds or degreasing cabinets get pushed off for months. An annual or bi-annual spring cleaning is the perfect way to hit the reset button. We come in and eliminate the layers of dust and grime that have built up over the seasons, restoring your home to a baseline of absolute cleanliness.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Families Managing Allergies or Asthma</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Dust mites, pet dander, and pollen can accumulate heavily on ceiling fans, vents, and baseboards, aggravating respiratory issues. Our detailed house cleaning specifically targets these hidden dust traps. By using HEPA-filtered vacuums and non-toxic, eco-friendly supplies, we dramatically improve your indoor air quality and create a healthier environment for your family.</p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Simple 3-Step Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A simple, transparent process to get your home back to its best.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 z-0"></div>
            
            {[
              {
                step: '01',
                title: 'Book Online or Call',
                desc: 'Contact us to discuss the current condition of your home. We will ask a few questions about square footage and specific areas of concern to provide an accurate estimate.'
              },
              {
                step: '02',
                title: 'We Show Up & Get to Work',
                desc: 'Our background-checked crew arrives equipped with heavy-duty (but safe) cleaning agents and specialized tools. We systematically work through our intensive deep-clean checklist.'
              },
              {
                step: '03',
                title: 'You Enjoy a Spotless Space',
                desc: 'Walk through your revitalized home and inspect our work. Our 100% satisfaction guarantee means we aren\'t finished until the job meets our strict military standards.'
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center mb-6 shadow-xl shadow-blue-900/5 group-hover:border-blue-500 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-3xl font-black text-slate-900 group-hover:text-white relative z-10 transition-colors duration-300">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING TRANSPARENCY BLOCK */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Much Does Deep Cleaning Cost in Charleston, SC?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Because this service is highly intensive, it requires significantly more time and elbow grease than a standard visit. When determining how much a deep clean costs in Charleston SC, we look at the size of your home, the number of bathrooms, and the current level of buildup. A home that hasn't been professionally cleaned in a year will require more effort than one that receives regular maintenance. We provide customized, transparent quotes so you know exactly what to expect before we ever pick up a sponge.
          </p>
          <p className="text-white font-medium text-lg">
            Contact us for a free, no-obligation quote tailored to your property.
          </p>
        </div>

        {/* SERVICE AREA CALLOUT */}
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving All of Charleston & The Lowcountry</h2>
        <p className="text-slate-600 mb-6 text-lg">We bring our meticulous deep cleaning services to neighborhoods across the entire Charleston metro area. No matter where you are, we are ready to serve.</p>
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
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: What is the difference between a regular clean and a deep clean?</h3>
            <p className="text-slate-600">A: A regular clean focuses on surface-level maintenance (vacuuming, mopping, wiping counters). A deep clean involves hand-wiping baseboards, cleaning the exterior of cabinets, scrubbing grout, and dusting hard-to-reach areas like ceiling fans and blinds.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: How long does a deep cleaning usually take?</h3>
            <p className="text-slate-600">A: It varies greatly depending on the size and condition of the home. Generally, it takes 2 to 3 times longer than a standard maintenance cleaning. We will give you an estimated time frame when you book.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you clean the inside of appliances during this service?</h3>
            <p className="text-slate-600">A: We clean the inside of the microwave as a standard. Cleaning the interior of the refrigerator or the inside of the oven can be added to your deep cleaning package upon request.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Are you the best deep house cleaners in James Island?</h3>
            <p className="text-slate-600">A: We certainly strive to be! Our 18 years of experience, veteran-owned discipline, and 100% satisfaction guarantee have earned us a reputation for delivering the most thorough deep cleans in James Island and beyond.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Can I book a deep cleaning in Ladson before starting a recurring service?</h3>
            <p className="text-slate-600">A: Yes, in fact, we highly recommend it! Starting with a deep clean gets your Ladson home up to our high standards, making it much easier and more cost-effective to maintain with weekly or bi-weekly visits.</p>
          </div>
        </div>

        {/* SOCIAL PROOF BLOCK */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"I hired Star Cleaning SC for a spring cleaning before hosting a baby shower. They completely transformed my house in North Charleston. The baseboards and ceiling fans look brand new. Worth every penny!"</p>
            <p className="font-bold text-slate-900">— Jessica W.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"As a veteran myself, I appreciate the military precision this team brings. Their detailed house cleaning is no joke. They found and removed dirt I didn't even know was there. Highly recommend their deep clean service."</p>
            <p className="font-bold text-slate-900">— Robert K.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"We just bought an older home in Daniel Island and wanted it sanitized before moving our furniture in. The deep cleaning they did was phenomenal. The bathrooms were sparkling and smelled so fresh, without any harsh chemical odors."</p>
            <p className="font-bold text-slate-900">— Amanda L.</p>
          </div>
        </div>

        {/* CLOSING CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Deep Cleaning in Charleston?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let built-up grime stress you out any longer. Let our expert team give your home the ultimate reset it deserves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#quote" className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-lg transition-colors text-lg shadow-md">
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
            <li><Link href="/services/move-in-move-out-cleaning" className="text-blue-600 hover:underline font-medium">Move-In/Move-Out Cleaning</Link>: Ensure you get your deposit back or step into a sanitized new home.</li>
            <li><Link href="/services/vacation-rental-airbnb-cleaning" className="text-blue-600 hover:underline font-medium">Vacation Rental Cleaning</Link>: Fast, reliable turnovers to keep your 5-star host rating intact.</li>
            <li><Link href="/services/commercial-office-cleaning" className="text-blue-600 hover:underline font-medium">Commercial Office Cleaning</Link>: Professional janitorial services for a healthier, more productive workspace.</li>
            <li><Link href="/services/post-construction-cleaning" className="text-blue-600 hover:underline font-medium">Post-Construction Cleaning</Link>: We remove the drywall dust and debris after your renovation project.</li>
          </ul>
          <p className="text-slate-600">
            View all our <Link href="/locations" className="text-blue-600 hover:underline">service areas</Link> or check out our <Link href="/#faq" className="text-blue-600 hover:underline">FAQ page</Link> for more details.
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
            "name": "Deep Cleaning",
            "serviceType": "Deep House Cleaning",
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
            "description": "Intensive deep cleaning in Charleston SC. We tackle baseboards, blinds, and hidden grime with military precision and eco-friendly products.",
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
