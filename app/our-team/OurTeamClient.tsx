'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { ShieldCheck, Users, Heart, Sparkles, ArrowRight } from 'lucide-react';

const headlineClass = `font-serif font-medium leading-[1.1] text-slate-900 tracking-tight`;

const trustPoints = [
  { icon: ShieldCheck, title: 'Background-Checked', desc: 'Your peace of mind matters.' },
  { icon: Users, title: 'Experienced Team', desc: 'Trained, reliable professionals.' },
  { icon: Heart, title: 'People Who Care', desc: 'We treat every home like our own.' },
  { icon: Sparkles, title: 'Making a Difference', desc: 'Proud partner of Cleaning for a Reason.' },
];

export default function OurTeamClient() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-star-blue/10 selection:text-star-blue flex flex-col">
      <Navbar />

      <main className="flex-grow w-full">

        {/* =========================================================================
            SECTION 1 (HERO): Real People. Real Care. A Cleaner Home.
            Layout: White copy on Left with smooth S-Curve (starts at L480, ends at L420)
           ========================================================================= */}
        <section className="relative bg-white overflow-hidden">
          
          {/* Desktop & Tablet-Landscape */}
          <div className="hidden lg:block relative h-[600px] xl:h-[640px] overflow-hidden">
            {/* Background Backdrop */}
            <div className="absolute inset-0 overflow-hidden bg-[#f6f4f1]">
              <Image
                src="/images/background-team.png"
                alt=""
                fill
                priority
                aria-hidden="true"
                className="object-cover object-[0%_35%] scale-[1.75]"
              />
              <div className="absolute inset-0 bg-white/10" />
            </div>

            {/* Editorial handwriting detail */}
            <p className="font-handwriting text-2xl text-star-blue/80 absolute top-10 right-12 text-right leading-snug z-20 pointer-events-none select-none">
              A Cleaner
              <br />
              Brighter Tomorrow
              <span className="block w-16 h-px bg-star-blue/30 mt-1 ml-auto"></span>
            </p>

            {/* Curva 1: Flui suave do topo (L480) até a base (L420) */}
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              viewBox="0 0 1000 640"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 L480,0 C540,200 370,440 420,640 L0,640 Z"
                fill="white"
              />
            </svg>

            {/* Recorte da equipe com escala proporcional aumentada na medida certa */}
            <div className="absolute bottom-0 z-20 lg:left-[39%] lg:w-[60%] xl:left-[35%] xl:w-[64%] 2xl:left-[31%] 2xl:w-[68%] max-w-[1060px] pointer-events-none">
              <Image
                src="/images/fullteam.png"
                alt="Mariana and the Star Cleaning SC team standing together in matching uniforms"
                width={1774}
                height={887}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
              />
            </div>

            {/* Left Content */}
            <div className="relative z-30 h-full flex items-center pl-12 xl:pl-20 pr-6">
              <div className="max-w-[400px] xl:max-w-[450px]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Team</span>
                </div>

                <h1 className={`${headlineClass} text-4xl sm:text-5xl xl:text-[3.25rem] mb-5`}>
                  Real People.
                  <br />
                  Real Care.
                  <br />
                  <span className="text-star-blue">A Cleaner Home.</span>
                </h1>

                <p className="text-slate-600 leading-relaxed text-base mb-7 max-w-md">
                  Our team is the heart of Star Cleaning SC. We&apos;re a local group of trained, background-checked professionals who take pride in caring for your home like it&apos;s our own.
                </p>

                <a
                  href="#team-in-action"
                  className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-star-blue/25"
                >
                  Meet Our Team <ArrowRight className="w-4 h-4 rotate-90" />
                </a>

                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                  <span>Local team</span>
                  <span className="text-slate-300">|</span>
                  <span>Background-checked</span>
                  <span className="text-slate-300">|</span>
                  <span>18+ years exp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Fallback for Section 1 */}
          <div className="lg:hidden">
            <div className="px-6 sm:px-10 pt-10 pb-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Team</span>
              </div>
              <h1 className={`${headlineClass} text-3xl sm:text-4xl mb-4`}>
                Real People.
                <br />
                Real Care.
                <br />
                <span className="text-star-blue">A Cleaner Home.</span>
              </h1>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                Our team is the heart of Star Cleaning SC. We&apos;re a local group of trained, background-checked professionals who take pride in caring for your home like it&apos;s our own.
              </p>
              <a
                href="#team-in-action"
                className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md"
              >
                Meet Our Team <ArrowRight className="w-4 h-4 rotate-90" />
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>Local team</span>
                <span className="text-slate-300">|</span>
                <span>Background-checked</span>
                <span className="text-slate-300">|</span>
                <span>18+ years exp</span>
              </div>
            </div>
            <div className="relative w-full aspect-[933/523] overflow-hidden mt-2">
              <Image
                src="/images/teammobile.png"
                alt="The Star Cleaning SC team"
                fill
                className="object-cover object-[center_64%]"
              />
            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 2 (TEAM IN ACTION - BEDROOM): Trusted. Trained. Committed.
            Layout: Split Layout com Curva Contínua (Começa exatamente em L420 onde a Sec 1 terminou e termina em L460)
            Foto com container de 55% da largura, mantendo a proporção natural da foto sem zoom excessivo!
           ========================================================================= */}
        <section id="team-in-action" className="relative bg-white overflow-hidden scroll-mt-10">
          
          {/* Desktop & Tablet-Landscape */}
          <div className="hidden lg:block relative h-[580px] xl:h-[620px] overflow-hidden">
            
            {/* Foto posicionada no lado direito em container que se estende sob a curva SVG eliminando qualquer corte reto */}
            <div className="absolute inset-y-0 right-0 w-[70%] xl:w-[72%] overflow-hidden bg-slate-100">
              <Image
                src="/images/team2.png"
                alt="Star Cleaning SC team making a bed with precision"
                fill
                priority
                className="object-cover object-[right_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/15 pointer-events-none" />
              
              {/* Detalhe manuscrito no canto superior direito sobre a foto */}
              <p className="font-handwriting text-3xl text-white absolute top-10 right-12 text-right leading-tight z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] pointer-events-none select-none">
                Same Team.
                <br />
                A Higher Standard.
              </p>
            </div>

            {/* Curva 2: Inicia perfeitamente alinhada em L420 (continuação da Sec 1) e flui suave e ondulada até L460 */}
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              viewBox="0 0 1000 620"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 L420,0 C380,200 510,420 460,620 L0,620 Z"
                fill="white"
              />
            </svg>

            {/* Left Content */}
            <div className="relative z-20 h-full flex items-center pl-12 xl:pl-20 pr-6">
              <ScrollReveal direction="left" className="max-w-[400px] xl:max-w-[450px]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                    The People Behind A Cleaner Tomorrow
                  </span>
                </div>

                <h2 className={`${headlineClass} text-4xl sm:text-5xl xl:text-[3.1rem] mb-5`}>
                  Trusted. Trained.
                  <br />
                  <span className="text-star-blue">Committed.</span>
                </h2>

                <p className="text-slate-600 leading-relaxed text-base mb-7">
                  Every member of our team is carefully selected, background-checked, and trained to deliver consistent, high-quality results. We show up on time, work with care, and always treat your home with respect.
                </p>

                <div className="pt-1">
                  <p className="font-handwriting text-2xl sm:text-3xl text-star-blue/90 leading-tight">
                    Same Team. A Higher Standard.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Mobile Fallback for Section 2 */}
          <div className="lg:hidden bg-white">
            <div className="px-6 sm:px-10 pt-10 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  The People Behind A Cleaner Tomorrow
                </span>
              </div>
              <h2 className={`${headlineClass} text-3xl sm:text-4xl mb-4`}>
                Trusted. Trained. <span className="text-star-blue">Committed.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                Every member of our team is carefully selected, background-checked, and trained to deliver consistent, high-quality results. We show up on time, work with care, and always treat your home with respect.
              </p>
              <p className="font-handwriting text-2xl text-star-blue">
                Same Team. A Higher Standard.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/team2.png"
                alt="Star Cleaning SC team making a bed"
                fill
                className="object-cover object-[center_center]"
              />
            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 3: Four Pillars Trust Strip
           ========================================================================= */}
        <section className="py-14 lg:py-16 bg-[#FAFAF9] border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <ScrollReveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-slate-200">
                {trustPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="text-center px-4 lg:px-6">
                      <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center mx-auto mb-3.5 text-star-blue">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-slate-900 text-sm sm:text-base font-bold tracking-tight mb-1">{point.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* =========================================================================
            SECTION 4 (DINING ROOM & CARE): A Team That Cares About People
            Layout: Split Layout com Curva Contínua fluida e Foto Proporcional no lado direito
           ========================================================================= */}
        <section className="relative bg-white overflow-hidden">
          
          {/* Desktop & Tablet-Landscape */}
          <div className="hidden lg:block relative h-[580px] xl:h-[620px] overflow-hidden">
            
            {/* Foto da Sala de Jantar no lado direito em container amplo sob a curva SVG */}
            <div className="absolute inset-y-0 right-0 w-[70%] xl:w-[72%] overflow-hidden bg-slate-100">
              <Image
                src="/images/team3.png"
                alt="Star Cleaning SC team cleaning a dining room"
                fill
                priority
                className="object-cover object-[right_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/20 pointer-events-none" />
              
              {/* Handwriting Badge on the bottom-right corner of the photograph */}
              <p className="font-handwriting text-3xl xl:text-4xl text-white absolute bottom-8 right-12 text-right leading-tight z-20 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] pointer-events-none select-none">
                Cleaner Homes.
                <br />
                Brighter Days.
              </p>
            </div>

            {/* Curva 3: Transição contínua orgânica */}
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              viewBox="0 0 1000 620"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 L460,0 C510,200 380,420 430,620 L0,620 Z"
                fill="white"
              />
            </svg>

            {/* Left Content */}
            <div className="relative z-20 h-full flex items-center pl-12 xl:pl-20 pr-6">
              <ScrollReveal direction="left" className="max-w-[400px] xl:max-w-[450px]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                    More Than A Cleaning Company
                  </span>
                </div>

                <h2 className={`${headlineClass} text-4xl sm:text-5xl xl:text-[3.25rem] mb-5`}>
                  A Team That
                  <br />
                  <span className="text-star-blue">Cares About People</span>
                </h2>

                <p className="text-slate-600 leading-relaxed text-base mb-7 max-w-md">
                  We believe a clean home creates a healthier, happier life. Our team is proud to serve families across Charleston and surrounding areas, giving back to our local community every single day.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-star-blue/25"
                  >
                    Our Story <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3.5 rounded-full font-semibold text-sm transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Mobile Fallback for Section 4 */}
          <div className="lg:hidden">
            <div className="px-6 sm:px-10 pt-10 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  More Than A Cleaning Company
                </span>
              </div>
              <h2 className={`${headlineClass} text-3xl sm:text-4xl mb-4`}>
                A Team That <span className="text-star-blue">Cares About People</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                We believe a clean home creates a healthier, happier life. Our team is proud to serve families across Charleston and surrounding areas, giving back to our local community every single day.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md"
                >
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-5 py-3 rounded-full font-semibold text-sm"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/team3.png"
                alt="Star Cleaning SC team cleaning a dining room"
                fill
                className="object-cover object-[center_center]"
              />
              <p className="font-handwriting text-2xl text-white absolute bottom-4 right-5 text-right drop-shadow-lg">
                Cleaner Homes. Brighter Days.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
