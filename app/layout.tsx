import type { Metadata } from "next";
import { Montserrat, Open_Sans, Dancing_Script } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starcleaningsc.com"),
  title: "Star Cleaning SC - Charleston's #1 Rated Cleaning Service",
  description: "Reclaim your weekends with Star Cleaning SC. 5-star rated, 100% guaranteed house cleaning services in Charleston, SC and surrounding areas.",
  keywords: "house cleaning Charleston, maid service Charleston SC, deep cleaning, move in cleaning, move out cleaning, Star Cleaning SC, professional cleaners",
  icons: {
    icon: 'https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95',
    apple: 'https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95',
  },
  openGraph: {
    title: "Star Cleaning SC - Charleston's Premier Cleaning Service",
    description: "5-star rated, 100% guaranteed house cleaning services in Charleston, SC. Book your clean today and reclaim your weekends!",
    url: "https://www.starcleaningsc.com",
    siteName: "Star Cleaning SC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Cleaning SC - Charleston's #1 Rated Cleaning Service",
    description: "5-star rated, 100% guaranteed house cleaning services in Charleston, SC.",
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
        "description": "Charleston's #1 Rated Cleaning Service"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.starcleaningsc.com/#localbusiness",
        "name": "Star Cleaning SC",
        "image": "https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95",
        "description": "Professional house cleaning services in Charleston, SC.",
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
        "priceRange": "$$"
      }
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased font-sans">
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2259353031142127');
          fbq('track', 'PageView');
        ` }} />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=2259353031142127&ev=PageView&noscript=1" alt="" />
        </noscript>
        {/* End Meta Pixel Code */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
