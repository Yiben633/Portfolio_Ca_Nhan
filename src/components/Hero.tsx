import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, MoveUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

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

  const socialIcon = (label: string) => label === 'GitHub' ? <Github size={16} /> : <Linkedin size={16} />

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
        <h1 id="hero-title" className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.06em]">
          {profile.name}
          <br />
          <span className="font-serif font-normal italic text-accent">{profile.title}</span>
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

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, rotate: 3 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0, y: [0, -8, 0] }}
        transition={prefersReducedMotion ? undefined : { opacity: { duration: 0.8, delay: 0.15 }, scale: { duration: 0.8, delay: 0.15 }, rotate: { duration: 0.8, delay: 0.15 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        className="relative mx-auto w-full max-w-md lg:ml-auto"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-accent/30 bg-card shadow-2xl shadow-accent/10">
          <img src={profile.avatar} alt={`Ảnh đại diện của ${profile.name}`} className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-black/65 px-6 pb-6 pt-8 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Đang làm việc</p>
            <p className="mt-2 text-xl font-semibold">Xây dựng trải nghiệm web đáng nhớ.</p>
          </div>
        </div>
        <div className="absolute -bottom-7 -left-7 grid h-24 w-24 place-items-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/20 sm:h-28 sm:w-28">
          <div className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.15em]">Scroll<br />to explore<br /><MoveUpRight className="mx-auto mt-1" size={16} /></div>
        </div>
        <span className="absolute -right-3 -top-4 text-5xl text-accent" aria-hidden="true">✳</span>
      </motion.div>
    </section>
  )
}
