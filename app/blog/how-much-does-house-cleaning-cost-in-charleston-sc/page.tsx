import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  Star, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  AlertTriangle, 
  ListChecks, 
  Check, 
  ShieldCheck,
  DollarSign,
  HelpCircle,
  Calculator,
  Home,
  Scale,
  TrendingDown,
  FileCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "How Much Does House Cleaning Cost in Charleston, SC? 2026 Pricing Guide",
  description: "Complete 2026 pricing guide for house cleaning in Charleston, SC. Compare average rates by square footage, flat-rate vs hourly costs, recurring discounts, and hidden fees to avoid.",
  alternates: {
    canonical: "https://www.starcleaningsc.com/blog/how-much-does-house-cleaning-cost-in-charleston-sc/",
  },
  openGraph: {
    title: "How Much Does House Cleaning Cost in Charleston, SC? 2026 Guide | Star Cleaning SC",
    description: "Honest, transparent pricing breakdown for Charleston, Mount Pleasant, and Summerville homeowners. Compare square footage rates, recurring discounts, and flat-rate vs. hourly billing.",
    url: "https://www.starcleaningsc.com/blog/how-much-does-house-cleaning-cost-in-charleston-sc/",
    siteName: "Star Cleaning SC",
    images: [
      {
        url: "https://www.starcleaningsc.com/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg",
        width: 1200,
        height: 675,
        alt: "A Charleston homeowner calculating transparent house cleaning rates on a laptop in a sunlit kitchen",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does House Cleaning Cost in Charleston, SC? 2026 Guide",
    description: "Get the exact 2026 rates for standard, deep, and move-out cleaning across Charleston, Summerville, and Mount Pleasant.",
    images: ["https://www.starcleaningsc.com/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg"],
  }
};

const BlogPostHouseCleaningCost = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Much Does House Cleaning Cost in Charleston, SC? 2026 Homeowner Pricing Guide",
    "image": "https://www.starcleaningsc.com/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg",
    "author": {
      "@type": "Organization",
      "name": "Star Cleaning SC",
      "url": "https://www.starcleaningsc.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Star Cleaning SC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.starcleaningsc.com/images/logo-mark.png"
      }
    },
    "datePublished": "2026-10-07",
    "dateModified": "2026-10-07",
    "description": "Comprehensive 2026 cost guide for house cleaning in Charleston, Summerville, and Mount Pleasant, SC. Learn average costs by square foot, flat-rate vs. hourly billing, add-on pricing, and recurring discounts.",
    "url": "https://www.starcleaningsc.com/blog/how-much-does-house-cleaning-cost-in-charleston-sc/",
    "mainEntityOfPage": "https://www.starcleaningsc.com/blog/how-much-does-house-cleaning-cost-in-charleston-sc/",
    "keywords": "how much does house cleaning cost charleston sc, house cleaning prices charleston, maid service cost mount pleasant, deep cleaning cost summerville sc, flat rate house cleaning charleston, biweekly cleaning cost",
    "articleSection": "Home Cleaning Pricing & Cost Guides"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.starcleaningsc.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "House Cleaning Cost Charleston SC", "item": "https://www.starcleaningsc.com/blog/how-much-does-house-cleaning-cost-in-charleston-sc/" }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Accurately Estimate Your House Cleaning Cost in Charleston, SC",
    "description": "A 5-step homeowner framework to calculate your house cleaning budget, evaluate quotes, and choose between flat-rate and hourly billing.",
    "image": "https://www.starcleaningsc.com/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg",
    "totalTime": "PT5M",
    "supply": [
      { "@type": "HowToSupply", "name": "Home square footage measurement" },
      { "@type": "HowToSupply", "name": "Bathroom and bedroom count" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Star Cleaning SC Online Instant Quote Tool" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Step 1: Determine Your Finished Square Footage and Bathroom Count",
        "text": "Identify your total heated living area and number of full/half bathrooms, as bathrooms require the highest labor time per square foot.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Step 2: Choose Between Initial Deep Clean vs. Standard Maintenance",
        "text": "If your home hasn't been professionally scrubbed in the past 60 days, plan for an initial deep clean to eliminate backlog grime before recurring maintenance.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Step 3: Select Your Service Frequency to Unlock Recurring Discounts",
        "text": "Choose weekly (20% off), bi-weekly (15% off), or monthly (10% off) to lower your ongoing cost per clean.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Step 4: Check for Specialty Appliance or Interior Add-Ons",
        "text": "Factor in interior oven detailing, refrigerator interior cleaning, or inside kitchen cabinets if moving or doing a spring refresh.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Step 5: Verify Licensing, Insurance & Flat-Rate Pricing Guarantees",
        "text": "Insist on transparent flat-rate pricing to prevent unexpected hourly bill creep, and verify general liability and worker's comp insurance.",
        "position": 5
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does house cleaning typically cost in Charleston, SC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026, standard recurring house cleaning in the Charleston metro area typically ranges from $140 to $260 per visit for homes between 1,500 and 3,000 square feet. A one-time initial deep clean generally costs between $280 and $490 depending on square footage, bathroom count, and home condition."
        }
      },
      {
        "@type": "Question",
        "name": "Why is flat-rate pricing better than hourly pricing for house cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With hourly rates ($35–$55/hr per cleaner), you bear all the financial risk if cleaners work slowly, take breaks, or encounter stubborn grime. You might be quoted 3 hours but receive a surprise bill for 5 hours. With flat-rate pricing (like Star Cleaning SC provides), you pay an exact, transparent price based on your home size, and our team stays until the entire standardized checklist is 100% complete."
        }
      },
      {
        "@type": "Question",
        "name": "Why do bathrooms have the biggest impact on house cleaning costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bathrooms require approximately 40% to 50% of the physical labor during a clean. Technicians must hand-scrub shower glass, dissolve hard water mineral scale from tiles, sanitize toilet bowls, detail faucet fixtures, and mop tile floors. A home with 4 bathrooms requires significantly more labor and specialized chemicals than a home with 2 bathrooms."
        }
      },
      {
        "@type": "Question",
        "name": "Should you tip house cleaners in South Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tipping is never required, but it is a customary gesture of appreciation for outstanding work. For one-time deep cleaning or move-out cleaning, a 15% to 20% tip (or $20–$40 per cleaner) is standard. For recurring bi-weekly or weekly cleaning, many Charleston homeowners give a $10–$20 tip per visit or provide a generous holiday bonus equivalent to one clean."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between an independent cleaner and a professional company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An independent cleaner found on Facebook or Nextdoor may charge slightly lower hourly rates ($25–$35/hr), but they typically lack general liability insurance and South Carolina workers' compensation. If they slip on a wet tile floor in your home or scratch a $10,000 quartz countertop, you may be held legally liable through your homeowner insurance. A professional company like Star Cleaning SC provides background-checked staff, full insurance, commercial equipment, and backup teams if someone is sick."
        }
      },
      {
        "@type": "Question",
        "name": "How much do add-on services like oven or fridge cleaning cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the Lowcountry market, detailing the interior of an oven usually costs $35 to $50, interior refrigerator detailing costs $35 to $50, and interior kitchen cabinets range from $40 to $70. These can be selected during booking or added to your custom quote."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-star-blue selection:text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      <main className="pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <li>
              <Link href="/" className="hover:text-star-blue transition-colors">Home</Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/blog" className="hover:text-star-blue transition-colors">Blog</Link>
            </li>
            <li>&gt;</li>
            <li className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-none">
              House Cleaning Cost Charleston SC
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>wikiHow &amp; 2026 Pricing Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 font-heading">
              How Much Does House Cleaning Cost in Charleston, SC? (2026 Pricing Breakdown)
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Tired of vague quotes, secret hourly minimums, and unexpected bills? Here is the exact, honest cost breakdown for house cleaning in Charleston, Mount Pleasant, and Summerville—including rates by square foot, flat-rate vs. hourly pitfalls, and how to get maximum value.
            </p>

            {/* Author / Date / Reading Time Bar */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 py-3 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-star-blue text-white flex items-center justify-center font-bold text-xs">
                  SC
                </div>
                <span>By <strong>Star Cleaning SC Field Team</strong></span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>October 7, 2026</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>Verified 2026 Market Rates</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>Lowcountry Standard</span>
              </div>
            </div>
          </header>

          {/* Featured Cover Illustration (wikiHow Style) */}
          <figure className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">
            <Image
              src="/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg"
              alt="wikiHow style editorial illustration of a Charleston homeowner reviewing transparent house cleaning pricing and square footage calculations on a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </figure>

          {/* Table of Contents Box */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2.5">
              <ListChecks className="w-5 h-5 text-star-blue" />
              <span>Table of Contents &amp; Quick Guide</span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm font-semibold text-slate-700">
              <li>
                <a href="#average-rates" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>2026 Average House Cleaning Rates in Charleston</span>
                </a>
              </li>
              <li>
                <a href="#square-foot-pricing" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Pricing Table: Rates by Square Footage &amp; Service</span>
                </a>
              </li>
              <li>
                <a href="#flat-rate-vs-hourly" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Flat-Rate vs. Hourly Billing: The Hidden Cost Trap</span>
                </a>
              </li>
              <li>
                <a href="#pricing-factors" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>The 5 Key Factors That Dictate Your Quote</span>
                </a>
              </li>
              <li>
                <a href="#recurring-savings" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>How Recurring Discounts Save Up to 20%</span>
                </a>
              </li>
              <li>
                <a href="#maid-vs-company" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Licensed Company vs. Independent Cleaner Liability</span>
                </a>
              </li>
              <li>
                <a href="#tipping-guide" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Tipping Etiquette in South Carolina</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Frequently Asked Questions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Overview WikiHow Summary Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-950 mb-2 font-heading">
                  Quick Benchmark: What to Expect in 2026
                </h3>
                <p className="text-emerald-900/90 text-sm sm:text-base leading-relaxed mb-4">
                  For a typical 3-bedroom, 2.5-bathroom home (~2,200 sq ft) in Charleston or Summerville:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-extrabold text-emerald-900 block mb-1">Standard Recurring</span>
                    <span className="text-emerald-700 font-extrabold text-base block">$155 – $195</span>
                    <p className="text-slate-600 mt-1">Per clean on a bi-weekly schedule with recurring discounts applied.</p>
                  </div>
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-extrabold text-emerald-900 block mb-1">Initial Deep Clean</span>
                    <span className="text-emerald-700 font-extrabold text-base block">$320 – $410</span>
                    <p className="text-slate-600 mt-1">One-time reset tackling baseboards, doors, vents, and heavy soap scum.</p>
                  </div>
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-extrabold text-emerald-900 block mb-1">Move-In / Move-Out</span>
                    <span className="text-emerald-700 font-extrabold text-base block">$360 – $470</span>
                    <p className="text-slate-600 mt-1">Includes interior empty cabinets, drawers, baseboards, and appliances.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: 2026 Average Rates */}
          <section id="average-rates" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">1</span>
              <span>2026 Average House Cleaning Rates in the Charleston Metro</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              When searching for house cleaning in <Link href="/deep-cleaning-charleston-sc" className="text-star-blue font-semibold hover:underline">Charleston</Link>, <Link href="/deep-cleaning-mount-pleasant-sc" className="text-star-blue font-semibold hover:underline">Mount Pleasant</Link>, or <Link href="/deep-cleaning-summerville-sc" className="text-star-blue font-semibold hover:underline">Summerville</Link>, quotes can seem all over the place. Some solo cleaners charge $30 an hour, while national franchise services quote $600 for a single visit.
            </p>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Why the wild difference? Because <strong>house cleaning is not an hourly commodity</strong>. The cost reflects labor intensity, commercial-grade equipment, insurance protections, and the level of detailing provided.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Standard Recurring</span>
                <div className="text-2xl font-black text-slate-950 mb-2">$130 – $260</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Regular maintenance cleaning performed weekly or bi-weekly. Dusting, sanitizing counters, kitchen exteriors, shower detailing, vacuuming, and mopping.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">One-Time Deep Clean</span>
                <div className="text-2xl font-black text-slate-950 mb-2">$280 – $520</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Intensive reset clean. Hand-wiping baseboards, door moldings, air vents, heavy shower descaling, window sills, and degreasing stove backsplashes.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Move-In / Move-Out</span>
                <div className="text-2xl font-black text-slate-950 mb-2">$340 – $590</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Empty home top-to-bottom scrub. Includes inside all empty cabinets, pantry shelves, interior oven, interior refrigerator, and closet shelving.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Square Footage Table */}
          <section id="square-foot-pricing" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">2</span>
              <span>Pricing Table: Average Cost by Square Footage &amp; Service Type</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Square footage and bathroom count are the two primary drivers of cleaning cost. Below is a comprehensive benchmark based on average 2026 pricing across the Lowcountry:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-heading">
                    <th className="p-3.5 sm:p-4">Home Size &amp; Layout</th>
                    <th className="p-3.5 sm:p-4 text-emerald-300">Bi-Weekly Maintenance</th>
                    <th className="p-3.5 sm:p-4 text-amber-300">Deep Clean Reset</th>
                    <th className="p-3.5 sm:p-4 text-blue-300">Move-In / Move-Out</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      1,000 – 1,500 sq ft <span className="block text-xs font-normal text-slate-500">2 Bed / 1.5–2 Bath (Condo / Townhome)</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">$125 – $155</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$260 – $320</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$310 – $370</td>
                  </tr>
                  <tr className="bg-blue-50/20">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      1,501 – 2,200 sq ft <span className="block text-xs font-normal text-slate-500">3 Bed / 2–2.5 Bath (Standard Family Home)</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">$155 – $195</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$320 – $410</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$380 – $460</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      2,201 – 3,000 sq ft <span className="block text-xs font-normal text-slate-500">4 Bed / 3 Bath (Spacious Suburban Home)</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">$195 – $245</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$410 – $510</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$470 – $560</td>
                  </tr>
                  <tr className="bg-blue-50/20">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      3,001 – 4,000 sq ft <span className="block text-xs font-normal text-slate-500">4–5 Bed / 3.5–4 Bath (Large Home / Daniel Island)</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">$245 – $295</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$510 – $640</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$570 – $690</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                      4,000+ sq ft <span className="block text-xs font-normal text-slate-500">5+ Bed / 4.5+ Bath (Historic Downtown / Estate)</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">$310+</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$650+</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-bold">$720+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-100/90 border-l-4 border-star-blue p-5 rounded-r-2xl mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-star-blue shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700 leading-relaxed">
                  <strong>Pro Tip:</strong> Rates above include all standard recurring discounts (15% off bi-weekly). At Star Cleaning SC, you get an exact binding dollar quote online with zero guesswork. Check your exact home pricing instantly in our <Link href="/quote" className="text-star-blue font-bold hover:underline">Instant Booking Calculator</Link>.
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Flat-Rate vs Hourly */}
          <section id="flat-rate-vs-hourly" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">3</span>
              <span>Flat-Rate vs. Hourly Billing: Avoid the Hidden Cost Trap</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              One of the biggest choices homeowners face is between an <strong>hourly rate</strong> (e.g. &ldquo;$40 per hour&rdquo;) and a <strong>guaranteed flat rate</strong> (e.g. &ldquo;$175 per clean&rdquo;). While hourly sounds cheap on the phone, it is often a trap.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-rose-600 font-bold">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-slate-900">The Problem with Hourly Billing</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>You bear 100% of the risk:</strong> If the cleaner moves slowly, answers phone calls, or takes smoke breaks, your bill increases.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Unfinished work:</strong> If you set a 3-hour budget cap, cleaners stop mid-job when the timer rings, leaving floors unmopped or showers half-scrubbed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span><strong>Surprise invoices:</strong> An estimate of &ldquo;3 to 4 hours&rdquo; easily turns into 6 hours on the day of service, turning a $150 expectation into a $300 charge.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-br from-white to-emerald-50/50 border border-emerald-200 rounded-3xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-slate-900">The Star Cleaning SC Flat-Rate Standard</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>100% predictable budgeting:</strong> You know the exact total down to the cent before our team even steps foot in your door.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Guaranteed scope of work:</strong> Our team stays until every item on our 50-point checklist is completed to perfection, regardless of how long it takes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>No clock-watching:</strong> Cleaners are incentivized by quality, thoroughness, and customer satisfaction—not stretching out the clock.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: 5 Pricing Factors */}
          <section id="pricing-factors" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">4</span>
              <span>The 5 Key Factors That Dictate Your Quote</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              When a cleaning company generates a fair, accurate quote, they factor in these five distinct variables:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-star-blue flex items-center justify-center font-bold text-xs">1</span>
                  <h3 className="font-bold text-slate-900 text-base">Number of Bathrooms (The #1 Labor Factor)</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A bedroom takes 10 to 15 minutes to dust and vacuum. A full bathroom takes 30 to 45 minutes to hand-scrub hard water minerals from glass, sanitize toilets, disinfect sinks, and detail grout lines. The more bathrooms in your home, the higher the labor requirement.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-star-blue flex items-center justify-center font-bold text-xs">2</span>
                  <h3 className="font-bold text-slate-900 text-base">Time Elapsed Since Last Professional Clean</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If your home was cleaned professionally two weeks ago, dust is loose and surfaces wipe down in seconds. If it hasn&rsquo;t been deep-scrubbed in 6 months, soap scum has calcified into hard scale and stove grease has bonded with airborne dust, requiring 2x the chemical dwell time and scrubbing.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-star-blue flex items-center justify-center font-bold text-xs">3</span>
                  <h3 className="font-bold text-slate-900 text-base">Shedding Pets (Hair &amp; Dander Load)</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Homes with shedding Golden Retrievers, German Shepherds, or long-haired cats require multiple HEPA vacuum passes, rubber pet hair squeegees on upholstered furniture, and detailed baseboard wiping where dander wraps around base trim.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-star-blue flex items-center justify-center font-bold text-xs">4</span>
                  <h3 className="font-bold text-slate-900 text-base">Flooring Types (Wood &amp; Tile vs. Carpet)</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Coastal homes with extensive historic heart pine or luxury vinyl plank (LVP) require careful two-bucket microfiber damp mopping with pH-neutral solutions to remove fine beach sand without scratching or leaving hazy streaks.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-star-blue flex items-center justify-center font-bold text-xs">5</span>
                  <h3 className="font-bold text-slate-900 text-base">Specialty Add-On Services</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Heavy appliance detailing—such as stripping baked-on grease from inside the oven, detailing refrigerator door seals and vegetable bins, or wiping inside kitchen cabinets—requires separate labor and specialized food-safe cleaners.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Recurring Savings */}
          <section id="recurring-savings" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">5</span>
              <span>How Recurring Schedules Save You Up to 20%</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Booking cleanings as irregular &ldquo;one-offs&rdquo; is the most expensive way to hire cleaners because the team must perform a heavy reset every time. Committing to a recurring maintenance cadence unlocks significant volume discounts:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-white border border-blue-200 rounded-3xl p-6 text-center shadow-xs">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-star-blue text-xs font-bold mb-3">
                  Maximum Discount
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Weekly Cleaning</h3>
                <div className="text-3xl font-black text-star-blue mb-2">20% OFF</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lowest rate per clean. Perfect for large families and busy professionals who want 100% chore-free weekends.
                </p>
              </div>

              <div className="bg-linear-to-b from-emerald-50 to-white border-2 border-emerald-400 rounded-3xl p-6 text-center shadow-md relative">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold mb-3">
                  #1 Best Value (78% of Clients)
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Bi-Weekly Cleaning</h3>
                <div className="text-3xl font-black text-emerald-700 mb-2">15% OFF</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Lowcountry gold standard. Keeps bathrooms, kitchens, and floors pristine before soap scum or grease hardens.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-xs">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-3">
                  Monthly Reset
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Monthly Cleaning</h3>
                <div className="text-3xl font-black text-slate-800 mb-2">10% OFF</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal for single occupants, frequent travelers, or low-traffic secondary vacation homes.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 font-heading">
                  Get Your Transparent Flat-Rate Quote
                </h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Select your home size and instantly see your weekly, bi-weekly, or monthly price. No waiting, no phone calls, and no high-pressure sales reps.
                </p>
              </div>
              <Link
                href="/quote"
                className="shrink-0 inline-flex items-center gap-2 bg-star-gold hover:bg-yellow-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-transform active:scale-95"
              >
                <span>Calculate Your Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Section 6: Maid vs Company Liability */}
          <section id="maid-vs-company" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">6</span>
              <span>Company vs. Independent Cleaner: The Hidden Legal &amp; Financial Risks</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              When comparing prices, it is tempting to hire an independent cleaner advertising for $25/hour on Nextdoor or Facebook. But it is essential to understand what is missing from that price tag:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>South Carolina Workers&rsquo; Compensation Liability</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cleaning involves wet tile floors, carrying heavy buckets, and climbing step ladders. If an uninsured independent cleaner slips and fractures an ankle in your bathroom, your homeowner&rsquo;s insurance policy can be sued for medical bills and lost wages. Star Cleaning SC carries full statutory workers&rsquo; compensation, fully shielding you from legal exposure.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>General Liability &amp; Property Damage Bonding</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Accidents happen. What if a cleaner drops a vacuum onto a custom heart-pine floorboard, or etches a $5,000 unsealed Carrara marble vanity with the wrong acidic spray? Independent cleaners rarely have $1,000,000+ commercial liability insurance to cover repairs. Star Cleaning SC is fully bonded and insured.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Background Checks &amp; Reliable Backup Coverage</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every Star Cleaning SC technician undergoes thorough background checks. Furthermore, if your assigned technician falls ill, our team provides seamless backup coverage so your house is never left uncleaned before weekend guests arrive.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Tipping Guide */}
          <section id="tipping-guide" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">7</span>
              <span>Tipping Etiquette: Do You Tip House Cleaners in South Carolina?</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Tipping is never mandatory, but many clients ask what is customary in the Charleston area. Here is standard practice:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-star-blue" />
                  <span>One-Time Deep &amp; Move-Out Cleans</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Because these cleans require intense physical labor (often 4 to 8 total person-hours scrubbing ovens, tile scale, and baseboards), a <strong>15% to 20% tip</strong> (or $20 to $40 per technician) is common if you are thrilled with the transformation.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Recurring Weekly &amp; Bi-Weekly Cleans</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  For regular visits, many clients leave a small tip ($10 to $20 per visit on the kitchen island), while others choose to give a generous <strong>holiday bonus</strong> equivalent to the cost of one clean in December. Either approach is warmly appreciated.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: FAQ Accordions */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-star-blue" />
              <span>Frequently Asked Questions About House Cleaning Costs</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  How much does house cleaning typically cost in Charleston, SC?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  In 2026, standard recurring cleaning for a 2,000 sq ft home ranges from $155 to $195 per visit on a bi-weekly cadence. One-time deep cleanings range from $320 to $410, and move-out cleanings range from $380 to $460.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Why is flat-rate pricing safer than an hourly quote?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Hourly rates shift all the financial risk onto you. If a cleaner encounters stubborn tile grime or works slowly, you receive a surprise bill. With Star Cleaning SC&rsquo;s flat-rate pricing, you pay an agreed total and our team stays until every item on the standardized checklist is 100% complete.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Do I have to sign a long-term contract to get recurring discounts?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No! Star Cleaning SC does not believe in locking clients into rigid contracts. You receive full recurring discounts (up to 20% off) with zero commitments. You can pause, reschedule, or cancel anytime with simple 48 hours notice.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Do I need to supply cleaning products or vacuums?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Never! Our teams arrive fully equipped with professional commercial HEPA vacuums, microfiber mop systems, extension poles, and pet-safe, hospital-grade cleaning supplies. You don&rsquo;t have to supply a single sponge.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  What if I am unhappy with how an area was cleaned?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We back every single clean with our <strong>100% Satisfaction Guarantee</strong>. If any area does not meet your expectations, notify us within 24 hours and our team will return promptly to re-clean the area at zero charge to you.
                </p>
              </div>
            </div>
          </section>

          {/* Related Guides / Internal Links */}
          <div className="border-t border-slate-200 pt-10 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading">
              Related Lowcountry Cleaning Guides &amp; Checklists
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blog/how-often-should-you-have-your-house-cleaned-charleston-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Frequency &amp; Schedule</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  How Often Should You Have Your House Cleaned?
                </h4>
                <p className="text-xs text-slate-500">
                  Weekly vs. bi-weekly vs. monthly comparison and 60-second schedule quiz.
                </p>
              </Link>

              <Link
                href="/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Pre-Clean Etiquette</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  How to Prepare Your House for Cleaners (15-Min Checklist)
                </h4>
                <p className="text-xs text-slate-500">
                  What to tidy, pet safety tips, linen etiquette, and tipping rules in Charleston.
                </p>
              </Link>

              <Link
                href="/blog/how-to-deep-clean-house-step-by-step-charleston-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Comprehensive Checklist</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  How to Deep Clean Your House Step-by-Step
                </h4>
                <p className="text-xs text-slate-500">
                  The room-by-room top-to-bottom system professional cleaners use.
                </p>
              </Link>

              <Link
                href="/blog/move-out-cleaning-cost-summerville-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Move-Out Specifics</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  How Much Does Move-Out Cleaning Cost in Summerville, SC?
                </h4>
                <p className="text-xs text-slate-500">
                  Specific breakdown of security deposit recovery and move-out pricing.
                </p>
              </Link>
            </div>
          </div>

          {/* Final Call to Action Card */}
          <div className="relative overflow-hidden bg-linear-to-br from-star-blue via-blue-700 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <Star className="w-3.5 h-3.5 fill-star-gold text-star-gold" />
                <span>Transparent Flat-Rate Guarantee</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 font-heading tracking-tight">
                Ready to Know Your Exact Home Cleaning Rate?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
                Join hundreds of satisfied homeowners across Charleston, Summerville, and Mount Pleasant. Get an instant, customized flat-rate estimate online in under 60 seconds with zero sales pressure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-star-gold hover:bg-yellow-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl transition-transform active:scale-95"
                >
                  <span>Calculate Your Instant Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8432979935"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base px-6 py-4 rounded-2xl backdrop-blur-xs transition-colors"
                >
                  <span>(843) 297-9935</span>
                </a>
              </div>
              <p className="text-xs text-blue-200/80 mt-6">
                100% Satisfaction Guaranteed • Background-Checked Staff • Fully Licensed &amp; Insured
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostHouseCleaningCost;
