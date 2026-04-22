import type { Locale } from '@/lib/i18n'

export type ComparisonSlug =
  | 'camino-frances-vs-portugues'
  | 'camino-frances-vs-del-norte'
  | 'kumano-nakahechi-vs-camino-frances'

export interface Comparison {
  slug: ComparisonSlug
  routeA: string
  routeB: string
  nameA: Record<Locale, string>
  nameB: Record<Locale, string>
  intro: Record<Locale, string>
  chooseA: Record<Locale, string[]>
  chooseB: Record<Locale, string[]>
  metaTitle: Record<Locale, string>
  metaDesc: Record<Locale, string>
  h1: Record<Locale, string>
}

const caminoFrancesVsPortugues: Comparison = {
  slug: 'camino-frances-vs-portugues',
  routeA: 'camino-frances',
  routeB: 'camino-portugues',
  nameA: { en: 'Camino Francés', ja: 'フランス人の道', 'zh-TW': '法國之路', es: 'Camino Francés' },
  nameB: { en: 'Camino Portugués', ja: 'ポルトガル人の道', 'zh-TW': '葡萄牙之路', es: 'Camino Portugués' },
  h1: {
    en: 'Camino Francés vs Camino Portugués: Which Should You Walk?',
    ja: 'フランス人の道 vs ポルトガル人の道：どちらを歩くべきか？',
    'zh-TW': '法國之路 vs 葡萄牙之路：該走哪一條？',
    es: 'Camino Francés vs Camino Portugués: ¿Cuál deberías caminar?',
  },
  metaTitle: {
    en: 'Camino Francés vs Portugués 2026: Distance, Difficulty, Crowds & Which Is Better for You',
    ja: 'フランス人の道 vs ポルトガル人の道 — 距離・難易度・混雑度・どちらが自分向きか',
    'zh-TW': '法國之路 vs 葡萄牙之路完整比較：距離、難度、人潮、該選哪條',
    es: 'Camino Francés vs Portugués: Distancia, dificultad, afluencia y cuál elegir',
  },
  metaDesc: {
    en: 'Camino Francés vs Camino Portugués compared: distances (780km vs 260km), days needed, crowds, terrain, accommodation, infrastructure, and which route fits your pilgrimage style.',
    ja: 'フランス人の道（780km）とポルトガル人の道（260km）を徹底比較。距離・所要日数・巡礼者密度・地形・宿泊事情・インフラから見る、自分に合った選び方。',
    'zh-TW': '法國之路（780公里）與葡萄牙之路（260公里）完整比較。距離、所需天數、人潮、地形、住宿、基礎設施，幫你選出最適合的一條朝聖路。',
    es: 'Comparación entre Camino Francés (780km) y Portugués (260km): distancias, días necesarios, afluencia, terreno, alojamiento, infraestructura y cuál se adapta a tu peregrinación.',
  },
  intro: {
    en: "The Camino Francés and the Camino Portugués are the two most-walked routes to Santiago de Compostela, and the two that first-time pilgrims almost always weigh against each other. The Francés is the long, historic, deeply communal classic — 780 km across northern Spain, walked by half the pilgrims who arrive each year. The Portugués is shorter and more intimate, with two variants (Central and Coastal) threading up through Portugal into Galicia. Choosing between them isn't really about which is 'better' — it's about what kind of pilgrimage you want to have.",
    ja: "フランス人の道とポルトガル人の道は、サンティアゴへの巡礼路の中で最も歩かれる2本であり、初心者巡礼者が必ず比較するルートです。フランス人の道は780kmの長く歴史的で深く共同体的な古典——毎年到着する巡礼者の約半数がこの道を歩きます。ポルトガル人の道はより短く親密で、セントラルとコスタルの2つのバリエーションがポルトガルからガリシアへ抜けます。どちらが「良い」かではなく、どんな巡礼を望むかの問題です。",
    'zh-TW': "法國之路與葡萄牙之路是通往聖地亞哥最多人走的兩條路線，也是首次朝聖者幾乎一定會互相比較的兩條。法國之路是 780 公里、歷史悠久、社群濃厚的經典——每年抵達聖地亞哥的朝聖者中有一半走這條。葡萄牙之路較短、較親密，從葡萄牙穿入加利西亞，有中央線和沿海線兩種分支。選哪條不是「哪條比較好」的問題，而是你想要什麼樣的朝聖體驗。",
    es: "El Camino Francés y el Camino Portugués son las dos rutas más caminadas hacia Santiago de Compostela, y las dos que los peregrinos principiantes casi siempre comparan. El Francés es el clásico largo, histórico y profundamente comunitario — 780 km a través del norte de España, caminado por la mitad de los peregrinos que llegan cada año. El Portugués es más corto e íntimo, con dos variantes (Central y Costa) que suben desde Portugal a Galicia. Elegir entre ellos no es realmente sobre cuál es «mejor» — es sobre qué tipo de peregrinación quieres tener.",
  },
  chooseA: {
    en: [
      'You want the full classic Camino experience with the deepest pilgrim community.',
      'You have 30 days and want gradual physical transformation.',
      'You want the Meseta stretch, the Pyrenees crossing, and the iconic cities: Pamplona, Burgos, León.',
      'You want constant company — albergues, pilgrim meals, evening conversations across languages.',
    ],
    ja: [
      '古典的なカミーノの完全体験を、最も深い巡礼者コミュニティとともに味わいたい。',
      '30日の時間があり、身体の段階的な変化を楽しみたい。',
      'メセタ高原、ピレネー越え、パンプローナ・ブルゴス・レオンといった象徴的な都市を歩きたい。',
      '常に仲間と一緒が良い——アルベルゲ、巡礼者食堂、多言語での夜の会話を求めている。',
    ],
    'zh-TW': [
      '想體驗最完整的經典 Camino，擁有最深厚的朝聖者社群氛圍。',
      '有 30 天時間，想享受身心逐步轉化的過程。',
      '想走 Meseta 高原、翻越庇里牛斯山，並造訪 Pamplona、Burgos、León 等經典城市。',
      '喜歡有夥伴作伴——庇護所晚餐、跨語言的夜間閒聊。',
    ],
    es: [
      'Quieres la experiencia clásica completa del Camino con la comunidad de peregrinos más profunda.',
      'Tienes 30 días y quieres una transformación física gradual.',
      'Quieres la meseta, el cruce de los Pirineos y las ciudades icónicas: Pamplona, Burgos, León.',
      'Buscas compañía constante — albergues, comidas de peregrinos, conversaciones nocturnas multilingües.',
    ],
  },
  chooseB: {
    en: [
      'You have 10–14 days, not 30.',
      'You prefer ocean, rivers, and gentler terrain over the Meseta.',
      'You want Portuguese food and wine, then Galician seafood.',
      'You want fewer pilgrims per albergue, more quiet stretches.',
      'You already walked the Francés and want something different.',
    ],
    ja: [
      '30日ではなく10〜14日しか時間がない。',
      'メセタよりも海岸・川・緩やかな地形を好む。',
      'ポルトガル料理・ワイン、そしてガリシアのシーフードを楽しみたい。',
      'アルベルゲあたりの巡礼者数が少なく、静かな区間を求めている。',
      'フランス人の道は既に歩いた——違う体験がほしい。',
    ],
    'zh-TW': [
      '時間只有 10–14 天，不是 30 天。',
      '喜歡海洋、河流、地勢較緩的路徑，而非 Meseta 高原。',
      '想吃葡萄牙菜配葡萄酒，再享受加利西亞海鮮。',
      '想要人潮較少的庇護所、更多安靜路段。',
      '已走過法國之路，想換一種體驗。',
    ],
    es: [
      'Tienes 10–14 días, no 30.',
      'Prefieres océano, ríos y terreno más suave que la meseta.',
      'Quieres comida y vino portugués, luego mariscos gallegos.',
      'Quieres menos peregrinos por albergue y tramos más silenciosos.',
      'Ya caminaste el Francés y quieres algo diferente.',
    ],
  },
}

