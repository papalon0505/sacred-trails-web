export interface ShikokuSection {
  id: string
  name: Record<string, string>
  templeRange: string
  temples: [number, number]
  keywords: string[]
  tagline: Record<string, string>
  description: Record<string, string>
  highlights: Record<string, string[]>
  difficulty: number // 1-5
  prefecture: string
}

export const shikokuSections: ShikokuSection[] = [
  {
    id: "awa",
    name: { en: "Awa", ja: "阿波", zhTW: "阿波", es: "Awa" },
    templeRange: "1–23",
    temples: [1, 23],
    keywords: ["mountains", "mystery", "awakening"],
    tagline: {
      en: "Where mountains swallow the path and silence becomes the teacher",
      ja: "山が道を飲み込み、沈黙が師となる",
      zhTW: "山峽吞噬路途，沉默成為師父",
      es: "Donde las montañas devoran el camino y el silencio se convierte en maestro",
    },
    description: {
      en: "Tokushima Prefecture. The most rugged and remote section, winding through forested mountain valleys where ancient trails remain largely unchanged. Temple 1 (Ryōzen-ji) in Naruto is where all pilgrims begin, and the section culminates at temple 23 deep in the mountains. This is the 'Dōjō of Awakening' — where walkers shed their everyday selves.",
      ja: "徳島県。最も険しく人里離れた区間で、古道が今もほぼ手つかずのまま山間の渓谷を縫うように続く。鳴門の1番霊山寺から始まり、山深い23番薬王寺で締めくくられる。「発心の道場」と呼ばれ、日常の自分を脱ぎ捨てる場所。",
      zhTW: "德島縣。最崎嶇、最偏遠的路段，古道穿越森林山谷，幾乎保持著原始樣貌。從鳴門的第1番霊山寺出發，深入山中直至第23番。這是「發心道場」——讓行者脫去日常自我的地方。",
      es: "Prefectura de Tokushima. La sección más escarpada y remota, que serpentea por valles montañosos boscosos donde los caminos antiguos permanecen casi sin cambios. Desde el templo 1 en Naruto hasta el templo 23 en las profundidades de las montañas. Este es el 'Dōjō del Despertar'.",
    },
    highlights: {
      en: ["Dawn bells at Temple 1 drift in with sea breeze from Naruto Strait", "Ancient cedar forests canopy the trail between temples 11–12", "Night walking by lantern light to Temple 21 on Mt. Tairyu"],
      ja: ["1番霊山寺の暁の鐘声が鳴門海峡の潮風とともに届く", "11〜12番の間は古い杉の大木が遍路道を覆う", "太龍寺21番へはロープウェイまたは夜間の提灯参拝"],
      zhTW: ["第1番霊山寺的晨鐘伴著鳴門海峽的海風飄來", "第11–12番之間，古老杉木林蔭覆蓋山道", "前往第21番太龍寺可乘空中纜車或夜間燈籠參拜"],
      es: ["Las campanas del amanecer del Templo 1 llegan con la brisa marina del Estrecho de Naruto", "Bosques de cedros centenarios cubren el camino entre los templos 11–12", "Caminata nocturna con linterna al Templo 21 en el Monte Tairyu"],
    },
    difficulty: 4,
    prefecture: "Tokushima",
  },
  {
    id: "tosa",
    name: { en: "Tosa", ja: "土佐", zhTW: "土佐", es: "Tosa" },
    templeRange: "24–39",
    temples: [24, 39],
    keywords: ["ocean", "sunlight", "endurance"],
    tagline: {
      en: "The Pacific opens to your left and the sky has no ceiling",
      ja: "左手に太平洋、空には天井がない",
      zhTW: "太平洋在左手邊，天空沒有盡頭",
      es: "El Pacífico se abre a tu izquierda y el cielo no tiene techo",
    },
    description: {
      en: "Kochi Prefecture, the largest and most sparsely populated of the four. The 'Dōjō of Ascetic Training' stretches along Japan's southern Pacific coastline — long stretches between temples test a pilgrim's commitment. Temple 24 (Hotsumisakiji) sits dramatically on a cape above the sea, and the section ends at temple 39.",
      ja: "高知県。四国で最も広く人口の少ない道場で、「修行の道場」と呼ばれる。日本の太平洋南岸沿いに続き、札所間の距離の長さが巡礼者の覚悟を試す。24番最御崎寺は海を見下ろす岬に立ち、39番延光寺で締めくくられる。",
      zhTW: "高知縣，四國最大且人口最稀少的縣。「修行道場」沿著日本太平洋南岸延伸——寺廟之間距離遙遠，考驗朝聖者的意志。第24番最御崎寺矗立於俯瞰大海的海角上，路段在第39番結束。",
      es: "Prefectura de Kochi, la más grande y menos poblada de las cuatro. El 'Dōjō del Entrenamiento Ascético' se extiende a lo largo de la costa sur del Pacífico de Japón. El Templo 24 (Hotsumisakiji) se alza dramáticamente sobre un cabo sobre el mar.",
    },
    highlights: {
      en: ["Temple 24 perches on a cliff where the Pacific stretches to the horizon", "Katsurahama beach — black sand, crashing waves, and solitude between temples", "Ryugado cave near temple 31: limestone stalactites formed over 100,000 years"],
      ja: ["24番最御崎寺は太平洋が地平線まで広がる断崖に立つ", "桂浜の黒砂浜——波が打ち寄せ、札所の間の静寂が包む", "31番近くの龍河洞：10万年以上かけて形成された鍾乳洞"],
      zhTW: ["第24番最御崎寺矗立於太平洋延伸至地平線的懸崖", "桂濱黑沙灘——浪濤拍打，寺廟之間的孤獨與寂靜", "第31番附近的龍河洞：經過十萬年形成的石灰岩鐘乳洞"],
      es: ["El Templo 24 se asienta en un acantilado donde el Pacífico se extiende hasta el horizonte", "Playa Katsurahama — arena negra, olas rompientes y soledad entre templos", "Cueva Ryugado cerca del templo 31: estalactitas de piedra caliza formadas en más de 100.000 años"],
    },
    difficulty: 3,
    prefecture: "Kochi",
  },
  {
    id: "iyo",
    name: { en: "Iyo", ja: "伊予", zhTW: "伊予", es: "Iyo" },
    templeRange: "40–65",
    temples: [40, 65],
    keywords: ["onsen", "mandarin oranges", "poetry"],
    tagline: {
      en: "Citrus groves and thermal springs — the body heals while the mind wanders",
      ja: "みかん畑と温泉——体が癒される間、心は旅をする",
      zhTW: "柑橘園與溫泉——身體癒合時，心靈漫遊",
      es: "Huertos de cítricos y aguas termales — el cuerpo sana mientras la mente divaga",
    },
    description: {
      en: "Ehime Prefecture. The 'Dōjō of Enlightenment' is the gentlest of the four sections and home to the most onsen (hot springs) along the route. The famous haiku poet Matsuo Bashō walked here, and Dōgo Onsen — one of Japan's oldest baths — sits near temple 51. Mandarin orange orchards scent the hillside trails.",
      ja: "愛媛県。「菩提の道場」は四区間で最も歩きやすく、遍路道沿いに最多の温泉がある。俳人・松尾芭蕉もこの地を歩き、日本最古の温泉の一つ「道後温泉」が51番近くに�湧く。みかん畑の香りが山道に漂う。",
      zhTW: "愛媛縣。「菩提道場」是四段中最平緩的，路線沿途溫泉最多。俳句詩人松尾芭蕉曾在此行走，日本最古老的溫泉之一「道後溫泉」就在第51番附近。山道旁柑橘園香氣瀰漫。",
      es: "Prefectura de Ehime. El 'Dōjō de la Iluminación' es el más suave de los cuatro tramos y alberga la mayor cantidad de onsen (aguas termales) a lo largo de la ruta. El famoso poeta haiku Matsuo Bashō caminó aquí, y el Dōgo Onsen — uno de los baños más antiguos de Japón — se encuentra cerca del templo 51.",
    },
    highlights: {
      en: ["Dōgo Onsen, 3,000 years old, reportedly where the gods bathe", "Mt. Ishizuchi (1,982m) — Shikoku's highest peak, visible from the trail", "Temple 45: cedar trees over 800 years old line the stone-paved approach"],
      ja: ["道後温泉：3000年の歴史を持ち、神々が入浴したとも伝わる", "石鎚山（1,982m）——四国最高峰、遍路道から望める", "45番岩屋寺：800年以上の杉並木が石畳の参道に続く"],
      zhTW: ["道後溫泉，擁有3000年歷史，相傳連神明也曾在此沐浴", "石鎚山（1,982公尺）——四國最高峰，從山道可遠眺", "第45番岩屋寺：800年古杉沿著石板參道排列"],
      es: ["Dōgo Onsen, de 3.000 años de antigüedad, donde dicen que se bañan los dioses", "Monte Ishizuchi (1.982 m) — el pico más alto de Shikoku, visible desde el sendero", "Templo 45: cedros de más de 800 años alinean la calzada empedrada"],
    },
    difficulty: 2,
    prefecture: "Ehime",
  },
  {
    id: "sanuki",
    name: { en: "Sanuki", ja: "讃岐", zhTW: "讃岐", es: "Sanuki" },
    templeRange: "66–88",
    temples: [66, 88],
    keywords: ["udon", "art", "completion"],
    tagline: {
      en: "The end of the circle is also its beginning — Kōbō Daishi was born here",
      ja: "円の終わりは始まりでもある——弘法大師はここで生まれた",
      zhTW: "圓的終點也是起點——弘法大師在此誕生",
      es: "El final del círculo es también su comienzo — Kōbō Daishi nació aquí",
    },
    description: {
      en: "Kagawa Prefecture. The 'Dōjō of Nirvana' is the final and shortest section. Temple 75 (Zentsūji) marks the birthplace of Kōbō Daishi — the most sacred site on the entire pilgrimage. The famous Naoshima Art Island lies offshore. The last temple (88, Ōkubo-ji) is reached, and then most pilgrims walk to Kōya-san on the mainland to pay respects at Daishi's tomb.",
      ja: "香川県。「涅槃の道場」は最終かつ最短の区間。75番善通寺は弘法大師の誕生地で、全遍路中最も神聖な場所。直島アート島が沖合に浮かぶ。88番大窪寺に到達した後、多くの巡礼者は高野山へ向かい大師の御廟にお礼参りをする。",
      zhTW: "香川縣。「涅槃道場」是最終也是最短的路段。第75番善通寺是弘法大師的誕生地——整個朝聖中最神聖的地點。直島藝術島就在近海。抵達第88番大窪寺後，多數朝聖者前往本州高野山，向大師御廟致謝。",
      es: "Prefectura de Kagawa. El 'Dōjō del Nirvana' es la última y más corta sección. El Templo 75 (Zentsūji) marca el lugar de nacimiento de Kōbō Daishi — el sitio más sagrado de toda la peregrinación. La famosa Isla de Arte Naoshima está en alta mar. Después del templo 88, la mayoría de los peregrinos van a Kōya-san a rendir homenaje en la tumba de Daishi.",
    },
    highlights: {
      en: ["Zentsūji (Temple 75): pilgrims walk a pitch-black corridor holding a golden rope to Daishi's hand", "Naoshima island — contemporary art pavilions hidden among traditional fishing villages", "Final bell at Ōkubo-ji (Temple 88): many pilgrims weep as the circle closes"],
      ja: ["善通寺（75番）：漆黒の廊下で金の綱をたどり大師の御手に触れる", "直島——伝統的な漁村に溶け込む現代アートのパビリオン", "大窪寺（88番）での最後の鐘：円が閉じる瞬間、涙する巡礼者は多い"],
      zhTW: ["善通寺（第75番）：朝聖者在漆黑廊道中握著金繩引導，觸碰大師之手", "直島——當代藝術展館隱藏在傳統漁村之中", "大窪寺（第88番）最後的鐘聲：圓滿閉合之際，許多朝聖者熱淚盈眶"],
      es: ["Zentsūji (Templo 75): los peregrinos caminan por un corredor completamente oscuro sosteniendo una cuerda dorada hacia la mano de Daishi", "Isla Naoshima — pabellones de arte contemporáneo escondidos entre aldeas pesqueras tradicionales", "Última campana en Ōkubo-ji (Templo 88): muchos peregrinos lloran cuando el círculo se cierra"],
    },
    difficulty: 2,
    prefecture: "Kagawa",
  },
]
