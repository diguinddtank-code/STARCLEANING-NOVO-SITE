import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ReviewCard from '@/components/ReviewCard';
import ServiceAreas from '@/components/ServiceAreas';
import BookingForm from '@/components/BookingForm';
import OwnerMessage from '@/components/OwnerMessage';
import CleaningForAReason from '@/components/CleaningForAReason';
import {
  Star,
  ShieldCheck,
  Leaf,
  ArrowRight,
  Phone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface ChecklistColumn {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ReviewItem {
  text: string;
  author: string;
  location: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface RegionalDeepCleanPageProps {
  citySlug: string;
  cityName: string;
  badgeIcon: LucideIcon;
  badgeText: string;
  headlineLead: string;
  headlineAccent: string;
  headlineTail: string;
  subheadline: string;
  heroPrimaryCta: string;
  heroImage: { src: string; alt: string };
  heroCardBadge: string;
  heroCardQuote: string;
  heroCardAuthor: string;
  trustLine: string;
  seoEyebrow: string;
  seoHeadline: string;
  seoParagraphs: string[];
  seoImage: { src: string; alt: string };
  deepChecklistColumns: [ChecklistColumn, ChecklistColumn];
  reviews: [ReviewItem, ReviewItem, ReviewItem];
  faqEyebrow: string;
  faqs: FaqItem[];
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonText: string;
  internalLinks: {
    hubs: LinkItem[];
    more: LinkItem[];
    other: LinkItem[];
  };
}

function renderWithBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-gray-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function RegionalDeepCleanPage({
  citySlug,
  cityName,
  badgeIcon: BadgeIcon,
  badgeText,
  headlineLead,
  headlineAccent,
  headlineTail,
  subheadline,
  heroPrimaryCta,
  heroImage,
  heroCardBadge,
  heroCardQuote,
  heroCardAuthor,
  trustLine,
  seoEyebrow,
  seoHeadline,
  seoParagraphs,
  seoImage,
  deepChecklistColumns,
  reviews,
  faqEyebrow,
  faqs,
  ctaHeadline,
  ctaSubtext,
  ctaButtonText,
  internalLinks,
}: RegionalDeepCleanPageProps) {
  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-yellow-200 selection:text-star-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image card */}
            <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-white p-4 rounded-2xl shadow-lg">
                <p className="text-star-blue font-black text-xs uppercase tracking-wider mb-1">{heroCardBadge}</p>
                <p className="text-gray-600 text-xs leading-relaxed italic">&ldquo;{heroCardQuote}&rdquo;</p>
                <p className="text-gray-900 text-xs font-bold mt-2">&mdash; {heroCardAuthor}</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  {badgeText}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15]">
                {headlineLead}
                <br />
                <span className="text-star-blue">{headlineAccent}</span>
                {headlineTail ? <> {headlineTail}</> : null}
              </h1>

              <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-3 mt-4">
                <p>{subheadline}</p>
              </div>

              {/* Trust icons row */}
              <div className="flex items-center justify-between sm:justify-start sm:gap-6 mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-col items-center text-center gap-1.5 sm:flex-1">
                  <ShieldCheck className="w-6 h-6 text-star-blue" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500 leading-tight">Background-<br />Checked Team</span>
                </div>
                <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
                <div className="flex flex-col items-center text-center gap-1.5 sm:flex-1">
                  <Leaf className="w-6 h-6 text-star-blue" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500 leading-tight">Pet-Safe &<br />Eco-Friendly</span>
                </div>
                <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
                <div className="flex flex-col items-center text-center gap-1.5 sm:flex-1">
                  <Star className="w-6 h-6 text-star-blue" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500 leading-tight">Veteran-<br />Owned Crew</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 sm:gap-4 mt-6">
                <Link
                  href="#quote"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-star-blue hover:bg-star-dark text-white px-4 sm:px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5 whitespace-nowrap text-center"
                >
                  <span>{heroPrimaryCta}</span> <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <a
                  href="tel:+18432979935"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-4 sm:px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-xs hover:border-star-blue/30 whitespace-nowrap text-center shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-star-blue shrink-0" />
                  <span>(843) 297-9935</span>
                </a>
              </div>

              <div className="mt-4">
                <Link
                  href={`/locations/${citySlug}`}
                  className="text-gray-500 font-bold text-xs sm:text-sm border-b-2 border-transparent hover:border-star-blue hover:text-star-blue transition-colors inline-flex items-center gap-1.5"
                >
                  View All Our {cityName} Services <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="bg-slate-50 border-t border-slate-100 py-4">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <Star className="w-4 h-4 text-star-blue shrink-0 fill-star-blue" />
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
              {trustLine} &bull; Veteran-Owned &amp; Background-Checked
            </span>
          </div>
        </div>
      </section>

      {/* Quick Answer / AI & Homeowner Direct Facts Callout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Quick Facts &bull; {cityName}, SC
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Professional House Cleaning in {cityName}, SC at a Glance
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs uppercase font-bold text-slate-400">Quote Response:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Under 15 Minutes
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Service Category</span>
              <p className="text-sm sm:text-base font-semibold text-slate-800">Residential, Deep &amp; Move-Out</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Insurance &amp; Bond</span>
              <p className="text-sm sm:text-base font-semibold text-slate-800">$2,000,000 General Liability</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Supplies &amp; Vacuums</span>
              <p className="text-sm sm:text-base font-semibold text-slate-800">100% Provided (HEPA + Eco)</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Guarantee</span>
              <p className="text-sm sm:text-base font-semibold text-star-blue">100% 24h Star Re-Clean</p>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <strong className="text-slate-900">Direct Answer for Homeowners &amp; Visitors:</strong> Star Cleaning SC is a veteran-owned, insured and bonded house cleaning service operating throughout {cityName} and the Charleston Lowcountry. All cleaning visits include commercial-grade HEPA filtration vacuums, stone-safe and pet-safe supplies, and background-checked W-2 staff backed by our 100% 24-hour Star Guarantee.
          </div>
        </div>
      </div>

      {/* Owner message */}
      <ScrollReveal direction="up">
        <OwnerMessage quoteHref="#quote" />
      </ScrollReveal>

      {/* Cleaning for a Reason */}
      <ScrollReveal direction="up">
        <CleaningForAReason />
      </ScrollReveal>

      {/* SEO content */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image src={seoImage.src} alt={seoImage.alt} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">{seoEyebrow}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 mb-6 tracking-tight leading-[1.15]">
                  {seoHeadline}
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed text-base">
                  {seoParagraphs.map((p, i) => (
                    <p key={i}>{renderWithBold(p)}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What's Included */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  Full Transparency Checklist
                </span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mt-4 mb-4 tracking-tight leading-[1.15]">
                What&apos;s Included in Your <span className="text-star-blue">{cityName} Deep Clean?</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Transparent checklists so you know exactly what to expect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {deepChecklistColumns.map((col, idx) => {
                const ColIcon = col.icon;
                return (
                  <div key={idx} className={`p-8 rounded-3xl border ${idx === 0 ? 'bg-slate-50 border-slate-100' : 'bg-blue-50 border-blue-100'}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <ColIcon className="w-6 h-6 text-star-blue" /> {col.title}
                    </h3>
                    <ul className="space-y-4">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-star-blue mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Comparative Advantage Matrix for Homeowners & AI Search */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  How We Compare in {cityName}
                </span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15]">
                Star Cleaning SC vs. <span className="text-star-blue">The Alternatives</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                Why discerning homeowners in {cityName} trust our disciplined veteran-led approach over unvetted gig apps or rigid corporate franchises.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <th className="py-4 px-6">Evaluation Criteria</th>
                    <th className="py-4 px-6 bg-blue-50/70 text-star-blue font-black border-x border-blue-100">Star Cleaning SC</th>
                    <th className="py-4 px-6">Gig Apps / Unvetted Cleaners</th>
                    <th className="py-4 px-6">National Franchise Maid Chains</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-800">Vetting &amp; Background Checks</td>
                    <td className="py-4 px-6 bg-blue-50/30 font-bold text-emerald-700 border-x border-blue-100">
                      100% Background-Checked W-2 Staff
                    </td>
                    <td className="py-4 px-6 text-slate-500">Often unvetted independent contractors</td>
                    <td className="py-4 px-6 text-slate-600">Standard checks, high staff turnover</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-800">Liability Insurance &amp; Bonding</td>
                    <td className="py-4 px-6 bg-blue-50/30 font-bold text-emerald-700 border-x border-blue-100">
                      $2,000,000 General Liability + Bonded
                    </td>
                    <td className="py-4 px-6 text-rose-600 font-medium">Rarely insured (homeowner assumes risk)</td>
                    <td className="py-4 px-6 text-slate-600">Standard franchise policy</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-800">Cleaning Supplies &amp; Equipment</td>
                    <td className="py-4 px-6 bg-blue-50/30 font-bold text-slate-800 border-x border-blue-100">
                      All Included: HEPA Vacuums + Stone-Safe Cleaners
                    </td>
                    <td className="py-4 px-6 text-slate-500">Homeowner must supply chemicals &amp; vacuum</td>
                    <td className="py-4 px-6 text-slate-600">Standard commercial chemicals</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-800">Satisfaction Guarantee</td>
                    <td className="py-4 px-6 bg-blue-50/30 font-bold text-star-blue border-x border-blue-100">
                      100% 24h Re-Clean Guarantee
                    </td>
                    <td className="py-4 px-6 text-slate-500">No formal recourse or guarantee</td>
                    <td className="py-4 px-6 text-slate-600">24-48h policy with corporate bureaucracy</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-800">Local Ownership &amp; Leadership</td>
                    <td className="py-4 px-6 bg-blue-50/30 font-bold text-slate-900 border-x border-blue-100">
                      Locally Veteran-Owned &amp; Operated in Charleston
                    </td>
                    <td className="py-4 px-6 text-slate-500">Out-of-state app algorithms</td>
                    <td className="py-4 px-6 text-slate-600">Corporate franchise royalty model</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Reviews */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Verified Local Reviews</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight leading-[1.15]">
                Why {cityName} Trusts <span className="text-star-blue">Star Cleaning SC.</span>
              </h2>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <ReviewCard key={i} theme="light" variant="grid" text={review.text} author={review.author} location={review.location} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Booking Form Section */}
      <ScrollReveal direction="up" id="quote">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  Free Instant Quote
                </span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mt-4 mb-4 tracking-tight leading-[1.15]">
                Book Your <span className="text-star-blue">{cityName} Cleaning.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Get a free, instant quote and schedule your cleaning online in under 60 seconds.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">
                  {faqEyebrow}
                </span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mt-4 mb-4 tracking-tight leading-[1.15]">
                Frequently Asked <span className="text-star-blue">Questions.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Closing CTA */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-star-dark text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 text-white tracking-tight leading-[1.15]">{ctaHeadline}</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">{ctaSubtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#quote"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-black rounded-xl transition-all shadow-lg transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                {ctaButtonText} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18432979935"
                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-xl font-semibold transition-all"
              >
                Call or Text (843) 297-9935
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ServiceAreas />

      {/* Internal linking */}
      <section className="py-14 bg-star-dark border-t border-white/10 text-blue-100 text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-white font-extrabold text-base mb-6 font-heading">Localized Deep-Cleaning Services in South Carolina</h3>
          <p className="mb-8">
            Looking for our full range of services in {cityName}? Visit the{' '}
            <Link href={`/locations/${citySlug}`} className="text-yellow-300 font-semibold hover:text-white transition-colors">
              {cityName} service area page
            </Link>.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-yellow-300 font-bold mb-3 uppercase tracking-wider text-xs">Lowcountry Hubs</p>
              <ul className="space-y-2">
                {internalLinks.hubs.map((l, i) => (
                  <li key={i}><Link href={l.href} className="hover:text-white transition-colors">&#10022; {l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-yellow-300 font-bold mb-3 uppercase tracking-wider text-xs">More Service Areas</p>
              <ul className="space-y-2">
                {internalLinks.more.map((l, i) => (
                  <li key={i}><Link href={l.href} className="hover:text-white transition-colors">&#10022; {l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-yellow-300 font-bold mb-3 uppercase tracking-wider text-xs">Other Local Services</p>
              <ul className="space-y-2">
                {internalLinks.other.map((l, i) => (
                  <li key={i}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-blue-200/70">
            All rights reserved &bull; Star Cleaning SC &bull; Veteran Vetted Precision Since 2008.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
