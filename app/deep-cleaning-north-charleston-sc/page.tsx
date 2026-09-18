import NorthCharlestonClient from './NorthCharlestonClient';

export const metadata = {
  title: 'Deep House Cleaning Services in North Charleston SC | Star Cleaning SC',
  description: 'Deep house cleaning in North Charleston, SC built around Boeing and Joint Base shift schedules and rental turnovers. Veteran-owned, background-checked, 100% guaranteed.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc',
  },
  openGraph: {
    title: 'Deep House Cleaning Services in North Charleston SC',
    description: 'Turnover and shift-friendly deep cleaning for North Charleston apartments, rentals, and homes. Online booking, pet-safe products.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC North Charleston Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function NorthCharlestonDeepCleaningPage() {
  return (
    <>
      <NorthCharlestonClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": "https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc#localbusiness",
                "name": "Star Cleaning SC",
                "url": "https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc",
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
                  { "@type": "City", "name": "North Charleston" },
                  { "@type": "City", "name": "Park Circle" },
                  { "@type": "City", "name": "North Rhett" }
                ],
                "sameAs": [
                  "https://instagram.com/star.cleaningsc"
                ],
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Angela F." }, "reviewBody": "I manage six units off Ashley Phosphate and used to lose two or three days between tenants waiting on cleaning. Star Cleaning turns a unit around same-day now, including the oven and cabinet interiors.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Derek W." }, "reviewBody": "I work rotating 12-hour shifts near the base and could never get anyone to clean before 7am. They started showing up at 6:30 and I come home off a night shift to a spotless house. Small thing, huge difference.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Priya N." }, "reviewBody": "Our old townhome near the Tanger Outlets had years of grime built into the vents from being a rental. They pulled the covers off, washed them separately, and the airflow noticeably improved.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "Service",
                "name": "Apartment Turnover & Shift-Friendly Deep House Cleaning",
                "serviceType": "Deep House Cleaning",
                "provider": { "@id": "https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "North Charleston" },
                  { "@type": "City", "name": "Park Circle" },
                  { "@type": "City", "name": "North Rhett" }
                ],
                "description": "Veteran-owned deep house cleaning in North Charleston, SC scheduled around Boeing and Joint Base shift work, built for apartment and rental turnovers.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Do you clean apartment complexes and multi-unit buildings, or just single-family homes?", "acceptedAnswer": { "@type": "Answer", "text": "Both. A large share of our North Charleston work is apartment and townhome turnovers for property managers along Rivers Ave and Ashley Phosphate. We can quote a single unit or a standing arrangement for multiple units on a rolling schedule." } },
                  { "@type": "Question", "name": "Can you schedule a cleaning before 8am or after 6pm for night-shift workers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We keep early-morning and evening slots open specifically for clients working rotating shifts at Boeing or Joint Base Charleston. Ask for a shift-friendly slot when you request your quote." } },
                  { "@type": "Question", "name": "Will the deep clean pass a landlord's move-out inspection?", "acceptedAnswer": { "@type": "Answer", "text": "Our move-out deep clean covers the items leasing agents check first: cabinet and appliance interiors, baseboards, vent covers, and closet shelving. Most clients use it specifically to avoid deposit deductions, and we will re-clean any flagged area within 24 hours at no charge." } },
                  { "@type": "Question", "name": "Do you have experience with construction or industrial dust from the I-26 corridor?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, several of our recurring clients are near the industrial and warehouse zones along I-26 and Rivers Ave, where fine dust settles faster on window sills and vents. We adjust our vacuuming and dusting passes accordingly on those routes." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning North Charleston SC", "item": "https://www.starcleaningsc.com/deep-cleaning-north-charleston-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
