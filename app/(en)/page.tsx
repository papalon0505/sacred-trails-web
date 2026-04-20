import type { Metadata } from 'next'
import Image from 'next/image'
import { routes } from '@/lib/data/routes'
import { RouteCard } from '@/components/RouteCard'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Sacred Trails — Camino de Santiago, Kumano Kodo & Shikoku Henro Offline Guide App',
  description: 'Complete offline guide for 18 sacred pilgrimage trails. Camino de Santiago, Kumano Kodo, Shikoku Henro. Stage navigation, 10 languages, no internet required.',
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
    a: 'Yes. All route content — waypoints, stages, lodging, and POIs — is bundled in the app. No internet connection required on trail.',
  },
  {
    q: 'Which routes are included?',
    a: 'Sacred Trails covers 18 routes: 12 Camino de Santiago routes (Francés, Portugués, del Norte, Primitivo, Vía de la Plata, Inglés, and more), 4 Kumano Kodo routes, the Shikoku 88-Temple Henro, and the Saigoku 33 Kannon Pilgrimage.',
  },
  {
    q: 'How much does the app cost?',
    a: 'The app is free to download. Individual routes are unlocked for $4.99 each via in-app purchase.',
  },
  {
    q: 'What languages are supported?',
    a: 'Sacred Trails is available in 10 languages: English, Japanese, Spanish, Traditional Chinese, Simplified Chinese, Korean, French, German, Portuguese, and Italian.',
  },
  {
    q: 'Is there a map?',
    a: "Sacred Trails uses a Stage Timeline UX rather than a traditional map. Each route is broken into clearly defined stages with distances, elevations, lodging, and key waypoints — so you always know where you are and what's ahead.",
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
  operatingSystem: 'iOS',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Offline guide for 18 pilgrimage routes: Camino de Santiago, Kumano Kodo, Shikoku Henro.',
  url: 'https://sacredtrails.evelyn-ai.com',
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
            Walk the Camino de Santiago, Kumano Kodo, or Shikoku Henro with confidence.
            Stage-by-stage navigation, waypoints, and lodging — no internet required.
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
