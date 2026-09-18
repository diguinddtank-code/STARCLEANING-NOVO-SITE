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
  Trees,
  ChevronDown,
  ArrowRight,
  Home,
  Check
} from 'lucide-react';

export default function JohnsIslandClient() {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-400/20 backdrop-blur-md mb-6"
              >
                <Trees className="w-4 h-4 text-lime-400" />
                <span className="text-xs font-bold text-lime-200 uppercase tracking-widest">Farmland to Waterfront: Johns Island, SC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-white font-heading"
              >
                Deep Cleaning for <br />
                <span className="text-lime-400">
                  Johns Island's
                </span> <br />
                Farms, Fields & New Builds
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                From farmland dust off Maybank Highway to fresh drywall grit in the new neighborhoods near the Angel Oak, we clear what a regular mop pass leaves behind on Johns Island's larger properties.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-lime-600 hover:bg-lime-700 text-slate-900 rounded-xl font-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
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
                <div className="absolute inset-0 bg-lime-600/10 rounded-[3rem] blur-2xl animate-pulse" />
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
                    <p className="text-yellow-400 font-black text-sm uppercase tracking-wider mb-1">Acreage-Ready Standard</p>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">"They didn't blink at our long gravel driveway or the size of the house — just got to work."</p>
                    <p className="text-white text-xs font-semibold mt-2">— Caroline B., River Road</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Why Johns Island Needs Deep Cleaning */}
      <section className="py-24 bg-slate-950 border-y border-slate-800/60 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Clean home entryway"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div>
              <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">A Different Kind of Dirt</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 font-heading tracking-tight">
                Farm Roads and Fresh Construction Don't Mix Well With a Quick Mop
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  Johns Island doesn't clean like a subdivision three miles into town. Long gravel and dirt driveways off <span className="text-white font-semibold">River Road</span> and <span className="text-white font-semibold">Maybank Highway</span> track in a fine, gritty dust that settles into entryway floors and HVAC returns faster than pavement dust does. Homes near working farmland pick up pollen and field dust on top of that.
                </p>
                <p>
                  New construction adds a second problem. With subdivisions still going up near the <span className="text-white font-semibold">Angel Oak</span> and along the Kiawah/Seabrook corridor, plenty of "finished" homes still have drywall dust hiding in vents, light fixtures, and cabinet interiors a year after closing. A standard cleaning pass never reaches it.
                </p>
                <p>
                  And because so many properties here sit on multiple acres instead of a quarter-acre lot, we scope your visit around actual square footage and layout — a farmhouse with three times the floor space of a townhome needs more than a townhome-sized crew and timeline.
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
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">Full Transparency Checklist</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
              Acreage Deep Clean vs. Standard Clean
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              See exactly what we add for larger properties and homes near farmland or active construction.
            </p>

            <div className="flex justify-center mt-8">
              <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-2xl inline-flex gap-2">
                <button
                  onClick={() => setActiveTab('deep')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-lime-600 text-slate-900 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Acreage Deep Clean ✦
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
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-lime-500/10 hover:border-lime-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" /> Entryway & Farm-Dust Treatment (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Mudroom and entryway floors deep-scrubbed for embedded grit",
                      "AC vents and returns vacuumed of fine construction/field dust",
                      "Window sills and tracks cleared of dust buildup",
                      "Baseboards hand-wiped along main walkways",
                      "Rug and mat undersides vacuumed and shaken out",
                      "Light fixtures and ceiling fans dusted throughout"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-lime-400 mt-1 shrink-0 bg-lime-500/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-lime-500/10 hover:border-lime-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Home className="w-6 h-6 text-emerald-400" /> Whole-Property Detailing (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Cabinet interiors checked and wiped for leftover drywall dust",
                      "Kitchen and bathroom grout scrubbed line by line",
                      "Interior windows cleaned inside and out",
                      "Closets and pantry shelving vacuumed and wiped",
                      "Ceiling fan blades hand-washed of dust buildup",
                      "Extra room-to-room time scoped for larger square footage"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-lime-400 mt-1 shrink-0 bg-lime-500/10 p-0.5 rounded-full" />
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
                      "Vacuum carpets and main living area rugs",
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
              Why Johns Island Homeowners Trust Us
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
              text="We live on a few acres off River Road and most cleaners don't want to make the drive or deal with the size of the place. Star Cleaning SC never blinks, and our farmhouse has never looked better."
              author="Caroline B."
              location="River Road"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="Our new build near the Angel Oak still had construction dust in the vents a year after we moved in. They finally got it all out during a deep clean. Wish we'd called sooner."
              author="Patrick M."
              location="near Angel Oak"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="We have a waterfront property on the Stono River and needed a team we could trust with the place while we're away. They're reliable, thorough, and always lock up properly."
              author="Diane R."
              location="Stono River"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-lime-400 font-bold uppercase tracking-widest text-xs">Johns Island SC FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light">Direct answers about deep cleaning larger properties, farmhouses, and new builds on Johns Island.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you charge more for larger properties or homes on multiple acres?",
                a: "Pricing is based on your home's actual square footage and condition rather than a flat per-visit rate, so a larger Johns Island property is quoted accordingly during your free quote request rather than assumed to fit a standard suburban price."
              },
              {
                q: "Can you remove leftover construction dust from a home we moved into over a year ago?",
                a: "Yes, this is one of our most common Johns Island requests. Drywall dust settles into vents, light fixtures, and cabinet interiors and often gets missed by move-in cleaning. Our deep clean specifically targets those spots even long after construction ended."
              },
              {
                q: "Do you travel to rural properties off River Road and Maybank Highway?",
                a: "Yes, we regularly service homes throughout Johns Island, including properties on gravel or dirt driveways well off the main road. Just let us know your access details when booking."
              },
              {
                q: "How do you handle homes near working farmland or unpaved roads?",
                a: "We add extra vacuuming and wiping passes at entryways, window sills, and vents, since farm-adjacent and unpaved-road homes accumulate fine dust faster than homes on paved, in-town streets."
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
                  <ChevronDown className={`w-5 h-5 text-lime-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-24 bg-gradient-to-br from-lime-900 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
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
            A Clean That Matches Your Acreage, Not a Townhome
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Book a deep clean for your Johns Island farmhouse, new build, or waterfront home in under 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-lime-600 hover:bg-lime-700 text-slate-900 font-black rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
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
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-lime-400">Lowcountry Hubs</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Summerville SC</Link></li>
                <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Ladson SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-lime-400">More Service Areas</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-north-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning North Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-james-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning James Island SC</Link></li>
                <li><Link href="/deep-cleaning-daniel-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Daniel Island SC</Link></li>
                <li><Link href="/deep-cleaning-mount-pleasant-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Mount Pleasant SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-lime-400">Other Local Services</p>
              <ul className="space-y-2">
                <li><Link href="/locations/johns-island" className="hover:text-white transition-colors">Johns Island Service Area</Link></li>
                <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-white transition-colors">Move-In/Out Turnkeys</Link></li>
                <li><Link href="/services/post-construction-cleaning" className="hover:text-white transition-colors">Post-Construction Cleaning</Link></li>
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
