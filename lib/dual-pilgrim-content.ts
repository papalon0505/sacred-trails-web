import type { Locale } from '@/lib/i18n'

export interface DualPilgrimContent {
  metaTitle: string
  metaDesc: string
  title: string
  subtitle: string
  intro: string[]
  caminoHeading: string
  caminoRules: string[]
  kumanoHeading: string
  kumanoRoutesHeading: string
  kumanoRoutes: { name: string; distance: string; note: string }[]
  kumanoShrinesHeading: string
  kumanoShrines: { name: string; note: string }[]
  registerHeading: string
  registerSteps: string[]
  registerLocations: { name: string; address: string }[]
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
  disclaimer: string
}

const en: DualPilgrimContent = {
  metaTitle: 'Dual Pilgrim — Qualifying Routes, Rules & How to Register',
  metaDesc: 'Complete guide to the Dual Pilgrim programme: walk both the Camino de Santiago and Kumano Kodo to earn the Dual Pilgrim certificate. Qualifying routes, minimum distances, and registration steps.',
  title: 'Dual Pilgrim — The World\'s Only UNESCO Pilgrim Credential',
  subtitle: 'Complete both the Camino de Santiago and Kumano Kodo to earn Dual Pilgrim status.',
  intro: [
    "The Dual Pilgrim programme (Twin Pilgrim / デュアル巡礼者) recognizes pilgrims who have walked both of the world's UNESCO World Heritage pilgrimage routes: the Camino de Santiago in Spain and the Kumano Kodo in Japan. It is a joint initiative of the Tanabe City Kumano Tourism Bureau and the Archdiocese of Santiago de Compostela's Pilgrim Reception Office, and remains the only cross-continental pilgrim credential of its kind.",
    "Becoming a Dual Pilgrim is not about distance — it is about walking both traditions, visiting both cultural worlds, and understanding what humans share across a thousand years of pilgrimage practice. The credential is free. Only those who have completed both routes according to the rules below qualify.",
  ],
  caminoHeading: 'Camino de Santiago — Qualifying Conditions',
  caminoRules: [
    'Walk at least the final 100 km to Santiago de Compostela on any official Camino route (or cycle the final 200 km).',
    'Carry a Credencial del Peregrino (pilgrim passport) and collect at least two stamps per day along the way.',
    'Receive the Compostela certificate from the Pilgrim\'s Reception Office in Santiago.',
  ],
  kumanoHeading: 'Kumano Kodo — Qualifying Conditions',
  kumanoRoutesHeading: 'Qualifying walking sections',
  kumanoRoutes: [
    { name: 'Nakahechi: Takijiri-oji → Kumano Hongu Taisha', distance: '~38 km · 2 days', note: 'The classic imperial pilgrimage route. The canonical choice.' },
    { name: 'Nakahechi: Hosshinmon-oji → Kumano Hongu Taisha', distance: '~6.9 km · 2–3 hours', note: 'The short qualifying option, popular with those short on time.' },
    { name: 'Kohechi: Koyasan → Kumano Hongu Taisha', distance: '~70 km · 4 days', note: 'Mountain route connecting the two great Buddhist centres.' },
    { name: 'Iseji: Ise Jingu → Kumano Sanzan', distance: '~170 km · multi-day', note: 'East coast route from the Ise Grand Shrine.' },
    { name: 'Ohechi: Tanabe → Nachi (coastal)', distance: '~92 km · multi-day', note: 'Coastal southern route along the Kii Peninsula.' },
    { name: 'Daimonzaka → Kumano Nachi Taisha', distance: '~2.5 km · 1 hour', note: 'Combined with Hosshinmon-oji + Hayatama visit, qualifies.' },
  ],
  kumanoShrinesHeading: 'Visit all three Grand Shrines (Kumano Sanzan)',
  kumanoShrines: [
    { name: 'Kumano Hongu Taisha', note: 'Chief shrine in the mountains, terminus of most Nakahechi walks.' },
    { name: 'Kumano Hayatama Taisha', note: 'Coastal shrine at Shingu. Accessible by boat down the Kumano River from Hongu (the traditional sanctified route).' },
    { name: 'Kumano Nachi Taisha', note: 'Shrine beside Nachi Falls. Reached via Daimonzaka stone-paved path.' },
  ],
  registerHeading: 'How to Register as a Dual Pilgrim',
  registerSteps: [
    'Bring your completed Credencial del Peregrino (with Compostela stamp) from the Camino.',
    'Bring your Kumano stamp book (shuincho) or official Kumano Kodo dual-pilgrim stamp sheet showing all three shrines.',
    'Visit one of the registration offices listed below in person.',
    'Receive your Dual Pilgrim pin badge and recognition certificate — free of charge.',
    'Your name is added to the Dual Pilgrim wall of recognition and international registry.',
  ],
  registerLocations: [
    { name: 'Tanabe City Kumano Tourism Bureau', address: 'Beside Kii-Tanabe Station, Wakayama Prefecture — see tb-kumano.jp for directions.' },
    { name: 'Kumano Hongu Heritage Center', address: 'Adjacent to Kumano Hongu Taisha, Hongu-cho, Tanabe — see map on tb-kumano.jp.' },
  ],
  faq: [
    { q: 'Do I have to walk both routes in the same trip?', a: 'No. There is no time limit. Many pilgrims complete the Camino years before or after Kumano. Keep your Compostela and Kumano stamps safe — they are valid indefinitely.' },
    { q: 'Can I do Kumano first and Camino second?', a: 'Yes. The order does not matter. You can register at either side\'s office once both are complete.' },
    { q: 'Is there a cost?', a: 'The Dual Pilgrim credential is free. You pay only for your own pilgrim passport, Kumano stamp book, and Compostela (around €3).' },
    { q: 'Do I need to walk the Nakahechi specifically?', a: 'The Nakahechi from Takijiri-oji is the canonical route, but the Hosshinmon-oji short section, the Kohechi, Iseji, and Ohechi all qualify. You must also visit all three Grand Shrines.' },
    { q: 'Can I cycle Kumano Kodo?', a: 'No. The Kumano qualifying sections must be walked. Only the Camino portion allows cycling (with the 200 km minimum).' },
  ],
  ctaTitle: 'Plan Your Dual Pilgrim Journey Offline',
  ctaDesc: 'Sacred Trails covers every Camino route and all 4 Kumano Kodo routes — all offline, in 10 languages.',
  disclaimer: 'Sacred Trails is an independent travel app and is not affiliated with, endorsed by, or a partner of the Dual Pilgrim programme, the Tanabe City Kumano Tourism Bureau, or the Archdiocese of Santiago de Compostela. Dual Pilgrim registration must be completed in person at the offices listed above. Information on this page is provided for general reference — always verify requirements with the official bodies before travelling.',
}

