import type { MetadataRoute } from 'next'
import { routes } from '@/lib/data/routes'

const BASE = 'https://sacredtrails.evelyn-ai.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routeEntries = routes.map(r => ({
    url: `${BASE}/routes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/routes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guide/camino-de-santiago`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/guide/kumano-kodo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/guide/shikoku-henro`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/en`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/ja`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/es`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...routeEntries,
  ]
}
