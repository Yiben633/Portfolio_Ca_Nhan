import type { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ScrollToTopButton } from '../components/ScrollToTopButton'

type MainLayoutProps = { children: ReactNode }

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
