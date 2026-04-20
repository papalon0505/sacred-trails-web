export type Locale = 'en' | 'ja' | 'zh-TW' | 'es'
export const LOCALIZED: Locale[] = ['ja', 'zh-TW', 'es']
export const ALL_LOCALES: Locale[] = ['en', ...LOCALIZED]

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  'en': 'en',
  'ja': 'ja',
  'zh-TW': 'zh-Hant',
  'es': 'es',
}

export const BASE_URL = 'https://sacredtrails.evelyn-ai.com'

export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === 'en') return clean
  return `/${locale}${clean === '/' ? '' : clean}`
}

function pickLocaleKey(locale: Locale): 'en' | 'ja' | 'zhTW' | 'es' {
  if (locale === 'zh-TW') return 'zhTW'
  return locale
}

export function pick<T extends Record<string, string | undefined>>(map: T, locale: Locale): string {
  const key = pickLocaleKey(locale) as keyof T
  return (map[key] as string | undefined) ?? (map.en as string | undefined) ?? ''
}

export interface Dict {
  nav: { routes: string; guide: string }
  footer: { rights: string; privacy: string; allRoutes: string }
  home: {
    eyebrow: string
    heroTitle: string
    heroDesc: string
    browseRoutes: string
    systemsTitle: string
    systemsSubtitle: string
    caminoHeading: string
    japanHeading: string
    featuresTitle: string
    features: { icon: string; title: string; desc: string }[]
    systems: { key: 'camino' | 'kumano' | 'shikoku' | 'saigoku'; icon: string; label: string; desc: string }[]
    screenshotsTitle: string
    faqTitle: string
    faq: { q: string; a: string }[]
    metaTitle: string
    metaDesc: string
  }
  routesList: {
    title: string
    subtitle: string
    metaTitle: string
    metaDesc: string
    groups: { key: 'camino' | 'kumano' | 'shikoku' | 'saigoku'; label: string; country: string; icon: string }[]
    routeSuffix: (n: number) => string
  }
  route: {
    labels: { distance: string; duration: string; difficulty: string; certification: string; startEnd: string }
    sections: { about: string; waypoints: string; pois: string; related: string; official: string }
    ctaTitle: (name: string) => string
    ctaDesc: string
    breadcrumbHome: string
    breadcrumbRoutes: string
    daysUnit: string
    distanceFromStart: (km: number, elev: number) => string
    difficultyLabels: Record<string, string>
  }
  guideIndex: {
    title: string
    subtitle: string
    metaTitle: string
    metaDesc: string
    guides: { slug: 'camino-de-santiago' | 'kumano-kodo' | 'shikoku-henro'; title: string; desc: string; icon: string }[]
  }
}

