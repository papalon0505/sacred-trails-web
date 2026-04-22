import type { Metadata } from 'next'
import Image from 'next/image'
import { routes } from '@/lib/data/routes'
import { waypointsByRoute } from '@/lib/data/waypoints'
import { RouteCard } from '@/components/RouteCard'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

const FEATURED_WAYPOINT_ROUTES = ['camino-frances', 'kumano-nakahechi', 'shikoku-henro']

function pickFeaturedWaypointsEn() {
  const picks: { routeSlug: string; routeName: string; waypointName: string; story: string }[] = []
  for (const routeSlug of FEATURED_WAYPOINT_ROUTES) {
    const wps = waypointsByRoute[routeSlug]
    if (!wps || wps.length === 0) continue
    const r = routes.find(x => x.slug === routeSlug)
    const routeName = r?.name.en ?? routeSlug
    const w = wps[0]
    if (w.stampDescription?.en && w.name?.en) {
      picks.push({ routeSlug, routeName, waypointName: w.name.en, story: w.stampDescription.en })
    }
  }
  return picks
}

const SUPPORT_BODY = [
  "Sacred Trails started with a simple frustration: phone-dependent pilgrim apps stop working when you lose signal in the mountains. We wanted something that walked with you, not one that needed constant Wi-Fi to stay useful.",
  "So we spent months: mapping every stage, writing the story of every waypoint across 10 languages, verifying lodging, stamping practices, and the small practical details that make a difference on a hard afternoon. 18 routes. Thousands of waypoints. No ads, no subscription, no data collection.",
  "If what we built helps your pilgrimage, the App Store price is how you can support the project. One $2.99 purchase unlocks everything, funds future routes, and tells us this matters. Either way — Buen Camino.",
]

export const metadata: Metadata = {
  title: 'Sacred Trails — 18 Pilgrimage Routes Offline · Camino · Kumano Kodo · Shikoku Henro · 10 Languages',
  description: 'Complete offline guide for 18 sacred pilgrimage trails in 10 languages. One $2.99 purchase unlocks Camino de Santiago, Kumano Kodo, Shikoku Henro and Saigoku 33. Stage-by-stage navigation, no subscription, no internet required.',
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW',
      'es': 'https://sacredtrails.evelyn-ai.com/es',
    },
  },
}

const FAQ = [
  {
    q: 'Does Sacred Trails work offline?',
    a: 'Yes. All route content including waypoints, stages, lodging, and POIs is bundled in the app. No internet connection is required on the trail, and no map tiles need to be downloaded.',
  },
  {
    q: 'How many pilgrimage routes are included?',
    a: 'Sacred Trails covers 18 routes: all 12 Camino de Santiago routes (Francés, Portugués, Norte, Primitivo, Inglés, del Sur, Vía de la Plata, Invierno, Sanabrés, Catalán, Levante, Aragonés), 4 Kumano Kodo routes (Nakahechi, Kohechi, Ohechi, Iseji), the Shikoku 88-Temple Henro, and the Saigoku 33 Kannon Pilgrimage.',
  },
  {
    q: 'How much does Sacred Trails cost?',
    a: 'Sacred Trails is a one-time $2.99 purchase on the App Store. That single price unlocks all 18 routes in all 10 languages. No subscription, no per-route fees, no hidden upgrades.',
  },
  {
    q: 'Which languages are supported?',
    a: 'Sacred Trails is fully localized in 10 languages: English, Japanese, Spanish, Traditional Chinese, Simplified Chinese, Korean, French, German, Portuguese, and Italian. Interface, route descriptions, waypoint names, and POI labels are all translated.',
  },
  {
    q: 'Do I need a GPS signal or cellular data?',
    a: 'Neither. The stage timeline does not depend on GPS or network. You read the next stage, landmarks, and lodging from the bundled data even in deep mountain sections with zero signal.',
  },
  {
    q: 'Is there a traditional map view?',
    a: "Sacred Trails uses a Stage Timeline rather than a scroll-and-pan map. Each route is broken into clearly defined stages with distances, elevations, cumulative mileage, lodging clusters, and key waypoints — the information pilgrims actually use day to day.",
  },
  {
    q: 'Can I walk several routes on a single purchase?',
    a: 'Yes. The $2.99 price includes every route forever. Many pilgrims walk the Camino Francés one year and the Kumano Kodo the next; Sacred Trails is built for exactly that kind of multi-route pilgrim.',
  },
  {
    q: 'How often is content updated?',
    a: 'Route data is reviewed regularly and shipped through standard App Store updates. Waypoint corrections, lodging changes, and new POIs are rolled into app updates at no extra cost.',
  },
  {
    q: 'Does it work on iPad?',
    a: 'Yes. Sacred Trails runs on iPhone and iPad with iOS 16.0 or later. The stage timeline adapts to larger screens with multi-column layouts.',
  },
  {
    q: 'Is there an Android version?',
    a: 'Sacred Trails is iOS-only at launch. An Android build is on the roadmap and will be announced on this site.',
  },
]

const SCREENSHOTS = [
  { src: '/screenshots/01-walk-offline.png', alt: 'Walk offline with full route data' },
  { src: '/screenshots/02-navigate-stages.png', alt: 'Navigate stages on the Camino' },
  { src: '/screenshots/03-find-lodging.png', alt: 'Find albergues and lodging' },
  { src: '/screenshots/04-collect-stamps.png', alt: 'Collect pilgrim stamps' },
  { src: '/screenshots/05-earn-title.png', alt: 'Earn your pilgrim title' },
]

