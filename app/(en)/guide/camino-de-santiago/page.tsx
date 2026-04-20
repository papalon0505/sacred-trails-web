import type { Metadata } from 'next'
import { routes } from '@/lib/data/routes'
import { RouteCard } from '@/components/RouteCard'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Camino de Santiago — Complete Guide 2026: Routes, Distance & Tips',
  description: 'Complete guide to the Camino de Santiago. 12 routes from the Camino Francés to the Primitivo. Distances, difficulty, stages, certification, and how to prepare.',
  keywords: ['camino de santiago guide', 'camino de santiago routes', 'camino frances guide', 'camino portugues guide', 'walking camino de santiago'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/camino-de-santiago',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/guide/camino-de-santiago',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/guide/camino-de-santiago',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/guide/camino-de-santiago',
      'es': 'https://sacredtrails.evelyn-ai.com/es/guide/camino-de-santiago',
    },
  },
}

const FAQS = [
  {
    q: 'What is the Camino de Santiago?',
    a: "The Camino de Santiago (Way of Saint James) is a network of pilgrimage routes leading to the Cathedral of Santiago de Compostela in Galicia, Spain, where the remains of the apostle Saint James are said to be buried. Pilgrims have walked these routes since the 9th century.",
  },
  {
    q: 'Which Camino route is best for beginners?',
    a: 'The Camino Portugués Central (260km, 12 days from Porto) or Camino Inglés (120km, 5 days) are ideal for beginners. The Camino Francés (780km, 30 days) is the classic choice if you have more time.',
  },
  {
    q: 'What is the Compostela certificate?',
    a: "The Compostela is the official certificate of completion issued by the Pilgrim's Reception Office in Santiago de Compostela. To receive it, you must walk at least the last 100km (or cycle 200km) and carry a pilgrim's passport stamped along the way.",
  },
  {
    q: 'What is the best time of year to walk the Camino?',
    a: 'April–June and September–October offer the best weather: mild temperatures, fewer crowds than summer, and reliable trail conditions. July–August is peak season with more pilgrims. Winter (November–February) is quieter but cold and some albergues close.',
  },
  {
    q: 'Do I need a guide book or app?',
    a: 'Most pilgrims use a combination of the John Brierley guidebook and a mobile app for real-time navigation. Sacred Trails provides offline stage navigation, waypoints, and lodging for all 12 Camino routes — ideal when you lose cell signal in rural areas.',
  },
]

const PLANNING_TIPS = [
  { title: 'Best Season', content: 'April–June and September–October. Avoid July–August heat and peak crowds. Winter (Nov–Feb) is quiet but cold; some facilities close.' },
  { title: 'What to Carry', content: 'Keep your pack under 10% of body weight. Essentials: broken-in walking boots, moisture-wicking base layers, a lightweight rain jacket, a sleeping bag liner, and blister kit.' },
  { title: 'Pilgrim Passport', content: "The Credencial del Peregrino (pilgrim passport) is stamped at churches, albergues, and cafés along the way. You need it to receive the Compostela. Get one at any pilgrim office or cathedral before you start." },
  { title: 'Offline Navigation', content: "Cell signal is unreliable in rural Galicia and the Pyrenean passes. Sacred Trails stores your entire route offline — stages, waypoints, albergues, and altitude profiles — so you're never lost." },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
} as Record<string, unknown>

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Camino de Santiago — Complete Guide 2026',
  description: 'Complete guide to the Camino de Santiago pilgrimage routes.',
  url: 'https://sacredtrails.evelyn-ai.com/guide/camino-de-santiago',
} as Record<string, unknown>

export default function CaminoGuidePage() {
  const caminoRoutes = routes.filter(r => r.system === 'camino')
  const frances = routes.find(r => r.slug === 'camino-frances')

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={articleLd} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-forest">Home</a>{' / '}
          <a href="/guide" className="hover:text-forest">Guide</a>{' / '}
          <span className="text-stone-600">Camino de Santiago</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-4">Camino de Santiago — Complete Guide</h1>
        <p className="text-stone-500 text-lg mb-10">12 routes · Spain & France · Medieval pilgrimage to Santiago de Compostela</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4">What is the Camino de Santiago?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The Camino de Santiago — the Way of Saint James — is one of the great pilgrimage journeys of the medieval Christian world, and today one of the most-walked long-distance trails on Earth. Routes converge from across Europe toward a single destination: the Cathedral of Santiago de Compostela in Galicia, northwest Spain, where the tomb of the apostle Saint James has drawn pilgrims since the 9th century.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            In 2024, 499,239 pilgrims received the Compostela certificate — a historic high, per the Archdiocese of Santiago de Compostela&apos;s Pilgrim Reception Office. The routes span multiple countries, crossing the Pyrenees from France, climbing the Atlantic coast of Spain, threading through Portugal, and following ancient Roman roads from Seville. The UNESCO World Heritage–listed network of trails is alive with centuries of history, community, and personal transformation.
          </p>
          <p className="text-stone-600 leading-relaxed">
            What makes the Camino unique among long trails is the living culture of the pilgrim community: the shared greeting of <em>Buen Camino</em>, the camaraderie of the albergues (pilgrim hostels), and the multinational fellowship that forms and dissolves with each day&apos;s walking.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4">The 12 Camino Routes</h2>
          <p className="text-stone-600 mb-6">Sacred Trails covers all major Camino de Santiago routes — from the classic Francés to the coastal Norte and the medieval Primitivo.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {caminoRoutes.map(r => <RouteCard key={r.slug} route={r} />)}
          </div>
        </section>

        {frances ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">The Camino Francés: The Classic Route</h2>
            <p className="text-stone-600 leading-relaxed mb-4">{frances.description.en}</p>
          </section>
        ) : null}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-6">Planning Your Camino</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PLANNING_TIPS.map(({ title, content }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-stone-200">
                <h3 className="font-semibold text-forest mb-2">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border-b border-stone-200 pb-5">
                <h3 className="font-semibold text-forest mb-2">{q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-forest text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Walk the Camino Offline</h2>
          <p className="text-green-100 mb-6">All 12 Camino routes available in Sacred Trails. Stage navigation, waypoints, and lodging — no internet required.</p>
          <AppStoreBadge className="mx-auto" />
        </div>
      </article>
    </>
  )
}
