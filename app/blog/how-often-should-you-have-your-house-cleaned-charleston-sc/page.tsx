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
  Calendar,
  Home,
  Users,
  Dog,
  DollarSign,
  HelpCircle,
  TrendingDown,
  Repeat,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: "How Often Should You Have Your House Cleaned? | Charleston, SC Guide",
  description: "Weekly, bi-weekly, or monthly? Step-by-step wikiHow-style guide to choosing the best house cleaning frequency for your home size, pets, budget, and Lowcountry climate.",
  alternates: {
    canonical: "https://www.starcleaningsc.com/blog/how-often-should-you-have-your-house-cleaned-charleston-sc",
  },
  openGraph: {
    title: "How Often Should You Have Your House Cleaned? Weekly vs. Bi-Weekly vs. Monthly | Star Cleaning SC",
    description: "Confused about how often professional cleaners should come? Discover the true differences in cost, cleanliness, and time saved between weekly, bi-weekly, and monthly maid service.",
    url: "https://www.starcleaningsc.com/blog/how-often-should-you-have-your-house-cleaned-charleston-sc",
    siteName: "Star Cleaning SC",
    images: [
      {
        url: "https://www.starcleaningsc.com/images/blog/how-often-should-you-have-your-house-cleaned.jpg",
        width: 1200,
        height: 675,
        alt: "A clean sunny Charleston living room with a recurring house cleaning schedule guide",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Often Should You Have Your House Cleaned? Lowcountry Guide",
    description: "Weekly vs. Bi-Weekly vs. Monthly: Learn which cleaning frequency fits your family, budget, and pets in Charleston & Summerville, SC.",
    images: ["https://www.starcleaningsc.com/images/blog/how-often-should-you-have-your-house-cleaned.jpg"],
  }
};

const BlogPostHowOftenHouseCleaned = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Often Should You Have Your House Cleaned? Weekly vs. Bi-Weekly vs. Monthly (Step-by-Step Guide)",
    "image": "https://www.starcleaningsc.com/images/blog/how-often-should-you-have-your-house-cleaned.jpg",
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
    "datePublished": "2026-10-03",
    "dateModified": "2026-10-03",
    "description": "A comprehensive wikiHow-style guide helping homeowners decide how often to have their house cleaned. Compares weekly, bi-weekly, and monthly cleaning schedules, pricing, and coastal climate challenges in Charleston, Summerville, and Mount Pleasant, SC.",
    "url": "https://www.starcleaningsc.com/blog/how-often-should-you-have-your-house-cleaned-charleston-sc",
    "mainEntityOfPage": "https://www.starcleaningsc.com/blog/how-often-should-you-have-your-house-cleaned-charleston-sc",
    "keywords": "how often should you have your house cleaned, weekly vs biweekly cleaning, is monthly house cleaning worth it, house cleaning schedule charleston sc, maid service frequency, recurring cleaning cost summerville sc",
    "articleSection": "Home Maintenance & Cleaning Frequency Guides"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.starcleaningsc.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "How Often to Have Your House Cleaned", "item": "https://www.starcleaningsc.com/blog/how-often-should-you-have-your-house-cleaned-charleston-sc" }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose the Right House Cleaning Frequency",
    "description": "A 5-step decision framework to determine whether weekly, bi-weekly, or monthly professional cleaning fits your lifestyle, home size, and budget.",
    "image": "https://www.starcleaningsc.com/images/blog/how-often-should-you-have-your-house-cleaned.jpg",
    "totalTime": "PT10M",
    "supply": [
      { "@type": "HowToSupply", "name": "Home square footage and room count" },
      { "@type": "HowToSupply", "name": "Monthly household maintenance budget" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Star Cleaning SC Instant Quote Calculator" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Step 1: Calculate Your Household Footprint & Foot Traffic",
        "text": "Count active residents, shedding pets, and weekly guest foot traffic to gauge how fast dust, dirt, and bathroom moisture accumulate.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Step 2: Factor in Charleston's Coastal Sand, Humidity & Pollen",
        "text": "Account for high humidity that promotes bathroom mildew and coastal quartz beach sand that abrades hardwood and luxury vinyl plank floors if left unvacuumed.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Step 3: Compare Schedules Side-by-Side (Weekly, Bi-Weekly, Monthly)",
        "text": "Evaluate the pros, cons, and maintenance levels of weekly (maximum free time), bi-weekly (the #1 balanced choice), and monthly (budget reset).",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Step 4: Understand the Cost & Time Trade-Off",
        "text": "Recognize why monthly cleaning costs more per single visit than bi-weekly cleaning due to heavy grime buildup, and factor in recurring frequency discounts.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Step 5: Start with an Initial Deep Clean to Reset Your Baseline",
        "text": "Book an initial comprehensive deep clean to scrub baseboards, grout, and appliances before transitioning to an effortless recurring maintenance cadence.",
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
        "name": "What is the most popular house cleaning frequency in Charleston & Summerville?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bi-weekly (every two weeks) is the most popular choice by far, chosen by approximately 78% of our recurring clients across Charleston, Summerville, Mount Pleasant, and Daniel Island. It strikes the perfect balance between keeping bathrooms, kitchens, and floors perpetually pristine without letting soap scum or pet dander accumulate."
        }
      },
      {
        "@type": "Question",
        "name": "Why does monthly cleaning cost more per visit than bi-weekly cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over 30 days, dust settles deeply, stove grease binds with airborne particles, bathroom soap scum solidifies on glass, and baseboards collect stubborn pet hair. Because a monthly clean requires almost twice as much physical labor, chemical dwell time, and detailing per visit, cleaning companies charge a higher per-clean rate than for bi-weekly maintenance visits."
        }
      },
      {
        "@type": "Question",
        "name": "Is bi-weekly cleaning often enough if I have shedding dogs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For homes with 1 or 2 pets, bi-weekly cleaning is usually sufficient as long as you do a quick 5-minute robot vacuum or broom sweep in high-traffic zones between visits. However, homes with 3+ shedding dogs, young toddlers crawling on floors, or severe seasonal allergies will see transformative benefits from a weekly schedule."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to get an initial deep clean before starting recurring cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we strongly recommend an initial deep clean for the first visit. This brings your entire home up to our 100% spotless baseline—scrubbing built-up mineral scale from showers, hand-wiping baseboards, degreasing stove hoods, and cleaning door frames. Once that baseline is established, recurring visits simply maintain perfection in much less time."
        }
      },
      {
        "@type": "Question",
        "name": "Can I switch frequencies or pause service if I go on vacation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! At Star Cleaning SC, there are zero contracts or lock-in agreements. You can easily switch between weekly, bi-weekly, or monthly, or pause your service with just 48 hours notice when traveling or during seasonal holidays."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I save with recurring cleaning discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recurring cleaning offers substantial savings compared to booking one-off one-time cleans. In the Charleston market, Star Cleaning SC offers up to 20% off for weekly service, 15% off for bi-weekly service, and 10% off for monthly service, providing consistent budgeting and guaranteed calendar booking priority."
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
              How Often Should You Have Your House Cleaned
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>wikiHow &amp; Decision Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 font-heading">
              How Often Should You Have Your House Cleaned? Weekly vs. Bi-Weekly vs. Monthly
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Wondering if you need a maid service every week, every other week, or just once a month? Here is the honest, step-by-step breakdown of cost, time saved, and dirt physics—so you can invest in the exact cleaning cadence your family actually needs.
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
                <span>October 3, 2026</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>8-Minute Read &amp; Schedule Calculator</span>
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
              src="/images/blog/how-often-should-you-have-your-house-cleaned.jpg"
              alt="wikiHow style editorial illustration showing a happy homeowner reviewing a recurring house cleaning schedule calendar in a sunlit Charleston living room"
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
                <a href="#dirt-physics" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>The Physics of Dirt: What Happens at 7, 14, and 30 Days</span>
                </a>
              </li>
              <li>
                <a href="#charleston-factors" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Lowcountry Climate Factors (Sand, Humidity &amp; Pets)</span>
                </a>
              </li>
              <li>
                <a href="#weekly-cleaning" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Weekly Cleaning: The Luxury &amp; Zero-Chore Standard</span>
                </a>
              </li>
              <li>
                <a href="#biweekly-cleaning" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Bi-Weekly Cleaning: Why 78% of Families Pick This</span>
                </a>
              </li>
              <li>
                <a href="#monthly-cleaning" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Monthly Cleaning: When It Works (and Why It Costs More/Clean)</span>
                </a>
              </li>
              <li>
                <a href="#cost-comparison" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>Comparison Matrix: Pricing, Discounts &amp; Inclusions</span>
                </a>
              </li>
              <li>
                <a href="#quiz-assessment" className="hover:text-star-blue transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-star-blue shrink-0" />
                  <span>60-Second Self-Assessment: Find Your Frequency</span>
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

          {/* Quick WikiHow Summary Card */}
          <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-950 mb-2 font-heading">
                  The Quick Rule of Thumb
                </h3>
                <p className="text-emerald-900/90 text-sm sm:text-base leading-relaxed mb-4">
                  If you want the short answer without reading the full science:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-extrabold text-emerald-900 block mb-1">Weekly (Best for)</span>
                    <p className="text-slate-600">Busy homes with 2+ kids, shedding dogs, high entertaining, or chronic allergies.</p>
                  </div>
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-extrabold text-emerald-900 block mb-1">Bi-Weekly (The Sweet Spot)</span>
                    <p className="text-slate-600">The #1 choice for 78% of households. Balances spotless maintenance with smart budgeting.</p>
                  </div>
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200">
                    <span className="font-extrabold text-emerald-900 block mb-1">Monthly (Best for)</span>
                    <p className="text-slate-600">Single professionals or retirees who travel frequently and keep up light chores weekly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: The Physics of Dirt */}
          <section id="dirt-physics" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">1</span>
              <span>The Physics of Dirt: What Happens at 7, 14, and 30 Days</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              When homeowners consider professional cleaning, they often focus solely on calendar convenience. But professional cleaners look at the <strong>chemistry of grime accumulation</strong>. How long grease, mineral scale, and dead skin cells sit on a surface dictates whether a surface can be wiped in seconds with neutral plant-based solutions—or requires aggressive acid dwell time and abrasive scrubbing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-star-blue text-xs font-bold uppercase">Day 1 to 7</span>
                  <h3 className="font-bold text-slate-900 text-base">The Free-Floating Dust Phase</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dust on baseboards, fan blades, and furniture consists of loose skin flakes, light pet hair, and airborne fibers. In bathrooms, soap residue is still soft. A quick microfiber wipe and vacuum picks up 95%+ of particles instantly without surface abrasion.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-xs font-bold uppercase">Day 8 to 14</span>
                  <h3 className="font-bold text-slate-900 text-base">The Bonding Phase (The Bi-Weekly Pivot)</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Charleston&rsquo;s high relative humidity (often 75%+) bonds floating dust to cooking oils and moisture. In the shower, water minerals begin to crystallize into calcium carbonate (limescale). Catching it at Day 14 dissolves the scale effortlessly before it etches glass pores or feeds black mold spores in grout.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-800 text-xs font-bold uppercase">Day 15 to 30+</span>
                  <h3 className="font-bold text-slate-900 text-base">The Hardened Calcification Phase</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Limescale calcifies into hard mineral deposits. Stove grease polymerizes into sticky yellow film that attracts hair and airborne dust. Grout begins harboring mildew beneath the surface. Cleaning this requires heavy degreasers, acidic descalers, and twice as much elbow grease.
                </p>
              </div>
            </div>

            <div className="bg-amber-50/80 border-l-4 border-amber-400 p-5 rounded-r-2xl mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900 leading-relaxed">
                  <strong>The Customer Trap:</strong> Many homeowners assume: <em>&ldquo;I&rsquo;ll just hire a cleaner once a month to save money.&rdquo;</em> But because a monthly clean takes nearly 50% to 75% more labor time to tackle hardened grime, the price per clean is substantially higher—and you spend the remaining 3 weeks living in progressively mounting clutter.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Lowcountry Climate Factors */}
          <section id="charleston-factors" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">2</span>
              <span>Why the Lowcountry Climate Demands Consistent Upkeep</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Cleaning a home in <Link href="/deep-cleaning-charleston-sc" className="text-star-blue font-semibold hover:underline">Historic Downtown Charleston</Link>, <Link href="/deep-cleaning-mount-pleasant-sc" className="text-star-blue font-semibold hover:underline">Mount Pleasant</Link>, or <Link href="/deep-cleaning-summerville-sc" className="text-star-blue font-semibold hover:underline">Summerville</Link> is distinct from cleaning a home in the dry Midwest or Mountain West. Three local environmental factors accelerate how often you need professional attention:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Micro-Abrasive Sand</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether you walk on Sullivan&rsquo;s Island or your dog plays in sandy Lowcountry topsoil, microscopic quartz crystals cling to footwear and paws. If left unvacuumed for over 10 days, everyday walking acts like 400-grit sandpaper, scratching expensive hardwood and luxury vinyl plank (LVP) coatings.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">70%+ Coastal Humidity</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Moisture in bathroom corners, window sills, and AC return registers creates a hospitable environment for mold and mildew. Regular bi-weekly sanitization with hospital-grade antimicrobial solutions starves mold spores before colonies take root in caulk or grout.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                  <Dog className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Subtropical Pet Shedding</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Because our winters are mild, dogs and cats shed year-round in the Lowcountry. Pet hair wraps around table legs and baseboards, carrying dander that taxes your HVAC filters and triggers nighttime congestion if not extracted routinely with HEPA filtration.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Weekly Cleaning */}
          <section id="weekly-cleaning" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">3</span>
              <span>Weekly Cleaning: The Luxury of Zero Chores</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Weekly cleaning is the ultimate standard for busy professionals, large families, and active hosts. With a weekly service, you virtually never have to clean a toilet, mop a floor, or scrub a stove again. Your house remains in a perpetual state of &ldquo;guest-ready&rdquo; perfection.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Who Weekly Cleaning is Best For:</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 mb-6">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-star-blue mt-2 shrink-0" />
                  <span><strong>Homes with multiple children and pets:</strong> Where muddy shoes, juice spills, and pet fur accumulate within 48 hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-star-blue mt-2 shrink-0" />
                  <span><strong>Dual-income executives &amp; medical professionals:</strong> Doctors at MUSC or executives who work 60+ hour weeks and want 100% of their weekends back.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-star-blue mt-2 shrink-0" />
                  <span><strong>Severe allergy &amp; asthma sufferers:</strong> Where weekly HEPA vacuuming and damp dusting eliminates allergens before symptoms flare.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-star-blue mt-2 shrink-0" />
                  <span><strong>Frequent entertainers:</strong> Homeowners who host dinners, family gatherings, or weekend social events.</span>
                </li>
              </ul>

              <div className="bg-blue-50/70 p-4 rounded-2xl flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-star-blue font-bold text-sm">
                  <TrendingDown className="w-4 h-4" />
                  <span>Maximum Savings: Up to 20% Discount per visit on recurring plans!</span>
                </div>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-star-blue hover:bg-blue-700 px-3.5 py-2 rounded-xl transition-all shadow-xs"
                >
                  <span>See Weekly Rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4: Bi-Weekly Cleaning */}
          <section id="biweekly-cleaning" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">4</span>
              <span>Bi-Weekly Cleaning: The Gold Standard (78% of Clients)</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              There is a clear reason why <strong>every other week (bi-weekly)</strong> is our most heavily booked service throughout <Link href="/deep-cleaning-summerville-sc" className="text-star-blue font-semibold hover:underline">Summerville</Link>, <Link href="/deep-cleaning-daniel-island-sc" className="text-star-blue font-semibold hover:underline">Daniel Island</Link>, and <Link href="/deep-cleaning-north-charleston-sc" className="text-star-blue font-semibold hover:underline">North Charleston</Link>.
            </p>

            <div className="bg-linear-to-br from-white to-blue-50/40 border border-blue-200/80 rounded-3xl p-6 sm:p-8 shadow-md mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                The Universal Sweet Spot
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                Why Every 14 Days Works Like Magic:
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Two weeks is the exact window before dirt transforms from &ldquo;easy dust&rdquo; into &ldquo;caked-on grime.&rdquo; On a bi-weekly rhythm:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Bathrooms Never Get Gross</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sinks, toilets, and shower glass are deep-scrubbed before hard water rings or soap scum create permanent etching.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Kitchen Stays Degreased</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cooktop splatters and cabinet handle oils are wiped down before airborne dust sticks and forms yellow gummy grease.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Floors Stay Protected</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All rugs and hard floors are vacuumed and damp-mopped, clearing abrasive grit before it damages your flooring finish.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Balanced Monthly Budget</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You get 15% off standard rates, creating predictable monthly household overhead that easily fits typical family budgets.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 italic">
                <strong>What you do between visits:</strong> Just load the dishwasher and take out full trash cans. The cleaners handle 100% of the scrubbing, dusting, vacuuming, and mopping every other week.
              </p>
            </div>
          </section>

          {/* Section 5: Monthly Cleaning */}
          <section id="monthly-cleaning" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">5</span>
              <span>Monthly Cleaning: When It Works (and What to Watch Out For)</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Monthly cleaning functions as a <strong>&ldquo;monthly hard reset.&rdquo;</strong> While it is less frequent, it still provides great value for specific households—provided you understand its limitations.
            </p>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-3 text-emerald-800 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>When Monthly Cleaning Works Great:</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Single occupants or couples with no children or pets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Homeowners who travel for work 2+ weeks every month.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Disciplined homeowners who don&rsquo;t mind doing light bathroom wipes and vacuuming on weekends in between.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Second homes or vacation properties in Mount Pleasant or Folly Beach.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
                  <h3 className="font-bold text-slate-900 text-base mb-3 text-rose-800 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>The Drawbacks of Monthly Service:</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>Higher per-visit cost:</strong> Cleaners must scrub 30 days of buildup, requiring significantly more labor time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>The Week 3 Slump:</strong> By week 3 and 4, soap scum, toilet rings, and floor crumbs return fully, requiring you to clean yourself anyway.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>Lower discount:</strong> Monthly plans receive 10% off vs. 15% (bi-weekly) or 20% (weekly).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Comparison Matrix */}
          <section id="cost-comparison" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">6</span>
              <span>Side-by-Side Comparison: Weekly vs. Bi-Weekly vs. Monthly</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Here is how the three main recurring options compare across cost, effort required from you, and home condition in the Charleston market:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-heading">
                    <th className="p-3.5 sm:p-4">Feature</th>
                    <th className="p-3.5 sm:p-4 text-blue-300">Weekly</th>
                    <th className="p-3.5 sm:p-4 text-emerald-300 bg-slate-800">Bi-Weekly (Most Popular)</th>
                    <th className="p-3.5 sm:p-4 text-slate-300">Monthly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Per-Visit Discount</td>
                    <td className="p-3.5 sm:p-4 text-star-blue font-bold">20% Off</td>
                    <td className="p-3.5 sm:p-4 text-emerald-600 font-bold bg-blue-50/30">15% Off</td>
                    <td className="p-3.5 sm:p-4 text-slate-600 font-bold">10% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Home Condition</td>
                    <td className="p-3.5 sm:p-4">100% Guest-Ready Always</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/30">Pristine 12 out of 14 days</td>
                    <td className="p-3.5 sm:p-4">Pristine 7 to 10 days</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Your Effort Between Cleans</td>
                    <td className="p-3.5 sm:p-4">Zero (Load dishwasher only)</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/30">Minimal (5-min floor sweep)</td>
                    <td className="p-3.5 sm:p-4">Moderate (Must wipe counters/toilets)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Pet Hair &amp; Dander</td>
                    <td className="p-3.5 sm:p-4">Virtually non-existent</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/30">Managed effectively</td>
                    <td className="p-3.5 sm:p-4">Can accumulate in corners</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Soap Scum &amp; Hard Water</td>
                    <td className="p-3.5 sm:p-4">Zero time to form</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/30">Wiped before calcifying</td>
                    <td className="p-3.5 sm:p-4">Requires heavy descaling</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">Best Home Size</td>
                    <td className="p-3.5 sm:p-4">Any size (Large 3,000+ sq ft ideal)</td>
                    <td className="p-3.5 sm:p-4 bg-blue-50/30">1,500 – 4,500 sq ft</td>
                    <td className="p-3.5 sm:p-4">&lt; 1,800 sq ft or low occupancy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 font-heading">
                  Want to Know Your Exact Home Price?
                </h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Get a transparent, flat-rate quote in under 60 seconds with your choice of weekly, bi-weekly, or monthly pricing. No sales calls or in-home visits required.
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

          {/* Section 7: 60-Second Quiz Assessment */}
          <section id="quiz-assessment" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-star-blue flex items-center justify-center text-sm font-bold">7</span>
              <span>60-Second Self-Assessment: Find Your Perfect Cadence</span>
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Answer these 4 simple lifestyle questions to tally your recommendation score:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Question 1: Who Lives in the Home?</span>
                <p className="text-sm font-semibold text-slate-800 mb-2">How many people and pets occupy the space?</p>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>1–2 adults, no pets, no young kids</span>
                    <span className="font-bold text-slate-900">Score: 1</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>Family with 1–2 kids OR 1 shedding pet</span>
                    <span className="font-bold text-slate-900">Score: 2</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>3+ family members + 2 or more shedding dogs/cats</span>
                    <span className="font-bold text-slate-900">Score: 3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Question 2: Cooking &amp; Kitchen Use</span>
                <p className="text-sm font-semibold text-slate-800 mb-2">How often do you cook meals at home?</p>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>Rarely cook (mostly takeout, salads, microwave)</span>
                    <span className="font-bold text-slate-900">Score: 1</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>Cook 3–5 nights per week (moderate grease &amp; dishes)</span>
                    <span className="font-bold text-slate-900">Score: 2</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>Cook daily with heavy sautéing, baking, or frying</span>
                    <span className="font-bold text-slate-900">Score: 3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Question 3: Free Time on Weekends</span>
                <p className="text-sm font-semibold text-slate-800 mb-2">How do you feel about spending 2 to 3 hours cleaning on Saturdays?</p>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>I don&rsquo;t mind doing light bathroom scrubbing and vacuuming</span>
                    <span className="font-bold text-slate-900">Score: 1</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>I want to spend weekends at the beach or with family, not scrubbing toilets</span>
                    <span className="font-bold text-slate-900">Score: 2</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                    <span>I despise cleaning and have zero free time during the week</span>
                    <span className="font-bold text-slate-900">Score: 3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Interpretation */}
            <div className="bg-linear-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Your Tally Recommendation:</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <span className="text-amber-300 font-extrabold block text-base mb-1">Score: 3 to 4 Points</span>
                  <strong className="block text-white mb-2">Monthly Service or As-Needed Deep Cleans</strong>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Your home experiences light traffic. A monthly deep maintenance clean or seasonal quarterly refresh will keep your home in great shape.
                  </p>
                </div>
                <div className="bg-white/15 p-4 rounded-2xl border border-emerald-400/30 backdrop-blur-xs">
                  <span className="text-emerald-300 font-extrabold block text-base mb-1">Score: 5 to 7 Points</span>
                  <strong className="block text-white mb-2">Bi-Weekly Service (Your Ideal Match!)</strong>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    You represent the classic Lowcountry household. Bi-weekly gives you optimal cleanliness, saves your weekends, and keeps monthly maintenance costs low.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <span className="text-blue-300 font-extrabold block text-base mb-1">Score: 8 to 9 Points</span>
                  <strong className="block text-white mb-2">Weekly Service (High Traffic Reset)</strong>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    With heavy cooking, shedding pets, and high activity, weekly cleaning is a life-saver that ensures your home never feels chaotic or overwhelmed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: The Initial Deep Clean Reset */}
          <section className="mb-14">
            <div className="bg-blue-50/60 border border-blue-200 rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-star-blue text-white flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    The Golden Rule: Start with an Initial Deep Clean
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    Regardless of whether you choose weekly, bi-weekly, or monthly cleaning, <strong>always begin with a comprehensive <Link href="/services/deep-cleaning" className="text-star-blue font-bold hover:underline">Deep Cleaning Service</Link></strong> on your very first visit.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    A deep clean tackles all existing backlog—eradicating months of built-up soap scum on shower tiles, hand-wiping dusty baseboards and door casings, detailing grease behind range hoods, and vacuuming behind couch cushions. Once your home is restored to showroom condition, your recurring maintenance visits take far less time and cost significantly less.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/blog/how-to-deep-clean-house-step-by-step-charleston-sc"
                      className="text-xs font-bold text-star-blue hover:underline flex items-center gap-1"
                    >
                      <span>Read our Step-by-Step Deep Cleaning Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: FAQ Accordions */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-star-blue" />
              <span>Frequently Asked Questions About Cleaning Frequency</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  What is the most popular house cleaning frequency in Charleston?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bi-weekly (every other week) is chosen by approximately 78% of our recurring clients across Charleston, Summerville, Mount Pleasant, and Daniel Island. It strikes the perfect balance between keeping bathrooms, kitchens, and floors perpetually clean without allowing dirt or soap scum to harden.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Why does monthly cleaning cost more per clean than bi-weekly?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Over 30 days, dust settles deeply into fabric fibers, stove grease polymerizes with airborne dust, bathroom soap scum hardens on glass, and baseboards collect stubborn pet dander. Because a monthly clean requires almost twice as much physical labor, chemical dwell time, and detailing per visit, cleaning companies charge a higher per-clean rate than for bi-weekly maintenance visits.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Is bi-weekly cleaning often enough if I have shedding dogs?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For homes with 1 or 2 pets, bi-weekly cleaning is usually sufficient as long as you do a quick robot vacuum or broom sweep in high-traffic zones between visits. However, homes with 3+ shedding dogs, young crawling toddlers, or severe pet allergies will see transformative benefits from a weekly schedule.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Do I need to sign a contract for recurring cleaning?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Never! At Star Cleaning SC, we believe in earning your business on every single visit. There are zero contracts or lock-in commitments. You can pause, reschedule, or cancel your recurring schedule anytime with simple 48 hours notice.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  Can I change my frequency later if my routine shifts?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yes, absolutely. Many of our clients start on a bi-weekly schedule, switch to weekly during heavy summer entertaining or pollen season, and then return to bi-weekly in the fall. Our customer support team can update your cadence with one quick text or email.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  What should I do before the cleaners arrive for their scheduled visit?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You don&rsquo;t need to scrub anything! Simply spend 10 minutes picking up floor clutter (shoes, toys, laundry) and clearing bathroom counters so our technicians can spend 100% of their time scrubbing and sanitizing. Read our detailed <Link href="/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc" className="text-star-blue font-bold hover:underline">Checklist on What to Do Before Cleaners Arrive</Link> for full details.
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
                href="/blog/how-much-does-house-cleaning-cost-in-charleston-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Pricing Guide</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  How Much Does House Cleaning Cost in Charleston, SC?
                </h4>
                <p className="text-xs text-slate-500">
                  Complete 2026 rates by square foot, flat-rate vs. hourly pitfalls, and savings.
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
                href="/blog/how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Bathroom Chemistry</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  How to Remove Hard Water Stains &amp; Grout Mildew
                </h4>
                <p className="text-xs text-slate-500">
                  Step-by-step chemical dwell times and restoration methods for coastal showers.
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
                href="/blog/first-recurring-clean-charleston-summerville-sc"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-star-blue hover:shadow-md transition-all group"
              >
                <span className="text-xs font-bold text-star-blue uppercase tracking-wider block mb-1">Service Expectations</span>
                <h4 className="font-bold text-slate-900 group-hover:text-star-blue transition-colors text-sm mb-1">
                  First Recurring Clean: What to Expect in Charleston &amp; Summerville
                </h4>
                <p className="text-xs text-slate-500">
                  How the first clean sets the baseline for ongoing maintenance.
                </p>
              </Link>
            </div>
          </div>

          {/* Final Call to Action Card */}
          <div className="relative overflow-hidden bg-linear-to-br from-star-blue via-blue-700 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <Star className="w-3.5 h-3.5 fill-star-gold text-star-gold" />
                <span>Star Cleaning SC Lowcountry Standard</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 font-heading tracking-tight">
                Ready to Reclaim Your Weekends?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
                Join hundreds of happy families in Charleston, Summerville, and Mount Pleasant who never worry about bathrooms, floors, or dusting again. Get an instant, customized flat-rate quote in under 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-star-gold hover:bg-yellow-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl transition-transform active:scale-95"
                >
                  <span>Reclaim Your Weekends</span>
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

export default BlogPostHowOftenHouseCleaned;
