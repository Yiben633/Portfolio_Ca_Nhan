import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section))
    if (!sections.length) return undefined

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visibleSections[0]) setActiveSection(visibleSections[0].target.id)
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
