import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sacred Trails — Offline Pilgrimage Guide'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2C5F2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>🐚</div>
        <div style={{ fontSize: 56, fontWeight: 700, color: '#FAF7F2', textAlign: 'center', lineHeight: 1.2, marginBottom: 20 }}>
          Sacred Trails
        </div>
        <div style={{ fontSize: 28, color: '#C8922A', fontWeight: 600, marginBottom: 16 }}>
          18 Pilgrimage Routes · Offline
        </div>
        <div style={{ fontSize: 22, color: '#d1fae5', textAlign: 'center', maxWidth: 700 }}>
          Camino de Santiago · Kumano Kodo · Shikoku Henro
        </div>
      </div>
    ),
    { ...size }
  )
}
