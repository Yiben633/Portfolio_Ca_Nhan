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
  aboutParagraphs: [
    'Tôi bắt đầu với sự tò mò về cách một giao diện đẹp có thể khiến công nghệ trở nên gần gũi hơn. Từ những dòng HTML đầu tiên, tôi dần học cách biến ý tưởng thành sản phẩm có cấu trúc và có mục đích.',
    'Phong cách làm việc của tôi là cân bằng giữa thẩm mỹ và tính thực tế: lắng nghe kỹ, chia nhỏ vấn đề, xây dựng rõ ràng và luôn để lại không gian cho việc cải thiện.',
  ],
  stats: [
    { label: 'Dự án đã hoàn thành', value: '12+', detail: 'Từ landing page đến dashboard', icon: 'projects' },
    { label: 'Năm học tập & thực hành', value: '03+', detail: 'Luôn cập nhật công nghệ mới', icon: 'experience' },
    { label: 'Công nghệ sử dụng', value: '20+', detail: 'Frontend, backend và deployment', icon: 'technologies' },
    { label: 'Tập trung vào', value: 'UI / UX', detail: 'Rõ ràng, nhanh và dễ dùng', icon: 'focus' },
  ],
}
