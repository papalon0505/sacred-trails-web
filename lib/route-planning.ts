import type { RouteData } from './data/routes'
import type { WaypointData } from './data/waypoints'
import type { LodgingEntry } from './data/lodging'

export interface PlanningItem {
  label: string
  value: string
}

export interface TownSummary {
  town: string
  count: number
}

export interface ItineraryTownSummary {
  town: string
  count: number
  distanceFromStart: number | null
}

export interface RouteMarkerHint {
  distanceKm: number
  waypointName: string
}

export interface LodgingDisclosure {
  sourceLabel: string
  confidenceLabel: string
  description: string
}

export function formatPlanningValue(value: string): string {
  if (!value) return ''
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ')
}

export function getAverageDailyKm(route: RouteData): number {
  if (!route.averageDays) return 0
  return Math.round(route.totalDistanceKm / route.averageDays)
}

export function getScopedRouteWaypoints(_route: RouteData, waypoints: WaypointData[]): WaypointData[] {
  return [...waypoints].sort((a, b) => a.distanceFromStart - b.distanceFromStart)
}

export function summarizeLodgingByTown(lodging: LodgingEntry[]): TownSummary[] {
  const map = new Map<string, number>()
  for (const l of lodging) {
    map.set(l.town, (map.get(l.town) ?? 0) + 1)
  }
  return Array.from(map.entries())
    .map(([town, count]) => ({ town, count }))
    .sort((a, b) => b.count - a.count)
}

export function summarizeLodgingForItinerary(lodging: LodgingEntry[], waypoints: WaypointData[]): ItineraryTownSummary[] {
  const townCounts = summarizeLodgingByTown(lodging)
  return townCounts.map(tc => {
    const needle = tc.town.toLowerCase()
    const wp = waypoints.find(w => {
      const wpName = (w.name.en ?? '').toLowerCase()
      return wpName.includes(needle) || needle.includes(wpName)
    })
    return {
      town: tc.town,
      count: tc.count,
      distanceFromStart: wp?.distanceFromStart ?? null,
    }
  }).sort((a, b) => {
    if (a.distanceFromStart == null && b.distanceFromStart == null) return 0
    if (a.distanceFromStart == null) return 1
    if (b.distanceFromStart == null) return -1
    return a.distanceFromStart - b.distanceFromStart
  })
}

export function buildRouteMarkerHints(route: RouteData, waypoints: WaypointData[]): RouteMarkerHint[] {
  if (waypoints.length === 0) return []
  const sorted = [...waypoints].sort((a, b) => a.distanceFromStart - b.distanceFromStart)
  const count = Math.min(route.averageDays, sorted.length)
  if (count === 0) return []
  const interval = route.totalDistanceKm / count
  const hints: RouteMarkerHint[] = []
  for (let i = 0; i < count; i++) {
    const km = interval * (i + 1)
    let nearest = sorted[0]
    let minDiff = Math.abs(sorted[0].distanceFromStart - km)
    for (const wp of sorted) {
      const diff = Math.abs(wp.distanceFromStart - km)
      if (diff < minDiff) {
        minDiff = diff
        nearest = wp
      }
    }
    hints.push({
      distanceKm: Math.round(km * 10) / 10,
      waypointName: nearest.name.en ?? Object.values(nearest.name)[0] ?? '',
    })
  }
  return hints
}

export function getLodgingDisclosure(route: RouteData): LodgingDisclosure {
  switch (route.system) {
    case 'camino':
      return {
        sourceLabel: 'Data source',
        confidenceLabel: 'Gronze.com (community-maintained)',
        description: 'Lodging data is sourced from Gronze.com, a community-maintained database of Camino accommodation. Prices, availability, and seasonal closures change — always verify directly with the accommodation before your trip.',
      }
    case 'kumano':
      return {
        sourceLabel: 'Data source',
        confidenceLabel: 'Kumano Travel (kumano-travel.com)',
        description: 'Lodging data is sourced from Kumano Travel, the official booking platform for the Kumano Kodō. Some lodging requires advance reservation. Verify availability and prices directly.',
      }
    case 'shikoku':
      return {
        sourceLabel: 'Data source',
        confidenceLabel: 'App bundled data',
        description: 'Lodging data is compiled from multiple sources including temple lodging (shukubō), henro houses, and local accommodation guides. Availability varies by season — always confirm directly.',
      }
    case 'saigoku':
      return {
        sourceLabel: 'Data source',
        confidenceLabel: 'App bundled data',
        description: 'Lodging data is compiled from temple and accommodation guides along the Saigoku circuit. Many temples offer lodging (shukubō) but require advance reservation. Verify availability directly.',
      }
    default:
      return {
        sourceLabel: 'Data source',
        confidenceLabel: 'App bundled data',
        description: 'Lodging data is sourced from available guides and databases. Prices and availability may change — always verify directly before your trip.',
      }
  }
}

interface PlanningSnapshotLabels {
  distance: string
  typicalDuration: string
  averageDay: string
  difficulty: string
  bestMonths: string
  certificationMinimum: string
  lodgingDensity: string
  resupply: string
  access: string
  daysUnit: string
  perDayUnit: string
  difficultyValue: string
  certificationMinimumValue?: string
  transportAccess?: string
}

export function buildPlanningSnapshot(route: RouteData, labels: PlanningSnapshotLabels): PlanningItem[] {
  const dailyKm = getAverageDailyKm(route)
  const items: PlanningItem[] = [
    { label: labels.distance, value: `${route.totalDistanceKm}km` },
    { label: labels.typicalDuration, value: `${route.averageDays} ${labels.daysUnit}` },
    { label: labels.averageDay, value: `~${dailyKm}${labels.perDayUnit}` },
    { label: labels.difficulty, value: labels.difficultyValue },
    { label: labels.bestMonths, value: route.bestMonths },
  ]
  if (labels.certificationMinimumValue) {
    items.push({ label: labels.certificationMinimum, value: labels.certificationMinimumValue })
  }
  items.push(
    { label: labels.lodgingDensity, value: formatPlanningValue(route.lodgingDensity) },
    { label: labels.resupply, value: formatPlanningValue(route.resupplyDifficulty) },
  )
  if (labels.transportAccess) {
    items.push({ label: labels.access, value: labels.transportAccess })
  }
  return items
}

interface DecisionGuideLabels {
  bestFor: string
  timeCommitment: string
  lodgingAndResupply: string
  offlineUse: string
  bestForFallback: string
  timeCommitmentValue: (days: number, dailyKm: number) => string
  lodgingResupplyValue: (lodging: string, resupply: string) => string
  offlineUseValue: string
}

export function buildRouteDecisionGuide(route: RouteData, labels: DecisionGuideLabels): PlanningItem[] {
  const dailyKm = getAverageDailyKm(route)
  return [
    { label: labels.bestFor, value: route.bestFor || labels.bestForFallback },
    { label: labels.timeCommitment, value: labels.timeCommitmentValue(route.averageDays, dailyKm) },
    { label: labels.lodgingAndResupply, value: labels.lodgingResupplyValue(formatPlanningValue(route.lodgingDensity), formatPlanningValue(route.resupplyDifficulty)) },
    { label: labels.offlineUse, value: labels.offlineUseValue },
  ]
}
