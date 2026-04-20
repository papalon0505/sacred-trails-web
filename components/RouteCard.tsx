import type { RouteData } from '@/lib/data/routes'

const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  challenging: 'Challenging',
  very_challenging: 'Very Challenging',
}

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: 'bg-green-100 text-green-700',
  moderate: 'bg-yellow-100 text-yellow-700',
  challenging: 'bg-orange-100 text-orange-700',
  very_challenging: 'bg-red-100 text-red-700',
}

const SYSTEM_ICON: Record<string, string> = {
  camino: '🐚',
  kumano: '⛩️',
  shikoku: '🏮',
  saigoku: '🌸',
}

export function RouteCard({ route }: { route: RouteData }) {
  const diff = route.difficulty || 'moderate'
  const diffColor = DIFFICULTY_COLORS[diff] ?? DIFFICULTY_COLORS.moderate
  return (
    <a
      href={`/routes/${route.slug}`}
      className="block bg-white rounded-2xl p-5 border border-stone-200 hover:border-forest hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{SYSTEM_ICON[route.system]}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${diffColor}`}>
          {DIFFICULTY_LABELS[diff] ?? diff}
        </span>
      </div>
      <h3 className="font-semibold text-forest group-hover:text-forest-dark transition-colors mb-1">
        {route.name.en ?? route.slug}
      </h3>
      <p className="text-sm text-stone-500">
        {route.totalDistanceKm}km · {route.averageDays} days · {route.country}
      </p>
    </a>
  )
}
