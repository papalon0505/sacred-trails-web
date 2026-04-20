export function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/app/id6761192860"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-ink text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M14.5 10.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.7 0-1.7-.7-2.8-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.2 1 8.2.7 1 1.5 2 2.5 2 1 0 1.4-.6 2.6-.6 1.2 0 1.6.6 2.6.6 1.1 0 1.8-.9 2.5-1.9.8-1.1 1.1-2.2 1.1-2.2s-2.8-1.1-2.8-4.4zM12.4 4.3C13 3.6 13.4 2.6 13.3 1.5c-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.6 1 .1 2-.5 2.7-1.1z"/>
      </svg>
      Download on App Store
    </a>
  )
}
