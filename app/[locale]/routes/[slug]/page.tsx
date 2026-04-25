import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { routes, getRouteBySlug } from '@/lib/data/routes'
import { waypointsByRoute } from '@/lib/data/waypoints'
import { poisByRoute } from '@/lib/data/pois'
import { lodgingByRoute, getLodgingName } from '@/lib/data/lodging'
import { shikokuSections } from '@/lib/data/shikoku-sections'
import { saigokuSections } from '@/lib/data/saigoku-sections'
import { caminoFrancésSections } from '@/lib/data/camino-sections'
import { kumanoSections } from '@/lib/data/kumano-sections'
import { routeSafetyBySlug } from '@/lib/data/route-safety'
import { officialLinksByRoute } from '@/lib/data/official-links'
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
  const lodging = (lodgingByRoute[slug] || []).slice(0, 8)

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

        {/* Route Hero */}
        <div className="relative w-full h-52 md:h-72 rounded-2xl overflow-hidden mb-8">
          <Image
            src={`/routes/${slug}/hero.jpg`}
            alt={`${name} pilgrimage route`}
            fill
            className="object-cover"
            priority
          />
        </div>

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
          {route.bestMonths ? (
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">Best Months</p>
              <p className="text-sm font-medium text-stone-700">{route.bestMonths}</p>
            </div>
          ) : null}
          {route.lodgingDensity ? (
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide">Lodging</p>
              <p className="text-sm font-medium text-stone-700 capitalize">{route.lodgingDensity}</p>
            </div>
          ) : null}
        </div>

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
                    <h3 className="font-bold text-forest text-sm">{pick(s.name, l)}</h3>
                    <span className="text-xs text-stone-400 tabular-nums">Temples {s.templeRange}</span>
                  </div>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{pick(s.tagline, l)}&rdquo;</p>
                  <ul className="space-y-1">
                    {(s.highlights[l] || s.highlights['en'] || []).map((h: string, i: number) => (
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
                    <h3 className="font-bold text-forest">{pick(s.name, l)} ({s.name.ja})</h3>
                    <span className="text-xs text-stone-400 tabular-nums">Temples {s.templeRange}</span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{s.prefecture} · Difficulty {'★'.repeat(s.difficulty)}{'☆'.repeat(5 - s.difficulty)}</p>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{pick(s.tagline, l)}&rdquo;</p>
                  <ul className="space-y-1">
                    {(s.highlights[l] || s.highlights['en'] || []).map((h: string, i: number) => (
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
              The 780km Camino Franc&eacute;s unfolds across five distinct regional characters — from the brutal opening climb over the Pyrenees to the final emotional approach into Santiago.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {caminoFrancésSections.map(s => (
                <div key={s.id} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-bold text-forest text-sm">{pick(s.name, l)}</h3>
                    <span className="text-xs text-stone-400 tabular-nums">km {s.kmRange}</span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{s.region} · Difficulty {'★'.repeat(s.difficulty)}{'☆'.repeat(5 - s.difficulty)}</p>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{pick(s.tagline, l)}&rdquo;</p>
                  <ul className="space-y-1">
                    {(s.highlights[l] || s.highlights['en'] || []).map((h: string, i: number) => (
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
              The Kumano Kod&#333; is not a single trail but a network of four historic routes, each approaching the Kumano Sanzan from a different direction and with a different character.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {kumanoSections.map(s => (
                <div key={s.id} className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-bold text-forest text-sm">{pick(s.name, l)}</h3>
                    <span className="text-xs text-stone-400 tabular-nums">{s.distanceKm}km · {s.days} days</span>
                  </div>
                  <p className="text-xs text-stone-500 mb-2">
                    {pick(s.startEnd.start, l)} → {pick(s.startEnd.end, l)} · Difficulty {'★'.repeat(s.difficulty)}{'☆'.repeat(5 - s.difficulty)}
                  </p>
                  <p className="text-sm text-stone-600 italic mb-3">&ldquo;{pick(s.tagline, l)}&rdquo;</p>
                  <ul className="space-y-1">
                    {(s.highlights[l] || s.highlights['en'] || []).map((h: string, i: number) => (
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

        {lodging.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ink mb-4">{dict.route.sections.lodging}</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {lodging.map((lodge, i) => (
                <div key={`lodge-${i}`} className="bg-white rounded-xl p-4 border border-stone-200">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-forest text-sm leading-snug">{getLodgingName(lodge)}</h3>
                      <p className="text-xs text-stone-400 mt-0.5">{lodge.town}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-ink">{lodge.price != null ? `${lodge.currency === 'JPY' ? '¥' : '€'}${lodge.price.toLocaleString()}` : dict.route.lodgingLabels.noPrice}</p>
                      {lodge.totalBeds != null ? <p className="text-xs text-stone-400">{lodge.totalBeds} {dict.route.lodgingLabels.beds}</p> : null}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${lodge.isMunicipal ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                      {lodge.isMunicipal ? dict.route.lodgingLabels.municipal : dict.route.lodgingLabels.private}
                    </span>
                    {lodge.website ? (
                      <a href={lodge.website} target="_blank" rel="noopener noreferrer" className="text-xs text-forest hover:underline truncate">
                        Website →
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-400 mt-4 italic">
              {(lodgingByRoute[slug] || []).length > lodging.length
                ? `Showing ${lodging.length} of ${(lodgingByRoute[slug] || []).length} · `
                : ''}
              Prices and availability may change — verify directly with each albergue before your trip.
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
          <h2 className="text-2xl font-bold mb-3">{dict.route.ctaTitle(name)}</h2>
          <p className="text-green-100 mb-6">{dict.route.ctaDesc}</p>
          <AppStoreBadge className="mx-auto" locale={l} />
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
