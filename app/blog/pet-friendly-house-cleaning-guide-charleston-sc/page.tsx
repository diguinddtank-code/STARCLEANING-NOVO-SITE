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
  Heart,
  Dog,
  Wind,
  Home,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pet-Friendly House Cleaning: Dogs, Shedding & Sand (Charleston SC Guide)',
  description: 'Complete wikiHow-style Charleston pet owner guide: non-toxic pet-safe cleaners, managing heavy shedding and beach sand, door safety protocols, and where pets should stay during cleaning.',
  keywords: [
    'pet friendly house cleaning charleston sc',
    'dog friendly maid service mount pleasant',
    'pet safe cleaning products charleston',
    'cleaning pet hair shedding lowcountry',
    'maid service dog safety protocols',
    'house cleaners pet hair summerville sc',
    'safe floor cleaners for dogs paws'
  ],
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog/pet-friendly-house-cleaning-guide-charleston-sc',
  },
  openGraph: {
    title: 'Pet-Friendly House Cleaning: Dogs, Cats, Shedding & Marsh Sand in Charleston SC',
    description: 'Learn how to keep a spotless Charleston home with dogs or cats. Discover our non-toxic pet-safe chemistry, HEPA dander extraction, and door safety protocols.',
    url: 'https://www.starcleaningsc.com/blog/pet-friendly-house-cleaning-guide-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/pet-friendly-house-cleaning-guide-charleston-sc.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style editorial illustration showing pet-friendly professional house cleaning in a coastal Charleston SC home with a calm golden retriever dog',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-29T09:00:00.000Z',
    modifiedTime: '2026-10-29T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet-Friendly House Cleaning Guide (Charleston SC)',
    description: 'Non-toxic pet-safe cleaning products, shedding management, and door safety protocols for Charleston dog and cat owners.',
    images: ['https://www.starcleaningsc.com/images/blog/pet-friendly-house-cleaning-guide-charleston-sc.jpg'],
  },
};

