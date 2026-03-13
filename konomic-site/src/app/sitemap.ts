import type { MetadataRoute } from 'next';

const baseUrl = 'https://konomic.es';

const routes = [
  '/en', '/en/about', '/en/services', '/en/faq', '/en/contact', '/en/book-consultation', '/en/how-we-work', '/en/legal-notice', '/en/privacy-policy', '/en/terms',
  '/en/services/property-real-estate-lawyer-tenerife', '/en/services/residency-immigration-lawyer-tenerife', '/en/services/business-corporate-lawyer-tenerife', '/en/services/contract-review-document-drafting',
  '/de', '/de/about', '/de/services', '/de/faq', '/de/contact', '/de/book-consultation', '/de/how-we-work', '/de/legal-notice', '/de/privacy-policy', '/de/terms',
  '/de/services/immobilienanwalt-teneriffa', '/de/services/aufenthaltsrecht-teneriffa', '/de/services/gesellschaftsrecht-teneriffa', '/de/services/vertragspruefung-teneriffa',
  '/ru', '/ru/about', '/ru/services', '/ru/faq', '/ru/contact', '/ru/book-consultation', '/ru/how-we-work', '/ru/legal-notice', '/ru/privacy-policy', '/ru/terms',
  '/ru/services/yurist-po-nedvizhimosti-tenerife', '/ru/services/immigracionnyy-yurist-tenerife', '/ru/services/biznes-yurist-tenerife', '/ru/services/proverka-dogovorov-tenerife',
  '/uk', '/uk/about', '/uk/services', '/uk/faq', '/uk/contact', '/uk/book-consultation', '/uk/how-we-work', '/uk/legal-notice', '/uk/privacy-policy', '/uk/terms',
  '/uk/services/advokat-z-nerukhomosti-tenerife', '/uk/services/immihratsiynyy-yuryst-tenerife', '/uk/services/biznes-yuryst-tenerife', '/uk/services/perevirka-dohovoriv-tenerife',
  '/es', '/es/about', '/es/services', '/es/faq', '/es/contact', '/es/book-consultation', '/es/how-we-work', '/es/legal-notice', '/es/privacy-policy', '/es/terms',
  '/es/services/abogado-inmobiliario-tenerife', '/es/services/abogado-extranjeria-tenerife', '/es/services/abogado-empresa-tenerife', '/es/services/revision-contratos-tenerife',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('/services/') ? 'monthly' : route.endsWith('/services') || /^\/(en|de|ru|uk|es)$/.test(route) ? 'weekly' : 'monthly',
    priority: /^\/(en|de|ru|uk|es)$/.test(route) ? 1 : route.includes('/services/') ? 0.8 : 0.7,
  }));
}
