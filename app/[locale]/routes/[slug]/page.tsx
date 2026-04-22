import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routes, getRouteBySlug } from '@/lib/data/routes'
import { waypointsByRoute } from '@/lib/data/waypoints'
import { poisByRoute } from '@/lib/data/pois'
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
  const desc = pick(route.description, l)
  const shortDesc = desc ? desc.slice(0, 155) + (desc.length > 155 ? '…' : '') : ''
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, `/routes/${slug}`)}`
  return {
    title: `${name} — ${route.totalDistanceKm}km · ${route.averageDays} days · Sacred Trails Offline Guide`,
    description: shortDesc || `${name}: ${route.totalDistanceKm}km pilgrimage route from ${route.startPoint} to ${route.endPoint}. Full offline stages, waypoints, and stamps in Sacred Trails.`,
    alternates: { canonical: `${BASE_URL}${localePath(l, `/routes/${slug}`)}`, languages },
    openGraph: {
      title: `${name} — ${route.totalDistanceKm}km Pilgrimage Route`,
      description: shortDesc,
      url: `${BASE_URL}${localePath(l, `/routes/${slug}`)}`,
      type: 'article',
    },
  }
}

function pickHighlights<T>(items: T[], max: number): T[] {
  if (items.length <= max) return items
  const step = items.length / max
  const out: T[] = []
  for (let i = 0; i < max; i++) out.push(items[Math.floor(i * step)])
  return out
}

export default async function LocaleRouteDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const l = locale as Locale
  const dict = getDict(l)
  const route = getRouteBySlug(slug)
  if (!route) notFound()

  const name = pick(route.name, l) || slug
  const description = pick(route.description, l)
  const paragraphs = description ? description.split(/\n{2,}/).filter(Boolean) : []
  const relatedRoutes = routes.filter(r => r.system === route.system && r.slug !== slug).slice(0, 3)
  const allWaypoints = waypointsByRoute[slug] || []
  const highlightWaypoints = pickHighlights(allWaypoints, 8)
  const pois = (poisByRoute[slug] || []).slice(0, 6)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.route.breadcrumbHome, item: `${BASE_URL}${localePath(l, '/')}` },
      { '@type': 'ListItem', position: 2, name: dict.route.breadcrumbRoutes, item: `${BASE_URL}${localePath(l, '/routes')}` },
      { '@type': 'ListItem', position: 3, name, item: `${BASE_URL}${localePath(l, `/routes/${slug}`)}` },
    ],
  } as Record<string, unknown>

  const touristTripLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description: description || `${name} — ${route.totalDistanceKm}km pilgrimage route.`,
    touristType: 'Pilgrim',
    itinerary: allWaypoints.slice(0, 12).map((w, i) => ({
      '@type': 'Place',
      name: pick(w.name, l),
      position: i + 1,
      geo: w.lat && w.lon ? { '@type': 'GeoCoordinates', latitude: w.lat, longitude: w.lon } : undefined,
    })),
    offers: {
      '@type': 'Offer',
      price: '2.99',
      priceCurrency: 'USD',
      url: 'https://apps.apple.com/app/id6761192860',
    },
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={touristTripLd} />
      <div className="max-w-3xl mx-auto px-4 py-12">
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

        {paragraphs.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">{dict.route.sections.about}</h2>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        ) : null}

        {highlightWaypoints.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">{dict.route.sections.waypoints}</h2>
            <ol className="space-y-4">
              {highlightWaypoints.map((w, i) => {
                const wName = pick(w.name, l)
                const stampDesc = pick(w.stampDescription, l)
                return (
                  <li key={`${w.route}-${i}`} className="bg-white rounded-xl p-5 border border-stone-200">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-forest">{wName}</h3>
                      <span className="text-xs text-stone-400 tabular-nums flex-shrink-0">
                        {dict.route.distanceFromStart(w.distanceFromStart, w.elevation)}
                      </span>
                    </div>
                    {stampDesc ? (
                      <p className="text-sm text-stone-600 leading-relaxed">{stampDesc}</p>
                    ) : null}
                  </li>
                )
              })}
            </ol>
            {allWaypoints.length > highlightWaypoints.length ? (
              <p className="text-xs text-stone-400 mt-4 italic">
                {allWaypoints.length} {dict.route.sections.waypoints.toLowerCase()} · Sacred Trails app contains full detail for every waypoint.
              </p>
            ) : null}
          </section>
        ) : null}

        {pois.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">{dict.route.sections.pois}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pois.map((p, i) => {
                const pName = pick(p.name, l)
                const pDetails = pick(p.details, l)
                return (
                  <div key={`poi-${i}`} className="bg-white rounded-xl p-5 border border-stone-200">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="font-semibold text-forest">{pName}</h3>
                      <span className="text-xs text-stone-400 capitalize">· {p.type.replace(/_/g, ' ')}</span>
                    </div>
                    {pDetails ? <p className="text-sm text-stone-600 leading-relaxed">{pDetails}</p> : null}
                  </div>
                )
              })}
            </div>
          </section>
        ) : null}

        <section className="bg-forest text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">{dict.route.ctaTitle(name)}</h2>
          <p className="text-green-100 mb-6">{dict.route.ctaDesc}</p>
          <AppStoreBadge className="mx-auto" locale={l} />
        </section>

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
