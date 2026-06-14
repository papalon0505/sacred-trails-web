import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { routes, getRouteBySlug } from '@/lib/data/routes'
import { waypointsByRoute } from '@/lib/data/waypoints'
import { poisByRoute } from '@/lib/data/pois'
import { lodgingByRoute, getLodgingName } from '@/lib/data/lodging'
import { shikokuSections } from '@/lib/data/shikoku-sections'
import { saigokuSections } from '@/lib/data/saigoku-sections'
import { caminoFrancésSections } from '@/lib/data/camino-sections'
import { kumanoSections } from '@/lib/data/kumano-sections'
import { officialLinksByRoute } from '@/lib/data/official-links'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { routeSafetyBySlug } from '@/lib/data/route-safety'
import { buildPlanningSnapshot, buildRouteDecisionGuide, buildRouteMarkerHints, formatPlanningValue, getAverageDailyKm, getLodgingDisclosure, getScopedRouteWaypoints, summarizeLodgingForItinerary, summarizeLodgingByTown } from '@/lib/route-planning'
import { RouteItineraryPlanner } from '@/components/RouteItineraryPlanner'

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
  const allWaypoints = getScopedRouteWaypoints(route, waypointsByRoute[slug] || [])
  const highlightWaypoints = pickHighlights(allWaypoints, 8)
  const pois = (poisByRoute[slug] || []).slice(0, 6)
  const allLodging = lodgingByRoute[slug] || []
  const lodging = allLodging.slice(0, 8)
  const lodgingTownSummaries = summarizeLodgingByTown(allLodging).slice(0, 8)
  const itineraryLodgingTownSummaries = summarizeLodgingForItinerary(allLodging, allWaypoints)
  const routeMarkerHints = buildRouteMarkerHints(route, allWaypoints)
  const lodgingDisclosure = getLodgingDisclosure(route)
  const averageDailyKm = getAverageDailyKm(route)
  const countryLabel = route.country === 'ES' ? 'Spain' : route.country === 'PT+ES' ? 'Portugal and Spain' : route.country
  const certificationLabel = route.certificationType === 'compostela' ? 'Compostela' : route.certificationType
  const certificationMinimum = route.certificationType === 'compostela' ? '100km walking' : undefined
  const planningSnapshot = buildPlanningSnapshot(route, {
    distance: 'Distance',
    typicalDuration: 'Typical duration',
    averageDay: 'Average day',
    difficulty: 'Difficulty',
    bestMonths: 'Best months',
    certificationMinimum: 'Certificate minimum',
    lodgingDensity: 'Lodging density',
    resupply: 'Resupply',
    access: 'Access',
    daysUnit: 'days',
    perDayUnit: 'km/day',
    difficultyValue: DIFFICULTY_LABELS[route.difficulty] ?? formatPlanningValue(route.difficulty),
    certificationMinimumValue: certificationMinimum,
    transportAccess: route.transportAccess?.en,
  })
  const decisionGuide = buildRouteDecisionGuide(route, {
    bestFor: 'Best for',
    timeCommitment: 'Time commitment',
    lodgingAndResupply: 'Lodging and resupply',
    offlineUse: 'Why use Sacred Trails',
    bestForFallback: 'Route planning',
    timeCommitmentValue: (days, dailyKm) => `${days} walking days at about ${dailyKm}km/day`,
    lodgingResupplyValue: (lodging, resupply) => `${formatPlanningValue(lodging)} lodging · ${formatPlanningValue(resupply)} resupply`,
    offlineUseValue: 'Offline stages, waypoint stories, lodging notes, and route context stay available when mobile signal drops.',
  })

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
      availability: 'https://schema.org/InStock',
      url: 'https://apps.apple.com/app/id6761192860',
    },
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={touristTripLd} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <Link href="/" className="hover:text-forest">Home</Link>{' / '}
          <Link href="/routes" className="hover:text-forest">Routes</Link>{' / '}
          <span className="text-stone-600">{name}</span>
        </nav>

        {/* Route Hero */}
        <div className="relative w-full h-52 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image
            src={`/routes/${slug}/hero.jpg`}
            alt={`${name} pilgrimage route`}
            fill
            sizes="(min-width: 768px) 768px, calc(100vw - 32px)"
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-ink mb-3">{name}</h1>
        <p className="text-stone-500 text-lg mb-6">
          {route.totalDistanceKm}km pilgrimage route in {countryLabel}
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
            <p className="text-xl font-bold text-forest">{certificationLabel}</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide">Start → End</p>
            <p className="text-sm font-medium text-stone-700">{route.startPoint} → {route.endPoint}</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">Planning Snapshot</h2>
          <div className="bg-white rounded-2xl p-6 border border-stone-200">
            <div className="grid sm:grid-cols-2 gap-4">
              {planningSnapshot.map(item => (
                <div key={item.label}>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-medium text-stone-700">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">Is this route a good fit?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {decisionGuide.map(item => (
              <div key={item.label} className="bg-white rounded-xl p-5 border border-stone-200">
                <p className="text-xs text-stone-400 uppercase tracking-wide mb-2">{item.label}</p>
                <p className="text-sm text-stone-700 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <RouteItineraryPlanner
          route={route}
          lodgingTownSummaries={itineraryLodgingTownSummaries}
          routeMarkerHints={routeMarkerHints}
          labels={{
            title: 'Rough Distance Planner',
            intro: `Use this as a rough distance sketch before detailed planning: ${route.averageDays} walking days across ${route.totalDistanceKm}km, averaging about ${averageDailyKm}km per day. Adjust for real stages, terrain, rest days, weather, opening seasons, and lodging availability before booking.`,
            walkingDays: 'Walking days',
            restDays: 'Rest days',
            dailyTarget: 'Daily target',
            averageWalkingDay: 'Average walking day',
            routeStyle: 'Route style',
            dayLabel: 'Day',
            walkLabel: 'Walk',
            restLabel: 'Rest',
            distanceLabel: 'Distance',
            cumulativeLabel: 'Total',
            lodgingHintLabel: 'Route / lodging reference',
            noLodgingHint: 'Verify lodging directly',
            lodgingStayLabel: 'listed stays',
            totalDaysLabel: 'Total days',
            routeStyleValue: `${formatPlanningValue(route.lodgingDensity)} lodging · ${formatPlanningValue(route.resupplyDifficulty)} resupply`,
            lodgingHintNote: 'Distances are averaged. Route markers use the nearest ordered waypoint to each rough segment; lodging references are supporting town data, not recommended overnight stops or confirmed availability.',
          }}
        />

        {slug === 'saigoku-33' ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Seven Prefectures, One Ancient Circuit</h2>
            <p className="text-stone-600 mb-5 text-sm leading-relaxed">
              Japan&apos;s oldest pilgrimage (718 CE) spans Wakayama, Osaka, Nara, Kyoto, Hyogo, Shiga, and Gifu — each region with distinct character and temple styles.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {saigokuSections.map(s => (
                <div key={s.id} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-bold text-forest text-sm">{s.name.en}</h3>
                    <span className="text-xs text-stone-400 tabular-nums">Temples {s.templeRange}</span>
                  </div>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{s.tagline.en}&rdquo;</p>
                  <ul className="space-y-1">
                    {s.highlights.en.map((h, i) => (
                      <li key={i} className="text-xs text-stone-500 flex gap-2">
                        <span className="text-forest flex-shrink-0">·</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {slug === 'shikoku-henro' ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Four Prefectures, Four Dōjō</h2>
            <p className="text-stone-600 mb-5 text-sm leading-relaxed">
              The 88-temple circuit is divided into four sections — one per prefecture — each with a distinct character and spiritual theme.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {shikokuSections.map(s => (
                <div key={s.id} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-bold text-forest">{s.name.en} ({s.name.ja})</h3>
                    <span className="text-xs text-stone-400 tabular-nums">Temples {s.templeRange}</span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{s.prefecture} · Difficulty {'★'.repeat(s.difficulty)}{'☆'.repeat(5 - s.difficulty)}</p>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{s.tagline.en}&rdquo;</p>
                  <ul className="space-y-1">
                    {s.highlights.en.map((h, i) => (
                      <li key={i} className="text-xs text-stone-500 flex gap-2">
                        <span className="text-forest flex-shrink-0">·</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {slug === 'camino-frances' ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Five Regions, One Ancient Road</h2>
            <p className="text-stone-600 mb-5 text-sm leading-relaxed">
              The 780km Camino Francés unfolds across five distinct regional characters — from the brutal opening climb over the Pyrenees to the final emotional approach into Santiago.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {caminoFrancésSections.map(s => (
                <div key={s.id} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-bold text-forest text-sm">{s.name.en}</h3>
                    <span className="text-xs text-stone-400 tabular-nums">km {s.kmRange}</span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{s.region} · Difficulty {'★'.repeat(s.difficulty)}{'☆'.repeat(5 - s.difficulty)}</p>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{s.tagline.en}&rdquo;</p>
                  <ul className="space-y-1">
                    {s.highlights.en.map((h, i) => (
                      <li key={i} className="text-xs text-stone-500 flex gap-2">
                        <span className="text-forest flex-shrink-0">·</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {slug === 'kumano-nakahechi' ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Four Routes into the Sacred Mountains</h2>
            <p className="text-stone-600 mb-5 text-sm leading-relaxed">
              The Kumano Kodō is not a single trail but a network of four historic routes, each approaching the Kumano Sanzan from a different direction and with a different character.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {kumanoSections.map(s => (
                <div key={s.id} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-bold text-forest text-sm">{s.name.en}</h3>
                    <span className="text-xs text-stone-400 tabular-nums">{s.distanceKm}km · {s.days} days</span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">
                    {s.startEnd.start.en} → {s.startEnd.end.en} · Difficulty {'★'.repeat(s.difficulty)}{'☆'.repeat(5 - s.difficulty)}
                  </p>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{s.tagline.en}&rdquo;</p>
                  <ul className="space-y-1">
                    {s.highlights.en.map((h, i) => (
                      <li key={i} className="text-xs text-stone-500 flex gap-2">
                        <span className="text-forest flex-shrink-0">·</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

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

        {allLodging.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">Accommodation</h2>
            {lodgingTownSummaries.length > 0 ? (
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 mb-5">
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-ink">Town lodging summary</h3>
                  <span className="text-xs text-stone-400">{allLodging.length} listed stays</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {lodgingTownSummaries.map(town => (
                    <div key={town.town} className="bg-white rounded-xl p-3 border border-stone-200">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-semibold text-forest text-sm">{town.town}</p>
                        <p className="text-xs text-stone-400">{town.count} {town.count === 1 ? 'stay' : 'stays'}</p>
                      </div>
                      <p className="text-xs text-stone-500 mt-1">
                        Rates vary; record your own price notes.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="grid md:grid-cols-2 gap-3">
              {lodging.map((l, i) => (
                <div key={`lodge-${i}`} className="bg-white rounded-xl p-4 border border-stone-200">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-forest text-sm leading-snug">{getLodgingName(l)}</h3>
                      <p className="text-xs text-stone-400 mt-0.5">{l.town}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-ink">Rate varies</p>
                      {l.totalBeds != null ? <p className="text-xs text-stone-400">{l.totalBeds} beds</p> : null}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${l.isMunicipal ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                      {l.isMunicipal ? 'Municipal' : 'Private'}
                    </span>
                    {l.status === 'temporarily_closed' ? (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                        Temporarily closed
                      </span>
                    ) : null}
                    {l.website ? (
                      <a href={l.website} target="_blank" rel="noopener noreferrer" className="text-xs text-forest hover:underline truncate">
                        Website →
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-4 border border-stone-200 mt-5">
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{lodgingDisclosure.sourceLabel}</p>
              <p className="text-sm font-semibold text-ink mb-1">{lodgingDisclosure.confidenceLabel}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{lodgingDisclosure.description}</p>
            </div>
            <p className="text-xs text-stone-400 mt-4 italic">
              {allLodging.length > lodging.length
                ? `Showing ${lodging.length} of ${allLodging.length} · `
                : ''}
              Rates vary; use your own price notes and verify availability directly before your trip.
            </p>
          </section>
        ) : null}

        {routeSafetyBySlug[slug] ? (() => {
          const safety = routeSafetyBySlug[slug]
          return (
            <section className="mb-10">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <span>⚠️</span> Before You Go
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Best avoid</p>
                    <p className="text-sm text-amber-900">{safety.bestAvoid}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Weather risk</p>
                    <p className="text-sm text-amber-900">{safety.weatherRisk}</p>
                  </div>
                  {safety.signalWarning && (
                    <div>
                      <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Mobile signal</p>
                      <p className="text-sm text-amber-900">{safety.signalWarning}</p>
                    </div>
                  )}
                  {safety.cashRequired && (
                    <div>
                      <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Cash</p>
                      <p className="text-sm text-amber-900">{safety.cashRequired}</p>
                    </div>
                  )}
                </div>
                {safety.difficultyNote && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Note</p>
                    <p className="text-sm text-amber-900">{safety.difficultyNote}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">Recommended to carry</p>
                  <div className="flex flex-wrap gap-2">
                    {safety.mustCarry.map((item, i) => (
                      <span key={i} className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full border border-amber-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })() : null}

        <section className="bg-forest text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Navigate the {name} Offline</h2>
          <p className="text-green-100 mb-6">
            Stage-by-stage navigation, waypoint history, and lodging data — all offline in Sacred Trails. Free to download with route packs for the trails you walk.
          </p>
          <AppStoreBadge className="mx-auto" />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-ink mb-3">Planning Guides</h2>
          <div className="flex flex-wrap gap-2">
            {route.system === 'camino' && (
              <>
                <Link href="/guide/camino-packing-list" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-xs text-stone-600 hover:border-forest hover:text-forest transition-colors bg-white">
                  🎒 Packing List 2026
                </Link>
                <Link href="/guide/camino-cost" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-xs text-stone-600 hover:border-forest hover:text-forest transition-colors bg-white">
                  💰 Cost Breakdown
                </Link>
              </>
            )}
            <Link href="/guide/first-pilgrimage" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-xs text-stone-600 hover:border-forest hover:text-forest transition-colors bg-white">
              🧭 First Pilgrimage Guide
            </Link>
            <Link href={`/guide/${route.system === 'camino' ? 'camino-de-santiago' : route.system === 'kumano' ? 'kumano-kodo' : route.system === 'shikoku' ? 'shikoku-henro' : 'camino-de-santiago'}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-xs text-stone-600 hover:border-forest hover:text-forest transition-colors bg-white">
              📖 Complete Guide
            </Link>
          </div>
        </section>

        {officialLinksByRoute[slug] ? (() => {
          const links = officialLinksByRoute[slug]
          const socials = [
            { label: 'Website', href: links.website, icon: '🌐' },
            links.instagram && { label: 'Instagram', href: links.instagram, icon: '📷' },
            links.facebook && { label: 'Facebook', href: links.facebook, icon: 'f' },
            links.twitter && { label: 'X / Twitter', href: links.twitter, icon: '𝕏' },
            links.youtube && { label: 'YouTube', href: links.youtube, icon: '▶' },
          ].filter(Boolean) as { label: string; href: string; icon: string }[]
          return (
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-ink mb-3">Official Resources</h2>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-xs text-stone-600 hover:border-forest hover:text-forest transition-colors bg-white"
                  >
                    <span>{s.icon}</span>{s.label}
                  </a>
                ))}
              </div>
            </section>
          )
        })() : null}

        {relatedRoutes.length > 0 ? (
          <section>
            <h2 className="text-2xl font-bold text-ink mb-5">Related Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedRoutes.map(r => (
                <Link key={r.slug} href={`/routes/${r.slug}`} className="bg-white rounded-xl p-4 border border-stone-200 hover:border-forest transition-colors">
                  <p className="font-semibold text-forest text-sm">{r.name.en}</p>
                  <p className="text-xs text-stone-400 mt-1">{r.totalDistanceKm}km · {r.averageDays} days</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  )
}
