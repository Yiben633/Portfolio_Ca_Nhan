# Prompt Vibe Code - Website Portfolio Cá Nhân

Stack khuyên dùng: ReactJS + Vite + TypeScript + Tailwind CSS

Tài liệu này gồm các prompt theo từng bước để bạn copy vào Claude Code, Cursor, ChatGPT/Codex hoặc công cụ AI code khác. Nên làm đúng thứ tự từ Prompt 0 đến Prompt 8. Prompt 9 chỉ cần dùng nếu muốn đóng gói Docker để tự host.

## Cách sử dụng

1. Copy từng prompt theo đúng thứ tự.
2. Sau mỗi prompt, chạy `npm run dev` và kiểm tra giao diện trên trình duyệt.
3. Nếu phát sinh lỗi, yêu cầu AI sửa lỗi ngay ở bước hiện tại trước khi sang prompt tiếp theo.
4. Khi có dữ liệu thật, thay trong các file `src/data/*` thay vì sửa trực tiếp trong component.

## Cần chuẩn bị trước

- Ảnh đại diện hoặc ảnh minh họa cá nhân.
- File CV/PDF nếu muốn có nút tải CV.
- Thông tin cá nhân: họ tên, chức danh, bio ngắn, email, số điện thoại, khu vực làm việc.
- Liên kết mạng xã hội: GitHub, LinkedIn, Facebook, website khác nếu có.
- Danh sách dự án: tên, mô tả ngắn, mô tả chi tiết, ảnh chụp màn hình, công nghệ sử dụng, link demo, link GitHub, vai trò của bạn, tính năng nổi bật.
- Danh sách kỹ năng: ngôn ngữ lập trình, framework, thư viện, công cụ, cơ sở dữ liệu, deployment.

---

## Prompt 0 - Khởi Tạo Project

```text
Hãy khởi tạo một project website portfolio cá nhân bằng React + Vite + TypeScript.

Mục tiêu:
- Tạo nền móng dự án sạch, dễ mở rộng, dễ thay đổi dữ liệu cá nhân về sau.
- Cài đặt Tailwind CSS và các thư viện cần thiết cho UI, animation, icon.
- Hiển thị được trang đầu tiên với nội dung tạm thời để xác nhận project chạy đúng.

Yêu cầu kỹ thuật:
- Sử dụng React + Vite + TypeScript.
- Cài đặt và cấu hình Tailwind CSS đầy đủ.
- Cài đặt các package:
  - `framer-motion` để làm animation.
  - `lucide-react` để dùng icon giao diện.
  - `react-icons` để dùng icon công nghệ và mạng xã hội.
  - `react-router-dom` chỉ dùng nếu cần nhiều route; nếu portfolio 1 trang thì ưu tiên scroll-to-section.
- Tạo cấu trúc thư mục:
  - `src/components`
  - `src/sections`
  - `src/assets`
  - `src/hooks`
  - `src/data`
  - `src/layouts`
  - `src/types` nếu cần khai báo type dùng chung.

Yêu cầu về dữ liệu:
- Tạo `src/data/profile.ts` chứa dữ liệu mẫu:
  - `name`, `title`, `roles`, `bio`, `longBio`, `avatar`, `email`, `phone`, `location`, `cvUrl`, `socials`.
- Tạo `src/data/projects.ts` chứa 3-4 dự án mẫu:
  - `id`, `title`, `shortDescription`, `description`, `image`, `screenshots`, `tags`, `features`, `role`, `demoUrl`, `githubUrl`.
- Tạo `src/data/skills.ts` chứa danh sách kỹ năng theo nhóm:
  - Frontend, Backend, Database, Tools, Deployment.
- Component chỉ đọc dữ liệu từ các file trong `src/data`, hạn chế hardcode nội dung cá nhân trong JSX.

Yêu cầu giao diện ban đầu:
- Cấu hình font chữ đẹp, dễ đọc, ví dụ Inter, Poppins hoặc Manrope.
- Tạo layout tạm thời hiển thị dòng chữ "Hello Portfolio" ở giữa màn hình.
- Đảm bảo Tailwind hoạt động bằng cách style text, background và spacing bằng class Tailwind.

Kiểm tra sau khi làm:
- Chạy `npm install` nếu chưa cài package.
- Chạy `npm run dev`.
- Mở trình duyệt và xác nhận trang hiển thị "Hello Portfolio".
- Không có lỗi TypeScript, console error hoặc lỗi import.
```

