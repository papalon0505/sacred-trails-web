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
  keywords: [
    'Camino de Santiago app', 'pilgrimage app', 'offline hiking guide', 'Kumano Kodo guide',
    'Shikoku Henro app', 'sacred trails', 'pilgrimage route iOS', 'walking pilgrimage app',
    'Camino Frances offline', 'stage by stage navigation', 'offline travel guide', 'no subscription travel app',
  ],
  openGraph: {
    siteName: 'Sacred Trails',
    type: 'website',
    title: 'Sacred Trails — 18 Pilgrimage Routes, Offline Guide App',
    description: 'Complete offline guide for Camino de Santiago, Kumano Kodo, Shikoku Henro and 15 more sacred routes. One purchase, 10 languages, no internet required.',
    images: [{ url: '/og-multilingual.jpg', width: 1200, height: 630, alt: 'Sacred Trails multilingual pilgrimage guide app' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacred Trails — 18 Pilgrimage Routes, Offline Guide App',
    description: 'Complete offline guide for Camino de Santiago, Kumano Kodo, Shikoku Henro and more. One purchase, 10 languages.',
    images: ['/og-multilingual.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1146347245386603"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-parchment text-ink min-h-screen">{children}</body>
    </html>
  )
}
