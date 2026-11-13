import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('summerville');

export default function Page() {
  return <DeepCleanCityPage slug="summerville" />;
}
