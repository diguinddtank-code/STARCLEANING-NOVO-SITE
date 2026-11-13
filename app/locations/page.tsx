import type { Metadata } from 'next';
import { LocationsHub } from '@/components/sub/HubPages';
import { abs } from '@/lib/site';

const title = 'Service Areas | House Cleaning Across the Charleston Lowcountry';
const description =
  'House cleaning in Charleston, Summerville, North Charleston, Mount Pleasant, James, Daniel & Johns Island and Ladson. Veteran-owned.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: abs('/locations') },
  openGraph: { title, description, url: abs('/locations'), type: 'website', images: [{ url: abs('/images/team2.png') }] },
};

export default function Page() {
  return <LocationsHub />;
}
