import { ArrowUp, Github, Globe2 } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  const socialIcon = (label: string) => label === 'GitHub' ? <Github size={17} /> : <Globe2 size={17} />

  return (
    <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 text-xs text-muted sm:flex-row sm:items-center sm:px-8 lg:px-12">
      <p>© {new Date().getFullYear()} {profile.name}. Crafted with care.</p>
      <div className="flex items-center gap-5">
        {profile.socials.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{socialIcon(social.label)}</a>)}
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Quay về đầu trang" className="inline-flex items-center gap-2 border-l border-border pl-5 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><ArrowUp size={16} /> Đầu trang</button>
      </div>
    </footer>
  )
}
