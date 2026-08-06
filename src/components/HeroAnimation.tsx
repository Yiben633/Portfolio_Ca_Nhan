import { motion, useReducedMotion } from 'framer-motion'

const codeLines = [
  { width: '72%', color: 'bg-accent' },
  { width: '88%', color: 'bg-sky-400' },
  { width: '56%', color: 'bg-accent-2' },
  { width: '78%', color: 'bg-slate-400' },
]

export function HeroAnimation() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, rotate: 3 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0, y: [0, -8, 0] }}
      transition={prefersReducedMotion ? undefined : { opacity: { duration: 0.8, delay: 0.15 }, scale: { duration: 0.8, delay: 0.15 }, rotate: { duration: 0.8, delay: 0.15 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      className="relative mx-auto w-full max-w-md lg:ml-auto"
      role="img"
      aria-label="Hoạt ảnh mô phỏng không gian làm việc Front-end Developer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-accent/40 bg-[#0b1118] p-5 shadow-2xl shadow-accent/10 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-accent" /></div><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">developer.workspace</span></div>
        <div className="mt-8 font-mono text-xs leading-7 sm:text-sm"><p className="text-white/40">01 <span className="ml-4 text-sky-300">const</span> <span className="text-white">developer</span> = {'{'}</p><p className="pl-8 text-white/70">name: <span className="text-accent">'Nguyễn Tấn Yên'</span>,</p><p className="pl-8 text-white/70">focus: <span className="text-accent-2">'front-end'</span>,</p><p className="pl-8 text-white/70">stack: <span className="text-sky-300">['React', 'API']</span>,</p><p className="text-white/40">06 <span className="text-white">{'}'}</span></p></div>
        <div className="mt-10 space-y-4"><div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/45"><span>building interface</span><span className="text-accent">82%</span></div>{codeLines.map((line, index) => <div key={line.width} className="h-2 overflow-hidden rounded-full bg-white/10"><motion.div initial={prefersReducedMotion ? false : { width: 0 }} animate={{ width: line.width }} transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.1, delay: 0.4 + index * 0.12 }} className={`h-full rounded-full ${line.color}`} /></div>)}</div>
        <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between border-t border-white/10 pt-5 sm:left-7 sm:right-7"><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">React / Vite / CSS</span><span className="grid h-10 w-10 place-items-center border border-accent/50 text-accent">NY<span className="absolute" /></span></div>
        <span className="absolute -right-3 -top-4 text-5xl text-accent" aria-hidden="true">✳</span>
      </div>
      <div className="absolute -right-5 -top-5 z-20 grid h-20 w-20 place-items-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/20 sm:-right-7 sm:-top-7 sm:h-24 sm:w-24"><div className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.15em]">Scroll<br />to explore<br /><span className="text-base">↗</span></div></div>
    </motion.div>
  )
}
