import { Moon, Sun } from 'lucide-react'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="min-h-screen bg-background px-6 py-8 text-text transition-colors duration-300">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center text-center">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          className="fixed right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
        </button>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Portfolio cá nhân</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hello Portfolio</h1>
        <p className="mt-4 max-w-md text-muted">Nền tảng portfolio đã sẵn sàng với giao diện sáng và tối.</p>
      </div>
    </main>
  )
}

export default App
