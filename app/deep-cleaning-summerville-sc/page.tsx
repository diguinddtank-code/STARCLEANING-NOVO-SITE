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
            "@type": "Service",
            "name": "Flowertown Professional Deep House Cleaning Service",
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
                "addressLocality": "Summerville",
                "addressRegion": "SC",
                "postalCode": "29483",
                "addressCountry": "US"
              }
            },
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
          })
        }}
      />
    </>
  );
}
