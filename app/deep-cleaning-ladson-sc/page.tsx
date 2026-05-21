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
            }
          })
        }}
      />
    </>
  );
}
