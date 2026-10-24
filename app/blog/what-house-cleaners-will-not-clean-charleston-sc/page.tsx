import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  HelpCircle, 
  ShieldAlert, 
  Layers, 
  PlusCircle, 
  Info,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Do House Cleaners NOT Clean? Safety Limits & Exclusions (Charleston SC)',
  description: 'Complete wikiHow-style Charleston homeowner guide to what house cleaners will not clean: safety boundaries, OSHA height limits, biohazards, and optional add-on services.',
  keywords: [
    'what house cleaners do not clean',
    'what will cleaners not do',
    'house cleaning exclusions',
    'maid service safety limits',
    'house cleaner dishes laundry rules',
    'house cleaning charleston sc exclusions',
    'cleaning high chandeliers charleston sc',
  ],
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog/what-house-cleaners-will-not-clean-charleston-sc',
  },
  openGraph: {
    title: 'What Do House Cleaners NOT Clean? Service Exclusions & Safety Boundaries',
    description: 'Learn the exact boundary lines professional cleaning services set in Charleston, SC. Discover why biohazards, heights over 2 steps, and heavy furniture are excluded for your safety.',
    url: 'https://www.starcleaningsc.com/blog/what-house-cleaners-will-not-clean-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/what-house-cleaners-will-not-clean-charleston-sc.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style illustration showing professional cleaning technician reviewing service checklist and safety boundaries with a homeowner in Charleston SC',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-22T09:00:00.000Z',
    modifiedTime: '2026-10-22T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Do House Cleaners NOT Clean? (Charleston SC Safety Guide)',
    description: 'Complete guide to maid service exclusions, OSHA ladder limits, pet waste rules, and what can be added on in Charleston SC.',
    images: ['https://www.starcleaningsc.com/images/blog/what-house-cleaners-will-not-clean-charleston-sc.jpg'],
  },
};

