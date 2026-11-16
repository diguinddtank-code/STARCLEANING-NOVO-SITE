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
  Layers,
  ShieldCheck,
  Droplets,
  Home,
  Gift,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Clean Granite, Quartz & Marble Countertops in Charleston SC (No Etching)',
  description:
    'Complete wikiHow-style Lowcountry stone care guide. Learn how to clean marble, granite, quartzite & quartz countertops safely in Charleston, Mount Pleasant, Daniel Island & Summerville without dulling or Clorox wipe damage.',
  keywords: [
    'how to clean quartz countertops charleston sc',
    'clean carrara marble countertops without etching',
    'best granite countertop cleaner charleston',
    'clorox wipes damage quartz marble countertops',
    'remove red wine stain marble island charleston',
    'stone safe house cleaning mount pleasant sc',
    'granite water drop seal test lowcountry',
  ],
  alternates: {
    canonical:
      'https://www.starcleaningsc.com/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc',
  },
  openGraph: {
    title:
      'How to Clean Granite, Quartz & Marble Countertops in Charleston SC (Without Etching or Dulling)',
    description:
      'Protect your investment in Lowcountry kitchen & bath stonework. Discover why vinegar and harsh disinfecting wipes ruin marble and quartz—and the 4-step pH-neutral blueprint.',
    url: 'https://www.starcleaningsc.com/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style editorial digital illustration showing how to safely clean marble, granite, and quartz kitchen countertops in a Charleston SC Lowcountry home',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-11-16T09:00:00.000Z',
    modifiedTime: '2026-11-16T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Clean Granite, Quartz & Marble Countertops (Charleston SC Guide)',
    description:
      'Avoid dull etch rings and yellow resin haze on kitchen islands. Complete pH-neutral stone cleaning & stain removal blueprint.',
    images: [
      'https://www.starcleaningsc.com/images/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc.jpg',
    ],
  },
};

