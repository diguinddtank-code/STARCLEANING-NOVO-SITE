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
  Droplets,
  ChevronDown,
  ArrowRight,
  Home,
  Check,
  PlaneTakeoff
} from 'lucide-react';

export default function NorthCharlestonClient() {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-star-blue/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-star-blue/10 border border-star-blue/30 backdrop-blur-md mb-6"
              >
                <PlaneTakeoff className="w-4 h-4 text-[#7FA4D6]" />
                <span className="text-xs font-bold text-[#B8CCE6] uppercase tracking-widest">Rivers Ave Corridor: North Charleston, SC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-white font-heading"
              >
                Deep Cleaning Built <br />
                <span className="text-[#7FA4D6]">
                  Around Your Shift
                </span> <br />
                in North Charleston
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                From Park Circle bungalows to the apartment corridors off Rivers Ave and Ashley Phosphate, we book around Boeing and Joint Base rotations and leave rental units ready for the next tenant to walk in.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-star-blue hover:bg-star-dark text-white rounded-xl font-black transition-all shadow-lg shadow-star-blue/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
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
                  Early & Late Booking Slots
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
                <div className="absolute inset-0 bg-star-blue/10 rounded-[3rem] blur-2xl animate-pulse" />
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
                    <p className="text-yellow-400 font-black text-sm uppercase tracking-wider mb-1">Turnover Ready</p>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">"They cleaned our unit same-day so we didn't lose a single day of rent between tenants."</p>
                    <p className="text-white text-xs font-semibold mt-2">— Angela F., Property Manager, Park Circle</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content: Why North Charleston Needs Deep Cleaning */}
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
              <span className="text-[#7FA4D6] font-bold uppercase tracking-widest text-xs">Why We Get Called Back Here</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 font-heading tracking-tight">
                North Charleston Runs on Turnover and Shift Work
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  This isn't a slow-turnover suburb. Between the apartment complexes lining Ashley Phosphate and Rivers Ave, and the steady flow of tenants tied to Boeing and Joint Base Charleston assignments, units here get handed back and re-rented faster than almost anywhere else in the Lowcountry.
                </p>
                <p>
                  That pace punishes standard cleaning. Carpet in a two-year rental holds more ground-in grit than a homeowner's floor holds in five, and a quick wipe-down before a new tenant's walkthrough leaves exactly the marks a leasing agent is trained to spot. We run the full deep-clean pass — cabinets, vents, baseboards, grout — so the unit passes inspection the first time, not the second.
                </p>
                <p>
                  For homeowners in <span className="text-white font-semibold">Park Circle</span> and the neighborhoods off <span className="text-white font-semibold">Dorchester Road</span>, the issue is usually timing: rotating shifts mean the house is empty at odd hours and full during ours. We schedule early-morning and evening slots specifically because a 9-to-5 cleaning window doesn't fit a Boeing swing shift.
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
            <span className="text-[#7FA4D6] font-bold uppercase tracking-widest text-xs">Full Transparency Checklist</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
              Turnover Deep Clean vs. Standard Clean
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              See exactly what separates a leasing-office-ready deep clean from a quick weekly tidy.
            </p>

            <div className="flex justify-center mt-8">
              <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-2xl inline-flex gap-2">
                <button
                  onClick={() => setActiveTab('deep')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-star-blue text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Turnover Deep Clean ✦
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
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-star-blue/10 hover:border-star-blue/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" /> Kitchen & Appliances (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Cabinet interiors and shelf liners wiped and inspected for stains",
                      "Oven interior, racks, and stovetop degreased and polished",
                      "Refrigerator interior cleaned and deodorized (if left behind)",
                      "Dishwasher gasket and filter sanitized",
                      "Range hood and vent filter degreased",
                      "Counter and backsplash grout scrubbed to original color"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#7FA4D6] mt-1 shrink-0 bg-star-blue/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-star-blue/10 hover:border-star-blue/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-[#7FA4D6]" /> Move-Out Detail Pass (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Baseboards and door frames hand-wiped of scuff marks",
                      "Closet interiors and shelving vacuumed and wiped",
                      "Window tracks and sills cleared of built-up dust",
                      "Light switch plates and outlet covers sanitized",
                      "Air vent covers removed, washed, and reset",
                      "Carpet edges and corners deep-vacuumed where furniture sat"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#7FA4D6] mt-1 shrink-0 bg-star-blue/10 p-0.5 rounded-full" />
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
                      "Mop kitchen, bathroom, and entry flooring",
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
                      "Bed-making on primary bedrooms (linens not swapped)",
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
              What North Charleston Clients Say
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
              text="I manage six units off Ashley Phosphate and used to lose two or three days between tenants waiting on cleaning. Star Cleaning turns a unit around same-day now, including the oven and cabinet interiors."
              author="Angela F."
              location="Property Manager"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="I work rotating 12-hour shifts near the base and could never get anyone to clean before 7am. They started showing up at 6:30 and I come home off a night shift to a spotless house. Small thing, huge difference."
              author="Derek W."
              location="Park Circle"
            />
            <ReviewCard
              theme="dark"
              variant="grid"
              text="Our old townhome near the Tanger Outlets had years of grime built into the vents from being a rental. They pulled the covers off, washed them separately, and the airflow noticeably improved."
              author="Priya N."
              location="North Rhett"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-[#7FA4D6] font-bold uppercase tracking-widest text-xs">North Charleston SC FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light">Straight answers about deep cleaning apartments, rentals, and homes in North Charleston.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you clean apartment complexes and multi-unit buildings, or just single-family homes?",
                a: "Both. A large share of our North Charleston work is apartment and townhome turnovers for property managers along Rivers Ave and Ashley Phosphate. We can quote a single unit or a standing arrangement for multiple units on a rolling schedule."
              },
              {
                q: "Can you schedule a cleaning before 8am or after 6pm for night-shift workers?",
                a: "Yes. We keep early-morning and evening slots open specifically for clients working rotating shifts at Boeing or Joint Base Charleston. Ask for a shift-friendly slot when you request your quote."
              },
              {
                q: "Will the deep clean pass a landlord's move-out inspection?",
                a: "Our move-out deep clean covers the items leasing agents check first: cabinet and appliance interiors, baseboards, vent covers, and closet shelving. Most clients use it specifically to avoid deposit deductions, and we will re-clean any flagged area within 24 hours at no charge."
              },
              {
                q: "Do you have experience with construction or industrial dust from the I-26 corridor?",
                a: "Yes, several of our recurring clients are near the industrial and warehouse zones along I-26 and Rivers Ave, where fine dust settles faster on window sills and vents. We adjust our vacuuming and dusting passes accordingly on those routes."
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
                  <ChevronDown className={`w-5 h-5 text-[#7FA4D6] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-24 bg-gradient-to-br from-star-dark via-slate-800 to-slate-900 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Cleaning products background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">Fast Scheduling</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6 font-heading tracking-tight leading-tight">
            Between Tenants or Between Shifts, We Fit Your Clock
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Book a turnover clean for your rental or a deep clean around your work schedule. Background-checked crew, in and out in one visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-star-blue hover:bg-star-dark text-white font-black rounded-xl text-lg transition-all shadow-xl shadow-star-blue/30 flex items-center gap-2 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
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
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-[#7FA4D6]">Lowcountry Hubs</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-north-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning North Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Summerville SC</Link></li>
                <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Ladson SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-[#7FA4D6]">More Service Areas</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-james-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning James Island SC</Link></li>
                <li><Link href="/deep-cleaning-daniel-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Daniel Island SC</Link></li>
                <li><Link href="/deep-cleaning-johns-island-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Johns Island SC</Link></li>
                <li><Link href="/deep-cleaning-mount-pleasant-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Mount Pleasant SC</Link></li>
                <li><Link href="/locations/north-charleston" className="hover:text-white transition-colors">North Charleston Service Area</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-[#7FA4D6]">Other Local Services</p>
              <ul className="space-y-2">
                <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-white transition-colors">Move-In/Out Turnkeys</Link></li>
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-white transition-colors">Vacation & Airbnb Cleanings</Link></li>
                <li><Link href="/services/commercial-office-cleaning" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
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
