import ServicePage, { serviceMetadata } from '@/components/sub/ServicePage';

export const metadata = serviceMetadata('deep-cleaning');

export default function Page() {
  return <ServicePage slug="deep-cleaning" />;
}
