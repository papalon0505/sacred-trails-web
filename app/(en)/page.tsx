import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
  "If what we built helps your pilgrimage, the app is free to download with route packs available for the trails you plan to walk — Camino Essentials, Camino Complete, Japan Pilgrimage, or All Routes Lifetime. No subscription, no ads. Buen Camino.",
]

export const metadata: Metadata = {
  title: 'Sacred Trails — 18 Pilgrimage Routes Offline · Camino · Kumano Kodo · Shikoku Henro · 10 Languages',
  description: 'Complete offline guide for 18 sacred pilgrimage trails in 10 languages. Camino de Santiago, Kumano Kodo, Shikoku Henro and Saigoku 33 with stage-by-stage navigation, no subscription, and no internet required.',
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
    a: 'Sacred Trails covers 18 routes: 12 Camino routes (Francés, Portugués, Portugués Coastal, Norte, Primitivo, Inglés, Vía de la Plata, Invierno, Fisterra-Muxía, Le Puy, Mozárabe, San Salvador), 4 Kumano Kodo routes (Nakahechi, Kohechi, Ohechi, Iseji), the Shikoku 88-Temple Henro, and the Saigoku 33 Kannon Pilgrimage.',
  },
  {
    q: 'How much does Sacred Trails cost?',
    a: 'Sacred Trails is free to download. Route content is available through route packs: Camino Essentials, Camino Complete, Japan Pilgrimage, or All Routes Lifetime. Each is a one-time purchase — no subscription and no ads.',
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
    q: 'Can I plan for more than one route?',
    a: 'Yes. Many pilgrims walk the Camino Francés one year and the Kumano Kodo the next. Sacred Trails is built for that kind of multi-route pilgrim — choose the route pack that fits your journey, or get All Routes Lifetime for full access.',
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
    a: 'The Android release is in Google Play preparation. The same offline route data, stamps, and cloud backup flow are being prepared for Android users.',
  },
]

// Real counts from data files (waypoints: 259, lodging: 703, pois: 114)
const STATS = [
  { value: '259+', label: 'waypoints' },
  { value: '703+', label: 'lodging entries' },
  { value: '114+', label: 'points of interest' },
  { value: '18', label: 'routes' },
  { value: '10', label: 'languages' },
]

const APP_DATA_EXAMPLES = [
  {
    type: 'Waypoint',
    icon: '📍',
    title: 'Roncesvalles',
    meta: '25 km from start · 952 m elevation',
    body: 'Site of the 778 Battle immortalized in Chanson de Roland. The 12th-century Collegiate Church hosts a nightly pilgrim blessing.',
    badge: 'Camino Francés',
  },
  {
    type: 'Lodging',
    icon: '🛏️',
    title: 'Albergue Municipal de Pontevedra',
    meta: 'Pontevedra · €8 · 112 beds',
    body: 'Large municipal albergue in the heart of historic Pontevedra. One of the best-value albergues on the Portuguese Way.',
    badge: 'Municipal',
  },
  {
    type: 'Point of Interest',
    icon: '💧',
    title: 'Village Fountain, Olveiroa',
    meta: 'Type: Fountain · Camino Fisterra',
    body: 'One of the most important water points on the Camino Fisterra — often the last reliable source before the long descent to the Atlantic coast.',
    badge: 'Water source',
  },
  {
    type: 'Stamp Story',
    icon: '📖',
    title: 'Saint-Jean-Pied-de-Port',
    meta: 'Camino Francés · Stage 1',
    body: 'For nine centuries, pilgrims have squeezed through the Porte Saint-Jacques — the last French gate before the Pyrenees. Medieval kings, Franciscan friars, and Charlemagne\'s soldiers all began the same climb from this Navarrese frontier town.',
    badge: 'Pilgrim stamp',
  },
  {
    type: 'Stats',
    icon: '📊',
    title: 'What\'s bundled in the app',
    meta: 'Verified at April 2026',
    body: '259 waypoints · 703 lodging entries · 114 points of interest · across 18 routes in 10 languages — all offline.',
    badge: 'No internet needed',
  },
]

const SCREENSHOTS = [
  { src: '/screenshots/06-multilingual-overview.png', alt: 'Sacred Trails supports ten languages in one app' },
  { src: '/screenshots/07-localized-route-data.png', alt: 'Localized route data in multiple languages' },
  { src: '/screenshots/08-offline-language-pack.png', alt: 'Offline route data without a language barrier' },
  { src: '/screenshots/01-walk-offline.png', alt: 'Walk offline with full route data' },
  { src: '/screenshots/02-navigate-stages.png', alt: 'Navigate stages on the Camino' },
  { src: '/screenshots/03-find-lodging.png', alt: 'Find albergues and lodging' },
  { src: '/screenshots/04-collect-stamps.png', alt: 'Collect pilgrim stamps' },
  { src: '/screenshots/05-earn-title.png', alt: 'Earn your pilgrim title' },
]