---

## Prompt 1 - Dark Mode Và Design Tokens

```text
Hãy thiết lập hệ thống theme light/dark cho toàn bộ website portfolio.

Mục tiêu:
- Website có dark mode và light mode hoạt động ổn định.
- Màu sắc được định nghĩa thành design tokens để dễ bảo trì.
- Không bị nháy nền trắng khi tải lại trang ở dark mode.

Yêu cầu kỹ thuật:
- Cấu hình Tailwind với `darkMode: 'class'`.
- Tạo hook `useTheme` hoặc Theme Context:
  - Lưu lựa chọn theme vào `localStorage`.
  - Đọc lại theme khi load trang.
  - Nếu user chưa từng chọn, mặc định theo `prefers-color-scheme`.
  - Gắn/xóa class `dark` trên `document.documentElement`.
- Thêm script inline trong `index.html` để apply theme trước khi React mount, tránh flash of unstyled theme.

Yêu cầu design tokens:
- Định nghĩa màu trong `tailwind.config.js` hoặc CSS variables:
  - `background`
  - `surface`
  - `card`
  - `text`
  - `muted`
  - `border`
  - `accent`
  - `accent-foreground`
- Chọn bảng màu có cá tính nhưng vẫn chuyên nghiệp. Có thể dùng:
  - Nền sáng ấm nhẹ, chữ gần đen, accent xanh ngọc hoặc xanh lá hiện đại.
  - Nền tối sâu, surface đậm hơn nền, accent nổi bật nhưng không quá chói.
- Không phụ thuộc quá nhiều vào màu mặc định `gray`/`blue` của Tailwind.

Yêu cầu UI:
- Tạo nút toggle theme bằng icon mặt trời/mặt trăng từ `lucide-react`.
- Nút có `aria-label`, focus-visible rõ ràng và transition mượt.
- Đặt nút tạm thời ở góc trên bên phải nếu Navbar chưa tồn tại.

Kiểm tra sau khi làm:
- Bấm nút toggle và xác nhận theme đổi đúng.
- Reload trang và xác nhận theme được ghi nhớ.
- Đặt hệ thống ở dark mode, mở lại web và xác nhận không bị nháy nền trắng.
- Kiểm tra contrast chữ/nền để đọc tốt ở cả 2 theme.
```

---

## Prompt 2 - Layout Tổng Thể, Navbar Và Footer

```text
Hãy xây dựng layout tổng thể cho website portfolio dạng single-page với smooth scroll.

Mục tiêu:
- Tạo bộ khung chính gồm Navbar, main content và Footer.
- Điều hướng tới các section mượt mà trên desktop và mobile.
- Layout phải gọn, hiện đại, dễ mở rộng thêm section sau này.

Yêu cầu component:
- Tạo `MainLayout` nếu cần để gom Navbar, nội dung và Footer.
- Tạo `Navbar`:
  - Bên trái hiển thị tên cá nhân hoặc logo chữ.
  - Bên phải có menu: Giới thiệu, Dự án, Kỹ năng, Liên hệ.
  - Có nút toggle dark/light mode.
  - Sticky top, có backdrop blur và border/nền thay đổi nhẹ khi cuộn trang.
  - Khi click menu, scroll mượt tới section tương ứng.
- Tạo mobile menu:
  - Dùng hamburger icon.
  - Mở drawer hoặc overlay toàn màn hình.
  - Đóng menu khi click item, click ra ngoài hoặc bấm Escape.
  - Khóa scroll nền khi menu mobile đang mở nếu cần.
- Tạo `Footer`:
  - Hiển thị copyright theo năm hiện tại.
  - Hiển thị social links từ `src/data/profile.ts`.
  - Có nút quay về đầu trang.
- Tạo `ScrollToTopButton`:
  - Chỉ hiện khi đã cuộn xuống một khoảng nhất định.
  - Click để scroll mượt lên đầu trang.

Yêu cầu UX/accessibility:
- Tất cả link và button có focus-visible rõ ràng.
- Icon button có `aria-label`.
- Navbar không che mất nội dung khi click smooth scroll; thêm `scroll-margin-top` cho section nếu cần.

Kiểm tra sau khi làm:
- Resize trình duyệt ở mobile, tablet, desktop.
- Menu mobile mở/đóng đúng, không làm vỡ layout.
- Click từng menu item và xác nhận scroll đúng section.
- Scroll xuống và xác nhận Navbar/ScrollToTopButton thay đổi đúng.
```

