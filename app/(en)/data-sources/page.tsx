import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Sources & Verification — Sacred Trails',
  description: 'How Sacred Trails collects, verifies, and updates pilgrimage route data including waypoints, lodging, and points of interest.',
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/data-sources',
  },
}

const SOURCES = [
  {
    icon: '🏛️',
    title: 'Official Pilgrimage Associations',
    body: 'Route geometry, stage definitions, and waypoint sequences are derived from official association publications: the Pilgrim Reception Office (Oficina del Peregrino) in Santiago for Camino routes; the Kumano Hongu Taisha and Wakayama tourism bureau for Kumano Kodo; and the Shikoku Pilgrimage Executive Committee for the 88-temple circuit.',
  },
  {
    icon: '🏠',
    title: 'Gronze.com — Camino Lodging',
    body: 'Albergue names, prices, bed counts, and municipal status for all 12 Camino de Santiago routes are sourced from Gronze.com, the most comprehensive Spanish-language pilgrim infrastructure database. Prices reflect published rates at the time of our last quarterly review.',
  },
  {
    icon: '⛩️',
    title: 'Kumano Travel — Kumano Kodo Lodging',
    body: 'Lodging data for the Nakahechi, Kohechi, Ohechi, and Iseji routes is sourced from kumano-travel.com, the official Kumano Kodo reservation and information platform operated by the Nachikatsura town cooperative.',
  },
  {
    icon: '🏮',
    title: '88Shikokuhenro.jp — Temple Information',
    body: 'Temple details, visiting hours, stamp (nōkyō) practices, and lodging (shukubō) information for the Shikoku 88-temple Henro are sourced from 88shikokuhenro.jp, cross-referenced against the official Shikoku Pilgrimage Executive Committee materials.',
  },
  {
    icon: '✅',
    title: 'Manual Verification',
    body: 'Each data point goes through manual review before publication. Our team cross-checks prices, opening status, and GPS coordinates using satellite imagery, pilgrim forum reports, and direct inspection of association materials. Points of interest descriptions were drafted with AI assistance and verified against official sources where possible.',
  },
]

const UPDATE_FREQ = [
  { category: 'Lodging prices', freq: 'Quarterly review', note: 'Actual rates may vary — always confirm directly with the albergue or guesthouse before your trip.' },
  { category: 'Route waypoints & distances', freq: 'Annual review', note: 'Updated when associations publish revised stage maps or significant trail reroutes are confirmed.' },
  { category: 'Temple information (Shikoku)', freq: 'When major changes are reported', note: 'Temple closures, reconstruction, and visiting-hour changes are applied as they are confirmed.' },
  { category: 'Points of interest', freq: 'Rolling updates', note: 'New fountains, pharmacies, and facilities are added through app updates at no extra cost.' },
]

const VERIFY_ITEMS = [
  'Lodging prices and availability — especially in peak season (May–September on Camino routes, April–May for Shikoku)',
  'Opening hours of albergues, restaurants, and pharmacies — rural villages often have limited schedules',
  'Albergue reservation requirements — some municipal albergues are walk-in only; others now require advance booking',
  'Trail closures after storms — mountain sections of Primitivo, Norte, and Kohechi can be affected by seasonal damage',
  'Cash requirements — many small villages and temple lodgings in Japan do not accept cards',
  'Pilgrim credential requirements — some newer routes may require specific stamp office registration',
]

export default function DataSourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-stone-400 mb-6">
        <a href="/" className="hover:text-forest">Home</a>{' / '}
        <span className="text-stone-600">Data Sources</span>
      </nav>

      <h1 className="text-4xl font-bold text-ink mb-3">Data Sources & Verification</h1>
      <p className="text-stone-600 text-lg mb-10 leading-relaxed">
        Transparency about where our data comes from and how we keep it accurate.
        Pilgrimage conditions change — this page explains our process and what you should verify before you walk.
      </p>

      {/* How we collect data */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-6">How We Collect Data</h2>
        <div className="space-y-5">
          {SOURCES.map(s => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-semibold text-forest text-lg">{s.title}</h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed ml-9">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Update frequency */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-5">Update Frequency</h2>
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-parchment border-b border-stone-200">
                <th className="text-left px-5 py-3 font-semibold text-stone-700">Data Category</th>
                <th className="text-left px-5 py-3 font-semibold text-stone-700">Review Cycle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {UPDATE_FREQ.map(row => (
                <tr key={row.category} className="hover:bg-stone-50">
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{row.category}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{row.note}</p>
                  </td>
                  <td className="px-5 py-4 text-forest font-medium whitespace-nowrap">{row.freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What to verify */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-3">What to Verify Before Your Trip</h2>
        <p className="text-stone-600 text-sm mb-5">
          Sacred Trails data is a solid starting point, but pilgrimage infrastructure changes constantly.
          Before you leave home, we recommend independently confirming:
        </p>
        <div className="bg-amber/10 border border-amber/30 rounded-2xl p-6">
          <ul className="space-y-3">
            {VERIFY_ITEMS.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-700">
                <span className="text-amber font-bold flex-shrink-0">!</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to report errors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-3">How to Report Errors</h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          Found an outdated price, a closed albergue, or a GPS coordinate that&apos;s off? Please let us know.
          We review all corrections and, when confirmed, roll them into the next app update at no extra cost to existing users.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:papahades01@gmail.com?subject=Sacred%20Trails%20Data%20Correction"
            className="inline-flex items-center gap-2 bg-forest text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-forest/90 transition-colors"
          >
            <span>✉️</span> Email a correction
          </a>
          <p className="text-sm text-stone-500 self-center">
            Or leave a note via the App Store listing — we read all reviews.
          </p>
        </div>
      </section>

      {/* AI disclosure */}
      <section className="bg-stone-100 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-ink mb-2">AI Assistance Disclosure</h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          Route descriptions, waypoint historical narratives, and points of interest details were drafted with AI assistance
          and subsequently reviewed against official association publications, guidebooks, and pilgrim community resources.
          Structured data (distances, prices, GPS coordinates, bed counts) comes from the primary sources listed above and
          is not AI-generated. We believe in being transparent about this: AI helped us write at scale, but humans verified
          what matters most before the data went into your pocket.
        </p>
      </section>

      <div className="mt-10 text-center">
        <a href="/changelog" className="text-sm text-forest hover:underline">View the update log →</a>
      </div>
    </div>
  )
}
