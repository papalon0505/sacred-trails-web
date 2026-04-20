import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routes, getRouteBySlug } from '@/lib/data/routes'
import { getStampWaypointsForRoute } from '@/lib/data/waypoints'
import { getPOIsForRoute } from '@/lib/data/pois'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { WaypointCard } from '@/components/WaypointCard'
import { JsonLd } from '@/components/JsonLd'

export function generateStaticParams() {
  return routes.map(r => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) return {}
  const name = route.name.en ?? slug
  const TITLE_OVERRIDES: Record<string, string> = {
    'camino-frances': `Camino Francés Complete Guide: ${route.totalDistanceKm}km, ${route.averageDays} Days`,
    'kumano-nakahechi': `Kumano Nakahechi Guide: The Emperor's Ancient Pilgrimage Route`,
    'shikoku-henro': 'Shikoku 88 Temple Pilgrimage Complete Guide',
    'saigoku-33': 'Saigoku 33 Kannon Pilgrimage Guide',
  }
  const title = TITLE_OVERRIDES[slug] ?? `${name} Guide: ${route.totalDistanceKm}km Pilgrimage Route`
  return {
    title,
    description: route.description.en?.slice(0, 155) ?? `Complete guide to the ${name}: distance, stages, waypoints, and practical info.`,
    alternates: {
      canonical: `https://sacredtrails.evelyn-ai.com/routes/${slug}`,
      languages: {
        'en': `https://sacredtrails.evelyn-ai.com/routes/${slug}`,
        'ja': `https://sacredtrails.evelyn-ai.com/ja/routes/${slug}`,
        'zh-TW': `https://sacredtrails.evelyn-ai.com/zh-TW/routes/${slug}`,
        'es': `https://sacredtrails.evelyn-ai.com/es/routes/${slug}`,
      },
    },
  }
}

const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  challenging: 'Challenging',
  very_challenging: 'Very Challenging',
}

const OFFICIAL_LINKS: Record<string, { url: string; label: string }> = {
  camino: { url: 'https://oficinadelperegrino.com/en/', label: 'Oficina del Peregrino' },
  kumano: { url: 'https://www.kumano-travel.com/en', label: 'Kumano Travel (Official)' },
  shikoku: { url: 'https://88shikokuhenro.jp/en/', label: 'Shikoku 88 Official' },
  saigoku: { url: 'https://www.saikoku33.gr.jp/', label: 'Saigoku 33 Official' },
}

export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) notFound()

  const waypoints = getStampWaypointsForRoute(slug, 5)
  const pois = getPOIsForRoute(slug, 4)
  const relatedRoutes = routes.filter(r => r.system === route.system && r.slug !== slug).slice(0, 3)
  const official = OFFICIAL_LINKS[route.system]

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sacredtrails.evelyn-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://sacredtrails.evelyn-ai.com/routes' },
      { '@type': 'ListItem', position: 3, name: route.name.en, item: `https://sacredtrails.evelyn-ai.com/routes/${slug}` },
    ],
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <div className="max-w-4xl mx-auto px-4 py-12">

        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-forest">Home</a>{' / '}
          <a href="/routes" className="hover:text-forest">Routes</a>{' / '}
          <span className="text-stone-600">{route.name.en}</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-3">{route.name.en}</h1>
        {route.name.ja ? (
          <p className="text-stone-500 text-lg mb-6">{route.name.ja}</p>
        ) : null}

        {/* Stats bar */}
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

        {route.description.en ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">About the Route</h2>
            <p className="text-stone-600 leading-relaxed text-base">{route.description.en}</p>
          </section>
        ) : null}

        {waypoints.length > 0 ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-6">Key Waypoints</h2>
            <div className="space-y-6">
              {waypoints.map((w, i) => <WaypointCard key={i} waypoint={w} />)}
            </div>
          </section>
        ) : null}

        {pois.length > 0 ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Points of Interest</h2>
            <div className="grid grid-cols-2 gap-4">
              {pois.map((poi, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-stone-200">
                  <p className="font-semibold text-forest text-sm">{poi.name.en ?? Object.values(poi.name)[0]}</p>
                  <p className="text-xs text-stone-400 capitalize mt-1">{poi.type.replace(/([A-Z])/g, ' $1').trim()}</p>
                  {poi.details.en ? (
                    <p className="text-xs text-stone-500 mt-2">{poi.details.en}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* App CTA */}
        <section className="bg-forest text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Navigate the {route.name.en} Offline</h2>
          <p className="text-green-100 mb-6">Download Sacred Trails and walk with full route data — no internet required.</p>
          <AppStoreBadge className="mx-auto bg-white text-forest hover:bg-green-50" />
        </section>

        {official ? (
          <p className="text-sm text-stone-400 mb-10">
            Official resource:{' '}
            <a href={official.url} target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">
              {official.label}
            </a>
          </p>
        ) : null}

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
