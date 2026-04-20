import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sacred Trails',
  description: 'Privacy policy for the Sacred Trails marketing website and iOS application.',
  alternates: { canonical: 'https://sacredtrails.evelyn-ai.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-2">Privacy Policy</h1>
      <p className="text-xs text-stone-400 mb-10">Last updated: 2026-04-20</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest mb-3">This website (sacredtrails.evelyn-ai.com)</h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-3">
          This marketing website is statically generated and served as plain HTML, CSS, and images. It does not:
        </p>
        <ul className="list-disc list-inside text-stone-600 text-sm leading-relaxed space-y-1 mb-3">
          <li>Set any tracking, advertising, or analytics cookies.</li>
          <li>Run third-party analytics, ad networks, or user behaviour trackers.</li>
          <li>Ask for, collect, or store any personal information from visitors.</li>
          <li>Share data with third parties.</li>
        </ul>
        <p className="text-stone-600 text-sm leading-relaxed">
          Our hosting provider (Vercel) records standard request logs (IP address, user agent, requested path, timestamp) for infrastructure operation, abuse prevention, and DDoS protection. These logs are processed by Vercel under their own privacy policy at <a href="https://vercel.com/legal/privacy-policy" className="text-forest hover:underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>. We do not combine these logs with any user identity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest mb-3">External links</h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          Links on this site to the Apple App Store, Oficina del Peregrino, Tanabe City Kumano Tourism Bureau, and other external resources are governed by those sites&apos; own privacy policies. We recommend reviewing them before visiting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest mb-3">The Sacred Trails iOS app</h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-3">
          The iOS application is a separate product with its own privacy policy, including details about location access, in-app purchases, and on-device data storage. Please see the app-specific policy:
        </p>
        <p>
          <a
            href="https://papalon0505.github.io/dual-pilgrim-privacy/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest hover:underline font-medium text-sm"
          >
            Sacred Trails iOS App Privacy Policy →
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-forest mb-3">Your rights (GDPR / equivalent)</h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-3">
          If you are an EU/EEA, UK, California, or similar-jurisdiction resident, you have the right to request access to, correction of, or deletion of any personal data we process about you. Since this site does not collect personal data, such requests will typically return a null result.
        </p>
        <p className="text-stone-600 text-sm leading-relaxed">
          For any privacy enquiry, contact <a href="mailto:papahades01@gmail.com" className="text-forest hover:underline">papahades01@gmail.com</a>. We aim to respond within 14 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-forest mb-3">Changes to this policy</h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          We may update this privacy policy to reflect changes in the site or applicable law. The &ldquo;Last updated&rdquo; date at the top of this page indicates the version in effect. Previous versions are available on request.
        </p>
      </section>
    </div>
  )
}
