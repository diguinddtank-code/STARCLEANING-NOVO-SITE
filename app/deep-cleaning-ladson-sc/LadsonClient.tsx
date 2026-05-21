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

export default function LadsonClient() {
  const [activeTab, setActiveTab] = useState<'deep' | 'standard'>('deep');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Before/After Slider Handler
  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging) {
      const container = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, container);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        {/* Ambient Visual Backing */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
            alt="Immaculate Ladson SC Home interior"
            fill
            priority
            className="object-cover opacity-20 filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md mb-6"
              >
                <MapPin className="w-4 h-4 text-blue-400 animate-bounce" />
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">Lowcountry suburban hub: Ladson, SC</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-white font-heading"
              >
                Veteran-Precision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-yellow-300">
                  Deep Cleaning
                </span> <br />
                for Ladson Residences
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                The ultimate military-standard deep reset. Tailored for military families at Joint Base Charleston and gorgeous family homes in Hunter's Bend. No dust or grease survives.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  href="/quote" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-black transition-all shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Book Instant Deep Reset <ArrowRight className="w-5 h-5" />
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
                  <span className="text-sm font-medium text-slate-300">Proudly Veteran Owned & Vetted</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  100% Insured for Civilian & Military
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
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sanitized living area in Ladson"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-5 rounded-2xl">
                    <p className="text-blue-400 font-black text-sm uppercase tracking-wider mb-1">Exchange Park Standard</p>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">"Their military inspection level deep clean saved our relocation housing deposit. They scrubbed places others didn't touch."</p>
                    <p className="text-white text-xs font-semibold mt-2">— SSG Andrew J., Joint Base Charleston</p>
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
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Pristine Ladson Living Space Restored"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Military Relocation Vetted</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 font-heading tracking-tight">
                Deep Cleaning Built for PCS Moves & Suburban Ladson Lifestyles
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  Ladson occupies a strategic location in the <span className="text-white font-semibold">Charleston Lowcountry</span>, serving as a hub for both thriving family suburbs and critical military personnel from nearby <span className="text-blue-300 font-semibold">Joint Base Charleston</span>. 
                </p>
                <p>
                  With military PCS reassignment shifts, families face immense pressure to pass rigorous visual deep-cleaning inspections to secure security deposits and maintain housing standing. 
                </p>
                <p>
                  At <span className="text-white font-semibold">Star Cleaning SC</span>, we bring military veteran discipline directly to civilian and military housing. We understand that a basic surface wipe is insufficient. Our deep cleaning is a specialized combat mission against grime—targeting dried stains, baseboard scuffs, ceiling fan grease, and range-hood build-up with meticulous, professional-grade execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Interactive Comparison Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">Unmatched Standards</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
            See the Military Standard Clean
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-light">
            Slide the handle to see how years of kitchen grease, oven residues, and heavy mold buildup vanish under our professional treatments.
          </p>

          {/* Interactive Slider Container */}
          <div 
            className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* Before Layer */}
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop" 
                alt="Before deep kitchen grease cleaning"
                fill
                className="object-cover filter contrast-75 brightness-75 sepia-[0.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black text-white/70 tracking-wider">
                BEFORE (ACID & GREASE LAYER)
              </div>
            </div>

            {/* After Layer */}
            <div 
              className="absolute inset-0 h-full overflow-hidden transition-all pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[100vw] h-full" style={{ width: '100%', minWidth: '800px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" 
                  alt="After immaculate home detailing"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black text-white tracking-wider">
                AFTER STAR MILITARY CLEAN
              </div>
            </div>

            {/* Slider bar */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30" 
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-blue-600 text-slate-900 font-bold">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Checklist Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Unmatched Quality Checklits</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading tracking-tight">
              Deep Clean Inspection Standards
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              We operate under precise guidelines which map directly to local housing relocation checklists.
            </p>

            {/* Tabs Selector */}
            <div className="flex justify-center mt-8">
              <div className="bg-slate-900 border border-slate-850 p-1.5 rounded-2xl inline-flex gap-2">
                <button 
                  onClick={() => setActiveTab('deep')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Ladson Deep Action List ✦
                </button>
                <button 
                  onClick={() => setActiveTab('standard')}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'standard' ? 'bg-gradient-to-r from-blue-650 to-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Suburban Maintenance Tasks
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'deep' ? (
              <>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-blue-500/10 hover:border-blue-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" /> Kitchen & Wet Resets (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Thorough hand-scrubbing of oven interiors & grease panels",
                      "Cabinet exteriors steam-wiped top to bottom",
                      "Sinks acid-washed to lift metal rust and water grease",
                      "Tile backsplashes cleared of dense cooking oils",
                      "Sanitation of kitchen and washing machine gaskets",
                      "Disinfection of trash receptacles inside and out"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-400 mt-1 shrink-0 bg-blue-500/10 p-0.5 rounded-full" />
                        <span className="text-slate-300 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-8 rounded-3xl border border-blue-500/10 hover:border-blue-500/20 transition-all">
                  <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-cyan-400" /> Whole House Trim & Detailing (Deep)
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Baseboards custom hand washed of black scuffs & dust",
                      "Blinds and shutter slots individually detailed",
                      "Ceiling fan blades washed of sticky black soil dust",
                      "Power switchplates cleaned and sanitized",
                      "A/C intake vents deeply vacuumed of construction silica",
                      "Deep HEPA extraction across carpets and rug backings"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-400 mt-1 shrink-0 bg-blue-500/10 p-0.5 rounded-full" />
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
                    <Home className="w-5 h-5 text-slate-400" /> Standard House Upkeep
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Suburban surface-level vacuuming",
                      "Fast mops of hardwood walkthrough zones",
                      "General kitchen countertop wipe-off",
                      "Mirror dusting and quick screen wipe",
                      "General bedroom trashcan emptying",
                      "Polishing of obvious chrome hardware surfaces"
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
                    <CheckCircle2 className="w-5 h-5 text-slate-400" /> Maintenance Block Tasks
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Straightening bedroom covers on main suites",
                      "Polishing handle panels on kitchen fridge",
                      "Sweeping front concrete entry steps",
                      "Aesthetic bedroom dusting of dressers",
                      "Emptying waste sections",
                      "Insuring ongoing baseline hygiene standards"
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
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Ladson Feedback</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1 mb-4 font-heading tracking-tight">
              Testimonials From Ladson Homeowners & Military Personnel
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
                  "Relocating on military orders is stressful enough. We ordered their deep clean for PCS move-out housing and passed structural inspections first try without a single flag. Veteran standards are real!"
                </p>
              </div>
              <p className="text-white text-xs font-bold">— Staff Sergeant Mike D., Joint Base Charleston</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 font-light italic text-sm leading-relaxed mb-6">
                  "Our house in Hunter's Bend had clay dust from nearby neighborhoods. They detailed our baseboards, blinds, and cleaned the vents perfectly. Smells amazing without heavy synthetic odors."
                </p>
              </div>
              <p className="text-white text-xs font-bold">— Emily T., Hunter's Bend</p>
            </div>

            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 font-light italic text-sm leading-relaxed mb-6">
                  "I hire them annually to deep clean my grandmother's home in Ladson. They are always professional, respect her belongings, and work with incredible attention to detail. Excellent team!"
                </p>
              </div>
              <p className="text-white text-xs font-bold">— Daniel R., Suburban Ladson</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Ladson SC FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-light">Direct and honest answers about our military-vetted house deep cleaners in Ladson, SC.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you offer military discounts for PCS relocation deep cleans?",
                a: "Yes, we are highly supportive of service members and veterans. In our Quote Builder or when calling us, mention your military association to receive our tailored appreciation package."
              },
              {
                q: "Does deep cleaning include removing scuffs on baseboard wood?",
                a: "Yes. Our deep clean is comprehensive. We use professional chemical wedges and high-quality melamine pads to carefully lift dark scuffs and mud stains from baseboards and doors."
              },
              {
                q: "Do you deep clean carpets or just vacuum?",
                a: "As part of deep cleaning, we utilize powerful, high-efficiency HEPA-filtered vacuum extraction to lift fine dust and allergens. For commercial-grade liquid carpet extraction or steam washing, toggle those add-on features on our dynamic quote form."
              },
              {
                q: "Are the cleaning formulas safe for small kids and pets?",
                a: "Yes, absolutely. We use eco-friendly, non-toxic, and chemical-balanced solutions. Your kids can safely play on the flooring right after we complete our process."
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
                  <ChevronDown className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
            alt="Felt background layout for Ladson"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs">Instant Setup</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6 font-heading tracking-tight leading-tight">
            Ready to Secure Your Inspection Walkthrough or Reset Your Home?
          </h2>
          <p className="text-slate-300 md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Don't get stressed by heavy inspections or months of accumulated clay dust. Book our verified veteran-led crew in under 2 minutes online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/quote"
              className="px-8 py-4 bg-gradient-to-r from-blue-650 to-cyan-500 hover:from-blue-600 hover:to-cyan-400 text-white font-black rounded-xl text-lg transition-all shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center gap-2 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Configure Online Quote <ArrowRight className="w-5 h-5 animate-pulse" />
            </Link>
            <a 
              href="tel:8432979935" 
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/85 border border-slate-700 text-white font-bold rounded-xl text-lg transition-all backdrop-blur-md w-full sm:w-auto"
            >
              Call Us: (843) 297-9935
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-6">
            ★ Fully Insured & Vetted • Veteran Built Checklist • 100% Satisfaction Checked ★
          </p>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-16 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-white font-extrabold text-base mb-6 font-heading">Localized Deep-Cleaning Services in South Carolina</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 font-light">
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-blue-400">Lowcountry Hubs</p>
              <ul className="space-y-2">
                <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Charleston SC</Link></li>
                <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Summerville SC</Link></li>
                <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Deep Cleaning Ladson SC</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-blue-400">Other Local Services</p>
              <ul className="space-y-2">
                <li><Link href="/services/residential-cleaning" className="hover:text-white transition-colors">Residential Home Cleaning</Link></li>
                <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-white transition-colors">Move-In/Out Turnkeys</Link></li>
                <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-white transition-colors">Vacation & Airbnb Cleanings</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-3 uppercase tracking-wider text-xs text-blue-400">Service Area Standard</p>
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
