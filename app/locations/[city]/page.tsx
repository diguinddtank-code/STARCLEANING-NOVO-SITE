import { notFound } from 'next/navigation';
import LocationPage, { locationMetadata } from '@/components/sub/LocationPage';
import { locationsData } from '@/lib/locationsData';

export function generateStaticParams() {
  return Object.keys(locationsData).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  return locationMetadata(city);
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  if (!locationsData[city]) notFound();
  return <LocationPage slug={city} />;
}