const SYSTEMS = [
  { key: 'camino' as const, label: 'Camino de Santiago', icon: '🐚', desc: 'Spain & France — 12 routes' },
  { key: 'kumano' as const, label: 'Kumano Kodo', icon: '⛩️', desc: 'Japan — 4 ancient routes' },
  { key: 'shikoku' as const, label: 'Shikoku Henro', icon: '🏮', desc: 'Japan — 88 sacred temples' },
  { key: 'saigoku' as const, label: 'Saigoku Kannon', icon: '🌸', desc: 'Japan — 33 Kannon shrines' },
]

const FEATURES = [
  { icon: '📡', title: 'Fully Offline', desc: 'All content — stages, waypoints, lodging, POIs — is bundled in the app. Walk without signal.' },
  { icon: '🌍', title: '10 Languages', desc: 'English, Japanese, Spanish, Chinese, Korean, French, German, Portuguese, Italian, and more.' },
  { icon: '📍', title: 'Stage Timeline', desc: 'A clear stage-by-stage view of your route — distances, elevations, and key stops at a glance.' },
]

const appLdJson = {
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
  description: 'Offline guide for 18 pilgrimage routes in 10 languages: Camino de Santiago, Kumano Kodo, Shikoku Henro, Saigoku 33 Kannon. One-time $2.99 purchase.',
  url: 'https://sacredtrails.evelyn-ai.com',
  featureList: 'Offline navigation, 18 pilgrimage routes, 10 languages, stage-by-stage timeline, waypoints, lodging data, POI database',
} as Record<string, unknown>

const faqLdJson = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
} as Record<string, unknown>

export default function HomePage() {
  const caminoRoutes = routes.filter(r => r.system === 'camino')
  const japanRoutes = routes.filter(r => r.system !== 'camino')
  const featuredWaypoints = pickFeaturedWaypointsEn()

  return (
    <>
      <JsonLd data={appLdJson} />
      <JsonLd data={faqLdJson} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-amber font-semibold text-sm tracking-wide uppercase mb-3">18 Pilgrimage Routes</p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-5">
            Your Offline Guide to the World&apos;s Sacred Trails
          </h1>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Eighteen pilgrimage routes, ten languages, and the story behind every waypoint,
            carefully written and verified. Stage-by-stage offline navigation that works in the
            mountains, with no internet required.
          </p>
          <div className="flex flex-wrap gap-4">
            <AppStoreBadge />
            <a href="/routes" className="inline-flex items-center gap-2 border border-forest text-forest px-5 py-3 rounded-xl text-sm font-medium hover:bg-forest hover:text-white transition-colors">
              Browse Routes →
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/screenshots/02-navigate-stages.png"
            alt="Sacred Trails App — Stage Navigation"
            width={300}
            height={650}
            className="rounded-3xl shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Route Systems */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-ink mb-2">18 Routes Across Two Continents</h2>
          <p className="text-stone-500 mb-10">From medieval Spain to ancient Japan — all in one app.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {SYSTEMS.map(s => (
              <div key={s.key} className="bg-parchment rounded-2xl p-5 text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-semibold text-forest text-sm">{s.label}</div>
                <div className="text-stone-500 text-xs mt-1">{s.desc}</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-ink mb-5">Camino de Santiago</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {caminoRoutes.map(r => <RouteCard key={r.slug} route={r} />)}
          </div>

          <h3 className="text-xl font-semibold text-ink mb-5">Japanese Pilgrimage Routes</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {japanRoutes.map(r => <RouteCard key={r.slug} route={r} />)}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ink mb-10 text-center">Built for Pilgrims, Not Tourists</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-forest mb-2">{f.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold text-ink">See It in Action</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
          {SCREENSHOTS.map(s => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={220}
              height={476}
              className="rounded-2xl shadow-lg flex-shrink-0 snap-start"
            />
          ))}
        </div>
      </section>

      {/* Waypoint Stories — surfacing the app's rich prose */}
      {featuredWaypoints.length > 0 ? (
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-ink mb-3">Every stop has a story</h2>
          <p className="text-stone-600 leading-relaxed mb-10 max-w-3xl">
            We spent months writing the history behind each waypoint. Not just a dot on a timeline, but nine centuries of
            pilgrims, emperors, and stonecutters who walked the same path. Here&apos;s a taste.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredWaypoints.map(fw => (
              <a
                key={fw.routeSlug}
                href={`/routes/${fw.routeSlug}`}
                className="bg-parchment rounded-2xl p-6 hover:shadow-md transition-shadow block"
              >
                <p className="text-xs text-amber font-semibold uppercase tracking-wide mb-2">{fw.routeName}</p>
                <h3 className="font-bold text-forest text-lg mb-3">{fw.waypointName}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{fw.story}</p>
              </a>
            ))}
          </div>
          <p className="text-xs text-stone-400 italic mt-6 text-center">
            The full prose for every waypoint lives inside the app.
          </p>
        </section>
      ) : null}

      {/* Support / labor of love positioning */}
      <section className="bg-parchment py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-ink mb-6">A quiet labor of love for fellow pilgrims</h2>
          <div className="space-y-4 text-stone-700 leading-relaxed mb-8">
            {SUPPORT_BODY.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <a
            href="https://apps.apple.com/app/id6761192860"
            className="inline-flex flex-col items-start gap-1 bg-forest text-white px-6 py-4 rounded-xl hover:bg-forest/90 transition-colors"
          >
            <span className="font-semibold">Support us · $2.99 on the App Store</span>
            <span className="text-green-100 text-xs">One-time, all 18 routes, all 10 languages.</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ink mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="border-b border-stone-200 pb-6">
              <h3 className="font-semibold text-forest mb-2">{q}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <AppStoreBadge className="mx-auto" />
        </div>
      </section>
    </>
  )
}
