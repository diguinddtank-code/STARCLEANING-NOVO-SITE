import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.starcleaningsc.com/',
  },
};

export default function Page() {
  return <HomeClient />;
}
