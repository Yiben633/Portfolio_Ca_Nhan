import type { Profile } from '../types/portfolio'

export const profile: Profile = {
  name: 'Nguyễn Văn A',
  title: 'Frontend Developer',
  roles: ['React Developer', 'UI Engineer', 'Freelancer'],
  bio: 'Tôi xây dựng những sản phẩm web nhanh, dễ dùng và có giao diện chỉn chu.',
  longBio: 'Tôi là một nhà phát triển phần mềm yêu thích việc biến ý tưởng thành trải nghiệm số rõ ràng và hiệu quả.',
  avatar: '/avatar-placeholder.svg',
  email: 'hello@example.com',
  phone: '+84 900 000 000',
  location: 'Thành phố Hồ Chí Minh, Việt Nam',
  cvUrl: '/cv.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
}
