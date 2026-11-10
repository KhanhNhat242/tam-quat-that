<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# QUY TẮC DỰ ÁN – WEBSITE "TẨM QUẤT THẬT" (BẮT BUỘC)

> Áp dụng cho **mọi** thay đổi: code mới, sửa, thêm section, thêm nội dung, thêm ảnh. Không có ngoại lệ trừ khi người dùng nói rõ.

## 0. Nguồn yêu cầu
- **`docs/REQUIREMENTS.md` là nguồn sự thật duy nhất.** Đọc nó trước khi làm bất kỳ việc gì.
- Yêu cầu mới / thay đổi → **cập nhật `docs/REQUIREMENTS.md` trước** (thêm dòng vào mục 11 – Nhật ký thay đổi), sau đó mới code.
- Yêu cầu nằm **ngoài phạm vi** (giỏ hàng, thanh toán, đăng nhập, đa ngôn ngữ, blog nhiều trang, trang admin…) hoặc **mâu thuẫn** với tài liệu → hỏi lại người dùng, không tự ý làm.
- Đây là **Landing Page một trang**. Không tạo thêm route/trang trừ khi được yêu cầu (ngoại lệ: `not-found`, `robots`, `sitemap`, `opengraph-image`).

## 1. Trung thực nội dung (quan trọng nhất)
- **Không bịa** thông tin doanh nghiệp: SĐT, địa chỉ, giờ mở cửa, giá, số liệu, chứng chỉ, giải thưởng, tên nhân viên, đánh giá khách hàng.
- Số liệu USP chỉ gồm: 15 năm kinh nghiệm, KTV khiếm thị, >10 nhân viên, 80–100 lượt khách/ngày, kỹ năng xúc giác & thái độ phục vụ. Tất cả gắn `verified: false` cho tới khi sale xác nhận.
- Dữ liệu chưa có → dùng **placeholder** đặt trong file cấu hình, có comment `// TODO(SALE): <cần bổ sung gì>`. Trên giao diện hiển thị trung tính ("Liên hệ", "Đang cập nhật"), **không** hiện chữ "TODO", "lorem ipsum".
- Phản hồi khách hàng: ưu tiên đánh giá thật (Google Maps / khách cung cấp). Nếu dùng nội dung mẫu cho demo → đặt cờ `isSample: true` và không gắn tên/ảnh người thật.
- **Không đưa tuyên bố y tế**: không viết "chữa khỏi", "điều trị bệnh", "cam kết khỏi đau"… Dùng ngôn ngữ thư giãn, chăm sóc sức khỏe, giảm mệt mỏi.
- Viết về **kỹ thuật viên khiếm thị** với sự **tôn trọng**: nhấn mạnh tay nghề, xúc giác tinh tế, sự chuyên nghiệp; **không** dùng giọng thương hại, từ ngữ miệt thị, hay khai thác hình ảnh khuyết tật để câu khách.

## 2. Dữ liệu tập trung
- Toàn bộ thông tin doanh nghiệp & nội dung (tên, SĐT, Zalo, Facebook, địa chỉ, toạ độ, giờ mở cửa, dịch vụ, bảng giá, USP, testimonial, danh sách ảnh) nằm ở **một nơi**: `lib/site-config.ts` (hoặc thư mục `content/`). Component **chỉ đọc** từ đó, không hard-code.
- Các tính năng chờ xác nhận dùng **cờ bật/tắt** trong cấu hình, ví dụ `features.zalo`, `features.messenger` – mặc định `false`.
- Toạ độ bản đồ: `21.0303889, 105.8573478` (theo link Google Maps trong phiếu).

## 3. Thiết kế
- Bảng màu theo `docs/REQUIREMENTS.md` mục 7: xanh lá trầm – trắng kem – nâu gỗ – điểm nhấn vàng đồng. Khai báo **token màu một lần** trong `app/globals.css` (`@theme`) và dùng qua class Tailwind; **không** dùng mã hex rải rác trong component, **không** thêm màu ngoài bảng (trừ các sắc độ đậm/nhạt của chính các màu đó).
- Phong cách: Đông y truyền thống + hiện đại, ấm cúng, tinh tế. Tránh: màu neon, gradient sặc sỡ, giao diện "công nghệ", quá nhiều hiệu ứng.
- Font phải hỗ trợ **tiếng Việt** (`subsets: ["latin", "vietnamese"]` với `next/font`). Kiểm tra dấu hiển thị đúng.
- **Mobile-first**, hiển thị tốt từ 360px. Nút **Gọi điện** (`tel:`) luôn thấy được trên mobile.
- **Không để 1 chữ rớt xuống dòng cuối** (desktop, tablet, mobile):
  - Mọi text hiển thị đi qua hàm `nb()` trong `lib/text.ts` (nối 2 chữ cuối bằng khoảng trắng không ngắt).
  - Trong `lib/site-config.ts`, nối âm tiết của **một từ ghép** bằng `_` (vd. `Uy_Tín`, `Bấm_huyệt`) để không bị ngắt giữa từ; `nb()` tự đổi `_` thành khoảng trắng không ngắt. Dùng `plain()` cho alt/aria/metadata.
  - CSS chỉ dùng `text-wrap-style: balance | pretty` (longhand). **Không** dùng shorthand `text-wrap` vì nó ghi đè `whitespace-nowrap`.
  - Tiêu đề lớn cần ngắt đúng cụm (vd. H1 hero) → khai báo dạng mảng cụm từ và bọc mỗi cụm `whitespace-nowrap`.