---

## Prompt 3 - Hero Section

```text
Hãy xây dựng section `Hero` là màn hình đầu tiên của portfolio.

Mục tiêu:
- Tạo ấn tượng ban đầu rõ ràng: tôi là ai, làm gì, có thể giúp gì.
- Có CTA để người xem nhanh chóng xem dự án hoặc liên hệ.
- Dữ liệu lấy từ `src/data/profile.ts`, không hardcode trong component.

Nội dung cần hiển thị:
- Lời chào ngắn, ví dụ "Xin chào, tôi là".
- Họ tên cá nhân.
- Chức danh/vai trò chính.
- Danh sách vai trò có thể luân phiên hiển thị, ví dụ Frontend Developer, React Developer, UI Enthusiast.
- Bio ngắn 2-3 câu.
- Nút CTA chính: "Xem dự án" scroll tới section Projects.
- Nút CTA phụ:
  - "Tải CV" nếu `cvUrl` có dữ liệu.
  - Nếu chưa có CV, hiển thị "Liên hệ với tôi" scroll tới Contact.
- Social links ngắn gọn nếu phù hợp.

Yêu cầu giao diện:
- Desktop: bố cục 2 cột, nội dung bên trái, ảnh đại diện/minh họa bên phải.
- Mobile: xếp 1 cột, nội dung ưu tiên hiển thị trước, ảnh không quá lớn.
- Ảnh đại diện có style đẹp:
  - Border hoặc glow nhẹ theo màu accent.
  - Có thể thêm chuyển động float nhẹ bằng `framer-motion`.
  - Có `alt` mô tả rõ ràng.
- Nền hero có chiều cao tối thiểu gần full viewport nhưng vẫn để lộ phần section tiếp theo nếu hợp lý.

Yêu cầu animation:
- Dùng `framer-motion` để fade-in/slide-up khi mount.
- Typing effect có thể tự viết bằng React state hoặc dùng animation đơn giản; nếu làm typing, đảm bảo không gây re-render quá mức.
- Tôn trọng `prefers-reduced-motion` nếu có thể.

Kiểm tra sau khi làm:
- CTA scroll đúng tới section Projects/Contact.
- Ảnh hiển thị đúng trên desktop và mobile.
- Text không tràn, không che nhau ở màn hình nhỏ.
- Không có nội dung cá nhân hardcode trong component.
```

---

## Prompt 4 - About Và Skills

