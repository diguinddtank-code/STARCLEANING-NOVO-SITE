import SummervilleClient from './SummervilleClient';

export const metadata = {
  title: 'Deep House Cleaning Services in Summerville SC | Star Cleaning SC',
  description: 'Say goodbye to yellow pine pollen and clay dust with our deep house cleaning services in Summerville, SC. Veteran-owned, licensed, insured, & 100% satisfaction guaranteed.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-summerville-sc',
  },
  openGraph: {
    title: 'Professional Deep House Cleaning Services in Summerville SC',
    description: 'Breathe free in Summerville, SC. Our expert team cleans vents, baseboards, and oven grease with military-grade precision. Online booking in 2 minutes!',
    url: 'https://www.starcleaningsc.com/deep-cleaning-summerville-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC Summerville Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function SummervilleDeepCleaningPage() {
  return (
    <>
      <SummervilleClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": "https://www.starcleaningsc.com/deep-cleaning-summerville-sc#localbusiness",
                "name": "Star Cleaning SC",
                "url": "https://www.starcleaningsc.com/deep-cleaning-summerville-sc",
                "telephone": "+18432979935",
                "email": "admin@starcleaningsc.com",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Saturday"],
                    "opens": "09:00",
                    "closes": "15:00"
                  }
                ],
                "areaServed": [
                  { "@type": "City", "name": "Summerville" },
                  { "@type": "City", "name": "Nexton" },
                  { "@type": "City", "name": "Cane Bay" },
                  { "@type": "City", "name": "Carnes Crossroads" }
                ],
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=100068655907779",
                  "https://instagram.com/star.cleaningsc",
                  "https://share.google/udkA7cxV0VCC39Ag2"
                ],
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Marcus V." }, "reviewBody": "Our new home in Nexton felt dusty even after the builders finished. We hired Star Cleaning SC for a top-to-bottom deep clean and they completely eliminated the fine drywall and clay residue. They are incredible!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Diana K." }, "reviewBody": "As an asthma sufferer, springtime in Summerville is brutal. Star Cleans hand washed every speck of yellow pollen off my window sills and thoroughly scrubbed our air vent covers. I am finally breathing easy.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Linda P." }, "reviewBody": "With three kids and constant sports mud, my tile grout gets black. Their deep cleaning scrubbed the grout lines to their original beige color in just a few hours. Military precision indeed!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "Service",
                "name": "Flowertown Professional Deep House Cleaning Service",
                "serviceType": "Deep House Cleaning",
                "provider": { "@id": "https://www.starcleaningsc.com/deep-cleaning-summerville-sc#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "Summerville" },
                  { "@type": "City", "name": "Nexton" },
                  { "@type": "City", "name": "Cane Bay" },
                  { "@type": "City", "name": "Carnes Crossroads" }
                ],
                "description": "Deep house cleaning in Summerville, SC targeting clay-dust residue and sticky yellow pine pollen buildup. Veteran-owned, fully insured.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-summerville-sc"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "What makes your cleaning service 'military-precision'?", "acceptedAnswer": { "@type": "Answer", "text": "Our roots are veteran-owned. We train our teams with strict protocols and high-efficiency checklists. Every corner is inspected including ceiling fans, vents, threshold panels, and plumbing hardware, ensuring zero oversight." } },
                  { "@type": "Question", "name": "How frequently should a home in Summerville receive a deep clean?", "acceptedAnswer": { "@type": "Answer", "text": "To combat the local pollen and microclimate dust, we recommend an initial Deep Clean, followed by standard maintenance (weekly or bi-weekly), and a detailed Deep Reset at least once or twice a year." } },
                  { "@type": "Question", "name": "Do you supply your own eco-friendly products?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our team arrives fully equipped with safe, professional solutions, HEPA-equipped vacuums, steam machines, and fresh microfiber rags. You don't have to provide clean sponges or chemicals." } },
                  { "@type": "Question", "name": "Can I schedule a deep clean specifically before moving furniture in?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our empty-home deep clean (often aligned with Move-In/Move-Out Turnkeys) is perfect to sanitize every cabinet interior and floorboard before your personal belongings are unpacked." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning Summerville SC", "item": "https://www.starcleaningsc.com/deep-cleaning-summerville-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
