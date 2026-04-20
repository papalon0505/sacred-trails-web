import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sacred Trails',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-6">Privacy Policy</h1>
      <p className="text-stone-600 mb-4">
        The full privacy policy for Sacred Trails is available at the link below.
      </p>
      <a
        href="https://papalon0505.github.io/dual-pilgrim-privacy/privacy-policy.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-forest hover:underline font-medium"
      >
        View Privacy Policy →
      </a>
    </div>
  )
}
