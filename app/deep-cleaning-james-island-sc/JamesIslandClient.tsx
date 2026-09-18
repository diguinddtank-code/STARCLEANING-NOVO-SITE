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

export default function JamesIslandClient() {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-400/20 backdrop-blur-md mb-6"
              >
                <Waves className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-bold text-teal-200 uppercase tracking-widest">Marsh & Barrier Island: James Island, SC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-white font-heading"
              >
                Deep Cleaning for <br />
                <span className="text-teal-400">
                  Sand, Salt & Sun
                </span> <br />
                on James Island
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                From Riverland Drive to the Folly Beach corridor, we clear tracked-in sand, salt film, and marsh humidity out of floors, fixtures, and vents that a regular mop pass leaves behind.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
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
                <div className="absolute inset-0 bg-teal-600/10 rounded-[3rem] blur-2xl animate-pulse" />
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
                    <p className="text-yellow-400 font-black text-sm uppercase tracking-wider mb-1">Sand-Free Standard</p>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">"They got sand out of grout lines I didn't think would ever come clean."</p>
                    <p className="text-white text-xs font-semibold mt-2">— Bethany R., Riverland Terrace</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Why James Island Needs Deep Cleaning */}
      <section className="py-24 bg-slate-950 border-y border-slate-800/60 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Clean home floor detail"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div>
              <span className="text-teal-400 font-bold uppercase tracking-widest text-xs">Living This Close to the Water</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 font-heading tracking-tight">
                Regular Mopping Doesn't Beat Folly Beach Sand
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  Every trip to Folly Beach or the county park comes home with you, whether it's in a beach bag, a dog's paws, or the tread of a pair of flip-flops. Fine sand works into grout lines and rug fibers within days, and a normal vacuum pass only lifts what's sitting on the surface.
                </p>
                <p>
                  Salt air adds a second layer most inland cleaning crews never deal with. It leaves a faint film on bathroom fixtures, window tracks, and stainless appliances that looks like water spots until you try to wipe it off with a dry cloth. We use a mineral-cutting solution on those surfaces instead of standard glass cleaner, because standard cleaner just smears it around.
                </p>
                <p>
                  Add in the marsh-side humidity along <span className="text-white font-semibold">Riverland Drive</span> and near <span className="text-white font-semibold">James Island County Park</span>, and bathroom grout darkens faster here than it would three miles inland. Our deep clean treats that grout on every visit, not as an upsell.
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
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs">Full Transparency Checklist</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
              Coastal Deep Clean vs. Standard Clean
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              See exactly what we add for homes dealing with sand, salt air, and marsh humidity.
            </p>

            <div className="flex justify-center mt-8">
              <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-2xl inline-flex gap-2">
                <button
                  onClick={() => setActiveTab('deep')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Coastal Deep Clean ✦
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
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-teal-500/10 hover:border-teal-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Waves className="w-6 h-6 text-teal-400" /> Sand & Salt Treatment (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Entryway and mudroom floors deep-scrubbed for embedded sand",
                      "Grout lines treated for salt-air discoloration",
                      "Bathroom and kitchen fixtures de-filmed with mineral-cutting solution",
                      "Window tracks and sills cleared of crusted salt residue",
                      "Rug and mat undersides vacuumed and shaken out",
                      "Stainless steel appliances polished streak-free"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-400 mt-1 shrink-0 bg-teal-500/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-teal-500/10 hover:border-teal-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" /> Whole-Home Detailing (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Baseboards and door frames hand-wiped throughout",
                      "Ceiling fans washed to remove humidity-caught dust",
                      "Interior windows and sills cleaned inside and out",
                      "Cabinet exteriors wiped of humidity residue",
                      "AC vents and returns vacuumed for marsh-driven dust",
                      "Closets and shelving vacuumed and wiped"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-400 mt-1 shrink-0 bg-teal-500/10 p-0.5 rounded-full" />
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
                      "Vacuum carpets and entryway rugs",
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
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Island Feedback</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1 mb-4 font-heading tracking-tight">
              Why James Island Hosts and Homeowners Call Us
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
              text="We're two blocks off Riverland Terrace and sand gets everywhere no matter how careful the kids are. They got sand out of grout lines I didn't think would ever come clean."
              author="Bethany R."
              location="Riverland Terrace"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="I run a rental two minutes from Folly Beach and salt film was building up on the shower glass no matter what I sprayed on it. Their crew knew exactly what to use and it hasn't come back."
              author="Todd S."
              location="Folly Beach Rental Host"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="Our house backs up to the marsh and the grout was going gray within months of a normal clean. Since switching to their deep clean every quarter, it's stayed the right color."
              author="Nicole A."
              location="near James Island County Park"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs">James Island SC FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light">Direct answers about deep cleaning coastal homes and rentals on James Island.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How do you get sand out of hardwood floors and area rugs?",
                a: "We start with a HEPA-filtered vacuum pass to lift loose sand before it gets ground into the finish, then hand-wipe grout lines and floor edges where sand collects. Rugs get flipped and vacuumed on both sides, not just the top."
              },
              {
                q: "Does salt air actually damage fixtures, or is that just cosmetic film?",
                a: "Both. The visible film on chrome and glass is mostly cosmetic and comes off with the right mineral-cutting solution, but left untreated for months it can pit chrome finishes and dull glass shower doors permanently. Regular treatment prevents that."
              },
              {
                q: "Can you do a same-day turnover for a Folly Beach vacation rental?",
                a: "Yes, this is one of our most common requests on the island. We coordinate around your checkout and check-in windows and can commit to a recurring same-day slot for hosts with a regular booking calendar."
              },
              {
                q: "How often should a coastal home get a deep clean compared to an inland home?",
                a: "We generally recommend every 3 to 4 months for homes within a mile or two of the water, versus twice a year inland. Salt air and marsh humidity build up on fixtures and grout faster than dust does in a typical inland house."
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
                  <ChevronDown className={`w-5 h-5 text-teal-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-24 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
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
            Leave the Sand at the Door, Not on Your Floors
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Book a coastal deep clean for your James Island home or rental in under 2 minutes. Background-checked crew, pet-safe products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
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
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-teal-400">Lowcountry Hubs</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Summerville SC</Link></li>
                <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Ladson SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-teal-400">More Service Areas</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-north-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning North Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-daniel-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Daniel Island SC</Link></li>
                <li><Link href="/deep-cleaning-johns-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Johns Island SC</Link></li>
                <li><Link href="/deep-cleaning-mount-pleasant-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Mount Pleasant SC</Link></li>
                <li><Link href="/locations/james-island" className="hover:text-white transition-colors">James Island Service Area</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-teal-400">Other Local Services</p>
              <ul className="space-y-2">
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-white transition-colors">Vacation & Airbnb Cleanings</Link></li>
                <li><Link href="/services/residential-cleaning" className="hover:text-white transition-colors">Residential Home Cleaning</Link></li>
                <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-white transition-colors">Move-In/Out Turnkeys</Link></li>
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
