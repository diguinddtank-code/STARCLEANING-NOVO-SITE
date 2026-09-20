import { Metadata } from 'next';
import OurTeamClient from './OurTeamClient';

export const metadata: Metadata = {
  title: 'Our Team | Star Cleaning SC - Summerville & Charleston',
  description: 'Meet the background-checked crew behind Star Cleaning SC. Real people cleaning homes across Summerville, Charleston, and the Lowcountry.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/our-team',
  },
  openGraph: {
    title: 'Our Team | Star Cleaning SC - Summerville & Charleston',
    description: 'Meet the background-checked crew behind Star Cleaning SC. Real people cleaning homes across Summerville, Charleston, and the Lowcountry.',
    url: 'https://www.starcleaningsc.com/our-team',
    siteName: 'Star Cleaning SC',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/team-complete.png',
        width: 1200,
        height: 800,
        alt: 'Mariana and the Star Cleaning SC team',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Star Cleaning SC - Summerville & Charleston',
    description: 'Meet the background-checked crew behind Star Cleaning SC, serving Summerville, Charleston, and the Lowcountry.',
  },
};

export default function OurTeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.starcleaningsc.com/our-team#page",
        "url": "https://www.starcleaningsc.com/our-team",
        "name": "Our Team | Star Cleaning SC",
        "description": "Meet the background-checked crew behind Star Cleaning SC, serving Summerville, Charleston, and the Lowcountry.",
        "isPartOf": { "@id": "https://www.starcleaningsc.com/#website" },
        "mainEntity": { "@id": "https://www.starcleaningsc.com/#localbusiness" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.starcleaningsc.com/about-us" },
          { "@type": "ListItem", "position": 3, "name": "Our Team", "item": "https://www.starcleaningsc.com/our-team" }
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
      <OurTeamClient />
    </>
  );
}
