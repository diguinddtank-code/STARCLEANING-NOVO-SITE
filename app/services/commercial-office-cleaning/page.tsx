import ServicePage, { serviceMetadata } from '@/components/sub/ServicePage';

export const metadata = serviceMetadata('commercial-office-cleaning');

export default function Page() {
  return <ServicePage slug="commercial-office-cleaning" />;
}
