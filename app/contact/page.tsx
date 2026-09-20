import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Star Cleaning SC | Charleston, SC House Cleaning',
  description: 'Call, text, or get an instant free quote from Star Cleaning SC in Charleston, Summerville & the Lowcountry. Veteran-owned, background-checked, fully insured.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/contact',
  },
  openGraph: {
    title: 'Contact Star Cleaning SC | Charleston, SC House Cleaning',
    description: 'Call, text, or get an instant free quote from Star Cleaning SC in Charleston, Summerville & the Lowcountry. Veteran-owned, background-checked, fully insured.',
    url: 'https://www.starcleaningsc.com/contact',
    siteName: 'Star Cleaning SC',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/clean-living-room.jpg',
        width: 1200,
        height: 900,
        alt: 'A bright, freshly cleaned living room in a Charleston-area home',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Star Cleaning SC | Charleston, SC House Cleaning',
    description: 'Call, text, or get an instant free quote from Star Cleaning SC in Charleston, Summerville & the Lowcountry. Veteran-owned, background-checked, fully insured.',
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.starcleaningsc.com/contact#contactpage",
        "url": "https://www.starcleaningsc.com/contact",
        "name": "Contact Star Cleaning SC",
        "description": "Contact Star Cleaning SC for a free house cleaning quote in Charleston, Summerville & the Lowcountry.",
        "isPartOf": { "@id": "https://www.starcleaningsc.com/#website" },
        "mainEntity": { "@id": "https://www.starcleaningsc.com/#localbusiness" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.starcleaningsc.com/contact" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast will Star Cleaning SC respond?",
            "acceptedAnswer": { "@type": "Answer", "text": "We typically respond within 1 business day. For a faster reply, call or text us directly at (843) 297-9935 during business hours." }
          },
          {
            "@type": "Question",
            "name": "Is getting a quote from Star Cleaning SC free?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every quote is free and comes with no obligation to book." }
          },
          {
            "@type": "Question",
            "name": "What areas can I contact you about?",
            "acceptedAnswer": { "@type": "Answer", "text": "We serve Charleston, North Charleston, Summerville, Ladson, James Island, Daniel Island, Johns Island, Mount Pleasant, Goose Creek, and the surrounding Lowcountry." }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