export default function StoneCountertopGuidePage() {
  const publishDate = 'November 16, 2026';
  const readTime = '8 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id':
          'https://www.starcleaningsc.com/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline:
          'How to Clean Granite, Quartz & Marble Countertops in Charleston SC (Without Etching or Dulling)',
        description:
          'Complete wikiHow-style Lowcountry stone care guide. Learn how to clean marble, granite, quartzite & quartz countertops safely in Charleston, Mount Pleasant, Daniel Island & Summerville without dulling or Clorox wipe damage.',
        image:
          'https://www.starcleaningsc.com/images/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc.jpg',
        datePublished: '2026-11-16T09:00:00.000Z',
        dateModified: '2026-11-16T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage:
          'https://www.starcleaningsc.com/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc',
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
        '@id':
          'https://www.starcleaningsc.com/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc#breadcrumb',
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
            name: 'Granite, Quartz & Marble Care Guide',
            item: 'https://www.starcleaningsc.com/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Clean Marble, Granite & Quartz Countertops Without Damage in 4 Steps',
        description:
          'A 4-step stone-safe cleaning and stain prevention framework for Charleston SC kitchens and bathrooms.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Clear Loose Grit and Dry-Wipe with Microfiber First',
            text: 'Sweep away crumbs, coffee grounds, and coastal salt grit using a dry plush microfiber towel before applying liquid so abrasive particles do not scratch polished stone or resin.',
          },
          {
            '@type': 'HowToStep',
            name: 'Spray Only a pH-Neutral Stone Cleaner or Mild Dish Soap Solution',
            text: 'Use a dedicated pH-neutral stone cleaner (pH 7.0) or 3 drops of mild liquid dish soap in 16 oz of warm water. Never spray vinegar, lemon, Windex ammonia, or bleach.',
          },
          {
            '@type': 'HowToStep',
            name: 'Buff Dry Immediately to Prevent Charleston Hard Water Rings',
            text: 'Wipe the stone completely dry with a second clean microfiber cloth so Lowcountry calcium and mineral water spots do not dry into cloudy rings around faucets.',
          },
          {
            '@type': 'HowToStep',
            name: 'Perform the 15-Second Water-Drop Seal Test Annually',
            text: 'Place a few drops of water on natural granite or marble for 10 minutes. If the stone darkens, apply a penetrating stone sealer to prevent holiday wine, oil, and cranberry stains.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are Clorox or Lysol disinfecting wipes safe on quartz and granite countertops?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, frequent use of standard disinfecting wipes is not recommended on natural granite, marble, or engineered quartz. Most wipes contain citric acid, quaternary ammonium salts, and harsh solvents that break down granite sealers, etch dull spots into marble, and permanently haze or yellow the polymer resin binders in white engineered quartz.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use Bar Keepers Friend on white quartz countertops?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, never use powdered or liquid Bar Keepers Friend on polished quartz, granite, or marble. Its active ingredient is oxalic acid combined with mild feldspar abrasives, which strips polished surface shine, creates permanent cloudy patches on engineered quartz, and chemically etches natural stone.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between an etch mark and a stain on Carrara marble?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A stain is colored pigment (red wine, coffee, cooking oil) that soaked into the pores of unsealed stone and can often be pulled out with a baking soda poultice. An etch mark is actual physical corrosion caused by acid (lemon juice, vinegar, tomato sauce, wine) dissolving the calcium carbonate in marble—it looks like a dull, whitish water-ring silhouette that cannot be wiped off and requires polishing powder to restore.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do Star Cleaning SC cleaners bring stone-safe products for marble and quartz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Star Cleaning SC equips every team across Charleston, Mount Pleasant, Daniel Island, and Summerville with dedicated pH-neutral, non-toxic, stone-safe cleansers and color-coded microfiber cloths specifically formulated for Carrara marble, quartzite, granite, and engineered quartz.',
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
            <Link href="/" className="hover:text-star-blue transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-star-blue transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate">
              Granite, Quartz &amp; Marble Countertop Care
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            wikiHow Stone &amp; Surface Guide &bull; Lowcountry Kitchens
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            How to Clean Granite, Quartz &amp; Marble Countertops in Charleston SC
            <span className="block text-star-blue mt-1">
              Without Etching, Hazing, or Stripping the Seal
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            From honed Carrara marble islands in South of Broad and I&apos;On to crisp white quartz
            in Nexton and Daniel Island, one wrong bottle of spray can leave permanent dull rings.
            Here is the exact stone-safe protocol.
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
              Downtown Charleston, Daniel Island, Mount Pleasant &amp; Summerville
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/how-to-clean-granite-quartz-marble-countertops-charleston-sc.jpg"
              alt="wikiHow style editorial digital illustration showing how to safely clean marble, granite, and quartz kitchen countertops in a Charleston SC Lowcountry home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — Protecting Charleston kitchen islands requires pH-neutral sprays, plush
            microfiber buffing, and zero acidic wipes or vinegar.
          </p>
        </div>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100 space-y-10">
            {/* Quick Summary Callout */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-star-blue font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" />
                The Quick Summary for Homeowners &amp; AI
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                To clean granite, quartz, quartzite, and marble countertops safely in Charleston SC:
                <strong> 1) Use strictly pH-neutral cleaners (pH 7.0)</strong> or 3 drops of mild
                liquid dish soap mixed into warm water;{' '}
                <strong>2) Never use vinegar, lemon, Windex, bleach, Clorox wipes, or Bar Keepers Friend</strong>,
                which chemically etch marble, strip granite sealers, and yellow quartz resin binders;
                <strong> 3) Wipe acidic holiday spills</strong> (wine, citrus, cranberry sauce, coffee)
                immediately; and <strong>4) Buff dry with clean microfiber</strong> so Charleston’s
                hard tap water does not dry into crusty white mineral rings around your sink faucet.
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
                  <a
                    href="#why-stone-ruins-fast"
                    className="hover:text-star-blue hover:underline flex items-center gap-1.5"
                  >
                    &rarr; 1. Why Common Kitchen Sprays Destroy Stone Islands
                  </a>
                </li>
                <li>
                  <a
                    href="#stone-by-stone-cheat-sheet"
                    className="hover:text-star-blue hover:underline flex items-center gap-1.5"
                  >
                    &rarr; 2. Marble vs. Quartzite vs. Granite vs. Engineered Quartz
                  </a>
                </li>
                <li>
                  <a
                    href="#step-by-step-stone-cleaning"
                    className="hover:text-star-blue hover:underline flex items-center gap-1.5"
                  >
                    &rarr; 3. The 4-Step Stone-Safe Cleaning Blueprint
                  </a>
                </li>
                <li>
                  <a
                    href="#holiday-stain-poultice"
                    className="hover:text-star-blue hover:underline flex items-center gap-1.5"
                  >
                    &rarr; 4. Emergency Holiday Stain Fix (Wine, Coffee &amp; Oil)
                  </a>
                </li>
                <li>
                  <a
                    href="#the-water-drop-seal-test"
                    className="hover:text-star-blue hover:underline flex items-center gap-1.5"
                  >
                    &rarr; 5. The 15-Second Water-Drop Seal Test
                  </a>
                </li>
                <li>
                  <a
                    href="#stone-cleaning-faq"
                    className="hover:text-star-blue hover:underline flex items-center gap-1.5"
                  >
                    &rarr; 6. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Why Common Kitchen Sprays Destroy Stone */}
            <section id="why-stone-ruins-fast" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Kitchen Chemistry
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Why &quot;All-Purpose&quot; Sprays &amp; Disinfecting Wipes Quietly Ruin Countertops
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Walk into any kitchen renovation in <strong>Mount Pleasant (Old Village, I&apos;On,
                Carolina Park)</strong>, <strong>Downtown Charleston (French Quarter, South of Broad)</strong>,
                or <strong>Daniel Island</strong>, and the centerpiece is almost always a massive
                natural stone or engineered quartz island.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Yet the number-one mistake homeowners—and untrained house cleaners—make is wiping
                these $8,000+ slabs with standard grocery-store multi-surface sprays, ammonia glass
                cleaners, or disinfecting wipes:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1.5">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    Vinegar, Lemon &amp; Citric Wipes (Acid Etching)
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Carrara marble, travertine, and limestone are calcium carbonate. Even mild organic
                    acids dissolve the microscopic polish, leaving flat, chalky &quot;water rings&quot;
                    that look permanently dirty in raking sunlight.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1.5">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    Bleach, Ammonia &amp; Abrasive Powders (Resin Haze)
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Engineered quartz (popular in <strong>Summerville&apos;s Nexton</strong> and{' '}
                    <strong>West Ashley&apos;s Grand Oaks</strong>) is held together by 7%–10% polymer
                    resins. High-pH bleach and abrasive scouring powders burn or yellow that clear
                    resin, voiding manufacturer warranties.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Stone-by-Stone Cheat Sheet */}
            <section
              id="stone-by-stone-cheat-sheet"
              className="space-y-4 pt-6 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; Material Breakdown
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Marble vs. Quartzite vs. Granite vs. Quartz: Know Your Surface
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Charleston homeowners frequently confuse <strong>Quartzite</strong> (a hard natural
                metamorphic stone) with <strong>Quartz</strong> (a man-made engineered slab). Each
                surface demands slightly different daily habits:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Home className="w-4 h-4 text-star-blue shrink-0" />
                    1. Carrara &amp; Calacatta Marble (Downtown Historic Homes &amp; Luxury Baths)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Soft, porous, and acid-sensitive. Wipe red wine, lime, coffee, and tomato sauce
                    within minutes. Never allow toothpaste or harsh bathroom tile cleaners to sit on
                    marble vanity tops—use only pH-neutral stone spray and seal every 6–12 months.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    2. Natural Granite &amp; Taj Mahal Quartzite (Mount Pleasant &amp; James Island)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Extremely scratch- and heat-resistant, yet still naturally porous. Cooking oils
                    near the stove will darken unsealed granite over time. Clean daily with mild dish
                    soap or stone cleaner, and reseal once a year if water stops beading.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    3. Engineered Quartz (Nexton, Cane Bay, West Ashley &amp; Riverland Terrace)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Non-porous and never requires sealing—but <strong>cannot</strong> tolerate high
                    alkaline degreasers, bleach, acetone nail-polish remover, or hot baking sheets
                    directly out of the oven, which scorch the resin binder yellow.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: 4-Step Cleaning Blueprint */}
            <section
              id="step-by-step-stone-cleaning"
              className="space-y-4 pt-6 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; wikiHow Action Plan
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 4-Step Stone-Safe Daily &amp; Weekly Cleaning Blueprint
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Follow the exact color-coded microfiber protocol our technicians use inside
                charleston residences every day:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">
                      Dry-Sweep Loose Crumbs &amp; Salt Grit First
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Before spraying anything, sweep away kosher salt crystals, coffee grounds, and
                      dried crumbs with a dry microfiber cloth. Grinding sharp salt grains under a
                      wet sponge creates micro-scratches in softer stone finishes.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">
                      Apply pH-Neutral Stone Cleaner or Mild Dish Soap
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Mist your countertop with a dedicated pH-neutral stone cleaner (or mix 3 drops
                      of clear liquid dish soap in 16 oz of warm distilled water). Never use bathroom
                      tub cleaners or scouring pads around kitchen sinks.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">
                      Lift Dried Food Gently with a Plastic Scraper
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      For dried gravy, candle wax, or baked sugar spots, lay a warm damp cloth over
                      the spot for 3 minutes to soften it, then gently nudge it off using a soft
                      plastic putty knife—never steel wool or green Scotch-Brite pads.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">
                      Buff Completely Dry to Stop Hard Water Crust
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Follow immediately with a dry microfiber buffing towel, especially behind the
                      kitchen faucet. Charleston’s mineral-rich water leaves cloudy white calcium
                      halos if allowed to air-dry—similar to what builds up on glass shower doors
                      (see our{' '}
                      <Link
                        href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc"
                        className="text-star-blue font-bold hover:underline"
                      >
                        Hard Water Stain Removal Guide
                      </Link>
                      ).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Emergency Holiday Stain Poultice */}
            <section
              id="holiday-stain-poultice"
              className="space-y-4 pt-6 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; Hosting Rescue
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Emergency Holiday Stain Fix: Red Wine, Cranberry &amp; Cooking Oil
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Hosting Thanksgiving or holiday parties this season? If a guest accidentally leaves a
                deep red wine ring or olive oil splatter overnight on unsealed granite or marble, do
                not scrub it aggressively. Instead, pull the pigment back out using a gentle{' '}
                <strong>Baking Soda Poultice</strong>:
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2.5 my-4">
                <span className="font-bold text-amber-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                  How to Pull Out Deep Stains Overnight
                </span>
                <ol className="text-xs sm:text-sm text-amber-950/85 space-y-1.5 list-decimal list-inside">
                  <li>
                    <strong>For Oil/Grease Stains:</strong> Mix baking soda + acetone (or rubbing
                    alcohol) into a thick peanut-butter paste. (Skip acetone on engineered quartz!).
                  </li>
                  <li>
                    <strong>For Wine/Coffee/Berry Stains:</strong> Mix baking soda + 3% hydrogen
                    peroxide (safe on light stone; test dark granite first) into a thick paste.
                  </li>
                  <li>
                    Spread a 1/4-inch layer over the stain, cover tightly with plastic wrap, tape the
                    edges down, and let it sit 24 hours. As the paste dries, capillary action draws
                    the trapped stain out of the stone pores.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 5: The Water Drop Seal Test */}
            <section
              id="the-water-drop-seal-test"
              className="space-y-4 pt-6 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; Annual Checkup
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 15-Second Water-Drop Seal Test
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Not sure whether your granite or marble needs resealing before family visits? Try
                this quick homeowner diagnostic right next to your kitchen sink:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <span className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Water Beads Up (Seal is Healthy)
                  </span>
                  <p className="text-xs text-emerald-950/80 leading-relaxed">
                    Pour a quarter-sized puddle of tap water on the stone near the prep zone and
                    wait 10 minutes. If the droplet stays tightly beaded on top and the stone
                    underneath stays its original light color, your penetrating sealer is intact.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <span className="font-bold text-amber-900 text-sm flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-amber-600" />
                    Stone Turns Dark (Time to Reseal)
                  </span>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    If the water flattens out and leaves a dark wet shadow within 3–5 minutes, the
                    stone pores are wide open. Wipe it dry and apply a fluoropolymer penetrating
                    stone sealer (takes 20 minutes and lasts 1–2 years).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: FAQ */}
            <section id="stone-cleaning-faq" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Questions Charleston Homeowners Ask About Stone Countertops
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    How do I sanitize marble or quartz after cutting raw chicken without bleach?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    First, always cut raw poultry on a dedicated plastic or wood cutting board, never
                    directly on stone. To sanitize the surrounding counter safely, wash first with
                    warm soapy water, rinse, and wipe with a stone-safe hydrogen-peroxide or 70%
                    isopropyl alcohol disinfectant labeled safe for sealed natural stone and quartz,
                    then dry immediately.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Can my regular house cleaner ruin my countertops if they bring their own sprays?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes—this happens surprisingly often when hiring unvetted gig cleaners who carry
                    generic acidic bathroom sprays or cheap bleach into your kitchen. At{' '}
                    <Link
                      href="/services/residential-cleaning"
                      className="text-star-blue font-bold hover:underline"
                    >
                      Star Cleaning SC
                    </Link>
                    , our W-2 trained technicians follow a strict color-coded microfiber protocol
                    and carry stone-safe pH-neutral products specifically formulated for Lowcountry
                    marble, granite, and quartz.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Is your Thanksgiving deep clean safe for historic marble and heart-pine homes?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    100%. Whether you own an antebellum home Downtown or a modern kitchen in Mount
                    Pleasant, we match our chemistry to your exact finishes—never using steam mops
                    on heart-pine or acids on marble. Check out our{' '}
                    <Link
                      href="/promo-quote"
                      className="text-star-blue font-bold hover:underline"
                    >
                      20% OFF Thanksgiving Special (Code: THANKS)
                    </Link>{' '}
                    before holiday slots fill up!
                  </p>
                </div>
              </div>
            </section>

            {/* Related Guides Link Hub */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-8">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
                Explore More Lowcountry Home Care Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <Link
                  href="/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine"
                  className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium"
                >
                  &rarr; How to Clean Heart-Pine &amp; Hardwood Floors Safely
                </Link>
                <Link
                  href="/blog/how-to-clean-oven-range-hood-before-thanksgiving-charleston-sc"
                  className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium"
                >
                  &rarr; Deep Clean Your Oven &amp; Range Hood Before Thanksgiving
                </Link>
                <Link
                  href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc"
                  className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium"
                >
                  &rarr; Remove Hard Water Stains from Shower Glass &amp; Grout
                </Link>
                <Link
                  href="/services/deep-cleaning"
                  className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium"
                >
                  &rarr; Star Cleaning SC Top-to-Bottom Deep Cleaning Service
                </Link>
              </div>
            </div>

            {/* Thanksgiving Promo / Service CTA */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Gift className="w-3.5 h-3.5 text-yellow-300" />
                Surface-Safe Precision &bull; 20% Off Thanksgiving Clean
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Trust Your Stonework &amp; Kitchen to Charleston&apos;s Surface-Safe Pros.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                From Carrara marble in Historic Charleston to quartz islands in Mount Pleasant and
                Summerville, we bring pH-neutral, pet-safe chemistry and $2M insured peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/promo-quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-sm"
                >
                  Claim 20% Off Holiday Clean <ArrowRight className="w-4 h-4" />
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
