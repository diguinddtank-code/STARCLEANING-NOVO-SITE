import CharlestonClient from './CharlestonClient';

export const metadata = {
  title: 'Deep House Cleaning Services in Charleston SC | Star Cleaning SC',
  description: 'Restore your home with our luxury military-precision deep cleaning services in Charleston, SC. Specializing in historic moldings, dander removal, & coastal humidity buildup. Online booking!',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-charleston-sc',
  },
  openGraph: {
    title: 'Precision Deep House Cleaning Services in Charleston SC',
    description: 'Restore your home with our veteran-owned deep cleaning services in Charleston, SC. Online scheduling, pet-safe products, zero hassle.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC Charleston Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CharlestonDeepCleaningPage() {
  return (
    <>
      <CharlestonClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": "https://www.starcleaningsc.com/deep-cleaning-charleston-sc#localbusiness",
                "name": "Star Cleaning SC",
                "url": "https://www.starcleaningsc.com/deep-cleaning-charleston-sc",
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
                  { "@type": "City", "name": "Charleston" },
                  { "@type": "City", "name": "West Ashley" },
                  { "@type": "City", "name": "James Island" },
                  { "@type": "City", "name": "Daniel Island" },
                  { "@type": "City", "name": "North Charleston" }
                ],
                "sameAs": [
                  "https://instagram.com/star.cleaningsc"
                ],
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Christopher M." }, "reviewBody": "Scheduling a deep clean for our pre-listing marketing South of Broad was a lifesaver. The baseboards were spotless and they managed to scrub the pollen layer completely off our historic window framings. Our buyer was incredibly pleased!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Jessica T." }, "reviewBody": "Coming home to our house in West Ashley after Star Cleaning SC did their deep clean was amazing. With two black labs, the hair and dander were out of control, but they used pet-safe chemical formulas and literally zero dust was left behind!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Ronald D." }, "reviewBody": "I hire them for turnover deep cleaning of our vacation properties downtown. Excellent attention, clean baseboards, prompt veteran timing, and zero issues with property owners. 10/10 cleaning discipline.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "Service",
                "name": "Military-Precision Deep Chemical & Manual House Cleaning",
                "serviceType": "Deep House Cleaning",
                "provider": { "@id": "https://www.starcleaningsc.com/deep-cleaning-charleston-sc#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "Charleston" },
                  { "@type": "City", "name": "West Ashley" },
                  { "@type": "City", "name": "James Island" },
                  { "@type": "City", "name": "Daniel Island" },
                  { "@type": "City", "name": "North Charleston" }
                ],
                "description": "Elite veteran-owned deep cleaning in Charleston, SC. We clean baseboards, duct vents, oven grease, blinds, and high-humidity mold buildup with absolute precision.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-charleston-sc"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "How do you handle delicate or historic materials (old pine, original glass)?", "acceptedAnswer": { "@type": "Answer", "text": "Charleston is known for historic craftsmanship. We use neutral-pH cleaners of professional quality instead of harsh acidic or basic products. Original heart pine is mopped with highly wrung-out luxury microfibers, and vintage brass fixtures are detailed with non-abrasive soft cloths." } },
                  { "@type": "Question", "name": "Are the cleaning solvents safe for local family pets?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We love dogs and cats, and Charleston is a major pet city. All chemical solvents used are strictly pet-safe and eco-friendly. No toxic fumes, no dangerous residues." } },
                  { "@type": "Question", "name": "Do I need to be present at home during the deep clean?", "acceptedAnswer": { "@type": "Answer", "text": "No, you do not need to be present. Most customers provide key boxes or smart lock door codes. All our team members are rigorously vetted, background-checked, and supervised for total reliability." } },
                  { "@type": "Question", "name": "What is the typical cost for a true Deep House Clean in Charleston?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing is calculated via our dynamic Quote Builder starting from basic configurations. The price reflects the exact size (sq ft), quantity of bathrooms, pet hair burden, and local cleaning density requests. There are absolutely no hidden fees." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning Charleston SC", "item": "https://www.starcleaningsc.com/deep-cleaning-charleston-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
