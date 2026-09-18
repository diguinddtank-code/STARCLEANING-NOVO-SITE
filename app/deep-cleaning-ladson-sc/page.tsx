import LadsonClient from './LadsonClient';

export const metadata = {
  title: 'Deep House Cleaning Services in Ladson SC | Star Cleaning SC',
  description: 'Unmatched deep house cleaning services in Ladson, SC built for busy military families and suburban homes. Veteran-owned and backed by an 18-year lowcountry track record.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/deep-cleaning-ladson-sc',
  },
  openGraph: {
    title: 'Professional Deep House Cleaning Services in Ladson SC',
    description: 'Protect your deposit or restore your home in Ladson, SC. Veteran-owned deep cleaning targeting baseboards, filters, dander, and kitchen grease.',
    url: 'https://www.starcleaningsc.com/deep-cleaning-ladson-sc',
    siteName: 'Star Cleaning SC',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Star Cleaning SC Ladson Deep Clean',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function LadsonDeepCleaningPage() {
  return (
    <>
      <LadsonClient />

      {/* Localized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Military Family & PCS Relocation Deep House Cleaning Service",
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
                    "addressLocality": "Ladson",
                    "addressRegion": "SC",
                    "postalCode": "29456",
                    "addressCountry": "US"
                  }
                },
                "areaServed": [
                  { "@type": "City", "name": "Ladson" },
                  { "@type": "City", "name": "Joint Base Charleston" },
                  { "@type": "City", "name": "Hunter's Bend" }
                ],
                "description": "Premium veteran-led deep house cleaning in Ladson, SC optimized for local move-out inspections and military transfers. 100% satisfaction verified.",
                "offers": {
                  "@type": "Offer",
                  "price": "180.00",
                  "priceCurrency": "USD",
                  "url": "https://www.starcleaningsc.com/deep-cleaning-ladson-sc"
                },
                "review": [
                  { "@type": "Review", "author": { "@type": "Person", "name": "Staff Sergeant Mike D." }, "reviewBody": "Relocating on military orders is stressful enough. We ordered their deep clean for PCS move-out housing and passed structural inspections first try without a single flag. Veteran standards are real!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Emily T." }, "reviewBody": "Our house in Hunter's Bend had clay dust from nearby neighborhoods. They detailed our baseboards, blinds, and cleaned the vents perfectly. Smells amazing without heavy synthetic odors.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
                  { "@type": "Review", "author": { "@type": "Person", "name": "Daniel R." }, "reviewBody": "I hire them annually to deep clean my grandmother's home in Ladson. They are always professional, respect her belongings, and work with incredible attention to detail. Excellent team!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
                ],
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "reviewCount": 3 }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Do you offer military discounts for PCS relocation deep cleans?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are highly supportive of service members and veterans. In our Quote Builder or when calling us, mention your military association to receive our tailored appreciation package." } },
                  { "@type": "Question", "name": "Does deep cleaning include removing scuffs on baseboard wood?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our deep clean is comprehensive. We use professional chemical wedges and high-quality melamine pads to carefully lift dark scuffs and mud stains from baseboards and doors." } },
                  { "@type": "Question", "name": "Do you deep clean carpets or just vacuum?", "acceptedAnswer": { "@type": "Answer", "text": "As part of deep cleaning, we utilize powerful, high-efficiency HEPA-filtered vacuum extraction to lift fine dust and allergens. For commercial-grade liquid carpet extraction or steam washing, toggle those add-on features on our dynamic quote form." } },
                  { "@type": "Question", "name": "Are the cleaning formulas safe for small kids and pets?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. We use eco-friendly, non-toxic, and chemical-balanced solutions. Your kids can safely play on the flooring right after we complete our process." } }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                  { "@type": "ListItem", "position": 2, "name": "Deep Cleaning Ladson SC", "item": "https://www.starcleaningsc.com/deep-cleaning-ladson-sc" }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
