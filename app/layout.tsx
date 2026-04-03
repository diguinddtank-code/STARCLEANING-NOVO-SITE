import type { Metadata } from "next";
import { Montserrat, Open_Sans, Dancing_Script } from "next/font/google";
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
    url: "https://starcleaningsc.com",
    siteName: "Star Cleaning SC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Cleaning SC - Charleston's #1 Rated Cleaning Service",
    description: "5-star rated, 100% guaranteed house cleaning services in Charleston, SC.",
  },
  alternates: {
    canonical: "https://starcleaningsc.com",
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
        "@id": "https://starcleaningsc.com/#website",
        "url": "https://starcleaningsc.com",
        "name": "Star Cleaning SC",
        "alternateName": "Star Cleaning LLC",
        "description": "Charleston's #1 Rated Cleaning Service"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://starcleaningsc.com/#localbusiness",
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
        "url": "https://starcleaningsc.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
