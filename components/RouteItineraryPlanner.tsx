'use client'

import { useState, useMemo } from 'react'
import type { RouteData } from '@/lib/data/routes'
import type { ItineraryTownSummary, RouteMarkerHint } from '@/lib/route-planning'

interface Labels {
  title: string
  intro: string
  walkingDays: string
  restDays: string
  dailyTarget: string
  averageWalkingDay: string
  routeStyle: string
  dayLabel: string
  walkLabel: string
  restLabel: string
  distanceLabel: string
  cumulativeLabel: string
  lodgingHintLabel: string
  noLodgingHint: string
  lodgingStayLabel: string
  totalDaysLabel: string
  routeStyleValue: string
  lodgingHintNote: string
}

interface DayPlan {
  day: number
  type: 'walk' | 'rest'
  distanceKm: number
  cumulativeKm: number
  markerHint: string | null
  lodgingHint: { town: string; count: number } | null
}

export function RouteItineraryPlanner({ route, lodgingTownSummaries, routeMarkerHints, labels }: {
  route: RouteData
  lodgingTownSummaries: ItineraryTownSummary[]
  routeMarkerHints: RouteMarkerHint[]
  labels: Labels
}) {
  const [walkingDays, setWalkingDays] = useState(route.averageDays)
  const [restDays, setRestDays] = useState(0)

  const dailyTarget = useMemo(() => {
    if (walkingDays <= 0) return 0
    return Math.round((route.totalDistanceKm / walkingDays) * 10) / 10
  }, [route.totalDistanceKm, walkingDays])

  const dayPlan = useMemo(() => {
    const plan: DayPlan[] = []
    let cumulative = 0
    let walkCount = 0
    const totalDays = walkingDays + restDays
    const restInterval = restDays > 0 ? Math.floor(walkingDays / (restDays + 1)) : Infinity

    for (let d = 1; d <= totalDays; d++) {
      const restSoFar = plan.filter(p => p.type === 'rest').length
      const isRest = restDays > 0 && walkCount > 0 && walkCount % restInterval === 0 && restSoFar < restDays

      if (isRest) {
        plan.push({ day: d, type: 'rest', distanceKm: 0, cumulativeKm: cumulative, markerHint: null, lodgingHint: null })
      } else {
        walkCount++
        const isLast = walkCount === walkingDays
        const dist = isLast
          ? Math.round((route.totalDistanceKm - cumulative) * 10) / 10
          : dailyTarget
        cumulative = Math.round((cumulative + dist) * 10) / 10

        const marker = routeMarkerHints.reduce<RouteMarkerHint | null>((best, h) => {
          if (!best) return h
          return Math.abs(h.distanceKm - cumulative) < Math.abs(best.distanceKm - cumulative) ? h : best
        }, null)

        const lodging = lodgingTownSummaries.reduce<ItineraryTownSummary | null>((best, ts) => {
          if (ts.distanceFromStart == null) return best
          if (!best || best.distanceFromStart == null) return ts
          return Math.abs(ts.distanceFromStart - cumulative) < Math.abs(best.distanceFromStart - cumulative) ? ts : best
        }, null)

        plan.push({
          day: d,
          type: 'walk',
          distanceKm: dist,
          cumulativeKm: cumulative,
          markerHint: marker?.waypointName ?? null,
          lodgingHint: lodging ? { town: lodging.town, count: lodging.count } : null,
        })
      }
    }
    return plan
  }, [walkingDays, restDays, dailyTarget, route.totalDistanceKm, routeMarkerHints, lodgingTownSummaries])

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-ink mb-2">{labels.title}</h2>
      <p className="text-sm text-stone-500 leading-relaxed mb-6">{labels.intro}</p>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-xs text-stone-400 uppercase tracking-wide block mb-1">{labels.walkingDays}</label>
            <input
              type="number"
              min={1}
              max={120}
              value={walkingDays}
              onChange={e => setWalkingDays(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-forest/30"
            />
          </div>
          <div>
            <label className="text-xs text-stone-400 uppercase tracking-wide block mb-1">{labels.restDays}</label>
            <input
              type="number"
              min={0}
              max={30}
              value={restDays}
              onChange={e => setRestDays(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-forest/30"
            />
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">{labels.dailyTarget}</p>
            <p className="text-sm font-bold text-forest py-2">{dailyTarget}km</p>
          </div>
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">{labels.routeStyle}</p>
            <p className="text-sm font-medium text-stone-600 py-2">{labels.routeStyleValue}</p>
          </div>
        </div>

        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="text-left text-xs text-stone-400 uppercase tracking-wide py-2 px-2">{labels.dayLabel}</th>
                <th className="text-left text-xs text-stone-400 uppercase tracking-wide py-2 px-2" />
                <th className="text-right text-xs text-stone-400 uppercase tracking-wide py-2 px-2">{labels.distanceLabel}</th>
                <th className="text-right text-xs text-stone-400 uppercase tracking-wide py-2 px-2">{labels.cumulativeLabel}</th>
                <th className="text-left text-xs text-stone-400 uppercase tracking-wide py-2 px-2">{labels.lodgingHintLabel}</th>
              </tr>
            </thead>
            <tbody>
              {dayPlan.map(d => (
                <tr key={d.day} className={`border-b border-stone-100 ${d.type === 'rest' ? 'bg-stone-50' : ''}`}>
                  <td className="py-2 px-2 font-medium text-stone-700">{d.day}</td>
                  <td className="py-2 px-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${d.type === 'walk' ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                      {d.type === 'walk' ? labels.walkLabel : labels.restLabel}
                    </span>
                  </td>
                  <td className="py-2 px-2 text-right tabular-nums text-stone-600">
                    {d.type === 'walk' ? `${d.distanceKm}km` : '—'}
                  </td>
                  <td className="py-2 px-2 text-right tabular-nums font-medium text-stone-700">
                    {d.cumulativeKm}km
                  </td>
                  <td className="py-2 px-2 text-stone-500 text-xs">
                    {d.type === 'walk' && (
                      <>
                        {d.markerHint && <span className="text-forest">{d.markerHint}</span>}
                        {d.markerHint && d.lodgingHint && ' · '}
                        {d.lodgingHint
                          ? <span>{d.lodgingHint.town} ({d.lodgingHint.count} {labels.lodgingStayLabel})</span>
                          : !d.markerHint && <span className="italic">{labels.noLodgingHint}</span>}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-stone-200">
                <td colSpan={2} className="py-2 px-2 font-bold text-stone-700">{labels.totalDaysLabel}</td>
                <td className="py-2 px-2 text-right font-bold text-stone-700">{route.totalDistanceKm}km</td>
                <td className="py-2 px-2 text-right font-bold text-forest">{walkingDays + restDays}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <p className="text-xs text-stone-400 italic leading-relaxed">{labels.lodgingHintNote}</p>
    </section>
  )
}
