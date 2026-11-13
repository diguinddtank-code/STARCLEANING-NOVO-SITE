import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('north-charleston');

export default function Page() {
  return <DeepCleanCityPage slug="north-charleston" />;
}