```text
Hãy xây dựng hai section `About` và `Skills` cho portfolio.

Mục tiêu:
- `About` giúp người xem hiểu rõ hơn về hành trình, mục tiêu và phong cách làm việc.
- `Skills` trình bày công nghệ một cách trực quan, dễ quét nhanh.

Section About:
- Lấy dữ liệu từ `src/data/profile.ts`.
- Hiển thị đoạn giới thiệu dài hơn `longBio`, có thể chia thành 2-3 đoạn ngắn.
- Thêm các stat cards nếu phù hợp, ví dụ:
  - Số dự án đã làm.
  - Số năm học tập/kinh nghiệm.
  - Số công nghệ đã sử dụng.
  - Mục tiêu nghề nghiệp hoặc điểm mạnh nổi bật.
- Stat cards nên có icon, label và number/value rõ ràng.
- Nếu làm count-up animation, chỉ chạy khi section vào viewport lần đầu.

Section Skills:
- Lấy dữ liệu từ `src/data/skills.ts`.
- Hiển thị kỹ năng theo nhóm: Frontend, Backend, Database, Tools, Deployment.
- Mỗi skill có:
  - Tên công nghệ.
  - Icon từ `react-icons` nếu có.
  - Level hoặc mô tả ngắn nếu dữ liệu có sẵn.
- Có thể dùng card, badge hoặc grid, nhưng cần gọn và dễ đọc.

Yêu cầu giao diện:
- Khoảng cách giữa các section đồng nhất với Hero.
- Skill card có hover nhẹ: đổi border/nền, scale rất nhẹ hoặc shadow nhẹ.
- Đảm bảo màu sắc hoạt động tốt ở cả light và dark mode.
- Trên mobile, layout không quá dày đặc và không tràn ngang.

Kiểm tra sau khi làm:
- Dữ liệu About/Skills đều lấy từ file data.
- Icon import đúng, không làm lỗi build.
- Section có id phù hợp để Navbar scroll tới.
- Kiểm tra responsive trên mobile, tablet, desktop.
```

---

## Prompt 5 - Projects Section

```text
Hãy xây dựng section `Projects`, đây là phần quan trọng nhất của portfolio.

Mục tiêu:
- Trình bày dự án đẹp, rõ ràng và thuyết phục.
- Người xem có thể lọc dự án theo công nghệ, xem demo, xem source code và đọc chi tiết từng dự án.
- Dữ liệu lấy từ `src/data/projects.ts`.

Yêu cầu dữ liệu:
- Mỗi project cần hỗ trợ các trường:
  - `id`
  - `title`
  - `shortDescription`
  - `description`
  - `image`
  - `screenshots`
  - `tags`
  - `features`
  - `role`
  - `demoUrl`
  - `githubUrl`
- Nếu chưa có dự án thật, viết 3-4 dự án mẫu có nội dung hợp lý để demo giao diện.

Yêu cầu giao diện card:
- Grid responsive:
  - Desktop: 3 cột.
  - Tablet: 2 cột.
  - Mobile: 1 cột.
- Mỗi card gồm:
  - Ảnh chụp màn hình tỉ lệ cố định, dùng `object-cover`.
  - Tên dự án.
  - Mô tả ngắn.
  - Badge công nghệ.
  - Nút/icon xem demo và GitHub, mở tab mới với `target="_blank"` và `rel="noreferrer"`.
- Nếu project không có demoUrl/githubUrl, ẩn nút tương ứng hoặc disable có tooltip rõ ràng.

Yêu cầu tương tác:
- Thêm filter theo tag/công nghệ:
  - Có nút "Tất cả".
  - Khi click tag, danh sách project cập nhật mượt.
  - Active filter có style rõ ràng.
- Click vào card để mở modal chi tiết:
  - Tiêu đề.
  - Mô tả đầy đủ.
  - Vai trò của bạn.
  - Danh sách tính năng chính.
  - Tags.
  - Ảnh lớn hoặc carousel ảnh nếu có nhiều screenshots.
  - Nút demo/GitHub.
- Modal đóng bằng nút close, click backdrop và phím Escape.
- Khi modal mở, focus nên được quản lý hợp lý và body không bị scroll lung tung.

Yêu cầu animation:
- Card hover: translate-y nhẹ, shadow nhẹ, ảnh zoom nhẹ trong khung overflow-hidden.
- Danh sách khi filter có transition mượt, không giật layout quá mạnh.

Kiểm tra sau khi làm:
- Filter hoạt động đúng với tất cả tag.
- Modal mở/đóng đúng trên desktop và mobile.
- Link demo/GitHub mở tab mới.
- Ảnh có `alt`, loading lazy cho ảnh không nằm trong viewport đầu tiên.
```

---

## Prompt 6 - Contact Section

