import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Update Log — Sacred Trails',
  description: 'History of data updates, new routes, and app changes for Sacred Trails pilgrimage guide.',
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/changelog',
  },
}

interface ChangeEntry {
  date: string
  label: string
  items: string[]
}

const CHANGELOG: ChangeEntry[] = [
  {
    date: '2026-04-25',
    label: 'Data & Web',
    items: [
      'Added lodging data for all 18 routes (152 verified entries)',
      'Added section cards for Shikoku 88-temple circuit (4 dōjō) and Saigoku 33 Kannon pilgrimage',
      'Added official association links for all 18 routes',
      'Published data-sources transparency page',
      'Added per-route safety notes (Before You Go section on every route page)',
    ],
  },
  {
    date: '2026-04-07',
    label: 'App v1.3 · App Store',
    items: [
      'Sacred Trails v1.3.2 submitted to App Store',
      'Added Shikoku 88-temple sub-sections and Saigoku regional sections',
      'Points of interest database expanded to 114 verified entries across 18 routes',
    ],
  },
  {
    date: '2026-03-15',
    label: 'Data',
    items: [
      'Added Kumano Kodo sub-routes: Kohechi (mountain crossing), Ohechi (coastal), Iseji',
      "Added Saigoku 33 Kannon pilgrimage (Japan's oldest pilgrimage, 718 CE)",
      'Waypoint stamp descriptions expanded to 10 languages for all routes',
    ],
  },
  {
    date: '2026-02-20',
    label: 'App v1.2',
    items: [
      'Stage timeline redesigned for better readability on small screens',
      'Added Korean and Italian translations (now 10 languages total)',
      'Pilgrim title certification logic updated for Kumano routes',
    ],
  },
  {
    date: '2026-01-10',
    label: 'Data',
    items: [
      'Camino Francés waypoint GPS coordinates reviewed and corrected',
      'Camino del Norte updated with 2025 trail reroute near Bilbao',
      'Shikoku temple visiting hours updated for winter schedule',
    ],
  },
  {
    date: '2025-12-01',
    label: 'App v1.1 · Launch',
    items: [
      'Sacred Trails v1.1 launched on the App Store',
      '12 Camino de Santiago routes fully offline',
      '4 Kumano Kodo routes with lodging data',
      'Shikoku 88-temple Henro with all temple details',
      'Available in English, Japanese, Spanish, Traditional Chinese, Simplified Chinese, French, German, Portuguese',
    ],
  },
  {
    date: '2025-10-15',
    label: 'Beta',
    items: [
      'TestFlight beta with Camino Francés and Kumano Nakahechi',
      'Offline navigation confirmed working in areas with zero cellular coverage',
      '259 waypoints with historical narratives reviewed',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <a href="/" className="hover:text-forest">Home</a>{' / '}
        <span className="text-stone-600">Changelog</span>
      </nav>

      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
        <h1 className="text-4xl font-bold text-ink">Update Log</h1>
        <span className="text-sm text-stone-400 font-medium">Last updated: April 2026</span>
      </div>
      <p className="text-stone-600 text-lg mb-10 leading-relaxed">
        A record of data updates, route additions, and app changes. Existing users receive all data updates free through standard App Store updates.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-stone-200 hidden sm:block" />

        <div className="space-y-8">
          {CHANGELOG.map((entry, i) => (
            <div key={i} className="sm:pl-8 relative">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-forest border-2 border-white shadow hidden sm:block" />

              <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                <time className="text-xs font-mono text-stone-400">{entry.date}</time>
                <span className="text-xs bg-forest/10 text-forest font-semibold px-2 py-0.5 rounded-full">{entry.label}</span>
              </div>
              <ul className="space-y-1.5">
                {entry.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-stone-700">
                    <span className="text-forest flex-shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap gap-4 text-sm">
        <a href="/data-sources" className="text-forest hover:underline">Data sources & verification →</a>
        <a href="/routes" className="text-forest hover:underline">Browse all 18 routes →</a>
      </div>
    </div>
  )
}
