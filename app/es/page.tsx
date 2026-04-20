import type { Metadata } from 'next'
import { AppStoreBadge } from '@/components/AppStoreBadge'

export const metadata: Metadata = {
  title: 'Sacred Trails — App del Camino de Santiago y Rutas de Peregrinación',
  description: 'Guía completa offline para peregrinos. 12 rutas del Camino de Santiago, Kumano Kodo y Shikoku Henro. Navegación etapa por etapa, sin internet.',
  alternates: { canonical: 'https://sacredtrails.evelyn-ai.com/es' },
}

const FEATURES = [
  { icon: '📡', title: 'Sin Internet', desc: 'Todo el contenido está en la app. Funciona sin señal.' },
  { icon: '🐚', title: '12 Rutas del Camino', desc: 'Francés, Portugués, Norte, Primitivo, Vía de la Plata y más.' },
  { icon: '🌍', title: '10 Idiomas', desc: 'Español, inglés, japonés, chino, coreano, francés, alemán y más.' },
]

export default function EsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-ink mb-4">Tu Guía Offline para el Camino</h1>
      <p className="text-stone-500 text-lg mb-8">
        18 rutas de peregrinación — Camino de Santiago, Kumano Kodo, Shikoku Henro.
        Navegación por etapas en 10 idiomas, sin necesidad de internet.
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
