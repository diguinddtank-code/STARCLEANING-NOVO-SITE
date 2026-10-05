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
  Lightbulb, 
  AlertTriangle, 
  ListChecks, 
  Check, 
  ShieldCheck,
  Dog,
  Key,
  Home,
  UtensilsCrossed,
  DollarSign,
  HelpCircle,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: "What to Do Before House Cleaners Arrive | Lowcountry Checklist",
  description: "Should you clean before the cleaners come? Step-by-step wikiHow-style guide on how to prepare your house, secure pets, and get 100% value from your Charleston maid service.",
  alternates: {
    canonical: "https://www.starcleaningsc.com/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc/",
  },
  openGraph: {
    title: "How to Prepare Your House for Cleaners: The Step-by-Step Lowcountry Checklist | Star Cleaning SC",
    description: "The definitive guide to preparing your home before the cleaning team arrives. Learn what to tidy, how to handle pets, linen etiquette, and tipping rules in Charleston & Summerville.",
    url: "https://www.starcleaningsc.com/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc/",
    siteName: "Star Cleaning SC",
    images: [
      {
        url: "https://www.starcleaningsc.com/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg",
        width: 1200,
        height: 675,
        alt: "A tidy, bright sunlit Charleston home ready for professional house cleaners",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Prepare Your House for Cleaners: Lowcountry Guide",
    description: "Should you clean before the cleaners arrive? Discover the 15-minute pre-clean routine that saves you money and gets maximum results.",
    images: ["https://www.starcleaningsc.com/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg"],
  }
};

const BlogPostPrepareForCleaners = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Prepare Your House for Cleaners: The Step-by-Step Lowcountry Checklist",
    "image": "https://www.starcleaningsc.com/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg",
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
    "datePublished": "2026-10-02",
    "dateModified": "2026-10-02",
    "description": "Learn the simple 15-minute preparation routine before your house cleaner arrives. Covers clutter vs cleaning, pet safety, entry access, linen etiquette, and tipping in Charleston & Summerville, SC.",
    "url": "https://www.starcleaningsc.com/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc/",
    "mainEntityOfPage": "https://www.starcleaningsc.com/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc/",
    "keywords": "how to prepare for house cleaners, do I clean before maid arrives, what to do before cleaning service, pet etiquette house cleaning charleston sc, house cleaning checklist, tipping house cleaners south carolina",
    "articleSection": "Home Cleaning Preparation & Etiquette"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.starcleaningsc.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Prepare for House Cleaners", "item": "https://www.starcleaningsc.com/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc/" }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Prepare Your House Before Cleaners Arrive",
    "description": "A quick 6-step checklist for homeowners to prepare their space, secure pets, and ensure cleaners focus on deep scrubbing rather than organizing personal clutter.",
    "image": "https://www.starcleaningsc.com/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg",
    "totalTime": "PT15M",
    "supply": [
      { "@type": "HowToSupply", "name": "Storage bin or laundry basket for quick floor toy/shoe collection" },
      { "@type": "HowToSupply", "name": "Fresh bed sheet sets placed on mattress tops (if bed making is requested)" },
      { "@type": "HowToSupply", "name": "Pet crate, gate, or safe designated room with water bowl" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Dishwasher (run or empty before arrival)" },
      { "@type": "HowToTool", "name": "Key lockbox or keypad code instructions" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Step 1: Pick Up Surface Clutter & Floor Obstacles (The 10-Minute Basket Method)",
        "text": "Clear personal paperwork, clothes, charging cables, and kids' toys off floors and countertops so cleaners have immediate access to scrub and vacuum.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Step 2: Clear the Kitchen Sink & Run the Dishwasher",
        "text": "Ensure breakfast dishes or soaking pans are loaded into the dishwasher so cleaners can thoroughly scrub and disinfect the sink basin without obstruction.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Step 3: Secure Pets in a Comfortable, Closed Area",
        "text": "Place dogs or cats in a designated crate, quiet bedroom, or gated laundry room with fresh water to prevent door escapes and reduce pet stress around vacuum noise.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Step 4: Put Away Confidential Documents & Valuables",
        "text": "Place passports, cash, sensitive tax records, and delicate jewelry in private drawers or safes to protect your privacy and give cleaning teams total peace of mind.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Step 5: Lay Out Fresh Linens and Towels",
        "text": "If bed linen changing is included in your booking, strip old sheets and leave clean fitted sheets and pillowcases on top of each bed.",
        "position": 5
      },
      {
        "@type": "HowToStep",
        "name": "Step 6: Provide Keypad or Gate Access & Set Special Priorities",
        "text": "Share garage keypad codes, gate entry passes (Daniel Island, Nexton, Mount Pleasant HOAs), and flag any special priorities or off-limits rooms in advance.",
        "position": 6
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need to clean before the house cleaners arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! You do not need to scrub, vacuum, dust, or mop before professional cleaners arrive. That is exactly what you are paying them for. However, you should 'tidy' (pick up clothes, shoes, toys, and surface clutter). When counters and floors are clear, your cleaners spend 100% of their time deep cleaning baseboards, grease, and tile grout rather than organizing personal items."
        }
      },
      {
        "@type": "Question",
        "name": "Should I leave the house or stay while cleaners are working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients in Charleston and Summerville are not home during cleanings! Approximately 80% of our recurring clients provide a garage keypad code, smart lock code, or lockbox key. You are welcome to stay if you work from home; our team simply cleans around you, starting in bedrooms and bathrooms before finishing in common living areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide cleaning supplies and equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Star Cleaning SC, we bring all professional supplies, commercial HEPA vacuums, microfiber mop systems, and pet-safe cleaning solutions. You do not need to provide anything. If you have specialty surfaces (such as raw unsealed limestone or custom heirloom wood) and prefer a specific manufacturer cleaner, simply leave it on the counter with instructions."
        }
      },
      {
        "@type": "Question",
        "name": "Should you tip house cleaners in South Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tipping is never mandatory, but it is always appreciated for hard work. In the Charleston and Lowcountry area, a tip of 15% to 20% of the total service cost or $20 to $40 per cleaner is customary for one-time deep cleans, move-out cleans, or holidays. For recurring weekly or bi-weekly service, many clients provide a small tip per visit or an annual holiday bonus equivalent to one clean."
        }
      },
      {
        "@type": "Question",
        "name": "Where should I put my dog or cat during the cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We love pets, but we strongly recommend securing dogs and cats in a comfortable, quiet room (like a laundry room, guest bath, or crate) with water. Cleaners frequently carry buckets, mop poles, and trash bags in and out of exterior doors, which poses an escape risk for curious pets. Vacuum noise can also cause anxiety in normally calm animals."
        }
      },
      {
        "@type": "Question",
        "name": "What items or areas are considered 'extra' and require advance notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard house cleaning covers all dusting, vacuuming, mopping, bathrooms, kitchen exteriors, and surface sanitation. Specialty items that require extra time and products include interior oven cleaning, interior refrigerator detailing, interior window glass, wall washing, and changing high-volume bed linens. These can easily be added to your booking when requesting your quote."
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
              How to Prepare for House Cleaners
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>wikiHow &amp; Pro Etiquette Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 font-heading">
              How to Prepare Your House for Cleaners: The Step-by-Step Lowcountry Checklist
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              The age-old question: <em>&ldquo;Do I need to clean before the cleaners arrive?&rdquo;</em> Here is the exact 15-minute routine professional maids wish every homeowner knew—saving you money, securing your pets, and maximizing your home&rsquo;s results.
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
                <span>October 2, 2026</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ListChecks className="w-4 h-4 text-emerald-600" />
                <span>15-Minute Prep Routine</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>Verified Lowcountry Standard</span>
              </div>
            </div>
          </header>

          {/* Featured Cover Illustration (wikiHow Style) */}
          <figure className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">
            <Image
              src="/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg"
              alt="wikiHow style editorial illustration of a homeowner preparing a bright Charleston living room for house cleaners"
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
                <a href="#cleaning-vs-tidying" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>The Golden Rule: Cleaning vs. Tidying</span>
                </a>
              </li>
              <li>
                <a href="#step-1-clutter" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Step 1: The 10-Minute Basket Clutter Method</span>
                </a>
              </li>
              <li>
                <a href="#step-2-kitchen-sink" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Step 2: Clear the Sink &amp; Run Dishwasher</span>
                </a>
              </li>
              <li>
                <a href="#step-3-pets" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Step 3: Secure Pets &amp; Manage Doors</span>
                </a>
              </li>
              <li>
                <a href="#step-4-valuables" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Step 4: Protect Sensitive Documents &amp; Cash</span>
                </a>
              </li>
              <li>
                <a href="#step-5-linens" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Step 5: Bedding &amp; Linen Etiquette</span>
                </a>
              </li>
              <li>
                <a href="#step-6-access" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Step 6: Gate Codes, Keys &amp; Being Home</span>
                </a>
              </li>
              <li>
                <a href="#tipping-and-guarantee" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Tipping &amp; The 24-Hour Guarantee</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section: The Golden Rule */}
          <section id="cleaning-vs-tidying" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight font-heading">
              The Golden Rule: Cleaning vs. Tidying
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                Almost every first-time client in <strong>Charleston, Mount Pleasant, and Summerville</strong> experiences the same nervous thought before their cleaners ring the doorbell: <em>&ldquo;Should I clean my house before the cleaning company gets here?&rdquo;</em>
              </p>
              <p>
                The short, emphatic answer is: <strong>NO. You do not need to scrub your toilet, mop the hardwood, vacuum the rugs, or wipe down mirrors.</strong> That is the exact skilled labor you are paying for!
              </p>
              <p>
                However, there is a fundamental difference between <strong>cleaning</strong> (disinfecting, scrubbing soap scum, wiping grime, polishing glass, vacuuming, mopping) and <strong>tidying</strong> (picking up yesterday&rsquo;s laundry off the floor, putting children&rsquo;s Lego sets into toy chests, and filing away tax documents).
              </p>
            </div>

            {/* Pro Tip Box */}
            <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-2xl shadow-xs">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Why Tidying Saves You Real Money</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    If your cleaning team spends 40 minutes picking up shoes, sorting through mail piles, and carrying toys upstairs, they have 40 fewer minutes to detail your baseboards, scrub your shower tile grout, or sanitize inside your microwave. <strong>Clear surfaces equal deeper cleans.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* STEP 1: Surface Clutter */}
          <section id="step-1-clutter" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-star-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Step 1: The 10-Minute Basket Clutter Method
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                Ten minutes before your cleaners are scheduled to arrive, grab an empty laundry basket or storage bin and do a brisk 3-minute sweep of each main room:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 font-medium">
                <li><strong>Clear Bedroom Floors:</strong> Pick up dirty clothes, workout sneakers, and throw blankets so commercial vacuums can reach under bedframes and around nightstands without obstruction.</li>
                <li><strong>Clear Bathroom Counters:</strong> Place toothbrushes, makeup palettes, curling irons, and skincare serums inside medicine cabinets or beneath the vanity. This lets the technician sanitize the entire countertop, polish the faucet stems, and eradicate hard water rings around sink drains.</li>
                <li><strong>Stow Charger Cords &amp; Electronics:</strong> Cords tangled on carpets can easily catch in spinning vacuum brush rolls. Gather laptop cords and phone chargers into a basket.</li>
              </ul>
            </div>

            <div className="mt-6 bg-slate-100/80 border border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Pro Tip: Don&rsquo;t worry about organizing the basket right away. Simply deposit items inside and sort them later—the goal is free surface access for the cleaners.</span>
            </div>
          </section>

          {/* STEP 2: Kitchen Sink */}
          <section id="step-2-kitchen-sink" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-star-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Step 2: Clear the Kitchen Sink &amp; Run the Dishwasher
              </h2>
            </div>

            {/* Step 2 Inline Illustration */}
            <figure className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-6">
              <Image
                src="/images/blog/clear-counters-and-sink-step.jpg"
                alt="wikiHow style educational illustration of organizing clutter off a kitchen island and clearing the sink"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-slate-950/70 backdrop-blur-xs text-white text-xs sm:text-sm p-2.5 text-center font-medium">
                Clearing breakfast plates and coffee cups off island quartz surfaces allows full degreasing and streak-free sanitization.
              </figcaption>
            </figure>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                In a standard professional home clean, the kitchen sink is the command center. Cleaners need constant access to clean water to rinse microfiber rags, fill mop buckets, and rinse disinfectant foams.
              </p>
              <p>
                If the sink basin is filled with soaking lasagna pans or dirty breakfast bowls, the cleaning technician either has to wash a mountain of dishes by hand (which eats into scheduled time) or work around them, preventing a deep scrub of the stainless steel or porcelain basin.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 font-medium">
                <li>Load morning coffee mugs, cereal bowls, and silverware directly into the dishwasher.</li>
                <li>Start the cycle if full, or leave it ready for cleaners to wipe the exterior stainless-steel door and controls.</li>
                <li>Clear cereal boxes, mail stacks, and bread bags off the kitchen island.</li>
              </ul>
            </div>
          </section>

          {/* STEP 3: Pets & Doors */}
          <section id="step-3-pets" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-star-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                3
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Step 3: Secure Pets &amp; Manage Exterior Doors
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                Charleston and Summerville are proudly dog-friendly cities, and <strong>Star Cleaning SC loves pets!</strong> In fact, all our routine cleaning formulas are 100% pet-safe and non-toxic.
              </p>
              <p>
                However, for your pet&rsquo;s safety and comfort, advance planning is essential:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-3">
                  <Dog className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5">Preventing Accidental Escapes</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cleaners frequently carry HEPA vacuums, caddies, and trash bags in and out of front and garage doors. An unsecured cat or curious golden retriever can dart through an open threshold before anyone notices.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5">Reducing Vacuum Anxiety</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Even the sweetest dogs can feel cornered or anxious when powerful commercial vacuum motors turn on in tight hallways. Placing them in a quiet, comfortable room with water and their favorite bed keeps them relaxed.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200/70 p-4 rounded-xl text-xs sm:text-sm font-semibold text-star-blue">
              &bull; Best Setup: A closed laundry room, a screened-in porch with fresh water, a dog crate, or letting a trusted neighbor walk them during the 2-to-3 hour service window.
            </div>
          </section>

          {/* STEP 4: Valuables & Confidential Documents */}
          <section id="step-4-valuables" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-star-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Step 4: Put Away Confidential Documents &amp; Valuables
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                At Star Cleaning SC, 100% of our cleaners are <strong>strictly background-checked, insured, bonded, and veteran-trained</strong>. However, putting away sensitive personal items is about mutual peace of mind:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 font-medium">
                <li><strong>Tax Documents &amp; Passports:</strong> Stow sensitive identity papers, bank statements, and social security cards inside office desk drawers.</li>
                <li><strong>Cash &amp; Small Jewelry:</strong> Rings, loose diamonds, and cash left on nightstands or sink ledges can accidentally get knocked into trash cans or vacuum hoses during energetic dusting.</li>
                <li><strong>Prescription Medications:</strong> Keep daily medications in your medicine cabinet or nightstand drawer to avoid accidental displacement.</li>
              </ul>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Heirloom Policy:</strong> If you own priceless antique porcelain, delicate chandeliers, or unsealed reclaimed barnwood that requires special handling, leave a quick sticky note on the item so the team knows to dust with dry feathers or skip entirely.
              </span>
            </div>
          </section>

          {/* STEP 5: Linens & Bedding */}
          <section id="step-5-linens" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-star-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Step 5: Bedding &amp; Linen Etiquette
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                Do you want fresh hotel-quality hospital corners on your beds? Most professional cleaning services in South Carolina include bed making as part of regular recurring maintenance, but follow this etiquette:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 font-medium">
                <li><strong>Strip the Old Linens:</strong> Strip pillowcases, fitted sheets, and flat sheets, placing them in your laundry basket.</li>
                <li><strong>Lay Out the Fresh Set:</strong> Place the clean fitted sheet, top sheet, and pillowcases directly on the mattress. That way, the team doesn&rsquo;t have to search through your linen closet guessing which sheet set belongs to the King vs. Queen bed.</li>
                <li><strong>Leave Extra Pillowcases Out:</strong> If you sleep with specialty memory foam or lumbar pillows, leave matching cases next to them.</li>
              </ul>
            </div>
          </section>

          {/* STEP 6: Access & Being Home */}
          <section id="step-6-access" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-star-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                6
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                Step 6: Gate Codes, Keys, and &ldquo;Do I Have to Stay Home?&rdquo;
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                Over <strong>80% of our recurring residential clients in the Lowcountry are NOT home</strong> during their cleanings. Returning from a long workday or golf game to a spotless, fresh-smelling home is one of life&rsquo;s greatest luxuries.
              </p>
              <p>
                If you won&rsquo;t be home, here is how to guarantee flawless access:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                <Key className="w-6 h-6 text-star-blue mx-auto mb-2" />
                <h5 className="font-bold text-slate-900 text-sm mb-1">Keypad / Lockbox</h5>
                <p className="text-xs text-slate-600">Provide front door or garage code in your secure booking notes.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                <Home className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-bold text-slate-900 text-sm mb-1">Gated HOA Security</h5>
                <p className="text-xs text-slate-600">Pre-register Star Cleaning SC at the guardhouse on Daniel Island or Kiawah.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                <FileText className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <h5 className="font-bold text-slate-900 text-sm mb-1">Alarm Instructions</h5>
                <p className="text-xs text-slate-600">Provide clear instructions on arming/disarming your home security system.</p>
              </div>
            </div>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Work From Home?</strong> If you work remotely, simply let the lead cleaner know your meeting schedule. They will gladly start in master bathrooms and secondary bedrooms, leaving your home office for last.
            </p>
          </section>

          {/* Section: Tipping, Etiquette & 24h Guarantee */}
          <section id="tipping-and-guarantee" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight font-heading">
              Tipping, Communication &amp; The 24-Hour Guarantee
            </h2>

            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-4">
              <p>
                Two common questions from Lowcountry homeowners involve money and quality control:
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <span>How Much Should You Tip House Cleaners?</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tipping is never mandatory, but it is an awesome way to recognize detail-oriented hard work. In Charleston, SC, a tip of <strong>15% to 20%</strong> or <strong>$20 to $40 per technician</strong> is standard for first-time deep cleans, move-in/move-out resets, or post-construction cleanings. For regular bi-weekly service, many clients leave $10 to $20 on the kitchen counter per visit or gift a holiday bonus at the end of the year.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-star-blue" />
                    <span>The 24-Hour 100% Satisfaction Guarantee</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When you get home, do a quick walkthrough! Check your baseboards, look behind bathroom faucets, and inspect kitchen appliances. At Star Cleaning SC, if any corner does not meet our uncompromising 5-star standard, <strong>call or text us within 24 hours at (843) 297-9935</strong>. We send a team back within 24 business hours to re-clean that specific area completely free of charge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Summary Checklist Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-14 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-star-blue/20 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl sm:text-2xl font-black font-heading mb-4 text-yellow-300 flex items-center gap-2.5">
              <ListChecks className="w-6 h-6 text-yellow-400" />
              <span>Your 15-Minute Pre-Clean Checklist</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Pick up floor clothes, shoes &amp; charging cords.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Load breakfast dishes into the dishwasher.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Secure dogs/cats in a safe designated room.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Store cash, passports &amp; prescription meds in drawers.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Lay fresh sheet sets on top of mattresses.</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ensure gate security &amp; keypad codes are up to date.</span>
              </div>
            </div>
          </div>

          {/* Comprehensive FAQ Section */}
          <section className="mb-14">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-star-blue" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Common Customer Questions About Maid Service
              </h2>
            </div>

            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                    <span className="text-star-blue font-extrabold">Q:</span>
                    <span>{faq.name}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-6">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Linking Hub */}
          <section className="mb-14 p-6 sm:p-8 bg-slate-100/80 rounded-3xl border border-slate-200/80">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Explore Our Lowcountry Cleaning Guides &amp; Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm font-semibold">
              <Link href="/services/deep-cleaning" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Professional Deep Cleaning
              </Link>
              <Link href="/services/residential-cleaning" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Recurring House Cleaning
              </Link>
              <Link href="/services/move-in-move-out-cleaning" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Move-In &amp; Move-Out Service
              </Link>
              <Link href="/blog/how-often-should-you-have-your-house-cleaned-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; How Often to Clean Your House
              </Link>
              <Link href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Shower Glass &amp; Grout Cleaning
              </Link>
              <Link href="/blog/how-to-clean-house-after-construction-checklist-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Post-Construction Guide
              </Link>
              <Link href="/blog/how-to-clean-before-moving-in-checklist-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Move-In Cleaning Checklist
              </Link>
              <Link href="/deep-cleaning-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Deep Cleaning Charleston, SC
              </Link>
              <Link href="/deep-cleaning-summerville-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Deep Cleaning Summerville, SC
              </Link>
              <Link href="/deep-cleaning-mount-pleasant-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5">
                &rarr; Mount Pleasant Cleaning Service
              </Link>
            </div>
          </section>

          {/* High-Converting CTA Banner */}
          <div className="bg-gradient-to-br from-star-blue via-blue-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-slate-950 text-xs font-bold uppercase tracking-widest mb-4">
              Ready to Reclaim Your Weekends?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 font-heading tracking-tight">
              Let Our Lowcountry Pros Handle the Deep Scrubbing
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-normal">
              Background-checked cleaners, veteran-owned discipline, eco-friendly supplies, and our 100% 24-Hour Clean Guarantee. Calculate your rate in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-base shadow-xl shadow-yellow-400/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Instant Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18432979935"
                className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-base border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Call (843) 297-9935</span>
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPrepareForCleaners;
