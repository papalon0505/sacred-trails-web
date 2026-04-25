import type { Metadata } from 'next'
import { routes } from '@/lib/data/routes'
import { JsonLd } from '@/components/JsonLd'
import { RouteCompareTable } from './RouteCompareTable'

export const metadata: Metadata = {
  title: 'Compare Pilgrimage Routes — Sacred Trails',
  description: `Compare all ${routes.length} pilgrimage routes in Sacred Trails: distance, duration, difficulty, best season, and lodging density for Camino de Santiago, Kumano Kodo, Shikoku Henro, and Saigoku 33 routes.`,
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/routes/compare',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sacred Trails — All Pilgrimage Routes',
  description: `${routes.length} pilgrimage routes including Camino de Santiago, Kumano Kodo, Shikoku Henro, and Saigoku 33.`,
  numberOfItems: routes.length,
  itemListElement: routes.map((route, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'TouristAttraction',
      name: route.name.en,
      url: `https://sacredtrails.evelyn-ai.com/routes/${route.slug}`,
      description: `${route.totalDistanceKm}km · ${route.averageDays} days · ${route.difficulty}`,
      touristType: 'Pilgrimage',
      geo: {
        '@type': 'GeoCoordinates',
      },
    },
  })),
}

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <JsonLd data={jsonLd} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink mb-2">Compare Pilgrimage Routes</h1>
        <p className="text-stone-500">
          Side-by-side comparison of all {routes.length} routes — sort by distance, duration, or difficulty.
        </p>
      </div>

      <RouteCompareTable routes={routes} />
    </div>
  )
}
