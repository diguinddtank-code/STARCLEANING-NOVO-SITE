import ServicePage, { serviceMetadata } from '@/components/sub/ServicePage';

export const metadata = serviceMetadata('vacation-rental-airbnb-cleaning');

export default function Page() {
  return <ServicePage slug="vacation-rental-airbnb-cleaning" />;
}
