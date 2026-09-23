import React from 'react';
import PromoClient from './PromoClient';

export const metadata = {
  title: 'Thanksgiving Special - Get a Free Quote | Star Cleaning SC',
  description: 'Get your home guest-ready for the holidays with our Thanksgiving Cleaning Special in Charleston & Summerville, SC. Claim 20% off your first deep clean today.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/promo-quote',
  },
};

export default function PromoQuotePage() {
  return <PromoClient />;
}
