export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-forest font-semibold text-lg">
            <span>🐚</span>
            <span>Sacred Trails</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="/routes" className="hover:text-forest transition-colors">Routes</a>
            <a href="/guide" className="hover:text-forest transition-colors">Guide</a>
            <div className="flex gap-2 text-xs text-stone-400">
              <span className="text-forest font-semibold">EN</span>
              <a href="/ja" className="hover:text-forest">日本語</a>
              <a href="/zh-TW" className="hover:text-forest">繁中</a>
              <a href="/es" className="hover:text-forest">ES</a>
            </div>
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
    </div>
  )
}
