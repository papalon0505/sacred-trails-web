import type { Metadata } from 'next'
import { kumanoShrines, caminoCathedrals } from '@/lib/data/sacred-sites'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, ALL_LOCALES, BASE_URL } from '@/lib/i18n'

const l = 'en' as const
const dict = getDict(l)
const t = dict.sacredSites

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDesc,
  alternates: {
    canonical: `${BASE_URL}/sacred-sites`,
    languages: Object.fromEntries(ALL_LOCALES.map(loc => [loc, `${BASE_URL}${localePath(loc, '/sacred-sites')}`])),
  },
  openGraph: { title: t.metaTitle, description: t.metaDesc, url: `${BASE_URL}/sacred-sites`, type: 'article' },
}

function SiteCard({ site, t }: { site: typeof kumanoShrines[0]; t: typeof dict.sacredSites }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-forest transition-colors">
      <h3 className="text-xl font-bold text-ink mb-1">{site.name.en}</h3>
      {site.tagline.en && <p className="text-amber text-sm font-medium mb-3 italic">"{site.tagline.en}"</p>}
      <dl className="space-y-3 text-sm">
        {site.highlight.en && (
          <div>
            <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.highlight}</dt>
            <dd className="text-ink">{site.highlight.en}</dd>
          </div>
        )}
        {site.story.en && (
          <div>
            <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.story}</dt>
            <dd className="text-stone-600 leading-relaxed">{site.story.en}</dd>
          </div>
        )}
        {site.blessing.en && (
          <div>
            <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.blessing}</dt>
            <dd className="text-ink">{site.blessing.en}</dd>
          </div>
        )}
        {site.photoTip.en && (
          <div>
            <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.photoTip}</dt>
            <dd className="text-stone-600">{site.photoTip.en}</dd>
          </div>
        )}
      </dl>
    </div>
  )
}

export default function SacredSitesPage() {
  const ldPlaces = [...kumanoShrines, ...caminoCathedrals]
    .filter(s => s.lat && s.lng)
    .map(s => ({
      '@type': 'TouristAttraction',
      name: s.name.en,
      description: s.story.en || s.tagline.en,
      geo: s.lat ? { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng } : undefined,
    }))

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: ldPlaces }} />

      <h1 className="text-4xl font-bold text-ink mb-3">{t.title}</h1>
      <p className="text-stone-500 mb-12 text-lg max-w-2xl">{t.subtitle}</p>

      {/* Kumano Shrines */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-forest mb-2 flex items-center gap-2">
          ⛩️ {t.kumanoTitle}
        </h2>
        <p className="text-stone-500 text-sm mb-6">Three UNESCO World Heritage grand shrines at the heart of the Kumano Kodo pilgrimage.</p>
        <div className="grid md:grid-cols-1 gap-5">
          {kumanoShrines.map(site => <SiteCard key={site.id} site={site} t={t} />)}
        </div>
      </section>

      {/* Camino Cathedrals */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-forest mb-2 flex items-center gap-2">
          🐚 {t.caminoTitle}
        </h2>
        <p className="text-stone-500 text-sm mb-6">Historic cathedrals and sacred landmarks along the Camino de Santiago routes.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {caminoCathedrals.map(site => <SiteCard key={site.id} site={site} t={t} />)}
        </div>
      </section>

      <div className="bg-forest rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{t.appCtaTitle}</h2>
        <p className="text-green-100 mb-6">{t.appCtaDesc}</p>
        <AppStoreBadge className="justify-center" />
      </div>
    </div>
  )
}
