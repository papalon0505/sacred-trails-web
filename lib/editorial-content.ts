import type { ArticleSlug } from './article-content'
import type { GuideSlug } from './guide-content'

export interface EditorialSource {
  label: string
  url: string
  note: string
}

export interface EditorialReview {
  lastReviewed: string
  reviewScope: string
  caveat: string
  sources: EditorialSource[]
}

const REVIEWED_ON = '2026-06-30'

const caminoSources: EditorialSource[] = [
  {
    label: 'Pilgrim Reception Office, Santiago de Compostela',
    url: 'https://oficinadelperegrino.com/en/',
    note: 'Credential, Compostela, official route and pilgrim-arrival reference.',
  },
  {
    label: 'Cathedral of Santiago',
    url: 'https://catedraldesantiago.es/en/',
    note: 'Official cathedral and pilgrimage destination reference.',
  },
]

const kumanoSources: EditorialSource[] = [
  {
    label: 'Tanabe City Kumano Tourism Bureau',
    url: 'https://www.tb-kumano.jp/en/kumano-kodo/',
    note: 'Official Kumano Kodo route, safety, access, and Dual Pilgrim guidance.',
  },
  {
    label: 'Kumano Travel',
    url: 'https://www.kumano-travel.com/en',
    note: 'Official community reservation system for lodging and transport planning.',
  },
]

const shikokuSources: EditorialSource[] = [
  {
    label: 'Shikoku 88 Pilgrimage Official Website',
    url: 'https://88shikokuhenro.jp/en/',
    note: 'Official temple-route, etiquette, and pilgrimage overview reference.',
  },
  {
    label: 'Shikoku Tourism Creation Organization',
    url: 'https://shikoku-tourism.com/en',
    note: 'Regional tourism and access reference for Shikoku travel planning.',
  },
]

const saigokuSources: EditorialSource[] = [
  {
    label: 'Saikoku 33 Kannon Pilgrimage Official Website',
    url: 'https://saikoku33.gr.jp/',
    note: 'Official temple list and pilgrimage association reference.',
  },
  {
    label: 'Japan National Tourism Organization',
    url: 'https://www.japan.travel/en/',
    note: 'Japan travel access, seasonal, and regional planning reference.',
  },
]

const standardCaveat = 'Route distances, lodging availability, prices, temple hours, transport schedules, and certification rules can change. Use these notes for planning, then verify time-sensitive details with the official source before departure.'

export const guideEditorialReviews: Record<GuideSlug, EditorialReview> = {
  'camino-de-santiago': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Route overview, credential basics, season guidance, beginner route selection, and app coverage checked against official Camino references.',
    caveat: standardCaveat,
    sources: caminoSources,
  },
  'kumano-kodo': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Route overview, Dual Pilgrim basics, Nakahechi/Kohechi planning notes, season guidance, and official Kumano travel resources reviewed.',
    caveat: standardCaveat,
    sources: kumanoSources,
  },
  'shikoku-henro': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Full-circuit distance, temple count, walking-duration range, pilgrim etiquette, and planning assumptions reviewed against Shikoku references.',
    caveat: standardCaveat,
    sources: shikokuSources,
  },
}

export const articleEditorialReviews: Record<ArticleSlug, EditorialReview> = {
  'camino-packing-list': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Packing weights, foot-care recommendations, pilgrim credential reminder, and on-route resupply assumptions reviewed for practical first-time Camino use.',
    caveat: standardCaveat,
    sources: [
      ...caminoSources,
      {
        label: 'Correos Camino services',
        url: 'https://www.elcaminoconcorreos.com/en/',
        note: 'Baggage transfer and Camino logistics reference.',
      },
    ],
  },
  'camino-cost': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Budget ranges, accommodation categories, pilgrim menu assumptions, and cash/card cautions reviewed as planning estimates rather than live prices.',
    caveat: standardCaveat,
    sources: [
      ...caminoSources,
      {
        label: 'Gronze Camino route and lodging references',
        url: 'https://www.gronze.com/',
        note: 'Independent route-stage and accommodation planning reference.',
      },
    ],
  },
  'first-pilgrimage': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Route comparison, first-pilgrimage difficulty guidance, season recommendations, and certificate overview checked across Camino, Kumano, and Shikoku sources.',
    caveat: standardCaveat,
    sources: [...caminoSources, ...kumanoSources, ...shikokuSources],
  },
  'camino-routes-compared': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Major Camino route differences, time commitments, infrastructure, credential implications, and beginner suitability reviewed for route-choice planning.',
    caveat: standardCaveat,
    sources: [
      ...caminoSources,
      {
        label: 'Gronze Camino stages',
        url: 'https://www.gronze.com/camino-santiago',
        note: 'Stage-by-stage route planning reference.',
      },
    ],
  },
  'kumano-kodo-nakahechi-itinerary': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Nakahechi stage rhythm, lodging reservation cautions, bus-use caveats, weather considerations, and official route resources reviewed.',
    caveat: standardCaveat,
    sources: kumanoSources,
  },
  'shikoku-henro-planning': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Walking-duration range, section-walking options, temple etiquette, lodging/resupply planning, and road-walking cautions reviewed.',
    caveat: standardCaveat,
    sources: shikokuSources,
  },
  'dual-pilgrim-certificate': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Camino and Kumano qualifying logic, document preparation, office workflow, and official verification path reviewed.',
    caveat: standardCaveat,
    sources: [...caminoSources, ...kumanoSources],
  },
  'saigoku-33-kannon-pilgrimage': {
    lastReviewed: REVIEWED_ON,
    reviewScope: 'Temple-count overview, multi-trip planning, transport-heavy route expectations, stamp-book cautions, and official association reference reviewed.',
    caveat: standardCaveat,
    sources: saigokuSources,
  },
}

export function getGuideEditorialReview(slug?: string): EditorialReview | undefined {
  if (!slug) return undefined
  return guideEditorialReviews[slug as GuideSlug]
}

export function getArticleEditorialReview(slug: string): EditorialReview | undefined {
  return articleEditorialReviews[slug as ArticleSlug]
}
