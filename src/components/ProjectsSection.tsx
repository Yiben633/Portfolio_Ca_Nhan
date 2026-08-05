import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../types/portfolio'

const allFilter = 'Tất cả'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(allFilter)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const filters = useMemo(() => [allFilter, ...Array.from(new Set(projects.flatMap((project) => project.tags)))], [])
  const visibleProjects = activeFilter === allFilter ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  useEffect(() => {
    if (!selectedProject) return

    dialogRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedProject(null) }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown) }
  }, [selectedProject])

  return (
    <section id="work" className="scroll-mt-24 py-12" aria-labelledby="projects-title">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">01 / Selected work</p>
          <h2 id="projects-title" className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Những sản phẩm đang kể chuyện.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted">Dự án thật, bài học thật và những trải nghiệm được làm chỉn chu đến chi tiết cuối.</p>
      </div>

      <div className="mb-10 flex gap-2 overflow-x-auto pb-2" aria-label="Lọc dự án theo công nghệ">
        {filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${activeFilter === filter ? 'border-accent bg-accent text-accent-foreground' : 'border-border text-muted hover:border-accent hover:text-accent'}`}>{filter}</button>)}
      </div>

      <motion.div layout className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article key={project.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="group">
              <button type="button" onClick={() => setSelectedProject(project)} className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-card">
                  <img src={project.image} alt={`Ảnh xem trước dự án ${project.title}`} loading={index > 0 ? 'lazy' : 'eager'} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-accent/0 transition duration-500 group-hover:bg-accent/15" />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-text opacity-0 transition duration-300 group-hover:opacity-100"><ArrowUpRight size={17} /></span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border py-5"><div><h3 className="text-xl font-semibold tracking-tight">{project.title}</h3><p className="mt-1 text-sm leading-6 text-muted">{project.shortDescription}</p></div><span className="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">0{index + 1}</span></div>
              </button>
              <div className="mt-3 flex items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-muted">{tag}</span>)}</div><div className="flex shrink-0 gap-2">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Xem demo ${project.title}`} onClick={(event) => event.stopPropagation()} className="text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><ExternalLink size={15} /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Xem mã nguồn ${project.title}`} onClick={(event) => event.stopPropagation()} className="text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Github size={15} /></a>}</div></div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null) }}>
          <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" tabIndex={-1} initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} className="relative my-8 max-h-[calc(100vh-4rem)] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] bg-background shadow-2xl focus-visible:outline-none">
            <button type="button" onClick={() => setSelectedProject(null)} aria-label="Đóng chi tiết dự án" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><X size={18} /></button>
            <img src={selectedProject.screenshots[0] ?? selectedProject.image} alt={`Ảnh chi tiết dự án ${selectedProject.title}`} className="aspect-[16/8] w-full object-cover" />
            <div className="space-y-6 p-6 sm:p-10"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Chi tiết dự án</p><h2 id="project-dialog-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{selectedProject.title}</h2><p className="mt-4 max-w-2xl text-base leading-7 text-muted">{selectedProject.description}</p></div><div className="grid gap-6 border-y border-border py-6 sm:grid-cols-2"><div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Vai trò</p><p className="mt-2 text-sm font-semibold">{selectedProject.role}</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Công nghệ</p><div className="mt-2 flex flex-wrap gap-2">{selectedProject.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{tag}</span>)}</div></div></div><div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Tính năng chính</p><ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">{selectedProject.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-accent">✳</span>{feature}</li>)}</ul></div><div className="flex flex-wrap gap-3">{selectedProject.demoUrl && <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition hover:bg-accent-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><ExternalLink size={16} /> Xem demo</a>}{selectedProject.githubUrl && <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Github size={16} /> GitHub</a>}</div></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  )
}
