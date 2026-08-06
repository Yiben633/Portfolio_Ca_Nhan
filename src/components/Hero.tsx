import { ArrowDownRight, ArrowUpRight, Download, Github, Globe2, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { HeroAnimation } from './HeroAnimation'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const activeRole = profile.roles[roleIndex] ?? profile.title

  useEffect(() => {
    if (prefersReducedMotion || profile.roles.length < 2) return

    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % profile.roles.length)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [prefersReducedMotion])

  const socialIcon = (label: string) => label === 'GitHub' ? <Github size={16} /> : <Globe2 size={16} />

  return (
    <section className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20" aria-labelledby="hero-title">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-9 bg-accent" /> Xin chào, tôi là
        </p>
        <h1 id="hero-title" className="max-w-4xl text-[clamp(3rem,7.5vw,7rem)] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[clamp(3.5rem,7vw,7rem)]">
          <span className="block break-words">{profile.name}</span>
          <span className="mt-3 block font-serif text-[clamp(2.75rem,6vw,6rem)] font-normal italic leading-[1.08] tracking-[-0.03em] text-accent sm:mt-4">{profile.title}</span>
        </h1>
        <div className="mt-8 flex min-h-8 items-center gap-3 text-sm font-semibold text-muted sm:text-base" aria-live="polite">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span>{activeRole}</span>
        </div>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
          {profile.bio} Tôi kết hợp tư duy sản phẩm, code sạch và những chi tiết nhỏ tạo nên cảm giác lớn.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:-translate-y-1 hover:bg-accent-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Xem dự án <ArrowDownRight size={17} className="transition group-hover:rotate-[-45deg]" />
          </a>
          {profile.cvUrl ? (
            <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3.5 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Download size={16} /> Tải CV
            </a>
          ) : (
            <a href="#contact" className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              Liên hệ với tôi <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted">
          <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> {profile.location}</span>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Mail size={14} /> {profile.email}</a>
          <span className="flex items-center gap-3 border-l border-border pl-5">
            {profile.socials.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{socialIcon(social.label)}</a>)}
          </span>
        </div>
      </motion.div>

      <HeroAnimation />
    </section>
  )
}
