import type { Locale } from '@/lib/i18n'

export interface LegalContent {
  metaTitle: string
  metaDesc: string
  title: string
  lastUpdated: string
  sections: { heading: string; body: string[] }[]
}

const LAST_UPDATED = '2026-04-20'

const OPERATOR_NAME = 'Sacred Trails'
const OPERATOR_CONTACT = 'papahades01@gmail.com'
const APP_DEVELOPER = 'papalon0505'

const en: LegalContent = {
  metaTitle: 'Legal Notice — Sacred Trails',
  metaDesc: 'Legal notice and site operator information for Sacred Trails (sacredtrails.evelyn-ai.com).',
  title: 'Legal Notice',
  lastUpdated: `Last updated: ${LAST_UPDATED}`,
  sections: [
    {
      heading: 'Site operator',
      body: [
        `This website (sacredtrails.evelyn-ai.com) is the official marketing site for the Sacred Trails iOS application.`,
        `Operator: ${OPERATOR_NAME}`,
        `Responsible party: ${APP_DEVELOPER}`,
        `Contact: ${OPERATOR_CONTACT}`,
      ],
    },
    {
      heading: 'Editorial responsibility',
      body: [
        `${APP_DEVELOPER} is responsible for the content of this website pursuant to applicable media and e-commerce regulations.`,
        `Any enquiries, correction requests, or takedown notices should be directed to the contact email above. We aim to respond within 14 days.`,
      ],
    },
    {
      heading: 'App Store information',
      body: [
        `The Sacred Trails app is distributed exclusively through the Apple App Store. This website is an independent marketing site and is not operated by Apple Inc.`,
        `Apple, the Apple logo, iPhone and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.`,
      ],
    },
    {
      heading: 'Accuracy of information',
      body: [
        `We strive to ensure the information on this site — including route distances, transport details, and pilgrim credential requirements — is accurate at the time of writing. However, information about third-party services, schedules, and addresses can change without notice.`,
        `All factual claims should be verified against the official source before you rely on them for travel planning. We accept no liability for loss, injury, or inconvenience arising from reliance on information published here.`,
      ],
    },
    {
      heading: 'External links',
      body: [
        `This website contains links to external websites operated by third parties (e.g., Oficina del Peregrino, Tanabe City Kumano Tourism Bureau, transport operators). We have no control over the content or availability of those sites and assume no responsibility for their content, accuracy, or practices.`,
        `Linking to a third-party site does not imply endorsement or affiliation.`,
      ],
    },
    {
      heading: 'Trademarks & copyright',
      body: [
        `"Camino de Santiago", "Kumano Kodo", "Shikoku Henro", "Dual Pilgrim", and other pilgrimage route names are used in their descriptive sense and remain the property of their respective administrative or cultural bodies.`,
        `Route descriptions and editorial content on this website were authored by the Sacred Trails team with AI assistance and are © ${OPERATOR_NAME}.`,
        `App Store badges are provided by Apple Inc. and used under Apple's marketing guidelines.`,
      ],
    },
    {
      heading: 'Non-affiliation',
      body: [
        `Sacred Trails is an independent travel app. It is not affiliated with, endorsed by, or partnered with: the Dual Pilgrim programme, the Archdiocese of Santiago de Compostela, the Tanabe City Kumano Tourism Bureau, the Shikoku 88 Temple Association, the Saigoku 33 Kannon Association, UNESCO, or any tourism authority.`,
      ],
    },
    {
      heading: 'Dispute resolution',
      body: [
        `Complaints or disputes should first be raised via email at the address above. The Online Dispute Resolution (ODR) platform of the European Commission is available at https://ec.europa.eu/consumers/odr/ for EU residents.`,
      ],
    },
  ],
}