const ja: DualPilgrimContent = {
  metaTitle: 'デュアル巡礼者（Dual Pilgrim）完全ガイド — 資格・対象ルート・登録方法',
  metaDesc: 'カミーノ・デ・サンティアゴと熊野古道の両方を歩いた巡礼者に与えられるデュアル巡礼者認定。対象ルート、最低距離、申請方法を完全解説。',
  title: 'デュアル巡礼者（Dual Pilgrim）— 世界で唯一の二重巡礼認定',
  subtitle: 'カミーノ・デ・サンティアゴと熊野古道の両方を踏破した者だけに贈られる称号。',
  intro: [
    'デュアル巡礼者（Dual Pilgrim）プログラムは、世界で唯一UNESCO世界遺産に認定された2つの巡礼路——スペインのカミーノ・デ・サンティアゴと日本の熊野古道——の両方を歩いた巡礼者を讃える国際認定制度です。田辺市熊野ツーリズムビューローとサンティアゴ・デ・コンポステーラ大司教区巡礼事務所（Oficina del Peregrino）の共同事業として運営されており、現在も世界で唯一の「大陸横断型」巡礼者称号です。',
    'デュアル巡礼者になるのは距離の問題ではなく、東西二つの巡礼文化を実際に足で歩き、千年の巡礼実践が人類に何を語りかけるのかを体感する旅です。認定費用は無料。ただし下記の条件を満たした者のみが対象となります。',
  ],
  caminoHeading: 'カミーノ・デ・サンティアゴの資格条件',
  caminoRules: [
    'サンティアゴ・デ・コンポステーラに至るいずれかの公式ルートを、最低100km（自転車は200km）歩くこと。',
    '巡礼パスポート（Credencial del Peregrino）を携行し、道中1日最低2つのスタンプを集めること。',
    'サンティアゴの巡礼事務所（Oficina del Peregrino）でコンポステーラ認定証を受領すること。',
  ],
  kumanoHeading: '熊野古道の資格条件',
  kumanoRoutesHeading: '対象となる徒歩区間',
  kumanoRoutes: [
    { name: '中辺路：滝尻王子 → 熊野本宮大社', distance: '約38km・2日', note: '皇族が歩いた古の王道。最も正統な選択。' },
    { name: '中辺路：発心門王子 → 熊野本宮大社', distance: '約6.9km・2〜3時間', note: '最短の資格取得区間。時間が限られる方に人気。' },
    { name: '小辺路：高野山 → 熊野本宮大社', distance: '約70km・4日', note: '真言宗の聖地・高野山と熊野を結ぶ山岳路。' },
    { name: '伊勢路：伊勢神宮 → 熊野三山', distance: '約170km・複数日', note: '伊勢神宮から熊野に至る東海岸ルート。' },
    { name: '大辺路：田辺 → 那智（海岸）', distance: '約92km・複数日', note: '紀伊半島南部の海岸沿いルート。' },
    { name: '大門坂 → 熊野那智大社', distance: '約2.5km・1時間', note: '発心門王子＋速玉大社参拝と組み合わせで資格取得可。' },
  ],
  kumanoShrinesHeading: '熊野三山すべてを参拝',
  kumanoShrines: [
    { name: '熊野本宮大社', note: '中辺路の終点。山間の総本宮。' },
    { name: '熊野速玉大社', note: '新宮市の海辺の大社。本宮から熊野川を舟で下る伝統ルートでも参拝可能。' },
    { name: '熊野那智大社', note: '那智の滝そばの大社。大門坂の石畳を登って参拝。' },
  ],
  registerHeading: 'デュアル巡礼者の登録方法',
  registerSteps: [
    'カミーノで取得した巡礼パスポート（コンポステーラのスタンプ入り）を持参。',
    '熊野の朱印帳、または熊野古道デュアル巡礼スタンプシート（三山すべてのスタンプ入り）を持参。',
    '下記の登録窓口のいずれかに直接訪問。',
    'デュアル巡礼者ピンバッジと認定証を無料で受領。',
    '名前はデュアル巡礼者の記録壁および国際レジストリに登録されます。',
  ],
  registerLocations: [
    { name: '田辺市熊野ツーリズムビューロー', address: '和歌山県 紀伊田辺駅前 — 詳細は tb-kumano.jp を参照。' },
    { name: '熊野本宮館', address: '和歌山県田辺市本宮町・熊野本宮大社隣接 — 案内図は tb-kumano.jp を参照。' },
  ],
  faq: [
    { q: '両方を同じ旅で歩く必要がある？', a: 'いいえ。期限はありません。カミーノを何年も前または後に歩いた方も多くいます。コンポステーラと熊野のスタンプは無期限有効です。' },
    { q: '熊野が先でカミーノが後でも大丈夫？', a: 'はい、順序は問いません。両方完了した時点で、どちらの事務所でも登録可能です。' },
    { q: '費用はかかる？', a: 'デュアル巡礼者認定は無料。自分の巡礼パスポート、熊野朱印帳、コンポステーラ発行料（約3ユーロ）のみ負担。' },
    { q: '必ず中辺路を歩かなければいけない？', a: '滝尻王子からの中辺路が王道ですが、発心門王子からの短区間、小辺路、伊勢路、大辺路も対象です。熊野三山全てへの参拝は必須。' },
    { q: '熊野古道を自転車で走ってもいい？', a: 'できません。熊野の対象区間は徒歩のみ。自転車が許されるのはカミーノ側のみ（最低200km）。' },
  ],
  ctaTitle: 'デュアル巡礼の旅をオフラインで計画',
  ctaDesc: 'Sacred Trailsはカミーノ全ルートと熊野古道4ルート全てに対応。10言語、完全オフライン。',
  disclaimer: 'Sacred Trailsは独立した旅行アプリであり、デュアル巡礼者プログラム・田辺市熊野ツーリズムビューロー・サンティアゴ・デ・コンポステーラ大司教区とは一切の提携・後援関係にありません。デュアル巡礼者認定の申請は上記の窓口で直接行う必要があります。本ページの情報は一般参考用です。渡航前に必ず公式情報で最新の要件をご確認ください。',
}