- Nhịp nền section & thông số khoảng cách theo `docs/REQUIREMENTS.md` mục 12; dùng utility `section-y`, `container-page`, `text-body`, `eyebrow`, `btn`, `arch` trong `globals.css` thay vì tự đặt số mới.
- Phần tử có `data-reveal` **không** đồng thời mang class transition/hover-transform (CSS reveal ghi đè transition) → bọc thêm 1 thẻ ngoài để gắn `data-reveal`.
- Hiệu ứng: tái sử dụng hệ thống `data-reveal`, `deco-float`, `lightbox-fade` sẵn có trong `globals.css`; luôn tôn trọng `prefers-reduced-motion`.
- Dark mode: không bắt buộc; nếu không làm thì giao diện phải giữ nền kem cố định, không bị đổi màu theo `prefers-color-scheme`.

## 4. Ảnh & tư liệu
- Ưu tiên **ảnh thực tế của khách** (Drive trong `docs/REQUIREMENTS.md`). Logo thật thay cho `public/images/temp-logo.png`.
- Được **bổ sung ảnh từ internet** (theo ghi chú sale) nhưng chỉ dùng nguồn cho phép dùng thương mại (Unsplash, Pexels, Pixabay…); ảnh phải phù hợp không gian tẩm quất/Đông y, **không** chứa logo/thương hiệu khác, **không** có khuôn mặt nhận diện được giả làm nhân viên/khách của tiệm.
- Ghi nguồn mỗi ảnh lấy từ mạng vào `docs/ASSETS.md` (tên file – nguồn – link – giấy phép).
- Khi có ảnh thật: chép vào `public/images/photos/` theo đúng tên trong `docs/ASSETS.md`, đổi `src` tương ứng trong `images` của `lib/site-config.ts` (không sửa component).
- Ảnh lưu trong `public/images/<section>/`, tên file kebab-case không dấu; dùng `next/image`, có `alt` tiếng Việt mô tả đúng nội dung; nén ảnh hợp lý (ưu tiên webp/avif, cạnh dài ≤ 2000px).

## 5. Kỹ thuật
- Stack: **Next.js 16 (App Router)**, React 19, TypeScript, Tailwind CSS v4, Ant Design 6. Trước khi dùng API Next.js nào, đọc tài liệu trong `node_modules/next/dist/docs/` (xem khối nextjs-agent-rules ở trên).
- Mặc định **Server Component**; chỉ thêm `'use client'` cho phần thật sự tương tác (form, lightbox, menu mobile, counter…) và tách thành component nhỏ.
- Cấu trúc: mỗi section là một component trong `components/sections/`, phần dùng chung trong `components/ui/`. `app/page.tsx` chỉ ghép các section theo thứ tự ở `docs/REQUIREMENTS.md` mục 8.
- Ưu tiên Tailwind; chỉ dùng Ant Design khi có lợi rõ ràng (vd. Form, DatePicker, Image preview) và phải theme lại theo token màu dự án.
- `app/layout.tsx`: `lang="vi"`, `metadata` đúng thương hiệu (title, description tiếng Việt, Open Graph), **không** để lại "Booking Homestay"/"Create Next App".
- SEO: thêm JSON-LD `LocalBusiness` (loại phù hợp như `HealthAndBeautyBusiness`) với tên, toạ độ, và các trường chỉ khi đã có dữ liệu thật.
- Form đặt lịch: kiểm tra hợp lệ (họ tên, SĐT Việt Nam bắt buộc), thông báo rõ ràng bằng tiếng Việt. Chưa có backend thì xử lý phía client (thông báo thành công / chuyển sang gọi điện hoặc Zalo khi được bật) – không gửi dữ liệu đến dịch vụ bên ngoài khi chưa được duyệt.
- Không thêm thư viện mới nếu chưa thật cần; nếu thêm phải nêu lý do.
- Tiếp cận (a11y): tương phản chữ đạt WCAG AA, vùng bấm ≥ 44px, có thể dùng bàn phím, ảnh có `alt`, icon-button có `aria-label`.

## 6. Hoàn thành (Definition of Done) cho mỗi thay đổi
1. Đúng `docs/REQUIREMENTS.md` (và đã cập nhật tài liệu nếu yêu cầu thay đổi).
2. `npm run lint` và `npm run build` không lỗi.
3. Kiểm tra giao diện ở mobile (360–414px) và desktop.
4. Không phát sinh nội dung bịa đặt; placeholder đều có `TODO(SALE)`.
5. Báo lại cho người dùng: đã làm gì, còn thiếu thông tin gì từ sale.
