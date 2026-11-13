import ServicePage, { serviceMetadata } from '@/components/sub/ServicePage';

export const metadata = serviceMetadata('residential-cleaning');

export default function Page() {
  return <ServicePage slug="residential-cleaning" />;
}
