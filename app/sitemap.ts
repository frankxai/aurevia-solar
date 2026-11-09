import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aurevia-solar.vercel.app';

  const routes = [
    '',
    '/atelier',
    '/shop',
    '/proof',
    '/agb',
    '/analyse',
    '/autarkie',
    '/datenschutz',
    '/herkunft',
    '/impressum',
    '/konzept',
    '/realisierung',
    '/referenzen',
    '/widerruf',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
