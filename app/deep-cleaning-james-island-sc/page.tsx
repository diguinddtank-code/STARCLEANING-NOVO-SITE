import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('james-island');

export default function Page() {
  return <DeepCleanCityPage slug="james-island" />;
}
