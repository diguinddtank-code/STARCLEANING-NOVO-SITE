import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('daniel-island');

export default function Page() {
  return <DeepCleanCityPage slug="daniel-island" />;
}