const en: Dict = {
  nav: { routes: 'Routes', guide: 'Guide' },
  footer: { rights: '© 2026 Sacred Trails. All rights reserved.', privacy: 'Privacy Policy', allRoutes: 'All Routes' },
  home: {
    eyebrow: '18 Pilgrimage Routes',
    heroTitle: "Your Offline Guide to the World's Sacred Trails",
    heroDesc: 'Walk the Camino de Santiago, Kumano Kodo, or Shikoku Henro with confidence. Stage-by-stage navigation, waypoints, and lodging — no internet required.',
    browseRoutes: 'Browse Routes →',
    systemsTitle: '18 Routes Across Two Continents',
    systemsSubtitle: 'From medieval Spain to ancient Japan — all in one app.',
    caminoHeading: 'Camino de Santiago',
    japanHeading: 'Japanese Pilgrimage Routes',
    featuresTitle: 'Built for Pilgrims, Not Tourists',
    features: [
      { icon: '📡', title: 'Fully Offline', desc: 'All content — stages, waypoints, lodging, POIs — is bundled in the app. Walk without signal.' },
      { icon: '🌍', title: '10 Languages', desc: 'English, Japanese, Spanish, Chinese, Korean, French, German, Portuguese, Italian, and more.' },
      { icon: '📍', title: 'Stage Timeline', desc: 'A clear stage-by-stage view of your route — distances, elevations, and key stops at a glance.' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: 'Camino de Santiago', desc: 'Spain & France — 12 routes' },
      { key: 'kumano', icon: '⛩️', label: 'Kumano Kodo', desc: 'Japan — 4 ancient routes' },
      { key: 'shikoku', icon: '🏮', label: 'Shikoku Henro', desc: 'Japan — 88 sacred temples' },
      { key: 'saigoku', icon: '🌸', label: 'Saigoku Kannon', desc: 'Japan — 33 Kannon shrines' },
    ],
    screenshotsTitle: 'See It in Action',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'Does Sacred Trails work offline?', a: 'Yes. All route content — waypoints, stages, lodging, and POIs — is bundled in the app. No internet connection required on trail.' },
      { q: 'Which routes are included?', a: 'Sacred Trails covers 18 routes: 12 Camino de Santiago routes, 4 Kumano Kodo routes, the Shikoku 88-Temple Henro, and the Saigoku 33 Kannon Pilgrimage.' },
      { q: 'How much does the app cost?', a: 'The app is free to download. Individual routes are unlocked for $4.99 each via in-app purchase.' },
      { q: 'What languages are supported?', a: 'Sacred Trails is available in 10 languages: English, Japanese, Spanish, Traditional Chinese, Simplified Chinese, Korean, French, German, Portuguese, and Italian.' },
      { q: 'Is there a map?', a: "Sacred Trails uses a Stage Timeline UX rather than a traditional map. Each route is broken into clearly defined stages with distances, elevations, lodging, and key waypoints." },
    ],
    metaTitle: 'Sacred Trails — Camino de Santiago, Kumano Kodo & Shikoku Henro Offline Guide App',
    metaDesc: 'Complete offline guide for 18 sacred pilgrimage trails. Stage-by-stage navigation, 10 languages, no internet required.',
  },
  routesList: {
    title: 'All Pilgrimage Routes',
    subtitle: '18 routes across two continents — all available offline in Sacred Trails.',
    metaTitle: 'All 18 Pilgrimage Routes — Camino, Kumano Kodo & Shikoku Henro',
    metaDesc: 'Browse all 18 sacred pilgrimage routes: 12 Camino de Santiago routes, 4 Kumano Kodo routes, Shikoku Henro, and Saigoku 33 Kannon.',
    groups: [
      { key: 'camino', label: 'Camino de Santiago', country: 'Spain & France', icon: '🐚' },
      { key: 'kumano', label: 'Kumano Kodo', country: 'Japan', icon: '⛩️' },
      { key: 'shikoku', label: 'Shikoku Henro', country: 'Japan', icon: '🏮' },
      { key: 'saigoku', label: 'Saigoku 33 Kannon', country: 'Japan', icon: '🌸' },
    ],
    routeSuffix: n => n === 1 ? '1 route' : `${n} routes`,
  },
  route: {
    labels: { distance: 'Distance', duration: 'Duration', difficulty: 'Difficulty', certification: 'Certification', startEnd: 'Start → End' },
    sections: { about: 'About the Route', waypoints: 'Key Waypoints', pois: 'Points of Interest', related: 'Related Routes', official: 'Official resource' },
    ctaTitle: name => `Navigate the ${name} Offline`,
    ctaDesc: 'Download Sacred Trails and walk with full route data — no internet required.',
    breadcrumbHome: 'Home',
    breadcrumbRoutes: 'Routes',
    daysUnit: 'days',
    distanceFromStart: (km, elev) => `${km}km from start · ${elev}m`,
    difficultyLabels: { easy: 'Easy', moderate: 'Moderate', challenging: 'Challenging', very_challenging: 'Very Challenging' },
  },
  guideIndex: {
    title: 'Pilgrimage Guides',
    subtitle: "Everything you need to plan and walk the world's great pilgrimage routes.",
    metaTitle: 'Pilgrimage Route Guides — Camino, Kumano Kodo, Shikoku Henro',
    metaDesc: "Complete guides for the world's most famous pilgrimage routes.",
    guides: [
      { slug: 'camino-de-santiago', title: 'Camino de Santiago — Complete Guide', desc: '12 routes, 780km to 1200km, starting from France or Portugal.', icon: '🐚' },
      { slug: 'kumano-kodo', title: 'Kumano Kodo — Complete Guide', desc: '4 ancient routes through the sacred forests of the Kii Peninsula.', icon: '⛩️' },
      { slug: 'shikoku-henro', title: 'Shikoku 88 Temple Pilgrimage — Complete Guide', desc: "1,200km circuit of Shikoku island, following Kōbō Daishi's footsteps.", icon: '🏮' },
    ],
  },
}

