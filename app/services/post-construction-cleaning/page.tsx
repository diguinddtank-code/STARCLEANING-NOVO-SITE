import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import OwnerMessage from '@/components/OwnerMessage';
import CleaningForAReason from '@/components/CleaningForAReason';
import TeamPreview from '@/components/TeamPreview';
import ServiceAreas from '@/components/ServiceAreas';
import { CheckCircle2, MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, HardHat, Hammer, Home, Building2, Phone } from 'lucide-react';

export const metadata = {
  title: 'Post-Construction Cleaning Services in Charleston, SC | Star Cleaning SC',
  description: 'Expert post-construction cleaning in Charleston, SC. We remove dust, debris, and prep your newly built or renovated space for move-in. Veteran-owned.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/services/post-construction-cleaning',
  }
};

export default function PostConstructionCleaningPage() {
  return (
    <>
      <Script id="post-construction-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Post-Construction Cleaning Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Star Cleaning SC",
                "telephone": "(843) 297-9935",
                "url": "https://www.starcleaningsc.com"
              },
              "areaServed": ["Charleston, SC", "North Charleston, SC", "Summerville, SC"],
              "description": "Expert post-construction cleaning in Charleston, SC. We remove dust, debris, and prep your newly built or renovated space for move-in.",
              "serviceType": "Post-Construction Cleaning"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Do you remove large construction debris like wood or drywall scraps?", "acceptedAnswer": { "@type": "Answer", "text": "No, we do not haul away heavy construction materials, large debris, or hazardous waste. Our service is focused on the detailed cleaning phase—removing fine dust, paint splatters, and prepping the space for immediate occupancy after the heavy debris has been cleared." } },
                { "@type": "Question", "name": "How long does post-construction cleaning take?", "acceptedAnswer": { "@type": "Answer", "text": "It depends entirely on the size of the project and the level of dust. A small kitchen remodel might take a few hours, while a newly constructed home could take a full day or require multiple phases over a few days. We will give you a clear timeline during your estimate." } },
                { "@type": "Question", "name": "Are your cleaning products safe for brand new hardwood floors and marble?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We are highly trained in handling delicate, newly installed surfaces. We use specific, pH-neutral, and eco-friendly products that clean effectively without scratching, dulling, or damaging your expensive new finishes." } },
                { "@type": "Question", "name": "Do you clean inside the HVAC vents?", "acceptedAnswer": { "@type": "Answer", "text": "We clean the exterior of the vent covers and the immediate surrounding area where dust settles. However, for deep cleaning inside the actual ductwork, we recommend hiring a specialized HVAC duct cleaning service." } },
                { "@type": "Question", "name": "Can you work alongside contractors who are still finishing up?", "acceptedAnswer": { "@type": "Answer", "text": "For the best results, we highly recommend scheduling our final detail clean after all contractors have completely finished their work and left the site. If we clean while tradesmen are still working, new dust will inevitably settle." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                { "@type": "ListItem", "position": 2, "name": "Post-Construction Cleaning", "item": "https://www.starcleaningsc.com/services/post-construction-cleaning" }
              ]
            }
          ]
        })
      }} />

      <Navbar />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image card */}
            <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/post-construction.webp"
                alt="Beautiful newly constructed home interior after cleaning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Dust-Free</p>
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Move-In Ready</p>
                <div className="w-8 h-0.5 bg-white/80 mt-2"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 mb-4 font-bold text-xs uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 text-star-blue fill-star-blue" />
                Top-Rated Post-Construction Cleaning
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-heading leading-tight">
                Expert<br />
                <span className="text-star-blue">Post-Construction Cleaning</span>
              </h1>
              <div className="w-12 h-1 bg-star-blue rounded-full my-4"></div>

              <div className="text-gray-600 text-base leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900 font-bold">Turn your job site into a move-in ready space.</strong>{' '}
                  Our veteran-owned team specializes in removing fine dust, debris, and contractor residue with military precision.
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
              Charleston • North Charleston • Summerville • And Surrounding Areas
            </span>
          </div>
        </div>
      </section>

      <OwnerMessage />

      <CleaningForAReason />

      <TeamPreview />

      {/* Intro Paragraph */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Transforming Construction Zones into Pristine Spaces in Charleston, SC</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The dust never truly settles after a major renovation or new build—unless you bring in the experts. When searching for thorough <Link href="/locations/charleston" className="text-star-blue font-semibold hover:underline">post-construction cleaning in Charleston, SC</Link>, homeowners and contractors alike trust Star Cleaning SC to deliver the final, crucial step of any project. We understand that drywall dust, paint splatters, and contractor debris can hide in every crevice, making a brand-new space feel unfinished and unsafe. Leveraging our 18 years of experience and military-grade attention to detail, our background-checked team executes a phased cleaning approach. We use specialized HEPA-filtered vacuums and eco-friendly, pet-safe products to eradicate fine dust without damaging delicate new surfaces. Let us handle the heavy lifting so you can finally enjoy your beautiful new space.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Post-Construction Cleaning Checklist</h2>
            <p className="text-lg text-slate-600">We tackle the mess in phases, ensuring every surface is free of dust, stickers, and residue.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <HardHat className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 1: Rough Clean</h3>
              <ul className="space-y-3">
                {['Removal of large debris and leftover materials', 'Sweeping and vacuuming all floors', 'Removing stickers from new windows and appliances', 'Wiping down large surfaces to remove heavy dust', 'Initial cleaning of interior windows and tracks'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 2: Prep Clean</h3>
              <ul className="space-y-3">
                {['Detailed HEPA vacuuming of all rooms', 'Cleaning inside all new cabinets and drawers', 'Wiping down baseboards, trim, and door frames', 'Sanitizing new bathroom fixtures and tiles', 'Cleaning kitchen countertops and appliances'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 3: Final Detail</h3>
              <ul className="space-y-3">
                {['Final mopping and polishing of hard floors', 'Detailing light fixtures and ceiling fans', 'Wiping down electrical outlets and switches', 'Final touch-up of glass and mirrors', 'Complete dust-free walkthrough guarantee'].map((item, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Who Needs Post-Construction Cleaning?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Home className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Homeowners</h3>
              <p className="text-slate-600">You've just survived a major kitchen remodel or home addition. We remove the lingering drywall dust so you can safely move your family and pets back into the space.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <HardHat className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">General Contractors</h3>
              <p className="text-slate-600">You build beautiful homes in Charleston, but you need a reliable cleaning partner to make your work shine before the final client walkthrough and handover.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Property Developers</h3>
              <p className="text-slate-600">Managing a new commercial build or multi-unit residential project? We provide phased cleaning services to ensure every unit is pristine and ready for the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Post-Construction Process</h2>
            <p className="text-slate-400 text-lg">We coordinate with your timeline to ensure a seamless transition from construction site to finished home.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 w-full animate-pulse"></div>
            </div>
            
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 relative z-10 border-4 border-slate-900 shadow-xl">1</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Site Assessment</h3>
              <p className="text-slate-400">We evaluate the size of the project, the amount of debris, and the types of new surfaces (hardwood, marble, etc.) to determine the safest, most effective cleaning methods.</p>
            </div>
            
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 relative z-10 border-4 border-slate-900 shadow-xl">2</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Phased Execution</h3>
              <p className="text-slate-400">Depending on your needs, we perform a rough clean during the final building stages, followed by a meticulous detail clean once all contractors have left the premises.</p>
            </div>
            
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 rounded-full flex items-center justify-center text-3xl font-bold mb-6 relative z-10 border-4 border-slate-900 shadow-xl">3</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Final Walkthrough</h3>
              <p className="text-slate-400">We conduct a rigorous final inspection with you to ensure every speck of dust is gone, backing our work with our 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-blue-600 p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Post-Construction Pricing in Charleston</h2>
              <p className="text-blue-100">Custom quotes based on the scope of your renovation.</p>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                When clients ask, "How much does post-construction cleaning cost in Charleston, SC?", the answer is highly dependent on the project's scale. A single-room bathroom remodel requires a vastly different approach than a 4,000-square-foot new construction home.
              </p>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Because construction dust is pervasive and requires specialized HEPA equipment and multiple passes to fully eradicate, post-construction cleaning is an intensive service. We provide custom, transparent quotes after discussing the specifics of your build or renovation.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Factors that influence your custom quote:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Total square footage</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Amount of drywall dust/debris</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Number of cleaning phases needed</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Presence of delicate new surfaces</li>
                </ul>
              </div>
              <div className="mt-8 text-center">
                <Link href="/#quote" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors">
                  Get a Free Project Estimate <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Callout */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="my-10 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mb-12 text-left">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-3 block flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Service Coverage Map
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
                Serving All of Charleston & The Lowcountry
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                We proudly bring our elite, veteran-owned post-construction cleaning services directly to your project site. Choose your neighborhood below to connect with our local precision teams:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mb-6 text-left">
              {[
                { name: "Charleston", url: "/locations/charleston", hover: "Historic Peninsula & Downtown Restores", zip: "29401" },
                { name: "North Charleston", url: "/locations/north-charleston", hover: "Industrial & Park Circle builds", zip: "29405" },
                { name: "Summerville", url: "/locations/summerville", hover: "Flowertown & Nexton developments", zip: "29483" },
                { name: "Ladson", url: "/locations/ladson", hover: "Military base housing & Suburban remodels", zip: "29456" },
                { name: "James Island", url: "/locations/james-island", hover: "Beachside & Marshland restorations", zip: "29412" },
                { name: "Daniel Island", url: "/locations/daniel-island", hover: "Wando River Waterfront estate preps", zip: "29492" }
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you remove large construction debris like wood or drywall scraps?",
                a: "No, we do not haul away heavy construction materials, large debris, or hazardous waste. Our service is focused on the detailed cleaning phase—removing fine dust, paint splatters, and prepping the space for immediate occupancy after the heavy debris has been cleared."
              },
              {
                q: "How long does post-construction cleaning take?",
                a: "It depends entirely on the size of the project and the level of dust. A small kitchen remodel might take a few hours, while a newly constructed home could take a full day or require multiple phases over a few days. We will give you a clear timeline during your estimate."
              },
              {
                q: "Are your cleaning products safe for brand new hardwood floors and marble?",
                a: "Absolutely. We are highly trained in handling delicate, newly installed surfaces. We use specific, pH-neutral, and eco-friendly products that clean effectively without scratching, dulling, or damaging your expensive new finishes."
              },
              {
                q: "Do you clean inside the HVAC vents?",
                a: "We clean the exterior of the vent covers and the immediate surrounding area where dust settles. However, for deep cleaning inside the actual ductwork, we recommend hiring a specialized HVAC duct cleaning service."
              },
              {
                q: "Can you work alongside contractors who are still finishing up?",
                a: "For the best results, we highly recommend scheduling our final detail clean after all contractors have completely finished their work and left the site. If we clean while tradesmen are still working, new dust will inevitably settle."
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Mark R.",
                role: "General Contractor, Charleston",
                text: "I've used several cleaning crews for my builds, but Star Cleaning SC is by far the best. Their military precision shows. They catch the details that other companies miss, making my handovers to clients completely stress-free."
              },
              {
                name: "Jessica W.",
                role: "Homeowner, Mount Pleasant",
                text: "After a 3-month kitchen and living room renovation, the drywall dust was everywhere. I was overwhelmed. The Star Cleaning team came in and worked magic. My house finally feels like a home again, and it smells amazing."
              },
              {
                name: "Tom H.",
                role: "Property Developer, Summerville",
                text: "Reliable, thorough, and professional. They handled the post-construction cleaning for a 4-unit townhome project we just finished. Every unit was spotless and ready for staging. Highly recommend their services."
              }
            ].map((review, i) => (
              <ReviewCard
                key={i}
                theme="light"
                variant="grid"
                text={review.text}
                author={review.name}
                location={review.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Clear the Dust?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Don't let construction debris ruin the reveal of your new space. Contact Charleston's post-construction cleaning experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#quote" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-50 transition-colors text-lg">
              Get Your Free Estimate
            </Link>
            <a href="tel:+18432979935" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors border border-blue-500 text-lg">
              Call or Text (843) 297-9935
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
                <li><Link href="/services/commercial-office-cleaning" className="hover:text-blue-400 transition-colors">Commercial Cleaning</Link></li>
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-blue-400 transition-colors">Airbnb Cleaning</Link></li>
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

                <li><Link href="/#faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
                <li><Link href="/#quote" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreas />

      <Footer />
    </>
  );
}
