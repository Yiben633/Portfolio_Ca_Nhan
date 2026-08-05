import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Moon, MoveUpRight, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { skillGroups } from './data/skills'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen overflow-hidden bg-background text-text transition-colors duration-300">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3 text-sm font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">A.</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-muted md:flex">
            <a className="transition hover:text-accent" href="#work">Công việc</a>
            <a className="transition hover:text-accent" href="#about">Giới thiệu</a>
            <a className="transition hover:text-accent" href="#contact">Liên hệ</a>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="top" className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 lg:px-12">
        <section className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-9 bg-accent" /> Sẵn sàng cho dự án mới
            </p>
            <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.06em]">
              Thiết kế số
              <br />
              <span className="font-serif font-normal italic text-accent">có chủ đích.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {profile.bio} Tôi kết hợp tư duy sản phẩm, code sạch và những chi tiết nhỏ tạo nên cảm giác lớn.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:-translate-y-1 hover:bg-accent-2">
                Xem dự án <ArrowDownRight size={17} className="transition group-hover:rotate-[-45deg]" />
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-muted transition hover:text-accent">
                Nói chuyện với tôi <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card shadow-2xl shadow-accent/10">
              <img src={profile.avatar} alt={`Ảnh đại diện của ${profile.name}`} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-black/65 px-6 pb-6 pt-8 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Hiện tại</p>
                <p className="mt-2 text-xl font-semibold">Xây dựng trải nghiệm web đáng nhớ.</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-7 grid h-24 w-24 place-items-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/20 sm:h-28 sm:w-28">
              <div className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.15em]">Scroll<br />to explore<br /><MoveUpRight className="mx-auto mt-1" size={16} /></div>
            </div>
            <span className="absolute -right-3 -top-4 text-5xl text-accent" aria-hidden="true">✳</span>
          </motion.div>
        </section>

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

        <section id="about" className="scroll-mt-24 border-t border-border py-24">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">02 / About me</p><h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Sau màn hình là một người thật.</h2></div>
            <div><p className="text-2xl font-medium leading-relaxed tracking-tight sm:text-4xl">{profile.longBio} Tôi tin sản phẩm tốt luôn bắt đầu từ việc lắng nghe đúng câu hỏi.</p><div className="mt-10 flex items-center gap-2 text-sm text-muted"><MapPin size={16} className="text-accent" /> {profile.location}</div></div>
          </div>
          <div className="mt-20 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group) => <div key={group.category}><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{group.category}</p><ul className="space-y-2 text-sm text-muted">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 rounded-[2rem] bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">03 / Get in touch</p>
          <h2 className="mx-auto max-w-4xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em]">Cùng làm điều gì đó <span className="font-serif font-normal italic text-accent">thật đẹp.</span></h2>
          <a href={`mailto:${profile.email}`} className="group mt-10 inline-flex items-center gap-3 rounded-full bg-text px-6 py-4 text-sm font-bold text-background transition hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"><Mail size={17} /> {profile.email} <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </section>

        <footer className="flex flex-col justify-between gap-6 py-10 text-xs text-muted sm:flex-row sm:items-center"><p>© {currentYear} {profile.name}. Crafted with care.</p><div className="flex items-center gap-4">{profile.socials.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="transition hover:text-accent">{social.label === 'GitHub' ? <Github size={17} /> : <Linkedin size={17} />}</a>)}</div></footer>
      </div>
    </main>
  )
}

export default App
