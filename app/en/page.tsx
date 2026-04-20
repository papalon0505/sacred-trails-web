import type { Metadata } from 'next'
import { AppStoreBadge } from '@/components/AppStoreBadge'

export const metadata: Metadata = {
  title: 'Sacred Trails — Camino de Santiago & Pilgrimage Guide App',
  description: 'The complete offline guide for pilgrims. 18 routes including Camino de Santiago, Kumano Kodo and Shikoku Henro. Download for iOS.',
  alternates: { canonical: 'https://sacredtrails.evelyn-ai.com/en' },
}

const FEATURES = [
  { icon: '📡', title: 'Offline First', desc: 'Full route data bundled in the app. No signal needed.' },
  { icon: '🌍', title: '10 Languages', desc: 'English, Japanese, Spanish, Chinese, Korean, and more.' },
  { icon: '🐚', title: '18 Routes', desc: 'Camino, Kumano Kodo, Shikoku Henro, and Saigoku 33.' },
]

export default function EnPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-ink mb-4">Your Offline Pilgrimage Companion</h1>
      <p className="text-stone-500 text-lg mb-8">
        18 sacred routes — Camino de Santiago, Kumano Kodo, Shikoku Henro — all available offline.
        Stage-by-stage navigation in 10 languages.
      </p>
      <AppStoreBadge className="mx-auto mb-12" />
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {FEATURES.map(f => (
          <div key={f.title} className="bg-white rounded-xl p-5 border border-stone-200">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h2 className="font-semibold text-forest mb-1">{f.title}</h2>
            <p className="text-sm text-stone-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
