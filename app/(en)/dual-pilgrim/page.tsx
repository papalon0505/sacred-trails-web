import type { Metadata } from 'next'
import { DualPilgrimPage } from '@/components/DualPilgrimPage'
import { getDualPilgrimContent } from '@/lib/dual-pilgrim-content'

export const metadata: Metadata = {
  title: 'Dual Pilgrim — Qualifying Routes, Rules & How to Register',
  description: "Complete guide to the Dual Pilgrim programme: walk both the Camino de Santiago and Kumano Kodo to earn the Dual Pilgrim certificate. Qualifying routes, minimum distances, and registration steps.",
  keywords: ['dual pilgrim', 'dual pilgrim qualification', 'dual pilgrim routes', 'dual pilgrim certificate', 'camino kumano dual pilgrim'],
  alternates: {
    canonical: 'https://sacredtrails.evelyn-ai.com/dual-pilgrim',
    languages: {
      'en': 'https://sacredtrails.evelyn-ai.com/dual-pilgrim',
      'ja': 'https://sacredtrails.evelyn-ai.com/ja/dual-pilgrim',
      'zh-TW': 'https://sacredtrails.evelyn-ai.com/zh-TW/dual-pilgrim',
      'es': 'https://sacredtrails.evelyn-ai.com/es/dual-pilgrim',
    },
  },
}

export default function DualPilgrimEnPage() {
  return <DualPilgrimPage locale="en" content={getDualPilgrimContent('en')} />
}
