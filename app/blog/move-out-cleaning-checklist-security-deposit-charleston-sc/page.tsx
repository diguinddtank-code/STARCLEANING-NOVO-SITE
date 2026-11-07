import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  HelpCircle, 
  Layers, 
  ShieldCheck, 
  Home, 
  DollarSign, 
  FileText,
  KeyRound,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Move Out Cleaning Checklist: Get 100% of Your Deposit Back in Charleston SC',
  description: 'Complete wikiHow-style move out cleaning guide for Charleston SC tenants & sellers. Guarantee your full security deposit refund in Downtown, Mount Pleasant, West Ashley & Summerville.',
  keywords: [
    'move out cleaning checklist charleston sc',
    'get security deposit back charleston sc',
    'move out cleaning mount pleasant sc',
    'charleston apartment turnover cleaning',
    'landlord deposit deduction cleaning charleston',
    'move in move out cleaning summerville sc',
    'cost of move out cleaning charleston'
  ],
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog/move-out-cleaning-checklist-security-deposit-charleston-sc',
  },
  openGraph: {
    title: 'Move Out Cleaning Checklist: Get 100% of Your Security Deposit Back in Charleston SC',
    description: 'Don\'t let landlords withhold $500+ for dirty baseboards or oven grease. Use our room-by-room move out inspection checklist to pass your walkthrough with flying colors.',
    url: 'https://www.starcleaningsc.com/blog/move-out-cleaning-checklist-security-deposit-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/move-out-cleaning-checklist-security-deposit-charleston-sc.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style editorial digital illustration showing a thorough move out cleaning inspection in a modern Lowcountry Charleston SC home or apartment',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-11-07T09:00:00.000Z',
    modifiedTime: '2026-11-07T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Move Out Cleaning Checklist: 100% Deposit Return (Charleston SC)',
    description: 'Room-by-room move out cleaning blueprint for Charleston SC renters & home sellers. Beat landlord inspection checklists and secure your deposit.',
    images: ['https://www.starcleaningsc.com/images/blog/move-out-cleaning-checklist-security-deposit-charleston-sc.jpg'],
  },
};

