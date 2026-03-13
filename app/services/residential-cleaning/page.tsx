import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Sparkles, Home, BedDouble } from 'lucide-react';

export const metadata = {
  title: 'Top-Rated Residential Cleaning in Charleston SC | Free Quote',
  description: 'Reclaim your weekends with our veteran-owned residential cleaning in Charleston, SC. We deliver military-precision house cleaning with pet-safe products.',
};

export default function ResidentialCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
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
                Top-Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Residential Cleaning</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience the relief of coming home to a spotless sanctuary. Our veteran-owned team delivers military-precision house cleaning with pet-safe products.
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
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Beautifully cleaned living room" 
                  fill 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Badge 1 */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl transform translate-y-4 hover:translate-y-0 transition-transform duration-500 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-inner">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Spotless Home</p>
                      <p className="text-blue-200 text-xs">Reclaim your weekends</p>
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
                      "Coming home to a clean house is the best feeling ever!"
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
            Finding reliable <strong>residential cleaning in Charleston SC</strong> shouldn't feel like a second job. Between commuting, managing family schedules, and trying to enjoy the beautiful Lowcountry weekends, keeping up with household chores often falls by the wayside. That is exactly where Star Cleaning SC steps in. As a veteran-owned business with 18 years of experience, we bring military precision to every room we touch. Whether you live in a historic downtown Charleston home, a bustling family house in Summerville, or a modern apartment in North Charleston, our background-checked team delivers consistent, meticulous results. We handle the dusting, scrubbing, and mopping so you can spend your free time doing what you actually love. Plus, you can breathe easy knowing we exclusively use pet-safe and eco-friendly supplies.
          </p>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our Residential Cleaning</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our standard house cleaning service is designed to maintain your home's hygiene and appearance on a regular basis. Here is exactly what our team tackles during a visit:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kitchen</h3>
              <ul className="space-y-3">
                {['Wipe down and sanitize all countertops and backsplashes', 'Scrub and polish the kitchen sink and faucet fixtures', 'Clean the exterior of all major appliances (fridge, oven, dishwasher)', 'Clean the inside and outside of the microwave', 'Wipe down cabinet fronts and hardware'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bathrooms</h3>
              <ul className="space-y-3">
                {['Scrub and disinfect toilet bowl, tank, base, and behind the toilet', 'Remove soap scum and sanitize showers, tubs, and glass doors', 'Clean and polish mirrors and bathroom fixtures', 'Sanitize vanity countertops and sinks'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <BedDouble className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bedrooms & Living Areas</h3>
              <ul className="space-y-3">
                {['Dust all accessible surfaces, including side tables, shelves, and decor', 'Empty all interior trash cans and replace liners', 'Vacuum all carpets, rugs, and stairs', 'Sweep and mop all hard surface flooring', 'Make beds and change linens (if fresh linens are left out)'].map((item, i) => (
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
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Benefits Most from Regular House Cleaning?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Overworked Professional or Busy Family</h3>
            <p className="text-slate-600 text-sm leading-relaxed">If you are juggling a demanding career, kids' sports practices, and social obligations, the last thing you want to do on a Saturday morning is scrub a shower. Our recurring residential cleaning service is designed to take the mental load of household chores completely off your plate. You get to come home to a pristine environment without lifting a finger.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Seniors and Individuals with Limited Mobility</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Maintaining a home requires a lot of bending, reaching, and heavy lifting that can become difficult or unsafe over time. We provide a trustworthy, compassionate service for elderly residents or those recovering from surgery. Our team ensures the home remains a safe, sanitary, and comfortable place to live, giving both the resident and their family total peace of mind.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Pet Owner Fighting a Losing Battle Against Fur</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We love our dogs and cats, but keeping up with the constant shedding, dander, and muddy paw prints is exhausting. Our team uses specialized vacuums and techniques to capture pet hair from floors and furniture. Because we strictly use pet-safe, non-toxic cleaning products, you never have to worry about harsh chemicals harming your furry best friends.</p>
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
                desc: 'Reach out to us via our online form or give us a call at (843) 297-9935. We will discuss your home\'s specific needs, square footage, and your preferred schedule to provide a transparent estimate.'
              },
              {
                step: '02',
                title: 'We Show Up & Get to Work',
                desc: 'Our background-checked, uniformed team arrives on time with all the necessary eco-friendly supplies and equipment. We execute our military-precision checklist, ensuring no detail is overlooked.'
              },
              {
                step: '03',
                title: 'You Enjoy a Spotless Space',
                desc: 'Walk into a home that looks, feels, and smells incredible. With our 100% satisfaction guarantee, if you aren\'t completely thrilled with the results, we will make it right.'
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Much Does Residential Cleaning Cost in Charleston, SC?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            We believe in straightforward pricing without hidden fees. The cost of regular house cleaning depends on a few key variables: the total square footage of your home, the number of bedrooms and bathrooms, the presence of indoor pets, and how often you want us to visit. Generally, weekly or bi-weekly cleanings offer a lower per-visit rate compared to monthly cleanings, as the home requires less intensive scrubbing to maintain. Because every home is unique, we don't use a one-size-fits-all price tag.
          </p>
          <p className="text-white font-medium text-lg">
            Contact us for a free, no-obligation quote tailored specifically to your space and lifestyle.
          </p>
        </div>

        {/* SERVICE AREA CALLOUT */}
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving All of Charleston & The Lowcountry</h2>
        <p className="text-slate-600 mb-6 text-lg">We proudly provide top-tier residential cleaning across the entire region. Whether you are located in the heart of the city or in the surrounding suburbs, our team is ready to serve you.</p>
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
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do I need to be home during the residential cleaning?</h3>
            <p className="text-slate-600">A: Not at all! Most of our clients provide us with a spare key, garage code, or lockbox access. You can go to work or run errands and return to a beautifully clean house.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you bring your own cleaning supplies and equipment?</h3>
            <p className="text-slate-600">A: Yes, we arrive fully equipped with our own high-quality vacuums, microfiber cloths, and eco-friendly, pet-safe cleaning solutions. You don't need to provide a thing.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: What if I have dogs or cats in the house?</h3>
            <p className="text-slate-600">A: We are very pet-friendly! Just let us know in advance if you have pets and if they will be roaming free or crated. We always use non-toxic products that are completely safe for animals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: How do I find the best residential cleaning in Summerville?</h3>
            <p className="text-slate-600">A: Look for a company with verified reviews, background-checked employees, and a satisfaction guarantee. As a veteran-owned business, Star Cleaning SC brings unmatched discipline and reliability to every Summerville home we clean.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Can I request specific tasks for my house cleaning in James Island?</h3>
            <p className="text-slate-600">A: Absolutely. While we have a comprehensive standard checklist, we are happy to customize your service. Just communicate your priorities when booking your James Island cleaning, and we will accommodate them.</p>
          </div>
        </div>

        {/* SOCIAL PROOF BLOCK */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"Star Cleaning SC has been a lifesaver for our family. With two toddlers and a golden retriever, our house in Summerville was always chaotic. Their residential cleaning service is incredibly thorough, and I love that they use pet-safe products. Highly recommend!"</p>
            <p className="font-bold text-slate-900">— Sarah M.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"I've hired several maid services in Charleston over the years, but none compare to the military precision of this veteran-owned team. They show up exactly when they say they will and leave my apartment spotless every single time."</p>
            <p className="font-bold text-slate-900">— David T.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex text-yellow-400 mb-3">★★★★★</div>
            <p className="text-slate-700 italic mb-4">"The best house cleaning I've ever had. They pay attention to the little details that other companies miss. Coming home to a clean house in James Island after a long week at work is the best feeling in the world."</p>
            <p className="font-bold text-slate-900">— Emily R.</p>
          </div>
        </div>

        {/* CLOSING CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Residential Cleaning in Charleston?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop spending your precious weekends scrubbing floors and wiping down counters. Let our professional, background-checked team handle the dirty work so you can reclaim your time.
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
            <li><Link href="/services/deep-cleaning" className="text-blue-600 hover:underline font-medium">Deep Cleaning</Link>: A top-to-bottom intensive clean for homes that need a serious reset.</li>
            <li><Link href="/services/move-in-move-out-cleaning" className="text-blue-600 hover:underline font-medium">Move-In/Move-Out Cleaning</Link>: Ensure you get your deposit back or step into a sanitized new home.</li>
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
            "name": "Residential Cleaning",
            "serviceType": "House Cleaning",
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
            "description": "Top-rated residential cleaning in Charleston SC. We provide military-precision house cleaning using pet-safe, eco-friendly products.",
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
