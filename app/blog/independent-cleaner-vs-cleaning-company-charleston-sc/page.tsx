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
  ShieldAlert, 
  Layers, 
  ShieldCheck,
  Scale,
  DollarSign,
  Users,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Independent Cleaner vs. Cleaning Company in Charleston SC: Cost & Risk Guide',
  description: 'Detailed comparison of hiring an independent private cleaner vs. an insured cleaning company in Charleston SC. Explore worker comp liability, costs, vetting, and reliability.',
  keywords: [
    'independent cleaner vs cleaning company',
    'hire private cleaner charleston sc',
    'cleaning company vs maid charleston',
    'house cleaner insurance south carolina',
    'cleaning service workers compensation sc',
    'how to vet house cleaners charleston',
    'maid service mount pleasant summerville sc'
  ],
  alternates: {
    canonical: 'https://www.starcleaningsc.com/blog/independent-cleaner-vs-cleaning-company-charleston-sc',
  },
  openGraph: {
    title: 'Independent Cleaner vs. Cleaning Company in Charleston SC: Cost, Risk & Insurance Guide',
    description: 'Thinking of hiring a private cleaner from Nextdoor or Facebook? Discover the legal liability, property damage risks, and reliability trade-offs for Charleston homeowners.',
    url: 'https://www.starcleaningsc.com/blog/independent-cleaner-vs-cleaning-company-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/blog/independent-cleaner-vs-cleaning-company-charleston-sc.jpg',
        width: 1200,
        height: 675,
        alt: 'wikiHow style comparison chart illustration of hiring an independent private cleaner versus a professional insured cleaning company in Charleston SC',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-10-24T09:00:00.000Z',
    modifiedTime: '2026-10-24T09:00:00.000Z',
    authors: ['Star Cleaning Operations Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Independent Cleaner vs. Cleaning Company (Charleston SC Guide)',
    description: 'Compare costs, legal liability, background checks, and reliability before hiring a cleaning service in the Lowcountry.',
    images: ['https://www.starcleaningsc.com/images/blog/independent-cleaner-vs-cleaning-company-charleston-sc.jpg'],
  },
};

