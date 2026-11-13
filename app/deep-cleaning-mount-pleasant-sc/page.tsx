import DeepCleanCityPage, { deepCityMetadata } from '@/components/sub/DeepCleanCityPage';

export const metadata = deepCityMetadata('mount-pleasant');

export default function Page() {
  return <DeepCleanCityPage slug="mount-pleasant" />;
}
