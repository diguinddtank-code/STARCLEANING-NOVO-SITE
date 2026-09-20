import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import ReviewCard from '@/components/ReviewCard';
import OwnerMessage from '@/components/OwnerMessage';
import CleaningForAReason from '@/components/CleaningForAReason';
import ServiceAreas from '@/components/ServiceAreas';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Sparkles, Droplets, SprayCan } from 'lucide-react';

export const metadata = {
  title: 'Deep Cleaning Services in Charleston SC | Star Cleaning SC',
  description: 'Need a total home reset? Our veteran-owned deep cleaning in Charleston SC tackles grime, baseboards, and hidden dust with military precision. Get a quote!',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/services/deep-cleaning',
  },
};

export default function DeepCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Script id="deep-cleaning-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Deep Cleaning Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Star Cleaning SC",
                "telephone": "(843) 297-9935",
                "url": "https://www.starcleaningsc.com"
              },
              "areaServed": ["Charleston, SC", "North Charleston, SC", "Summerville, SC", "Ladson, SC", "James Island, SC", "Daniel Island, SC"],
              "description": "Veteran-owned deep cleaning in Charleston SC tackling grime, baseboards, and hidden dust with military precision.",
              "serviceType": "Deep Cleaning"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the difference between a regular clean and a deep clean?", "acceptedAnswer": { "@type": "Answer", "text": "A regular clean focuses on surface-level maintenance (vacuuming, mopping, wiping counters). A deep clean involves hand-wiping baseboards, cleaning the exterior of cabinets, scrubbing grout, and dusting hard-to-reach areas like ceiling fans and blinds." } },
                { "@type": "Question", "name": "How long does a deep cleaning usually take?", "acceptedAnswer": { "@type": "Answer", "text": "It varies greatly depending on the size and condition of the home. Generally, it takes 2 to 3 times longer than a standard maintenance cleaning. We will give you an estimated time frame when you book." } },
                { "@type": "Question", "name": "Do you clean the inside of appliances during this service?", "acceptedAnswer": { "@type": "Answer", "text": "We clean the inside of the microwave as a standard. Cleaning the interior of the refrigerator or the inside of the oven can be added to your deep cleaning package upon request." } },
                { "@type": "Question", "name": "Are you the best deep house cleaners in James Island?", "acceptedAnswer": { "@type": "Answer", "text": "We certainly strive to be! Our 18 years of experience, veteran-owned discipline, and 100% satisfaction guarantee have earned us a reputation for delivering the most thorough deep cleans in James Island and beyond." } },
                { "@type": "Question", "name": "Can I book a deep cleaning in Ladson before starting a recurring service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, in fact, we highly recommend it! Starting with a deep clean gets your Ladson home up to our high standards, making it much easier and more cost-effective to maintain with weekly or bi-weekly visits." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                { "@type": "ListItem", "position": 2, "name": "Deep Cleaning", "item": "https://www.starcleaningsc.com/services/deep-cleaning" }
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
                src="/images/deep-cleaning.webp"
                alt="Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Deep Clean</p>
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Total Reset</p>
                <div className="w-8 h-0.5 bg-white/80 mt-2"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 mb-4 font-bold text-xs uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 text-star-blue fill-star-blue" />
                Top-Rated Deep Cleaning
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-heading leading-tight">
                Top-to-Bottom<br />
                <span className="text-star-blue">Deep Cleaning</span>
              </h1>
              <div className="w-12 h-1 bg-star-blue rounded-full my-4"></div>

              <div className="text-gray-600 text-base leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900 font-bold">Hit the reset button on your home.</strong>{' '}
                  Our veteran-owned team tackles grime, baseboards, and hidden dust with military precision, serving Charleston, SC and the surrounding Lowcountry.
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
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">100% Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Eco-Friendly</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                <Link
                  href="/#quote"
                  className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5"
                >
                  Get a Free Estimate <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+18432979935"
                  className="text-gray-700 font-bold text-sm border-b-2 border-star-blue hover:text-star-blue transition-colors inline-flex items-center gap-1.5"
                >
                  (843) 297-9935
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
            Sometimes, a standard surface wipe-down just isn't enough to tackle months of accumulated dust, grime, and hard water stains. When your home needs a serious intervention, our professional <Link href="/locations/charleston" className="text-star-blue font-semibold hover:underline">deep cleaning in Charleston SC</Link> is the ultimate solution. At Star Cleaning SC, our veteran-owned team applies 18 years of experience and military precision to hunt down dirt in places you didn't even know existed. Whether you are prepping for the holidays in Mount Pleasant, doing an annual spring cleaning in Ladson, or just wanting to restore your home's original sparkle, we handle the heavy lifting. We scrub baseboards, degrease kitchen cabinets, and sanitize grout lines, all while using eco-friendly, pet-safe products that protect your family's health.
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
              We proudly bring our elite, veteran-owned deep cleaning services directly to your doorstep. Choose your neighborhood below to connect with our local precision teams:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mb-6">
            {[
              { name: "Charleston Deep Clean", url: "/deep-cleaning-charleston-sc", hover: "Historic Peninsula & Downtown Reset", zip: "29401" },
              { name: "North Charleston", url: "/locations/north-charleston", hover: "Boeing, Tanger & Park Circle", zip: "29405" },
              { name: "Summerville Deep Clean", url: "/deep-cleaning-summerville-sc", hover: "Flowertown & Nexton total reset", zip: "29483" },
              { name: "Ladson Deep Clean", url: "/deep-cleaning-ladson-sc", hover: "Military PCS & Suburban deep scrub", zip: "29456" },
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
          <ReviewCard
            theme="light"
            variant="grid"
            text="I hired Star Cleaning SC for a spring cleaning before hosting a baby shower. They completely transformed my house in North Charleston. The baseboards and ceiling fans look brand new. Worth every penny!"
            author="Jessica W."
            location="North Charleston"
          />
          <ReviewCard
            theme="light"
            variant="grid"
            text="As a veteran myself, I appreciate the military precision this team brings. Their detailed house cleaning is no joke. They found and removed dirt I didn't even know was there. Highly recommend their deep clean service."
            author="Robert K."
          />
          <ReviewCard
            theme="light"
            variant="grid"
            text="We just bought an older home in Daniel Island and wanted it sanitized before moving our furniture in. The deep cleaning they did was phenomenal. The bathrooms were sparkling and smelled so fresh, without any harsh chemical odors."
            author="Amanda L."
            location="Daniel Island"
          />
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

      <ServiceAreas />

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
