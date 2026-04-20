import type { Metadata } from 'next'
import { AppStoreBadge } from '@/components/AppStoreBadge'

export const metadata: Metadata = {
  title: 'Sacred Trails — 巡礼の道ガイドアプリ | カミーノ・熊野古道・四国遍路',
  description: '18の巡礼路をオフラインで歩ける公式ガイドアプリ。カミーノ・デ・サンティアゴ、熊野古道、四国遍路に対応。10言語、Wi-Fi不要。',
  alternates: { canonical: 'https://sacredtrails.evelyn-ai.com/ja' },
}

const FEATURES = [
  { icon: '📡', title: 'オフライン対応', desc: '全ルートのデータがアプリ内に収録。電波なしで利用可能。' },
  { icon: '🌍', title: '10言語', desc: '日本語・英語・スペイン語・中国語・韓国語など10言語。' },
  { icon: '⛩️', title: '熊野古道・四国遍路', desc: '中辺路・小辺路など熊野4ルート＋四国88ヶ所に完全対応。' },
]

export default function JaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-ink mb-4">オフラインで歩ける巡礼ガイド</h1>
      <p className="text-stone-500 text-lg mb-8">
        カミーノ・デ・サンティアゴ、熊野古道、四国遍路など18ルート対応。
        Wi-Fiなしでも全ルートが使えます。10言語対応。
      </p>
      <AppStoreBadge className="mx-auto mb-12" />
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {FEATURES.map(f => (
          <div key={f.title} className="bg-white rounded-xl p-5 border border-stone-200">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h2 className="font-semibold text-forest mb-1">{f.title}</h2>
            <p className="text-sm text-stone-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
