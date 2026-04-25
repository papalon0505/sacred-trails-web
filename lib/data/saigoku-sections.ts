export interface SaigokuSection {
  id: string
  name: Record<string, string>
  templeRange: string
  temples: number[]
  prefectures: string[]
  tagline: Record<string, string>
  description: Record<string, string>
  highlights: Record<string, string[]>
}

export const saigokuSections: SaigokuSection[] = [
  {
    id: "wakayama",
    name: { en: "Wakayama — The Sacred Origin", ja: "和歌山の起点", zhTW: "和歌山起源", es: "Wakayama — El Origen Sagrado" },
    templeRange: "1–3",
    temples: [1, 2, 3],
    prefectures: ["Wakayama"],
    tagline: {
      en: "Where the pilgrimage begins — Nachi Falls, one of Japan's tallest, roars beside Temple 1",
      ja: "日本最大級の那智の滝を望む、西国巡礼の出発点",
      zhTW: "巡禮的起點——那智瀑布（日本最大落差之一）轟鳴於第一番旁",
      es: "Donde comienza la peregrinación — las Cataratas de Nachi rugen junto al Templo 1",
    },
    description: {
      en: "The southernmost temples, deep in the Kii Peninsula mountains, form the dramatic gateway to the Saigoku circuit. Temple 1 (Seiganto-ji) overlooks the 133m Nachi Falls — a Shinto deity in its own right — and is a UNESCO World Heritage site. Emperor Kazan, who revived the pilgrimage in the 10th century, began his journey here.",
      ja: "紀伊半島の山深くに位置する最南端の札所群が、西国巡礼の壮大な入口を形成する。1番青岸渡寺は高さ133mの那智の滝を眼下に望み、それ自体が神体として崇められる世界遺産の地。10世紀に巡礼を中興した花山法皇もここから歩みを始めた。",
      zhTW: "位於紀伊半島最南端山中的寺廟群，構成西國巡禮的壯麗入口。第1番青岸渡寺俯瞰133公尺的那智瀑布——本身即為神體——是世界遺產地。10世紀中興巡禮的花山法皇從此地踏上旅途。",
      es: "Los templos más al sur, en las profundidades de las montañas de la Península de Kii, forman la dramática entrada al circuito Saigoku. El Templo 1 (Seiganto-ji) domina las Cataratas de Nachi de 133m — una deidad sintoísta por derecho propio — y es Patrimonio de la UNESCO.",
    },
    highlights: {
      en: ["Nachi Falls (133m) beside Temple 1 — the tallest single-drop falls in Japan", "Kumano Nachi Taisha shrine adjacent — collect both a temple and a shrine seal", "Remote location means few crowds; the sea of trees around Nachi is ancient cedar"],
      ja: ["1番と並ぶ那智の滝（133m）——日本最高の単段瀑布", "隣接する熊野那智大社——寺院と神社の御朱印を両方収集できる", "秘境ゆえ人が少なく、那智周辺の森は古い杉の原生林"],
      zhTW: ["第1番旁的那智瀑布（133公尺）——日本落差最高的單段瀑布", "毗鄰熊野那智大社——可同時收集寺院與神社的御朱印", "偏遠地區人少，那智周圍是古老的杉木原生林"],
      es: ["Cataratas de Nachi (133m) junto al Templo 1 — las cataratas de un solo tramo más altas de Japón", "Gran Santuario de Nachi adyacente — colecciona sellos de templo y santuario", "La ubicación remota significa pocas multitudes; el mar de árboles alrededor de Nachi es cedro antiguo"],
    },
  },
  {
    id: "osaka-nara",
    name: { en: "Osaka & Nara — Ancient Capitals", ja: "大阪・奈良の古都", zhTW: "大阪・奈良古都", es: "Osaka y Nara — Antiguas Capitales" },
    templeRange: "4–9",
    temples: [4, 5, 6, 7, 8, 9],
    prefectures: ["Osaka", "Nara"],
    tagline: {
      en: "Japan's oldest temples and the deer-filled ancient capital of Nara",
      ja: "日本最古の寺院群と、鹿が闊歩する古都奈良",
      zhTW: "日本最古老的寺廟群與鹿群漫步的古都奈良",
      es: "Los templos más antiguos de Japón y la antigua capital de Nara, llena de ciervos",
    },
    description: {
      en: "This section passes through two of Japan's most historically rich regions. Osaka's Temple 5 (Fujii-dera) is one of Japan's oldest Buddhist temples, founded in 725 CE. Nara's temples sit amid the UNESCO World Heritage Historic Monuments, where sacred deer roam freely among 1,300-year-old structures.",
      ja: "この区間は日本で最も歴史豊かな2つの地域を通る。大阪の5番葛井寺は725年創建の日本最古の仏教寺院の一つ。奈良の札所は世界遺産に囲まれ、1300年の建造物の間を神鹿が闊歩する。",
      zhTW: "此路段穿越日本歷史最豐富的兩個地區。大阪的第5番葛井寺是日本最古老的佛教寺廟之一，建於725年。奈良的寺廟坐落於世界遺產之中，神鹿自由漫步於1300年歷史的建築之間。",
      es: "Esta sección pasa por dos de las regiones históricamente más ricas de Japón. El Templo 5 (Fujii-dera) de Osaka es uno de los templos budistas más antiguos de Japón, fundado en 725 d.C. Los templos de Nara se encuentran entre los Monumentos Históricos Patrimonio de la UNESCO.",
    },
    highlights: {
      en: ["Temple 8 (Hase-dera): 400 stone-lantern steps lead to the cliff-face main hall", "Nara Park: free-roaming sacred deer surround the route between temples", "Temple 4 (Seigai-ji) on Mt. Kongo — remote mountain approach"],
      ja: ["8番長谷寺：400基の石灯籠が並ぶ階段が崖面の本堂へと続く", "奈良公園：神鹿が放ち飼いされ、寺院間のルート沿いに集まる", "4番施福寺（槇尾山）——山奥への険しい参道"],
      zhTW: ["第8番長谷寺：400盞石燈籠的石階通往懸崖上的本堂", "奈良公園：神鹿自由放牧，聚集在寺廟之間的路線上", "第4番施福寺（槇尾山）——通往山中的崎嶇參道"],
      es: ["Templo 8 (Hase-dera): 400 escalones de linternas de piedra llevan al salón principal en el acantilado", "Parque Nara: ciervos sagrados deambulan libremente por la ruta entre templos", "Templo 4 (Seigai-ji) en el Monte Kongo — acceso por montaña remota"],
    },
  },
  {
    id: "kyoto",
    name: { en: "Kyoto — City of a Thousand Temples", ja: "京都の千寺", zhTW: "京都千寺之城", es: "Kioto — Ciudad de Mil Templos" },
    templeRange: "10–22",
    temples: [10, 11, 15, 16, 17, 18, 19, 20, 21],
    prefectures: ["Kyoto"],
    tagline: {
      en: "The emotional heart of the pilgrimage — eleven temples spread across Japan's cultural capital",
      ja: "巡礼の精神的核心——日本の文化首都に点在する11の札所",
      zhTW: "巡禮的精神核心——分布在日本文化首都的11座寺廟",
      es: "El corazón emocional de la peregrinación — once templos repartidos por la capital cultural de Japón",
    },
    description: {
      en: "The largest concentration of Saigoku temples in a single city. Kyoto's eleven temples range from the famous Kiyomizu-dera (Temple 16) with its wooden stage over a cliff, to the intimate riverside Rokkaku-do (Temple 18) where the flower-arranging tradition of Ikebana was born. Cherry blossoms and autumn foliage transform the paths between temples each season.",
      ja: "一都市に最多の西国札所が集中する区間。京都の11番は崖上の木造舞台で有名な16番清水寺から、生け花の発祥地とされる六角堂（18番）まで多彩。桜と紅葉が毎季節、寺院間の道を彩る。",
      zhTW: "在單一城市中集中最多西國寺廟的路段。京都的11座寺廟從以懸崖木造舞台聞名的第16番清水寺，到生花道（插花藝術）發祥地六角堂（第18番），各具特色。每個季節的櫻花和紅葉都將寺廟之間的小徑點綴得美不勝收。",
      es: "La mayor concentración de templos Saigoku en una sola ciudad. Los once templos de Kioto van desde el famoso Kiyomizu-dera (Templo 16) con su escenario de madera sobre un acantilado, hasta el íntimo Rokkaku-do (Templo 18) donde nació la tradición floral Ikebana.",
    },
    highlights: {
      en: ["Kiyomizu-dera (Temple 16): the wooden stage cantilevered 13m over a forested cliff", "Rokkaku-do (Temple 18): birthplace of Ikebana (flower arranging), 1,500 years old", "Temple 17 (Rokuhara Mitsu-ji): displays death masks of famous warlords"],
      ja: ["16番清水寺：13mの高さに張り出す木造の舞台が森の崖上に浮かぶ", "18番六角堂：1500年の歴史を誇る生け花の発祥地", "17番六波羅蜜寺：有名な武将の死面が展示されている"],
      zhTW: ["第16番清水寺：木造舞台從森林懸崖上伸出13公尺", "第18番六角堂：擁有1500年歷史的生花道發祥地", "第17番六波羅蜜寺：展示著著名武將的死亡面具"],
      es: ["Kiyomizu-dera (Templo 16): el escenario de madera en voladizo 13m sobre un acantilado boscoso", "Rokkaku-do (Templo 18): lugar de nacimiento del Ikebana, de 1.500 años", "Templo 17 (Rokuhara Mitsu-ji): exhibe máscaras mortuorias de famosos señores de la guerra"],
    },
  },
  {
    id: "hyogo-shiga-gifu",
    name: { en: "Hyogo, Shiga & Gifu — The Final Arc", ja: "兵庫・滋賀・岐阜の結末", zhTW: "兵庫・滋賀・岐阜最終弧", es: "Hyogo, Shiga y Gifu — El Arco Final" },
    templeRange: "24–33",
    temples: [24, 25, 26, 27, 30, 31, 32, 33],
    prefectures: ["Hyogo", "Shiga", "Gifu"],
    tagline: {
      en: "Lake Biwa's sacred shores and the final temple 1,000km from where it all began",
      ja: "琵琶湖の聖なる岸辺と、すべての始まりから1000km離れた最終札所",
      zhTW: "琵琶湖的神聖湖岸，以及距離起點1000公里的最終寺廟",
      es: "Las sagradas orillas del Lago Biwa y el templo final a 1.000 km de donde comenzó todo",
    },
    description: {
      en: "The pilgrimage arcs east through Hyogo before reaching Japan's largest lake, Biwa-ko, in Shiga Prefecture. Temples 30–32 overlook the lake from hillside positions, offering expansive views across the water. The final temple (33, Kegon-ji) in Gifu sits deep in the mountains — a challenging finish befitting a journey of this magnitude.",
      ja: "巡礼は東へ兵庫を抜け、日本最大の湖・琵琶湖（滋賀県）へと向かう。30〜32番は湖を見下ろす丘の上に立ち、水面を渡る広大な眺めを提供する。最終の33番（谷汲山華厳寺・岐阜）は山深くにあり、これほどの旅の締めくくりに相応しい難所の到達点となる。",
      zhTW: "巡禮向東穿越兵庫，抵達日本最大湖泊滋賀縣琵琶湖。第30–32番矗立於俯瞰湖泊的山坡，提供寬廣的水面景色。最終的第33番（岐阜谷汲山華嚴寺）深藏山中——為這段旅程畫上相稱的艱辛句點。",
      es: "La peregrinación gira al este a través de Hyogo antes de llegar al lago más grande de Japón, Biwa-ko, en la Prefectura de Shiga. Los templos 30–32 dominan el lago desde posiciones en la ladera. El templo final (33, Kegon-ji) en Gifu está en las profundidades de las montañas.",
    },
    highlights: {
      en: ["Temple 30 (Chikubu-shima): only accessible by boat, on an island in Lake Biwa", "Lake Biwa sunset views from temples 31–32 hillside paths", "Kegon-ji (Temple 33): ancient cedar avenue leads to the last stamp — the pilgrimage complete"],
      ja: ["30番竹生島：琵琶湖の島に建ち、船でのみアクセス可能", "31〜32番の山道から見える琵琶湖の夕景", "33番谷汲山華厳寺：古い杉並木を抜けると最後の御朱印——結願"],
      zhTW: ["第30番竹生島：矗立於琵琶湖島上，只能乘船抵達", "從第31–32番山道可遠眺琵琶湖夕景", "第33番谷汲山華嚴寺：穿越古老杉木林道，即可蓋上最後一枚御朱印——結願"],
      es: ["Templo 30 (Chikubu-shima): solo accesible en barco, en una isla del Lago Biwa", "Vistas del atardecer del Lago Biwa desde los senderos de ladera de los templos 31–32", "Kegon-ji (Templo 33): la avenida de cedros antiguos lleva al último sello — la peregrinación completa"],
    },
  },
]
