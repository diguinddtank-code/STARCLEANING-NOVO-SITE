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
  UtensilsCrossed,
  Flame,
  ShieldCheck,
  Home,
  Check,
  Gift,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mount Pleasant SC Thanksgiving House Cleaning: The Lowcountry Host Checklist',
  description: 'Complete wikiHow-style Thanksgiving cleaning checklist for Mount Pleasant SC homeowners. Prepare kitchens, guest suites, and porches across Old Village, Park West, Dunes West, and Carolina Park.',
  keywords: [
    'mount pleasant sc thanksgiving house cleaning',
    'thanksgiving cleaning checklist mount pleasant',
    'holiday maid service mount pleasant sc',
    'deep clean oven guest bathroom mount pleasant',
    'carolina park thanksgiving cleaning',
    'park west dunes west house cleaners',
    'old village charleston holiday cleaning special'
  ],
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist',
  },
  openGraph: {
    title: 'Mount Pleasant SC Thanksgiving House Cleaning: The Lowcountry Host Checklist',
    description: 'Hosting out-of-town guests this Thanksgiving? Discover the room-by-room Lowcountry preparation blueprint for Mount Pleasant homes in Park West, Dunes West, and Old Village.',
    url: 'https://www.starcleaningsc.com/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style editorial digital illustration showing a Thanksgiving house cleaning preparation in an elegant Mount Pleasant South Carolina Lowcountry home',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-11-02T09:00:00.000Z',
    modifiedTime: '2026-11-02T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mount Pleasant SC Thanksgiving House Cleaning Checklist',
    description: 'Room-by-room holiday preparation guide for Mount Pleasant homeowners. Kitchen grease resets, guest bathrooms, marsh dust, and screened porches.',
    images: ['https://www.starcleaningsc.com/images/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist.jpg'],
  },
};

