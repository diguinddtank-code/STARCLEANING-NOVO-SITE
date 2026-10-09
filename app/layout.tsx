import type { Metadata } from "next";
import { Montserrat, Open_Sans, Dancing_Script, Playfair_Display } from "next/font/google";
import Script from "next/script";
import AttributionCapture from "@/components/AttributionCapture";
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
    // no fixed og:url here: each page sets its own, otherwise pages without one inherit the home URL
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
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
          "reviewCount": 45
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${dancingScript.variable} ${playfair.variable}`}>
      <head>
        {/* Font Awesome: the stylesheet is added by script so it never blocks the first paint
            (it used to delay it by ~0.9 s on mobile). Browsers without JS get it via the noscript. */}
        <link key="fa-preconnect" rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <script
          key="fa-async"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';document.head.appendChild(l);})();`
          }}
        />
        <noscript
          key="fa-noscript"
          dangerouslySetInnerHTML={{
            __html: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />'
          }}
        />
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
        {/* Tracking: Google Tag Manager, Google Ads gtag.js and Meta Pixel.
            The dataLayer / gtag / fbq queues are created right away, so every event the page
            sends (PageView, Lead, form_submit_success, conversions) is recorded. The three heavy
            third-party scripts (~400 KB and about 3 s of main-thread work on a mid-range phone)
            are only downloaded on the visitor's first interaction, or 3.5 s after the page has
            loaded, whichever comes first. They then process the queued events. */}
        <Script key="tracking-loader" id="tracking-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'AW-17191412064');

          !function(f){if(f.fbq)return;var n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[]}(window);
          fbq('init', '743691638778789');
          fbq('track', 'PageView');

          (function(){
            var done = false;
            var events = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel', 'mousemove'];
            function load() {
              if (done) return;
              done = true;
              events.forEach(function(ev){ window.removeEventListener(ev, load, true); });
              [
                'https://www.googletagmanager.com/gtm.js?id=GTM-5DSS84QS',
                'https://www.googletagmanager.com/gtag/js?id=AW-17191412064',
                'https://connect.facebook.net/en_US/fbevents.js'
              ].forEach(function(src){
                var s = document.createElement('script');
                s.async = true;
                s.src = src;
                document.head.appendChild(s);
              });
            }
            window.__loadTracking = load;
            events.forEach(function(ev){ window.addEventListener(ev, load, { capture: true, passive: true }); });
            function startTimer(){ setTimeout(load, 3500); }
            if (document.readyState === 'complete') startTimer();
            else window.addEventListener('load', startTimer);
          })();
        ` }} />
        {/* Rendered as raw HTML so React does not preload the image (that preload sent a duplicate PageView). */}
        <noscript
          key="meta-pixel-noscript"
          dangerouslySetInnerHTML={{
            __html: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=743691638778789&ev=PageView&noscript=1" alt="" />',
          }}
        />

        <script
          key="json-ld-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
