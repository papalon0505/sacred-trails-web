import type { RouteData } from '@/lib/data/routes'
import { pick, localePath, type Locale } from '@/lib/i18n'

const DIFFICULTY_LABELS_EN: Record<string, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  challenging: 'Challenging',
  very_challenging: 'Very Challenging',
}

const DIFFICULTY_LABELS_JA: Record<string, string> = {
  easy: 'やさしい',
  moderate: '普通',
  challenging: '上級',
  very_challenging: '最上級',
}

const DIFFICULTY_LABELS_ZHTW: Record<string, string> = {
  easy: '輕鬆',
  moderate: '中等',
  challenging: '困難',
  very_challenging: '極困難',
}

const DIFFICULTY_LABELS_ES: Record<string, string> = {
  easy: 'Fácil',
  moderate: 'Moderada',
  challenging: 'Difícil',
  very_challenging: 'Muy difícil',
}

const DIFFICULTY_BY_LOCALE: Record<Locale, Record<string, string>> = {
  'en': DIFFICULTY_LABELS_EN,
  'ja': DIFFICULTY_LABELS_JA,
  'zh-TW': DIFFICULTY_LABELS_ZHTW,
  'es': DIFFICULTY_LABELS_ES,
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

export function RouteCard({ route, locale = 'en' }: { route: RouteData; locale?: Locale }) {
  const diff = route.difficulty || 'moderate'
  const diffColor = DIFFICULTY_COLORS[diff] ?? DIFFICULTY_COLORS.moderate
  const diffLabel = DIFFICULTY_BY_LOCALE[locale][diff] ?? diff
  const name = pick(route.name, locale) || route.slug
  return (
    <a
      href={localePath(locale, `/routes/${route.slug}`)}
      className="block bg-white rounded-2xl p-5 border border-stone-200 hover:border-forest hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{SYSTEM_ICON[route.system]}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${diffColor}`}>
          {diffLabel}
        </span>
      </div>
      <h3 className="font-semibold text-forest group-hover:text-forest-dark transition-colors mb-1">
        {name}
      </h3>
      <p className="text-sm text-stone-500">
        {route.totalDistanceKm}km · {route.averageDays} · {route.country}
      </p>
    </a>
  )
}