const ja: Dict = {
  nav: { routes: 'ルート一覧', guide: 'ガイド' },
  footer: { rights: '© 2026 Sacred Trails. All rights reserved.', privacy: 'プライバシーポリシー', allRoutes: '全ルート' },
  home: {
    eyebrow: '18の巡礼ルート',
    heroTitle: 'オフラインで歩ける世界の聖なる巡礼ガイド',
    heroDesc: 'カミーノ・デ・サンティアゴ、熊野古道、四国遍路を安心して歩ける。ステージごとのナビゲーション、ウェイポイント、宿泊情報 — Wi-Fi不要。',
    browseRoutes: 'ルートを見る →',
    systemsTitle: '2大陸・18ルート',
    systemsSubtitle: '中世スペインから古代日本まで — 1つのアプリで。',
    caminoHeading: 'カミーノ・デ・サンティアゴ',
    japanHeading: '日本の巡礼路',
    featuresTitle: '観光客ではなく巡礼者のために',
    features: [
      { icon: '📡', title: '完全オフライン', desc: 'ステージ・ウェイポイント・宿泊・POI全てがアプリ内に収録。電波なしでも歩けます。' },
      { icon: '🌍', title: '10言語対応', desc: '日本語・英語・スペイン語・中国語・韓国語・フランス語・ドイツ語など。' },
      { icon: '📍', title: 'ステージタイムライン', desc: 'ルートを明確に区切り、距離・標高・主要ポイントを一覧で把握。' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: 'カミーノ・デ・サンティアゴ', desc: 'スペイン・フランス — 12ルート' },
      { key: 'kumano', icon: '⛩️', label: '熊野古道', desc: '日本 — 4つの古道' },
      { key: 'shikoku', icon: '🏮', label: '四国遍路', desc: '日本 — 88ヶ所の霊場' },
      { key: 'saigoku', icon: '🌸', label: '西国三十三所', desc: '日本 — 33観音霊場' },
    ],
    screenshotsTitle: 'アプリの画面',
    faqTitle: 'よくある質問',
    faq: [
      { q: 'オフラインで使えますか？', a: 'はい。全ルートのコンテンツ（ウェイポイント・ステージ・宿泊・POI）はアプリ内に保存されています。巡礼中もWi-Fi不要。' },
      { q: 'どのルートに対応していますか？', a: '18ルートに対応：カミーノ・デ・サンティアゴ12ルート、熊野古道4ルート、四国88ヶ所遍路、西国三十三所観音霊場。' },
      { q: '料金は？', a: 'アプリのダウンロードは無料。各ルートは1件$4.99のアプリ内課金で解錠されます。' },
      { q: '対応言語は？', a: '10言語対応：日本語・英語・スペイン語・繁体字中国語・簡体字中国語・韓国語・フランス語・ドイツ語・ポルトガル語・イタリア語。' },
      { q: '地図はありますか？', a: '地図ではなく「ステージタイムライン」方式を採用。各ルートが明確な区間に分割され、距離・標高・宿泊・主要ウェイポイントが一目で分かります。' },
    ],
    metaTitle: 'Sacred Trails — カミーノ・熊野古道・四国遍路のオフライン巡礼ガイドアプリ',
    metaDesc: '18の巡礼ルート対応・オフライン完全対応。カミーノ・デ・サンティアゴ、熊野古道、四国遍路。ステージごとのナビゲーション、10言語対応。',
  },
  routesList: {
    title: '全巡礼ルート',
    subtitle: '2大陸・18ルート — 全てSacred Trailsでオフライン利用可能。',
    metaTitle: '全18巡礼ルート一覧 — カミーノ・熊野古道・四国遍路',
    metaDesc: 'カミーノ12ルート、熊野古道4ルート、四国88ヶ所、西国三十三所 — 18の聖なる巡礼路すべて。',
    groups: [
      { key: 'camino', label: 'カミーノ・デ・サンティアゴ', country: 'スペイン・フランス', icon: '🐚' },
      { key: 'kumano', label: '熊野古道', country: '日本', icon: '⛩️' },
      { key: 'shikoku', label: '四国遍路', country: '日本', icon: '🏮' },
      { key: 'saigoku', label: '西国三十三所', country: '日本', icon: '🌸' },
    ],
    routeSuffix: n => `${n}ルート`,
  },
  route: {
    labels: { distance: '距離', duration: '所要日数', difficulty: '難易度', certification: '認定証', startEnd: '起点 → 終点' },
    sections: { about: 'ルートについて', waypoints: '主要ウェイポイント', pois: '見どころ', related: '関連ルート', official: '公式情報' },
    ctaTitle: name => `${name}をオフラインで歩く`,
    ctaDesc: 'Sacred Trailsをダウンロードすれば、全ルートデータが手元に — Wi-Fi不要。',
    breadcrumbHome: 'ホーム',
    breadcrumbRoutes: 'ルート一覧',
    daysUnit: '日',
    distanceFromStart: (km, elev) => `起点から${km}km · 標高${elev}m`,
    difficultyLabels: { easy: 'やさしい', moderate: '普通', challenging: '上級', very_challenging: '最上級' },
  },
  guideIndex: {
    title: '巡礼ガイド',
    subtitle: '世界の偉大な巡礼路を計画し、歩くために必要なすべて。',
    metaTitle: '巡礼ルートガイド — カミーノ・熊野古道・四国遍路',
    metaDesc: '世界で最も有名な巡礼ルートの完全ガイド。',
    guides: [
      { slug: 'camino-de-santiago', title: 'カミーノ・デ・サンティアゴ — 完全ガイド', desc: '12ルート、780km〜1200km、フランスまたはポルトガルから出発。', icon: '🐚' },
      { slug: 'kumano-kodo', title: '熊野古道 — 完全ガイド', desc: '紀伊半島の聖なる森を通る4つの古道。', icon: '⛩️' },
      { slug: 'shikoku-henro', title: '四国八十八ヶ所遍路 — 完全ガイド', desc: '弘法大師の足跡を辿る四国一周1,200kmの霊場巡り。', icon: '🏮' },
    ],
  },
}

