import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, HardHat, Hammer, Home, Building2 } from 'lucide-react';

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
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Post-Construction</span> Cleaning
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Turn your construction site into a move-in ready masterpiece. Our veteran-owned team specializes in removing fine dust, debris, and contractor residue with military precision.
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
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Beautiful newly constructed home interior after cleaning" 
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
                      "They removed every speck of drywall dust. Incredible work."
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Transforming Construction Zones into Pristine Spaces in Charleston, SC</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The dust never truly settles after a major renovation or new build—unless you bring in the experts. When searching for thorough <strong>post-construction cleaning in Charleston, SC</strong>, homeowners and contractors alike trust Star Cleaning SC to deliver the final, crucial step of any project. We understand that drywall dust, paint splatters, and contractor debris can hide in every crevice, making a brand-new space feel unfinished and unsafe. Leveraging our 18 years of experience and military-grade attention to detail, our background-checked team executes a phased cleaning approach. We use specialized HEPA-filtered vacuums and eco-friendly, pet-safe products to eradicate fine dust without damaging delicate new surfaces. Let us handle the heavy lifting so you can finally enjoy your beautiful new space.
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
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Serving Builders & Homeowners in the Lowcountry</h2>
          <p className="text-slate-600 text-lg mb-8">
            Star Cleaning SC provides expert post-construction cleaning services to residential and commercial sites throughout the greater Charleston area.
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Clear the Dust?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Don't let construction debris ruin the reveal of your new space. Contact Charleston's post-construction cleaning experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#quote" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-50 transition-colors text-lg">
              Get Your Free Estimate
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
    </>
  );
}
