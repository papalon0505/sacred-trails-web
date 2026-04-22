import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routes, getRouteBySlug } from '@/lib/data/routes'
import { waypointsByRoute } from '@/lib/data/waypoints'
import { poisByRoute } from '@/lib/data/pois'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

export function generateStaticParams() {
  return routes.map(r => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) return {}
  const name = route.name.en ?? slug
  const desc = route.description.en ?? ''
  const shortDesc = desc ? desc.slice(0, 155) + (desc.length > 155 ? '…' : '') : ''
  const TITLE_OVERRIDES: Record<string, string> = {
    'camino-frances': `Camino Francés Complete Guide: ${route.totalDistanceKm}km, ${route.averageDays} Days, Offline Navigation`,
    'kumano-nakahechi': `Kumano Nakahechi Guide: The Emperor's Ancient Pilgrimage Route (Offline)`,
    'shikoku-henro': 'Shikoku 88 Temple Pilgrimage Complete Guide — Offline Navigation',
    'saigoku-33': 'Saigoku 33 Kannon Pilgrimage Complete Guide',
  }
  const title = TITLE_OVERRIDES[slug] ?? `${name} — ${route.totalDistanceKm}km · ${route.averageDays} Days · Sacred Trails`
  return {
    title,
    description: shortDesc || `${name}: ${route.totalDistanceKm}km pilgrimage route from ${route.startPoint} to ${route.endPoint}, typically walked in ${route.averageDays} days. Stage-by-stage offline navigation in Sacred Trails.`,
    alternates: {
      canonical: `https://sacredtrails.evelyn-ai.com/routes/${slug}`,
      languages: {
        'en': `https://sacredtrails.evelyn-ai.com/routes/${slug}`,
        'ja': `https://sacredtrails.evelyn-ai.com/ja/routes/${slug}`,
        'zh-TW': `https://sacredtrails.evelyn-ai.com/zh-TW/routes/${slug}`,
        'es': `https://sacredtrails.evelyn-ai.com/es/routes/${slug}`,
      },
    },
    openGraph: {
      title: `${name} — ${route.totalDistanceKm}km Pilgrimage Route`,
      description: shortDesc,
      url: `https://sacredtrails.evelyn-ai.com/routes/${slug}`,
      type: 'article',
    },
  }
}

const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  challenging: 'Challenging',
  very_challenging: 'Very Challenging',
}

function pickHighlights<T>(items: T[], max: number): T[] {
  if (items.length <= max) return items
  const step = items.length / max
  const out: T[] = []
  for (let i = 0; i < max; i++) out.push(items[Math.floor(i * step)])
  return out
}

export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) notFound()

  const name = route.name.en ?? slug
  const description = route.description.en ?? ''
  const paragraphs = description ? description.split(/\n{2,}/).filter(Boolean) : []
  const relatedRoutes = routes.filter(r => r.system === route.system && r.slug !== slug).slice(0, 3)
  const allWaypoints = waypointsByRoute[slug] || []
  const highlightWaypoints = pickHighlights(allWaypoints, 8)
  const pois = (poisByRoute[slug] || []).slice(0, 6)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sacredtrails.evelyn-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://sacredtrails.evelyn-ai.com/routes' },
      { '@type': 'ListItem', position: 3, name, item: `https://sacredtrails.evelyn-ai.com/routes/${slug}` },
    ],
  }

  const touristTripLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description: description || `${name} — ${route.totalDistanceKm}km pilgrimage route.`,
    touristType: 'Pilgrim',
    itinerary: allWaypoints.slice(0, 12).map((w, i) => ({
      '@type': 'Place',
      name: w.name.en,
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
          <a href="/" className="hover:text-forest">Home</a>{' / '}
          <a href="/routes" className="hover:text-forest">Routes</a>{' / '}
          <span className="text-stone-600">{name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-3">{name}</h1>
        <p className="text-stone-500 text-lg mb-6">
          {route.totalDistanceKm}km pilgrimage route in {route.country}
        </p>

        <div className="flex flex-wrap gap-6 bg-white rounded-2xl p-6 border border-stone-200 mb-8">
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">Distance</p>
            <p className="text-xl font-bold text-forest">{route.totalDistanceKm}km</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">Duration</p>
            <p className="text-xl font-bold text-forest">{route.averageDays} days</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">Difficulty</p>
            <p className="text-xl font-bold text-forest">{DIFFICULTY_LABELS[route.difficulty] ?? route.difficulty}</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">Certification</p>
            <p className="text-xl font-bold text-forest capitalize">{route.certificationType}</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">Start → End</p>
            <p className="text-sm font-medium text-stone-700">{route.startPoint} → {route.endPoint}</p>
          </div>
        </div>

        {paragraphs.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">About the Route</h2>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        ) : null}

        {highlightWaypoints.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Key Waypoints</h2>
            <ol className="space-y-4">
              {highlightWaypoints.map((w, i) => (
                <li key={`${w.route}-${i}`} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-forest">{w.name.en}</h3>
                    <span className="text-xs text-stone-400 tabular-nums flex-shrink-0">
                      {w.distanceFromStart}km from start · {w.elevation}m
                    </span>
                  </div>
                  {w.stampDescription?.en ? (
                    <p className="text-sm text-stone-600 leading-relaxed">{w.stampDescription.en}</p>
                  ) : null}
                </li>
              ))}
            </ol>
            {allWaypoints.length > highlightWaypoints.length ? (
              <p className="text-xs text-stone-400 mt-4 italic">
                {allWaypoints.length} waypoints total · Sacred Trails app contains full detail for every waypoint.
              </p>
            ) : null}
          </section>
        ) : null}

        {pois.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Points of Interest</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pois.map((p, i) => (
                <div key={`poi-${i}`} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="font-semibold text-forest">{p.name.en}</h3>
                    <span className="text-xs text-stone-400 capitalize">· {p.type.replace(/_/g, ' ')}</span>
                  </div>
                  {p.details?.en ? <p className="text-sm text-stone-600 leading-relaxed">{p.details.en}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="bg-forest text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Navigate the {name} Offline</h2>
          <p className="text-green-100 mb-6">
            Stage-by-stage navigation, full waypoint history, and lodging data — all offline in Sacred Trails. One $2.99 purchase unlocks all 18 routes.
          </p>
          <AppStoreBadge className="mx-auto" />
        </section>

        {relatedRoutes.length > 0 ? (
          <section>
            <h2 className="text-2xl font-bold text-ink mb-5">Related Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedRoutes.map(r => (
                <a key={r.slug} href={`/routes/${r.slug}`} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-forest transition-colors">
                  <p className="font-semibold text-forest text-sm">{r.name.en}</p>
                  <p className="text-xs text-stone-400 mt-1">{r.totalDistanceKm}km · {r.averageDays} days</p>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  )
}