const zhTW: Dict = {
  nav: { routes: '路線', guide: '攻略' },
  footer: { rights: '© 2026 Sacred Trails. 保留所有權利。', privacy: '隱私權政策', allRoutes: '全部路線' },
  home: {
    eyebrow: '18 條朝聖之路',
    heroTitle: '離線也能走遍全世界的聖地朝聖路',
    heroDesc: '走聖雅各之路、熊野古道、四國遍路都不用擔心迷路。逐段導航、路徑點、住宿資訊 — 無需網路。',
    browseRoutes: '瀏覽路線 →',
    systemsTitle: '橫跨兩大洲的 18 條路線',
    systemsSubtitle: '從中世紀西班牙到古日本 — 一個 App 全部搞定。',
    caminoHeading: '聖雅各之路（Camino）',
    japanHeading: '日本朝聖之路',
    featuresTitle: '為朝聖者而生，不是為觀光客',
    features: [
      { icon: '📡', title: '完全離線', desc: '所有路線內容都內建在 App 中：路段、路徑點、住宿、景點。沒訊號也能走。' },
      { icon: '🌍', title: '10 國語言', desc: '中文（繁簡）、英、日、西、韓、法、德、葡、義。' },
      { icon: '📍', title: '路段時間軸', desc: '路線分段清楚，距離、海拔、關鍵停留點一目了然。' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: '聖雅各之路', desc: '西班牙・法國 — 12 條路線' },
      { key: 'kumano', icon: '⛩️', label: '熊野古道', desc: '日本 — 4 條古道' },
      { key: 'shikoku', icon: '🏮', label: '四國遍路', desc: '日本 — 88 座靈場' },
      { key: 'saigoku', icon: '🌸', label: '西國三十三所', desc: '日本 — 33 觀音靈場' },
    ],
    screenshotsTitle: 'App 畫面',
    faqTitle: '常見問題',
    faq: [
      { q: 'Sacred Trails 可以離線使用嗎？', a: '可以。所有路線的路徑點、路段、住宿、景點全部內建在 App 中。上路不需連網。' },
      { q: '收錄哪些路線？', a: '共 18 條：聖雅各之路 12 條、熊野古道 4 條、四國 88 所遍路、西國三十三所。' },
      { q: 'App 多少錢？', a: 'App 免費下載，每條路線以 App 內購方式解鎖，一條 US$4.99。' },
      { q: '支援哪些語言？', a: '10 國語言：繁體中文、簡體中文、英、日、西、韓、法、德、葡、義。' },
      { q: '有地圖嗎？', a: '採用「路段時間軸」而非傳統地圖。每條路線分成清楚的路段，距離、海拔、住宿、關鍵路徑點一次呈現。' },
    ],
    metaTitle: 'Sacred Trails — 聖雅各之路・熊野古道・四國遍路 離線朝聖導航 App',
    metaDesc: '18 條朝聖之路離線完整導航。聖雅各、熊野古道、四國遍路逐段路徑點。10 國語言、無需網路。',
  },
  routesList: {
    title: '全部朝聖路線',
    subtitle: '橫跨兩大洲 18 條路線 — Sacred Trails 離線全支援。',
    metaTitle: '全 18 條朝聖路線 — 聖雅各・熊野古道・四國遍路',
    metaDesc: '聖雅各 12 條、熊野古道 4 條、四國 88 所、西國三十三所 — 18 條聖地朝聖路一次看。',
    groups: [
      { key: 'camino', label: '聖雅各之路', country: '西班牙・法國', icon: '🐚' },
      { key: 'kumano', label: '熊野古道', country: '日本', icon: '⛩️' },
      { key: 'shikoku', label: '四國遍路', country: '日本', icon: '🏮' },
      { key: 'saigoku', label: '西國三十三所', country: '日本', icon: '🌸' },
    ],
    routeSuffix: n => `${n} 條路線`,
  },
  route: {
    labels: { distance: '距離', duration: '所需天數', difficulty: '難度', certification: '認證', startEnd: '起點 → 終點' },
    sections: { about: '路線簡介', waypoints: '主要路徑點', pois: '景點', related: '相關路線', official: '官方資源' },
    ctaTitle: name => `離線走${name}`,
    ctaDesc: '下載 Sacred Trails，所有路線資料離線帶著走 — 無需網路。',
    breadcrumbHome: '首頁',
    breadcrumbRoutes: '路線',
    daysUnit: '天',
    distanceFromStart: (km, elev) => `離起點 ${km} 公里 · 海拔 ${elev} m`,
    difficultyLabels: { easy: '輕鬆', moderate: '中等', challenging: '困難', very_challenging: '極困難' },
  },
  guideIndex: {
    title: '朝聖攻略',
    subtitle: '規劃和走遍世界朝聖路所需的一切。',
    metaTitle: '朝聖路線攻略 — 聖雅各・熊野古道・四國遍路',
    metaDesc: '世界最著名朝聖路線完整攻略。',
    guides: [
      { slug: 'camino-de-santiago', title: '聖雅各之路 — 完整攻略', desc: '12 條路線，780–1200 公里，從法國或葡萄牙啟程。', icon: '🐚' },
      { slug: 'kumano-kodo', title: '熊野古道 — 完整攻略', desc: '穿越紀伊半島聖林的 4 條古道。', icon: '⛩️' },
      { slug: 'shikoku-henro', title: '四國八十八所遍路 — 完整攻略', desc: '1,200 公里環島，追隨弘法大師足跡。', icon: '🏮' },
    ],
  },
}

