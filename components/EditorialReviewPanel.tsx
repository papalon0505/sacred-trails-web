import type { EditorialReview } from '@/lib/editorial-content'

export function EditorialReviewPanel({ review }: { review?: EditorialReview }) {
  if (!review) return null

  return (
    <aside className="border-y border-stone-200 py-5 mb-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-2">Editorial review</p>
      <div className="space-y-3 text-sm leading-relaxed text-stone-600">
        <p><span className="font-semibold text-stone-700">Last reviewed:</span> {review.lastReviewed}</p>
        <p><span className="font-semibold text-stone-700">Review scope:</span> {review.reviewScope}</p>
        <p><span className="font-semibold text-stone-700">Planning note:</span> {review.caveat}</p>
        <div>
          <p className="font-semibold text-stone-700 mb-2">Source references:</p>
          <ul className="space-y-2">
            {review.sources.map(source => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-medium text-forest hover:underline">
                  {source.label}
                </a>
                <span className="text-stone-500"> — {source.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
