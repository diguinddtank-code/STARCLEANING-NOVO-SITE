import DanielIslandClient from './DanielIslandClient';

export const metadata = {
  title: 'Deep House Cleaning Services in Daniel Island SC | Star Cleaning SC',
  description: 'Luxury deep house cleaning in Daniel Island, SC for homes with natural stone, custom cabinetry, and premium hardwood. HOA/gate coordination. Veteran-owned, 100% guaranteed.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-daniel-island-sc',
  },
  openGraph: {
    title: 'Deep House Cleaning Services in Daniel Island SC',
    description: 'White-glove deep cleaning for Daniel Island homes with stone counters, custom millwork, and premium finishes. Online booking, discreet service.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-daniel-island-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC Daniel Island Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function DanielIslandDeepCleaningPage() {
  return (
    <>
      <DanielIslandClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Luxury Deep House Cleaning for Stone, Custom Millwork & Premium Hardwood",
                "serviceType": "Deep House Cleaning",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Star Cleaning SC",
                  "telephone": "(843) 297-9935",
                  "url": "https://www.starcleaningsc.com",
                  "logo": "https://www.starcleaningsc.com/logo-clean.png",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Daniel Island",
                    "addressRegion": "SC",
                    "postalCode": "29492",
                    "addressCountry": "US"
                  }
                },
                "areaServed": [
                  { "@type": "City", "name": "Daniel Island" },
                  { "@type": "City", "name": "Smythe Park" },
                  { "@type": "City", "name": "Island Park" }
                ],
                "description": "Veteran-owned luxury deep house cleaning on Daniel Island, SC for homes with natural stone, custom cabinetry, and premium hardwood, with HOA and gate access coordination.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-daniel-island-sc"
                },
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Margaret W." }, "reviewBody": "We just had quartzite installed and were nervous about who we let clean it. They treated our counters exactly the way our stone installer told us to and even asked about the sealant before starting.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Robert K." }, "reviewBody": "Our house backs to the golf course and grass clippings used to get tracked onto the hardwood constantly. They started doing a proper entryway sweep before mopping and the floors have held up so much better.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Christine L." }, "reviewBody": "We travel constantly for work and needed a crew our HOA would actually let through the gate without us being home. They handled the visitor registration every time without a single issue.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Can you get through our HOA gate or guard station without us being home?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We regularly coordinate with HOA offices and gate attendants ahead of a scheduled visit. Just provide any visitor registration form, code, or advance-notice requirement when you book, and we handle the rest." } },
                  { "@type": "Question", "name": "Are your cleaning products actually safe for natural stone and custom hardwood?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use pH-neutral, stone-safe solutions on marble, quartzite, and granite, and manufacturer-appropriate products on sealed hardwood. We avoid vinegar, bleach, and other acidic or abrasive cleaners that can etch stone or strip wood finish over time." } },
                  { "@type": "Question", "name": "Do you offer discreet or white-glove service for high-end homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this is standard for our Daniel Island clients. Our background-checked team works quietly and respectfully around your belongings, and we're comfortable being trusted with a home while the owner is traveling." } },
                  { "@type": "Question", "name": "How do you handle grass clippings and pine straw tracked in from golf-course-adjacent yards?", "acceptedAnswer": { "@type": "Answer", "text": "We sweep and vacuum entryways and mudrooms before mopping, rather than pushing debris around with a wet mop, which is what scratches finished hardwood over time. Homes backing onto a course get extra attention at the entry points during every visit." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning Daniel Island SC", "item": "https://www.starcleaningsc.com/deep-cleaning-daniel-island-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
