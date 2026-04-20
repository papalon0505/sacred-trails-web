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
  openGraph: { siteName: 'Sacred Trails', type: 'website' },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className}>
      <body className="bg-parchment text-ink min-h-screen">{children}</body>
    </html>
  )
}
