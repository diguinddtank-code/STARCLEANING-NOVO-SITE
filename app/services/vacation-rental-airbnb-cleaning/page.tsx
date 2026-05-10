import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Calendar, BedDouble, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Airbnb & Vacation Rental Cleaning Charleston SC | Free Quote',
  description: 'Protect your 5-star host rating with our reliable vacation rental cleaning in Charleston SC. Fast turnovers, staging, and military precision.',
};

export default function VacationRentalCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
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
                5-Star <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vacation Rental</span> Cleaning
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Protect your host rating with fast, reliable, and meticulous Airbnb turnovers. Our veteran-owned team brings military precision to every clean.
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
                  <span className="text-sm text-slate-300 font-medium">Superhost Approved</span>
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
                  <span className="text-sm text-slate-300 font-medium">Fast Turnovers</span>
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
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
                  alt="Pristine Airbnb bedroom ready for guests" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Badge 1 */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transform translate-y-4 hover:translate-y-0 transition-transform duration-500 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-inner">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Same-Day</p>
                      <p className="text-blue-200 text-xs">Turnovers Available</p>
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
                      "They never miss a detail. My reviews have never been better."
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
            In the competitive short-term rental market, cleanliness is the single most important factor driving your reviews. A stray hair or a dusty baseboard can instantly turn a 5-star review into a 3-star complaint. That is why property managers and hosts rely on our expert <strong>vacation rental cleaning in Charleston SC</strong>. At Star Cleaning SC, our veteran-owned team understands the high-stakes, fast-paced nature of Airbnb turnovers. With 18 years of experience, we bring military precision to every property, whether it is a historic downtown Charleston condo or a beachside retreat on James Island. We handle the rapid turnovers, restock essential supplies, and stage the home perfectly for the next guest. Using eco-friendly, pet-safe products, we ensure your property is not just visually spotless, but hygienically safe, keeping your calendar booked and your guests thrilled.
          </p>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our Airbnb Turnover Service</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our short-term rental cleaners do more than just wipe counters; we reset the entire guest experience. Our comprehensive turnover checklist includes:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <BedDouble className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Linens & Laundry</h3>
              <ul className="space-y-3">
                {['Strip all beds and wash sheets, pillowcases, duvet covers', 'Wash and fold all bathroom towels and washcloths', 'Make all beds with fresh linens to hotel-quality standards'].map((item, i) => (
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kitchen & Bathrooms</h3>
              <ul className="space-y-3">
                {['Sanitize all bathroom surfaces, toilets, showers, and glass', 'Wipe down kitchen counters, sink, and clean microwave', 'Check and wipe out refrigerator, removing old food', 'Empty dishwasher and put away clean dishes'].map((item, i) => (
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Staging & Restocking</h3>
              <ul className="space-y-3">
                {['Restock toilet paper, paper towels, trash bags, toiletries', 'Stage decorative pillows, throw blankets, welcome books', 'Empty all trash bins and take garbage to exterior receptacles', 'Vacuum and mop all floors, ensuring zero hair or debris', 'Perform a visual inspection for damages and report to host'].map((item, i) => (
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
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Needs Short-Term Rental Cleaners?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Out-of-State Real Estate Investor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">If you own an Airbnb in Charleston but live hundreds of miles away, you need "boots on the ground" that you can trust implicitly. Our veteran-owned team acts as your eyes and ears. Beyond just cleaning, we report damages, track inventory, and ensure the property is perfectly staged. You get total peace of mind knowing your investment is being protected by disciplined professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Busy Local Airbnb Host</h3>
            <p className="text-slate-600 text-sm leading-relaxed">You started hosting to make passive income, but the constant laundry, cleaning, and tight turnover windows have turned it into a stressful full-time job. Our turnover service SC gives you your life back. We handle the grueling back-to-back cleanings so you can focus on communicating with guests, optimizing your pricing, and actually enjoying the profits of your rental.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Professional Property Management Companies</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Managing a portfolio of multiple vacation rentals requires a cleaning partner that can scale and deliver consistent quality. We provide reliable, scheduled cleanings with a background-checked team that understands the high standards required for luxury properties. We integrate seamlessly into your operations to ensure every guest checks into a flawless environment.</p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Simple 3-Step Process</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">Book Online or Call</h3>
            <p className="text-slate-600">Contact us to discuss your property size, average turnover frequency, and specific staging requirements. We will set up a customized cleaning plan for your listing.</p>
          </div>
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">We Show Up & Get to Work</h3>
            <p className="text-slate-600">During the critical window between checkout and check-in, our team arrives promptly. We execute our detailed turnover checklist, handle the laundry, and restock supplies.</p>
          </div>
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">3</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">You Enjoy a Spotless Space</h3>
            <p className="text-slate-600">The property is staged and ready for the next guest. We lock up, notify you that the job is complete, and report any maintenance issues we noticed during the clean.</p>
          </div>
        </div>

        {/* PRICING TRANSPARENCY BLOCK */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Much Does Vacation Rental Cleaning Cost in Charleston, SC?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            When hosts ask "how much does Airbnb cleaning cost in Charleston SC," the answer is usually structured as a flat rate per turnover. This flat rate is determined by the square footage of the property, the number of beds that require linen changes, and whether laundry is done on-site or off-site. Because short-term rentals require staging and restocking in addition to cleaning, the rates differ from standard residential cleaning. We provide transparent, flat-rate pricing so you can easily pass the cleaning fee onto your guests without eating into your profit margins.
          </p>
          <p className="text-white font-medium text-lg">
            Contact us for a free, no-obligation quote for your specific listing.
          </p>
        </div>

        {/* SERVICE AREA CALLOUT */}
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving All of Charleston & The Lowcountry</h2>
        <p className="text-slate-600 mb-6 text-lg">We provide rapid, reliable turnover services for vacation rentals across the most popular tourist destinations in the area.</p>
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
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you accommodate same-day turnovers?</h3>
            <p className="text-slate-600">A: Yes! We know that the window between an 11:00 AM checkout and a 4:00 PM check-in is tight. Our teams are trained to perform efficient, high-quality same-day turnovers to maximize your booking calendar.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you wash linens on-site or take them off-site?</h3>
            <p className="text-slate-600">A: We typically wash linens on-site using your property's washer and dryer. If your property does not have laundry facilities, or if you have a rapid turnover that requires off-site laundering, we can discuss custom arrangements.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Will you notify me if a guest damages the property?</h3>
            <p className="text-slate-600">A: Absolutely. Part of our military-precision process involves a visual inspection. If we notice broken items, stained carpets, or missing inventory, we will immediately take photos and notify you so you can file a claim.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you provide Airbnb cleaning in downtown Charleston?</h3>
            <p className="text-slate-600">A: Yes, we service many historic properties and condos in downtown Charleston. We are familiar with the unique parking and access challenges of the peninsula.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Can you handle vacation rental cleaning in James Island?</h3>
            <p className="text-slate-600">A: Yes! James Island is a highly popular area for short-term rentals, and our team is frequently in the area providing top-tier turnover services for local hosts.</p>
          </div>
        </div>

        {/* SOCIAL PROOF BLOCK */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"Since switching to Star Cleaning SC, my Airbnb reviews have consistently mentioned how sparkling clean the house is. Their vacation rental cleaning in Charleston is unmatched. They even fold the toilet paper into a little triangle!"</p>
            <p className="font-bold text-slate-900">— Mark D.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"I manage a property in James Island from three states away. This veteran-owned team is my absolute lifeline. They handle the turnovers flawlessly, restock the coffee station, and always send me pictures if a guest leaves a mess. 10/10."</p>
            <p className="font-bold text-slate-900">— Sarah P.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"Fast, reliable, and thorough. Finding good short-term rental cleaners in North Charleston was a struggle until I found them. They never miss a same-day turnover, and the pet-safe products are a huge selling point for my pet-friendly listing."</p>
            <p className="font-bold text-slate-900">— Kevin T.</p>
          </div>
        </div>

        {/* CLOSING CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Vacation Rental Cleaning in Charleston?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop stressing over tight turnover windows and bad cleanliness reviews. Partner with a disciplined, professional team that treats your investment like their own.
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
            <li><Link href="/services/residential-cleaning" className="text-blue-600 hover:underline font-medium">Residential Cleaning</Link>: Keep your personal home consistently spotless with weekly or bi-weekly visits.</li>
            <li><Link href="/services/deep-cleaning" className="text-blue-600 hover:underline font-medium">Deep Cleaning</Link>: A top-to-bottom intensive clean for homes that need a serious reset.</li>
            <li><Link href="/services/move-in-move-out-cleaning" className="text-blue-600 hover:underline font-medium">Move-In/Move-Out Cleaning</Link>: Ensure you get your deposit back or step into a sanitized new home.</li>
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
            "name": "Vacation Rental & Airbnb Cleaning",
            "serviceType": "Short-Term Rental Cleaning",
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
            "description": "Reliable vacation rental cleaning in Charleston SC. We provide fast Airbnb turnovers, staging, and restocking to protect your 5-star reviews.",
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
