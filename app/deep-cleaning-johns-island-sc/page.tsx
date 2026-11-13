import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('johns-island');

export default function Page() {
  return <DeepCleanCityPage slug="johns-island" />;
}
