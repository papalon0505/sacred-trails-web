'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { RouteData } from '@/lib/data/routes'

type SortKey = 'totalDistanceKm' | 'averageDays' | 'difficulty'
type SortDir = 'asc' | 'desc'
type SystemFilter = 'all' | 'camino' | 'kumano' | 'japan'

const DIFFICULTY_ORDER: Record<string, number> = {
  easy: 1,
  moderate: 2,
  challenging: 3,
  very_challenging: 4,
}

const DIFFICULTY_STARS: Record<string, string> = {
  easy: '★',
  moderate: '★★',
  challenging: '★★★',
  very_challenging: '★★★★',
}

const LODGING_DOTS: Record<string, string> = {
  high: '●●●',
  medium: '●●○',
  low: '●○○',
}

const FILTER_BUTTONS: { key: SystemFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'camino', label: 'Camino' },
  { key: 'kumano', label: 'Kumano' },
  { key: 'japan', label: 'Japan' },
]

function matchesFilter(route: RouteData, filter: SystemFilter): boolean {
  if (filter === 'all') return true
  if (filter === 'camino') return route.system === 'camino'
  if (filter === 'kumano') return route.system === 'kumano'
  if (filter === 'japan') return route.system === 'kumano' || route.system === 'shikoku' || route.system === 'saigoku'
  return true
}

interface SortableHeaderProps {
  label: string
  sortKey: SortKey
  currentSort: SortKey | null
  currentDir: SortDir
  onSort: (key: SortKey) => void
}

function SortableHeader({ label, sortKey, currentSort, currentDir, onSort }: SortableHeaderProps) {
  const isActive = currentSort === sortKey
  return (
    <th
      className="px-3 py-2 text-left text-xs font-semibold cursor-pointer select-none whitespace-nowrap hover:bg-forest-dark transition-colors"
      onClick={() => onSort(sortKey)}
    >
      {label}{' '}
      <span className="ml-0.5 opacity-80">
        {isActive ? (currentDir === 'asc' ? '▲' : '▼') : '⇅'}
      </span>
    </th>
  )
}

export function RouteCompareTable({ routes }: { routes: RouteData[] }) {
  const [sortKey, setSortKey] = useState<SortKey | null>(null)
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [filter, setFilter] = useState<SystemFilter>('all')

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const filtered = routes.filter(r => matchesFilter(r, filter))

  const sorted = sortKey
    ? [...filtered].sort((a, b) => {
        let aVal: number
        let bVal: number
        if (sortKey === 'difficulty') {
          aVal = DIFFICULTY_ORDER[a.difficulty] ?? 0
          bVal = DIFFICULTY_ORDER[b.difficulty] ?? 0
        } else {
          aVal = a[sortKey]
          bVal = b[sortKey]
        }
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal
      })
    : filtered

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTER_BUTTONS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === key
                ? 'bg-forest text-white border-forest'
                : 'bg-white text-stone-600 border-stone-300 hover:border-forest hover:text-forest'
            }`}
          >
            {label}
          </button>
        ))}
        <span className="ml-auto text-xs text-stone-400 self-center">{sorted.length} routes</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-stone-200 shadow-sm">
        <table className="w-full border-collapse text-sm min-w-[700px]">
          <thead>
            <tr className="bg-forest text-white text-xs">
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Route</th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Country</th>
              <SortableHeader
                label="km"
                sortKey="totalDistanceKm"
                currentSort={sortKey}
                currentDir={sortDir}
                onSort={handleSort}
              />
              <SortableHeader
                label="Days"
                sortKey="averageDays"
                currentSort={sortKey}
                currentDir={sortDir}
                onSort={handleSort}
              />
              <SortableHeader
                label="Difficulty"
                sortKey="difficulty"
                currentSort={sortKey}
                currentDir={sortDir}
                onSort={handleSort}
              />
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Best Season</th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Lodging</th>
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Best For</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((route, i) => (
              <tr
                key={route.slug}
                className={`${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'} hover:bg-amber/10 transition-colors`}
              >
                <td className="px-3 py-2 text-xs font-medium">
                  <Link
                    href={`/routes/${route.slug}`}
                    className="text-forest hover:underline"
                  >
                    {route.name.en}
                  </Link>
                </td>
                <td className="px-3 py-2 text-xs text-stone-500 whitespace-nowrap">{route.country}</td>
                <td className="px-3 py-2 text-xs tabular-nums">{route.totalDistanceKm}</td>
                <td className="px-3 py-2 text-xs tabular-nums">{route.averageDays}</td>
                <td className="px-3 py-2 text-xs text-amber whitespace-nowrap">
                  {DIFFICULTY_STARS[route.difficulty] ?? route.difficulty}
                </td>
                <td className="px-3 py-2 text-xs text-stone-600 whitespace-nowrap">{route.bestMonths}</td>
                <td className="px-3 py-2 text-xs text-stone-600 whitespace-nowrap">
                  {LODGING_DOTS[route.lodgingDensity] ?? route.lodgingDensity}
                </td>
                <td className="px-3 py-2 text-xs text-stone-600">{route.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-stone-400">
        <span><span className="text-amber">★–★★★★</span> = Easy → Very Challenging</span>
        <span><span className="text-stone-600">●●●</span> = High lodging density &nbsp;|&nbsp; <span className="text-stone-600">●○○</span> = Low</span>
      </div>
    </div>
  )
}
