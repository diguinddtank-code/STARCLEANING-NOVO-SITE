"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ReviewCard from '@/components/ReviewCard';
import ServiceAreas from '@/components/ServiceAreas';
import BookingForm from '@/components/BookingForm';
import {
  Star,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

export interface ChecklistColumn {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ReviewItem {
  text: string;
  author: string;
  location: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface RegionalDeepCleanPageProps {
  citySlug: string;
  cityName: string;
  badgeIcon: LucideIcon;
  badgeText: string;
  headlineLead: string;
  headlineAccent: string;
  headlineTail: string;
  subheadline: string;
  heroPrimaryCta: string;
  heroImage: { src: string; alt: string };
  heroCardBadge: string;
  heroCardQuote: string;
  heroCardAuthor: string;
  trustLine: string;
  seoEyebrow: string;
  seoHeadline: string;
  seoParagraphs: string[];
  seoImage: { src: string; alt: string };
  deepChecklistColumns: [ChecklistColumn, ChecklistColumn];
  reviews: [ReviewItem, ReviewItem, ReviewItem];
  faqEyebrow: string;
  faqs: FaqItem[];
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonText: string;
  internalLinks: {
    hubs: LinkItem[];
    more: LinkItem[];
    other: LinkItem[];
  };
}

const standardChecklistColumns: [ChecklistColumn, ChecklistColumn] = [
  {
    title: 'Standard Clean',
    icon: CheckCircle2,
    items: [
      'Dust all accessible surfaces',
      'Wipe down exterior of appliances',
      'Clean and sanitize countertops',
      'Scrub and sanitize toilets, sinks, and showers',
      'Vacuum all carpets and rugs',
      'Sweep and mop all hard floors',
    ],
  },
  {
    title: 'Easy Maintenance',
    icon: CheckCircle2,
    items: [
      'Basic bed-making on primary suites',
      'Quick polishing of living area mirrors',
      'Duster wipe of easy-reach light switches',
      'Exterior-only wipe of cabinet doors',
      'Toilets scrubbed internally',
      'Wipe off dining table spills and grime',
    ],
  },
];

function renderWithBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-gray-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function RegionalDeepCleanPage({
  citySlug,
  cityName,
  badgeIcon: BadgeIcon,
  badgeText,
  headlineLead,
  headlineAccent,
  headlineTail,
  subheadline,
  heroPrimaryCta,
  heroImage,
  heroCardBadge,
  heroCardQuote,
  heroCardAuthor,
  trustLine,
  seoEyebrow,
  seoHeadline,
  seoParagraphs,
  seoImage,
  deepChecklistColumns,
  reviews,
  faqEyebrow,
  faqs,
  ctaHeadline,
  ctaSubtext,
  ctaButtonText,
  internalLinks,
}: RegionalDeepCleanPageProps) {
  const [activeTab, setActiveTab] = useState<'deep' | 'standard'>('deep');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeColumns = activeTab === 'deep' ? deepChecklistColumns : standardChecklistColumns;

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-yellow-200 selection:text-star-blue">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none hidden lg:block">
          <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-blue-50 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute bottom-10 left-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200/70 px-4 py-2 rounded-full shadow-sm mb-6">
                <BadgeIcon className="w-4 h-4 text-star-blue" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{badgeText}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 font-heading">
                {headlineLead} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-star-blue">
                  {headlineAccent}
                </span>
                {headlineTail ? <> {headlineTail}</> : null}
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-star-blue hover:bg-star-dark text-white rounded-full font-extrabold shadow-lg shadow-blue-200/60 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 border-b-4 border-blue-900 active:border-b-0 active:translate-y-1"
                >
                  {heroPrimaryCta} <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18432979935"
                  className="px-8 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5 text-star-blue" /> (843) 297-9935
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-600">{trustLine}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Veteran-Owned Discipline
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-lg">
                  <p className="text-star-blue font-black text-xs uppercase tracking-wider mb-1">{heroCardBadge}</p>
                  <p className="text-gray-600 text-xs leading-relaxed italic">"{heroCardQuote}"</p>
                  <p className="text-gray-900 text-xs font-bold mt-2">— {heroCardAuthor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image src={seoImage.src} alt={seoImage.alt} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-star-blue font-bold uppercase tracking-widest text-xs">{seoEyebrow}</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6 font-heading leading-tight">
                  {seoHeadline}
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  {seoParagraphs.map((p, i) => (
                    <p key={i}>{renderWithBold(p)}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Checklist tabs */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-star-blue font-bold uppercase tracking-widest text-xs bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Full Transparency Checklist
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-4 font-heading">
                Deep Clean vs. Standard Clean
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                See exactly what separates our deep clean from a routine maintenance visit in {cityName}.
              </p>

              <div className="flex justify-center mt-8">
                <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex gap-2">
                  <button
                    onClick={() => setActiveTab('deep')}
                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'deep' ? 'bg-star-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    Deep Clean
                  </button>
                  <button
                    onClick={() => setActiveTab('standard')}
                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'standard' ? 'bg-star-blue text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    Standard Maintenance
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {activeColumns.map((col, idx) => {
                const ColIcon = col.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <ColIcon className="w-6 h-6 text-star-blue" /> {col.title}
                    </h3>
                    <ul className="space-y-4">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/quote"
                className="px-6 py-3 bg-gray-50 hover:bg-gray-100 text-star-blue font-bold rounded-xl border border-gray-200 inline-flex items-center gap-2 text-sm transition-all"
              >
                Get Pricing on the Quote Builder <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-gradient-to-b from-white to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center gap-2 bg-white border border-yellow-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
                <i className="fas fa-heart text-red-500"></i>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Real {cityName} Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-heading">
                Why {cityName} Trusts Star Cleaning SC
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <ReviewCard key={i} theme="light" variant="grid" text={review.text} author={review.author} location={review.location} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-star-blue font-bold uppercase tracking-widest text-xs bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm">
                {faqEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-black mt-4 mb-4 text-gray-900 font-heading">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 text-base pr-8">{faq.q}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-star-blue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2 text-sm">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Service Area Map */}
      <ScrollReveal direction="up">
        <ServiceAreas />
      </ScrollReveal>

      {/* Quote Form */}
      <ScrollReveal direction="up" id="quote">
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-star-blue font-bold uppercase tracking-widest text-xs bg-white border border-blue-100 px-3 py-1 rounded-full shadow-sm">
                Free Instant Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-4 font-heading">
                Book Your {cityName} Cleaning
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Get a free, instant quote and schedule your cleaning online in under 60 seconds.
              </p>
            </div>
            <BookingForm showPricing={false} />
          </div>
        </section>
      </ScrollReveal>

      {/* Closing CTA */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-star-dark text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-heading leading-tight">{ctaHeadline}</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">{ctaSubtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/quote"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-black rounded-full shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {ctaButtonText} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18432979935"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-full transition-all w-full sm:w-auto"
              >
                Call or Text (843) 297-9935
              </a>
            </div>
            <p className="text-blue-200 text-xs mt-6">★ 100% Satisfaction Checked • 18 Years Lowcountry Experience ★</p>
          </div>
        </section>
      </ScrollReveal>

      {/* Internal linking */}
      <section className="py-14 bg-star-dark border-t border-white/10 text-blue-100 text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-white font-extrabold text-base mb-6 font-heading">Localized Deep-Cleaning Services in South Carolina</h3>
          <p className="mb-8">
            Looking for our full range of services in {cityName}? Visit the{' '}
            <Link href={`/locations/${citySlug}`} className="text-yellow-300 font-semibold hover:text-white transition-colors">
              {cityName} service area page
            </Link>.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-yellow-300 font-bold mb-3 uppercase tracking-wider text-xs">Lowcountry Hubs</p>
              <ul className="space-y-2">
                {internalLinks.hubs.map((l, i) => (
                  <li key={i}><Link href={l.href} className="hover:text-white transition-colors">✦ {l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-yellow-300 font-bold mb-3 uppercase tracking-wider text-xs">More Service Areas</p>
              <ul className="space-y-2">
                {internalLinks.more.map((l, i) => (
                  <li key={i}><Link href={l.href} className="hover:text-white transition-colors">✦ {l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-yellow-300 font-bold mb-3 uppercase tracking-wider text-xs">Other Local Services</p>
              <ul className="space-y-2">
                {internalLinks.other.map((l, i) => (
                  <li key={i}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-blue-200/70">
            All rights reserved • Star Cleaning SC • Veteran Vetted Precision Since 2008.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
