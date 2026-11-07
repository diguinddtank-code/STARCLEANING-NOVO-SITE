import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Tips & Local Guides Blog | Star Cleaning SC',
  description: 'Expert cleaning tips, local guides, and pricing breakdowns for homeowners and property managers in Charleston, Summerville, North Charleston, and the Lowcountry.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog',
  },
};

const BlogIndex = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.starcleaningsc.com/blog" }
    ]
  };
  const posts = [
    {
      title: "Move Out Cleaning Checklist: How to Get 100% of Your Security Deposit Back in Charleston SC",
      slug: "move-out-cleaning-checklist-security-deposit-charleston-sc",
      excerpt: "Room-by-room move out cleaning blueprint for Charleston renters & sellers. Don't lose $500+ of your security deposit to oven grease, shower scale, or dirty baseboards.",
      date: "November 7, 2026",
      category: "wikiHow & Move-Out Guide",
      image: "/images/blog/move-out-cleaning-checklist-security-deposit-charleston-sc.jpg"
    },
    {
      title: "How to Clean Hardwood Floors in Charleston SC: Historic Heart-Pine & Engineered Wood",
      slug: "how-to-clean-hardwood-floors-charleston-sc-heart-pine",
      excerpt: "Step-by-step wikiHow-style guide to cleaning Charleston wood floors without damage: removing abrasive coastal quartz sand, preventing humidity cupping, and why steam mops ruin polyurethane finishes.",
      date: "November 6, 2026",
      category: "wikiHow & Floor Care",
      image: "/images/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine.jpg"
    },
    {
      title: "Mount Pleasant SC Thanksgiving House Cleaning: The Lowcountry Host Checklist",
      slug: "mount-pleasant-sc-thanksgiving-house-cleaning-checklist",
      excerpt: "Room-by-room Thanksgiving preparation guide for Mount Pleasant homeowners. Deep clean double ovens, prep FROG guest suites, and get screened porches holiday-ready across Carolina Park, Park West, and Dunes West.",
      date: "November 2, 2026",
      category: "wikiHow & Holiday Guide",
      image: "/images/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist.jpg"
    },
    {
      title: "How to Get Rid of Musty Smell in a Charleston SC House: Humidity & Mildew Guide",
      slug: "how-to-get-rid-of-musty-smell-house-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to eliminating stubborn Lowcountry damp odors, crawl space vapors, and AC condensation mildew in Charleston, Mount Pleasant & Summerville SC.",
      date: "October 30, 2026",
      category: "wikiHow & Air Quality",
      image: "/images/blog/how-to-get-rid-of-musty-smell-house-charleston-sc.jpg"
    },
    {
      title: "Pet-Friendly House Cleaning: Dogs, Cats, Shedding & Marsh Sand in Charleston SC",
      slug: "pet-friendly-house-cleaning-guide-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide for Charleston pet owners: non-toxic paw-safe chemistry, managing heavy shedding and beach sand, door safety protocols, and where pets should stay during cleaning.",
      date: "October 29, 2026",
      category: "wikiHow & Pet Guide",
      image: "/images/blog/pet-friendly-house-cleaning-guide-charleston-sc.jpg"
    },
    {
      title: "Independent Cleaner vs. Cleaning Company in Charleston SC: Cost, Risk & Insurance",
      slug: "independent-cleaner-vs-cleaning-company-charleston-sc",
      excerpt: "Side-by-side comparison of private independent cleaners vs. an insured cleaning company in Charleston SC. Discover worker comp liability, property protection, vetting questions, and reliability trade-offs.",
      date: "October 24, 2026",
      category: "wikiHow & Buyer Guide",
      image: "/images/blog/independent-cleaner-vs-cleaning-company-charleston-sc.jpg"
    },
    {
      title: "What Do House Cleaners NOT Clean? Service Exclusions, Safety Limits & Add-Ons",
      slug: "what-house-cleaners-will-not-clean-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to what professional house cleaners will not clean: safety boundaries, OSHA height limits, biohazards, and optional add-on services in Charleston, SC.",
      date: "October 22, 2026",
      category: "wikiHow & Safety Guide",
      image: "/images/blog/what-house-cleaners-will-not-clean-charleston-sc.jpg"
    },
    {
      title: "How Long Does House Cleaning Take? Time Breakdown by Sq Footage & Clean Type",
      slug: "how-long-does-house-cleaning-take-charleston-sc",
      excerpt: "Step-by-step wikiHow-style breakdown of how long professional cleaning takes in Charleston, SC. Time charts by square footage, solo vs. 2-person crew speed, and standard vs. deep clean estimates.",
      date: "October 19, 2026",
      category: "wikiHow & Time Guide",
      image: "/images/blog/how-long-does-house-cleaning-take-charleston-sc.jpg"
    },
    {
      title: "Should You Stay Home During House Cleaning? The Charleston Homeowner Etiquette Guide",
      slug: "should-you-stay-home-during-house-cleaning-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide on whether to stay home or leave during a house cleaning. Learn WFH office etiquette, pet safety protocols, and keyless entry best practices in Charleston, SC.",
      date: "October 17, 2026",
      category: "wikiHow & Etiquette Guide",
      image: "/images/blog/should-you-stay-home-during-house-cleaning-charleston-sc.jpg"
    },
    {
      title: "Do House Cleaners Bring Their Own Supplies? What's Included vs. What You Provide",
      slug: "do-house-cleaners-bring-their-own-supplies-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to what cleaning supplies and equipment professionals bring. Discover commercial HEPA vacuums, the color-coded microfiber anti-contamination system, and what homeowners supply.",
      date: "October 16, 2026",
      category: "wikiHow & Equipment Guide",
      image: "/images/blog/do-house-cleaners-bring-their-own-supplies-charleston-sc.jpg"
    },
    {
      title: "Do You Tip House Cleaners? The 2026 Charleston Homeowner Etiquette & Tipping Guide",
      slug: "do-you-tip-house-cleaners-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to house cleaner tipping etiquette in Charleston, Summerville, and Mount Pleasant. How much to tip per cleaner, one-time vs. recurring, holiday bonuses, and non-cash alternatives.",
      date: "October 14, 2026",
      category: "wikiHow & Etiquette Guide",
      image: "/images/blog/do-you-tip-house-cleaners-charleston-sc.jpg"
    },
    {
      title: "How Much Does House Cleaning Cost in Charleston, SC? (2026 Pricing Breakdown)",
      slug: "how-much-does-house-cleaning-cost-in-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to house cleaning costs in Charleston, Summerville, and Mount Pleasant. Compare rates by square footage, flat-rate vs. hourly pitfalls, and learn how to save up to 20%.",
      date: "October 7, 2026",
      category: "wikiHow & Pricing Guide",
      image: "/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg"
    },
    {
      title: "How Often Should You Have Your House Cleaned? Weekly vs. Bi-Weekly vs. Monthly",
      slug: "how-often-should-you-have-your-house-cleaned-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to choosing the perfect house cleaning frequency. Learn the physics of dirt at 7, 14, and 30 days, cost differences, and take our 60-second schedule quiz for Charleston & Summerville.",
      date: "October 3, 2026",
      category: "wikiHow & Pro Guide",
      image: "/images/blog/how-often-should-you-have-your-house-cleaned.jpg"
    },
    {
      title: "How to Prepare Your House for Cleaners: The Step-by-Step Lowcountry Checklist",
      slug: "how-to-prepare-for-house-cleaners-checklist-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide on what to do before house cleaners arrive. Master the 10-minute clutter sweep, pet safety, entry access, bed linen etiquette, and tipping rules in Charleston & Summerville.",
      date: "October 2, 2026",
      category: "wikiHow & Pro Guide",
      image: "/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg"
    },
    {
      title: "How to Remove Hard Water Stains & Mildew from Shower Glass and Grout",
      slug: "how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to dissolving cloudy mineral scale on shower doors and eliminating black mold from tile grout. Master chemical dwell times, non-scratch pads, and hydrophobic sealants in Charleston & Summerville.",
      date: "September 30, 2026",
      category: "wikiHow & Pro Guide",
      image: "/images/blog/how-to-remove-hard-water-stains-shower-glass-grout.jpg"
    },
    {
      title: "How to Clean a House After Remodeling: The Step-by-Step Post-Construction Checklist",
      slug: "how-to-clean-house-after-construction-checklist-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to conquering drywall dust and paint overspray after home renovation. Master HEPA vacuuming, duct protection, and haze-free floor mopping in Charleston & Summerville.",
      date: "September 29, 2026",
      category: "wikiHow & Pro Guide",
      image: "/images/blog/how-to-clean-house-after-construction-checklist.jpg"
    },
    {
      title: "How to Clean a House Before Moving In: The Step-by-Step Move-In Checklist",
      slug: "how-to-clean-before-moving-in-checklist-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to deep cleaning an empty house before unpacking boxes. Master cabinet sanitization, appliance detailing, and baseboard cleaning in Charleston & Summerville.",
      date: "September 25, 2026",
      category: "wikiHow & Pro Guide",
      image: "/images/blog/how-to-clean-before-moving-in-checklist.jpg"
    },
    {
      title: "How to Deep Clean Your House Step-by-Step: The Ultimate Lowcountry Guide",
      slug: "how-to-deep-clean-house-step-by-step-charleston-sc",
      excerpt: "Step-by-step wikiHow-style guide to deep cleaning your house like a pro. Master the top-to-bottom rule, conquer coastal humidity grime, and get room-by-room checklists.",
      date: "September 24, 2026",
      category: "wikiHow & Pro Guide",
      image: "/images/blog/how-to-deep-clean-house-step-by-step.jpg"
    },
    {
      title: "First Recurring Clean: What to Expect in Charleston & Summerville, SC",
      slug: "first-recurring-clean-charleston-summerville-sc",
      excerpt: "Curious about what happens on your first recurring house clean? Learn why the initial deep clean sets the foundation for effortless maintenance in Charleston and Summerville.",
      date: "September 23, 2026",
      category: "Home Maintenance",
      image: "/images/blog/first-recurring-clean-charleston-summerville.jpg"
    },
    {
      title: "The Ultimate Guide to Charleston Airbnb Cleaning for Hosts",
      slug: "charleston-airbnb-cleaning-guide",
      excerpt: "Maximize your 5-star reviews with our ultimate Charleston Airbnb cleaning guide. Learn how to tackle coastal sand, humidity, and rapid guest turnovers.",
      date: "January 15, 2026",
      category: "Local Guide",
      image: "/images/blog/charleston-airbnb-cleaning-guide.jpg"
    },
    {
      title: "How Much Does Move-Out Cleaning Cost in Summerville, SC?",
      slug: "move-out-cleaning-cost-summerville-sc",
      excerpt: "Wondering about move out cleaning cost in Summerville, SC? Get an honest breakdown of pricing, what's included, and why hiring professionals saves you money.",
      date: "February 10, 2026",
      category: "Cleaning Tips",
      image: "/images/blog/move-out-cleaning-cost-summerville-sc.jpg"
    },
    {
      title: "Deep Cleaning vs. Standard Cleaning: Which Does Your Home Need?",
      slug: "deep-cleaning-vs-standard-cleaning-north-charleston",
      excerpt: "Confused about deep cleaning vs standard cleaning? Learn the exact differences, what each service includes, and which one your North Charleston home really needs.",
      date: "March 5, 2026",
      category: "Cleaning Tips",
      image: "/images/blog/deep-cleaning-vs-standard-cleaning-north-charleston.jpg"
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-star-blue"></span>
              <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Articles &amp; Guides</span>
              <span className="w-8 h-px bg-star-blue"></span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">
              Star Cleaning SC <span className="text-star-blue">Blog.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Expert cleaning tips, local guides, and advice for homeowners and property managers in Charleston and the Lowcountry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col group">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] w-full overflow-hidden block bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-6 sm:p-7 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto text-sm"
                  >
                    Read Article 
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
