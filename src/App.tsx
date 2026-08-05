import { ArrowUpRight, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { AboutSection } from './components/AboutSection'
import { Hero } from './components/Hero'
import { SkillsSection } from './components/SkillsSection'
import { MainLayout } from './layouts/MainLayout'

function App() {
  return (
    <MainLayout>
      <div id="top" className="mx-auto max-w-7xl overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-12">
        <Hero />

        <div className="my-20 flex items-center gap-4 text-accent" aria-hidden="true">
          <span className="text-xl">✳</span><span className="h-px flex-1 bg-border" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Selected work / 2024—2026</span><span className="h-px flex-1 bg-border" /><span className="text-xl">✳</span>
        </div>

        <section id="work" className="scroll-mt-24 py-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">01 / Selected work</p>
              <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Một vài dấu mốc.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted">Những sản phẩm được làm với sự tò mò, tính rõ ràng và một chút tinh nghịch.</p>
          </div>
          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={index === 0 ? 'md:col-span-2' : ''}
              >
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="group block">
                  <div className={`relative overflow-hidden rounded-[1.5rem] bg-card ${index === 0 ? 'aspect-[2/1] md:aspect-[2.35/1]' : 'aspect-[4/3]'}`}>
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:saturate-150" />
                    <div className="absolute inset-0 bg-accent/0 transition duration-500 group-hover:bg-accent/15" />
                    <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-text opacity-0 transition duration-300 group-hover:opacity-100"><ArrowUpRight size={18} /></span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-border py-5">
                    <div><h3 className="text-xl font-semibold tracking-tight">{project.title}</h3><p className="mt-1 text-sm text-muted">{project.shortDescription}</p></div>
                    <span className="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">0{index + 1}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted transition group-hover:border-accent group-hover:text-accent">{tag}</span>)}</div>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <AboutSection />
        <SkillsSection />

        <section id="contact" className="scroll-mt-24 rounded-[2rem] bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">04 / Get in touch</p>
          <h2 className="mx-auto max-w-4xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em]">Cùng làm điều gì đó <span className="font-serif font-normal italic text-accent">thật đẹp.</span></h2>
          <a href={`mailto:${profile.email}`} className="group mt-10 inline-flex items-center gap-3 rounded-full bg-text px-6 py-4 text-sm font-bold text-background transition hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"><Mail size={17} /> {profile.email} <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </section>

      </div>
    </MainLayout>
  )
}

export default App
