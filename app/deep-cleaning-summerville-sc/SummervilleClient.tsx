"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  ShieldCheck, 
  ThumbsUp, 
  CheckCircle2, 
  Droplets, 
  Clock, 
  ChevronDown, 
  ArrowRight,
  Home,
  Check
} from 'lucide-react';

export default function SummervilleClient() {
  const [activeTab, setActiveTab] = useState<'deep' | 'standard'>('deep');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        {/* Ambient Visual Backing */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
            alt="Pristine Summerville SC Living Space Deep Clean"
            fill
            priority
            className="object-cover opacity-20 filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-md mb-6"
              >
                <MapPin className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span className="text-xs font-bold text-emerald-200 uppercase tracking-widest">Flowertown Core: Summerville, SC</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-white font-heading"
              >
                Deep Cleaning Specialists In <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-yellow-300">
                  Summerville, SC
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Tackling heavy pine pollen crusts, clay residue, and deep construction dust across Nexton, Cane Bay Plantation, and historic Azalea Park neighborhoods with dedicated military precision.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  href="/quote" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-black transition-all shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Schedule Your Deep Clean <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:8432979935" 
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5 text-yellow-400" /> (843) 297-9935
                </a>
              </motion.div>

              {/* Credibility Anchors */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 pt-10 border-t border-slate-800 flex flex-wrap justify-center lg:justify-start gap-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-300">Summerville Star Standard (5/5)</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  18 Years Lowcountry Experience
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] blur-2xl animate-pulse" />
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-slate-700 shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sparkling Clean Kitchen in Summerville"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-5 rounded-2xl">
                    <p className="text-emerald-400 font-black text-sm uppercase tracking-wider mb-1">Cane Bay Standards</p>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">"The air vents and blinds had thick yellow pine pollen buildup. They meticulously sanitized everything!"</p>
                    <p className="text-white text-xs font-semibold mt-2">— Robert L., Cane Bay Plantation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-24 bg-slate-950 border-y border-slate-800/60 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop"
                alt="Summerville Residential Kitchen Restored"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Summerville Env Factor</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 font-heading tracking-tight">
                Combatting Fine Clay Dust & Pine Pollen in Flowertown
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  Summerville, SC is beloved for its beautiful southern pines and gardens. However, these same pines generate massive amounts of <span className="text-white font-semibold">sticky yellow pollen</span> which penetrates standard window seals and settles into carpets, furniture upholstery, and air vents. 
                </p>
                <p>
                  Additionally, with immense residential growth in neighborhoods like <span className="text-emerald-300 font-semibold">Nexton, Cane Bay, and Carnes Crossroads</span>, ongoing construction projects disperse extremely fine silica-rich clay dust that settles continuously inside nearby homes.
                </p>
                <p>
                  Our deep cleaning process is specifically developed to target these local challenges. We don't just dust; we wash the pollen film off your blinds, scrub the clay tracking off door thresholds, and vacuum vents deep enough to purge micro-allergens completely, allowing your family to breathe fresh, clean indoor air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Checklist Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Deep Clean Specifications</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
              A Complete Deep Clean Inspection List
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              We operate under military discipline checklists. Compare our comprehensive deep treatment to typical quick maids.
            </p>

            {/* Tabs Selector */}
            <div className="flex justify-center mt-8">
              <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-2xl inline-flex gap-2">
                <button 
                  onClick={() => setActiveTab('deep')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Summerville Deep Specialties ✦
                </button>
                <button 
                  onClick={() => setActiveTab('standard')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'standard' ? 'bg-gradient-to-r from-emerald-650 to-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Standard Maintenance Tasks
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'deep' ? (
              <>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" /> Kitchen & Wet Sanitization
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Oven interiors deep scrubbed and glass degreased",
                      "Exhaust fan hoods stripped of cooking grease buildup",
                      "Exterior of all kitchen drawers/cabinets hand scrubbed",
                      "Grout steam-blasted & sealed to prevent moisture mold",
                      "Microwaves inside and outside fully sterilized",
                      "Sink drains disinfected to banish Lowcountry pest smells"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-400 mt-1 shrink-0 bg-emerald-500/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-teal-400" /> Dust & Pollen Detailing
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Every wooden baseboard hand washed to erase scuffs & pollen",
                      "Window blinds individually wiped of embedded yellow pine dust",
                      "Ceiling fans hand wiped from trim to blade tips",
                      "Detailed dusting of heavy crown moldings and doors",
                      "HEPA vacuuming underneath sofas and low-standing furniture",
                      "A/C vents vacuumed and sanitized of clay-dust particles"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-400 mt-1 shrink-0 bg-emerald-500/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Home className="w-5 h-5 text-slate-400" /> Quick Surface Care
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Basic carpet and tile floor vacuuming",
                      "Damp-cloth surface wiping of kitchen countertops",
                      "Toilets quick scrubbed on interior bowl",
                      "General furniture dusting",
                      "Trashes emptied and replaced with linings",
                      "Wiping fingerprints off primary glass mirrors"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
                        <span className="text-slate-400 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400" /> Easy Maintenance Block
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Making master suite bed surfaces",
                      "Quick dust of bedroom bedside counters",
                      "Polishing handle hardware on entryways",
                      "Sweeping covered screen patio tile",
                      "External wipe of stove glass surface",
                      "Fostering standard cleanliness baselines"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
                        <span className="text-slate-400 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Summerville Voices</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1 mb-4 font-heading tracking-tight">
              Praise From Your Summerville Neighbors
            </h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 font-light italic text-sm leading-relaxed mb-6">
                  "Our new home in Nexton felt dusty even after the builders finished. We hired Star Cleaning SC for a top-to-bottom deep clean and they completely eliminated the fine drywall and clay residue. They are incredible!"
                </p>
              </div>
              <p className="text-white text-xs font-bold">— Marcus V., Nexton Subdivision</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 font-light italic text-sm leading-relaxed mb-6">
                  "As an asthma sufferer, springtime in Summerville is brutal. Star Cleans hand washed every speck of yellow pollen off my window sills and thoroughly scrubbed our air vent covers. I are finally breathing easy."
                </p>
              </div>
              <p className="text-white text-xs font-bold">— Diana K., Historic District</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 font-light italic text-sm leading-relaxed mb-6">
                  "With three kids and constant sports mud, my tile grout gets black. Their deep cleaning scrubbed the grout lines to their original beige color in just a few hours. Military precision indeed!"
                </p>
              </div>
              <p className="text-white text-xs font-bold">— Linda P., Carnes Crossroads</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Summerville SC FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light">Direct and honest answers about our Summerville deep-cleaning operations.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What makes your cleaning service 'military-precision'?",
                a: "Our roots are veteran-owned. We train our teams with strict protocols and high-efficiency checklists. Every corner is inspected including ceiling fans, vents, threshold panels, and plumbing hardware, ensuring zero oversight."
              },
              {
                q: "How frequently should a home in Summerville receive a deep clean?",
                a: "To combat the local pollen and microclimate dust, we recommend an initial Deep Clean, followed by standard maintenance (weekly or bi-weekly), and a detailed Deep Reset at least once or twice a year."
              },
              {
                q: "Do you supply your own eco-friendly products?",
                a: "Yes. Our team arrives fully equipped with safe, professional solutions, HEPA-equipped vacuums, steam machines, and fresh microfiber rags. You don't have to provide clean sponges or chemicals."
              },
              {
                q: "Can I schedule a deep clean specifically before moving furniture in?",
                a: "Absolutely. Our empty-home deep clean (often aligned with Move-In/Move-Out Turnkeys) is perfect to sanitize every cabinet interior and floorboard before your personal belongings are unpacked."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-slate-900 hover:bg-slate-850 transition-colors"
                >
                  <span className="font-extrabold text-white text-sm md:text-base leading-tight pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 font-light text-sm leading-relaxed border-t border-slate-850 bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Conversion Block */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Interior clean backing pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">Instant Booking</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6 font-heading tracking-tight leading-tight">
            Claim Your Free Time & Let Us Do the Heavy Work!
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Enjoy walking along Hutchinson Square or dining out in Nexton Town Center while our background-checked crew works meticulously to restore your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/quote"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black rounded-xl text-lg transition-all shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center gap-2 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Get Your Free Estimate <ArrowRight className="w-5 h-5 animate-pulse" />
            </Link>
            <a 
              href="tel:8432979935" 
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/85 border border-slate-700 text-white font-bold rounded-xl text-lg transition-all backdrop-blur-md w-full sm:w-auto"
            >
              Call Us: (843) 297-9935
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-6">
            ★ Fully Insured & Bonded • Veteran Run Standards • 100% Satisfaction Checked ★
          </p>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-16 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-white font-extrabold text-base mb-6 font-heading">Localized Deep-Cleaning Services in South Carolina</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 font-light">
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-emerald-400">Lowcountry Hubs</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Summerville SC</Link></li>
                <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Ladson SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-emerald-400">Other Local Services</p>
              <ul className="space-y-2">
                <li><Link href="/services/residential-cleaning" className="hover:text-white transition-colors">Residential Home Cleaning</Link></li>
                <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-white transition-colors">Move-In/Out Turnkeys</Link></li>
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-white transition-colors">Vacation & Airbnb Cleanings</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-emerald-400">Service Area Standard</p>
              <ul className="space-y-2">
                <li><Link href="/locations/charleston" className="hover:text-white transition-colors">Charleston SC Areas</Link></li>
                <li><Link href="/locations/summerville" className="hover:text-white transition-colors">Summerville SC Areas</Link></li>
                <li><Link href="/locations/ladson" className="hover:text-white transition-colors">Ladson SC Areas</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-900/60 text-center text-xs text-slate-500 font-light">
            All rights reserved • Star Cleaning SC • Veteran Vetted Precision Since 2008.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
