'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceAreas from '@/components/ServiceAreas';
import BookingForm from '@/components/BookingForm';
import { Phone, Mail, Clock, MapPin, BadgeCheck, ShieldCheck, Award } from 'lucide-react';

const serviceAreaLinks = [
  { name: 'Charleston', href: '/locations/charleston' },
  { name: 'North Charleston', href: '/locations/north-charleston' },
  { name: 'Summerville', href: '/locations/summerville' },
  { name: 'Ladson', href: '/locations/ladson' },
  { name: 'James Island', href: '/locations/james-island' },
  { name: 'Daniel Island', href: '/locations/daniel-island' },
  { name: 'Johns Island', href: '/locations/johns-island' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant' },
];

const contactFaqs = [
  {
    q: 'How fast will you respond?',
    a: 'We typically respond within 1 business day. For the fastest reply, call or text us directly at (843) 297-9935 during business hours.',
  },
  {
    q: 'Is getting a quote free?',
    a: 'Yes. Every quote is free and comes with no obligation to book.',
  },
  {
    q: 'Is my information kept private?',
    a: "Absolutely. We never sell or share your information — it's only used to get back to you about your cleaning.",
  },
];

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow w-full pb-20 lg:pb-0">
        {/* Hero + Info + Form */}
        <section className="bg-white py-10 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Get In Touch</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-5">
                Let&apos;s Get Your Home on <span className="text-star-blue">the Schedule.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Call, text, or fill out the quick form below. Either way, you&apos;ll hear back from a real, background-checked local team &mdash; not a call center.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

              {/* Left: Contact Info */}
              <div className="lg:col-span-2 space-y-4">
                <a href="tel:+18432979935" className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-star-blue/30 hover:bg-blue-50/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-star-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold mb-0.5 uppercase tracking-wider">Call or Text Us</div>
                    <div className="text-lg font-bold text-slate-900">(843) 297-9935</div>
                  </div>
                </a>

                <a href="mailto:admin@starcleaningsc.com" className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-star-blue/30 hover:bg-blue-50/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-star-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold mb-0.5 uppercase tracking-wider">Email Us</div>
                    <div className="text-base font-bold text-slate-900 break-all">admin@starcleaningsc.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-star-blue">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold mb-0.5 uppercase tracking-wider">Business Hours</div>
                    <div className="text-sm font-semibold text-slate-700">Mon&ndash;Fri: 8:00 AM&ndash;5:00 PM<br />Sat &amp; Sun: Closed</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-star-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">Service Areas</div>
                    <div className="text-sm text-slate-700 leading-relaxed">
                      {serviceAreaLinks.map((city, i) => (
                        <span key={city.href}>
                          <Link href={city.href} className="font-semibold text-star-blue hover:underline">
                            {city.name}
                          </Link>
                          {i < serviceAreaLinks.length - 1 ? ', ' : ', and Goose Creek, SC'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Image src="/images/veteran-owned-badge.png" alt="Veteran Owned" width={40} height={20} className="object-contain" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Veteran Owned &amp; Operated</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wide">
                      <BadgeCheck className="w-4 h-4 text-star-blue shrink-0" /> Licensed &amp; Insured
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-star-blue shrink-0" /> Background-Checked
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wide">
                      <Award className="w-4 h-4 text-star-blue shrink-0" /> 100% Guaranteed
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Booking Form */}
              <div className="lg:col-span-3">
                <BookingForm showPricing={false} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  Before You Reach Out
                </span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-slate-900 mt-4 mb-4 tracking-tight leading-[1.15]">Quick <span className="text-star-blue">Answers.</span></h2>
            </div>

            <div className="space-y-6">
              {contactFaqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-500 text-sm mt-8">
              Have a different question? Check our full <Link href="/#faq" className="text-star-blue font-semibold hover:underline">FAQ page</Link>.
            </p>
          </div>
        </section>

        {/* Service Areas Map */}
        <ServiceAreas />

        {/* Explore More / Internal Links */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-4">Our Services</h3>
                <ul className="space-y-2.5 text-slate-600 text-sm">
                  <li><Link href="/services/residential-cleaning" className="hover:text-star-blue transition-colors">Residential Cleaning</Link></li>
                  <li><Link href="/services/deep-cleaning" className="hover:text-star-blue transition-colors">Deep Cleaning</Link></li>
                  <li><Link href="/services/move-in-move-out-cleaning" className="hover:text-star-blue transition-colors">Move-In/Move-Out Cleaning</Link></li>
                  <li><Link href="/services/vacation-rental-airbnb-cleaning" className="hover:text-star-blue transition-colors">Vacation Rental &amp; Airbnb Cleaning</Link></li>
                  <li><Link href="/services/commercial-office-cleaning" className="hover:text-star-blue transition-colors">Commercial &amp; Office Cleaning</Link></li>
                  <li><Link href="/services/post-construction-cleaning" className="hover:text-star-blue transition-colors">Post-Construction Cleaning</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-4">Service Areas</h3>
                <ul className="space-y-2.5 text-slate-600 text-sm">
                  {serviceAreaLinks.slice(0, 4).map((city) => (
                    <li key={city.href}><Link href={city.href} className="hover:text-star-blue transition-colors">{city.name}, SC</Link></li>
                  ))}
                  <li><Link href="/locations" className="text-star-blue font-semibold hover:underline">View All Service Areas &rarr;</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-4">Company</h3>
                <ul className="space-y-2.5 text-slate-600 text-sm">
                  <li><Link href="/about-us" className="hover:text-star-blue transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-star-blue transition-colors">Careers &mdash; Join Our Team</Link></li>
                  <li><Link href="/blog" className="hover:text-star-blue transition-colors">Cleaning Tips &amp; Local Guides</Link></li>
                  <li><Link href="/quote" className="hover:text-star-blue transition-colors">Get a Free Quote</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
