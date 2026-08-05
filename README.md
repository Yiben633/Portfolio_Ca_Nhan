# Portfolio cá nhân

Website portfolio single-page được xây dựng bằng React, Vite và TypeScript. Giao diện theo hướng editorial hiện đại, hỗ trợ light/dark mode, responsive, animation có kiểm soát, lọc dự án, modal chi tiết và form liên hệ demo.

## Công nghệ

- React 18 và TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React và React Icons
- React Hook Form và Zod

## Cài đặt và chạy

Yêu cầu Node.js 18 trở lên.

```bash
npm install
npm run dev
```

Sau đó mở URL Vite hiển thị trong terminal, thường là `http://localhost:5173`.

## Build và preview

```bash
npm run build
npm run preview
```

Thư mục output production là `dist`.

## Chạy bằng Docker

Docker sẽ build project bằng Node ở stage đầu, sau đó dùng Nginx để serve static site ở stage cuối.

```bash
docker compose up -d --build
```

Mở website tại [http://localhost:8080](http://localhost:8080). Nginx đã cấu hình fallback về `index.html` cho các route phía client và cache dài hạn cho asset trong `/assets/`.

Dừng container:

```bash
docker compose down
```

## Tùy biến dữ liệu

### Thông tin cá nhân

Chỉnh sửa [src/data/profile.ts](src/data/profile.ts) để thay đổi:

- Họ tên, chức danh và các vai trò.
- Bio ngắn và giới thiệu dài.
- Avatar, email, số điện thoại và khu vực làm việc.
- Đường dẫn CV và social links.
- Các stat cards trong phần About.

### Dự án

Chỉnh sửa [src/data/projects.ts](src/data/projects.ts). Mỗi dự án hỗ trợ:

- `id`, `title`, `shortDescription`, `description`
- `image`, `screenshots`
- `tags`, `features`, `role`
- `demoUrl`, `githubUrl`

Ảnh tĩnh đặt trong `public/projects`. Nếu chưa có demo hoặc GitHub công khai, để chuỗi rỗng để nút tương ứng tự ẩn.

### Kỹ năng

Chỉnh sửa [src/data/skills.ts](src/data/skills.ts) để thêm hoặc xóa kỹ năng theo nhóm Frontend, Backend, Database, Tools và Deployment. Icon công nghệ được ánh xạ trong `src/components/SkillsSection.tsx`.

## Form liên hệ

Form hiện đang chạy chế độ demo phía client: sau khi validate thành công, form hiển thị trạng thái loading, mô phỏng gửi trong thời gian ngắn và reset.

Để kết nối dịch vụ thật, có thể thay hàm `onSubmit` trong `src/components/ContactSection.tsx` bằng EmailJS, Formspree hoặc API riêng. Khi dùng biến môi trường Vite, tạo file `.env.local`:

```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

Không commit secret hoặc private key vào Git. Sau khi thêm service, cập nhật README và cấu hình biến môi trường tương ứng trên nền tảng deploy.

## Theme và animation

- Theme được lưu trong `localStorage` với key `portfolio-theme`.
- Khi chưa có lựa chọn, website dùng theme hệ thống.
- Design tokens nằm trong `src/index.css` và được khai báo lại cho Tailwind ở `tailwind.config.js`.
- Các animation scroll reveal tôn trọng `prefers-reduced-motion`.

## Deploy

### Vercel

Import repository vào Vercel và dùng cấu hình mặc định của Vite:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

### Netlify

Tạo site từ repository với:

- Build command: `npm run build`
- Publish directory: `dist`

Nếu kết nối form hoặc dịch vụ bên ngoài, khai báo các biến `VITE_*` trong phần Environment variables của nền tảng deploy.

## Kiểm tra trước khi deploy

```bash
npm run build
```

Kiểm tra thêm trên mobile khoảng 360px, tablet khoảng 768px và desktop trên 1024px. Đảm bảo ảnh thật, CV và các link demo/GitHub đã được thay placeholder trước khi xuất bản.

## Cấu trúc chính

```text
src/
├── components/     # Hero, Navbar, Projects, About, Skills, Contact
├── data/           # profile, projects, skills
├── hooks/          # theme và active section
├── layouts/        # MainLayout
├── types/          # type dùng chung
└── App.tsx
```
