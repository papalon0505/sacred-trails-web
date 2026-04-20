import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sacredtrails.evelyn-ai.com'),
  title: {
    default: 'Sacred Trails — Camino de Santiago, Kumano Kodo & Shikoku Henro Offline Guide App',
    template: '%s | Sacred Trails App',
  },
  description: 'Complete offline guide for 18 sacred pilgrimage trails. Camino de Santiago, Kumano Kodo, Shikoku Henro and more. Stage-by-stage navigation, 10 languages, no internet required.',
  keywords: ['camino de santiago app', 'kumano kodo guide', 'shikoku henro app', 'pilgrimage trail guide', 'camino offline app', 'camino frances guide'],
  openGraph: {
    siteName: 'Sacred Trails',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-parchment text-ink min-h-screen">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-forest font-semibold text-lg">
              <span>🐚</span>
              <span>Sacred Trails</span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
              <a href="/routes" className="hover:text-forest transition-colors">Routes</a>
              <a href="/guide" className="hover:text-forest transition-colors">Guide</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-stone-800 text-stone-300 py-10 mt-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 Sacred Trails. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/routes" className="hover:text-white transition-colors">All Routes</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