const zhTW: DualPilgrimContent = {
  metaTitle: '雙朝聖者（Dual Pilgrim）完整攻略 — 資格、路線、申請方式',
  metaDesc: '走完聖雅各之路和熊野古道兩條 UNESCO 世界遺產朝聖路，就能取得雙朝聖者認證。對象路線、最低距離、登記地點完整解說。',
  title: '雙朝聖者（Dual Pilgrim）— 全世界唯一的雙重朝聖認證',
  subtitle: '完成聖雅各之路與熊野古道才能獲得的跨洲朝聖榮譽。',
  intro: [
    '雙朝聖者（Dual Pilgrim）認證表彰走完世界上唯二被 UNESCO 列為世界遺產的朝聖路線——西班牙的聖雅各之路（Camino de Santiago）和日本的熊野古道——的朝聖者。本計畫由田邊市熊野觀光局與聖地亞哥德孔波斯特拉總主教區朝聖者事務所（Oficina del Peregrino）共同推動，至今仍是全球唯一的跨大陸朝聖認證。',
    '成為雙朝聖者不是比距離，而是親自走過東西方兩種朝聖文化，體驗人類千年朝聖實踐所共通的精神。認證完全免費，但必須符合以下所有條件。',
  ],
  caminoHeading: '聖雅各之路資格條件',
  caminoRules: [
    '沿任一條官方 Camino 路線走到聖地亞哥德孔波斯特拉，至少徒步最後 100 公里（或騎自行車最後 200 公里）。',
    '攜帶朝聖者護照（Credencial del Peregrino），沿途每天至少蓋 2 個章。',
    '在聖地亞哥的 Oficina del Peregrino（朝聖者事務所）取得 Compostela 證書。',
  ],
  kumanoHeading: '熊野古道資格條件',
  kumanoRoutesHeading: '對象徒步路線',
  kumanoRoutes: [
    { name: '中邊路：瀧尻王子 → 熊野本宮大社', distance: '約 38 公里・2 天', note: '古代皇族的朝聖王道，最正統的選擇。' },
    { name: '中邊路：發心門王子 → 熊野本宮大社', distance: '約 6.9 公里・2–3 小時', note: '最短的資格路段，時間有限者的熱門選擇。' },
    { name: '小邊路：高野山 → 熊野本宮大社', distance: '約 70 公里・4 天', note: '連接真言宗聖地高野山與熊野的山岳路。' },
    { name: '伊勢路：伊勢神宮 → 熊野三山', distance: '約 170 公里・多日', note: '從伊勢神宮到熊野的東海岸路線。' },
    { name: '大邊路：田邊 → 那智（海岸）', distance: '約 92 公里・多日', note: '紀伊半島南部沿海路線。' },
    { name: '大門坂 → 熊野那智大社', distance: '約 2.5 公里・1 小時', note: '搭配發心門王子 + 速玉大社參拜即可取得資格。' },
  ],
  kumanoShrinesHeading: '熊野三山全部參拜',
  kumanoShrines: [
    { name: '熊野本宮大社', note: '中邊路的終點，山間的總本宮。' },
    { name: '熊野速玉大社', note: '新宮市海邊大社。可從本宮乘船沿熊野川而下（傳統淨化路線）。' },
    { name: '熊野那智大社', note: '那智瀑布旁大社，由大門坂石板路登上參拜。' },
  ],
  registerHeading: '雙朝聖者登記方式',
  registerSteps: [
    '攜帶完成 Camino 的朝聖者護照（含 Compostela 印章）。',
    '攜帶熊野朱印帳或熊野古道雙朝聖者專用印章表（含熊野三山全部印章）。',
    '親自前往下列登記處之一。',
    '現場免費領取雙朝聖者徽章與認證書。',
    '姓名會登記在雙朝聖者紀念牆和國際名冊上。',
  ],
  registerLocations: [
    { name: '田邊市熊野觀光局', address: '和歌山縣 紀伊田邊車站旁（詳細地址請見 tb-kumano.jp）。' },
    { name: '熊野本宮館', address: '和歌山縣田邊市本宮町（熊野本宮大社旁，地圖請見 tb-kumano.jp）。' },
  ],
  faq: [
    { q: '兩條路線要同一趟旅行內走完嗎？', a: '不用。沒有時間限制。很多朝聖者 Camino 和熊野之間相隔好幾年。Compostela 和熊野印章都永久有效。' },
    { q: '可以先走熊野再走 Camino 嗎？', a: '可以，順序不拘。兩邊都完成後，任一登記處都可申請。' },
    { q: '要收費嗎？', a: '雙朝聖者認證完全免費。只要負擔自己的朝聖者護照、熊野朱印帳、Compostela 發行費（約 3 歐元）。' },
    { q: '一定要走中邊路嗎？', a: '瀧尻王子出發的中邊路最正統，但發心門王子短程、小邊路、伊勢路、大邊路都符合資格。熊野三山全部參拜是必要的。' },
    { q: '可以騎自行車走熊野古道嗎？', a: '不行。熊野對象區間只接受徒步。自行車僅限 Camino（最低 200 公里）。' },
  ],
  ctaTitle: '離線規劃你的雙朝聖之旅',
  ctaDesc: 'Sacred Trails 收錄所有 Camino 路線和 4 條熊野古道路線，10 國語言、完全離線。',
  disclaimer: 'Sacred Trails 是獨立開發的旅行應用程式，與雙朝聖者（Dual Pilgrim）計畫、田邊市熊野觀光局、聖地亞哥德孔波斯特拉總主教區均無合作、贊助或官方關係。雙朝聖者認證須親自前往上方所列窗口辦理。本頁資訊僅供一般參考，行前請務必以官方公告為準確認最新規定。',
}