```text
Hãy xây dựng section `Contact` để người xem có thể liên hệ trực tiếp.

Mục tiêu:
- Hiển thị thông tin liên hệ rõ ràng.
- Có form liên hệ có validate.
- Nếu chưa có backend, tích hợp dịch vụ gửi form phía client hoặc để sẵn cấu trúc để cấu hình sau.

Nội dung cần hiển thị:
- Email, click để mở app mail bằng `mailto:`.
- Số điện thoại nếu có, click được bằng `tel:`.
- Khu vực làm việc/địa chỉ ngắn gọn.
- Social links dạng icon lớn, lấy từ `src/data/profile.ts`.

Yêu cầu form:
- Trường Họ tên.
- Trường Email.
- Trường Nội dung.
- Validate bằng `react-hook-form` và `zod`:
  - Họ tên bắt buộc, tối thiểu 2 ký tự.
  - Email đúng định dạng.
  - Nội dung bắt buộc, tối thiểu 10 ký tự.
- Hiển thị lỗi validate gần field tương ứng.
- Khi submit:
  - Nếu dùng EmailJS/Formspree, tạo hướng dẫn cấu hình biến môi trường trong `.env`.
  - Nếu chưa có service key, mock submit thành công sau một delay ngắn để demo UX.
  - Hiển thị loading state trên nút submit.
  - Hiển thị toast hoặc message thành công/thất bại.
  - Reset form sau khi gửi thành công.

Yêu cầu giao diện:
- Desktop: 2 cột, thông tin bên trái, form bên phải.
- Mobile: 1 cột.
- Form input có focus state rõ ràng, contrast tốt ở light/dark.
- Không để form bị tràn ngang trên mobile.

Kiểm tra sau khi làm:
- Submit form rỗng và xác nhận lỗi validate hiển thị đúng.
- Nhập email sai và xác nhận báo lỗi.
- Submit hợp lệ và xác nhận có loading, message thành công và reset form.
- Link email/phone/social hoạt động đúng.
```

---

## Prompt 7 - Responsive Và Animation Tổng Thể

```text
Hãy rà soát toàn bộ website để hoàn thiện responsive, animation và trải nghiệm cuộn trang.

Mục tiêu:
- Website trông tốt trên mobile, tablet và desktop.
- Animation nhất quán, mượt, không gây rối mắt.
- Navbar biết section nào đang active khi người dùng cuộn trang.

Cần kiểm tra responsive:
- Mobile nhỏ: 360px - 480px.
- Mobile lớn/tablet: 640px - 1024px.
- Desktop: trên 1024px.
- Các khu vực cần chú ý:
  - Navbar và mobile menu.
  - Hero layout từ 2 cột về 1 cột.
  - Projects grid.
  - Modal project.
  - Contact form.
  - Padding/margin giữa các section.

Yêu cầu animation:
- Thêm scroll reveal cho các section bằng `framer-motion` hoặc Intersection Observer:
  - Fade-in + slide-up nhẹ.
  - Chỉ chạy lần đầu khi section vào viewport.
  - Không làm text bị nhảy layout.
- Tôn trọng `prefers-reduced-motion` nếu có thể.
- Animation có thời gian ngắn, nhất quán, không quá nhiều hiệu ứng cùng lúc.

Yêu cầu Navbar active state:
- Dùng Intersection Observer để xác định section đang hiển thị.
- Highlight menu item tương ứng.
- Khi click menu, active state cập nhật đúng sau khi scroll.

Yêu cầu tối ưu ảnh:
- Ảnh project dùng `loading="lazy"` nếu không nằm trong Hero.
- Dùng kích thước/tỉ lệ cố định để tránh layout shift.
- Nên nén ảnh trước khi đưa vào `src/assets` nếu file quá nặng.

Kiểm tra sau khi làm:
- Kiểm tra bằng Chrome DevTools responsive mode.
- Không có scroll ngang bất thường.
- Text không đè lên nhau, button không bị tràn chữ.
- Animation không lag khi cuộn nhanh.
- Navbar active đúng theo section.
```

