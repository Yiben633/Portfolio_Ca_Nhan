import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dự án', href: '#work' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Liên hệ', href: '#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${hasScrolled ? 'border-border bg-background/90 shadow-sm backdrop-blur-md' : 'border-transparent bg-background/60 backdrop-blur-sm'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3 text-sm font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">A.</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-muted md:flex">
            {navItems.map((item) => <a key={item.href} className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" href={item.href}>{item.label}</a>)}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Mở menu điều hướng"
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            >
              <Menu size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-background px-6 py-6 transition duration-300 md:hidden ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} aria-hidden={!isMenuOpen}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Điều hướng</span>
          <button type="button" onClick={closeMenu} aria-label="Đóng menu điều hướng" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><X size={19} aria-hidden="true" /></button>
        </div>
        <div className="mt-20 flex flex-col gap-6">
          {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1} className="flex items-center justify-between border-b border-border pb-5 text-4xl font-semibold tracking-tight transition hover:text-accent"><span>{item.label}</span><span className="font-mono text-xs text-accent">0{index + 1}</span></a>)}
        </div>
        <p className="absolute bottom-8 left-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{profile.email}</p>
      </div>
    </>
  )
}
