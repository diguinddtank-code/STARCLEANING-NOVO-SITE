import { Metadata } from 'next';
import AboutPage from '@/components/sub/AboutPage';

export const metadata: Metadata = {
  title: 'About Star Cleaning SC | Veteran-Owned, Summerville-Based',
  description: 'Meet Mariana and the Star Cleaning SC team. Veteran owned, background checked, and trusted by families in Summerville and Charleston for 18 years.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/about-us',
  },
  openGraph: {
    title: 'About Star Cleaning SC | Veteran-Owned, Summerville-Based',
    description: 'Meet Mariana and the Star Cleaning SC team. Veteran owned, background checked, and trusted by families in Summerville and Charleston for 18 years.',
    url: 'https://www.starcleaningsc.com/about-us',
    siteName: 'Star Cleaning SC',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.starcleaningsc.com/images/owner-photo.jpg',
        width: 800,
        height: 1200,
        alt: 'Mariana, owner of Star Cleaning SC, in Summerville, SC',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Star Cleaning SC | Veteran-Owned, Summerville-Based',
    description: 'Meet Mariana and the Star Cleaning SC team. Veteran owned, background checked, and trusted in Summerville and Charleston for 18 years.',
  },
};

export default function AboutUsPage() {
  return <AboutPage />;
}
