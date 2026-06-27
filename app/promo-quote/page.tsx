import React from 'react';
import PromoClient from './PromoClient';

export const metadata = {
  title: 'Special Offer - Get a Free Quote | Star Cleaning SC',
  description: 'Get an instant free quote for house cleaning services in Charleston, SC and claim your special promotional offer. Book your 5-star rated cleaning today.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/promo-quote',
  },
};

export default function PromoQuotePage() {
  return <PromoClient />;
}
