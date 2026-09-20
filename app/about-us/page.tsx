import { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: 'About Star Cleaning SC | Summerville & Charleston House Cleaning',
  description: 'Meet Mariana and the Star Cleaning SC team. Veteran owned, background checked, and trusted by families in Summerville and Charleston for 18 years.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/about-us',
  },
  openGraph: {
    title: 'About Star Cleaning SC | Summerville & Charleston House Cleaning',
    description: 'Meet Mariana and the Star Cleaning SC team. Veteran owned, background checked, and trusted by families in Summerville and Charleston for 18 years.',
    url: 'https://www.starcleaningsc.com/about-us',
    siteName: 'Star Cleaning SC',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/owner-photo.jpg',
        width: 800,
        height: 1200,
        alt: 'Mariana, owner of Star Cleaning SC, in Summerville, SC',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Star Cleaning SC | Summerville & Charleston House Cleaning',
    description: 'Meet Mariana and the Star Cleaning SC team. Veteran owned, background checked, and trusted in Summerville and Charleston for 18 years.',
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.starcleaningsc.com/about-us#aboutpage",
        "url": "https://www.starcleaningsc.com/about-us",
        "name": "About Star Cleaning SC",
        "description": "Meet Mariana and the Star Cleaning SC team, serving Summerville, Charleston, and the Lowcountry for 18 years.",
        "isPartOf": { "@id": "https://www.starcleaningsc.com/#website" },
        "mainEntity": { "@id": "https://www.starcleaningsc.com/#localbusiness" }
      },
      {
        "@type": "Person",
        "@id": "https://www.starcleaningsc.com/about-us#mariana",
        "name": "Mariana",
        "jobTitle": "Owner",
        "image": "https://www.starcleaningsc.com/images/owner-photo.jpg",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://www.starcleaningsc.com/#localbusiness",
          "name": "Star Cleaning SC",
          "areaServed": [
            { "@type": "City", "name": "Summerville" },
            { "@type": "City", "name": "Charleston" },
            { "@type": "City", "name": "North Charleston" },
            { "@type": "City", "name": "Ladson" },
            { "@type": "City", "name": "James Island" },
            { "@type": "City", "name": "Daniel Island" },
            { "@type": "City", "name": "Johns Island" },
            { "@type": "City", "name": "Mount Pleasant" },
            { "@type": "City", "name": "Goose Creek" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.starcleaningsc.com/about-us" }
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
      <AboutUsClient />
    </>
  );
}
