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
      "author": { "@type": "Person", "name": "Sarah R." },
      "reviewBody": "This cleaning company exceeded my expectations! They were professional, on time, and incredibly thorough. Every room looked better than I imagined from the floors to the bathrooms to all the little details that usually get missed. It feels so good to come home to a truly clean house. I'm beyond happy with their work and will absolutely be a repeat customer.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-15"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Mariah E." },
      "reviewBody": "Star Cleaning always does an amazing job! We love coming home after our cleaning to a fresh home. There's nothing better. Marianna is always responsive to any questions we have and has been very flexible when we've needed to move our cleaning day. Highly recommend!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-09"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Janice O." },
      "reviewBody": "The cleaning that was done today was very good. Everything looks clean and perfectly arranged. Thank you.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-16"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Ginny B." },
      "reviewBody": "Everything looks fresh and clean! Thank you for a thorough cleaning today and working with my schedule. We appreciate our cleaners hard work.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-15"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Janet R." },
      "reviewBody": "Excellent job every time they are here. And they are so polite, just nice hardworking girls.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-15"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Julie B." },
      "reviewBody": "Star Cleaning does an amazing job each month in my home, the ladies make my home sparkle each time! I highly recommend.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-14"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Kelley C." },
      "reviewBody": "Great job and thanks for all the extra attention to detail the ladies do for us. Can never do less than.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-15"
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://www.starcleaningsc.com/#localbusiness" },
      "author": { "@type": "Person", "name": "Laura P." },
      "reviewBody": "Excellent !!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2026-01-07"
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
