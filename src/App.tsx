import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from './data/profile'
import { AboutSection } from './components/AboutSection'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
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

        <ProjectsSection />

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
