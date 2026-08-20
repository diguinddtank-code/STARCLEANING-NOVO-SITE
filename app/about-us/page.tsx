import { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: 'About Us | Star Cleaning Service SC',
  description: 'Learn about Star Cleaning Service, a veteran-owned business led by Mariana, providing top-tier cleaning services in Charleston and Summerville for over 18 years.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/about-us',
  },
  openGraph: {
    title: 'About Us | Star Cleaning Service SC',
    description: 'Learn about Star Cleaning Service, a veteran-owned business led by Mariana, providing top-tier cleaning services in Charleston and Summerville for over 18 years.',
    url: 'https://www.starcleaningsc.com/about-us',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/Nv15wCN.png',
        width: 1200,
        height: 630,
        alt: 'Mariana - Owner of Star Cleaning Service SC',
      }
    ]
  }
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
