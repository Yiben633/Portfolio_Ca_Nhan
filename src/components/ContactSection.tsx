import { zodResolver } from '@hookform/resolvers/zod'
import { Github, Globe2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { profile } from '../data/profile'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Vui lòng nhập họ tên có ít nhất 2 ký tự.'),
  email: z.string().trim().email('Vui lòng nhập email hợp lệ.'),
  message: z.string().trim().min(10, 'Nội dung cần có ít nhất 10 ký tự.'),
})

type ContactFormValues = z.infer<typeof contactSchema>
type SubmitStatus = 'idle' | 'success' | 'error'

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = async (_values: ContactFormValues) => {
    setSubmitStatus('idle')
    await new Promise((resolve) => window.setTimeout(resolve, 900))
    setSubmitStatus('success')
    reset()
  }

  const socialIcon = (label: string) => label === 'GitHub' ? <Github size={22} /> : <Globe2 size={22} />

  return (
    <section id="contact" className="scroll-mt-24 rounded-[2rem] bg-card px-6 py-14 sm:px-10 sm:py-20 lg:px-14" aria-labelledby="contact-title">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">04 / Get in touch</p>
          <h2 id="contact-title" className="max-w-xl text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.05em]">Cùng làm điều gì đó <span className="font-serif font-normal italic text-accent">thật đẹp.</span></h2>
          <p className="mt-7 max-w-md text-base leading-7 text-muted">Bạn có ý tưởng, một bài toán thú vị hoặc chỉ muốn trao đổi về sản phẩm? Hãy gửi tin nhắn, mình sẽ phản hồi sớm.</p>
          <div className="mt-10 space-y-5">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-sm font-semibold transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><span className="grid h-10 w-10 place-items-center rounded-full border border-border text-accent"><Mail size={17} /></span><span>{profile.email}</span></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-sm font-semibold transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><span className="grid h-10 w-10 place-items-center rounded-full border border-border text-accent"><Phone size={17} /></span><span>{profile.phone}</span></a>
            <div className="flex items-center gap-4 text-sm text-muted"><span className="grid h-10 w-10 place-items-center rounded-full border border-border text-accent"><MapPin size={17} /></span><span>{profile.location}</span></div>
          </div>
          <div className="mt-10 flex gap-3">{profile.socials.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{socialIcon(social.label)}</a>)}</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Họ tên</label><input id="contact-name" type="text" autoComplete="name" placeholder="Nguyễn Tấn Yên" {...register('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-text outline-none transition placeholder:text-muted/60 focus:border-accent" />{errors.name && <p id="contact-name-error" className="mt-2 text-xs text-red-500">{errors.name.message}</p>}</div>
          <div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Email</label><input id="contact-email" type="email" autoComplete="email" placeholder="ban@example.com" {...register('email')} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-text outline-none transition placeholder:text-muted/60 focus:border-accent" />{errors.email && <p id="contact-email-error" className="mt-2 text-xs text-red-500">{errors.email.message}</p>}</div>
          <div><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Nội dung</label><textarea id="contact-message" rows={5} placeholder="Mình muốn trao đổi về..." {...register('message')} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} className="w-full resize-y border-b border-border bg-transparent px-0 py-3 text-base leading-7 text-text outline-none transition placeholder:text-muted/60 focus:border-accent" />{errors.message && <p id="contact-message-error" className="mt-2 text-xs text-red-500">{errors.message.message}</p>}</div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-3 rounded-full bg-text px-6 py-3.5 text-sm font-bold text-background transition hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card">{isSubmitting ? 'Đang gửi...' : 'Gửi lời nhắn'}{!isSubmitting && <Send size={16} />}</button>{submitStatus === 'success' && <p role="status" className="text-sm font-medium text-accent">Đã nhận được tin nhắn. Cảm ơn bạn!</p>}{submitStatus === 'error' && <p role="alert" className="text-sm text-red-500">Có lỗi xảy ra, vui lòng thử lại.</p>}</div>
          <p className="text-xs leading-5 text-muted">Form hiện đang ở chế độ demo. Có thể kết nối EmailJS, Formspree hoặc API riêng sau này.</p>
        </form>
      </div>
    </section>
  )
}
