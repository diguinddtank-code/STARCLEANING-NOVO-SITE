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
  Home,
  Droplets,
  Wind
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Clean Hardwood Floors in Charleston SC: Heart-Pine & Engineered Wood Care',
  description: 'Complete wikiHow-style Charleston homeowner guide to cleaning historic heart-pine, white oak, and engineered hardwood floors without water damage, cloudiness, or sand scratches.',
  keywords: [
    'how to clean hardwood floors charleston sc',
    'historic heart pine floor cleaning charleston',
    'clean engineered hardwood floors coastal sc',
    'hardwood floor cleaning mount pleasant',
    'remove beach sand scratches hardwood floors',
    'steam mop damage hardwood charleston',
    'best cleaner for charleston wood floors'
  ],
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine',
  },
  openGraph: {
    title: 'How to Clean Hardwood Floors in Charleston SC (Historic Heart-Pine & Engineered Wood)',
    description: 'Protect your valuable Lowcountry floors. Discover why steam mops and vinegar destroy Charleston hardwoods, and learn the 4-step coastal cleaning blueprint.',
    url: 'https://www.starcleaningsc.com/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style editorial digital illustration showing how to clean historic heart-pine and modern engineered hardwood floors in a Charleston SC Lowcountry home',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-11-06T09:00:00.000Z',
    modifiedTime: '2026-11-06T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Clean Hardwood Floors in Charleston SC (Heart-Pine Guide)',
    description: 'Avoid costly cupping, haze, and sand scratches. The definitive homeowner guide to cleaning Lowcountry hardwood floors safely.',
    images: ['https://www.starcleaningsc.com/images/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine.jpg'],
  },
};

