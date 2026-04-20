import type { Metadata } from 'next'
import { routes } from '@/lib/data/routes'
import { RouteCard } from '@/components/RouteCard'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Kumano Kodo Guide 2026: Japan's Ancient Pilgrimage Roads",
  description: 'Complete guide to the Kumano Kodo pilgrimage routes in Japan. 4 routes through the sacred Kii Peninsula forest. UNESCO World Heritage. Best time to visit, preparation tips.',
  keywords: ['kumano kodo guide', 'kumano kodo routes', 'nakahechi trail', 'kumano kodo japan'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide/kumano-kodo',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/guide/kumano-kodo',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/guide/kumano-kodo',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/guide/kumano-kodo',
      'es': 'https://sacredtrails.evelyn-ai.com/es/guide/kumano-kodo',
    },
  },
}

const FAQS = [
  {
    q: 'What is the Kumano Kodo?',
    a: 'The Kumano Kodo is a network of ancient pilgrimage trails in the Kii Peninsula of Japan, leading to the three Grand Shrines of Kumano (Kumano Sanzan). Used since the 10th century by emperors and commoners alike, it is one of only two pilgrimage routes in the world (along with the Camino de Santiago) inscribed as UNESCO World Heritage.',
  },
  {
    q: 'Which Kumano Kodo route should I walk first?',
    a: 'The Nakahechi (Middle Route) is the most historically significant and most-walked route, taking 3–5 days from Tanabe to Kumano Hongu Taisha. The Kohechi (4 days) is more remote and challenging, crossing mountain passes.',
  },
  {
    q: 'How do I get a Kumano Kodo stamp book?',
    a: 'The shuincho (stamp book) can be purchased at Tanabe City Kumano Tourism Bureau or at the shrines themselves. Stamps (shuin) are collected at oji shrine stations and grand shrines along the route.',
  },
  {
    q: 'What is the Dual Pilgrim certification?',
    a: "Pilgrims who complete both the Camino de Santiago (at least 100km) and the Kumano Kodo (Nakahechi) are awarded the Dual Pilgrim certificate — a unique recognition of completing the world's only two UNESCO-listed pilgrimage routes.",
  },
  {
    q: 'When is the best time to walk Kumano Kodo?',
    a: 'Spring (April–May) and autumn (October–November) offer the best conditions: mild temperatures and beautiful seasonal scenery. Summer (June–August) is hot and humid with heavy rain. Winter can be cold and some mountain sections may be icy.',
  },
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

export default function KumanoGuidePage() {
  const kumanoRoutes = routes.filter(r => r.system === 'kumano')
  const nakahechi = routes.find(r => r.slug === 'kumano-nakahechi')

  return (
    <>
      <JsonLd data={faqLd} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-forest">Home</a>{' / '}
          <a href="/guide" className="hover:text-forest">Guide</a>{' / '}
          <span className="text-stone-600">Kumano Kodo</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-4">Kumano Kodo — Complete Guide</h1>
        <p className="text-stone-500 text-lg mb-10">4 routes · Kii Peninsula, Japan · UNESCO World Heritage pilgrimage</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4">What is the Kumano Kodo?</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The Kumano Kodo is one of Japan&apos;s most sacred pilgrimage trail networks, winding through the ancient cedar and cypress forests of the Kii Peninsula in Wakayama Prefecture. For over a thousand years, emperors, nobles, and ordinary people have walked these moss-draped paths to venerate the three Grand Shrines of Kumano — Kumano Hongu Taisha, Kumano Hayatama Taisha, and Kumano Nachi Taisha.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Together with the Camino de Santiago in Spain, the Kumano Kodo holds the rare distinction of being one of only two pilgrimage routes recognized as UNESCO World Heritage Sites — a status earned not just for scenic beauty, but for the depth of living religious and cultural practice that continues today.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The routes pass through a world where Shinto and Buddhist beliefs interweave as naturally as morning mist through mountain passes, where each stone-paved climb was worn smooth by a millennium of sandaled feet, and where small oji shrine stations still invite a moment of prayer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4">The 4 Kumano Kodo Routes</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {kumanoRoutes.map(r => <RouteCard key={r.slug} route={r} />)}
          </div>
        </section>

        {nakahechi ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">The Nakahechi: Japan&apos;s Most Sacred Walk</h2>
            <p className="text-stone-600 leading-relaxed">{nakahechi.description.en}</p>
          </section>
        ) : null}

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
          <h2 className="text-2xl font-bold mb-3">Walk the Kumano Kodo Offline</h2>
          <p className="text-green-100 mb-6">All 4 Kumano Kodo routes in Sacred Trails. Stage navigation in English and Japanese — no internet required on trail.</p>
          <AppStoreBadge className="mx-auto" />
        </div>
      </article>
    </>
  )
}
