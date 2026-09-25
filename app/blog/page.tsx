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
