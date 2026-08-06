import type { Profile } from '../types/portfolio'

export const profile: Profile = {
  name: 'Nguyễn Tấn Yên',
  title: 'Thực tập sinh Front-end Developer',
  roles: ['Front-end Developer', 'React Developer', 'Software Engineering Student'],
  bio: 'Sinh viên năm ba ngành Kỹ thuật phần mềm, định hướng phát triển chuyên sâu về Front-end với React và JavaScript.',
  longBio: 'Tôi mong muốn được thực tập trong môi trường chuyên nghiệp để vận dụng kiến thức React, JavaScript và REST API, đồng thời nâng cao kỹ năng xây dựng giao diện và làm việc theo quy trình phát triển phần mềm.',
  email: 'BinN63342@gmail.com',
  phone: '+84 369 222 647',
  location: 'Quận 12, Thành phố Hồ Chí Minh',
  cvUrl: '/CV_NguyenTanYen.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/Yiben633' },
    { label: 'Portfolio', url: 'https://portfolio-ca-nhan-lime.vercel.app' },
  ],
  aboutParagraphs: [
    'Tôi là sinh viên năm ba ngành Kỹ thuật phần mềm tại Trường Đại học Nguyễn Tất Thành. Tôi yêu thích việc biến yêu cầu sản phẩm thành giao diện rõ ràng, responsive và dễ sử dụng.',
    'Mục tiêu của tôi là trở thành Front-end Developer, làm việc trong môi trường chuyên nghiệp, chủ động tự học và liên tục cải thiện kỹ năng qua các dự án thực tế.',
  ],
  stats: [
    { label: 'GPA hiện tại', value: '3.30/4.00', detail: 'Kỹ thuật phần mềm', icon: 'experience' },
    { label: 'Dự án cá nhân', value: '02+', detail: 'Mono Store và StudyFlow', icon: 'projects' },
    { label: 'Công nghệ chính', value: '20+', detail: 'Frontend, API và dữ liệu', icon: 'technologies' },
    { label: 'Định hướng', value: 'Front-end', detail: 'React, JavaScript và UI', icon: 'focus' },
  ],
}