const caminoFrancesVsDelNorte: Comparison = {
  slug: 'camino-frances-vs-del-norte',
  routeA: 'camino-frances',
  routeB: 'camino-del-norte',
  nameA: { en: 'Camino Francés', ja: 'フランス人の道', 'zh-TW': '法國之路', es: 'Camino Francés' },
  nameB: { en: 'Camino del Norte', ja: '北の道', 'zh-TW': '北方之路', es: 'Camino del Norte' },
  h1: {
    en: 'Camino Francés vs Camino del Norte: Classic Crowd or Coastal Solitude?',
    ja: 'フランス人の道 vs 北の道：古典的な賑わいか、海岸の孤独か？',
    'zh-TW': '法國之路 vs 北方之路：熱鬧古典路還是海岸孤獨路？',
    es: 'Camino Francés vs Camino del Norte: ¿Clásico concurrido o soledad costera?',
  },
  metaTitle: {
    en: 'Camino Francés vs Camino del Norte: Distance, Terrain, Crowds & How to Choose',
    ja: 'フランス人の道 vs 北の道 — 距離・地形・混雑度・選び方完全ガイド',
    'zh-TW': '法國之路 vs 北方之路：距離、地形、人潮、如何選擇',
    es: 'Camino Francés vs Camino del Norte: Distancia, terreno, afluencia y cómo elegir',
  },
  metaDesc: {
    en: 'Camino Francés (780km, communal, flat meseta) vs Camino del Norte (820km, coastal, challenging). A detailed comparison of terrain, pilgrim density, infrastructure, and personality to help you choose.',
    ja: 'フランス人の道（780km・共同体的・平坦なメセタ）と北の道（820km・海岸線・挑戦的）を徹底比較。地形・巡礼者密度・インフラ・雰囲気から自分に合う道を選ぶ。',
    'zh-TW': '法國之路（780公里・社群濃厚・平坦 Meseta）與北方之路（820公里・沿海・挑戰性高）完整比較。從地形、人潮、基礎設施、路線個性幫你做決定。',
    es: 'Camino Francés (780km, comunitario, meseta plana) vs Camino del Norte (820km, costero, desafiante). Comparación detallada de terreno, densidad, infraestructura y carácter para ayudarte a elegir.',
  },
  intro: {
    en: "The Camino del Norte is the Francés's quieter, older, harder sibling. It's the route medieval pilgrims actually used when Moorish occupation made the interior of Spain too dangerous — a clifftop path hugging the wild Cantabrian coast for 820 kilometers through Basque, Cantabrian, and Asturian country. It's slightly longer than the Francés, much more physically demanding, and carries perhaps a tenth of the pilgrim traffic. The Francés is a shared journey. The Norte is a quiet conversation between you, the sea, and a thousand-year-old path.",
    ja: "北の道は、フランス人の道の静かで古く、より厳しい兄弟路です。中世にムーア人支配で内陸が危険だった時代、巡礼者たちが実際に選んだ道——820kmにわたりバスク・カンタブリア・アストゥリアスの荒々しいカンタブリア海岸を縫うように進みます。フランス人の道よりわずかに長く、身体的には遥かに厳しく、巡礼者密度は約10分の1。フランス人の道が「共有された旅」なら、北の道は「あなたと海と千年前の道との静かな対話」です。",
    'zh-TW': "北方之路是法國之路更安靜、更古老、更嚴苛的兄弟。當中世紀摩爾人佔據西班牙內陸、讓朝聖者別無選擇時，他們走的正是這條——沿著 820 公里的 Cantabria 海岸穿越 Basque、Cantabria 和 Asturias 地區，走在懸崖邊的古道上。比法國之路略長，身體挑戰大得多，朝聖者密度約為法國之路的十分之一。法國之路是一場共享的旅程，北方之路則是你、大海與千年古道之間的安靜對話。",
    es: "El Camino del Norte es el hermano más silencioso, más antiguo y más duro del Francés. Es la ruta que los peregrinos medievales usaron cuando la ocupación árabe hacía el interior de España demasiado peligroso — un sendero de acantilados que abraza la salvaje costa cantábrica durante 820 kilómetros por el País Vasco, Cantabria y Asturias. Ligeramente más largo que el Francés, mucho más exigente físicamente, y con quizás una décima parte del tráfico de peregrinos. El Francés es un viaje compartido. El Norte es una conversación silenciosa entre tú, el mar y un sendero milenario.",
  },
  chooseA: {
    en: [
      'This is your first Camino and you want plenty of company and infrastructure.',
      'You prefer flatter terrain with the iconic Meseta flat-lands experience.',
      'You want the cultural highlights: Pamplona, Burgos cathedral, León.',
      'You want consistent albergue availability without needing to book ahead.',
    ],
    ja: [
      '初めての巡礼で、仲間とインフラが充実した環境を望む。',
      'メセタ高原の象徴的な平坦体験を含む、比較的平坦な地形を好む。',
      '文化的ハイライトを押さえたい：パンプローナ、ブルゴス大聖堂、レオン。',
      '予約なしでもアルベルゲに泊まれる、安定した巡礼インフラを求めている。',
    ],
    'zh-TW': [
      '第一次走 Camino，想要充足的夥伴與成熟的基礎設施。',
      '偏好較平坦的地形，想體驗 Meseta 高原的標誌性平原。',
      '想走文化亮點：Pamplona、Burgos 大教堂、León。',
      '希望隨走隨住、不必事先訂庇護所。',
    ],
    es: [
      'Es tu primer Camino y quieres mucha compañía e infraestructura.',
      'Prefieres terreno más llano con la icónica experiencia de la meseta.',
      'Quieres los hitos culturales: Pamplona, catedral de Burgos, León.',
      'Quieres disponibilidad constante de albergues sin tener que reservar.',
    ],
  },
  chooseB: {
    en: [
      'You crave solitude, sea air, and empty morning beaches.',
      "You're physically fit and want real elevation: clifftop climbs, forest descents, muddy estuaries.",
      "You've already walked the Francés and want something rawer.",
      'You speak some Spanish — infrastructure is thinner, so communication matters more.',
      'You love Basque and Asturian food and are not in a rush.',
    ],
    ja: [
      '孤独・潮風・朝の誰もいないビーチを求めている。',
      '身体的に準備万端で、本物の高低差（断崖の登り・森の下り・泥の河口）を歩きたい。',
      'フランス人の道はすでに歩いた——よりワイルドな体験が欲しい。',
      'スペイン語が少し話せる——インフラは手薄、コミュニケーションが重要。',
      'バスクやアストゥリアスの食を愛し、急ぎの旅ではない。',
    ],
    'zh-TW': [
      '渴望孤獨、海風、以及清晨空無一人的海灘。',
      '體能已準備好迎接真正的起伏：懸崖攀升、森林下坡、泥濘河口。',
      '已走過法國之路，想要更原始的體驗。',
      '會一些西班牙語——因為基礎設施較稀薄，溝通很重要。',
      '喜歡 Basque 和 Asturias 美食，不趕時間。',
    ],
    es: [
      'Anhelas soledad, aire marino y playas matinales desiertas.',
      'Estás en buena forma y quieres desnivel real: acantilados, descensos boscosos, estuarios fangosos.',
      'Ya caminaste el Francés y quieres algo más crudo.',
      'Hablas algo de español — la infraestructura es más escasa, la comunicación importa más.',
      'Amas la comida vasca y asturiana y no tienes prisa.',
    ],
  },
}

