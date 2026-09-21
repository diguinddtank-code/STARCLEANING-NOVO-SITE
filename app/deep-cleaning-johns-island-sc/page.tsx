import JohnsIslandClient from './JohnsIslandClient';

export const metadata = {
  title: 'Deep House Cleaning Services on Johns Island SC | Star Cleaning SC',
  description: 'Deep house cleaning on Johns Island, SC for farmhouses, new construction, and waterfront estates. Veteran-owned, background-checked, 100% guaranteed.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-johns-island-sc',
  },
  openGraph: {
    title: 'Deep House Cleaning Services on Johns Island SC',
    description: 'Deep cleaning built for Johns Island farmhouses, new builds, and larger rural properties. Online booking, pet-safe products.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-johns-island-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC Johns Island Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function JohnsIslandDeepCleaningPage() {
  return (
    <>
      <JohnsIslandClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": "https://www.starcleaningsc.com/deep-cleaning-johns-island-sc#localbusiness",
                "name": "Star Cleaning SC",
                "url": "https://www.starcleaningsc.com/deep-cleaning-johns-island-sc",
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
                  { "@type": "City", "name": "Johns Island" },
                  { "@type": "City", "name": "River Road" },
                  { "@type": "City", "name": "Maybank Highway Corridor" }
                ],
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=100068655907779",
                  "https://instagram.com/star.cleaningsc",
                  "https://share.google/udkA7cxV0VCC39Ag2"
                ],
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Caroline B." }, "reviewBody": "We live on a few acres off River Road and most cleaners don't want to make the drive or deal with the size of the place. Star Cleaning SC never blinks, and our farmhouse has never looked better.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Patrick M." }, "reviewBody": "Our new build near the Angel Oak still had construction dust in the vents a year after we moved in. They finally got it all out during a deep clean. Wish we'd called sooner.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Diane R." }, "reviewBody": "We have a waterfront property on the Stono River and needed a team we could trust with the place while we're away. They're reliable, thorough, and always lock up properly.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "Service",
                "name": "Farmhouse, New-Construction & Acreage Deep House Cleaning",
                "serviceType": "Deep House Cleaning",
                "provider": { "@id": "https://www.starcleaningsc.com/deep-cleaning-johns-island-sc#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "Johns Island" },
                  { "@type": "City", "name": "River Road" },
                  { "@type": "City", "name": "Maybank Highway Corridor" }
                ],
                "description": "Veteran-owned deep house cleaning on Johns Island, SC for farmhouses, new construction, and larger rural and waterfront properties.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-johns-island-sc"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Do you charge more for larger properties or homes on multiple acres?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing is based on your home's actual square footage and condition rather than a flat per-visit rate, so a larger Johns Island property is quoted accordingly during your free quote request rather than assumed to fit a standard suburban price." } },
                  { "@type": "Question", "name": "Can you remove leftover construction dust from a home we moved into over a year ago?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this is one of our most common Johns Island requests. Drywall dust settles into vents, light fixtures, and cabinet interiors and often gets missed by move-in cleaning. Our deep clean specifically targets those spots even long after construction ended." } },
                  { "@type": "Question", "name": "Do you travel to rural properties off River Road and Maybank Highway?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we regularly service homes throughout Johns Island, including properties on gravel or dirt driveways well off the main road. Just let us know your access details when booking." } },
                  { "@type": "Question", "name": "How do you handle homes near working farmland or unpaved roads?", "acceptedAnswer": { "@type": "Answer", "text": "We add extra vacuuming and wiping passes at entryways, window sills, and vents, since farm-adjacent and unpaved-road homes accumulate fine dust faster than homes on paved, in-town streets." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning Johns Island SC", "item": "https://www.starcleaningsc.com/deep-cleaning-johns-island-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