const ja: LegalContent = {
  metaTitle: '特定商取引法に基づく表記 — Sacred Trails',
  metaDesc: 'Sacred Trails（sacredtrails.evelyn-ai.com）のサイト運営者情報および法的告知。',
  title: '法的告知（Legal Notice）',
  lastUpdated: `最終更新日：${LAST_UPDATED}`,
  sections: [
    {
      heading: 'サイト運営者',
      body: [
        `本ウェブサイト（sacredtrails.evelyn-ai.com）は、iOSアプリ「Sacred Trails」の公式マーケティングサイトです。`,
        `運営：${OPERATOR_NAME}`,
        `責任者：${APP_DEVELOPER}`,
        `連絡先：${OPERATOR_CONTACT}`,
      ],
    },
    {
      heading: '編集責任',
      body: [
        `適用されるメディア法および電子商取引規制に基づき、本サイトのコンテンツに関する責任は${APP_DEVELOPER}が負います。`,
        `お問い合わせ、訂正依頼、削除要請は上記メールアドレスまでご連絡ください。14日以内に対応いたします。`,
      ],
    },
    {
      heading: 'App Storeに関する情報',
      body: [
        `Sacred Trailsアプリは Apple App Store でのみ配信されています。本サイトは独立したマーケティングサイトであり、Apple Inc.による運営ではありません。`,
        `Apple、Appleロゴ、iPhone、iPad は Apple Inc. の商標であり、米国および他の国々で登録されています。App Store は Apple Inc. のサービスマークです。`,
      ],
    },
    {
      heading: '情報の正確性',
      body: [
        `本サイトに掲載する情報（ルートの距離、交通情報、巡礼者認定要件等）は執筆時点で正確を期していますが、第三者のサービス、時刻表、住所は予告なく変更される可能性があります。`,
        `旅行計画に利用される前に必ず公式情報源でご確認ください。本サイトの情報に依拠したことにより生じた損失、怪我、不都合について、当方は一切の責任を負いません。`,
      ],
    },
    {
      heading: '外部リンク',
      body: [
        `本サイトには第三者が運営する外部サイト（サンティアゴ巡礼事務所、田辺市熊野ツーリズムビューロー、交通事業者等）へのリンクが含まれます。これらのサイトの内容や可用性について当方は一切の管理権限を持たず、内容・正確性・運用に関する責任を負いません。`,
        `外部サイトへのリンクは、推奨または提携関係を意味するものではありません。`,
      ],
    },
    {
      heading: '商標と著作権',
      body: [
        `「カミーノ・デ・サンティアゴ」「熊野古道」「四国遍路」「デュアル巡礼者（Dual Pilgrim）」その他の巡礼路名称は記述的に使用されており、それぞれの運営団体または文化団体に帰属します。`,
        `本サイトのルート解説および編集コンテンツは、Sacred TrailsチームがAI支援のもとで執筆しました。© ${OPERATOR_NAME}`,
        `App StoreバッジはApple Inc.の提供により、Appleマーケティングガイドラインに従って使用しています。`,
      ],
    },
    {
      heading: '提携関係の否認',
      body: [
        `Sacred Trailsは独立した旅行アプリです。デュアル巡礼者プログラム、サンティアゴ・デ・コンポステーラ大司教区、田辺市熊野ツーリズムビューロー、四国八十八ヶ所霊場会、西国三十三所札所会、UNESCO、その他の観光当局とは一切の提携・後援・パートナーシップ関係にありません。`,
      ],
    },
    {
      heading: '紛争解決',
      body: [
        `苦情や紛争は、まず上記メールアドレスにご連絡ください。EU居住者の方は、欧州委員会のオンライン紛争解決（ODR）プラットフォーム https://ec.europa.eu/consumers/odr/ もご利用いただけます。`,
      ],
    },
  ],
}

const zhTW: LegalContent = {
  metaTitle: '法律聲明 — Sacred Trails',
  metaDesc: 'Sacred Trails（sacredtrails.evelyn-ai.com）網站經營者資訊與法律聲明。',
  title: '法律聲明（Legal Notice）',
  lastUpdated: `最後更新：${LAST_UPDATED}`,
  sections: [
    {
      heading: '網站經營者',
      body: [
        `本網站（sacredtrails.evelyn-ai.com）為 iOS 應用程式「Sacred Trails」的官方行銷網站。`,
        `經營者：${OPERATOR_NAME}`,
        `負責人：${APP_DEVELOPER}`,
        `聯絡方式：${OPERATOR_CONTACT}`,
      ],
    },
    {
      heading: '編輯責任',
      body: [
        `依適用的媒體與電子商務法規，本網站內容由 ${APP_DEVELOPER} 負責。`,
        `任何詢問、更正或下架請求請寄至上方電子郵件，我們將於 14 天內回覆。`,
      ],
    },
    {
      heading: 'App Store 相關資訊',
      body: [
        `Sacred Trails 應用程式僅透過 Apple App Store 配送。本網站為獨立經營的行銷網站，並非 Apple Inc. 所營運。`,
        `Apple、Apple 標誌、iPhone、iPad 為 Apple Inc. 之商標，於美國及其他國家註冊。App Store 為 Apple Inc. 之服務標章。`,
      ],
    },
    {
      heading: '資訊正確性',
      body: [
        `本網站所提供之資訊（包括路線距離、交通資訊、朝聖者認證規定等）於撰寫時力求準確，但第三方服務、時刻表與地址可能未經通知即變更。`,
        `所有事實性陳述應於旅行規劃前向官方來源核實。本站對依賴本站資訊所產生之損失、傷害或不便，概不負責。`,
      ],
    },
    {
      heading: '外部連結',
      body: [
        `本網站含有指向第三方經營網站的連結（例如聖地亞哥朝聖者事務所、田邊市熊野觀光局、交通業者等）。我們對這些網站的內容或可用性無控制權，亦不對其內容、準確性或實務負責。`,
        `指向第三方網站的連結不代表背書或合作關係。`,
      ],
    },
    {
      heading: '商標與著作權',
      body: [
        `「聖雅各之路 Camino de Santiago」、「熊野古道」、「四國遍路」、「雙朝聖者 Dual Pilgrim」及其他朝聖路線名稱於本站作描述性使用，其權利屬於各自的管理或文化團體。`,
        `本網站的路線描述與編輯內容由 Sacred Trails 團隊在 AI 協助下撰寫，著作權為 © ${OPERATOR_NAME}。`,
        `App Store 徽章由 Apple Inc. 提供，並依 Apple 行銷準則使用。`,
      ],
    },
    {
      heading: '無合作關係聲明',
      body: [
        `Sacred Trails 是獨立開發的旅行應用程式。與雙朝聖者計畫、聖地亞哥德孔波斯特拉總主教區、田邊市熊野觀光局、四國八十八所靈場會、西國三十三所札所會、UNESCO 或任何觀光主管機關均無合作、贊助或夥伴關係。`,
      ],
    },
    {
      heading: '爭議處理',
      body: [
        `如有投訴或爭議，請先以上列電子郵件聯繫我們。歐盟居民亦可使用歐盟執委會線上爭議解決（ODR）平台 https://ec.europa.eu/consumers/odr/。`,
      ],
    },
  ],
}