---

## Prompt 8 - SEO, Accessibility, README Và Hoàn Thiện

```text
Hãy hoàn thiện các chi tiết cuối cùng cho website portfolio.

Mục tiêu:
- Website sẵn sàng build và deploy.
- Có SEO cơ bản, favicon, Open Graph để chia sẻ đẹp.
- Có README hướng dẫn người khác chạy và tùy biến dự án.
- Accessibility cơ bản được đảm bảo.

Yêu cầu SEO trong `index.html`:
- Cập nhật `title` theo họ tên và vai trò.
- Thêm `meta description` ngắn gọn, rõ ràng.
- Thêm favicon.
- Thêm Open Graph tags:
  - `og:title`
  - `og:description`
  - `og:image`
  - `og:type`
  - `og:url` nếu có domain.
- Thêm Twitter card tags nếu phù hợp.
- Dùng ngôn ngữ trang phù hợp, ví dụ `lang="vi"` nếu nội dung tiếng Việt.

Yêu cầu accessibility:
- Tất cả ảnh có `alt` có nghĩa.
- Button icon có `aria-label`.
- Link mở tab mới có `rel="noreferrer"`.
- Màu chữ/nền đủ contrast ở cả light và dark mode.
- Có `focus-visible` cho button, link, input, filter, modal close.
- Modal có thể đóng bằng Escape.
- Form label liên kết đúng với input.

Yêu cầu 404:
- Nếu dùng `react-router-dom`, tạo route 404 đơn giản.
- Nếu single-page không dùng router, không cần tạo 404 riêng trong app.

Yêu cầu README:
- Viết `README.md` gồm:
  - Giới thiệu ngắn về project.
  - Công nghệ sử dụng.
  - Cách cài đặt: `npm install`.
  - Cách chạy dev: `npm run dev`.
  - Cách build: `npm run build`.
  - Cách preview build: `npm run preview`.
  - Cách thay dữ liệu cá nhân trong `src/data/profile.ts`.
  - Cách thay dữ liệu dự án trong `src/data/projects.ts`.
  - Cách thay kỹ năng trong `src/data/skills.ts`.
  - Cách cấu hình form liên hệ nếu dùng EmailJS/Formspree.
  - Cách deploy lên Vercel hoặc Netlify, output folder là `dist`.

Kiểm tra sau khi làm:
- Chạy `npm run build`.
- Nếu có lỗi lint/type/build, sửa đến khi build thành công.
- Mở trang và kiểm tra title/meta có đúng.
- Kiểm tra nhanh bằng Lighthouse nếu có thể.
```

---

## Prompt 9 - Docker Để Tự Host (Tùy Chọn)

```text
Hãy thêm cấu hình Docker để có thể build và tự host website portfolio.

Mục tiêu:
- Đóng gói ứng dụng React/Vite thành static site.
- Serve bằng Nginx.
- Hỗ trợ fallback về `index.html` nếu ứng dụng dùng client-side routing.

Yêu cầu file:
- Tạo `Dockerfile` multi-stage:
  - Stage 1 dùng Node để cài dependencies và build project.
  - Stage 2 dùng Nginx để serve thư mục `dist`.
- Tạo `nginx.conf`:
  - Serve static file.
  - Nếu không tìm thấy route, fallback về `/index.html`.
  - Thêm cache header hợp lý cho assets nếu phù hợp.
- Tạo `docker-compose.yml`:
  - Service tên `portfolio`.
  - Build từ Dockerfile hiện tại.
  - Map port host, ví dụ `8080:80`.
  - Restart policy có thể là `unless-stopped`.

Yêu cầu README:
- Cập nhật thêm phần chạy bằng Docker:
  - `docker compose up -d --build`
  - Truy cập `http://localhost:8080`
  - `docker compose down`

Kiểm tra sau khi làm:
- Chạy `docker compose up -d --build`.
- Mở `http://localhost:8080`.
- Nếu dùng router, thử truy cập trực tiếp một route con và xác nhận không bị 404 từ Nginx.
```

