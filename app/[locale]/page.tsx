import type { Metadata } from 'next'
import Image from 'next/image'
import { routes } from '@/lib/data/routes'
import { waypointsByRoute } from '@/lib/data/waypoints'
import { RouteCard } from '@/components/RouteCard'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'
import { getDict, localePath, pick, LOCALIZED, ALL_LOCALES, BASE_URL, type Locale } from '@/lib/i18n'

const FEATURED_WAYPOINT_ROUTES = ['camino-frances', 'kumano-nakahechi', 'shikoku-henro']

function pickFeaturedWaypoints(locale: Locale) {
  const picks: { routeSlug: string; routeName: string; waypointName: string; story: string }[] = []
  for (const routeSlug of FEATURED_WAYPOINT_ROUTES) {
    const wps = waypointsByRoute[routeSlug]
    if (!wps || wps.length === 0) continue
    const r = routes.find(x => x.slug === routeSlug)
    const routeName = r ? (pick(r.name, locale) || routeSlug) : routeSlug
    const w = wps[0]
    const story = pick(w.stampDescription, locale)
    const waypointName = pick(w.name, locale)
    if (story && waypointName) picks.push({ routeSlug, routeName, waypointName, story })
  }
  return picks
}

const SCREENSHOTS = [
  { src: '/screenshots/01-walk-offline.png' },
  { src: '/screenshots/02-navigate-stages.png' },
  { src: '/screenshots/03-find-lodging.png' },
  { src: '/screenshots/04-collect-stamps.png' },
  { src: '/screenshots/05-earn-title.png' },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!LOCALIZED.includes(locale as Locale)) return {}
  const l = locale as Locale
  const dict = getDict(l)
  const languages: Record<string, string> = {}
  for (const loc of ALL_LOCALES) languages[loc] = `${BASE_URL}${localePath(loc, '/')}`
  return {
    title: dict.home.metaTitle,
    description: dict.home.metaDesc,
    alternates: {
      canonical: `${BASE_URL}${localePath(l, '/')}`,
      languages,
    },
  }
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = locale as Locale
  const dict = getDict(l)
  const caminoRoutes = routes.filter(r => r.system === 'camino')
  const japanRoutes = routes.filter(r => r.system !== 'camino')
  const featuredWaypoints = pickFeaturedWaypoints(l)

  const appLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sacred Trails',
    applicationCategory: 'TravelApplication',
    applicationSubCategory: 'NavigationApplication',
    operatingSystem: 'iOS 16.0+',
    offers: {
      '@type': 'Offer',
      price: '2.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://apps.apple.com/app/id6761192860',
    },
    description: dict.home.metaDesc,
    url: `${BASE_URL}${localePath(l, '/')}`,
    featureList: 'Offline navigation, 18 pilgrimage routes, 10 languages, stage-by-stage timeline, waypoints, lodging data, POI database',
  } as Record<string, unknown>

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.home.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } as Record<string, unknown>

  return (
    <>
      <JsonLd data={appLd} />
      <JsonLd data={faqLd} />

      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-amber font-semibold text-sm tracking-wide uppercase mb-3">{dict.home.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-5">{dict.home.heroTitle}</h1>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">{dict.home.heroDesc}</p>
          <div className="flex flex-wrap gap-4">
            <AppStoreBadge locale={l} />
            <a href={localePath(l, '/routes')} className="inline-flex items-center gap-2 border border-forest text-forest px-5 py-3 rounded-xl text-sm font-medium hover:bg-forest hover:text-white transition-colors">
              {dict.home.browseRoutes}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/screenshots/02-navigate-stages.png" alt="Sacred Trails App" width={300} height={650} className="rounded-3xl shadow-2xl" priority />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-ink mb-2">{dict.home.systemsTitle}</h2>
          <p className="text-stone-500 mb-10">{dict.home.systemsSubtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {dict.home.systems.map(s => (
              <div key={s.key} className="bg-parchment rounded-2xl p-5 text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-semibold text-forest text-sm">{s.label}</div>
                <div className="text-stone-500 text-xs mt-1">{s.desc}</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-ink mb-5">{dict.home.caminoHeading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {caminoRoutes.map(r => <RouteCard key={r.slug} route={r} locale={l} />)}
          </div>

          <h3 className="text-xl font-semibold text-ink mb-5">{dict.home.japanHeading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {japanRoutes.map(r => <RouteCard key={r.slug} route={r} locale={l} />)}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ink mb-10 text-center">{dict.home.featuresTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dict.home.features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-forest mb-2">{f.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold text-ink">{dict.home.screenshotsTitle}</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
          {SCREENSHOTS.map(s => (
            <Image key={s.src} src={s.src} alt="Sacred Trails screenshot" width={220} height={476} className="rounded-2xl shadow-lg flex-shrink-0 snap-start" />
          ))}
        </div>
      </section>

      {featuredWaypoints.length > 0 ? (
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-ink mb-3">{dict.home.waypointStoriesTitle}</h2>
          <p className="text-stone-600 leading-relaxed mb-10 max-w-3xl">{dict.home.waypointStoriesSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredWaypoints.map(fw => (
              <a
                key={fw.routeSlug}
                href={localePath(l, `/routes/${fw.routeSlug}`)}
                className="bg-parchment rounded-2xl p-6 hover:shadow-md transition-shadow block"
              >
                <p className="text-xs text-amber font-semibold uppercase tracking-wide mb-2">{fw.routeName}</p>
                <h3 className="font-bold text-forest text-lg mb-3">{fw.waypointName}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{fw.story}</p>
              </a>
            ))}
          </div>
          <p className="text-xs text-stone-400 italic mt-6 text-center">{dict.home.waypointStoriesMore}</p>
        </section>
      ) : null}

      <section className="bg-parchment py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-ink mb-6">{dict.home.supportTitle}</h2>
          <div className="space-y-4 text-stone-700 leading-relaxed mb-8">
            {dict.home.supportBody.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <a
            href="https://apps.apple.com/app/id6761192860"
            className="inline-flex flex-col items-start gap-1 bg-forest text-white px-6 py-4 rounded-xl hover:bg-forest/90 transition-colors"
          >
            <span className="font-semibold">{dict.home.supportCtaLabel}</span>
            <span className="text-green-100 text-xs">{dict.home.supportCtaSubLabel}</span>
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ink mb-8">{dict.home.faqTitle}</h2>
        <div className="space-y-6">
          {dict.home.faq.map(({ q, a }) => (
            <div key={q} className="border-b border-stone-200 pb-6">
              <h3 className="font-semibold text-forest mb-2">{q}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <AppStoreBadge className="mx-auto" locale={l} />
        </div>
      </section>
    </>
  )
}
