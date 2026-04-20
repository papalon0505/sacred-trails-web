import type { MetadataRoute } from 'next'
import { routes } from '@/lib/data/routes'
import { ALL_LOCALES, BASE_URL, localePath } from '@/lib/i18n'

const GUIDE_SLUGS = ['camino-de-santiago', 'kumano-kodo', 'shikoku-henro']

function localizedEntry(path: string, priority: number, changeFrequency: 'weekly' | 'monthly'): MetadataRoute.Sitemap {
  return ALL_LOCALES.map(locale => ({
    url: `${BASE_URL}${localePath(locale, path)}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  entries.push(...localizedEntry('/', 1, 'weekly'))
  entries.push(...localizedEntry('/routes', 0.9, 'monthly'))
  entries.push(...localizedEntry('/guide', 0.8, 'monthly'))
  entries.push(...localizedEntry('/dual-pilgrim', 0.9, 'monthly'))
  for (const g of GUIDE_SLUGS) entries.push(...localizedEntry(`/guide/${g}`, 0.9, 'monthly'))
  for (const r of routes) entries.push(...localizedEntry(`/routes/${r.slug}`, 0.8, 'monthly'))
  return entries
}