const es: Dict = {
  nav: { routes: 'Rutas', guide: 'Guía' },
  footer: { rights: '© 2026 Sacred Trails. Todos los derechos reservados.', privacy: 'Política de privacidad', allRoutes: 'Todas las rutas' },
  home: {
    eyebrow: '18 Rutas de Peregrinación',
    heroTitle: 'Tu guía offline para las rutas sagradas del mundo',
    heroDesc: 'Camina el Camino de Santiago, Kumano Kodo o Shikoku Henro con confianza. Navegación etapa por etapa, waypoints y alojamiento — sin necesidad de internet.',
    browseRoutes: 'Ver rutas →',
    systemsTitle: '18 rutas en dos continentes',
    systemsSubtitle: 'De la España medieval al Japón ancestral — todo en una app.',
    caminoHeading: 'Camino de Santiago',
    japanHeading: 'Rutas de peregrinación de Japón',
    featuresTitle: 'Hecho para peregrinos, no para turistas',
    features: [
      { icon: '📡', title: 'Totalmente offline', desc: 'Todo el contenido — etapas, waypoints, alojamiento, POIs — está en la app. Camina sin señal.' },
      { icon: '🌍', title: '10 idiomas', desc: 'Español, inglés, japonés, chino, coreano, francés, alemán, portugués e italiano.' },
      { icon: '📍', title: 'Línea de etapas', desc: 'Una vista clara etapa por etapa: distancias, desniveles y paradas clave de un vistazo.' },
    ],
    systems: [
      { key: 'camino', icon: '🐚', label: 'Camino de Santiago', desc: 'España y Francia — 12 rutas' },
      { key: 'kumano', icon: '⛩️', label: 'Kumano Kodo', desc: 'Japón — 4 rutas antiguas' },
      { key: 'shikoku', icon: '🏮', label: 'Shikoku Henro', desc: 'Japón — 88 templos sagrados' },
      { key: 'saigoku', icon: '🌸', label: 'Saigoku Kannon', desc: 'Japón — 33 santuarios de Kannon' },
    ],
    screenshotsTitle: 'Míralo en acción',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Sacred Trails funciona offline?', a: 'Sí. Todo el contenido de ruta — waypoints, etapas, alojamiento y POIs — está incluido en la app. No se necesita conexión a internet en la ruta.' },
      { q: '¿Qué rutas incluye?', a: 'Sacred Trails cubre 18 rutas: 12 del Camino de Santiago, 4 del Kumano Kodo, el Shikoku 88-Templos y la peregrinación Saigoku 33.' },
      { q: '¿Cuánto cuesta la app?', a: 'La descarga es gratuita. Cada ruta se desbloquea por $4.99 mediante compra dentro de la app.' },
      { q: '¿Qué idiomas admite?', a: '10 idiomas: español, inglés, japonés, chino tradicional, chino simplificado, coreano, francés, alemán, portugués e italiano.' },
      { q: '¿Tiene mapa?', a: 'Sacred Trails usa una línea de etapas en lugar de un mapa tradicional. Cada ruta se divide en etapas claras con distancias, desniveles, alojamiento y waypoints clave.' },
    ],
    metaTitle: 'Sacred Trails — App guía offline del Camino de Santiago, Kumano Kodo y Shikoku Henro',
    metaDesc: 'Guía offline completa de 18 rutas de peregrinación. Navegación etapa a etapa, 10 idiomas, sin internet.',
  },
  routesList: {
    title: 'Todas las rutas de peregrinación',
    subtitle: '18 rutas en dos continentes — todas disponibles offline en Sacred Trails.',
    metaTitle: '18 rutas de peregrinación — Camino, Kumano Kodo y Shikoku Henro',
    metaDesc: 'Explora las 18 rutas sagradas: 12 del Camino, 4 del Kumano Kodo, Shikoku Henro y Saigoku 33.',
    groups: [
      { key: 'camino', label: 'Camino de Santiago', country: 'España y Francia', icon: '🐚' },
      { key: 'kumano', label: 'Kumano Kodo', country: 'Japón', icon: '⛩️' },
      { key: 'shikoku', label: 'Shikoku Henro', country: 'Japón', icon: '🏮' },
      { key: 'saigoku', label: 'Saigoku 33 Kannon', country: 'Japón', icon: '🌸' },
    ],
    routeSuffix: n => n === 1 ? '1 ruta' : `${n} rutas`,
  },
  route: {
    labels: { distance: 'Distancia', duration: 'Duración', difficulty: 'Dificultad', certification: 'Certificación', startEnd: 'Inicio → Fin' },
    sections: { about: 'Sobre la ruta', waypoints: 'Waypoints clave', pois: 'Puntos de interés', related: 'Rutas relacionadas', official: 'Recurso oficial' },
    ctaTitle: name => `Camina ${name} offline`,
    ctaDesc: 'Descarga Sacred Trails y camina con datos completos — sin internet.',
    breadcrumbHome: 'Inicio',
    breadcrumbRoutes: 'Rutas',
    daysUnit: 'días',
    distanceFromStart: (km, elev) => `${km}km desde el inicio · ${elev}m`,
    difficultyLabels: { easy: 'Fácil', moderate: 'Moderada', challenging: 'Difícil', very_challenging: 'Muy difícil' },
  },
  guideIndex: {
    title: 'Guías de peregrinación',
    subtitle: 'Todo lo que necesitas para planificar y caminar las grandes rutas de peregrinación.',
    metaTitle: 'Guías de rutas de peregrinación — Camino, Kumano Kodo, Shikoku Henro',
    metaDesc: 'Guías completas de las rutas de peregrinación más famosas del mundo.',
    guides: [
      { slug: 'camino-de-santiago', title: 'Camino de Santiago — Guía completa', desc: '12 rutas, de 780 a 1200 km, desde Francia o Portugal.', icon: '🐚' },
      { slug: 'kumano-kodo', title: 'Kumano Kodo — Guía completa', desc: '4 rutas antiguas por los bosques sagrados de la península de Kii.', icon: '⛩️' },
      { slug: 'shikoku-henro', title: 'Peregrinación de los 88 templos de Shikoku — Guía completa', desc: '1.200 km alrededor de Shikoku, siguiendo los pasos de Kōbō Daishi.', icon: '🏮' },
    ],
  },
}

export const dictionaries: Record<Locale, Dict> = { en, ja, 'zh-TW': zhTW, es }

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en
}
