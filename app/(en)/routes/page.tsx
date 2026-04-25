import type { Metadata } from 'next'
import Link from 'next/link'
import { routes } from '@/lib/data/routes'
import { RouteCard } from '@/components/RouteCard'

export const metadata: Metadata = {
  title: 'All 18 Pilgrimage Routes — Camino, Kumano Kodo & Shikoku Henro',
  description: 'Browse all 18 sacred pilgrimage routes in Sacred Trails: 12 Camino de Santiago routes, 4 Kumano Kodo routes, Shikoku Henro, and Saigoku 33 Kannon Pilgrimage.',
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/routes',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/routes',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/routes',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/routes',
      'es': 'https://sacredtrails.evelyn-ai.com/es/routes',
    },
  },
}

const SYSTEM_GROUPS = [
  { key: 'camino' as const, label: 'Camino de Santiago', icon: '🐚', country: 'Spain & France' },
  { key: 'kumano' as const, label: 'Kumano Kodo', icon: '⛩️', country: 'Japan' },
  { key: 'shikoku' as const, label: 'Shikoku Henro', icon: '🏮', country: 'Japan' },
  { key: 'saigoku' as const, label: 'Saigoku 33 Kannon', icon: '🌸', country: 'Japan' },
]

export default function RoutesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-ink mb-3">All Pilgrimage Routes</h1>
      <p className="text-stone-500 mb-4 text-lg">18 routes across two continents — all available offline in Sacred Trails.</p>
      <Link
        href="/routes/compare"
        className="inline-flex items-center gap-1.5 text-sm text-forest border border-forest rounded-full px-4 py-1.5 mb-10 hover:bg-forest hover:text-white transition-colors"
      >
        ⇄ Compare all routes
      </Link>

      {SYSTEM_GROUPS.map(({ key, label, icon, country }) => {
        const group = routes.filter(r => r.system === key)
        return group.length === 0 ? null : (
          <section key={key} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-forest">{label}</h2>
                <p className="text-stone-500 text-sm">{country} · {group.length} route{group.length > 1 ? 's' : ''}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.map(r => <RouteCard key={r.slug} route={r} />)}
            </div>
          </section>
        )
      })}
    </div>
  )
}
