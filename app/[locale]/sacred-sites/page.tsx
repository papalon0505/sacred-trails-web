import type { Metadata } from 'next'
import { kumanoShrines, caminoCathedrals } from '@/lib/data/sacred-sites'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, pick, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return LOCALIZED.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const dict = getDict(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/sacred-sites')}`
  return {
    title: dict.sacredSites.metaTitle,
    description: dict.sacredSites.metaDesc,
    alternates: { canonical: `${BASE_URL}${localePath(l, '/sacred-sites')}`, languages },
    openGraph: { title: dict.sacredSites.metaTitle, description: dict.sacredSites.metaDesc, url: `${BASE_URL}${localePath(l, '/sacred-sites')}`, type: 'article' },
  }
}

export default async function LocaleSacredSitesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const dict = getDict(l)
  const t = dict.sacredSites

  const ldPlaces = [...kumanoShrines, ...caminoCathedrals]
    .filter(s => s.lat && s.lng)
    .map(s => ({
      '@type': 'TouristAttraction',
      name: pick(s.name, l) || s.name.en,
      description: pick(s.story, l) || pick(s.tagline, l),
      geo: s.lat ? { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng } : undefined,
    }))

  function SiteCard({ site }: { site: typeof kumanoShrines[0] }) {
    const name = pick(site.name, l) || site.name.en
    const tagline = pick(site.tagline, l)
    const highlight = pick(site.highlight, l)
    const story = pick(site.story, l)
    const blessing = pick(site.blessing, l)
    const photoTip = pick(site.photoTip, l)
    return (
      <div className="bg-white rounded-2xl border border-stone-200 p-6 hover:border-forest transition-colors">
        <h3 className="text-xl font-bold text-ink mb-1">{name}</h3>
        {tagline && <p className="text-amber text-sm font-medium mb-3 italic">"{tagline}"</p>}
        <dl className="space-y-3 text-sm">
          {highlight && (
            <div>
              <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.highlight}</dt>
              <dd className="text-ink">{highlight}</dd>
            </div>
          )}
          {story && (
            <div>
              <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.story}</dt>
              <dd className="text-stone-600 leading-relaxed">{story}</dd>
            </div>
          )}
          {blessing && (
            <div>
              <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.blessing}</dt>
              <dd className="text-ink">{blessing}</dd>
            </div>
          )}
          {photoTip && (
            <div>
              <dt className="text-stone-400 font-medium text-xs uppercase tracking-wide mb-0.5">{t.photoTip}</dt>
              <dd className="text-stone-600">{photoTip}</dd>
            </div>
          )}
        </dl>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: ldPlaces }} />

      <h1 className="text-4xl font-bold text-ink mb-3">{t.title}</h1>
      <p className="text-stone-500 mb-12 text-lg max-w-2xl">{t.subtitle}</p>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-forest mb-6 flex items-center gap-2">⛩️ {t.kumanoTitle}</h2>
        <div className="grid gap-5">
          {kumanoShrines.map(site => <SiteCard key={site.id} site={site} />)}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-forest mb-6 flex items-center gap-2">🐚 {t.caminoTitle}</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {caminoCathedrals.map(site => <SiteCard key={site.id} site={site} />)}
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
