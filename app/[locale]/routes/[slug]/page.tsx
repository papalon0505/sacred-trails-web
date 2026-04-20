import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routes, getRouteBySlug } from '@/lib/data/routes'
import { getWaypointsForRoute } from '@/lib/data/waypoints'
import { getPOIsForRoute } from '@/lib/data/pois'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, pick, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of LOCALIZED) {
    for (const r of routes) params.push({ locale, slug: r.slug })
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const route = getRouteBySlug(slug)
  if (!route) return {}
  const name = pick(route.name, l) || slug
  const desc = pick(route.description, l) || ''
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, `/routes/${slug}`)}`
  return {
    title: `${name} — ${route.totalDistanceKm}km`,
    description: desc.slice(0, 155) || name,
    alternates: { canonical: `${BASE_URL}${localePath(l, `/routes/${slug}`)}`, languages },
  }
}

const OFFICIAL_LINKS: Record<string, { url: string; label: string }> = {
  camino: { url: 'https://oficinadelperegrino.com/en/', label: 'Oficina del Peregrino' },
  kumano: { url: 'https://www.kumano-travel.com/en', label: 'Kumano Travel' },
  shikoku: { url: 'https://88shikokuhenro.jp/en/', label: 'Shikoku 88 Official' },
  saigoku: { url: 'https://www.saikoku33.gr.jp/', label: 'Saigoku 33 Official' },
}

export default async function LocaleRouteDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const l = locale as Locale
  const dict = getDict(l)
  const route = getRouteBySlug(slug)
  if (!route) notFound()

  const name = pick(route.name, l) || slug
  const description = pick(route.description, l)
  const allWaypoints = getWaypointsForRoute(slug)
  const stampWaypoints = allWaypoints
    .filter(w => w.hasStamp && pick(w.stampDescription, l))
    .sort((a, b) => a.stageNumber - b.stageNumber)
    .slice(0, 5)
  const pois = getPOIsForRoute(slug, 4)
  const relatedRoutes = routes.filter(r => r.system === route.system && r.slug !== slug).slice(0, 3)
  const official = OFFICIAL_LINKS[route.system]

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.route.breadcrumbHome, item: `${BASE_URL}${localePath(l, '/')}` },
      { '@type': 'ListItem', position: 2, name: dict.route.breadcrumbRoutes, item: `${BASE_URL}${localePath(l, '/routes')}` },
      { '@type': 'ListItem', position: 3, name, item: `${BASE_URL}${localePath(l, `/routes/${slug}`)}` },
    ],
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href={localePath(l, '/')} className="hover:text-forest">{dict.route.breadcrumbHome}</a>{' / '}
          <a href={localePath(l, '/routes')} className="hover:text-forest">{dict.route.breadcrumbRoutes}</a>{' / '}
          <span className="text-stone-600">{name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-3">{name}</h1>
        {route.name.en && route.name.en !== name ? (
          <p className="text-stone-500 text-lg mb-6">{route.name.en}</p>
        ) : null}

        <div className="flex flex-wrap gap-6 bg-white rounded-2xl p-6 border border-stone-200 mb-8">
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">{dict.route.labels.distance}</p>
            <p className="text-xl font-bold text-forest">{route.totalDistanceKm}km</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">{dict.route.labels.duration}</p>
            <p className="text-xl font-bold text-forest">{route.averageDays} {dict.route.daysUnit}</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">{dict.route.labels.difficulty}</p>
            <p className="text-xl font-bold text-forest">{dict.route.difficultyLabels[route.difficulty] ?? route.difficulty}</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">{dict.route.labels.certification}</p>
            <p className="text-xl font-bold text-forest capitalize">{route.certificationType}</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">{dict.route.labels.startEnd}</p>
            <p className="text-sm font-medium text-stone-700">{route.startPoint} → {route.endPoint}</p>
          </div>
        </div>

        {description ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">{dict.route.sections.about}</h2>
            <p className="text-stone-600 leading-relaxed text-base whitespace-pre-line">{description}</p>
          </section>
        ) : null}

        {stampWaypoints.length > 0 ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-6">{dict.route.sections.waypoints}</h2>
            <div className="space-y-6">
              {stampWaypoints.map((w, i) => {
                const wName = pick(w.name, l) || Object.values(w.name)[0] || ''
                const story = pick(w.stampDescription, l)
                return (
                  <div key={i} className="border-l-2 border-amber pl-4 py-1">
                    <h4 className="font-semibold text-forest text-sm mb-1">{wName}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed line-clamp-4">{story}</p>
                    {w.distanceFromStart > 0 ? (
                      <p className="text-xs text-stone-400 mt-1">{dict.route.distanceFromStart(w.distanceFromStart, w.elevation)}</p>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </section>
        ) : null}

        {pois.length > 0 ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">{dict.route.sections.pois}</h2>
            <div className="grid grid-cols-2 gap-4">
              {pois.map((poi, i) => {
                const pName = pick(poi.name, l) || Object.values(poi.name)[0] || ''
                const pDetail = pick(poi.details, l)
                return (
                  <div key={i} className="bg-white rounded-xl p-4 border border-stone-200">
                    <p className="font-semibold text-forest text-sm">{pName}</p>
                    <p className="text-xs text-stone-400 capitalize mt-1">{poi.type.replace(/([A-Z])/g, ' $1').trim()}</p>
                    {pDetail ? <p className="text-xs text-stone-500 mt-2">{pDetail}</p> : null}
                  </div>
                )
              })}
            </div>
          </section>
        ) : null}

        <section className="bg-forest text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">{dict.route.ctaTitle(name)}</h2>
          <p className="text-green-100 mb-6">{dict.route.ctaDesc}</p>
          <AppStoreBadge className="mx-auto bg-white text-forest hover:bg-green-50" />
        </section>

        {official ? (
          <p className="text-sm text-stone-400 mb-10">
            {dict.route.sections.official}:{' '}
            <a href={official.url} target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">{official.label}</a>
          </p>
        ) : null}

        {relatedRoutes.length > 0 ? (
          <section>
            <h2 className="text-2xl font-bold text-ink mb-5">{dict.route.sections.related}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedRoutes.map(r => {
                const rName = pick(r.name, l) || r.slug
                return (
                  <a key={r.slug} href={localePath(l, `/routes/${r.slug}`)} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-forest transition-colors">
                    <p className="font-semibold text-forest text-sm">{rName}</p>
                    <p className="text-xs text-stone-400 mt-1">{r.totalDistanceKm}km · {r.averageDays} {dict.route.daysUnit}</p>
                  </a>
                )
              })}
            </div>
          </section>
        ) : null}
      </div>
    </>
  )
}
