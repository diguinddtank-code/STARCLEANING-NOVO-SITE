'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';

export default function AboutUsClient() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-slate-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow w-full pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative py-8 lg:py-28 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold tracking-widest uppercase mb-6">
                  <i className="fas fa-star text-yellow-500"></i>
                  Our Story
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-heading leading-[1.1] mb-6">
                  We Don't Just Clean. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">We Restore Your Peace.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light">
                  For over <strong className="font-bold text-slate-900">18 years</strong>, we've transformed thousands of homes in Charleston and the Lowcountry. What started as a small veteran-owned initiative has grown into the region's most trusted name in premium home care.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/#quote" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded-xl font-black transition-all duration-300 shadow-[0_10px_20px_rgba(250,204,21,0.2)] hover:-translate-y-1">
                    Check Our Availability
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    Only 3 recurring spots left this month
                  </div>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative mx-auto lg:mx-0"
              >
                <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[460px] lg:h-[580px]">
                  {/* Decorative Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-yellow-400 rounded-[2.5rem] transform rotate-3 scale-105 shadow-2xl"></div>
                  
                  <Image
                    src="https://i.imgur.com/Nv15wCN.png"
                    alt="Mariana, Owner of Star Cleaning SC"
                    fill
                    sizes="(max-width: 1024px) 400px, 460px"
                    className="rounded-[2.5rem] shadow-xl border-[6px] border-white relative z-10 object-cover"
                    priority
                  />

                  {/* Floating Badges */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 z-30"
                  >
                    <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-slate-50 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
                        <i className="fas fa-medal"></i>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-slate-900">18+</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 z-30"
                  >
                    <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                       <Image src="https://image-cdn.carrot.com/uploads/sites/6069/2012/01/veteran-owned.png" alt="Veteran Owned" width={32} height={16} className="object-contain brightness-0 invert" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Veteran Owned</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Social Proof & Trust */}
        <section className="py-12 border-y border-slate-100 bg-slate-50/50">
           <TrustBar />
        </section>

        {/* Philosophy Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-heading mb-6 tracking-tight">The Standard We Set</h2>
              <p className="text-lg text-slate-600 font-light">We don't believe in surface-level aesthetics. We believe in meticulous detail, military-grade discipline, and a customer experience so seamless it feels like magic.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: "fa-shield-halved",
                  title: "Military Precision",
                  desc: "As a veteran-owned business, discipline isn't a buzzword; it's our operating system. We follow strict, standardized checklists ensuring zero corners are cut."
                },
                {
                  icon: "fa-heart",
                  title: "Treated Like Family",
                  desc: "Your home is your sanctuary. We hand-select, rigorously vet, and train our staff to treat your property with the utmost respect and confidentiality."
                },
                {
                  icon: "fa-award",
                  title: "100% Guaranteed",
                  desc: "We stand by our work. If you aren't completely thrilled with the detailing of your home, we return to fix it at zero cost. Your satisfaction is non-negotiable."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">Experience the Difference.</h2>
            <p className="text-xl text-slate-400 mb-10 font-light max-w-2xl mx-auto">
              Stop settling for inconsistent cleaners. Join the hundreds of Charleston families who trust Star Cleaning SC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#quote" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-transform hover:-translate-y-1">
                Get Your Custom Quote
              </Link>
              <span className="text-slate-500 text-sm">Takes less than 60 seconds</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
