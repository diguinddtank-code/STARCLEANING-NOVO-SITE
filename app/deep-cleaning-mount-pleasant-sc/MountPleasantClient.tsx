"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Waves,
  ChevronDown,
  ArrowRight,
  Home,
  Check
} from 'lucide-react';

export default function MountPleasantClient() {
  const [activeTab, setActiveTab] = useState<'deep' | 'standard'>('deep');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Cleaning supplies flatlay"
            fill
            priority
            className="object-cover opacity-20 filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-md mb-6"
              >
                <Waves className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-bold text-violet-200 uppercase tracking-widest">Old Village to Carolina Park: Mount Pleasant, SC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-white font-heading"
              >
                Deep Cleaning for <br />
                <span className="text-violet-400">
                  Every Era of
                </span> <br />
                Mount Pleasant Home
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                From 1940s cottages in the Old Village to brand-new builds in Carolina Park and Park West, we treat marsh humidity and construction dust as two very different problems with two different fixes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Book a Deep Clean <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8432979935"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5 text-yellow-400" /> (843) 297-9935
                </a>
              </motion.div>

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
                  <span className="text-sm font-medium text-slate-300">5.0 Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Veteran-Owned Discipline
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-violet-600/10 rounded-[3rem] blur-2xl animate-pulse" />
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-slate-700 shadow-2xl">
                  <Image
                    src="https://i.imgur.com/gpqI75Lh.jpg"
                    alt="Pristine deep cleaning result"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-5 rounded-2xl">
                    <p className="text-yellow-400 font-black text-sm uppercase tracking-wider mb-1">Old Village Standard</p>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">"They understood our 1940s home needed a gentler touch than a new build right away."</p>
                    <p className="text-white text-xs font-semibold mt-2">— Nancy P., Old Village</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Why Mount Pleasant Needs Deep Cleaning */}
      <section className="py-24 bg-slate-950 border-y border-slate-800/60 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80"
                alt="Deep cleaning in progress"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div>
              <span className="text-violet-400 font-bold uppercase tracking-widest text-xs">A Suburb With Two Personalities</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 font-heading tracking-tight">
                One Cleaning Plan Doesn't Fit All of Mount Pleasant
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  Mount Pleasant isn't one neighborhood, it's dozens. A 1940s cottage near <span className="text-white font-semibold">Pitt Street</span> in the Old Village has original hardwood and plaster that don't respond well to harsh chemicals, while a five-year-old build in <span className="text-white font-semibold">Carolina Park</span> or <span className="text-white font-semibold">Park West</span> is more likely fighting leftover construction dust in the vents.
                </p>
                <p>
                  Then there's the water. Homes closer to Shem Creek and the marsh deal with humidity that pushes mildew into bathroom grout and closets faster than homes further inland in Snee Farm or Dunes West. We adjust products and attention area by area instead of running the same generic checklist on every visit.
                </p>
                <p>
                  Whether your home is decades old or brand new, we scope the visit around your specific finishes, square footage, and how close you sit to the water.
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
            <span className="text-violet-400 font-bold uppercase tracking-widest text-xs">Full Transparency Checklist</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
              Mount Pleasant Deep Clean vs. Standard Clean
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              See exactly what we add for homes dealing with marsh humidity or lingering construction dust.
            </p>

            <div className="flex justify-center mt-8">
              <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-2xl inline-flex gap-2">
                <button
                  onClick={() => setActiveTab('deep')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Mount Pleasant Deep Clean ✦
                </button>
                <button
                  onClick={() => setActiveTab('standard')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'standard' ? 'bg-star-dark text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Standard Maintenance
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'deep' ? (
              <>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-violet-500/10 hover:border-violet-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Waves className="w-6 h-6 text-violet-400" /> Humidity & Mildew Treatment (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Bathroom and kitchen grout treated for humidity-driven mildew",
                      "Closet interiors wiped and deodorized for trapped moisture",
                      "Window sills and tracks cleared of condensation residue",
                      "Bathroom exhaust fan covers removed and washed",
                      "Under-sink cabinets checked and wiped for dampness",
                      "AC vents and returns vacuumed of marsh-driven dust"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-violet-400 mt-1 shrink-0 bg-violet-500/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-violet-500/10 hover:border-violet-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" /> Whole-Home Detailing (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Baseboards and trim hand-wiped with finish-appropriate products",
                      "Ceiling fans and light fixtures dusted throughout",
                      "Interior windows cleaned inside and out",
                      "Cabinet interiors checked for leftover construction dust",
                      "Closets and shelving vacuumed and wiped",
                      "Entryway and mudroom floors deep-scrubbed"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-violet-400 mt-1 shrink-0 bg-violet-500/10 p-0.5 rounded-full" />
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
                    <Home className="w-5 h-5 text-slate-400" /> Weekly Upkeep Tasks
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Vacuum carpets and rugs in main living areas",
                      "Mop kitchen and bathroom flooring",
                      "Wipe kitchen counters and stovetop exterior",
                      "Clean bathroom sink, mirror, and toilet exterior",
                      "Empty trash and reline bins",
                      "Dust reachable flat surfaces"
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
                    <CheckCircle2 className="w-5 h-5 text-slate-400" /> Standard Inclusions
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Bed-making on primary bedrooms",
                      "Quick mirror and glass surface polish",
                      "Exterior wipe of cabinet and appliance doors",
                      "Toilet bowl and seat sanitized",
                      "Sweep of entryway and hard-surface walkways",
                      "General straightening of common areas"
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

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-yellow-300 font-bold rounded-xl border border-slate-750 inline-flex items-center gap-2 text-sm transition-all"
            >
              Get Pricing on the Quote Builder <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Local Feedback</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1 mb-4 font-heading tracking-tight">
              Why Mount Pleasant Homeowners Trust Us
            </h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard
              theme="dark"
              variant="grid"
              text="We live in the Old Village and our 1940s home needs a gentler touch than a new build. They understood that immediately and never used anything too harsh on our original floors."
              author="Nancy P."
              location="Old Village"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="Our house in Carolina Park backs up to a pond and the humidity is no joke. Since switching to biweekly cleanings, the musty smell we used to get in the closets is completely gone."
              author="Brian K."
              location="Carolina Park"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="I run a short-term rental near Shem Creek and their turnover cleaning has been flawless for over a year. My guests always comment on how clean the place smells."
              author="Samantha T."
              location="Shem Creek"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-violet-400 font-bold uppercase tracking-widest text-xs">Mount Pleasant SC FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light">Direct answers about deep cleaning historic and new homes across Mount Pleasant.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you use different products on older, historic homes than on new construction?",
                a: "Yes. Original hardwood, plaster, and vintage fixtures common in the Old Village get pH-neutral, non-abrasive products and hand-cleaning methods. Newer homes in Carolina Park or Park West can handle a broader range of standard cleaning products."
              },
              {
                q: "Can you help with mildew and musty smells in closets near the marsh?",
                a: "Yes, this is one of our most common Mount Pleasant requests. We treat closet interiors, window sills, and bathroom grout for humidity-driven mildew, and can adjust visit frequency if your home is especially close to the water."
              },
              {
                q: "Do you clean new-construction homes in Carolina Park or Park West?",
                a: "Yes, we regularly handle post-construction and first move-in cleans in these subdivisions, clearing fine drywall dust from vents, cabinets, and floors before families settle in."
              },
              {
                q: "Do you offer turnover cleaning for vacation rentals near Shem Creek?",
                a: "Yes, we provide same-day turnover cleaning for short-term rentals near Shem Creek and the Isle of Palms connector, coordinated around your checkout and check-in windows."
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
                  <ChevronDown className={`w-5 h-5 text-violet-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-24 bg-gradient-to-br from-violet-900 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Cleaning products background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">Instant Booking</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6 font-heading tracking-tight leading-tight">
            A Clean That Understands Your Neighborhood
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Book a deep clean for your Mount Pleasant home, whatever era it was built in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-black rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Get Your Instant Quote <ArrowRight className="w-5 h-5 animate-pulse" />
            </Link>
            <a
              href="tel:8432979935"
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/85 border border-slate-700 text-white font-bold rounded-xl text-lg transition-all backdrop-blur-md w-full sm:w-auto"
            >
              Call (843) 297-9935
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-6">
            ★ 100% Satisfaction Checked • 18 Years Lowcountry Experience ★
          </p>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-16 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-white font-extrabold text-base mb-6 font-heading">Localized Deep-Cleaning Services in South Carolina</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 font-light">
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-violet-400">Lowcountry Hubs</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Summerville SC</Link></li>
                <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Ladson SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-violet-400">More Service Areas</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-north-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning North Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-james-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning James Island SC</Link></li>
                <li><Link href="/deep-cleaning-daniel-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Daniel Island SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-violet-400">Other Local Services</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-johns-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Johns Island SC</Link></li>
                <li><Link href="/locations/mount-pleasant" className="hover:text-white transition-colors">Mount Pleasant Service Area</Link></li>
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-white transition-colors">Vacation & Airbnb Cleanings</Link></li>
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
