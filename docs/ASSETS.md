# Danh mục hình ảnh & tư liệu

Nguồn tư liệu gốc (logo + ảnh khách gửi): https://drive.google.com/drive/u/0/folders/1rZTqAus9ZKS8mnOwi6pkPbl3VSHuBw30

## Logo (đã xử lý từ `public/images/main-logo.png`)

| File | Mô tả |
|---|---|
| `public/images/brand/logo-icon.png` | Biểu tượng (cơ thể + 3 huyệt), nền trong suốt – dùng trên nền sáng |
| `public/images/brand/logo-icon-light.png` | Biểu tượng màu kem + chấm vàng đồng – dùng trên nền xanh trầm |
| `public/images/brand/logo-full.png` / `logo-full-light.png` | Logo đầy đủ (kèm chữ), nền trong suốt |
| `app/icon.png`, `app/apple-icon.png` | Favicon / icon thiết bị |

## Ảnh nội dung (đang dùng) – `public/images/photos/`

Chọn từ 2 thư mục người dùng cung cấp: `public/images/Ảnh/` (ảnh khách) và `public/images/library/` (ảnh bổ sung lấy trên mạng, theo ghi chú sale "ảnh lấy thêm trên mạng").
Đổi ảnh: sửa `src` / `position` trong `images` của `lib/site-config.ts` (không sửa component).

| Key | File | Lấy từ | Dùng ở |
|---|---|---|---|
| `storefront` | `photos/storefront.webp` | `Ảnh/881929629_…_n.webp` (ảnh khách) | Giới thiệu, Đặt lịch (thumbnail), Thư viện |
| `handsFoot` | `photos/hands-foot.jpg` | `library/2dfe1651….jpg` | Hero (khung vòm) |
| `backPress` | `photos/back-press.jpg` | `library/199bb01d….jpg` | Hero (ảnh ghép chồng) |
| `footReflex` | `photos/foot-hands.jpg` | `library/ab3c7d77….jpg` | USP thẻ 1, Thư viện |
| `oilCare` | `photos/oil-care.jpg` | `library/5f0c16f6….jpg` | USP thẻ 2 |
| `shoulderNeck` | `photos/shoulder-neck.jpg` | `library/f6334826….jpg` | Dịch vụ 1 |
| `cupping` | `photos/cupping.jpg` | `library/d5842cc3….jpg` | Dịch vụ 2, Thư viện |
| `calf` | `photos/calf.jpg` | `library/1e6cd9a4….jpg` | Dịch vụ 3, Thư viện |
| `hotStone` | `photos/hot-stone.jpg` | `library/996baa7c….jpg` | Thư viện |
| `herbal` | `photos/herbal-stones.jpg` | `library/ce0afb23….jpg` | Thư viện |

### Ảnh KHÔNG dùng (và lý do)

| File | Lý do |
|---|---|
| `Ảnh/884820642…`, `Ảnh/891288821…`, `Ảnh/892207372…`, `Ảnh/888600348…` | Biển hiệu / xe mang thương hiệu khác ("711 Hồng Hà – Trạm bảo dưỡng cơ thể") → cần sale xác nhận có phải cùng cơ sở |
| `Ảnh/890293115…` | Trùng với ảnh mặt tiền đang dùng |
| `Ảnh/886630204…` | Ảnh chụp màn hình ban đêm, có nút điều hướng video đè lên, chất lượng thấp |
| `library/201c01f7….jpg` | Có chữ "MASSAGE" đè trên ảnh |
| `library/3dd7c6c9…`, `5335b4b7…`, `7125b29b…`, `bb0e5629…`, `ed787bbf….jpg` | Lộ rõ khuôn mặt người – không dùng làm "nhân viên/khách của tiệm" (AGENTS.md mục 4) |

## Nguồn & giấy phép ảnh lấy từ internet

| File | Nguồn | Giấy phép |
|---|---|---|
| Các ảnh từ `library/` ở trên | Người dùng cung cấp – **chưa rõ nguồn** | **TODO(SALE): xác minh giấy phép dùng thương mại trước khi go-live**, hoặc thay bằng ảnh khách tự chụp |
