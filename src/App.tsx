import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
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

        <ContactSection />

      </div>
    </MainLayout>
  )
}

export default App
