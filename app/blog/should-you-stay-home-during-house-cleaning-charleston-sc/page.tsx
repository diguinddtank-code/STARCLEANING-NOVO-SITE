import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  AlertTriangle, 
  ListChecks, 
  Check, 
  ShieldCheck,
  HelpCircle,
  Calendar,
  Lock,
  Key,
  Laptop,
  HeartHandshake,
  Dog,
  DoorOpen,
  Home,
  XCircle,
  EyeOff,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Should You Stay Home During House Cleaning? 2026 Charleston Etiquette",
  description: "Wondering if you should stay home or leave while cleaners are there? Discover etiquette, WFH tips, smart-lock access, pet safety, and first-visit protocols in Charleston, SC.",
  alternates: {
    canonical: "https://www.starcleaningsc.com/blog/should-you-stay-home-during-house-cleaning-charleston-sc",
  },
  openGraph: {
    title: "Should You Stay Home During House Cleaning? Charleston Etiquette Guide | Star Cleaning SC",
    description: "Do you stay or leave when house cleaners come? Learn Charleston etiquette for initial walkthroughs, WFH office setup, pet management, and keyless entry.",
    url: "https://www.starcleaningsc.com/blog/should-you-stay-home-during-house-cleaning-charleston-sc",
    siteName: "Star Cleaning SC",
    images: [
      {
        url: "https://www.starcleaningsc.com/images/blog/should-you-stay-home-during-house-cleaning-charleston-sc.jpg",
        width: 1200,
        height: 675,
        alt: "A relaxed Charleston homeowner leaving with her dog while a professional cleaner smiles and works in the sunlit entryway",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Should You Stay Home or Leave When Cleaners Arrive? (2026 Guide)",
    description: "Complete Charleston etiquette guide: being home vs. leaving, working from home around cleaners, pet protocols, and smart lock entry.",
    images: ["https://www.starcleaningsc.com/images/blog/should-you-stay-home-during-house-cleaning-charleston-sc.jpg"],
  }
};

const BlogPostStayOrLeave = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Should You Stay Home During House Cleaning? The Charleston Homeowner Etiquette & Access Guide",
    "description": "Comprehensive guide for homeowners on whether to stay or leave during professional house cleaning, covering initial walkthroughs, WFH boundaries, pet safety, and smart lock access in Charleston, SC.",
    "image": "https://www.starcleaningsc.com/images/blog/should-you-stay-home-during-house-cleaning-charleston-sc.jpg",
    "author": {
      "@type": "Organization",
      "name": "Star Cleaning SC Editorial Team",
      "url": "https://www.starcleaningsc.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Star Cleaning SC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.starcleaningsc.com/images/logo.png"
      }
    },
    "datePublished": "2026-10-17",
    "dateModified": "2026-10-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.starcleaningsc.com/blog/should-you-stay-home-during-house-cleaning-charleston-sc"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.starcleaningsc.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.starcleaningsc.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Should You Stay Home During House Cleaning?",
        "item": "https://www.starcleaningsc.com/blog/should-you-stay-home-during-house-cleaning-charleston-sc"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Handle Being Home or Away During a Professional House Cleaning",
    "description": "A 5-step homeowner etiquette and logistical framework for seamless house cleaning appointments whether you stay, leave, or work from home.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Step 1: Greet Cleaners for the First-Visit Walkthrough",
        "text": "Be home for the first 5 to 10 minutes of your inaugural clean to greet the team, point out delicate surfaces, pet hideouts, and custom priorities."
      },
      {
        "@type": "HowToStep",
        "name": "Step 2: Choose Your Comfort Mode (Stay, Leave, or WFH)",
        "text": "Decide whether to run errands, stay in a dedicated room, or provide remote access via keypad or lockbox."
      },
      {
        "@type": "HowToStep",
        "name": "Step 3: Secure Pets and Designate Off-Limit Zones",
        "text": "Place pets safely in an enclosed bedroom, crate, or fenced backyard to prevent escapes and stress from vacuums."
      },
      {
        "@type": "HowToStep",
        "name": "Step 4: Establish Seamless Keyless Access for Recurring Visits",
        "text": "Provide a temporary keypad pin code, lockbox code, or garage code so vetted teams can enter without you needing to take time off work."
      },
      {
        "@type": "HowToStep",
        "name": "Step 5: Inspect and Leave Feedback Without Awkward Hovering",
        "text": "Allow cleaners full room clearance while working, and do a quick joint walk-through or submit instant digital feedback after completion."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I have to be home when house cleaners arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While it is helpful to be home for the first 5 to 10 minutes of your first initial cleaning to show the team around and point out specific priorities, recurring cleans are almost always done while homeowners are at work, running errands, or enjoying the Lowcountry outdoors."
        }
      },
      {
        "@type": "Question",
        "name": "Is it rude or awkward to stay home while cleaners work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all, as long as you give cleaners space to work. Professional technicians are accustomed to homeowners working from home, relaxing in the garden, or reading in another room. The only etiquette misstep to avoid is 'shadowing' or hovering closely over technicians as they clean."
        }
      },
      {
        "@type": "Question",
        "name": "How does cleaning work if I work from home (WFH)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Working from home works very smoothly with communication. Simply let your cleaning crew know which room you are working in (and when you have Zoom calls). Professional teams will happily clean your home office first or last so you can swap rooms without interruption."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do with my dogs and cats during house cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keep dogs safely crated, in a secure fenced yard, or in a designated closed room until the team finishes main living areas. Cats should be placed in a quiet room with a closed door to prevent door-dashing when cleaners carry vacuums and caddies in and out."
        }
      },
      {
        "@type": "Question",
        "name": "How do cleaners get in if I leave the house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The vast majority of Charleston homeowners use digital keypad locks (Schlage, Yale, August), garage keypads, or realtor-style lockboxes. You can set up a unique, time-restricted service PIN that can be revoked or changed anytime."
        }
      },
      {
        "@type": "Question",
        "name": "Can I leave cash or valuables around if I'm not home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always secure cash, jewelry, confidential legal files, and prescription medications in drawers, safes, or locked cabinets. While professional companies like Star Cleaning SC carry full bonding, background checks, and general liability insurance, tucking away valuables protects both you and the technicians from misplacement misunderstandings."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />

      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-grow pt-24 pb-16">
        {/* Article Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex text-xs sm:text-sm text-slate-500 gap-2 items-center flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate">Should You Stay Home During Cleaning?</span>
          </nav>
        </div>

        {/* Hero Section */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              wikiHow-Style Etiquette Guide &bull; Updated October 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Should You Stay Home During House Cleaning? The Charleston Homeowner Etiquette Guide
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6">
              Feeling awkward about whether to leave, stay, or hide in your home office during a maid service? Here is everything you need to know about etiquette, WFH protocols, pet safety, and smart keyless access across the Lowcountry.
            </p>

            {/* Author / Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  SC
                </div>
                <span>By <strong>Star Cleaning Editorial Team</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>October 17, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified by Charleston Field Supervisors</span>
              </div>
            </div>
          </header>

          {/* Featured Cover Image (wikiHow Style) */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-10 bg-slate-100">
            <Image
              src="/images/blog/should-you-stay-home-during-house-cleaning-charleston-sc.jpg"
              alt="Homeowner stepping out for a walk with dog while professional house cleaner works in Charleston SC home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span>Step-by-Step Lowcountry Homeowner Etiquette</span>
            </div>
          </div>

          {/* Quick Answer Executive Summary Box */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200/80 rounded-2xl p-6 sm:p-7 mb-10 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-blue-600 text-white rounded-xl shadow-sm mt-0.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">The 30-Second Quick Answer</span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Do You Need to Be Home When Cleaners Come?</h2>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>No, you do not need to stay home.</strong> In fact, approximately <strong>75% to 80% of recurring house cleaning clients</strong> in Charleston, Mount Pleasant, and Summerville are not home during their appointments. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
              <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-blue-600" /> First Visit
                </p>
                <p className="text-slate-600 text-xs">Be home for the first 10 mins to greet team, show unique features, and hand off keys.</p>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <DoorOpen className="w-4 h-4 text-emerald-600" /> Recurring Cleans
                </p>
                <p className="text-slate-600 text-xs">Most homeowners leave for work, errands, or gym using keypad codes or lockboxes.</p>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-blue-100">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-purple-600" /> Working From Home
                </p>
                <p className="text-slate-600 text-xs">Completely fine! Just designate your office and team cleans around your schedule.</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="p-5 bg-white border border-slate-200 rounded-xl mb-10 shadow-xs">
            <p className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider text-slate-500">In This Etiquette Guide:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-600">
              <a href="#first-clean-rules" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 1. The First-Visit Rule: Greet, Guide, &amp; Go
              </a>
              <a href="#stay-vs-leave" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 2. Staying Home vs. Leaving: Pros &amp; Cons
              </a>
              <a href="#wfh-protocol" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 3. Working from Home Etiquette (The Zoom Rule)
              </a>
              <a href="#pet-safety" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 4. What to Do with Dogs &amp; Cats
              </a>
              <a href="#keyless-entry" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 5. Secure Keypad &amp; Lockbox Best Practices
              </a>
              <a href="#hovering-mistake" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 6. The #1 Cleaning Mistake: The "Hovering Trap"
              </a>
              <a href="#comparison-table" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 7. Comparison Matrix: Home vs Away vs WFH
              </a>
              <a href="#faq" className="hover:underline flex items-center gap-1.5">
                <span>&bull;</span> 8. Frequently Asked Questions (FAQ)
              </a>
            </div>
          </div>

          {/* Section 1: First Clean */}
          <section id="first-clean-rules" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                The First-Visit Rule: Greet, Guide, &amp; Go
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              When booking your inaugural service—whether it is a <Link href="/blog/how-to-deep-clean-house-step-by-step-charleston-sc" className="text-blue-600 hover:underline font-medium">deep clean</Link> or the first visit of a bi-weekly schedule—you might wonder if you need to supervise the entire 3 to 4 hours.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The golden rule recommended by professional cleaning agencies is simple: <strong>Be there for the first 5 to 10 minutes, then feel completely free to go.</strong>
            </p>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs mb-6">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-blue-600" />
                Your 5-Minute Initial Walkthrough Checklist:
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Point out delicate surfaces:</strong> Show unsealed marble, handmade Moroccan tiles, antique hardwood, or acrylic showers that need gentle non-abrasive care.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Identify "Do Not Touch" or private zones:</strong> Let cleaners know if an upstairs guest room, primary closet, or art studio should remain closed off.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Share your personal pet peeves:</strong> Whether you care deeply about baseboard dusting, ceiling fan blades, or interior microwave grease, sharing this upfront lets the team tailor the checklist to your standard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Confirm exit and lock-up protocol:</strong> Tell the crew whether they should pull the front deadbolt, engage a smart keypad, or leave a key in a lockbox when leaving.</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Once this short orientation is done, experienced housekeepers thrive when given free rein to follow their efficient, top-to-bottom system without feeling in your way.
            </p>
          </section>

          {/* Section 2: Staying vs Leaving */}
          <section id="stay-vs-leave" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Staying Home vs. Leaving: Pros &amp; Cons
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Neither choice is right or wrong. Here is how both options look from both the homeowner&apos;s and cleaner&apos;s perspectives:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Leaving the House */}
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-lg">
                    <DoorOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Option A: Leaving the House (Most Popular)</h3>
                </div>
                <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wider mb-3">Why Cleaners Love It</p>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Faster cleaning times:</strong> Technicians can move uninterrupted, vacuum continuously, and let freshly mopped floors dry without footsteps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Zero awkward dance:</strong> No apologizing for vacuum noise or shifting between rooms to get out of each other&apos;s way.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>The &quot;Hotel Magic&quot; Effect:</strong> You leave a cluttered home and return to crisp vacuum lines, sparkling faucets, and fresh coastal air.</span>
                  </li>
                </ul>
              </div>

              {/* Staying Home */}
              <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <Home className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Option B: Staying at Home</h3>
                </div>
                <p className="text-xs text-blue-700 font-semibold uppercase tracking-wider mb-3">When It Makes Sense</p>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Immediate answers:</strong> If cleaners have a question about where new trash liners are or how an induction cooktop works, you are right there.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Elderly relatives or infants:</strong> If leaving isn&apos;t practical, keeping an adult or baby nap schedule coordinated is easy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Peace of mind:</strong> For clients new to professional cleaning, being present provides comfort until trust is firmly established.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: WFH Protocol */}
          <section id="wfh-protocol" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Working from Home Etiquette: The Zoom &amp; Vacuum Rule
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              With thousands of Charleston residents working remotely in technology, law, finance, and healthcare, WFH cleaning appointments have become the everyday norm. Here is the exact etiquette to keep both your workday and the cleaners productive:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl h-fit">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">1. The &quot;Swap Rooms&quot; Strategy</h3>
                  <p className="text-sm text-slate-600">
                    Ask the team to clean your office first thing when they arrive while you take a 30-minute coffee break or work from the kitchen counter. Once your office is pristine, retreat inside, shut the door, and let the team finish the rest of the home without disturbing you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl h-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">2. Communicate Loud Meeting Times in Advance</h3>
                  <p className="text-sm text-slate-600">
                    Have an important client presentation or Zoom call at 11:00 AM? Let the cleaners know when they arrive. They will happily switch to dusting bedrooms, wiping cabinets, or cleaning bathrooms during your call, saving high-decibel HEPA vacuuming for after your meeting ends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl h-fit">
                  <DoorOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">3. The Closed-Door Signal</h3>
                  <p className="text-sm text-slate-600">
                    Housekeepers understand that a closed interior door means privacy. If you don&apos;t want a specific bedroom or nursery touched that day, simply close the door or place a sticky note on the knob.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Pet Safety */}
          <section id="pet-safety" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                4
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                What to Do with Dogs &amp; Cats During Cleaning
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Charleston is one of the most dog-friendly cities in America, and our technicians love pets! However, pets can get stressed by unfamiliar sounds, and cleaning chemicals or open doors pose safety risks.
            </p>

            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Dog className="w-5 h-5 text-amber-700" />
                <h3 className="text-lg font-bold text-slate-900">Lowcountry Pet Safety Protocol:</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="bg-white p-4 rounded-xl border border-amber-100">
                  <p className="font-bold text-slate-900 mb-1">Dogs (High Energy / Guarding)</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even the gentlest retriever can get defensive when someone holds an upright vacuum near their bed. Secure dogs in a crate, a designated spare bedroom, or a fenced yard while technicians move through living spaces.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-amber-100">
                  <p className="font-bold text-slate-900 mb-1">Cats (Door Dashers &amp; Stress)</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cats frequently dart out open exterior doors when equipment is being brought inside. Keep cats in a bathroom or laundry room with water and litter, and mark the door so technicians know not to open it.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-800 bg-amber-100/60 p-3 rounded-lg">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span><strong>Pro-Tip:</strong> Before your clean, make sure you&apos;ve read our guide on <Link href="/blog/how-to-prepare-for-house-cleaners-checklist-charleston-sc" className="underline font-semibold hover:text-amber-950">how to prepare your home for cleaners</Link> to ensure pet toys and bowls are picked up.</span>
              </div>
            </div>
          </section>

          {/* Section 5: Keyless Entry */}
          <section id="keyless-entry" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                5
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Secure Keyless Entry: How Cleaners Get In When You Are Away
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you decide to leave the house during recurring cleans, you do not have to leave physical keys under doormats or flowerpots. Here are the most secure ways Charleston homeowners grant access:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-base">Dedicated Keypad PIN</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Smart locks like Schlage Encode, Yale Assure, or August allow you to create a unique 4-digit PIN for your cleaning service that only functions during your scheduled booking window.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-base">Realtor Lockbox</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Place a mechanical code lockbox on a side gate, hose spigot, or porch railing. You can rotate the combination anytime via your online customer portal.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                  <DoorOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-base">Garage Keypad Access</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide an exterior garage door code. The team enters through the laundry/mudroom entrance and securely locks the garage when packing up their supplies.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                <strong>Bonded &amp; Insured Peace of Mind:</strong> Reputable services like <strong>Star Cleaning SC</strong> conduct rigorous background checks, drug screenings, and carry $2,000,000 general liability insurance on every team member entering your home.
              </span>
            </div>
          </section>

          {/* Section 6: Hovering Mistake */}
          <section id="hovering-mistake" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                6
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                The #1 Etiquette Mistake: The &quot;Hovering Trap&quot;
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you do stay home, the single most important rule is: <strong>Avoid shadowing or standing over your cleaners.</strong>
            </p>

            <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Why Micromanaging Hurts Quality:</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Professional house cleaners follow an exact muscle-memory cadence (top-to-bottom, left-to-right, dry-before-wet). When a homeowner stands in the doorway watching, cleaners feel self-conscious, work slower, and may skip their natural sequence out of nervousness.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-red-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&times;</span>
                  <span>Don&apos;t follow them from room to room inspecting every surface mid-clean.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&check;</span>
                  <span>Do conduct a quick 3-minute walk-through when they announce they have finished.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Comparison Matrix */}
          <section id="comparison-table" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                7
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Comparison Matrix: Staying Home vs. Leaving vs. WFH
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Compare the three options side-by-side to choose the best strategy for your household schedule:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs mb-8 bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                  <tr>
                    <th className="py-3 px-4">Feature / Scenario</th>
                    <th className="py-3 px-4 text-emerald-700 bg-emerald-50/50">Leaving House (Away)</th>
                    <th className="py-3 px-4 text-blue-700 bg-blue-50/50">Staying Home (Relaxing)</th>
                    <th className="py-3 px-4 text-purple-700 bg-purple-50/50">Working from Home (WFH)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Efficiency &amp; Speed</td>
                    <td className="py-3 px-4 bg-emerald-50/30 font-medium text-emerald-800">Fastest (no delays)</td>
                    <td className="py-3 px-4 bg-blue-50/30">Moderate (shuffling rooms)</td>
                    <td className="py-3 px-4 bg-purple-50/30">Good (room-swap system)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Best For...</td>
                    <td className="py-3 px-4 bg-emerald-50/30">Recurring busy homeowners</td>
                    <td className="py-3 px-4 bg-blue-50/30">First-time cleans, seniors</td>
                    <td className="py-3 px-4 bg-purple-50/30">Remote tech &amp; legal pros</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Noise Factor</td>
                    <td className="py-3 px-4 bg-emerald-50/30">None (you are away)</td>
                    <td className="py-3 px-4 bg-blue-50/30">Low to Moderate</td>
                    <td className="py-3 px-4 bg-purple-50/30">Manageable with headphones</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Entry Method</td>
                    <td className="py-3 px-4 bg-emerald-50/30">Keypad, Lockbox, Smart App</td>
                    <td className="py-3 px-4 bg-blue-50/30">Homeowner unlocks door</td>
                    <td className="py-3 px-4 bg-purple-50/30">Homeowner unlocks door</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Floor Drying Experience</td>
                    <td className="py-3 px-4 bg-emerald-50/30 font-medium text-emerald-700">Dry before you get home</td>
                    <td className="py-3 px-4 bg-blue-50/30">Wait 15 mins before walking</td>
                    <td className="py-3 px-4 bg-purple-50/30">Confined to office during mopping</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cross-linking Related Reads Callout */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div className="text-xs sm:text-sm text-slate-700">
                Want to know what supplies professional maids bring versus what you should leave out?
              </div>
              <Link 
                href="/blog/do-house-cleaners-bring-their-own-supplies-charleston-sc"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shrink-0 self-start sm:self-auto"
              >
                <span>Read Supplies Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Section 8: FAQ */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                8
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Frequently Asked Questions (FAQ)
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Do I have to be home when house cleaners arrive?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No. While it is helpful to be home for the first 5 to 10 minutes of your first initial cleaning to show the team around and point out specific priorities, recurring cleans are almost always done while homeowners are at work, running errands, or enjoying the Lowcountry outdoors.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Is it rude or awkward to stay home while cleaners work?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Not at all, as long as you give cleaners space to work. Professional technicians are accustomed to homeowners working from home, relaxing on the back porch, or reading in another room. The only etiquette misstep to avoid is shadowing or hovering closely over technicians as they clean.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  How does cleaning work if I work from home (WFH)?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Working from home works very smoothly with communication. Simply let your cleaning crew know which room you are working in (and when you have Zoom calls). Professional teams will happily clean your home office first or last so you can swap rooms without interruption.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  What should I do with my dogs and cats during house cleaning?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Keep dogs safely crated, in a secure fenced yard, or in a designated closed room until the team finishes main living areas. Cats should be placed in a quiet room with a closed door to prevent door-dashing when cleaners carry vacuums and caddies in and out.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  How do cleaners get in if I leave the house?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The vast majority of Charleston homeowners use digital keypad locks (Schlage, Yale, August), garage keypads, or realtor-style lockboxes. You can set up a unique, time-restricted service PIN that can be revoked or changed anytime.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Can I leave cash or valuables around if I&apos;m not home?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Always secure cash, jewelry, confidential legal files, and prescription medications in drawers, safes, or locked cabinets. While professional companies like Star Cleaning SC carry full bonding, background checks, and general liability insurance, tucking away valuables protects both you and the technicians from misplacement misunderstandings.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Should I tip my house cleaners if I am not home to hand them cash?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes! You can leave cash in a clearly labeled envelope on the kitchen island, or add a tip through your online booking invoice. For complete tipping rates and seasonal etiquette, check out our <Link href="/blog/do-you-tip-house-cleaners-charleston-sc" className="text-blue-600 hover:underline font-medium">Charleston House Cleaner Tipping Guide</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Booking CTA Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-12 text-center sm:text-left relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wider uppercase mb-3 inline-block">
                Hassle-Free Cleaning in Charleston, SC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Experience the Joy of Coming Home to a Spotless House
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mb-6 leading-relaxed">
                Whether you stay home, work from your study, or enjoy a walk through downtown Charleston, our background-checked, insured cleaning professionals make keeping your home pristine effortless.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/book"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition text-center shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book Your Clean Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/residential-cleaning"
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-700/50 hover:bg-blue-700/80 text-white font-medium rounded-xl transition text-center border border-white/20"
                >
                  Explore Residential Cleaning
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles Hub */}
          <div className="border-t border-slate-200 pt-10">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Related Charleston Cleaning Guides:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link
                href="/blog/do-house-cleaners-bring-their-own-supplies-charleston-sc"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-600 mb-1">
                  Do House Cleaners Bring Supplies?
                </p>
                <p className="text-xs text-slate-500">What pros provide vs what you need to have ready.</p>
              </Link>
              <Link
                href="/blog/do-you-tip-house-cleaners-charleston-sc"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-600 mb-1">
                  House Cleaner Tipping Guide (2026)
                </p>
                <p className="text-xs text-slate-500">Average tip percentages and holiday bonus standards.</p>
              </Link>
              <Link
                href="/blog/how-much-does-house-cleaning-cost-in-charleston-sc"
                className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
              >
                <p className="font-semibold text-slate-900 group-hover:text-blue-600 mb-1">
                  2026 House Cleaning Cost Guide
                </p>
                <p className="text-xs text-slate-500">Price benchmarks across Mount Pleasant, Charleston &amp; Summerville.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostStayOrLeave;
