import type { MetadataRoute } from 'next';

const baseUrl = 'https://konomic.es';

const routes = [
  '/en',
  '/en/services',
  '/en/about',
  '/en/faq',
  '/en/contact',
  '/en/book-consultation',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/en' ? 'weekly' : 'monthly',
    priority: route === '/en' ? 1 : 0.7,
  }));
}
