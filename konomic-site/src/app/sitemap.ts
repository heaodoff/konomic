import type { MetadataRoute } from 'next';

const baseUrl = 'https://konomic.es';

const routes = [
  '/en',
  '/en/services',
  '/en/about',
  '/en/faq',
  '/en/contact',
  '/en/book-consultation',
  '/de',
  '/de/services',
  '/de/about',
  '/de/faq',
  '/de/contact',
  '/de/book-consultation',
  '/de/services/immobilienanwalt-teneriffa',
  '/de/services/aufenthaltsrecht-teneriffa',
  '/de/services/gesellschaftsrecht-teneriffa',
  '/de/services/vertragspruefung-teneriffa',
  '/ru',
  '/ru/services',
  '/ru/about',
  '/ru/faq',
  '/ru/contact',
  '/ru/book-consultation',
  '/ru/services/yurist-po-nedvizhimosti-tenerife',
  '/ru/services/immigracionnyy-yurist-tenerife',
  '/ru/services/biznes-yurist-tenerife',
  '/ru/services/proverka-dogovorov-tenerife',
  '/uk',
  '/uk/services',
  '/uk/about',
  '/uk/faq',
  '/uk/contact',
  '/uk/book-consultation',
  '/uk/services/advokat-z-nerukhomosti-tenerife',
  '/uk/services/immihratsiynyy-yuryst-tenerife',
  '/uk/services/biznes-yuryst-tenerife',
  '/uk/services/perevirka-dohovoriv-tenerife',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.endsWith('/services') || route === '/en' || route === '/de' || route === '/ru' || route === '/uk' ? 'weekly' : 'monthly',
    priority: route === '/en' ? 1 : route.split('/').length > 3 ? 0.8 : 0.7,
  }));
}