const LANGUAGE_BADGES = ['English', '日本語', '繁中', 'Español', '한국어', 'Français', 'Deutsch', 'Português', 'Italiano', '简中']

const LANGUAGE_SAMPLES = [
  { locale: 'English', route: 'Camino Francés', title: 'Stage timeline', detail: 'Offline stages, waypoints, lodging notes' },
  { locale: '日本語', route: '熊野古道 中辺路', title: 'ステージタイムライン', detail: '区間・ウェイポイント・宿泊メモをオフラインで確認' },
  { locale: '繁中', route: '四國遍路', title: '路段時間軸', detail: '離線查看路段、路徑點故事與住宿筆記' },
  { locale: 'Español', route: 'Camino Portugués', title: 'Línea de etapas', detail: 'Etapas, waypoints y alojamiento sin conexión' },
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
    availability: 'https://schema.org/InStock',
    url: 'https://apps.apple.com/app/id6761192860',
  },
  description: 'Offline guide for 18 pilgrimage routes in 10 languages: Camino de Santiago, Kumano Kodo, Shikoku Henro, Saigoku 33 Kannon. Current listing and pricing are shown in the App Store.',
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

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-[420px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="A pilgrim walking a sacred mountain path at golden hour"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-parchment" />
      </div>

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
            <Link href="/routes" className="inline-flex items-center gap-2 border border-forest text-forest px-5 py-3 rounded-xl text-sm font-medium hover:bg-forest hover:text-white transition-colors">
              Browse Routes →
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -left-4 top-8 z-10 rounded-xl bg-white/95 px-3 py-2 shadow-lg border border-stone-200">
              <p className="text-[11px] font-semibold text-forest">10 languages</p>
              <p className="text-[10px] text-stone-500">English · 日本語 · 繁中 · ES</p>
            </div>
            <div className="absolute -right-5 bottom-10 z-10 rounded-xl bg-forest text-white px-3 py-2 shadow-lg">
              <p className="text-[11px] font-semibold">Same route data</p>
              <p className="text-[10px] text-green-100">localized in app</p>
            </div>
          <Image
            src="/screenshots/02-navigate-stages.png"
            alt="Sacred Trails App — Stage Navigation"
            width={300}
            height={650}
            className="rounded-3xl shadow-2xl"
            priority
          />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-forest text-white py-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <span className="font-bold text-xl text-white">{s.value}</span>
                <span className="text-green-200 text-sm ml-1.5">{s.label}</span>
              </div>
            ))}
          </div>
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
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-ink">One App, Ten Languages</h2>
              <p className="text-stone-500 mt-2 max-w-2xl">
                The same offline route data, waypoint stories, lodging notes, and POI labels are localized across the app.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 max-w-xl">
              {LANGUAGE_BADGES.map(language => (
                <span key={language} className="text-xs font-medium text-forest bg-parchment border border-stone-200 rounded-full px-3 py-1">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[260px_1fr] gap-8 items-center">
          <Image
            src="/screenshots/02-navigate-stages.png"
            alt="Sacred Trails multilingual stage screen"
            width={240}
            height={520}
            className="rounded-3xl shadow-xl mx-auto"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {LANGUAGE_SAMPLES.map(sample => (
              <div key={sample.locale} className="rounded-xl border border-stone-200 bg-parchment p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-xs font-semibold text-amber uppercase tracking-wide">{sample.locale}</p>
                  <p className="text-xs text-stone-400">{sample.route}</p>
                </div>
                <h3 className="font-semibold text-forest">{sample.title}</h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">{sample.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pt-8 pb-4 snap-x snap-mandatory">
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

      {/* What's inside the app */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ink mb-3">What&apos;s Inside the App</h2>
        <p className="text-stone-500 mb-8">Real data from the app — this is what you get offline.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {APP_DATA_EXAMPLES.map(ex => (
            <div key={ex.type} className="bg-white rounded-2xl p-5 border border-stone-200 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{ex.icon}</span>
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">{ex.type}</span>
              </div>
              <div>
                <h3 className="font-bold text-forest text-base leading-snug">{ex.title}</h3>
                <p className="text-xs text-stone-400 mt-0.5">{ex.meta}</p>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed flex-1">{ex.body}</p>
              <span className="self-start text-xs bg-parchment text-stone-500 px-2.5 py-1 rounded-full border border-stone-200">
                {ex.badge}
              </span>
            </div>
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
            <span className="font-semibold">Support us on the App Store</span>
            <span className="text-green-100 text-xs">Current listing and pricing are shown in the store.</span>
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
