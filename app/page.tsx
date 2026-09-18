import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Star Cleaning SC | Charleston's #1 Rated House Cleaning Services",
  description: "Reclaim your weekends with Star Cleaning SC's house cleaning and maid services. 5-star rated, 100% guaranteed cleaning in Charleston, SC and surrounding areas.",
  alternates: {
    canonical: 'https://www.starcleaningsc.com/',
  },
};

export default function Page() {
  return <HomeClient />;
}
