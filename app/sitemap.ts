import { MetadataRoute } from 'next';
import { locationsData } from '@/lib/locationsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.starcleaningsc.com';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Services routes
  const services = [
    'commercial-office-cleaning',
    'deep-cleaning',
    'move-in-move-out-cleaning',
    'post-construction-cleaning',
    'residential-cleaning',
    'vacation-rental-airbnb-cleaning'
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Locations routes
  const locationRoutes = Object.keys(locationsData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes, ...locationRoutes];
}
