import type { Locale } from '@/lib/i18n'

export type GuideSlug = 'camino-de-santiago' | 'kumano-kodo' | 'shikoku-henro'

export interface GuideContent {
  title: string
  subtitle: string
  metaTitle: string
  metaDesc: string
  intro: string[]
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
}

const camino: Record<Locale, GuideContent> = {
  'en': {
    title: 'Camino de Santiago — Complete Guide',
    subtitle: '12 routes · Spain & France · Medieval pilgrimage to Santiago de Compostela',
    metaTitle: 'Camino de Santiago — Complete Guide 2026: Routes, Distance & Tips',
    metaDesc: 'Complete guide to the Camino de Santiago. 12 routes from the Francés to the Primitivo. Distances, difficulty, stages, and how to prepare.',
    intro: [
      "The Camino de Santiago — the Way of Saint James — is one of the great pilgrimage journeys of medieval Christian Europe and today one of the most-walked long-distance trails on Earth. Routes converge from across the continent toward a single destination: the Cathedral of Santiago de Compostela in Galicia, where the tomb of the apostle Saint James has drawn pilgrims since the 9th century.",
      "In 2024, 499,239 pilgrims received the Compostela certificate — a historic high, per the Archdiocese of Santiago de Compostela's Pilgrim Reception Office. The UNESCO World Heritage–listed network of trails is alive with centuries of history, community, and personal transformation.",
      "What makes the Camino unique is the living culture of the pilgrim community: the shared greeting of Buen Camino, the camaraderie of the albergues, and the multinational fellowship that forms and dissolves with each day's walking.",
    ],
    faq: [
      { q: 'Which Camino route is best for beginners?', a: 'The Camino Portugués Central (260km, 12 days from Porto) or Camino Inglés (120km, 5 days) are ideal for beginners. The Camino Francés (780km, 30 days) is the classic choice if you have more time.' },
      { q: 'What is the Compostela certificate?', a: "The Compostela is the official certificate of completion issued by the Pilgrim's Reception Office in Santiago. To receive it, you must walk at least the last 100km and carry a pilgrim's passport stamped along the way." },
      { q: 'When is the best time to walk the Camino?', a: 'April–June and September–October offer the best weather: mild temperatures, fewer crowds than summer. Winter is quiet but cold and many albergues close.' },
      { q: 'Do I need a guide book or app?', a: 'Most pilgrims use a guidebook plus a mobile app for real-time navigation. Sacred Trails provides offline stage navigation, waypoints, and lodging for all 12 Camino routes.' },
    ],
    ctaTitle: 'Walk the Camino Offline',
    ctaDesc: 'All 12 Camino routes in Sacred Trails. Stage navigation, waypoints, and lodging — no internet required.',
  },
  'ja': {
    title: 'カミーノ・デ・サンティアゴ — 完全ガイド',
    subtitle: '12ルート · スペイン・フランス · サンティアゴ・デ・コンポステーラへの中世巡礼路',
    metaTitle: 'カミーノ・デ・サンティアゴ 完全ガイド 2026 — ルート・距離・準備',
    metaDesc: 'カミーノ・デ・サンティアゴの完全ガイド。フランス人の道からプリミティボまで12ルート。距離・難易度・ステージ・準備方法。',
    intro: [
      "カミーノ・デ・サンティアゴ（聖ヤコブの道）は、中世ヨーロッパにおける偉大な巡礼路の一つであり、今日では世界で最も多く歩かれるロングトレイルの一つです。ヨーロッパ各地から複数のルートがスペイン北西部ガリシアのサンティアゴ・デ・コンポステーラ大聖堂を目指し、ここには9世紀から使徒聖ヤコブの墓があると伝えられています。",
      "2024年には499,239人の巡礼者がコンポステーラ認定証を受け取り、歴代最多を記録しました（サンティアゴ・デ・コンポステーラ大司教区巡礼事務所発表）。UNESCO世界遺産に登録されたこの巡礼ネットワークは、何世紀にもわたる歴史・コミュニティ・自己変革が今なお息づく道です。",
      "カミーノが他のロングトレイルと一線を画すのは、巡礼者コミュニティの生きた文化です。「ブエン・カミーノ（良き道を）」という挨拶、アルベルゲ（巡礼宿）での交流、毎日形成され解散する多国籍の仲間たち。",
    ],
    faq: [
      { q: '初心者におすすめのルートは？', a: 'ポルトガル人の道セントラル（ポルトから260km、12日）またはイングランド人の道（120km、5日）が初心者向けです。フランス人の道（780km、30日）は時間があれば王道の選択肢です。' },
      { q: 'コンポステーラ認定証とは？', a: 'コンポステーラは、サンティアゴの巡礼事務所が発行する公式の巡礼完遂証明書。受け取るには最低100km（自転車は200km）を歩き、道中で巡礼パスポートにスタンプを集める必要があります。' },
      { q: 'カミーノを歩くのに最適な季節は？', a: '4〜6月と9〜10月が最適。気候が穏やかで、夏よりも巡礼者が少なめ。冬は静かですが寒く、多くのアルベルゲが閉鎖されます。' },
      { q: 'ガイドブックやアプリは必要？', a: '多くの巡礼者はガイドブックとナビゲーションアプリを併用します。Sacred Trailsは12ルート全てのステージナビゲーション、ウェイポイント、宿泊をオフラインで提供します。' },
    ],
    ctaTitle: 'カミーノをオフラインで歩く',
    ctaDesc: '12ルート全てSacred Trailsに収録。ステージナビ・ウェイポイント・宿泊情報、Wi-Fi不要。',
  },
  'zh-TW': {
    title: '聖雅各之路 — 完整攻略',
    subtitle: '12 條路線 · 西班牙・法國 · 前往聖地亞哥德孔波斯特拉的中世紀朝聖之路',
    metaTitle: '聖雅各之路完整攻略 2026 — 路線、距離、準備',
    metaDesc: '聖雅各之路（Camino de Santiago）完整攻略。法國之路到原始之路 12 條路線，距離、難度、階段、準備方法。',
    intro: [
      "聖雅各之路（Camino de Santiago）是中世紀基督教歐洲最偉大的朝聖之路之一，今日更是全球最多人走的長距離步道。各條路線從歐洲各地匯聚，最終抵達西班牙西北加利西亞的聖地亞哥德孔波斯特拉大教堂——那裡自九世紀起便傳說葬有聖雅各使徒的遺骨。",
      "2024 年有 499,239 名朝聖者取得 Compostela 證書，創下歷史新高（資料來源：聖地亞哥德孔波斯特拉總主教區朝聖者事務所）。這條被聯合國教科文組織列為世界遺產的朝聖網絡，至今仍承載著數個世紀的歷史、社群與個人轉化。",
      "讓 Camino 有別於其他長程步道的，是朝聖者社群的活文化：一句「Buen Camino（一路順風）」的問候、朝聖者庇護所（albergue）裡的情誼、每天形成又解散的多國籍同伴關係。",
    ],
    faq: [
      { q: '新手適合哪條路線？', a: '葡萄牙之路中央線（Porto 起 260 公里，12 天）或英國之路（120 公里，5 天）最適合新手。法國之路（780 公里，30 天）如果時間充裕是經典選擇。' },
      { q: 'Compostela 證書是什麼？', a: 'Compostela 是聖地亞哥朝聖者辦公室發放的官方完成證書。要取得必須走完最後 100 公里（騎自行車 200 公里），沿途在朝聖者護照上蓋印章。' },
      { q: '最佳走 Camino 的季節？', a: '4–6 月和 9–10 月氣候最佳：溫度宜人、朝聖者較少。冬季安靜但寒冷，許多庇護所關閉。' },
      { q: '需要紙本指南或 App 嗎？', a: '多數朝聖者會搭配指南書和導航 App 使用。Sacred Trails 提供 12 條 Camino 路線的離線分段導航、路徑點和住宿資訊。' },
    ],
    ctaTitle: '離線走 Camino',
    ctaDesc: 'Sacred Trails 收錄 12 條 Camino 路線，分段導航、路徑點、住宿全部離線可用。',
  },
  'es': {
    title: 'Camino de Santiago — Guía completa',
    subtitle: '12 rutas · España y Francia · Peregrinación medieval a Santiago de Compostela',
    metaTitle: 'Camino de Santiago — Guía completa 2026: Rutas, distancias y consejos',
    metaDesc: 'Guía completa del Camino de Santiago. 12 rutas desde el Francés hasta el Primitivo. Distancias, dificultad, etapas y cómo prepararse.',
    intro: [
      "El Camino de Santiago es una de las grandes peregrinaciones de la Europa cristiana medieval y hoy una de las rutas de larga distancia más caminadas del mundo. Rutas convergen desde toda Europa hacia un único destino: la Catedral de Santiago de Compostela en Galicia, donde la tumba del apóstol Santiago atrae peregrinos desde el siglo IX.",
      "En 2024, 499.239 peregrinos recibieron la Compostela — un máximo histórico, según la Oficina de Acogida al Peregrino de la Archidiócesis de Santiago de Compostela. La red de caminos declarada Patrimonio de la Humanidad por la UNESCO sigue viva con siglos de historia, comunidad y transformación personal.",
      "Lo que hace único al Camino es la cultura viva de la comunidad peregrina: el saludo compartido de Buen Camino, la camaradería de los albergues y la compañía multinacional que se forma y se disuelve cada jornada.",
    ],
    faq: [
      { q: '¿Qué ruta es mejor para principiantes?', a: 'El Camino Portugués Central (260km, 12 días desde Oporto) o el Camino Inglés (120km, 5 días) son ideales para principiantes. El Camino Francés (780km, 30 días) es la opción clásica si dispones de más tiempo.' },
      { q: '¿Qué es la Compostela?', a: "La Compostela es el certificado oficial de finalización emitido por la Oficina del Peregrino en Santiago. Para obtenerla debes caminar al menos los últimos 100km y llevar la credencial del peregrino sellada durante el camino." },
      { q: '¿Cuál es la mejor época para caminar?', a: 'Abril–junio y septiembre–octubre ofrecen el mejor clima: temperaturas suaves y menos peregrinos que en verano. El invierno es tranquilo pero frío y muchos albergues cierran.' },
      { q: '¿Necesito guía o app?', a: 'La mayoría de peregrinos combinan una guía impresa con una app de navegación. Sacred Trails ofrece navegación offline por etapas, waypoints y alojamiento para las 12 rutas del Camino.' },
    ],
    ctaTitle: 'Camina el Camino offline',
    ctaDesc: '12 rutas del Camino en Sacred Trails. Etapas, waypoints y alojamiento — sin internet.',
  },
}