export default function PetFriendlyCleaningPage() {
  const publishDate = 'October 29, 2026';
  const readTime = '8 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://www.starcleaningsc.com/blog/pet-friendly-house-cleaning-guide-charleston-sc#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline: 'Pet-Friendly House Cleaning: Dogs, Cats, Shedding & Marsh Sand in Charleston SC',
        description: 'Complete wikiHow-style Charleston pet owner guide: non-toxic pet-safe cleaners, managing heavy shedding and beach sand, door safety protocols, and where pets should stay during cleaning.',
        image: 'https://www.starcleaningsc.com/images/blog/pet-friendly-house-cleaning-guide-charleston-sc.jpg',
        datePublished: '2026-10-29T09:00:00.000Z',
        dateModified: '2026-10-29T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage: 'https://www.starcleaningsc.com/blog/pet-friendly-house-cleaning-guide-charleston-sc',
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
        '@id': 'https://www.starcleaningsc.com/blog/pet-friendly-house-cleaning-guide-charleston-sc#breadcrumb',
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
            name: 'Pet-Friendly House Cleaning Guide',
            item: 'https://www.starcleaningsc.com/blog/pet-friendly-house-cleaning-guide-charleston-sc',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Prepare Your Home and Pets for Professional Cleaners',
        description: 'A 4-step preparation framework for dog and cat owners to ensure technician safety, zero pet escapes, and maximum cleaning efficiency.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Designate a Safe, Secure Zone for Pets',
            text: 'Place nervous dogs or curious cats in a comfortable primary bedroom, laundry room, crate, or fenced backyard while technicians clean main living zones.',
          },
          {
            '@type': 'HowToStep',
            name: 'Pick Up Pet Toys, Chews, and Water Bowls',
            text: 'Clear pet bones, plush toys, and food bowls off the floor so technicians can vacuum and mop edge-to-edge without snagging equipment.',
          },
          {
            '@type': 'HowToStep',
            name: 'Leave Entry and Pet Personality Notes on Your Booking',
            text: 'Inform the crew of your pet’s name, temperament, and whether they tend to bolt toward open doors when entry thresholds are accessed.',
          },
          {
            '@type': 'HowToStep',
            name: 'Ensure Litter Boxes and Waste Are Handled',
            text: 'Scoop cat litter boxes and clear yard or patio pet waste prior to arrival, adhering to residential sanitary biohazard standards.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are your cleaning products 100% safe for dogs and cats to walk on and lick?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. At Star Cleaning SC, we use pH-neutral, non-toxic, and biodegradable plant-derived formulas free from toxic ammonia, concentrated bleach fumes, phthalates, and synthetic phenols. Once hard floors dry, there are zero caustic residues that could irritate sensitive paw pads or cause toxicity if ingested.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I have to lock my dog in a crate or leave the house during cleaning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, you do not need to leave your home or crate friendly pets. Many of our clients have gentle dogs that relax on their dog beds while we clean. However, if your pet is anxious around loud vacuum sounds, protective of their territory, or prone to darting out open doors, we recommend placing them in a secure bedroom or crate while that zone is being cleaned.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you remove stubborn pet hair from area rugs and upholstery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We utilize commercial-grade, multi-stage sealed HEPA filtration vacuums with motorized brush rolls and specialized rubberized pet hair attachments. Standard household vacuums often re-circulate microscopic dander into the air; our sealed HEPA units capture 99.97% of dander, hair, and dust down to 0.3 microns.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you prevent pets from escaping through open doors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our technicians follow strict threshold safety protocols: doors are never propped open unattended. Equipment is staged quickly and doors are immediately latched. We double-check all patio sliders and porch screens before and after service.',
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
            <span className="text-slate-800 font-medium truncate">Pet-Friendly House Cleaning Guide</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            wikiHow Style Pet Guide &bull; Charleston Lowcountry Living
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            Pet-Friendly House Cleaning in Charleston SC
            <span className="block text-star-blue mt-1">Dogs, Cats, Shedding, Sand &amp; Non-Toxic Safety</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Charleston is one of the most dog-loving cities in America. Here is how to maintain a pristine, odor-free home without putting your furry family members at risk from toxic chemicals or door escapes.
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
              Mount Pleasant, James Island &amp; Summerville SC
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/pet-friendly-house-cleaning-guide-charleston-sc.jpg"
              alt="wikiHow style editorial illustration showing pet-friendly professional house cleaning in a coastal Charleston SC home with a calm golden retriever dog"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — Non-toxic formulas, HEPA dander extraction, and door safety keep Charleston pets happy and healthy.
          </p>
        </div>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100 space-y-10">

            {/* AI & Homeowner Direct Answer Callout */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-star-blue font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" />
                The Quick Summary for Pet Parents &amp; AI
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                A truly <strong>pet-friendly house cleaning service</strong> in Charleston must meet three non-negotiable standards: <strong>1) Non-toxic, paw-safe chemistry</strong> (zero toxic ammonia, bleach fumes, or synthetic phenols that irritate paw pads and lungs); <strong>2) Commercial sealed HEPA vacuums</strong> to extract deep pet dander, flea eggs, and coastal sand without blowing allergens back into living areas; and <strong>3) Strict threshold security protocols</strong> so curious dogs or cats never slip out through front doors or patio sliders. At Star Cleaning SC, our veteran-owned teams love pets and follow strict safety routines across every Lowcountry neighborhood.
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
                  <a href="#pet-safe-chemistry" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 1. The 3 Rules of Pet-Safe Cleaning Chemistry
                  </a>
                </li>
                <li>
                  <a href="#lowcountry-mud-sand" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 2. The Lowcountry Reality: Sand, Pluff Mud &amp; Shedding
                  </a>
                </li>
                <li>
                  <a href="#where-pets-go" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 3. Where Should Pets Stay During Cleaning?
                  </a>
                </li>
                <li>
                  <a href="#hepa-dander" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 4. Why Sealed HEPA Vacuums Are Essential for Dander
                  </a>
                </li>
                <li>
                  <a href="#door-safety" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 5. Threshold &amp; Gate Safety: Preventing Escapes
                  </a>
                </li>
                <li>
                  <a href="#pet-prep-steps" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 6. Quick 4-Step Homeowner Pet Prep Checklist
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 7. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Pet-Safe Chemistry */}
            <section id="pet-safe-chemistry" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Chemical Safety
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 3 Rules of Pet-Safe Cleaning Chemistry
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Dogs and cats explore the world with their paws and noses. When hard floors are washed with harsh industrial disinfectants, chemical residues remain on tile or hardwood. When your pet grooms their paws later that evening, they ingest those residues.
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-emerald-900 text-sm">1. Zero Toxic Ammonia or Strong Bleach Fumes</h3>
                    <p className="text-xs sm:text-sm text-emerald-950/80 mt-1 leading-relaxed">
                      Ammonia fumes are heavier than air and settle near floor level where pets breathe. Furthermore, ammonia smells chemically similar to pet urine, which can actually trigger territorial marking in dogs. We use neutral plant-derived degreasers and gentle sanitizers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-emerald-900 text-sm">2. pH-Neutral Floor Cleaners</h3>
                    <p className="text-xs sm:text-sm text-emerald-950/80 mt-1 leading-relaxed">
                      Whether you have antique heart-pine in <strong>South of Broad</strong> or luxury vinyl plank (LVP) in <strong>Mount Pleasant (Carolina Park)</strong>, our pH-neutral floor solutions clean without leaving sticky, residue-attracting films that irritate pet paw pads.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-emerald-900 text-sm">3. Essential Oil Awareness</h3>
                    <p className="text-xs sm:text-sm text-emerald-950/80 mt-1 leading-relaxed">
                      Many "natural" homemade cleaners use tea tree oil, eucalyptus, or citrus oils that are highly toxic to cats and dogs. We use strictly EPA-registered, veterinary-conscious formulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Lowcountry Reality */}
            <section id="lowcountry-mud-sand" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; Local Climate &amp; Terrain
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The Lowcountry Reality: Beach Sand, Pluff Mud &amp; Heavy Shedding
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Living along the coastal waterways of <strong>James Island, Johns Island, and Mount Pleasant</strong> means your dog enjoys the best outdoor lifestyle: running off-leash at <strong>James Island County Park</strong> or splashing at Sullivan&apos;s Island. But bringing that lifestyle indoors creates three unique challenges:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Abrasive Fine Sand</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fine coastal quartz sand works like sandpaper under dog paws, grinding micro-scratches into hardwood and luxury vinyl plank floors unless removed with high-lift commercial vacuums before damp-mopping.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Sulfur Pluff Mud Odors</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lowcountry marsh mud contains organic coastal silt. In 70%+ humidity, dried mud dust trapped in rugs emits musty marsh odors. Deep HEPA extraction eliminates the organic source.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Year-Round Undercoat Blow</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Because Charleston winters are mild, double-coated breeds (Golden Retrievers, Labs, Aussies) shed constantly rather than in brief seasonal bursts.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Where Should Pets Stay */}
            <section id="where-pets-go" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; Etiquette &amp; Logistics
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Where Should Pets Stay While the Cleaning Crew is Inside?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                One of the most frequent questions from homeowners in <strong>Summerville (Nexton &amp; Cane Bay)</strong> and <strong>Daniel Island</strong> is: <em>"Do I have to lock my dog in a crate or take them to doggy daycare?"</em>
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                  <strong className="text-star-blue block mb-1 text-sm font-bold">Option A: Relaxing in the Home (Calm, Social Pets)</strong>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If your dog or cat is completely comfortable around new people and does not mind vacuum noises, they are welcome to relax in the home! Our technicians are animal lovers and will happily greet them with a calm, friendly voice.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1 text-sm font-bold">Option B: The "Safe Bedroom" Rotation (Timid or Vocal Pets)</strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your pet gets anxious around running vacuums or tends to bark protectively, place them in the primary bedroom or a guest room with their bed and water. We clean all main living spaces first, then coordinate swapping your pet into a freshly cleaned zone while we finish the bedroom.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1 text-sm font-bold">Option C: Fenced Yard or Porch (Mild Weather Days)</strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    During Charleston&apos;s beautiful spring and fall days, letting your dog hang out in a secure fenced backyard or screened porch is a great stress-free choice.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: HEPA Dander Extraction */}
            <section id="hepa-dander" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; Equipment Science
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Why Sealed Commercial HEPA Vacuums Are Essential for Dander
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Have you ever vacuumed a rug with a domestic retail vacuum, only to notice a distinct "warm dog smell" filling your living room?
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  The Domestic Vacuum Failure
                </div>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  Most consumer bagless vacuums have leaky casing seals. While they pick up visible hair clumps, their high-velocity exhaust motor blows microscopic pet dander (the protein <em>Can f 1</em> and <em>Fel d 1</em>) directly into the room air, settling onto dining tables, countertops, and curtains.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <strong>The Star Cleaning Standard:</strong> We utilize commercial-grade, sealed-body HEPA vacuums. Every exhaust path is sealed with rubber gaskets, trapping <strong>99.97% of dander, hair, and dust down to 0.3 microns</strong>. Your indoor air smells crisp, clean, and genuinely fresh after every visit.
              </p>
            </section>

            {/* Section 5: Threshold Safety */}
            <section id="door-safety" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; Door &amp; Gate Protocols
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Threshold &amp; Gate Protocols: Preventing Accidental Pet Escapes
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Every pet owner’s worst nightmare is a contractor or cleaner leaving the front door or side gate unlatched. Here is how our veteran-owned team prevents accidents:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Zero Propped Doors</h3>
                    <p className="text-xs text-slate-600 mt-1">Technicians bring in supply caddies and equipment in one coordinated step, immediately latching exterior doors behind them.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Strict Gate Check</h3>
                    <p className="text-xs text-slate-600 mt-1">If accessing backyard patios or trash bins, our crew performs a double-latch check on all fence gates before departing.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Pet Prep Checklist */}
            <section id="pet-prep-steps" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 6 &bull; Homeowner Prep
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Quick 4-Step Homeowner Pet Prep Checklist
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Follow this simple 5-minute routine on the morning of your cleaning to get the most pristine results:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-slate-900 text-sm block">Pick Up Chew Toys and Bones</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Toss squeaky toys, rawhides, and tennis balls into a basket so our vacuum heads can access 100% of the floor area.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-slate-900 text-sm block">Move Water Bowls Off Hardwoods</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Place pet water bowls in a laundry sink or dry counter so we can mop thoroughly without sloshing water under feeding mats.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-slate-900 text-sm block">Add Pet Notes to Your Booking</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Let us know: <em>"Cooper is a 45lb Lab, very sweet, will be napping in master closet."</em> Our crew loves knowing your pets by name!</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-slate-900 text-sm block">Remember the Biohazard Policy</strong>
                    <p className="text-xs text-slate-600 mt-0.5">Ensure litter boxes are scooped and any accidents are cleared. Per our <Link href="/blog/what-house-cleaners-will-not-clean-charleston-sc" className="text-star-blue font-bold hover:underline">Service Exclusions Policy</Link>, animal waste cannot be handled with residential cleaning equipment.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section id="faq-section" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Questions Charleston Pet Owners Frequently Ask
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Can you vacuum pet hair off my fabric sectional or sofa?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes! During deep cleans and recurring visits, we use specialized upholstery tools to vacuum pet hair from couch cushions and armrests. If you need extensive fur removal across multiple furniture pieces, just let us know when booking so extra time is scheduled.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    How do you manage fleas or ticks during coastal summer months?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    While we are not an extermination service, regular recurring HEPA vacuuming physically extracts flea larvae and eggs embedded in carpet fibers before they hatch. For active infestations, certified veterinary pest control is recommended before routine cleaning.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    What if my dog is timid or barks when new people arrive?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    It&apos;s totally normal! We recommend keeping your dog in a separate room for the first 10 minutes while our team arrives quietly with equipment. Once the crew is inside and settled, most dogs calm down quickly.
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
                <Link href="/blog/what-house-cleaners-will-not-clean-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; What Do House Cleaners NOT Clean?
                </Link>
                <Link href="/blog/independent-cleaner-vs-cleaning-company-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Independent Cleaner vs. Cleaning Company
                </Link>
                <Link href="/blog/how-often-should-you-have-your-house-cleaned-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; How Often Should You Clean? (Pet Frequency Guide)
                </Link>
                <Link href="/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; 15-Minute Pre-Cleaning Checklist
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Dog className="w-3.5 h-3.5 text-yellow-400" />
                Pet-Safe &bull; Veteran-Owned &bull; 100% Insured
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                A Spotless Home. Zero Harm to Your Furry Family.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Experience pet-safe, military-precision cleaning in Mount Pleasant, Charleston, Summerville, and Daniel Island. Non-toxic formulas, HEPA dander extraction, and 100% guaranteed.
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
