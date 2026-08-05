import { motion, useReducedMotion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { SiCss, SiDocker, SiExpress, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { skillGroups } from '../data/skills'

const skillIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Figma: SiFigma,
  'VS Code': VscCode,
  Vercel: SiVercel,
  Docker: SiDocker,
  'GitHub Actions': SiGithub,
}

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-24" aria-labelledby="skills-title">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">03 / Skills</p>
          <h2 id="skills-title" className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Bộ công cụ tôi dùng.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted">Một hệ sinh thái vừa đủ để biến ý tưởng thành trải nghiệm hoàn chỉnh.</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-5">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.category}>
            <div className="mb-5 flex items-center gap-3 border-b border-border pb-3">
              <span className="font-mono text-[10px] text-accent">0{groupIndex + 1}</span>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em]">{group.category}</h3>
            </div>
            <div className="space-y-2">
              {group.skills.map((skill, skillIndex) => {
                const Icon = skillIcons[skill] ?? SiHtml5
                return (
                  <motion.div
                    key={skill}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, delay: skillIndex * 0.04 }}
                    className="group flex items-center gap-3 border border-transparent px-3 py-2.5 text-sm text-muted transition hover:border-border hover:bg-card hover:text-text hover:shadow-sm"
                  >
                    <Icon size={17} className="shrink-0 text-accent transition group-hover:scale-110" aria-hidden="true" />
                    <span>{skill}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