const kumano: Record<Locale, GuideContent> = {
  'en': {
    title: 'Kumano Kodo — Complete Guide',
    subtitle: '4 routes · Kii Peninsula, Japan · UNESCO World Heritage pilgrimage',
    metaTitle: "Kumano Kodo Guide 2026: Japan's Ancient Pilgrimage Roads",
    metaDesc: 'Complete guide to the Kumano Kodo pilgrimage routes in Japan. 4 routes through the sacred Kii Peninsula forest. UNESCO World Heritage.',
    intro: [
      "The Kumano Kodo is one of Japan's most sacred pilgrimage trail networks, winding through ancient cedar and cypress forests of the Kii Peninsula in Wakayama. For over a thousand years, emperors, nobles, and ordinary people have walked these moss-draped paths to venerate the three Grand Shrines of Kumano.",
      "Together with the Camino de Santiago, the Kumano Kodo is one of only two pilgrimage routes recognized as UNESCO World Heritage — a status earned for the depth of living religious and cultural practice that continues today.",
      "The routes pass through a world where Shinto and Buddhism interweave as naturally as morning mist, where each stone-paved climb was worn smooth by a millennium of sandaled feet.",
    ],
    faq: [
      { q: 'Which Kumano Kodo route should I walk first?', a: 'The Nakahechi (Middle Route) is the most historically significant and most-walked, taking 3–5 days from Tanabe to Kumano Hongu Taisha. The Kohechi (4 days) is more remote and challenging.' },
      { q: 'What is the Dual Pilgrim certification?', a: "Pilgrims who complete both the Camino de Santiago (at least 100km) and the Kumano Kodo (Nakahechi) are awarded the Dual Pilgrim certificate — the world's only two UNESCO-listed pilgrimage routes." },
      { q: 'When is the best time to walk Kumano Kodo?', a: 'Spring (April–May) and autumn (October–November) offer the best conditions: mild temperatures and beautiful seasonal scenery. Summer is hot and humid. Winter can be icy.' },
    ],
    ctaTitle: 'Walk the Kumano Kodo Offline',
    ctaDesc: '4 Kumano Kodo routes in Sacred Trails. Stage navigation in English and Japanese — no internet required.',
  },
  'ja': {
    title: '熊野古道 — 完全ガイド',
    subtitle: '4ルート · 紀伊半島 · UNESCO世界遺産の巡礼路',
    metaTitle: '熊野古道 完全ガイド 2026 — 中辺路・小辺路・大辺路・伊勢路',
    metaDesc: '熊野古道4ルート完全ガイド。中辺路・小辺路・大辺路・伊勢路。UNESCO世界遺産。最適な季節、準備、Sacred Trailsアプリ情報。',
    intro: [
      "熊野古道は、和歌山県紀伊半島の古代杉と檜の森を縫うように続く、日本で最も神聖な巡礼路ネットワークの一つです。千年以上にわたり、天皇・貴族・庶民が苔むす石畳の道を歩き、熊野三山——熊野本宮大社・熊野速玉大社・熊野那智大社——を参拝してきました。",
      "カミーノ・デ・サンティアゴと並び、熊野古道は世界で唯一UNESCO世界遺産として認定された2つの巡礼路の一つ。この地位は景観の美しさだけでなく、今なお続く生きた宗教・文化的実践の深さによって与えられました。",
      "神道と仏教が朝霧のように自然に絡み合う世界、千年の草鞋に磨かれた石畳、今も静かな祈りを誘う小さな王子社——それが熊野古道です。",
    ],
    faq: [
      { q: '最初に歩くならどのルート？', a: '最も歴史的に重要で最も歩かれているのが中辺路（田辺〜熊野本宮大社、3〜5日）。小辺路（4日）はより山深く、挑戦的です。' },
      { q: 'デュアル巡礼者認定とは？', a: 'カミーノ・デ・サンティアゴ（100km以上）と熊野古道（中辺路）の両方を完遂した巡礼者に与えられる認定。世界で唯一UNESCO登録された2つの巡礼路を制覇した証です。' },
      { q: '熊野古道を歩く最適な季節は？', a: '春（4〜5月）と秋（10〜11月）が最適。気候が穏やかで季節の風景が美しい。夏は高温多湿、冬は冷え込み一部区間が凍結することも。' },
    ],
    ctaTitle: '熊野古道をオフラインで歩く',
    ctaDesc: '熊野古道4ルート全てSacred Trailsに収録。日英両言語のステージナビゲーション、Wi-Fi不要。',
  },
  'zh-TW': {
    title: '熊野古道 — 完整攻略',
    subtitle: '4 條路線 · 紀伊半島 · UNESCO 世界遺產朝聖路',
    metaTitle: '熊野古道完整攻略 2026 — 中邊路・小邊路・大邊路・伊勢路',
    metaDesc: '熊野古道 4 條路線完整攻略。中邊路、小邊路、大邊路、伊勢路。UNESCO 世界遺產。最佳季節、準備、Sacred Trails App 資訊。',
    intro: [
      "熊野古道是日本最神聖的朝聖路線網之一，穿越和歌山縣紀伊半島的古老杉樹與檜木森林。千年以來，天皇、貴族、庶民都曾走過這些布滿青苔的石板路，前往熊野三山——熊野本宮大社、熊野速玉大社、熊野那智大社——參拜。",
      "熊野古道與西班牙的聖雅各之路並列，是全世界唯二被 UNESCO 列為世界遺產的朝聖路線。這個地位不僅來自美景，更源自至今仍活躍的宗教與文化實踐。",
      "神道與佛教在這裡如晨霧般自然交融，每一段石階都被千年草鞋踏得光滑，沿途的小王子社仍在靜靜邀人駐足祈禱。",
    ],
    faq: [
      { q: '第一次走該選哪條路線？', a: '最具歷史意義、最多人走的是中邊路（田邊到熊野本宮大社，3–5 天）。小邊路（4 天）更偏遠、更具挑戰。' },
      { q: 'Dual Pilgrim（雙重朝聖者）認證是什麼？', a: '同時完成聖雅各之路（至少 100 公里）和熊野古道（中邊路）的朝聖者，可獲得 Dual Pilgrim 認證——全世界僅有兩條 UNESCO 朝聖路線都走完的榮譽。' },
      { q: '走熊野古道的最佳季節？', a: '春季（4–5 月）和秋季（10–11 月）最佳：氣候宜人、季節景色優美。夏季濕熱，冬季寒冷且部分山區會結冰。' },
    ],
    ctaTitle: '離線走熊野古道',
    ctaDesc: 'Sacred Trails 收錄 4 條熊野古道路線。中日英多語言分段導航，無需網路。',
  },
  'es': {
    title: 'Kumano Kodo — Guía completa',
    subtitle: '4 rutas · Península de Kii, Japón · Peregrinación Patrimonio UNESCO',
    metaTitle: 'Guía del Kumano Kodo 2026: las antiguas rutas de peregrinación de Japón',
    metaDesc: 'Guía completa de las rutas de peregrinación del Kumano Kodo. 4 rutas por los bosques sagrados de la península de Kii. Patrimonio UNESCO.',
    intro: [
      "El Kumano Kodo es una de las redes de senderos de peregrinación más sagradas de Japón, serpenteando por antiguos bosques de cedros y cipreses de la península de Kii en Wakayama. Durante más de mil años, emperadores, nobles y gente común han caminado estos senderos cubiertos de musgo para venerar los tres Grandes Santuarios de Kumano.",
      "Junto con el Camino de Santiago, el Kumano Kodo es una de las dos únicas rutas de peregrinación reconocidas como Patrimonio de la Humanidad por la UNESCO — un estatus que refleja la profundidad de la práctica religiosa y cultural viva que continúa hoy.",
      "Las rutas atraviesan un mundo donde el shintoísmo y el budismo se entrelazan como la niebla matinal, donde cada escalón de piedra fue pulido por milenios de sandalias peregrinas.",
    ],
    faq: [
      { q: '¿Qué ruta del Kumano Kodo debo caminar primero?', a: 'La Nakahechi (Ruta Media) es la más históricamente significativa y caminada, de 3–5 días desde Tanabe hasta Kumano Hongu Taisha. La Kohechi (4 días) es más remota y desafiante.' },
      { q: '¿Qué es la certificación de Peregrino Dual?', a: "Los peregrinos que completan tanto el Camino de Santiago (al menos 100km) como el Kumano Kodo (Nakahechi) reciben el certificado de Peregrino Dual — las únicas dos rutas de peregrinación UNESCO del mundo." },
      { q: '¿Cuándo es la mejor época para caminar el Kumano Kodo?', a: 'Primavera (abril–mayo) y otoño (octubre–noviembre) ofrecen las mejores condiciones: temperaturas suaves y hermoso paisaje estacional. El verano es caluroso y húmedo. El invierno puede helar.' },
    ],
    ctaTitle: 'Camina el Kumano Kodo offline',
    ctaDesc: '4 rutas del Kumano Kodo en Sacred Trails. Navegación por etapas en inglés y japonés — sin internet.',
  },
}