export default function MoveOutCleaningGuidePage() {
  const publishDate = 'November 7, 2026';
  const readTime = '8 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://www.starcleaningsc.com/blog/move-out-cleaning-checklist-security-deposit-charleston-sc#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline: 'Move Out Cleaning Checklist: How to Get 100% of Your Security Deposit Back in Charleston SC',
        description: 'Complete wikiHow-style move out cleaning guide for Charleston SC tenants & sellers. Guarantee your full security deposit refund in Downtown, Mount Pleasant, West Ashley & Summerville.',
        image: 'https://www.starcleaningsc.com/images/blog/move-out-cleaning-checklist-security-deposit-charleston-sc.jpg',
        datePublished: '2026-11-07T09:00:00.000Z',
        dateModified: '2026-11-07T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage: 'https://www.starcleaningsc.com/blog/move-out-cleaning-checklist-security-deposit-charleston-sc',
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
        '@id': 'https://www.starcleaningsc.com/blog/move-out-cleaning-checklist-security-deposit-charleston-sc#breadcrumb',
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
            name: 'Move Out Cleaning & Deposit Checklist',
            item: 'https://www.starcleaningsc.com/blog/move-out-cleaning-checklist-security-deposit-charleston-sc',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Pass a Move-Out Inspection in Charleston SC and Keep Your Deposit',
        description: 'A 4-step room-by-room move-out cleaning plan to meet Charleston property management turnover standards.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Deep Clean Inside Kitchen Appliances & Cabinet Interiors',
            text: 'Degrease the oven interior and glass door, clean out the refrigerator drawers and freezer, and vacuum/wipe crumb residue inside all kitchen cabinet shelving.',
          },
          {
            '@type': 'HowToStep',
            name: 'Remove Coastal Hard Water Scale from Shower Glass & Bath Grout',
            text: 'Dissolve calcium and soap scum buildup on clear shower glass doors and tile grout using non-toxic chelating cleansers so bathrooms pass bright-light inspections.',
          },
          {
            '@type': 'HowToStep',
            name: 'Hand-Wipe Baseboards, Window Blinds, and Door Frames',
            text: 'Dust and damp-wipe every slat of horizontal blinds, clean window tracks where coastal pluff mud collects, and wash scuff marks off painted baseboards.',
          },
          {
            '@type': 'HowToStep',
            name: 'Perform a Timestamped Final Photo/Video Walkthrough',
            text: 'Photograph inside the oven, refrigerator, tub, and across every floor after cleaning to establish indisputable legal evidence of pristine condition before returning keys.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a Charleston landlord legally charge for cleaning if I already cleaned?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under South Carolina Code § 27-40-410, landlords can only deduct from your security deposit for damages or unperformed cleaning explicitly required to return the unit to move-in condition (excluding normal wear and tear). If your lease requires "broom clean" or "professional cleaning receipt" and you provide timestamped photos and a legitimate professional cleaning invoice, they cannot legally charge arbitrary $300-$600 deduction fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a standard clean and a move-out clean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A standard recurring clean covers visible living surfaces (counters, exterior appliances, vacuuming, mopping). A professional move-out clean is a comprehensive empty-home reset that includes the interior of ovens, refrigerators, freezers, inside all cabinets and drawers, hand-washed baseboards, detailed blinds, and scrubbing tile grout.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does professional move out cleaning cost in Charleston SC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In the Charleston area, professional move-out cleaning typically ranges from $250 to $420 for a 1-2 bedroom apartment, and $450 to $850+ for a 3-5 bedroom single-family home depending on square footage, pet hair buildup, and oven condition. Star Cleaning SC provides exact, upfront pricing with zero hidden turnover fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Star Cleaning SC provide a receipt for my property manager?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Star Cleaning SC emails an itemized official PDF receipt and completion summary immediately upon finishing. Charleston property management companies and landlords accept our receipt as verified proof of professional turnover cleaning.',
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
            <span className="text-slate-800 font-medium truncate">Move Out Cleaning &amp; Deposit Guide</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
            <KeyRound className="w-3.5 h-3.5" />
            wikiHow Tenant &amp; Home Seller Guide &bull; Lowcountry Turnover
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            Move Out Cleaning Checklist: How to Get 100% of Your Security Deposit Back
            <span className="block text-star-blue mt-1">In Charleston, Mount Pleasant &amp; Summerville SC</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Moving is stressful enough without losing $500+ of your hard-earned deposit to nitpicky landlord deductions. Follow our proven room-by-room checklist to pass any Lowcountry property inspection.
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
              Downtown, West Ashley, Mount Pleasant &amp; Nexton
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/move-out-cleaning-checklist-security-deposit-charleston-sc.jpg"
              alt="wikiHow style editorial digital illustration showing a thorough move out cleaning inspection in a modern Lowcountry Charleston SC home or apartment"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — A detailed move-out clean focuses on high-deduction zones: inside ovens, empty cabinets, shower glass scale, and baseboards.
          </p>
        </div>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100 space-y-10">

            {/* AI & Tenant Direct Answer Callout */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-star-blue font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" />
                The Quick Summary for Tenants &amp; AI
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                To guarantee 100% of your security deposit is refunded in Charleston SC, you must address the <strong>four areas where property managers deduct 80% of fees</strong>: <strong>1) Inside kitchen appliances</strong> (degreased oven cavities, sparkling refrigerator crisper drawers); <strong>2) Inside empty cabinets &amp; drawers</strong> (crumb and hair-free); <strong>3) Descaled shower glass and grout</strong> (removing hard coastal mineral crust); and <strong>4) Detailed baseboards, blinds, and window sills</strong>. Always take timestamped photos of every room after the clean and provide an itemized professional cleaning invoice.
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
                  <a href="#why-tenants-lose-deposits" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 1. The Top 5 Reasons Charleston Landlords Deduct Deposits
                  </a>
                </li>
                <li>
                  <a href="#the-complete-room-by-room-checklist" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 2. The Complete Room-by-Room Move-Out Checklist
                  </a>
                </li>
                <li>
                  <a href="#diy-vs-professional-turnover" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 3. DIY vs. Hiring Professional Move-Out Cleaners
                  </a>
                </li>
                <li>
                  <a href="#south-carolina-tenant-rights" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 4. South Carolina Law: Wear &amp; Tear vs. Cleaning Fees
                  </a>
                </li>
                <li>
                  <a href="#move-out-inspection-hack" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 5. The Final Walkthrough Photo Hack
                  </a>
                </li>
                <li>
                  <a href="#move-out-faq" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 6. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Top Reasons Landlords Deduct Deposits */}
            <section id="why-tenants-lose-deposits" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Rental Reality
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The Top 5 Reasons Charleston Landlords Deduct Security Deposits
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you are renting an apartment in <strong>Downtown Charleston (CofC or MUSC area)</strong>, a townhome in <strong>West Ashley</strong>, or a single-family rental in <strong>Mount Pleasant or Summerville</strong>, property management companies use strict turnover checklists.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Here are the exact line items where tenants get hit with painful $250 to $600 penalty charges:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    1. Dirty Oven &amp; Stove Drip Pans ($100–$175 deduction)
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Property managers open the oven door first. Baked-on grease on the glass, burnt crumbs in the bottom heating element trench, or greasy range hood filters trigger an automatic appliance charge.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    2. Inside Refrigerator &amp; Freezer ($75–$150 deduction)
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Sticky syrup rings on door bins, frozen pea remnants in the freezer corners, or dust on top of the fridge are cited as failure to sanitize food storage.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    3. Hard Water Shower Door Scum ($100–$200 deduction)
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Charleston’s mineral-rich water creates a cloudy white calcium haze on frameless glass and tile grout. Landlords classify this as tenant neglect unless professionally descaled.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    4. Dusty Baseboards &amp; Window Blinds ($150–$250 deduction)
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Inspectors run a finger across the top of doors, horizontal faux-wood blinds, and closet baseboards. Finding pet fur or coastal dust creates an excuse to call in a commercial cleaning crew at your expense.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Complete Room-by-Room Checklist */}
            <section id="the-complete-room-by-room-checklist" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; wikiHow Move-Out Blueprint
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The Complete Room-by-Room Move-Out Cleaning Checklist
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Follow this sequential room-by-room checklist once all your furniture and moving boxes are loaded into the moving truck:
              </p>

              <div className="space-y-4 my-4">
                {/* Kitchen */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    1. Kitchen &amp; Pantry Checklist
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                    <li><strong>Oven &amp; Broiler:</strong> Degrease interior walls, racks, and inside/outside glass.</li>
                    <li><strong>Stovetop &amp; Hood:</strong> Clean burner grates, remove knobs to wipe grime, and wash stainless mesh filters.</li>
                    <li><strong>Refrigerator &amp; Freezer:</strong> Defrost ice, remove crisper bins to wash underneath, and wipe door gaskets.</li>
                    <li><strong>Dishwasher:</strong> Clear food trap filter at bottom and wipe clean the rubber door perimeter.</li>
                    <li><strong>Cabinets &amp; Drawers:</strong> Vacuum loose crumbs and wipe interior shelves with damp microfiber.</li>
                    <li><strong>Countertops &amp; Sink:</strong> Polish chrome faucet to remove hard water deposits and disinfect disposal baffle.</li>
                  </ul>
                </div>

                {/* Bathrooms */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    2. Bathrooms Checklist
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                    <li><strong>Shower Glass &amp; Tub:</strong> Descale mineral buildup and soap scum. (See our guide on{' '}
                      <Link href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc" className="text-star-blue font-bold hover:underline">
                        Removing Hard Water Stains &amp; Grout Scum
                      </Link>).
                    </li>
                    <li><strong>Tile Grout:</strong> Scrub dark mildew lines with oxygenated cleaners.</li>
                    <li><strong>Toilet:</strong> Disinfect porcelain bowl, seat hinges, base bolts, and tank exterior.</li>
                    <li><strong>Vanity &amp; Medicine Cabinet:</strong> Wipe hair out of drawers and polish mirrors streak-free.</li>
                    <li><strong>Exhaust Fan:</strong> Vacuum lint off ceiling vent grill to ensure quiet operation.</li>
                  </ul>
                </div>

                {/* Living Areas & Bedrooms */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    3. Bedrooms, Living Rooms &amp; Hallways
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                    <li><strong>Baseboards:</strong> Hand-wipe all painted trim to remove dust rings and shoe scuff marks.</li>
                    <li><strong>Blinds &amp; Window Sills:</strong> Dust both sides of blind slats and wipe dead bugs from window tracks.</li>
                    <li><strong>Doors &amp; Switch Plates:</strong> Wipe oily finger smudges around door handles and light switches.</li>
                    <li><strong>Ceiling Fans &amp; Lights:</strong> Dust fan blades and clean glass dome light covers.</li>
                    <li><strong>Closets:</strong> Vacuum closet floors and wipe down hanging rods and shelving.</li>
                  </ul>
                </div>

                {/* Floors */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    4. Hardwood, Tile &amp; Carpet Floors
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                    <li><strong>Hardwood &amp; LVP:</strong> Vacuum with soft-bristle bare-floor tool (no beater bar), then damp-microfiber mop with pH-neutral cleaner. (See our{' '}
                      <Link href="/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine" className="text-star-blue font-bold hover:underline">
                        Charleston Hardwood Floor Care Guide
                      </Link>).
                    </li>
                    <li><strong>Carpets:</strong> Deep vacuum room edges; if pet stains exist, professional steam extraction is mandatory to eliminate odor claims.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: DIY vs Professional Turnover */}
            <section id="diy-vs-professional-turnover" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; Cost-Benefit Analysis
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                DIY vs. Hiring a Professional Move-Out Cleaning Company
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Many tenants ask: <em>&quot;Should I spend 8 hours scrubbing an empty apartment myself or hire professional cleaners?&quot;</em> Here is the honest financial reality in Charleston:
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 my-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <DollarSign className="w-5 h-5 text-emerald-600 shrink-0" />
                  The Math of the Landlord Deductions
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Average security deposits in Charleston range from <strong>$1,800 to $3,500</strong>. When a tenant attempts DIY cleaning after an exhausting moving day, they almost always overlook the oven interior, window tracks, or bathroom scale. The property manager then hires their preferred emergency turnover crew at an inflated rate of $450 to $650, deducting it directly from your refund.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hiring a licensed, insured company like <strong>Star Cleaning SC</strong> costs less than typical landlord deduction fees, guarantees full compliance with the turnover checklist, and includes an official receipt that protects you legally.
                </p>
              </div>
            </section>

            {/* Section 4: South Carolina Law */}
            <section id="south-carolina-tenant-rights" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; SC Tenant Rights
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                South Carolina Law: Normal Wear &amp; Tear vs. Unfair Deductions
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Under the <strong>South Carolina Residential Landlord and Tenant Act (SC Code § 27-40-410)</strong>, your landlord has <strong>30 days</strong> to return your security deposit along with an itemized written explanation of any deductions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1">
                  <span className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Normal Wear &amp; Tear (NOT Deductible)
                  </span>
                  <ul className="text-xs text-emerald-950/80 space-y-1 pt-1 list-disc list-inside">
                    <li>Small nail holes from hanging pictures.</li>
                    <li>Faint carpet wear patterns in walking hallways.</li>
                    <li>Minor paint fading from sunlight.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    Cleanliness Neglect (Legally Deductible)
                  </span>
                  <ul className="text-xs text-red-950/80 space-y-1 pt-1 list-disc list-inside">
                    <li>Greasy, uncleaned oven cavity or stove burners.</li>
                    <li>Hard water encrusted shower glass and black grout.</li>
                    <li>Pet urine stains or pet odors trapped in carpets.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: The Final Walkthrough Photo Hack */}
            <section id="move-out-inspection-hack" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; The Inspection Hack
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 10-Minute Photo &amp; Video Walkthrough Hack
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Once the cleaning is complete and before handing over the keys:
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 my-4">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-star-blue" />
                  Your 3-Step Legal Insurance Policy
                </h3>
                <ol className="text-xs sm:text-sm text-slate-600 space-y-2 list-decimal list-inside">
                  <li><strong>Turn On All Overhead Lights:</strong> Walk through every room with your smartphone camera recording a continuous 2-minute video.</li>
                  <li><strong>Snap Close-Up Photos of High-Risk Zones:</strong> Inside the open oven, inside the refrigerator/freezer, inside empty bathroom vanities, and close-ups of shower glass.</li>
                  <li><strong>Send via Email Before Midnight:</strong> Email the photos along with your forwarding address and professional cleaning receipt to the property manager. Having timestamped proof prevents bogus claims before they begin.</li>
                </ol>
              </div>
            </section>

            {/* Section 6: FAQ */}
            <section id="move-out-faq" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Questions Charleston Renters &amp; Sellers Ask About Move-Out Cleans
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Should utilities (power and water) remain on during the move-out clean?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes, absolutely! Cleaning technicians require hot running water to dissolve grease and electricity for vacuuming and room lighting. Schedule utility shutoff for the day <em>after</em> the cleaning is completed.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    What if my landlord requires a specific cleaning company?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under SC law, landlords cannot force you to use an exclusive vendor unless it is explicitly written into your signed lease agreement. Any licensed, insured professional cleaning service that meets turnover standards and provides an itemized receipt fulfills lease obligations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Can Star Cleaning SC clean on the exact day I move out?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes! We frequently schedule same-day turnover services across Charleston, Mount Pleasant, and Summerville. Once the movers pack the final box, our team arrives to transform the empty space into a spotless, landlord-approved condition.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Guides Link Hub */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-8">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
                Explore More Charleston Home &amp; Moving Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <Link href="/services/move-in-move-out-cleaning" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Star Cleaning SC Move-In / Move-Out Service Details
                </Link>
                <Link href="/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; How to Clean Hardwood Floors in Charleston SC
                </Link>
                <Link href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Shower Glass Hard Water Scale &amp; Tile Grout Care
                </Link>
                <Link href="/blog/what-house-cleaners-will-not-clean-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; What Do House Cleaners NOT Clean?
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                100% Guaranteed Move-Out Clean &bull; Landlord Approved
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Secure Your Full Deposit Refund Without Lifting a Finger.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Focus on settling into your new home while our veteran-backed cleaning team handles every oven rack, baseboard, and shower door in Downtown, Mount Pleasant, West Ashley, or Summerville.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-sm"
                >
                  Get Instant Move-Out Quote <ArrowRight className="w-4 h-4" />
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
