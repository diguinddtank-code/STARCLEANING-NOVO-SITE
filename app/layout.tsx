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
  title: "Star Cleaning LLC - Charleston's #1 Rated Cleaning Service",
  description: "Reclaim your weekends with Star Cleaning LLC. 5-star rated, 100% guaranteed house cleaning services in Charleston, SC and surrounding areas.",
  keywords: "house cleaning Charleston, maid service Charleston SC, deep cleaning, move in cleaning, move out cleaning, Star Cleaning LLC, professional cleaners",
  openGraph: {
    title: "Star Cleaning LLC - Charleston's Premier Cleaning Service",
    description: "5-star rated, 100% guaranteed house cleaning services in Charleston, SC. Book your clean today and reclaim your weekends!",
    url: "https://starcleaningsc.com",
    siteName: "Star Cleaning LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Cleaning LLC - Charleston's #1 Rated Cleaning Service",
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
    "@type": "LocalBusiness",
    "name": "Star Cleaning LLC",
    "image": "https://starcleaningsc.com/logo.png",
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
    "telephone": "+18435550198",
    "priceRange": "$$"
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${dancingScript.variable}`}>
      <body className="antialiased font-sans">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
