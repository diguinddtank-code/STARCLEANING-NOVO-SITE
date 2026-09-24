import MountPleasantClient from './MountPleasantClient';

export const metadata = {
  title: 'Deep House Cleaning Services in Mount Pleasant SC | Star Cleaning SC',
  description: 'Deep house cleaning in Mount Pleasant, SC for Old Village historic homes, Carolina Park, and Park West new builds. Veteran-owned, background-checked, 100% guaranteed.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc',
  },
  openGraph: {
    title: 'Deep House Cleaning Services in Mount Pleasant SC',
    description: 'Deep cleaning built for Mount Pleasant homes, from Old Village cottages to Carolina Park new builds. Online booking, pet-safe products.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC Mount Pleasant Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function MountPleasantDeepCleaningPage() {
  return (
    <>
      <MountPleasantClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": "https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc#localbusiness",
                "name": "Star Cleaning SC",
                "url": "https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc",
                "telephone": "+18432979935",
                "email": "admin@starcleaningsc.com",
                "priceRange": "$$",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                  }
                ],
                "areaServed": [
                  { "@type": "City", "name": "Mount Pleasant" },
                  { "@type": "City", "name": "Old Village" },
                  { "@type": "City", "name": "Carolina Park" }
                ],
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=100068655907779",
                  "https://instagram.com/star.cleaningsc",
                  "https://share.google/udkA7cxV0VCC39Ag2"
                ],
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Nancy P." }, "reviewBody": "We live in the Old Village and our 1940s home needs a gentler touch than a new build. They understood that immediately and never used anything too harsh on our original floors.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Brian K." }, "reviewBody": "Our house in Carolina Park backs up to a pond and the humidity is no joke. Since switching to biweekly cleanings, the musty smell we used to get in the closets is completely gone.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Samantha T." }, "reviewBody": "I run a short-term rental near Shem Creek and their turnover cleaning has been flawless for over a year. My guests always comment on how clean the place smells.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "Service",
                "name": "Historic Home & New Construction Deep House Cleaning",
                "serviceType": "Deep House Cleaning",
                "provider": { "@id": "https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc#localbusiness" },
                "areaServed": [
                  { "@type": "City", "name": "Mount Pleasant" },
                  { "@type": "City", "name": "Old Village" },
                  { "@type": "City", "name": "Carolina Park" }
                ],
                "description": "Veteran-owned deep house cleaning in Mount Pleasant, SC for Old Village historic homes, established neighborhoods, and new-construction subdivisions like Carolina Park and Park West.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Do you use different products on older, historic homes than on new construction?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Original hardwood, plaster, and vintage fixtures common in the Old Village get pH-neutral, non-abrasive products and hand-cleaning methods. Newer homes in Carolina Park or Park West can handle a broader range of standard cleaning products." } },
                  { "@type": "Question", "name": "Can you help with mildew and musty smells in closets near the marsh?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this is one of our most common Mount Pleasant requests. We treat closet interiors, window sills, and bathroom grout for humidity-driven mildew, and can adjust visit frequency if your home is especially close to the water." } },
                  { "@type": "Question", "name": "Do you clean new-construction homes in Carolina Park or Park West?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we regularly handle post-construction and first move-in cleans in these subdivisions, clearing fine drywall dust from vents, cabinets, and floors before families settle in." } },
                  { "@type": "Question", "name": "Do you offer turnover cleaning for vacation rentals near Shem Creek?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide same-day turnover cleaning for short-term rentals near Shem Creek and the Isle of Palms connector, coordinated around your checkout and check-in windows." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning Mount Pleasant SC", "item": "https://www.starcleaningsc.com/deep-cleaning-mount-pleasant-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
