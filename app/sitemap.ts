import { MetadataRoute } from 'next';
import { locationsData } from '@/lib/locationsData';

// Bump this only when you actually edit a page's content — it is used as the
// lastModified date sent to search engines. Using `new Date()` here would
// tell crawlers every single page changed on every single build/request,
// which trains them to stop trusting the freshness signal.
const CONTENT_LAST_MODIFIED = new Date('2026-09-25');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.starcleaningsc.com';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
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
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Locations routes
  const locationRoutes = Object.keys(locationsData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Specialist City Pages (SEO GOLD)
  const cityPages = [
    'deep-cleaning-charleston-sc',
    'deep-cleaning-summerville-sc',
    'deep-cleaning-ladson-sc',
    'deep-cleaning-north-charleston-sc',
    'deep-cleaning-james-island-sc',
    'deep-cleaning-daniel-island-sc',
    'deep-cleaning-johns-island-sc',
    'deep-cleaning-mount-pleasant-sc'
  ];

  const cityRoutes = cityPages.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  // Blog posts
  const blogPosts = [
    'how-to-clean-before-moving-in-checklist-charleston-sc',
    'how-to-deep-clean-house-step-by-step-charleston-sc',
    'first-recurring-clean-charleston-summerville-sc',
    'charleston-airbnb-cleaning-guide',
    'move-out-cleaning-cost-summerville-sc',
    'deep-cleaning-vs-standard-cleaning-north-charleston',
  ];

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...locationRoutes, ...cityRoutes, ...blogRoutes];
}