export default function MountPleasantThanksgivingGuidePage() {
  const publishDate = 'November 2, 2026';
  const readTime = '8 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://www.starcleaningsc.com/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline: 'Mount Pleasant SC Thanksgiving House Cleaning: The Lowcountry Host Checklist',
        description: 'Complete wikiHow-style Thanksgiving cleaning checklist for Mount Pleasant SC homeowners. Prepare kitchens, guest suites, and porches across Old Village, Park West, Dunes West, and Carolina Park.',
        image: 'https://www.starcleaningsc.com/images/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist.jpg',
        datePublished: '2026-11-02T09:00:00.000Z',
        dateModified: '2026-11-02T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage: 'https://www.starcleaningsc.com/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist',
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
        '@id': 'https://www.starcleaningsc.com/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist#breadcrumb',
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
            name: 'Mount Pleasant Thanksgiving Checklist',
            item: 'https://www.starcleaningsc.com/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Prepare Your Mount Pleasant Home for Thanksgiving in 4 Key Steps',
        description: 'A 4-step room-by-room preparation timeline for Mount Pleasant homeowners hosting family and out-of-town holiday visitors.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Deep Clean Double Ovens, Range Hoods and Refrigerator Storage',
            text: 'Degrease oven interiors, baked-on rack residue, and stainless range hood baffles 1-2 weeks before Thanksgiving so fumes dissipate and your turkey roasts without smoke.',
          },
          {
            '@type': 'HowToStep',
            name: 'Sanitize Guest Bedrooms and FROG En-Suite Bathrooms',
            text: 'Extract dormant Lowcountry marsh dust with sealed HEPA vacuums, scrub shower door hard water scale, and stock fresh towels and toiletries for arriving guests.',
          },
          {
            '@type': 'HowToStep',
            name: 'Polish Dining Tables and Protect Hardwood Traffic Corridors',
            text: 'Clean solid wood dining tables with pH-neutral botanical wood food, and place heavy-duty entryway coir mats to capture abrasive coastal pluff-mud and quartz beach sand.',
          },
          {
            '@type': 'HowToStep',
            name: 'Reset Screened Porches and Outdoor Entertaining Spaces',
            text: 'Wipe pollen-and-dust buildup off screened porch wicker furniture, outdoor ceiling fan blades, and French door glass so guests can relax comfortably outdoors in mild 68°F November weather.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When is the best time to schedule a Thanksgiving house cleaning in Mount Pleasant, SC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The ideal window is between November 16 and November 24 (the week prior to or the Monday/Tuesday of Thanksgiving week). This gives you a pristine, guest-ready home before family arrives from Charleston International Airport (CHS) or drives in across the Ravenel Bridge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I clean the oven right before Thanksgiving or 2 weeks in advance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Always deep clean your oven 7 to 14 days in advance. Cleaning removes old baked-on grease that would otherwise cause burning smoke and alter the flavor of your roasted turkey. Cleaning ahead also ensures any self-clean thermal lockouts or chemical odors are long gone before cooking day.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you clean homes in Carolina Park, Park West, Dunes West, and RiverTowne?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Star Cleaning SC regularly serves every major community in Mount Pleasant (29464 and 29466), including Carolina Park, Park West, Dunes West, RiverTowne, Old Village, I\'On, Belle Hall, Brickyard Plantation, and Hamlin Plantation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a Thanksgiving special discount available for Mount Pleasant homeowners?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We have an exclusive Thanksgiving Special with 20% OFF your holiday clean using code THANKS on our dedicated reservation page at /promo-quote. Spots are strictly limited to ensure our veteran-backed technicians maintain white-glove quality standards.',
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
            <span className="text-slate-800 font-medium truncate">Mount Pleasant Thanksgiving Checklist</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            Mount Pleasant Local Host Guide &bull; Thanksgiving 2026
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            Mount Pleasant SC Thanksgiving House Cleaning
            <span className="block text-star-blue mt-1">The Lowcountry Host Checklist &amp; Prep Timeline</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Hosting extended family across the Ravenel Bridge this Thanksgiving? From deep-cleaning double ovens in Carolina Park to readying guest suites in Park West and Dunes West, here is your room-by-room preparation guide.
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
              Mount Pleasant, SC (Old Village, Park West, Carolina Park)
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist.jpg"
              alt="wikiHow style editorial digital illustration showing a Thanksgiving house cleaning preparation in an elegant Mount Pleasant South Carolina Lowcountry home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — A clean kitchen, pristine guest suites, and spotless Lowcountry dining areas ensure a stress-free Thanksgiving.
          </p>
        </div>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100 space-y-10">

            {/* Thanksgiving Promotion Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white shadow-md space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full border border-white/25">
                  <Gift className="w-3.5 h-3.5 text-yellow-300" />
                  Thanksgiving Special &bull; Mount Pleasant
                </div>
                <span className="text-xs font-bold bg-slate-900/80 px-2.5 py-0.5 rounded text-yellow-300">
                  CODE: THANKS
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                Claim 20% OFF Your Thanksgiving Holiday Clean
              </h2>
              <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
                Hosting thanksgiving dinner or welcoming grandparents to your Lowcountry home? Lock in 20% off your initial deep clean. Only 12 holiday slots remain for Mount Pleasant (29464 &amp; 29466).
              </p>
              <div className="pt-1">
                <Link
                  href="/promo-quote"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md hover:bg-yellow-300 transition-colors"
                >
                  Reserve Your 20% Off Holiday Clean &rarr;
                </Link>
              </div>
            </div>

            {/* Quick Answer Summary */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-star-blue font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" />
                The Quick Host Summary for Mount Pleasant
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                Hosting Thanksgiving in Mount Pleasant requires tackling three unique coastal factors: <strong>1) Degreasing ovens and range hood filters 1–2 weeks early</strong> so cooking fumes don’t taint food or trigger fire alarms; <strong>2) Deep-cleaning guest rooms and FROG (Finished Room Over Garage) en-suites</strong> by extracting trapped marsh dust and maritime humidity; and <strong>3) Prepping screened porches and outdoor patios</strong>, because Charleston’s comfortable 68°F November weather means guests naturally gather outdoors between dinner courses.
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
                  <a href="#why-mount-pleasant-holidays-are-different" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 1. The Mount Pleasant Hosting Reality (Marsh Dust &amp; Guests)
                  </a>
                </li>
                <li>
                  <a href="#week-by-week-timeline" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 2. The 3-Week Thanksgiving Cleaning Countdown
                  </a>
                </li>
                <li>
                  <a href="#kitchen-deep-clean-focus" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 3. The Kitchen Reset: Ovens, Fridges &amp; Range Hoods
                  </a>
                </li>
                <li>
                  <a href="#guest-suite-frog-prep" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 4. Guest Rooms &amp; FROGs (Finished Rooms Over Garage)
                  </a>
                </li>
                <li>
                  <a href="#screened-porches-outdoor" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 5. Screened Porches &amp; Hardwood Floor Protection
                  </a>
                </li>
                <li>
                  <a href="#neighborhood-faq" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 6. Mount Pleasant FAQ &amp; Service Areas
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: The Mount Pleasant Hosting Reality */}
            <section id="why-mount-pleasant-holidays-are-different" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Coastal Hosting Dynamics
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Why Thanksgiving Prep is Unique in Mount Pleasant, SC
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you live in an expansive custom home in <strong>Dunes West</strong> or <strong>RiverTowne</strong>, a family-centric neighborhood like <strong>Carolina Park</strong> or <strong>Park West</strong>, or a historic cottage in <strong>Old Village</strong>, Mount Pleasant homes face specific environmental demands every November:
              </p>

              <div className="grid sm:grid-cols-3 gap-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-star-blue shrink-0" />
                    Open Floorplans
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Large modern kitchens open directly into great rooms. A messy stovetop or cluttered island is in full view of every guest sitting on your sofa.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    Pluff-Mud &amp; Sand
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With family walking dogs along Pitt Street Bridge or returning from Isle of Palms, fine sand quickly grinds into wide-plank hardwood floors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                    High Headcounts
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mount Pleasant is a top family gathering hub. Hosting 10 to 20 people puts intense strain on powder rooms, refrigerators, and trash bins.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Week-by-Week Countdown */}
            <section id="week-by-week-timeline" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; wikiHow Prep Timeline
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 3-Week Thanksgiving Cleaning Countdown
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Don’t leave everything until the night before Thanksgiving. Spreading tasks across three weeks keeps your preparation relaxed and joyful:
              </p>

              <div className="space-y-4 my-4">
                {/* 2-3 Weeks Out */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue font-black text-xs flex flex-col items-center justify-center shrink-0 mt-0.5">
                    <span>NOV</span>
                    <span className="text-sm leading-none font-bold">5–12</span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">Phase 1: Deep Structural Appliance &amp; Window Reset</h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1 pt-1 list-disc list-inside">
                      <li>Deep clean oven interior, burners, and range hood filters (eliminates smoke risks).</li>
                      <li>Clear refrigerator shelves and toss expired condiments to make room for a 20-lb turkey.</li>
                      <li>Wipe interior glass patio doors leading to your screened porch or pool deck.</li>
                    </ul>
                  </div>
                </div>

                {/* 1 Week Out */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 font-black text-xs flex flex-col items-center justify-center shrink-0 mt-0.5">
                    <span>NOV</span>
                    <span className="text-sm leading-none font-bold">16–21</span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">Phase 2: Whole-Home Professional Deep Clean</h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1 pt-1 list-disc list-inside">
                      <li>Have your cleaning team sanitize baseboards, ceiling fans, light fixtures, and doors.</li>
                      <li>Scrub and descale guest bathrooms and powder rooms (remove Lowcountry hard water crust).</li>
                      <li>HEPA vacuum all mattresses, area rugs, and upholstered dining chairs.</li>
                    </ul>
                  </div>
                </div>

                {/* 48 Hours Out */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-black text-xs flex flex-col items-center justify-center shrink-0 mt-0.5">
                    <span>NOV</span>
                    <span className="text-sm leading-none font-bold">23–25</span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">Phase 3: The 15-Minute Host Polish</h3>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-1 pt-1 list-disc list-inside">
                      <li>Set out fresh bathroom hand towels, luxury coastal soaps, and extra toilet paper rolls.</li>
                      <li>Empty all kitchen and bathroom wastebaskets into outdoor rollout bins.</li>
                      <li>Quick microfiber damp mop on high-traffic entryways and kitchen cooking zones.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Kitchen Deep Clean Focus */}
            <section id="kitchen-deep-clean-focus" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; Kitchen Masterclass
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The Kitchen Reset: Ovens, Fridges &amp; Range Hoods
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Your kitchen is ground zero for Thanksgiving. In Mount Pleasant’s chef-inspired kitchens, three appliances require special attention:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-600" />
                    Double Ovens &amp; Roaster Cavities
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Old grease deposits bake at 375°F–425°F, creating acrid smoke that triggers smoke detectors and gives your dressing or turkey an unpleasant burnt taste. Clean oven glass with baking soda paste and dish soap rather than caustic aerosol chemicals 24 hours before roasting.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <UtensilsCrossed className="w-4 h-4 text-star-blue" />
                    Range Hood Stainless Mesh Filters
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Frying onions, browning turkey neck, and simmering giblet gravy emit greasy steam. Pop stainless mesh filters out of your hood and soak them in boiling water and degreasing dish soap for 20 minutes so air draws cleanly outside.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Guest Suite & FROG Prep */}
            <section id="guest-suite-frog-prep" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; Guest Hospitality
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Guest Rooms &amp; FROGs (Finished Rooms Over Garage)
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Many Mount Pleasant homes—especially in <strong>Carolina Park, Park West, Belle Hall, and Dunes West</strong>—rely on a spacious FROG as the primary guest suite. Because FROGs sit above open garage spaces, they require specific attention:
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 my-4">
                <span className="font-bold text-amber-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  Airflow &amp; Temperature Balance
                </span>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  Turn the mini-split or upstairs AC unit on 48 hours prior to guest arrival. Check and change the air filter, vacuum baseboard dust, and inspect en-suite bathroom faucets for Lowcountry mineral scale. If your shower has glass doors, see our guide on{' '}
                  <Link href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc" className="text-star-blue font-bold hover:underline">
                    Removing Hard Water Stains &amp; Grout Scum
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 5: Screened Porches and Hardwoods */}
            <section id="screened-porches-outdoor" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; Outdoor Living
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Screened Porches &amp; Hardwood Floor Protection
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In South Carolina, Thanksgiving day temperatures often reach <strong>66°F to 72°F</strong> with blue skies. Your guests will gravitate toward your screened porch with sweet tea or wine.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Porch Furniture Damp-Wipe</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wipe outdoor wicker, wood, and cushion fabric with damp microfiber towels. Remove cobwebs and dust from porch ceiling fan blades before turning them on.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Coir Mats at Every Entrance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Place abrasive natural coir entry mats at front, back, and garage doors. Trapping coastal grit outside protects expensive polyurethane hardwood coatings from scratching.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Mount Pleasant FAQ */}
            <section id="neighborhood-faq" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Mount Pleasant Neighborhood FAQ
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Frequently Asked Questions for Mount Pleasant Homeowners
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    How far in advance should I book my Thanksgiving clean in Mount Pleasant?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Holiday weeks book completely full across the East Cooper area by the first week of November. We recommend reserving your date at least 2 to 3 weeks in advance. We have reserved dedicated Thanksgiving routes for 29464 and 29466 on our promo page.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Do you clean on Thanksgiving Day?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No. To honor our team and their families, Star Cleaning SC is closed on Thanksgiving Day. We clean aggressively the week prior (Nov 16–21) and Monday–Wednesday of Thanksgiving week (Nov 23–25), reopening Friday for post-holiday resets.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Are your cleaning supplies safe for pets and children?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes! We exclusively use non-toxic, pet-safe, and biodegradable products that leave your home smelling clean and fresh without irritating chemical aromas. See our guide on{' '}
                    <Link href="/blog/pet-friendly-house-cleaning-guide-charleston-sc" className="text-star-blue font-bold hover:underline">
                      Pet-Friendly Cleaning in Charleston SC
                    </Link>.
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
                <Link href="/blog/how-to-get-rid-of-musty-smell-house-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; How to Get Rid of Musty Humidity Smell in Charleston
                </Link>
                <Link href="/blog/pet-friendly-house-cleaning-guide-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Pet-Friendly House Cleaning: Shedding &amp; Beach Sand
                </Link>
                <Link href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Shower Glass Hard Water Stains &amp; Grout Cleaning
                </Link>
                <Link href="/blog/how-much-does-house-cleaning-cost-in-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; House Cleaning Cost in Charleston &amp; Mount Pleasant
                </Link>
              </div>
            </div>

            {/* Bottom Thanksgiving Promotion CTA */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Gift className="w-3.5 h-3.5 text-yellow-300" />
                Mount Pleasant Thanksgiving Special &bull; Code: THANKS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Get Your Mount Pleasant Home Guest-Ready with 20% OFF.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Enjoy your holiday without spending hours on your hands and knees scrubbing ovens and bathrooms. Star Cleaning SC delivers veteran-owned precision to Carolina Park, Park West, Dunes West, and Old Village.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/promo-quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-sm"
                >
                  Claim 20% Off Thanksgiving Clean <ArrowRight className="w-4 h-4" />
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
