import { Metadata } from 'next';
import HomeClient from './HomeClient';
import { homeReviews } from '@/data/reviews';

export const metadata: Metadata = {
  title: "Star Cleaning SC | House Cleaning in Charleston & Summerville, SC",
  description: "Reclaim your weekends with Star Cleaning SC's house cleaning and maid services. Veteran-owned, background-checked, and 100% guaranteed cleaning in Charleston, SC and surrounding areas.",
  alternates: {
    canonical: 'https://www.starcleaningsc.com/',
  },
  openGraph: {
    title: "Star Cleaning SC | House Cleaning in Charleston & Summerville, SC",
    description: "Veteran-owned, background-checked, 100% guaranteed house cleaning services in Charleston, SC. Book your clean today and reclaim your weekends!",
    url: 'https://www.starcleaningsc.com/',
    siteName: 'Star Cleaning SC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Star Cleaning SC | House Cleaning in Charleston & Summerville, SC",
    description: "Veteran-owned, background-checked, 100% guaranteed house cleaning services in Charleston, SC.",
  },
};

const MONTHS: Record<string, string> = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };

// Google only shows relative dates, so reviews carry a month/year ("Sep 2026"); schema uses the first of that month.
const toIsoMonth = (d?: string) => {
  const [mon, year] = (d ?? '').split(' ');
  return MONTHS[mon] && year ? `${year}-${MONTHS[mon]}-01` : undefined;
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need to be home during the cleaning?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, you do not need to be home. Most of our clients provide us with a key, garage code, or lockbox code. We are fully insured and background checked for your peace of mind." }
        },
        {
          "@type": "Question",
          "name": "Are your cleaning supplies pet-safe?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! We love pets. We use eco-friendly products that are safe for dogs, cats, and children. If you have specific allergies or products you prefer us to use, just let us know." }
        },
        {
          "@type": "Question",
          "name": "What is included in a standard cleaning?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our standard cleaning covers dusting, vacuuming, mopping, bathroom sanitation, kitchen cleaning (exterior of appliances), and making beds. See our Services section for a detailed checklist." }
        },
        {
          "@type": "Question",
          "name": "Are you insured and bonded?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Star Cleaning is fully licensed, insured, and bonded. If anything were to happen during a service, you are fully protected." }
        },
        {
          "@type": "Question",
          "name": "How do I pay for the service?",
          "acceptedAnswer": { "@type": "Answer", "text": "We accept all major credit cards, Venmo, and checks. Payment is processed after the cleaning is completed to your satisfaction." }
        },
        {
          "@type": "Question",
          "name": "What if I'm not satisfied with the cleaning?",
          "acceptedAnswer": { "@type": "Answer", "text": "We offer a 100% Satisfaction Guarantee. If you aren't happy with any area we cleaned, call us within 24 hours and we will come back and re-clean it for free." }
        }
      ]
    },
    ...homeReviews.map((review) => ({
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": review.author },
      "reviewBody": review.text.replace(/\s*…$/, ''),
      "reviewRating": { "@type": "Rating", "ratingValue": String(review.rating ?? 5), "bestRating": "5" },
      "datePublished": toIsoMonth(review.date),
    })),
  ]
};

export default function Page() {
  return (
    <>
      <HomeClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
