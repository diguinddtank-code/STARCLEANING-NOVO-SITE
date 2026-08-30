import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Star Cleaning Service SC',
  description: 'Get in touch with Star Cleaning Service. We provide top-tier residential and commercial cleaning in Charleston, Summerville, and the Lowcountry. Request a custom quote today.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Star Cleaning Service SC',
    description: 'Get in touch with Star Cleaning Service. We provide top-tier residential and commercial cleaning in Charleston, Summerville, and the Lowcountry.',
    url: 'https://www.starcleaningsc.com/contact',
    type: 'website',
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