export default function HardwoodFloorGuidePage() {
  const publishDate = 'November 6, 2026';
  const readTime = '8 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://www.starcleaningsc.com/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline: 'How to Clean Hardwood Floors in Charleston SC: Historic Heart-Pine & Engineered Wood Care',
        description: 'Complete wikiHow-style Charleston homeowner guide to cleaning historic heart-pine, white oak, and engineered hardwood floors without water damage, cloudiness, or sand scratches.',
        image: 'https://www.starcleaningsc.com/images/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine.jpg',
        datePublished: '2026-11-06T09:00:00.000Z',
        dateModified: '2026-11-06T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage: 'https://www.starcleaningsc.com/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine',
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
        '@id': 'https://www.starcleaningsc.com/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine#breadcrumb',
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
            name: 'Charleston Hardwood Floor Care Guide',
            item: 'https://www.starcleaningsc.com/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Clean Charleston Hardwood Floors Safely in 4 Steps',
        description: 'A 4-step framework to remove abrasive quartz sand, protect polyurethane finishes, and prevent humidity cupping on Lowcountry wood floors.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Dry Dust and Vacuum with a Soft Horsehair/Felt Brush Tool',
            text: 'Never use rotating beater bars on hardwoods. Use a soft floor tool with commercial sealed HEPA suction to gently lift sharp quartz sand and pluff mud grains without micro-scratching.',
          },
          {
            '@type': 'HowToStep',
            name: 'Mist with a pH-Neutral Hardwood Cleanser (Never Vinegar)',
            text: 'Acidic vinegar eats through protective polyurethane coatings, leaving a dull milky haze. Use a pH-neutral, water-based wood cleaner designed specifically for sealed hardwood.',
          },
          {
            '@type': 'HowToStep',
            name: 'Mop with a Flat Microfiber Damp Pad (Dry in Under 90 Seconds)',
            text: 'Never use dripping wet string mops or water buckets. A flat microfiber pad dampened with spray cleanser lifts grime without forcing standing water between floorboard seams.',
          },
          {
            '@type': 'HowToStep',
            name: 'Maintain Indoor Humidity Between 45% and 55%',
            text: 'Coastal humidity fluctuations cause historic heart-pine to expand and contract, causing board cupping and gaps. Run your AC on AUTO or use dehumidification to stabilize indoor climate.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I use a steam mop on hardwood floors in Charleston, SC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, absolutely never use steam mops on hardwood floors. Pressurized steam forces superheated moisture deep into microscopic cracks in the finish and between board joints. In Charleston\'s humid climate, this causes permanent wood warping, finish delamination, edge cupping, and cloudy white spots that require expensive floor sanding to repair.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why is cleaning historic heart-pine different from modern engineered wood?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Historic antique heart-pine (common in Downtown Charleston, South of Broad, and Old Village Mount Pleasant) is an irreplaceable slow-growth virgin timber with high resin content. Modern engineered hardwoods (common in Nexton, Cane Bay, and Carolina Park) have a thin genuine wood veneer over plywood or HDF. While heart-pine is vulnerable to harsh chemical stripping, engineered wood is extremely vulnerable to seam swelling if water puddles between planks. Both require pH-neutral damp-microfiber cleaning.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is diluted white vinegar safe for cleaning wood floors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Despite popular internet cleaning hacks, vinegar is acetic acid (pH 2.5). Repeated use slowly etches and dissolves the polyurethane or wax finish, stripping the protective shine and leaving floors dull, cloudy, and unprotected against foot traffic scratches.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Star Cleaning SC clean hardwood floors during recurring visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Star Cleaning SC protects Lowcountry hardwoods using commercial sealed HEPA canister vacuums equipped with natural horsehair floor brushes (zero abrasive plastic rollers), followed by precision microfiber flat damp-mopping using professional pH-neutral, non-toxic, pet-safe wood formulas that dry in under 90 seconds.',
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
            <span className="text-slate-800 font-medium truncate">Charleston Hardwood Floor Care</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            wikiHow Style Floor Care Guide &bull; Lowcountry Wood Care
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            How to Clean Hardwood Floors in Charleston SC
            <span className="block text-star-blue mt-1">Historic Heart-Pine, White Oak &amp; Coastal Humidity Care</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            From 200-year-old antique heart-pine in Downtown Charleston to modern wide-plank white oak in Mount Pleasant and Summerville, discover how to clean coastal wood floors without haze, scratches, or moisture warping.
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
              Charleston, Mount Pleasant, Daniel Island &amp; Summerville SC
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine.jpg"
              alt="wikiHow style editorial digital illustration showing how to clean historic heart-pine and modern engineered hardwood floors in a Charleston SC Lowcountry home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — Proper hardwood maintenance in coastal South Carolina: vacuuming without beater bars, pH-neutral spray, and flat microfiber damp-mopping that dries in under 90 seconds.
          </p>
        </div>

        {/* Article Body Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100 space-y-10">

            {/* AI & Homeowner Direct Answer Callout */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-star-blue font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" />
                The Quick Summary for Homeowners &amp; AI
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                To clean hardwood floors in Charleston SC without ruining the finish, follow three strict rules: <strong>1) Never use steam mops or soaking wet string mops</strong>, which force moisture between boards and cause cupping in 75%+ coastal humidity; <strong>2) Never use vinegar or oil-based soaps (like Murphy’s)</strong>, which etch polyurethane or leave a gummy dust-attracting haze; and <strong>3) Vacuum with a dedicated horsehair bare-floor tool (no spinning beater bar)</strong> before damp-mopping with a <strong>pH-neutral cleaner on flat microfiber</strong> that dries in under 90 seconds.
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
                  <a href="#the-charleston-hardwood-dilemma" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 1. The Charleston Hardwood Dilemma: Sand &amp; Humidity
                  </a>
                </li>
                <li>
                  <a href="#heart-pine-vs-engineered-wood" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 2. Historic Heart-Pine vs. Modern Engineered Wood
                  </a>
                </li>
                <li>
                  <a href="#the-3-deadly-cleaning-mistakes" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 3. The 3 Deadly Mistakes (Steam, Vinegar, Gummy Soaps)
                  </a>
                </li>
                <li>
                  <a href="#step-by-step-cleaning-protocol" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 4. Step-by-Step wikiHow Floor Cleaning Blueprint
                  </a>
                </li>
                <li>
                  <a href="#long-term-floor-protection" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 5. Preventing Sand Scratches in Mount Pleasant &amp; Islands
                  </a>
                </li>
                <li>
                  <a href="#hardwood-faq" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 6. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: The Charleston Hardwood Dilemma */}
            <section id="the-charleston-hardwood-dilemma" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Coastal Physics
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The Charleston Hardwood Dilemma: Quartz Sand &amp; Extreme Humidity
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Hardwood flooring in coastal South Carolina faces environmental stressors that homes in other regions never experience. The two primary enemies of your floors are:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <span className="font-bold text-amber-900 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    Microscopic Quartz Sand
                  </span>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    Whether you live on <strong>Sullivan&apos;s Island, Isle of Palms, James Island</strong>, or walk pets in <strong>Mount Pleasant&apos;s Waterfront Park</strong>, fine quartz sand tracks inside on shoes and dog paws. Quartz has a Mohs hardness rating of 7 (harder than glass). Dragging a wet string mop over unvacuumed sand is like rubbing 120-grit sandpaper over your clear coat.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <span className="font-bold text-blue-900 text-sm flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-700" />
                    70%+ Coastal Relative Humidity
                  </span>
                  <p className="text-xs text-blue-950/80 leading-relaxed">
                    Wood is hydroscopic—it absorbs moisture from the air and subfloor. During Charleston summers and humid falls, boards expand tightly. If you add puddles of standing water from a mop bucket, the edges of the boards absorb the liquid, swell upwards, and cause permanent <strong>&quot;cupping&quot;</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Heart-Pine vs. Engineered Wood */}
            <section id="heart-pine-vs-engineered-wood" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; Material Science
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Historic Heart-Pine vs. Modern Engineered Wood: Two Different Worlds
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Depending on your neighborhood, your floors require vastly different preservation methods:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Home className="w-4 h-4 text-star-blue" />
                    1. Antique Longleaf Heart-Pine (Downtown Charleston &amp; Historic Old Village)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cut from virgin longleaf pine forests centuries ago, heart-pine possesses exceptional hardness, amber grain, and natural resin. However, historic planks often feature wider tongue-and-groove gaps. Excess water sinks directly into subflooring or crawl spaces, generating musty mildew smells. See our guide on{' '}
                    <Link href="/blog/how-to-get-rid-of-musty-smell-house-charleston-sc" className="text-star-blue font-bold hover:underline">
                      How to Get Rid of Musty Humidity Smells in Charleston
                    </Link>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    2. Modern Engineered Hardwood (Carolina Park, Nexton, Cane Bay &amp; Park West)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Engineered floors consist of a 2mm–4mm real hardwood veneer bonded over cross-laminated plywood. While dimensionally stable against humidity, the micro-beveled seams between planks are vulnerable. If liquid sits on these micro-grooves, moisture penetrates the plywood core, causing irreversible edge swelling and white discoloration.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: The 3 Deadly Mistakes */}
            <section id="the-3-deadly-cleaning-mistakes" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; Damaging Habits
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The 3 Deadliest Hardwood Cleaning Mistakes Homeowners Make
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                If your wood floors look dull, streaky, or cloudy, one of these three common habits is almost always the cause:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    1. Steam Mops (The #1 Floor Destroyer)
                  </span>
                  <p className="text-xs sm:text-sm text-red-950/80 leading-relaxed">
                    Steam mops blast 212°F water vapor directly into wood pores under pressure. This dissolves adhesive in engineered wood, turns polyurethane cloudy white, and immediately voids manufacturer warranties. Never let a steam mop touch wood flooring.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    2. DIY Vinegar &amp; Water Solutions
                  </span>
                  <p className="text-xs sm:text-sm text-red-950/80 leading-relaxed">
                    Vinegar has an acidic pH of ~2.5. Acid gently etches away the protective polyurethane clear coat with every mopping session. Over 6 months, floors lose their natural luster and look perpetually dusty.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 space-y-1">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    3. Oil Soaps &amp; Wax Restorers (The &quot;Sticky Film&quot; Trap)
                  </span>
                  <p className="text-xs sm:text-sm text-red-950/80 leading-relaxed">
                    Heavy oil soaps leave a sticky residue that traps pluff mud and dog dander. When you walk barefoot, footprints appear instantly. Worse, when you eventually want to re-coat your floors, finish technicians cannot apply new polyurethane over the wax buildup.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Step-by-Step wikiHow Protocol */}
            <section id="step-by-step-cleaning-protocol" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; wikiHow Protocol
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Step-by-Step 4-Phase Protocol to Clean Wood Floors Like a Pro
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Here is the exact method Star Cleaning SC uses in million-dollar homes across Charleston, Mount Pleasant, and Daniel Island:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">Vacuum Dry Grit with a Soft Felt/Horsehair Head</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Always lift dry sand, pet fur, and grit before adding moisture. Use a canister vacuum with natural horsehair bristles or switch off the rotating beater bar on your upright vacuum to prevent plastic wheels from scratching the finish.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">Mist a pH-Neutral Cleaner Directly onto the Microfiber Pad</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Do not flood the floorboards with spray bottles. Lightly mist a clean, flat microfiber pad with a pH-neutral cleaner (pH 7.0). The pad should be barely damp—never dripping.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">Mop Following the Natural Wood Grain (Figure-8 Motion)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Glide the microfiber mop with the grain of the wood planks in an overlapping figure-8 pattern. This traps stubborn surface grime inside the microfiber loops instead of pushing dirty water into plank joints.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-star-blue font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-bold text-slate-900 text-base">The 90-Second Dry Check</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If your floors remain wet for longer than 90 seconds after mopping, you are using too much liquid. A properly cleaned hardwood floor should evaporate almost immediately, leaving zero water marks or slippery patches.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Long-Term Protection */}
            <section id="long-term-floor-protection" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; Preventative Maintenance
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Preventing Sand Scratches: The Lowcountry 3-Barrier Rule
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In beach communities like Mount Pleasant, Isle of Palms, and James Island, 90% of hardwood damage can be prevented before dirt enters the home:
              </p>

              <div className="grid sm:grid-cols-3 gap-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-star-blue shrink-0" />
                    Barrier 1: Exterior Coir Mat
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stiff natural coconut coir bristles scrape coarse marsh mud and wet beach sand off shoe treads.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    Barrier 2: Washable Indoor Runner
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Microfiber or cotton runners inside doorways absorb moisture and catch residual microscopic silt.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    Barrier 3: Felt Furniture Pads
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Apply heavy-duty adhesive felt pads to dining chairs, barstools, and coffee table legs to stop gouging.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: FAQ */}
            <section id="hardwood-faq" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Frequently Asked Questions
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Questions Charleston Homeowners Ask About Hardwood Floors
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    How often should hardwood floors be damp-mopped in Charleston?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dry vacuuming or dust mopping should happen 2–3 times a week to remove abrasive sand particles. However, damp-mopping should only be done every 1 to 2 weeks for regular living areas, and once a week for high-spill zones like the kitchen.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Can you remove water stains or cloudy white spots from hardwood?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cloudy white spots usually indicate trapped moisture in the surface wax or topcoat layer. Minor cloudiness can sometimes be resolved with light buffing and mineral spirits by a specialist. However, dark black stains mean water penetrated deep into the wood tannins, which requires professional board replacement or refinishing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Do you clean hardwood floors during holiday deep cleans?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Yes! Every recurring and deep clean by Star Cleaning SC includes our multi-stage hardwood floor protocol: soft-bristle HEPA vacuuming followed by flat microfiber damp-mopping. Take advantage of our{' '}
                    <Link href="/promo-quote" className="text-star-blue font-bold hover:underline">
                      20% OFF Thanksgiving Holiday Special
                    </Link>{' '}
                    to have your floors and home immaculate for guests.
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
                <Link href="/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Mount Pleasant Thanksgiving Cleaning Checklist
                </Link>
                <Link href="/blog/how-to-get-rid-of-musty-smell-house-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; How to Get Rid of Musty Humidity Smells in Charleston
                </Link>
                <Link href="/blog/pet-friendly-house-cleaning-guide-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Pet-Friendly House Cleaning: Dogs, Shedding &amp; Beach Sand
                </Link>
                <Link href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Shower Glass Hard Water Stains &amp; Tile Grout Care
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                Veteran-Owned Precision &bull; 100% Guaranteed
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Protect Your Lowcountry Hardwood Investment.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Enjoy gleaming, streak-free floors without lifting a finger. Star Cleaning SC delivers safe, museum-grade hardwood floor care and deep cleaning across Charleston, Mount Pleasant, and Summerville.
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
