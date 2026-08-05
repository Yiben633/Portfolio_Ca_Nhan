import { Code2, Compass, FolderKanban, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const statIcons = {
  projects: FolderKanban,
  experience: Compass,
  technologies: Code2,
  focus: Sparkles,
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24" aria-labelledby="about-title">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">02 / About me</p>
          <h2 id="about-title" className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Sau màn hình là một người thật.</h2>
        </div>
        <div className="space-y-6">
          {profile.aboutParagraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? 'text-2xl font-medium leading-relaxed tracking-tight sm:text-4xl' : 'max-w-2xl text-base leading-8 text-muted sm:text-lg'}>{paragraph}</p>)}
        </div>
      </div>

      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat, index) => {
          const Icon = statIcons[stat.icon]
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
            >
              <Icon size={19} className="text-accent transition group-hover:scale-110" aria-hidden="true" />
              <p className="mt-8 text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold">{stat.label}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{stat.detail}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
