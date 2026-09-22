import type { Metadata } from "next";
import { Montserrat, Open_Sans, Dancing_Script, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starcleaningsc.com"),
  title: "Star Cleaning SC | House Cleaning in Charleston & Summerville, SC",
  description: "Reclaim your weekends with Star Cleaning SC. Veteran-owned, background-checked, 100% guaranteed house cleaning services in Charleston, SC and surrounding areas.",
  keywords: "house cleaning Charleston, maid service Charleston SC, deep cleaning, move in cleaning, move out cleaning, Star Cleaning SC, professional cleaners",
  openGraph: {
    title: "Star Cleaning SC | House Cleaning in Charleston & Summerville, SC",
    description: "Veteran-owned, background-checked, 100% guaranteed house cleaning services in Charleston, SC. Book your clean today and reclaim your weekends!",
    url: "https://www.starcleaningsc.com",
    siteName: "Star Cleaning SC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Cleaning SC | House Cleaning in Charleston & Summerville, SC",
    description: "Veteran-owned, background-checked, 100% guaranteed house cleaning services in Charleston, SC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.starcleaningsc.com/#website",
        "url": "https://www.starcleaningsc.com",
        "name": "Star Cleaning SC",
        "alternateName": "Star Cleaning LLC",
        "description": "Veteran-owned house cleaning company serving Charleston, SC and the Lowcountry"
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://www.starcleaningsc.com/#localbusiness",
        "name": "Star Cleaning SC",
        "image": "https://www.starcleaningsc.com/images/logo-mark.png",
        "description": "Veteran-owned residential and commercial cleaning company serving the Charleston, SC Lowcountry with military-precision, 100%-guaranteed cleaning.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Charleston",
          "addressRegion": "SC",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.7765,
          "longitude": -79.9311
        },
        "url": "https://www.starcleaningsc.com",
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
          { "@type": "City", "name": "Charleston" },
          { "@type": "City", "name": "North Charleston" },
          { "@type": "City", "name": "Ladson" },
          { "@type": "City", "name": "Summerville" },
          { "@type": "City", "name": "James Island" },
          { "@type": "City", "name": "Daniel Island" },
          { "@type": "City", "name": "Johns Island" },
          { "@type": "City", "name": "Mount Pleasant" },
          { "@type": "City", "name": "Goose Creek" }
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100068655907779",
          "https://instagram.com/star.cleaningsc",
          "https://share.google/udkA7cxV0VCC39Ag2"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "reviewCount": 44
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${dancingScript.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          key="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5DSS84QS');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <script key="gtag-js" async src="https://www.googletagmanager.com/gtag/js?id=AW-17191412064"></script>
        <script
          key="gtag-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17191412064');
            `
          }}
        />
        {/* End Google tag (gtag.js) */}
        <link key="fa-preconnect" rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link key="fa-style" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript key="gtm-noscript">
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DSS84QS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Meta Pixel Code */}
        <Script key="meta-pixel-script" id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '743691638778789');
          fbq('track', 'PageView');
        ` }} />
        <noscript key="meta-pixel-noscript">
          <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=743691638778789&ev=PageView&noscript=1" alt="" />
        </noscript>
        {/* End Meta Pixel Code */}

        <script
          key="json-ld-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
