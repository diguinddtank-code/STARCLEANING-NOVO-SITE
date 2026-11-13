import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Explicitly welcome AI Search & LLM Crawlers for GEO (Generative Engine Optimization)
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'cohere-ai',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    // llms.txt is discovered at /llms.txt; the sitemap directive only takes XML sitemaps.
    sitemap: 'https://www.starcleaningsc.com/sitemap.xml',
  };
}
