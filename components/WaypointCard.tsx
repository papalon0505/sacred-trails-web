import type { WaypointData } from '@/lib/data/waypoints'

export function WaypointCard({ waypoint }: { waypoint: WaypointData }) {
  const name = waypoint.name.en ?? Object.values(waypoint.name)[0] ?? ''
  const story = waypoint.stampDescription.en ?? ''
  if (!story) return null
  return (
    <div className="border-l-2 border-amber pl-4 py-1">
      <h4 className="font-semibold text-forest text-sm mb-1">{name}</h4>
      <p className="text-sm text-stone-600 leading-relaxed line-clamp-4">{story}</p>
      {waypoint.distanceFromStart > 0 ? (
        <p className="text-xs text-stone-400 mt-1">{waypoint.distanceFromStart}km from start · {waypoint.elevation}m</p>
      ) : null}
    </div>
  )
}
