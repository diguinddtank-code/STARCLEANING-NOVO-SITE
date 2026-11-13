import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('charleston');

export default function Page() {
  return <DeepCleanCityPage slug="charleston" />;
}
