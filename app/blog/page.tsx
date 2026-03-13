import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

const BlogIndex = () => {
  const posts = [
    {
      title: "The Ultimate Guide to Charleston Airbnb Cleaning for Hosts",
      slug: "charleston-airbnb-cleaning-guide",
      excerpt: "Maximize your 5-star reviews with our ultimate Charleston Airbnb cleaning guide. Learn how to tackle coastal sand, humidity, and rapid guest turnovers.",
      date: "January 15, 2026",
      category: "Local Guide"
    },
    {
      title: "How Much Does Move-Out Cleaning Cost in Summerville, SC?",
      slug: "move-out-cleaning-cost-summerville-sc",
      excerpt: "Wondering about move out cleaning cost in Summerville, SC? Get an honest breakdown of pricing, what's included, and why hiring professionals saves you money.",
      date: "February 10, 2026",
      category: "Cleaning Tips"
    },
    {
      title: "Deep Cleaning vs. Standard Cleaning: Which Does Your Home Need?",
      slug: "deep-cleaning-vs-standard-cleaning-north-charleston",
      excerpt: "Confused about deep cleaning vs standard cleaning? Learn the exact differences, what each service includes, and which one your North Charleston home really needs.",
      date: "March 5, 2026",
      category: "Cleaning Tips"
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-montserrat">
              Star Cleaning SC <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert cleaning tips, local guides, and advice for homeowners and property managers in Charleston and the Lowcountry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group mt-auto"
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
