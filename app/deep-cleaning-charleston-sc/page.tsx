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
            "@type": "Service",
            "name": "Military-Precision Deep Chemical & Manual House Cleaning",
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
                "addressLocality": "Charleston",
                "addressRegion": "SC",
                "postalCode": "29401",
                "addressCountry": "US"
              }
            },
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
          })
        }}
      />
    </>
  );
}
