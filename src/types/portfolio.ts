export type SocialLink = {
  label: string
  url: string
}

export type Profile = {
  name: string
  title: string
  roles: string[]
  bio: string
  longBio: string
  avatar: string
  email: string
  phone: string
  location: string
  cvUrl: string
  socials: SocialLink[]
}

export type Project = {
  id: string
  title: string
  shortDescription: string
  description: string
  image: string
  screenshots: string[]
  tags: string[]
  features: string[]
  role: string
  demoUrl: string
  githubUrl: string
}

export type SkillGroup = {
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Deployment'
  skills: string[]
}
