import type { Metadata } from 'next';
import { ServicesHub } from '@/components/sub/HubPages';
import { abs } from '@/lib/site';

const title = 'Cleaning Services in Charleston & Summerville | Star Cleaning';
const description =
  'House, deep, move-out, Airbnb, office and post-construction cleaning across the Charleston Lowcountry. Veteran-owned, 4.9★ on Google.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: abs('/services') },
  openGraph: { title, description, url: abs('/services'), type: 'website', images: [{ url: abs('/images/residential.png') }] },
};

export default function Page() {
  return <ServicesHub />;
}
