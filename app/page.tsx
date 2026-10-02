import { Metadata } from 'next';
import HomeClient from './HomeClient';

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
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Tom Craven" },
      "reviewBody": "I am thoroughly amazed by how clean my apartment is. I've come home to a spotless apartment to the counters, to the shower glass, to the ceiling fans, to the couch fabric being cleaned, to the beds being made “better” than I did. This was my first experience with Star and will happily set up regular service for the rest of my lease at least.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-08-01"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Amanda Weatherford" },
      "reviewBody": "Star Cleaning completely transformed my home with a much-needed deep clean. Every room looked spotless and smelled incredible when they were finished—it honestly felt like walking into a brand new space. I was so impressed with their attention to detail and quality of work that I've now signed up for biweekly cleanings.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-04-01"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Sonya Haines" },
      "reviewBody": "I love how my house looks every time they visit! They do an excellent job, with special finishing touches. The team is always polite and friendly. Highly recommend Star Cleaning.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-09-01"
    }
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