export default function IndependentVsCompanyPage() {
  const publishDate = 'October 24, 2026';
  const readTime = '9 min read';

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': 'https://www.starcleaningsc.com/blog/independent-cleaner-vs-cleaning-company-charleston-sc#article',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.starcleaningsc.com/#website',
          name: 'Star Cleaning SC',
          url: 'https://www.starcleaningsc.com',
        },
        headline: 'Independent Cleaner vs. Cleaning Company in Charleston SC: Cost, Risk & Insurance Breakdown',
        description: 'Detailed comparison of hiring an independent private cleaner vs. an insured cleaning company in Charleston SC. Explore worker comp liability, costs, vetting, and reliability.',
        image: 'https://www.starcleaningsc.com/images/blog/independent-cleaner-vs-cleaning-company-charleston-sc.jpg',
        datePublished: '2026-10-24T09:00:00.000Z',
        dateModified: '2026-10-24T09:00:00.000Z',
        inLanguage: 'en-US',
        mainEntityOfPage: 'https://www.starcleaningsc.com/blog/independent-cleaner-vs-cleaning-company-charleston-sc',
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
        '@id': 'https://www.starcleaningsc.com/blog/independent-cleaner-vs-cleaning-company-charleston-sc#breadcrumb',
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
            name: 'Independent Cleaner vs. Cleaning Company',
            item: 'https://www.starcleaningsc.com/blog/independent-cleaner-vs-cleaning-company-charleston-sc',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Vet a House Cleaning Provider in South Carolina',
        description: 'A 4-step framework to verify insurance, liability protection, background checks, and pricing structure before handing over house keys in the Charleston area.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Request a Certificate of General Liability and Worker’s Compensation Insurance',
            text: 'Ensure the policy specifically covers accidental property damage (e.g., shattered shower glass or scratched hardwood) and covers technician slip-and-fall injuries so liability does not attach to your homeowner’s policy.',
          },
          {
            '@type': 'HowToStep',
            name: 'Clarify Employee Classification (W-2 vs. 1099 Gig Labor)',
            text: 'W-2 employees undergo payroll taxes, background checks, structured supervision, and standardized training. 1099 independent contractors cannot be legally supervised or trained by a broker.',
          },
          {
            '@type': 'HowToStep',
            name: 'Inspect Cleaning Equipment and Cross-Contamination Policies',
            text: 'Ask if the provider brings commercial-grade HEPA filtration vacuums and color-coded microfiber towels washed at 140°F, or if they drag dirty unmaintained vacuums between homes.',
          },
          {
            '@type': 'HowToStep',
            name: 'Ask About the Backup Plan for Sickness and Vacations',
            text: 'Verify whether the provider has trained backup staff to honor your scheduled cleaning date without cancellations when someone is ill.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What happens if an uninsured independent cleaner gets injured inside my Charleston home?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In South Carolina, if an independent cleaner slips on wet tile or falls down stairs and does not carry their own active Worker\'s Compensation policy, their medical bills and lost wages can be pursued directly against your personal homeowner\'s insurance policy, leading to costly deductibles and policy rate spikes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are independent cleaners always cheaper than a professional cleaning company?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Initially, private cleaners may quote $25 to $35 per hour under the table. However, because they charge hourly rather than flat rates, a 4-hour clean can expand to 6 hours ($150-$210). Additionally, private cleaners rarely provide commercial cleaning chemicals, commercial HEPA vacuums, or liability insurance, meaning you absorb the overhead costs and risk.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I have household employer tax liability if I hire a regular private cleaner?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'According to IRS guidelines, if you pay an individual domestic worker over the annual statutory threshold and dictate their schedule, supplies, and methods, you may be considered a household employer responsible for paying FICA and unemployment taxes (often referred to as the Nanny Tax). Hiring an established company like Star Cleaning SC relieves you of all payroll and tax compliance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the biggest advantage of hiring a company like Star Cleaning SC over an individual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Guaranteed reliability, military-grade quality checklists, $2,000,000 liability insurance, and seamless continuity. When an independent cleaner gets sick or takes a family vacation, your home goes uncleaned. A professional company deploys background-checked, W-2 certified teams that always show up on your scheduled day.',
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
            <span className="text-slate-800 font-medium truncate">Independent Cleaner vs. Company</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-star-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            wikiHow Style Buyer Guide &bull; Lowcountry Homeowner Decision
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-5">
            Independent Cleaner vs. Cleaning Company in Charleston SC
            <span className="block text-star-blue mt-1">Cost, Risk, Insurance &amp; Reliability Breakdown</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Thinking of hiring a private cleaner from Nextdoor or Facebook? Discover the hidden legal liabilities, worker&apos;s comp exposure, property damage risks, and reliability differences before handing over your house keys.
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
              Mount Pleasant, Charleston Peninsula &amp; Summerville SC
            </span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <Image
              src="/images/blog/independent-cleaner-vs-cleaning-company-charleston-sc.jpg"
              alt="wikiHow style comparison chart illustration of hiring an independent private cleaner versus a professional insured cleaning company in Charleston SC"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2.5 italic">
            Fig. 1 — Weighing upfront hourly rates against legal liability, background checks, and reliability.
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
                Hiring an <strong>independent private cleaner</strong> offers an informal personal relationship and occasionally lower initial hourly quotes ($25–$35/hr cash). However, private cleaners usually carry <em>zero General Liability or Worker&apos;s Compensation insurance</em>, creating severe personal financial exposure for South Carolina homeowners if an injury or major property damage occurs. In contrast, an established <strong>veteran-owned cleaning company</strong> provides $2,000,000 commercial liability coverage, W-2 federal background checks, standardized HEPA commercial equipment, guaranteed backup teams when technicians are sick, and transparent flat-rate pricing without open-ended hourly fees.
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
                  <a href="#side-by-side" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 1. Side-by-Side Comparison Matrix
                  </a>
                </li>
                <li>
                  <a href="#insurance-liability" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 2. The South Carolina Injury &amp; Worker&apos;s Comp Trap
                  </a>
                </li>
                <li>
                  <a href="#property-damage" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 3. Protecting Historic Heart-Pine &amp; Coastal Finishes
                  </a>
                </li>
                <li>
                  <a href="#reliability-noshows" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 4. The "No-Show" Factor &amp; Vacation Delays
                  </a>
                </li>
                <li>
                  <a href="#equipment-crosscontamination" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 5. Equipment, HEPA Filters &amp; Pet Dander Cross-Contamination
                  </a>
                </li>
                <li>
                  <a href="#vetting-questions" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 6. 7 Vetting Questions to Ask Before Hiring
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="hover:text-star-blue hover:underline flex items-center gap-1.5">
                    &rarr; 7. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Comparison Matrix */}
            <section id="side-by-side" className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 1 &bull; Direct Comparison
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Side-by-Side Comparison: Independent Cleaner vs. Star Cleaning SC
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you live in a new-construction home in <strong>Summerville (Nexton or Cane Bay)</strong>, a family residence in <strong>Mount Pleasant (Carolina Park or Park West)</strong>, or a historic single downtown, here is how the two models compare:
              </p>

              {/* Responsive Comparison Table */}
              <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-semibold">
                    <tr>
                      <th className="p-3.5 sm:p-4">Feature / Consideration</th>
                      <th className="p-3.5 sm:p-4 bg-slate-800">Private Independent Cleaner</th>
                      <th className="p-3.5 sm:p-4 bg-star-blue">Star Cleaning SC (Company)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">General Liability Insurance</td>
                      <td className="p-3.5 sm:p-4 text-red-600 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" /> Rarely carried ($0 coverage)
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> $2,000,000 Commercial Policy
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Worker&apos;s Compensation</td>
                      <td className="p-3.5 sm:p-4 text-red-600 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" /> Homeowner absorbs slip/fall risk
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> 100% Covered by Company
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Staffing &amp; Background Checks</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">Unvetted word-of-mouth or self-attested</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> W-2 Certified, Drug-Screened &amp; Federal Checks
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Reliability &amp; Backup Staff</td>
                      <td className="p-3.5 sm:p-4 text-red-600 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" /> Cleanings canceled when cleaner is sick
                      </td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> Guaranteed backup crews; never skip a visit
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Supplies &amp; Vacuums Provided</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">You buy supplies or they bring home vacuum</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> Commercial HEPA vacuums &amp; non-toxic supplies
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Satisfaction Guarantee</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">Informal; awkward to ask for re-cleans</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> Formal 24-Hour Free Re-Clean Guarantee
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Payment &amp; Tax Compliance</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">Cash, Venmo, potential IRS nanny tax risk</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> Invoiced, Credit Cards, Apple Pay, 100% Tax Compliant
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Worker's Comp Trap */}
            <section id="insurance-liability" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 2 &bull; South Carolina Law
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The South Carolina Injury &amp; Worker&apos;s Comp Trap
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Most homeowners assume: <em>"If my private cleaner slips on a wet bathroom tile or falls carrying a vacuum down the stairs, their health insurance will cover it."</em>
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-3 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                  What Health Insurers Actually Do When a Cleaner Gets Hurt
                </div>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  When an injured individual goes to the ER at MUSC or Roper St. Francis in Charleston, the health insurer immediately asks: <em>"Did this injury happen while performing work on someone else&apos;s property?"</em>
                </p>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  Health insurance carriers have strict <strong>subrogation departments</strong>. If the worker was working as an independent contractor without Worker&apos;s Comp, the insurer will seek to recover tens of thousands of dollars in medical bills directly from your <strong>South Carolina Homeowner&apos;s Insurance policy</strong>.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At <strong>Star Cleaning SC</strong>, every cleaning technician is an insured W-2 employee protected under our comprehensive commercial general liability and statutory South Carolina worker&apos;s compensation insurance. You enjoy 100% peace of mind knowing you are insulated from medical liability.
              </p>
            </section>

            {/* Section 3: Property Damage */}
            <section id="property-damage" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 3 &bull; Delicate Surfaces
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Protecting Historic Heart-Pine, Marble &amp; Coastal Finishes
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Charleston homes feature unique architectural finishes rarely found in standard tract housing. In <strong>South of Broad, the French Quarter, and Mount Pleasant Old Village</strong>, antique heart-pine floors and hand-poured plaster walls are irreplaceable.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200 space-y-2">
                  <span className="font-bold text-red-900 text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    Risks with Independent Cleaners
                  </span>
                  <p className="text-xs text-red-950/80 leading-relaxed">
                    Private cleaners often use generic store-bought acid-based sprays (like bleach or vinegar) on marble or quartz, etching cloudy rings into $15,000 countertops. If they break an antique mirror or strip heart-pine wax, a $30/hr cleaner cannot afford a $4,000 repair out of pocket.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                  <span className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    How Star Cleaning SC Protects You
                  </span>
                  <p className="text-xs text-emerald-950/80 leading-relaxed">
                    Our military-trained technicians are schooled in surface pH chemistry: non-acidic stone-safe formulas for Carrera marble and damp (never soaked) microfiber pads for historic hardwoods. Plus, our $2,000,000 commercial policy ensures your property is fully protected.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Reliability and No-Shows */}
            <section id="reliability-noshows" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 4 &bull; Scheduling
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                The "No-Show" Factor &amp; Vacation Delays
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Ask anyone who has hired an independent cleaner for more than six months: the number one frustration is <strong>unpredictable attendance</strong>.
              </p>
              <div className="space-y-3 my-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">With a Solo Cleaner:</strong>
                  If they catch the flu, have car trouble on I-26, or take a two-week summer beach vacation with their kids, your house simply does not get cleaned. If you are hosting a dinner party or out-of-town guests that weekend, you are left scrambling with a mop.
                </div>
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                  <strong className="text-star-blue block mb-1">With Star Cleaning SC:</strong>
                  We operate organized, synchronized cleaning teams. If a primary team member is sick, our backup technicians step in seamlessly following the exact same digital checklist and home notes. Your recurring cleaning schedule is 100% honored.
                </div>
              </div>
            </section>

            {/* Section 5: Equipment and Pet Dander */}
            <section id="equipment-crosscontamination" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 5 &bull; Hygiene Standards
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                Equipment, HEPA Filters &amp; Pet Dander Cross-Contamination
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Charleston is famous for high pet ownership. However, if your cleaner cleans three homes with heavy-shedding Labradors or cats and then brings that same household vacuum into your home in <strong>Daniel Island or West Ashley</strong>, what happens?
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 my-4">
                <h3 className="font-bold text-slate-900 text-sm">The Cross-Contamination Danger</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Domestic vacuums without sealed HEPA exhaust blast microscopic pet dander, flea eggs, and dust mites straight into your indoor air. Star Cleaning SC utilizes <strong>commercial-grade, sealed HEPA vacuum filtration</strong> that captures 99.97% of particles down to 0.3 microns, alongside sanitized, color-coded microfiber towels washed at 140°F between every home.
                </p>
              </div>
            </section>

            {/* Section 6: 7 Vetting Questions */}
            <section id="vetting-questions" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-star-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-6 h-px bg-star-blue"></span> Part 6 &bull; Homeowner Vetting
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight">
                7 Vetting Questions Every Charleston Homeowner Should Ask
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Before you hand over a house key, door code, or security alarm PIN, ask any prospective cleaning service these 7 critical questions:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"Can you email me a Certificate of General Liability and Worker’s Comp Insurance?"</h3>
                    <p className="text-xs text-slate-600 mt-1">If they hesitate or say "my personal auto/renters insurance covers it", stop immediately.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"Are your cleaners W-2 employees or 1099 independent contractors?"</h3>
                    <p className="text-xs text-slate-600 mt-1">W-2 employees undergo payroll taxes, structured training, and strict accountability.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"Do you perform nationwide background checks and drug screenings?"</h3>
                    <p className="text-xs text-slate-600 mt-1">You are inviting these individuals into private bedrooms, master closets, and around your family.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"What is your backup protocol if the cleaner assigned to my home is sick?"</h3>
                    <p className="text-xs text-slate-600 mt-1">Make sure you will not be stranded with an uncleaned house right before weekend hosting.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"Do you bring all equipment, or am I expected to supply vacuums and cleaners?"</h3>
                    <p className="text-xs text-slate-600 mt-1">Commercial equipment cleans far deeper than drugstore mops and grocery-store sprays.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"Is your pricing flat-rate or open-ended hourly?"</h3>
                    <p className="text-xs text-slate-600 mt-1">Flat-rate pricing protects you from cleaners moving slowly to pad their hours.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-star-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">"What happens if an area is missed or not cleaned to standard?"</h3>
                    <p className="text-xs text-slate-600 mt-1">Look for a formal 24-hour guarantee with a free prompt re-clean.</p>
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
                Questions Charleston Homeowners Ask Us
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    Why are independent cleaners often paid in cash or Venmo?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Private operators often work under the table to avoid payroll taxes, commercial insurance premiums, and business licensing fees. However, this lack of business infrastructure means you bear the liability if an injury, theft, or property damage takes place.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    How does Star Cleaning SC guarantee quality?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We use military-precision checklists developed over 18 years of operations. If any corner, baseboard, or appliance finish doesn&apos;t meet your complete satisfaction, simply notify us within 24 hours and our team will return to re-clean the area free of charge.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-star-blue shrink-0" />
                    What do cleaners not clean?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Check out our comprehensive guide on boundaries and exclusions:{' '}
                    <Link href="/blog/what-house-cleaners-will-not-clean-charleston-sc" className="text-star-blue font-bold hover:underline">
                      What Do House Cleaners NOT Clean? (Safety &amp; Exclusions Guide)
                    </Link>.
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
                <Link href="/blog/how-long-does-house-cleaning-take-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; How Long Does House Cleaning Take?
                </Link>
                <Link href="/blog/should-you-stay-home-during-house-cleaning-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; Should You Stay Home or Leave?
                </Link>
                <Link href="/blog/how-much-does-house-cleaning-cost-in-charleston-sc" className="text-star-blue hover:text-blue-900 flex items-center gap-1.5 font-medium">
                  &rarr; 2026 House Cleaning Cost Breakdown
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-star-dark to-slate-900 text-white text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                Veteran-Owned Discipline &bull; 100% Insured
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                Zero Risk. Total Accountability. 100% Guaranteed.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Experience military-precision house cleaning in Mount Pleasant, Charleston, Summerville, and Daniel Island. $2,000,000 insured, W-2 certified teams, and flat-rate pricing.
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