const kumanoNakahechiVsCaminoFrances: Comparison = {
  slug: 'kumano-nakahechi-vs-camino-frances',
  routeA: 'kumano-nakahechi',
  routeB: 'camino-frances',
  nameA: { en: 'Kumano Kodo Nakahechi', ja: '熊野古道 中辺路', 'zh-TW': '熊野古道 中邊路', es: 'Kumano Kodo Nakahechi' },
  nameB: { en: 'Camino Francés', ja: 'フランス人の道', 'zh-TW': '法國之路', es: 'Camino Francés' },
  h1: {
    en: 'Kumano Kodo vs Camino de Santiago: East-West Pilgrimage Compared',
    ja: '熊野古道 vs カミーノ・デ・サンティアゴ：東西の巡礼路を比較する',
    'zh-TW': '熊野古道 vs 聖雅各之路：東西朝聖路完整比較',
    es: 'Kumano Kodo vs Camino de Santiago: Peregrinaciones de Oriente y Occidente',
  },
  metaTitle: {
    en: 'Kumano Kodo vs Camino de Santiago: Which Pilgrimage Fits You — or Walk Both?',
    ja: '熊野古道 vs カミーノ・デ・サンティアゴ — どちらが自分向きか、あるいは両方歩くか',
    'zh-TW': '熊野古道 vs 聖雅各之路：該走哪一條，還是兩條都走？',
    es: 'Kumano Kodo vs Camino de Santiago: ¿Cuál te corresponde o caminar ambos?',
  },
  metaDesc: {
    en: 'Kumano Kodo Nakahechi and the Camino de Santiago are the world\'s only two UNESCO-recognized pilgrimage networks. Compare length, terrain, culture, and the Dual Pilgrim credential you earn by walking both.',
    ja: '熊野古道 中辺路とカミーノ・デ・サンティアゴは、UNESCO公認の2大巡礼ネットワーク。距離・地形・文化、そして両方を歩くと得られる「デュアル巡礼者」認定を比較します。',
    'zh-TW': '熊野古道中邊路與聖雅各之路是全世界唯二被 UNESCO 認可的朝聖網絡。比較距離、地形、文化，以及走完兩條後可取得的「雙朝聖者」認證。',
    es: 'Kumano Kodo Nakahechi y Camino de Santiago son las dos únicas redes de peregrinación reconocidas por la UNESCO. Compara distancia, terreno, cultura y la credencial Dual Pilgrim por caminar ambas.',
  },
  intro: {
    en: "Kumano Kodo Nakahechi and the Camino de Santiago are the only two pilgrimage networks on Earth recognized by UNESCO as World Heritage cultural routes. Since 2015, their dual-pilgrim credential program has formalized what thousands of walkers already felt: these routes speak to each other. The Nakahechi is short (70 km, 5–7 days), intensely green and mossy, shaped by Shinto and Buddhist syncretism. The Francés is long (780 km, 30 days), mineral and communal, shaped by medieval Christianity. Most pilgrims walk them in separate trips, years apart. Walking both earns you a Dual Pilgrim pin, for free, and puts you in a small international fellowship.",
    ja: "熊野古道 中辺路とカミーノ・デ・サンティアゴは、地球上でUNESCO世界遺産の巡礼ネットワークとして登録されている唯一の2本の道です。2015年以降、両者のデュアル巡礼者認定制度が、多くの歩行者がすでに感じていたことを正式化しました——この2つの道は互いに共鳴します。中辺路は短く（70km、5〜7日）、深い緑と苔に包まれ、神仏習合の精神に形作られています。フランス人の道は長く（780km、30日）、鉱物的で共同体的、中世キリスト教に形作られています。多くの巡礼者は数年の間隔をあけて別々に歩き、両方を歩いた者は無料のデュアル巡礼者ピンを受け取り、小さな国際的なフェローシップの一員となります。",
    'zh-TW': "熊野古道中邊路與聖雅各之路，是全世界唯二被 UNESCO 列為世界遺產的朝聖網絡。自 2015 年起，雙邊推行的雙朝聖者（Dual Pilgrim）認證制度，將無數走過兩條路的人所感受到的共鳴正式化——這兩條路彼此呼應。中邊路短（70 公里、5–7 天），充滿綠意與苔蘚，由神佛習合精神塑造。法國之路長（780 公里、30 天），礦物感、社群感強烈，由中世紀基督教塑造。大多數朝聖者會相隔數年分別走兩條。走完兩條可獲得免費的雙朝聖者徽章，並加入一個跨國界的小型群體。",
    es: "Kumano Kodo Nakahechi y el Camino de Santiago son las únicas dos redes de peregrinación del planeta reconocidas por la UNESCO como rutas culturales Patrimonio Mundial. Desde 2015, su programa de credencial Dual Pilgrim formalizó lo que miles de caminantes ya sentían: estas rutas dialogan entre sí. El Nakahechi es corto (70 km, 5-7 días), intensamente verde y cubierto de musgo, moldeado por el sincretismo sintoísta y budista. El Francés es largo (780 km, 30 días), mineral y comunitario, moldeado por el cristianismo medieval. La mayoría de peregrinos los caminan en viajes separados, con años de diferencia. Caminar ambos otorga una chapa Dual Pilgrim gratuita y te sitúa en una pequeña hermandad internacional.",
  },
  chooseA: {
    en: [
      'You have a week or less, not a month.',
      'You want deep forest, hot springs, and Shinto-Buddhist spiritual depth.',
      "You prefer ryokan and minshuku over dormitory albergues.",
      "You've walked a Camino already and want something completely different.",
      'You want to be in Japan for related experiences: Kyoto temples, Koya-san, onsen towns.',
    ],
    ja: [
      '時間が1ヶ月ではなく1週間以下である。',
      '深い森・温泉・神仏習合の精神的深みを味わいたい。',
      'ドミトリー形式のアルベルゲよりも旅館・民宿を好む。',
      'すでにカミーノを歩いた——全く異なる体験が欲しい。',
      '日本での関連体験も組み込みたい：京都の寺社、高野山、温泉街。',
    ],
    'zh-TW': [
      '時間在 1 週以內，而非 1 個月。',
      '想體驗深邃森林、溫泉、以及神佛習合的精神深度。',
      '偏好旅館和民宿，而非通鋪式的庇護所。',
      '已走過 Camino，想要完全不同的體驗。',
      '想搭配在日本的其他體驗：京都寺院、高野山、溫泉之旅。',
    ],
    es: [
      'Tienes una semana o menos, no un mes.',
      'Quieres bosque profundo, aguas termales y profundidad espiritual sintoísta-budista.',
      'Prefieres ryokan y minshuku antes que dormitorios de albergue.',
      'Ya caminaste un Camino y quieres algo completamente distinto.',
      'Quieres estar en Japón para experiencias relacionadas: templos de Kioto, Koya-san, pueblos de onsen.',
    ],
  },
  chooseB: {
    en: [
      'You want the long immersive pilgrimage — 30 days of walking and transformation.',
      'You thrive in large multilingual pilgrim communities.',
      'You want the cultural breadth of northern Spain: wine, cities, medieval cathedrals.',
      "You're earlier in your pilgrimage journey and want the classic first.",
      'Budget matters and Spain is significantly cheaper day-to-day than Japan.',
    ],
    ja: [
      '長期間にわたる没入型の巡礼——30日間の歩行と変容を望む。',
      '多言語の大きな巡礼者コミュニティで力を発揮するタイプ。',
      '北スペインの幅広い文化を味わいたい：ワイン、都市、中世の大聖堂。',
      '巡礼の旅の初期段階——まず古典を押さえたい。',
      '予算重視——日々の費用はスペインが日本より大幅に安い。',
    ],
    'zh-TW': [
      '想要長期沉浸式朝聖——30 天的步行與轉化。',
      '在多語言、多國籍的大型朝聖者社群裡如魚得水。',
      '想體驗北西班牙豐富文化：葡萄酒、城市、中世紀大教堂。',
      '還在朝聖旅程的起點——想先走經典路線。',
      '預算考量——日常費用西班牙比日本便宜很多。',
    ],
    es: [
      'Quieres la peregrinación larga e inmersiva — 30 días de caminar y transformación.',
      'Prosperas en grandes comunidades multilingües de peregrinos.',
      'Quieres la amplitud cultural del norte de España: vino, ciudades, catedrales medievales.',
      'Estás en un momento temprano de tu viaje peregrino y quieres el clásico primero.',
      'El presupuesto importa y España es mucho más barata día a día que Japón.',
    ],
  },
}

const comparisonsBySlug: Record<ComparisonSlug, Comparison> = {
  'camino-frances-vs-portugues': caminoFrancesVsPortugues,
  'camino-frances-vs-del-norte': caminoFrancesVsDelNorte,
  'kumano-nakahechi-vs-camino-frances': kumanoNakahechiVsCaminoFrances,
}

export const comparisons: Comparison[] = Object.values(comparisonsBySlug)

export function getComparison(slug: string): Comparison | undefined {
  return comparisonsBySlug[slug as ComparisonSlug]
}

export const COMPARISON_SLUGS: ComparisonSlug[] = [
  'camino-frances-vs-portugues',
  'camino-frances-vs-del-norte',
  'kumano-nakahechi-vs-camino-frances',
]