const es: DualPilgrimContent = {
  metaTitle: 'Dual Pilgrim — Guía completa: rutas, requisitos y cómo registrarse',
  metaDesc: 'Guía completa del programa Dual Pilgrim: camina tanto el Camino de Santiago como el Kumano Kodo para obtener la credencial Dual Pilgrim. Rutas válidas, distancias mínimas y pasos de registro.',
  title: 'Dual Pilgrim — La única credencial peregrina UNESCO doble del mundo',
  subtitle: 'Completa tanto el Camino de Santiago como el Kumano Kodo para ser Dual Pilgrim.',
  intro: [
    "El programa Dual Pilgrim reconoce a los peregrinos que han caminado las dos rutas de peregrinación declaradas Patrimonio de la Humanidad por la UNESCO: el Camino de Santiago en España y el Kumano Kodo en Japón. Es una iniciativa conjunta de la Oficina de Turismo de Kumano (Tanabe) y la Oficina de Acogida al Peregrino de la Archidiócesis de Santiago de Compostela, y sigue siendo la única credencial peregrina intercontinental del mundo.",
    "Ser Dual Pilgrim no va de distancia — va de caminar ambas tradiciones, visitar ambos mundos culturales y comprender lo que los seres humanos comparten tras mil años de práctica peregrina. La credencial es gratuita. Solo quienes completan ambas rutas según las reglas siguientes califican.",
  ],
  caminoHeading: 'Camino de Santiago — Condiciones',
  caminoRules: [
    'Caminar al menos los últimos 100 km hasta Santiago de Compostela por cualquier ruta oficial del Camino (o pedalear los últimos 200 km).',
    'Llevar la Credencial del Peregrino y recoger al menos dos sellos diarios durante el camino.',
    'Obtener la Compostela en la Oficina del Peregrino de Santiago.',
  ],
  kumanoHeading: 'Kumano Kodo — Condiciones',
  kumanoRoutesHeading: 'Tramos caminables que califican',
  kumanoRoutes: [
    { name: 'Nakahechi: Takijiri-oji → Kumano Hongu Taisha', distance: '~38 km · 2 días', note: 'La ruta imperial clásica. La elección canónica.' },
    { name: 'Nakahechi: Hosshinmon-oji → Kumano Hongu Taisha', distance: '~6,9 km · 2–3 horas', note: 'La opción corta, popular si tienes poco tiempo.' },
    { name: 'Kohechi: Koyasan → Kumano Hongu Taisha', distance: '~70 km · 4 días', note: 'Ruta de montaña que conecta los dos grandes centros budistas.' },
    { name: 'Iseji: Ise Jingu → Kumano Sanzan', distance: '~170 km · varios días', note: 'Ruta de la costa este desde el Gran Santuario de Ise.' },
    { name: 'Ohechi: Tanabe → Nachi (costa)', distance: '~92 km · varios días', note: 'Ruta costera sur por la península de Kii.' },
    { name: 'Daimonzaka → Kumano Nachi Taisha', distance: '~2,5 km · 1 hora', note: 'Combinado con Hosshinmon-oji + visita a Hayatama, califica.' },
  ],
  kumanoShrinesHeading: 'Visita los tres Grandes Santuarios (Kumano Sanzan)',
  kumanoShrines: [
    { name: 'Kumano Hongu Taisha', note: 'Santuario principal en las montañas, final de la mayoría de caminatas por Nakahechi.' },
    { name: 'Kumano Hayatama Taisha', note: 'Santuario costero en Shingu. Accesible en barco por el río Kumano desde Hongu (ruta sagrada tradicional).' },
    { name: 'Kumano Nachi Taisha', note: 'Santuario junto a las cataratas de Nachi. Se llega por el sendero empedrado de Daimonzaka.' },
  ],
  registerHeading: 'Cómo registrarse como Dual Pilgrim',
  registerSteps: [
    'Trae tu Credencial del Peregrino completa (con sello de la Compostela) del Camino.',
    'Trae tu shuincho (libro de sellos) de Kumano o la hoja oficial Dual Pilgrim con sellos de los tres santuarios.',
    'Acude en persona a una de las oficinas de registro indicadas abajo.',
    'Recibe tu chapa y certificado Dual Pilgrim — gratis.',
    'Tu nombre se añade al muro Dual Pilgrim y al registro internacional.',
  ],
  registerLocations: [
    { name: 'Oficina de Turismo de Kumano, Tanabe', address: 'Junto a la estación de Kii-Tanabe, prefectura de Wakayama — ver indicaciones en tb-kumano.jp.' },
    { name: 'Centro Patrimonial de Kumano Hongu', address: 'Junto a Kumano Hongu Taisha, Hongu-cho, Tanabe — plano en tb-kumano.jp.' },
  ],
  faq: [
    { q: '¿Tengo que caminar ambas rutas en el mismo viaje?', a: 'No. No hay límite de tiempo. Muchos peregrinos completan el Camino años antes o después del Kumano. Guarda bien tu Compostela y los sellos de Kumano — valen indefinidamente.' },
    { q: '¿Puedo hacer Kumano primero y el Camino después?', a: 'Sí. El orden no importa. Puedes registrarte en cualquiera de las oficinas una vez completados ambos.' },
    { q: '¿Tiene coste?', a: 'La credencial Dual Pilgrim es gratis. Solo pagas tu propia credencial del peregrino, el libro de sellos de Kumano y la Compostela (unos 3€).' },
    { q: '¿Debo caminar obligatoriamente el Nakahechi?', a: 'El Nakahechi desde Takijiri-oji es la ruta canónica, pero el tramo corto desde Hosshinmon-oji, el Kohechi, el Iseji y el Ohechi también califican. Visitar los tres Grandes Santuarios es obligatorio.' },
    { q: '¿Puedo pedalear el Kumano Kodo?', a: 'No. Los tramos calificantes del Kumano deben caminarse. Solo el tramo del Camino admite bicicleta (con el mínimo de 200 km).' },
  ],
  ctaTitle: 'Planifica tu viaje Dual Pilgrim offline',
  ctaDesc: 'Sacred Trails cubre todas las rutas del Camino y las 4 rutas del Kumano Kodo — offline y en 10 idiomas.',
  disclaimer: 'Sacred Trails es una aplicación de viajes independiente y no está afiliada, respaldada ni es socia del programa Dual Pilgrim, la Oficina de Turismo de Kumano (Tanabe) ni la Archidiócesis de Santiago de Compostela. El registro como Dual Pilgrim debe completarse en persona en las oficinas indicadas arriba. La información de esta página se ofrece a título general — verifica siempre los requisitos con los organismos oficiales antes de viajar.',
}

export const dualPilgrimContent: Record<Locale, DualPilgrimContent> = { en, ja, 'zh-TW': zhTW, es }

export function getDualPilgrimContent(locale: Locale): DualPilgrimContent {
  return dualPilgrimContent[locale] ?? en
}
