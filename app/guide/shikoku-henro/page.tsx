import type { Metadata } from 'next'
import { routes } from '@/lib/data/routes'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Shikoku 88 Temple Pilgrimage — Complete Guide 2026',
  description: 'Complete guide to the Shikoku Henro: 1,200km circuit of 88 Buddhist temples. Distance, difficulty, cost, preparation, and what to expect walking in the footsteps of Kōbō Daishi.',
  keywords: ['shikoku henro guide', 'shikoku 88 temple pilgrimage', 'ohenro guide', 'shikoku henro app'],
  alternates: { canonical: 'https://sacredtrails.evelyn-ai.com/guide/shikoku-henro' },
}

const FAQS = [
  {
    q: 'What is the Shikoku Henro?',
    a: "The Shikoku Henro (四国遍路) is an 1,200-kilometer circular pilgrimage visiting 88 Buddhist temples on Shikoku island, Japan. It follows the path of Kōbō Daishi (Kūkai, 774–835), the monk who founded the Shingon Buddhist sect after returning from Tang Dynasty China. Pilgrims traditionally wear white (symbolizing death and rebirth) and carry a staff representing Kōbō Daishi's presence.",
  },
  {
    q: 'How long does the Shikoku Henro take?',
    a: 'Walking the full circuit on foot takes approximately 45–60 days covering roughly 1,200km. Most walking pilgrims average 25–35km per day. The route can also be completed by bicycle (25–30 days), car, or chartered bus (9–12 days).',
  },
  {
    q: 'What is the cost of walking the Shikoku Henro?',
    a: 'Budget approximately 400,000–500,000 yen (about $2,700–$3,400 USD) for a walking henro including accommodation, food, temple entrance fees, and gear. Staying at Zenkonyado (free pilgrim lodgings offered by local families) can significantly reduce costs.',
  },
  {
    q: 'What is Osettai?',
    a: 'Osettai (お接待) is the tradition of giving gifts, food, or lodging to henro pilgrims. It is considered an act of devotion — locals believe that by supporting a pilgrim they share in the merit of the pilgrimage. Accepting osettai graciously is part of the pilgrimage tradition.',
  },
  {
    q: 'Do I need to be Buddhist to do the Shikoku Henro?',
    a: 'No. The Shikoku Henro welcomes people of all backgrounds and beliefs. Many pilgrims walk for personal reflection, physical challenge, or cultural experience rather than strictly religious reasons. Basic temple etiquette (removing hats, not smoking on grounds) is expected of all visitors.',
  },
]

const STATS = [
  { label: 'Distance', value: '~1,200km' },
  { label: 'Duration', value: '45–60 days' },
  { label: 'Temples', value: '88 temples' },
  { label: 'Certification', value: 'Nōkyō-chō' },
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

export default function ShikokuGuidePage() {
  const shikoku = routes.find(r => r.slug === 'shikoku-henro')

  return (
    <>
      <JsonLd data={faqLd} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-400 mb-6">
          <a href="/" className="hover:text-forest">Home</a>{' / '}
          <a href="/guide" className="hover:text-forest">Guide</a>{' / '}
          <span className="text-stone-600">Shikoku Henro</span>
        </nav>

        <h1 className="text-4xl font-bold text-ink mb-4">Shikoku 88 Temple Pilgrimage — Complete Guide</h1>
        <p className="text-stone-500 text-lg mb-10">1,200km · 88 temples · Shikoku island, Japan · ~45 days on foot</p>

        {shikoku?.description.en ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">About the Shikoku Henro</h2>
            <p className="text-stone-600 leading-relaxed">{shikoku.description.en}</p>
          </section>
        ) : null}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-6">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-4 border border-stone-200 text-center">
                <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">{label}</p>
                <p className="text-lg font-bold text-forest">{value}</p>
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
          <h2 className="text-2xl font-bold mb-3">Navigate the Shikoku Henro Offline</h2>
          <p className="text-green-100 mb-6">Sacred Trails covers the full 88-temple circuit with offline stage navigation, temple info, and waypoints in 10 languages.</p>
          <AppStoreBadge className="mx-auto" />
        </div>
      </article>
    </>
  )
}
