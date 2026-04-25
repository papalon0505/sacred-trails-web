export interface KumanoSection {
  id: string
  name: Record<string, string>
  distanceKm: number
  days: number
  difficultyLabel: string
  keywords: string[]
  tagline: Record<string, string>
  description: Record<string, string>
  highlights: Record<string, string[]>
  difficulty: number // 1-5
  startEnd: { start: Record<string, string>; end: Record<string, string> }
}

export const kumanoSections: KumanoSection[] = [
  {
    id: "nakahechi",
    name: {
      en: "Nakahechi (Middle Route)",
      ja: "中辺路",
      zhTW: "中邊路",
      es: "Nakahechi (Ruta Central)",
    },
    distanceKm: 70,
    days: 4,
    difficultyLabel: "moderate",
    keywords: ["imperial", "cedar", "popular"],
    tagline: {
      en: "The emperor's road through ancient cedar and mist",
      ja: "古代の杉と霧の中を行く帝の道",
      zhTW: "穿越古杉與薄霧的天皇之路",
      es: "El camino del emperador a través de cedros milenarios y niebla",
    },
    description: {
      en: "The imperial route and most-walked path in the Kumano Kodō network. From Takijiri-oji to Kumano Hongu Taisha, this 4-day route follows the path once trodden by emperors and aristocrats making their sacred processions. Ancient cedar forests, stone-paved mountain paths, and a series of oji (minor shrines) mark the way.",
      ja: "熊野古道の中で最も多く歩かれる帝の道。滝尻王子から熊野本宮大社まで、この4日間のルートは、かつて天皇や貴族が神聖な行列を行った道をたどる。古代の杉の森、石畳の山道、そして連なる王子（小さな社）が道標となる。",
      zhTW: "熊野古道網絡中最受歡迎的帝王之路。從瀧尻王子到熊野本宮大社，這條4天路線沿著天皇與貴族曾舉行神聖行列的道路而行。古老杉木林、石板鋪就的山道，以及一連串的王子（小祠堂）標誌著前進的方向。",
      es: "La ruta imperial y el sendero más transitado de la red Kumano Kodō. Desde Takijiri-oji hasta Kumano Hongu Taisha, este camino de 4 días sigue la senda que pisaron emperadores y aristócratas en sus procesiones sagradas. Bosques de cedros milenarios, caminos de montaña empedrados y una serie de oji (santuarios menores) marcan el trayecto.",
    },
    highlights: {
      en: [
        "Takijiri-oji gateway — the ceremonial entrance to the sacred mountains",
        "Dainichi-goe pass — cloud-forest trail at the ridge, ancient moss on stone",
        "Kumano Hongu Taisha — rebuilt after 1889 floods, the spiritual heart of the Kumano trinity",
      ],
      ja: [
        "滝尻王子——神聖な山々への儀礼的な入り口",
        "大日越——尾根の雲霧林の道、石の上に積もる古い苔",
        "熊野本宮大社——1889年の洪水後に再建、熊野三社の精神的な中心",
      ],
      zhTW: [
        "瀧尻王子——通往神聖山脈的儀式性入口",
        "大日越——山脊上的雲霧林山道，石頭上佈滿古老苔蘚",
        "熊野本宮大社——1889年洪水後重建，熊野三社的精神核心",
      ],
      es: [
        "Puerta de Takijiri-oji — la entrada ceremonial a las montañas sagradas",
        "Paso Dainichi-goe — sendero de bosque nuboso en la cresta, musgo antiguo sobre piedra",
        "Kumano Hongu Taisha — reconstruido tras las inundaciones de 1889, corazón espiritual de la trinidad Kumano",
      ],
    },
    difficulty: 3,
    startEnd: {
      start: { en: "Takijiri-oji", ja: "滝尻王子", zhTW: "瀧尻王子", es: "Takijiri-oji" },
      end: { en: "Kumano Hongu Taisha", ja: "熊野本宮大社", zhTW: "熊野本宮大社", es: "Kumano Hongu Taisha" },
    },
  },
  {
    id: "kohechi",
    name: {
      en: "Kohechi (Small Route)",
      ja: "小辺路",
      zhTW: "小邊路",
      es: "Kohechi (Ruta Pequeña)",
    },
    distanceKm: 70,
    days: 4,
    difficultyLabel: "very_challenging",
    keywords: ["mountain", "solitude", "Koyasan"],
    tagline: {
      en: "Between two sacred worlds, in a silence that listens",
      ja: "二つの聖なる世界の間、聴き入る静寂の中で",
      zhTW: "兩個神聖世界之間，在傾聽的寂靜中",
      es: "Entre dos mundos sagrados, en un silencio que escucha",
    },
    description: {
      en: "The most demanding route in the Kumano Kodō system, connecting Kōyasan — the esoteric Buddhist mountain complex — directly to Kumano. Three passes exceed 1,000m elevation. This route was historically walked by monks as a deep spiritual austerity, and today offers the deepest solitude of any Kumano path. Not for beginners.",
      ja: "熊野古道の中で最も過酷なルートで、密教の山岳複合体である高野山と熊野を直接結ぶ。標高1,000mを超える峠を三つ越える。このルートは歴史的に深い精神的苦行として僧侶たちが歩いたもので、今日でも熊野の道の中で最も深い孤独を体験できる。初心者向けではない。",
      zhTW: "熊野古道系統中最艱難的路線，直接連接密教山岳建築群高野山與熊野。三處山口超過海拔1,000公尺。這條路線歷史上由僧侶作為深度精神苦行而行走，今日仍提供所有熊野路線中最深的孤獨體驗。不適合初學者。",
      es: "La ruta más exigente del sistema Kumano Kodō, que conecta Kōyasan — el complejo budista esotérico de montaña — directamente con Kumano. Tres pasos superan los 1.000 m de altitud. Este recorrido fue caminado históricamente por monjes como austeridad espiritual profunda, y hoy ofrece la soledad más profunda de cualquier sendero Kumano. No apta para principiantes.",
    },
    highlights: {
      en: [
        "Kōyasan departure at dawn — leaving the temple town in morning mist",
        "Three mountain passes over 1,000m — Omata-tōge, Miura-tōge, Nishizaka-tōge",
        "Near-total solitude for days — the path that filters the casual from the committed",
      ],
      ja: [
        "夜明けの高野山出発——朝霧の中、寺院町を離れる",
        "標高1,000mを超える三つの峠——大股峠、三浦峠、西坂峠",
        "何日も続くほぼ完全な孤独——気軽な旅人と本物の求道者を選別する道",
      ],
      zhTW: [
        "黎明時分從高野山出發——在晨霧中離開寺院小鎮",
        "三處超過1,000公尺的山口——大股峠、三浦峠、西坂峠",
        "連續數日幾乎完全的孤獨——篩選隨意旅人與真正投入者的道路",
      ],
      es: [
        "Salida al amanecer desde Kōyasan — abandonando el pueblo templario en la niebla matinal",
        "Tres pasos de montaña por encima de 1.000 m — Omata-tōge, Miura-tōge, Nishizaka-tōge",
        "Soledad casi total durante días — el sendero que distingue al casual del comprometido",
      ],
    },
    difficulty: 5,
    startEnd: {
      start: { en: "Kōyasan", ja: "高野山", zhTW: "高野山", es: "Kōyasan" },
      end: { en: "Kumano Hongu Taisha", ja: "熊野本宮大社", zhTW: "熊野本宮大社", es: "Kumano Hongu Taisha" },
    },
  },
  {
    id: "iseji",
    name: {
      en: "Iseji (Ise Route)",
      ja: "伊勢路",
      zhTW: "伊勢路",
      es: "Iseji (Ruta de Ise)",
    },
    distanceKm: 170,
    days: 7,
    difficultyLabel: "moderate",
    keywords: ["Ise", "connector", "sacred-geography"],
    tagline: {
      en: "Following Japan's spiritual axis from the sun goddess to the forest gods",
      ja: "天照大神から森の神々へ——日本の霊的な軸をたどる",
      zhTW: "從太陽女神到森林諸神——沿著日本的精神軸線前行",
      es: "Siguiendo el eje espiritual de Japón desde la diosa del sol hasta los dioses del bosque",
    },
    description: {
      en: "The longest of the four Kumano routes, connecting Ise Grand Shrine — Japan's most sacred Shinto site, dedicated to the sun goddess Amaterasu — to the Kumano Sanzan. This route traverses the entire Kii Peninsula coast and was the road for pilgrims arriving from central Japan. It links the two greatest pilgrimage destinations in Shinto tradition.",
      ja: "熊野の四ルートの中で最も長く、日本で最も神聖な神道の聖地——天照大神を祀る伊勢神宮から熊野三山まで。このルートは紀伊半島全域の海岸を横断し、中部日本から来る巡礼者の道だった。神道の伝統における二つの最大の巡礼地を結ぶ。",
      zhTW: "四條熊野路線中最長的一條，連接日本最神聖的神道聖地——供奉太陽女神天照大神的伊勢神宮——與熊野三山。這條路線橫越整個紀伊半島海岸，是來自日本中部朝聖者的道路。連接神道傳統中兩大最重要的朝聖地。",
      es: "La más larga de las cuatro rutas Kumano, que conecta el Gran Santuario de Ise — el lugar sintoísta más sagrado de Japón, dedicado a la diosa del sol Amaterasu — con Kumano Sanzan. Esta ruta atraviesa toda la costa de la Península de Kii y fue el camino de los peregrinos que llegaban desde el Japón central. Une los dos destinos de peregrinación más importantes de la tradición sintoísta.",
    },
    highlights: {
      en: [
        "Ise Grand Shrine departure — leaving Amaterasu's domain to seek the forest gods",
        "Magose-tōge pass — a stone-paved climb through cedar forest, unchanged for centuries",
        "Nachi Waterfall (133m) — Japan's tallest waterfall, sacred to Kumano's water deity",
      ],
      ja: [
        "伊勢神宮出発——天照大神の領域を離れ、森の神々を求めて",
        "馬越峠——何世紀も変わらぬ、杉の森の石畳の登り",
        "那智の滝（133m）——日本一の滝、熊野の水の神に捧げられた聖地",
      ],
      zhTW: [
        "從伊勢神宮出發——離開天照大神的領域，去尋覓森林諸神",
        "馬越峠——數百年未變的杉木林石板坡道",
        "那智瀑布（133公尺）——日本最高瀑布，奉獻給熊野水神的聖地",
      ],
      es: [
        "Salida del Gran Santuario de Ise — abandonando el dominio de Amaterasu para buscar a los dioses del bosque",
        "Paso Magose-tōge — una subida empedrada por bosque de cedros, sin cambios durante siglos",
        "Cascada Nachi (133 m) — la cascada más alta de Japón, sagrada para la deidad acuática de Kumano",
      ],
    },
    difficulty: 3,
    startEnd: {
      start: { en: "Ise Grand Shrine", ja: "伊勢神宮", zhTW: "伊勢神宮", es: "Gran Santuario de Ise" },
      end: { en: "Kumano Nachi Taisha", ja: "熊野那智大社", zhTW: "熊野那智大社", es: "Kumano Nachi Taisha" },
    },
  },
  {
    id: "ohechi",
    name: {
      en: "Ohechi (Coastal Route)",
      ja: "大辺路",
      zhTW: "大邊路",
      es: "Ohechi (Ruta Costera)",
    },
    distanceKm: 170,
    days: 7,
    difficultyLabel: "moderate",
    keywords: ["coastal", "fishermen", "Pacific"],
    tagline: {
      en: "Pacific cliffs, fishing harbors, and headland shrines where the divine feels close",
      ja: "太平洋の断崖、漁港、そして神が近く感じられる岬の社",
      zhTW: "太平洋懸崖、漁港，以及感受神明臨近的岬角神社",
      es: "Acantilados del Pacífico, puertos pesqueros y santuarios en los cabos donde lo divino se siente cerca",
    },
    description: {
      en: "The coastal route around the southern tip of the Kii Peninsula, historically the road of fishermen, merchants, and common people who could not afford the longer mountain routes. The path hugs sea cliffs and descends into fishing villages before climbing to headland shrines with Pacific views. The least-restored and most raw of the Kumano routes.",
      ja: "紀伊半島南端の海岸沿いのルートで、より長い山岳ルートを歩く余裕のなかった漁師、商人、庶民の道として歴史的に知られている。海岸の断崖に沿い、漁村に下りてから太平洋を望む岬の社へと登る。熊野のルートの中で最も手が加えられておらず、最も生の状態に近い。",
      zhTW: "環繞紀伊半島南端的沿海路線，歷史上是無力負擔較長山路的漁民、商人與平民百姓的道路。山路緊貼海岸懸崖，下降進入漁村後再攀登至俯瞰太平洋的岬角神社。熊野路線中修復程度最低、保留最原始風貌的一條。",
      es: "La ruta costera alrededor del extremo sur de la Península de Kii, históricamente el camino de pescadores, comerciantes y gente común que no podía permitirse las rutas de montaña más largas. El sendero bordea acantilados marinos y desciende a pueblos pesqueros antes de subir a santuarios en cabos con vistas al Pacífico. La ruta Kumano menos restaurada y más auténtica.",
    },
    highlights: {
      en: [
        "Kushimoto Cape — Japan's southernmost shrine, Pacific crashing on three sides",
        "Katsuura fishing port — tuna market at dawn, pilgrims among fishermen",
        "Shingu's Hayatama Taisha — one of the Kumano trinity, where rivers meet the sea",
      ],
      ja: [
        "串本岬——日本最南端の社、三方から太平洋が打ち寄せる",
        "勝浦漁港——夜明けのマグロ市場、漁師に混じって歩く巡礼者たち",
        "新宮の速玉大社——熊野三社の一つ、川が海に注ぐ場所",
      ],
      zhTW: [
        "串本岬——日本最南端的神社，三面太平洋拍岸",
        "勝浦漁港——黎明時分的鮪魚市場，朝聖者穿梭在漁民之間",
        "新宮的速玉大社——熊野三社之一，河川與大海交匯之處",
      ],
      es: [
        "Cabo Kushimoto — el santuario más meridional de Japón, el Pacífico rompe por tres lados",
        "Puerto pesquero de Katsuura — mercado de atún al amanecer, peregrinos entre pescadores",
        "Hayatama Taisha de Shingu — una de la trinidad Kumano, donde los ríos encuentran el mar",
      ],
    },
    difficulty: 3,
    startEnd: {
      start: { en: "Tanabe", ja: "田辺", zhTW: "田邊", es: "Tanabe" },
      end: { en: "Kumano Nachi Taisha", ja: "熊野那智大社", zhTW: "熊野那智大社", es: "Kumano Nachi Taisha" },
    },
  },
]