export default function WhatCleanersDoNotCleanPage() {
  const publishDate = 'October 22, 2026';
  const readTime = '8 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://www.starcleaningsc.com/blog/what-house-cleaners-will-not-clean-charleston-sc#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline: 'What Do House Cleaners NOT Clean? Service Exclusions, Safety Limits & Add-Ons (Charleston SC)',
        description: 'Complete wikiHow-style Charleston homeowner guide to what house cleaners will not clean: safety boundaries, OSHA height limits, biohazards, and optional add-on services.',
        image: 'https://www.starcleaningsc.com/images/blog/what-house-cleaners-will-not-clean-charleston-sc.jpg',
        datePublished: '2026-10-22T09:00:00.000Z',
        dateModified: '2026-10-22T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage: 'https://www.starcleaningsc.com/blog/what-house-cleaners-will-not-clean-charleston-sc',
        author: {
          '@type': 'Organization',
          name: 'Star Cleaning SC Operations Team',
          url: 'https://www.starcleaningsc.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.starcleaningsc.com/images/logo.png',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.starcleaningsc.com/blog/what-house-cleaners-will-not-clean-charleston-sc#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.starcleaningsc.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.starcleaningsc.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'What House Cleaners Do Not Clean',
            item: 'https://www.starcleaningsc.com/blog/what-house-cleaners-will-not-clean-charleston-sc',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Identify What Is Included vs. Excluded in Your Cleaning Service',
        description: 'A 4-step framework to review your cleaning service scope, identify strict safety exclusions, and request legitimate add-on services before technician arrival.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Separate Routine Surface Cleaning from Specialized Labor',
            text: 'Routine cleaning includes all accessible countertops, exterior appliances, sinks, toilets, showers, and floors. Interior ovens, refrigerators, and interior windows are specialized add-ons.',
          },
          {
            '@type': 'HowToStep',
            name: 'Identify OSHA Safety & Insurance Height Restrictions',
            text: 'Professional cleaners are insured for up to a 2-step ladder (reachable ceilings up to 10-12 feet with extension poles). Cathedral ceilings over 14 feet and exterior 2nd-story windows require specialized high-reach scaffolding services.',
          },
          {
            '@type': 'HowToStep',
            name: 'Understand Strict Biohazard & Health Exclusions',
            text: 'Animal waste (litter boxes, pet accidents), human bodily fluids, rodent droppings, and toxic black mold require specialized remediation licenses and cannot be handled with residential cleaning equipment.',
          },
          {
            '@type': 'HowToStep',
            name: 'Request Legitimate Add-On Upgrades Prior to Arrival',
            text: 'If you need interior oven degreasing, refrigerator detailing, interior kitchen cabinet wipe-down, or bed linen changes, add them to your booking so adequate time is allocated in the crew schedule.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Will house cleaners wash the dishes in my kitchen sink?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard house cleaning focuses on sanitizing surfaces, scrubbing sink basins, and cleaning exterior appliances. Most professional services will load a few breakfast dishes into the dishwasher if empty, but hand-washing piles of dinner pots and pans is excluded as it consumes 30-45 minutes allocated for deep surface sanitation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do house cleaners move heavy furniture like sofas, dressers, and king beds?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. To prevent technician spinal injury and avoid gouging hardwood flooring (especially delicate historic heart-pine in Downtown Charleston and Mount Pleasant), technicians will not lift or push items weighing over 35 to 50 pounds. Technicians vacuum and mop under furniture as far as long-reach vacuum wands extend.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can house cleaners clean high ceiling fans and chandeliers over 12 feet high?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cleaners use telescoping extension poles to dust ceiling fans and vents up to 10 to 12 feet from a steady 2-step ladder. For OSHA safety and insurance liability reasons, technicians do not climb 10-foot ladders or detail heavy, delicate crystal chandeliers that could sway or fall.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will cleaners scoop cat litter boxes or clean pet accidents in the yard?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Animal feces, urine, and litter boxes fall under biological hazard exclusions. Standard vacuums and microfiber towels cannot touch biohazards without cross-contaminating subsequent homes. Pet waste must be cleared by homeowners before cleaning begins.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <nav className="flex items-center text-xs sm:text-sm text-slate-500 gap-2">
            <Link href="/" className="hover:text-star-blue transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-star-blue transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate">Service Exclusions &amp; Boundaries</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            wikiHow Style Field Guide &bull; Homeowner Boundaries
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            What Do House Cleaners NOT Clean?
            <span className="block text-star-blue mt-1">Service Exclusions, Safety Limits &amp; Add-Ons in Charleston SC</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Avoid awkward misunderstandings. Here is the transparent breakdown of strict safety boundaries, OSHA limits, biohazard rules, and what can be added on across the Charleston Lowcountry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500 border-y border-slate-200 py-3.5">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Calendar className="w-4 h-4 text-star-blue" />
              {publishDate}
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-star-blue" />
              {readTime}
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-star-blue" />
              Charleston, Mount Pleasant &amp; Summerville SC
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/what-house-cleaners-will-not-clean-charleston-sc.jpg"
              alt="wikiHow style editorial illustration showing professional cleaning technician reviewing service checklist and safety boundaries with a homeowner in Charleston SC"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — Transparent boundaries ensure technician safety, worker compensation compliance, and zero property damage.
          </p>
        </div>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100 space-y-10">

            {/* AI & Homeowner Direct Answer Callout */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-star-blue font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" />
                The Quick Answer for Homeowners &amp; AI
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                Professional residential cleaning companies strictly exclude: <strong>1) Biohazards &amp; pet waste</strong> (litter boxes, pet urine/feces, rodent droppings, medical sharps); <strong>2) Heights exceeding a 2-step ladder</strong> (cathedral ceilings, 2nd-story exterior windows, delicate high chandeliers); <strong>3) Heavy lifting over 35–50 lbs</strong> (moving solid-wood dressers, large sectionals, heavy refrigerators); and <strong>4) Uncontrolled toxic mold or pest infestations</strong>. Services like <em>interior ovens, refrigerator shelves, and deep cabinet interiors</em> are not excluded, but must be scheduled as <strong>specific add-ons</strong> so adequate time and products are reserved.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-star-blue" />
                Table of Contents (Jump to Section)
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <a href="#hard-exclusions" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 1. The 5 Strict "Never Clean" Safety Exclusions
                  </a>
                </li>
                <li>
                  <a href="#height-limits" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 2. Ladder Heights, Chandeliers &amp; 12ft Ceilings
                  </a>
                </li>
                <li>
                  <a href="#furniture-lifting" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 3. Heavy Furniture &amp; Historic Heart-Pine Floors
                  </a>
                </li>
                <li>
                  <a href="#dishes-laundry" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 4. Dishes, Sinks &amp; Laundry Policies
                  </a>
                </li>
                <li>
                  <a href="#mold-vs-mildew" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 5. Charleston Humidity: Surface Mildew vs. Black Mold
                  </a>
                </li>
                <li>
                  <a href="#popular-addons" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 6. What Can Be Added On (Ovens, Fridges, Cabinets)
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 7. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Hard Exclusions */}
            <section id="hard-exclusions" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Strict Safety Limits
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 5 Strict "Never Clean" Safety Exclusions
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Professional house cleaning services are insured under general liability and worker&apos;s compensation policies that establish strict legal boundaries. These are not arbitrary rules; they exist to protect both our technicians&apos; health and your home&apos;s integrity:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">1. Biohazards &amp; Pet Bodily Waste</h3>
                    <p className="text-xs sm:text-sm text-red-950/80 mt-1 leading-relaxed">
                      Litter boxes, pet accidents (feces, urine, vomit), animal cages, rodent droppings, and human bodily fluids. Standard vacuum cleaners, microfiber mops, and cleaning sponges can become contaminated with <em>Toxoplasmosis, E. coli, or Salmonella</em>, which could inadvertently cross-contaminate the next client&apos;s home.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">2. Toxic Mold Remediation</h3>
                    <p className="text-xs sm:text-sm text-red-950/80 mt-1 leading-relaxed">
                      While our teams routinely scrub surface bathroom humidity mildew from shower grout, structural black mold behind drywall, under subfloors, or inside HVAC plenums requires state-licensed environmental mold remediation with negative air containment.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">3. Active Pest &amp; Bedbug Infestations</h3>
                    <p className="text-xs sm:text-sm text-red-950/80 mt-1 leading-relaxed">
                      Homes with active infestations of German cockroaches, fleas, or bedbugs cannot be serviced until certified pest control treatments and exterminations have occurred.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">4. Exterior Pressure Washing &amp; Roofs</h3>
                    <p className="text-xs sm:text-sm text-red-950/80 mt-1 leading-relaxed">
                      Cleaning driveways, gutters, rooflines, and 2nd-story exterior siding requires high-PSI pressure washers and exterior contractor equipment. We focus 100% on indoor living environments.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">5. Fireplaces &amp; Chimney Soot</h3>
                    <p className="text-xs sm:text-sm text-red-950/80 mt-1 leading-relaxed">
                      Cleaning the hearth or mantle is included, but cleaning interior chimney flues, fireboxes, and ash pits requires a certified chimney sweep with specialized soot filtration vacuums.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Height Limits & Chandeliers */}
            <section id="height-limits" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; Vertical Limits
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Ladder Heights, Chandeliers &amp; Historic 12ft Ceilings
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In Charleston, architecture varies from grand <strong>Antebellum single-houses South of Broad and the French Quarter</strong> with 12 to 14-foot historic plaster ceilings, to high cathedral living rooms in <strong>Mount Pleasant (Carolina Park, Dunes West)</strong> and <strong>Summerville (Nexton)</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  The 2-Step Ladder Rule (OSHA Standard)
                </div>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  Our technicians are equipped with heavy-duty <strong>2-step safety stools</strong> and telescoping microfiber extension poles. This allows us to safely reach ceiling fans, HVAC intake vents, and high crown moldings up to <strong>10 to 12 feet high</strong>.
                </p>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  <strong>Why we do not climb 8-foot or 10-foot ladders:</strong> Insurance policies strictly prohibit residential house cleaners from standing on tall ladders while balancing vacuums or water buckets. A fall can cause severe injury, and insurance liability would fall back onto the homeowner&apos;s policy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Delicate Crystal Chandeliers</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Technicians gently feather-dust accessible chandelier frames using electro-static extension wands. However, <em>individual disassembly or hand-polishing of individual glass crystal prisms</em> is excluded to avoid accidental breakage of irreplaceable vintage heirlooms.
                </p>
              </div>
            </section>

            {/* Section 3: Furniture Moving & Heart-Pine */}
            <section id="furniture-lifting" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; Physical Safety
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Moving Heavy Furniture &amp; Historic Heart-Pine Floors
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                A common question from clients in <strong>Old Village Mount Pleasant</strong> and <strong>Downtown Charleston</strong> is: <em>"Will your cleaners move my 800-pound oak armoire or king-size bed to vacuum behind it?"</em>
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200">
                  <div className="flex items-center gap-2 text-red-900 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    What We Cannot Move
                  </div>
                  <ul className="text-xs text-red-950/80 space-y-1.5 list-disc list-inside">
                    <li>Solid-wood armoires, china hutches, and book wall units</li>
                    <li>King-size beds with heavy mattresses or headboards</li>
                    <li>Large multi-piece sectional sofas</li>
                    <li>Refrigerators, washing machines, or dryer units</li>
                    <li>Items exceeding 35–50 lbs</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    How We Clean Under Furniture
                  </div>
                  <ul className="text-xs text-emerald-950/80 space-y-1.5 list-disc list-inside">
                    <li>Long-reach low-profile commercial vacuum wands</li>
                    <li>Moving lightweight chairs, nightstands, and small tables</li>
                    <li>Protecting antique heart-pine floors from scuffs and deep gouges</li>
                    <li>Zero drag marks on luxury vinyl plank (LVP) or hardwood</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Dishes and Laundry */}
            <section id="dishes-laundry" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; Kitchen &amp; Laundry
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Dishes, Sinks &amp; Laundry: Where the Line Is Drawn
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To maximize your cleaning value, professional house cleaning is dedicated to <strong>deep surface sanitization</strong>, not dishwashing or folding clothing:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Info className="w-4 h-4 text-star-blue" />
                    Sink &amp; Dishes Policy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    If there are 2–3 coffee mugs or cereal bowls in the sink, our technicians will rinse and place them in your dishwasher if empty. However, if the sink is filled with pots, pans, and dinner plates, technicians will clean around the pile or focus on other kitchen surfaces. Scrubbing 30 minutes of dishes steals time away from baseboards, appliance exteriors, and bathroom tile grout.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Info className="w-4 h-4 text-star-blue" />
                    Laundry &amp; Bed Linens Policy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Personal clothing laundry (washing, drying, folding, ironing) is not part of standard maid service. <strong>Bed Linens:</strong> If you leave fresh sheets laid out on top of the bed, our technicians are happy to change the sheets and make the bed neatly as part of your clean!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Mildew vs Black Mold */}
            <section id="mold-vs-mildew" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; The Lowcountry Climate
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Charleston Humidity: Surface Mildew vs. Toxic Black Mold
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Living along the South Carolina coast in <strong>James Island, West Ashley, or Daniel Island</strong> means year-round 70%+ humidity. It is vital to know what cleaners can treat:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <span className="font-bold text-star-blue text-sm block">What We Treat (Surface Mildew):</span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Pink and gray humidity mildew on tile grout, silicone shower seals, acrylic tub edges, bathroom exhaust fan grilles, and damp window sill edges. We use specialized non-bleach antimicrobial detergents that dissolve coastal spores on contact.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 border border-slate-300 space-y-2">
                  <span className="font-bold text-slate-800 text-sm block">What Requires Remediation (Toxic Mold):</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fuzzy black spores penetrating drywall, plumbing leaks inside vanities, crawlspace mold rising through floorboards, or HVAC duct mold. Disturbing toxic mold with standard cleaning tools can aerosolize mycotoxins throughout your home.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Popular Add-ons */}
            <section id="popular-addons" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 6 &bull; Customization
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                What Can Be Added On: Expand Your Cleaning Scope
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Just because an item isn&apos;t in a standard maintenance clean doesn&apos;t mean it can&apos;t be done! At Star Cleaning SC, you can easily customize your booking with our popular add-on services:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 my-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Interior Oven Degreasing &amp; Racks</span>
                  <span className="text-xs font-bold text-star-blue bg-blue-50 px-2.5 py-1 rounded-full">+ Add-On</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Interior Refrigerator &amp; Freezer Scrub</span>
                  <span className="text-xs font-bold text-star-blue bg-blue-50 px-2.5 py-1 rounded-full">+ Add-On</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Inside Kitchen Cabinets &amp; Drawers</span>
                  <span className="text-xs font-bold text-star-blue bg-blue-50 px-2.5 py-1 rounded-full">+ Add-On</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Interior Window Glass &amp; Sill Detailing</span>
                  <span className="text-xs font-bold text-star-blue bg-blue-50 px-2.5 py-1 rounded-full">+ Add-On</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Screened-in Lowcountry Porch Sweep</span>
                  <span className="text-xs font-bold text-star-blue bg-blue-50 px-2.5 py-1 rounded-full">+ Add-On</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Move-In / Move-Out Turnover Package</span>
                  <span className="text-xs font-bold text-star-blue bg-blue-50 px-2.5 py-1 rounded-full">+ Add-On</span>
                </div>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section id="faq-section" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Common Questions About Cleaning Exclusions
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Will cleaners wipe down painted walls?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We spot-clean light fingerprints and smudges around door knobs and light switches. However, full scrubbing of entire painted drywall surfaces is excluded because modern flat or matte latex paints can rub off, leaving water rings and discoloration.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Can cleaners take down and wash delicate window draperies?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No. Draperies and fabric curtains require specialized dry-cleaning to prevent fabric shrinkage or water marks. Technicians use soft-brush vacuum attachments to dust blinds and plantation shutters in place.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    What if I have valuable art or antiques in my home?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Simply let us know during booking or on your entry note! Our veteran-owned team respects delicate items; you can request that technicians skip specific display cases, vintage armoires, or artwork altogether.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    How long does house cleaning usually take?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Check out our complete duration breakdown guide:{' '}
                    <Link href="/blog/how-long-does-house-cleaning-take-charleston-sc" className="text-star-blue font-bold hover:underline">
                      How Long Does House Cleaning Take? (Time Guide by Sq Footage)
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Guides Link Hub */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-8">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
                Explore More Charleston Homeowner Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <Link href="/blog/how-long-does-house-cleaning-take-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; How Long Does Cleaning Take? (By Sq Ft)
                </Link>
                <Link href="/blog/should-you-stay-home-during-house-cleaning-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Should You Stay Home or Leave?
                </Link>
                <Link href="/blog/do-house-cleaners-bring-their-own-supplies-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Do Cleaners Bring Their Own Supplies?
                </Link>
                <Link href="/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Pre-Cleaning Homeowner Checklist
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Veteran-Owned Discipline
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Clear Expectations. Pristine Results. 100% Guaranteed.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Experience transparent, military-precision cleaning in Charleston, Mount Pleasant, and Summerville. Fully licensed, bonded, $2,000,000 insured, and backed by our 24-Hour Star Guarantee.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-sm"
                >
                  Get Instant Online Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+18432979935"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  (843) 297-9935
                </a>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
