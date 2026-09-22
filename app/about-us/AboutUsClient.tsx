'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CleaningForAReason from '@/components/CleaningForAReason';
import ReviewCard from '@/components/ReviewCard';
import { homeReviews } from '@/data/reviews';
import {
  Key,
  Users,
  Leaf,
  ShieldCheck,
  BadgeCheck,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Award,
  Heart,
  Calendar,
  CheckCircle2,
  Phone,
} from 'lucide-react';

const serviceAreas = [
  { name: 'Summerville', href: '/locations/summerville' },
  { name: 'Charleston', href: '/locations/charleston' },
  { name: 'North Charleston', href: '/locations/north-charleston' },
  { name: 'Ladson', href: '/locations/ladson' },
  { name: 'James Island', href: '/locations/james-island' },
  { name: 'Daniel Island', href: '/locations/daniel-island' },
  { name: 'Johns Island', href: '/locations/johns-island' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant' },
];

const featuredReviews = homeReviews.filter((r) =>
  ['Mariah E.', 'Janice O.', 'Sarah R.'].includes(r.author)
);

export default function AboutUsClient() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-star-blue/10 selection:text-star-blue flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO - Clean, Direct, Trust-First
           ========================================================================= */}
        <section className="relative py-16 lg:py-24 bg-[#FAF9F7] border-b border-slate-100 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Core Narrative */}
              <div className="lg:col-span-7">
                <ScrollReveal direction="up" delay={50}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-star-blue"></span>
                    <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Story</span>
                  </div>
                  
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-6">
                    Eighteen Years in Charleston Homes. <span className="text-star-blue">Built on Showing Up.</span>
                  </h1>
                  
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                    Star Cleaning SC started with a straightforward premise: show up when you say you will, do the work thoroughly every single time, and treat people with respect. Eighteen years later, those principles are still what guide us every day.
                  </p>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
                    We are a veteran-owned, independently run residential cleaning service based in Summerville, South Carolina. We are not a franchise, an app, or a call center. When you call, you speak to us. When we clean, our own trained, background-checked team comes through the door.
                  </p>

                  <div className="flex flex-row items-center gap-3 sm:gap-4">
                    <Link
                      href="/quote"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-star-blue hover:bg-star-dark text-white px-4 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-star-blue/25 whitespace-nowrap text-center"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                    <a
                      href="tel:+18432979935"
                      className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-colors shadow-xs hover:border-star-blue/30 whitespace-nowrap text-center shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5 text-star-blue shrink-0" />
                      <span>(843) 297-9935</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Mariana Owner Photo */}
              <div className="lg:col-span-5">
                <ScrollReveal direction="left" delay={150}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white aspect-[3/4] max-w-sm mx-auto group">
                    <Image
                      src="/images/owner-photo.jpg"
                      alt="Mariana, owner of Star Cleaning SC, in Summerville, SC"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 text-white">
                      <p className="font-serif font-bold text-lg leading-tight">Mariana</p>
                      <p className="text-xs text-slate-200 mt-0.5">Owner &amp; Founder &bull; Star Cleaning SC</p>
                      <p className="text-xs text-yellow-300 font-medium mt-1">Veteran-Owned &bull; Summerville, SC</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: The Core Difference (4 Pillars)
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <ScrollReveal direction="up">
              <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">How We Operate</span>
                  <span className="w-8 h-px bg-star-blue"></span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                  What Keeps Families with Us for Years.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <ScrollReveal direction="up" delay={50}>
                <div className="bg-[#FAF9F7] p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">We Keep Our Schedule</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      If we are scheduled for Tuesday morning, we are there Tuesday morning. Consistency is the whole foundation of our business.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={120}>
                <div className="bg-[#FAF9F7] p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">Our Own W-2 Team</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Every cleaner is an employee, not an anonymous contractor. Background-checked, trained, insured, and paid properly.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={190}>
                <div className="bg-[#FAF9F7] p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">Same Familiar Faces</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      You get the same cleaners who know your home, your pets, and how you like things done. You never have to re-explain.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={260}>
                <div className="bg-[#FAF9F7] p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">Direct Accountability</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      If something isn&apos;t right, call us. We come back and make it right at no charge within 24 hours. No runaround.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Our Cleaning Team Preview
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-[#FAF9F7] border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1">
                <ScrollReveal direction="right" delay={50}>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white aspect-[4/3] group">
                    <Image
                      src="/images/team-complete.png"
                      alt="The Star Cleaning SC cleaning team"
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <ScrollReveal direction="left" delay={100}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-star-blue"></span>
                    <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our People</span>
                  </div>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.2] mb-5">
                    Meet the People Who <span className="text-star-blue">Care for Your Home.</span>
                  </h2>

                  <p className="text-slate-600 leading-relaxed text-base mb-4">
                    We believe that the quality of your cleaning comes directly from how well our cleaners are treated. We pay above-market wages, respect schedules, and treat our team like family.
                  </p>

                  <p className="text-slate-600 leading-relaxed text-base mb-7">
                    The result? Low turnover, high standards, and cleaners who genuinely take pride in their work.
                  </p>

                  <Link
                    href="/our-team"
                    className="inline-flex items-center gap-2 text-star-blue font-bold text-sm hover:text-star-dark transition-colors group"
                  >
                    <span>See more about our team and training</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Standards of Care (Light Minimalist Grid)
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Standards of Care</span>
                  <span className="w-8 h-px bg-star-blue"></span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900">
                  How We Take Care of <span className="text-star-blue">Your Home.</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal direction="up" delay={50}>
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                    <Key className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Key or Garage Access</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Most homeowners provide a lockbox, digital code, or key so our team can perform seamless cleanings while you work or run errands.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={130}>
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Consistent Faces</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    We assign dedicated cleaning specialists to your home. You build trust with familiar professionals who know your exact preferences.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={210}>
                <div className="p-6 rounded-2xl bg-[#FAF9F7] border border-slate-100 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Pet &amp; Family Safe</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    We arrive fully equipped with high-grade, pet-safe supplies and HEPA filtration vacuums that protect your indoor air quality.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: Total Peace of Mind (Security & Guarantees)
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-[#FAF9F7] border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Total Peace of Mind</span>
                  <span className="w-8 h-px bg-star-blue"></span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900">
                  You Are Welcoming Us In. <span className="text-star-blue">Here&apos;s Why It&apos;s Safe.</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal direction="up" delay={50}>
                <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ShieldCheck className="w-7 h-7 text-star-blue mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Background-Checked</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">Every single team member undergoes rigorous background screenings and vetting before entering any home.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={130}>
                <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <BadgeCheck className="w-7 h-7 text-star-blue mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Bonded &amp; Insured</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">Full liability coverage and bonding ensure your residence and possessions are protected at all times.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={210}>
                <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <RotateCcw className="w-7 h-7 text-star-blue mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">100% Guarantee</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">If any spot is ever overlooked, contact us within 24 hours and we promptly return to reclean it free of charge.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: Cleaning for a Reason Partnership
           ========================================================================= */}
        <CleaningForAReason />

        {/* =========================================================================
            SECTION 7: Verified Client Reviews
           ========================================================================= */}
        {featuredReviews.length > 0 && (
          <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
              <ScrollReveal direction="up">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-px bg-star-blue"></span>
                    <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Verified Reviews</span>
                    <span className="w-8 h-px bg-star-blue"></span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900">
                    What Neighbors <span className="text-star-blue">Are Saying.</span>
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredReviews.map((review, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 100}>
                    <ReviewCard theme="light" variant="grid" {...review} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION 8: Service Areas
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-[#FAF9F7] border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Local Reach</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 mb-4">
                Summerville, Charleston, and <span className="text-star-blue">Everywhere In Between.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                We clean houses all over the Lowcountry. If your town is on this list, chances are we already care for homes in your neighborhood.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 hover:border-star-blue hover:text-star-blue transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
            <p className="text-slate-500 text-sm mt-6">
              Also serving Goose Creek and nearby areas. <Link href="/locations" className="text-star-blue font-semibold hover:underline">See all service areas</Link>.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: Final CTA
           ========================================================================= */}
        <section className="py-16 lg:py-20 bg-star-dark text-white text-center">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-8">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Ready to Experience the Star Cleaning Difference?</h2>
              <p className="text-blue-100 mb-8">Get your home on the schedule today with Charleston&apos;s trusted cleaning crew.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/quote" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-lg">
                  Get a Free Quote
                </Link>
                <a href="tel:+18432979935" className="text-blue-100 font-bold text-sm hover:text-white transition-colors">
                  Or call or text (843) 297-9935
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
