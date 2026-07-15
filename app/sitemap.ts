import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/programs', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/membership', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/personal-training', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/free-trial', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
