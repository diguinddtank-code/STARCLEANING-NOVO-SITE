import JamesIslandClient from './JamesIslandClient';

export const metadata = {
  title: 'Deep House Cleaning Services in James Island SC | Star Cleaning SC',
  description: 'Coastal deep house cleaning in James Island, SC targeting tracked-in sand, salt-air film, and marsh humidity. Veteran-owned, background-checked, 100% guaranteed.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-james-island-sc',
  },
  openGraph: {
    title: 'Deep House Cleaning Services in James Island SC',
    description: 'Deep cleaning built for sand, salt air, and marsh humidity on James Island and near Folly Beach. Online booking, pet-safe products.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-james-island-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC James Island Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function JamesIslandDeepCleaningPage() {
  return (
    <>
      <JamesIslandClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": "https://www.starcleaningsc.com/deep-cleaning-james-island-sc#localbusiness",
                "name": "Star Cleaning SC",
                "url": "https://www.starcleaningsc.com/deep-cleaning-james-island-sc",
                "telephone": "+18432979935",
                "email": "admin@starcleaningsc.com",
                "priceRange": "$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "areaServed": [
                  { "@type": "City", "name": "James Island" },
                  { "@type": "City", "name": "Folly Beach" },
                  { "@type": "City", "name": "Riverland Terrace" }
                ],
                "sameAs": [
                  "https://instagram.com/star.cleaningsc"
                ],
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Bethany R." }, "reviewBody": "We're two blocks off Riverland Terrace and sand gets everywhere no matter how careful the kids are. They got sand out of grout lines I didn't think would ever come clean.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Todd S." }, "reviewBody": "I run a rental two minutes from Folly Beach and salt film was building up on the shower glass no matter what I sprayed on it. Their crew knew exactly what to use and it hasn't come back.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Nicole A." }, "reviewBody": "Our house backs up to the marsh and the grout was going gray within months of a normal clean. Since switching to their deep clean every quarter, it's stayed the right color.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "Service",
                "name": "Coastal Deep House Cleaning for Sand, Salt Air & Marsh Humidity",
                "serviceType": "Deep House Cleaning",
                "provider": { "@id": "https://www.starcleaningsc.com/deep-cleaning-james-island-sc#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "James Island" },
                  { "@type": "City", "name": "Folly Beach" },
                  { "@type": "City", "name": "Riverland Terrace" }
                ],
                "description": "Veteran-owned deep house cleaning on James Island, SC treating tracked-in sand, salt-air film on fixtures, and marsh-driven humidity buildup.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-james-island-sc"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "How do you get sand out of hardwood floors and area rugs?", "acceptedAnswer": { "@type": "Answer", "text": "We start with a HEPA-filtered vacuum pass to lift loose sand before it gets ground into the finish, then hand-wipe grout lines and floor edges where sand collects. Rugs get flipped and vacuumed on both sides, not just the top." } },
                  { "@type": "Question", "name": "Does salt air actually damage fixtures, or is that just cosmetic film?", "acceptedAnswer": { "@type": "Answer", "text": "Both. The visible film on chrome and glass is mostly cosmetic and comes off with the right mineral-cutting solution, but left untreated for months it can pit chrome finishes and dull glass shower doors permanently. Regular treatment prevents that." } },
                  { "@type": "Question", "name": "Can you do a same-day turnover for a Folly Beach vacation rental?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this is one of our most common requests on the island. We coordinate around your checkout and check-in windows and can commit to a recurring same-day slot for hosts with a regular booking calendar." } },
                  { "@type": "Question", "name": "How often should a coastal home get a deep clean compared to an inland home?", "acceptedAnswer": { "@type": "Answer", "text": "We generally recommend every 3 to 4 months for homes within a mile or two of the water, versus twice a year inland. Salt air and marsh humidity build up on fixtures and grout faster than dust does in a typical inland house." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning James Island SC", "item": "https://www.starcleaningsc.com/deep-cleaning-james-island-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
