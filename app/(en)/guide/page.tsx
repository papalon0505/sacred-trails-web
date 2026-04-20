import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pilgrimage Route Guides — Camino de Santiago, Kumano Kodo, Shikoku Henro',
  description: "Complete guides for the world's most famous pilgrimage routes. Planning, distances, difficulty, best season, and more.",
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/guide',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/guide',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/guide',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/guide',
      'es': 'https://sacredtrails.evelyn-ai.com/es/guide',
    },
  },
}

const GUIDES = [
  { slug: 'camino-de-santiago', title: 'Camino de Santiago — Complete Guide', desc: '12 routes, 780km to 1200km, starting from France or Portugal.', icon: '🐚' },
  { slug: 'kumano-kodo', title: 'Kumano Kodo — Complete Guide', desc: '4 ancient routes through the sacred forests of the Kii Peninsula.', icon: '⛩️' },
  { slug: 'shikoku-henro', title: 'Shikoku 88 Temple Pilgrimage — Complete Guide', desc: "1,200km circuit of Shikoku island, following in Kōbō Daishi's footsteps.", icon: '🏮' },
]

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-ink mb-3">Pilgrimage Guides</h1>
      <p className="text-stone-500 mb-10 text-lg">Everything you need to plan and walk the world&apos;s great pilgrimage routes.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {GUIDES.map(g => (
          <a key={g.slug} href={`/guide/${g.slug}`}
            className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-forest hover:shadow-md transition-all">
            <div className="text-3xl mb-3">{g.icon}</div>
            <h2 className="font-bold text-forest mb-2">{g.title}</h2>
            <p className="text-sm text-stone-500">{g.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