const shikoku: Record<Locale, GuideContent> = {
  'en': {
    title: 'Shikoku 88 Temple Pilgrimage — Complete Guide',
    subtitle: '1,200km · 88 temples · Shikoku island, Japan · ~45 days on foot',
    metaTitle: 'Shikoku 88 Temple Pilgrimage — Complete Guide 2026',
    metaDesc: 'Complete guide to the Shikoku Henro: 1,200km circuit of 88 Buddhist temples. Distance, difficulty, cost, preparation, and what to expect.',
    intro: [
      "The Shikoku Henro (四国遍路) is an 1,200-kilometer circular pilgrimage visiting 88 Buddhist temples on Shikoku island, Japan. It follows the path of Kōbō Daishi (Kūkai, 774–835), the monk who founded the Shingon Buddhist sect after returning from Tang Dynasty China.",
      "Pilgrims traditionally wear white (symbolizing death and rebirth) and carry a staff representing Kōbō Daishi's presence. Walking the full circuit on foot takes approximately 45–60 days covering roughly 1,200km, averaging 25–35km per day.",
      "The Shikoku Henro is one of the few pilgrimages in the world where the act of walking itself is considered a form of spiritual training, and where hospitality (osettai) from local residents toward pilgrims remains a living tradition.",
    ],
    faq: [
      { q: 'How long does the Shikoku Henro take?', a: 'Walking takes approximately 45–60 days covering ~1,200km. Most walking pilgrims average 25–35km per day. The route can also be completed by bicycle (25–30 days), car, or bus (9–12 days).' },
      { q: 'What is the cost?', a: 'Budget approximately 400,000–500,000 yen ($2,700–$3,400 USD) for a walking henro including accommodation, food, temple fees, and gear. Staying at Zenkonyado (free pilgrim lodgings) can reduce costs significantly.' },
      { q: 'What is Osettai?', a: 'Osettai (お接待) is the tradition of giving gifts, food, or lodging to henro pilgrims. Locals believe that by supporting a pilgrim they share in the merit of the pilgrimage.' },
      { q: 'Do I need to be Buddhist?', a: 'No. The Shikoku Henro welcomes people of all backgrounds and beliefs. Many pilgrims walk for personal reflection or cultural experience rather than religious reasons.' },
    ],
    ctaTitle: 'Navigate the Shikoku Henro Offline',
    ctaDesc: 'Sacred Trails covers the full 88-temple circuit with offline stage navigation, temple info, and waypoints in 10 languages.',
  },
  'ja': {
    title: '四国八十八ヶ所遍路 — 完全ガイド',
    subtitle: '1,200km · 88寺院 · 四国 · 徒歩約45日',
    metaTitle: '四国遍路 完全ガイド 2026 — 1200km・88ヶ所霊場巡り',
    metaDesc: '四国遍路の完全ガイド：88ヶ所の仏教寺院を巡る1,200kmの巡礼。距離・難易度・費用・準備・心構え。Sacred Trailsアプリで10言語対応。',
    intro: [
      "四国遍路は、四国にある88ヶ所の仏教寺院を巡る約1,200kmの円環状巡礼路。弘法大師（空海、774〜835年）——唐から密教を持ち帰り真言宗を開いた僧——の足跡を辿ります。",
      "巡礼者は伝統的に白衣（死と再生の象徴）をまとい、金剛杖（弘法大師の化身とされる）を携えます。徒歩で一周すると約45〜60日、1日25〜35km歩く計算です。",
      "四国遍路は、歩くこと自体が修行とみなされる世界でも稀有な巡礼路であり、地元住民から巡礼者への「お接待」の文化が今も息づいています。",
    ],
    faq: [
      { q: '四国遍路にはどのくらいかかる？', a: '徒歩なら約45〜60日で1,200km。1日25〜35kmが目安。自転車（25〜30日）、車、貸切バス（9〜12日）でも可能です。' },
      { q: '費用はどのくらい？', a: '歩き遍路で約40〜50万円（宿泊・食事・納経料・装備含む）。善根宿（無料の巡礼宿）を利用すると大幅に節約可能。' },
      { q: 'お接待とは？', a: 'お接待は、地元住民が巡礼者に贈り物・食事・宿を提供する伝統。巡礼者を支えることで巡礼の功徳を共有できると信じられています。' },
      { q: '仏教徒でなくても歩ける？', a: 'もちろん。四国遍路はあらゆる背景・信条の人々を受け入れます。多くの巡礼者は自己省察や文化体験のために歩いています。' },
    ],
    ctaTitle: '四国遍路をオフラインで歩く',
    ctaDesc: 'Sacred Trailsは88ヶ所全行程をカバー、10言語対応のオフラインステージナビ・寺院情報・ウェイポイント。',
  },
  'zh-TW': {
    title: '四國八十八所遍路 — 完整攻略',
    subtitle: '1,200 公里 · 88 座寺院 · 日本四國 · 徒步約 45 天',
    metaTitle: '四國遍路完整攻略 2026 — 1200 公里 88 靈場巡禮',
    metaDesc: '四國遍路完整攻略：走遍 88 座佛教寺院的 1,200 公里朝聖。距離、難度、費用、準備、心得。Sacred Trails App 支援 10 國語言。',
    intro: [
      "四國遍路是日本四國島上環繞 88 座佛教寺院、總長約 1,200 公里的環狀朝聖路。這條路追隨弘法大師（空海，774–835 年）的足跡——這位僧人從唐朝帶回密教，開創了真言宗。",
      "朝聖者（遍路者）傳統上身穿白衣（象徵死亡與重生），手持金剛杖（代表弘法大師的化身同行）。徒步完成一圈約需 45–60 天，每日約走 25–35 公里。",
      "四國遍路是世界上少數將「行走」本身視為修行的朝聖路，當地居民對遍路者的「お接待（款待）」文化至今仍是活傳統。",
    ],
    faq: [
      { q: '走四國遍路需要多久？', a: '徒步約 45–60 天，總長 1,200 公里，平均一天 25–35 公里。也可以騎自行車（25–30 天）、開車或搭包車（9–12 天）完成。' },
      { q: '費用大約多少？', a: '徒步遍路預算約 40–50 萬日圓（含住宿、餐食、納經料、裝備）。住善根宿（免費朝聖住宿）可大幅節省。' },
      { q: 'お接待（款待）是什麼？', a: 'お接待是當地居民餽贈食物、飲水、住宿給遍路者的傳統。居民相信支援朝聖者可共享朝聖功德。' },
      { q: '一定要是佛教徒嗎？', a: '不用。四國遍路歡迎任何背景與信仰的人。許多朝聖者是為了自我沉澱或文化體驗而走。' },
    ],
    ctaTitle: '離線走四國遍路',
    ctaDesc: 'Sacred Trails 完整收錄 88 所遍路，支援 10 國語言離線分段導航、寺院資訊與路徑點。',
  },
  'es': {
    title: 'Peregrinación de los 88 templos de Shikoku — Guía completa',
    subtitle: '1.200km · 88 templos · Isla de Shikoku, Japón · ~45 días a pie',
    metaTitle: 'Peregrinación Shikoku 88 Templos — Guía completa 2026',
    metaDesc: 'Guía completa del Shikoku Henro: circuito de 1.200km por 88 templos budistas. Distancia, dificultad, coste, preparación y qué esperar.',
    intro: [
      "El Shikoku Henro (四国遍路) es una peregrinación circular de 1.200 kilómetros que visita 88 templos budistas en la isla de Shikoku, Japón. Sigue el camino de Kōbō Daishi (Kūkai, 774–835), el monje que fundó la secta budista Shingon tras regresar de la China Tang.",
      "Los peregrinos visten tradicionalmente de blanco (símbolo de muerte y renacimiento) y llevan un bastón que representa la presencia de Kōbō Daishi. Caminar el circuito completo lleva aproximadamente 45–60 días, recorriendo unos 1.200km a un ritmo de 25–35km diarios.",
      "El Shikoku Henro es una de las pocas peregrinaciones del mundo donde el acto de caminar se considera en sí mismo una forma de entrenamiento espiritual, y donde la hospitalidad (osettai) de los residentes locales hacia los peregrinos sigue siendo una tradición viva.",
    ],
    faq: [
      { q: '¿Cuánto dura el Shikoku Henro?', a: 'A pie lleva aproximadamente 45–60 días cubriendo ~1.200km, con un promedio de 25–35km diarios. También se puede completar en bicicleta (25–30 días), coche o autobús (9–12 días).' },
      { q: '¿Cuál es el coste?', a: 'Presupuesta aproximadamente 400.000–500.000 yenes ($2.700–$3.400 USD) para un henro a pie incluyendo alojamiento, comida, tarifas de templo y equipo. Quedarse en Zenkonyado (alojamientos gratuitos) reduce costes considerablemente.' },
      { q: '¿Qué es Osettai?', a: 'Osettai (お接待) es la tradición de ofrecer regalos, comida o alojamiento a los peregrinos henro. Los locales creen que apoyando a un peregrino comparten el mérito de la peregrinación.' },
      { q: '¿Tengo que ser budista?', a: 'No. El Shikoku Henro acoge a personas de todos los orígenes y creencias. Muchos peregrinos caminan por reflexión personal o experiencia cultural, no por razones estrictamente religiosas.' },
    ],
    ctaTitle: 'Camina el Shikoku Henro offline',
    ctaDesc: 'Sacred Trails cubre el circuito completo de 88 templos con navegación offline por etapas, información de templos y waypoints en 10 idiomas.',
  },
}

export const guideContent: Record<GuideSlug, Record<Locale, GuideContent>> = {
  'camino-de-santiago': camino,
  'kumano-kodo': kumano,
  'shikoku-henro': shikoku,
}

export function getGuideContent(slug: GuideSlug, locale: Locale): GuideContent {
  return guideContent[slug][locale] ?? guideContent[slug]['en']
}