const es: LegalContent = {
  metaTitle: 'Aviso Legal — Sacred Trails',
  metaDesc: 'Aviso legal e información del responsable del sitio web Sacred Trails (sacredtrails.evelyn-ai.com).',
  title: 'Aviso Legal',
  lastUpdated: `Última actualización: ${LAST_UPDATED}`,
  sections: [
    {
      heading: 'Responsable del sitio',
      body: [
        `Este sitio web (sacredtrails.evelyn-ai.com) es el sitio oficial de marketing de la aplicación iOS Sacred Trails.`,
        `Responsable: ${OPERATOR_NAME}`,
        `Persona responsable: ${APP_DEVELOPER}`,
        `Contacto: ${OPERATOR_CONTACT}`,
      ],
    },
    {
      heading: 'Responsabilidad editorial',
      body: [
        `${APP_DEVELOPER} es el responsable editorial del contenido de este sitio web según la normativa aplicable en materia de medios y comercio electrónico.`,
        `Cualquier consulta, solicitud de corrección o petición de retirada de contenido debe dirigirse al correo electrónico indicado arriba. Nuestro objetivo es responder en un plazo de 14 días.`,
      ],
    },
    {
      heading: 'Información sobre App Store',
      body: [
        `La aplicación Sacred Trails se distribuye exclusivamente a través del Apple App Store. Este sitio web es un sitio de marketing independiente y no está operado por Apple Inc.`,
        `Apple, el logotipo de Apple, iPhone y iPad son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países. App Store es una marca de servicio de Apple Inc.`,
      ],
    },
    {
      heading: 'Exactitud de la información',
      body: [
        `Nos esforzamos por asegurar que la información publicada (distancias, transporte, requisitos de credenciales de peregrino) sea precisa en el momento de su redacción. No obstante, información sobre servicios de terceros, horarios y direcciones puede cambiar sin previo aviso.`,
        `Todas las afirmaciones fácticas deben verificarse en la fuente oficial antes de basar en ellas la planificación del viaje. No aceptamos responsabilidad por pérdidas, lesiones o inconvenientes derivados del uso de la información publicada aquí.`,
      ],
    },
    {
      heading: 'Enlaces externos',
      body: [
        `Este sitio contiene enlaces a sitios web externos operados por terceros (p. ej., Oficina del Peregrino, Oficina de Turismo de Kumano-Tanabe, operadores de transporte). No tenemos control sobre el contenido ni disponibilidad de esos sitios y no asumimos responsabilidad por su contenido, exactitud o prácticas.`,
        `Un enlace a un sitio de terceros no implica respaldo ni afiliación.`,
      ],
    },
    {
      heading: 'Marcas y derechos de autor',
      body: [
        `«Camino de Santiago», «Kumano Kodo», «Shikoku Henro», «Dual Pilgrim» y otros nombres de rutas de peregrinación se usan en sentido descriptivo y siguen siendo propiedad de sus respectivos organismos administrativos o culturales.`,
        `Las descripciones de rutas y el contenido editorial de este sitio web fueron redactados por el equipo de Sacred Trails con asistencia de IA y son © ${OPERATOR_NAME}.`,
        `Las insignias del App Store son proporcionadas por Apple Inc. y se usan conforme a las directrices de marketing de Apple.`,
      ],
    },
    {
      heading: 'Ausencia de afiliación',
      body: [
        `Sacred Trails es una aplicación de viajes independiente. No está afiliada, respaldada ni es socia de: el programa Dual Pilgrim, la Archidiócesis de Santiago de Compostela, la Oficina de Turismo de Kumano-Tanabe, la Asociación de los 88 Templos de Shikoku, la Asociación del Saigoku 33 Kannon, UNESCO, ni ninguna autoridad turística.`,
      ],
    },
    {
      heading: 'Resolución de conflictos',
      body: [
        `Las reclamaciones o disputas deben plantearse primero por correo electrónico en la dirección anterior. Los residentes de la UE disponen de la plataforma de Resolución de Litigios en Línea (ODR) de la Comisión Europea en https://ec.europa.eu/consumers/odr/.`,
      ],
    },
  ],
}

export const legalContent: Record<Locale, LegalContent> = { en, ja, 'zh-TW': zhTW, es }
export function getLegalContent(locale: Locale): LegalContent {
  return legalContent[locale] ?? en
}
