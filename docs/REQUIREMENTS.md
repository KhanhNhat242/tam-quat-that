# TÀI LIỆU YÊU CẦU – WEBSITE DEMO "TẨM QUẤT THẬT"

> Nguồn: **Phiếu Dev 58 – TẨM QUẤT THẬT** (file `tam-quat-that.pdf`, sale ghi).
> Đây là **nguồn sự thật duy nhất (single source of truth)** cho dự án. Mọi tính năng, nội dung, thay đổi đều phải bám theo tài liệu này. Khi có yêu cầu mới → cập nhật tài liệu này trước (mục 11 – Nhật ký thay đổi), rồi mới code.

---

## 1. Thông tin phiếu

| Trường | Giá trị |
|---|---|
| STT phiếu | 58 |
| Ngày giao hồ sơ | 06/11/2026 |
| Sale phụ trách | Minh Toàn |
| Mã DN (file sale) | DN0146 |
| Dev phụ trách | _(chưa điền – dev tự chọn trên phiếu)_ |
| Trạng thái demo | _(chưa điền)_ |
| Link demo | _(chưa có)_ |
| Trạng thái gửi sale | _(chưa điền)_ – khi chọn **"Xong – chờ sale gửi"** thì phiếu tự đóng |
| Ưu tiên (GĐ chọn) | _(trống)_ |
| Hạn giao demo | _(trống)_ |
| Ngày gửi khách | _(trống)_ |
| Phản hồi của khách | _(trống)_ |
| Nhắc | **SALE BỔ SUNG HỒ SƠ** (hồ sơ còn thiếu – xem mục 9) |

**Việc dev cần làm trên phiếu:** điền 3 ô vàng – *Dev phụ trách*, *Trạng thái demo*, *Link demo* (và *Trạng thái gửi sale* khi xong).

---

## 2. Thông tin doanh nghiệp

| Trường | Giá trị | Ghi chú |
|---|---|---|
| Tên doanh nghiệp | **TẨM QUẤT THẬT** | Tên hiển thị: "Tẩm Quất Thật" |
| Tên trên Google Maps | **Tẩm quất thật (Tẩm quất người khiếm thị)** | Giải mã từ link Maps |
| Ngành | Spa / Thẩm mỹ / Làm đẹp | |
| Tỉnh / TP | Hà Nội | |
| Người liên hệ | **Ngọc** (hotline đặt lịch) | Nội dung khách cung cấp 11/11/2026 |
| SĐT / Zalo (bắt buộc) | **0989.588.030** (hotline đặt lịch) | Zalo chưa xác nhận |
| Facebook Page | _(thiếu)_ | |
| Website hiện tại | _(không có)_ | |
| Khách đồng ý xem demo? (bắt buộc) | _(chưa điền)_ | |
| Địa chỉ chi tiết | **711 Hồng Hà (gần Chương Dương Độ), Q. Hoàn Kiếm, Hà Nội** | Khách cung cấp 11/11/2026 |
| Giờ mở cửa | _(không có trong phiếu)_ | Có thể nằm trong tư liệu Drive |

### Google Maps
- Link gốc: https://www.google.com/maps/place/T%E1%BA%A9m+qu%E1%BA%A5t+th%E1%BA%ADt+(T%E1%BA%A9m+qu%E1%BA%A5t+ng%C6%B0%E1%BB%9Di+khi%E1%BA%BFm+th%E1%BB%8B)/@21.0303889,105.8547729,1626m/data=!3m1!1e3!4m6!3m5!1s0x3135ab0037fe6ba5:0x2c54cb7bc8039aa1!8m2!3d21.0303889!4d105.8573478!16s%2Fg%2F11wngfrq_v?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D
- Toạ độ ghim (dùng cho embed / JSON-LD): **lat 21.0303889, lng 105.8573478**
- Place ID (feature id): `0x3135ab0037fe6ba5:0x2c54cb7bc8039aa1`
- KG id: `/g/11wngfrq_v`

### Tư liệu (Google Drive)
- Logo **và** ảnh/tư liệu (cùng một thư mục): https://drive.google.com/drive/u/0/folders/1rZTqAus9ZKS8mnOwi6pkPbl3VSHuBw30
- Trong repo hiện chỉ có `public/images/temp-logo.png` (logo tạm, 512×512) → thay bằng logo thật từ Drive khi tải về.

---

## 3. Mục tiêu website

- **Mục tiêu:** Giới thiệu công ty / dịch vụ.
- **Hình thức:** **Landing Page một trang** (one-page, điều hướng bằng anchor).
- **Mục tiêu chuyển đổi chính:** khách **gọi điện** / **đặt lịch** (tại cơ sở hoặc tại nhà).
- **Ngôn ngữ:** phiếu để trống → mặc định **tiếng Việt** (`lang="vi"`). Không làm đa ngôn ngữ nếu chưa được yêu cầu.

---

## 4. Sản phẩm / dịch vụ chính

| # | Dịch vụ | Chi tiết theo phiếu |
|---|---|---|
| 1 | **Tẩm quất – bấm huyệt Đông y** | Các gói **60 / 90 / 120 phút** |
| 2 | **Cạo gió – giác hơi** | |
| 3 | **Tẩm quất tại nhà theo yêu cầu** | Phục vụ khách có nhu cầu tại nhà |

- **Giá (khách cung cấp 11/11/2026):**

| Dịch vụ | Giá |
|---|---|
| Tẩm quất – Bấm huyệt Đông y | 150.000đ / 60 phút · 225.000đ / 90 phút · 300.000đ / 120 phút |
| Cạo gió – Giác hơi bài phong hàn | 40.000đ / lượt |
| Tẩm quất tại nhà (theo yêu cầu) | 200.000đ / 60 phút (chưa gồm phí di chuyển) |

- **Thương hiệu đầy đủ:** "Tẩm Quất Thật – 711 Hồng Hà". **Slogan:** "Chạm đúng điểm đau – Cảm nhận sự chữa lành". **Khẩu hiệu phụ:** "15 năm chắc tay nghề – Trọn vẹn tâm y".

---

## 5. Khách hàng mục tiêu

- Người dân và khách làm việc tại Hà Nội.
- Người thường xuyên mệt mỏi, căng cơ, muốn thư giãn và chăm sóc sức khỏe.
- Khách có nhu cầu tẩm quất tại nhà.

→ Hệ quả thiết kế: **ưu tiên mobile** (khách tìm trên điện thoại), nút **gọi điện luôn trong tầm tay**, nội dung ngắn gọn, dễ đọc, chữ đủ lớn (có cả khách lớn tuổi).

---

## 6. Điểm mạnh / khác biệt (USP)

Do **khách cung cấp**:
1. **15 năm** kinh nghiệm hoạt động.
2. Đội ngũ **kỹ thuật viên khiếm thị**.
3. **Hơn 10** nhân viên.
4. Đón khoảng **80–100 lượt khách/ngày**.
5. Chú trọng **kỹ năng xúc giác** và **thái độ phục vụ**.

> ⚠️ **Phiếu ghi rõ: "Các số liệu và chứng chỉ cần xác minh trước khi công bố chính thức."**
> - Bản demo được phép hiển thị các số liệu trên, nhưng mọi số liệu phải nằm trong 1 file cấu hình và gắn cờ `verified: false`.
> - **Không thêm** chứng chỉ, giải thưởng, số liệu nào khác ngoài danh sách trên.

---

## 7. Phong cách thiết kế

- **Màu chủ đạo:** xanh lá trầm – trắng kem – nâu gỗ, **điểm nhấn vàng đồng**.
- **Phong cách:** Đông y truyền thống kết hợp hiện đại, **ấm cúng, tinh tế**.
- Website tham khảo khách thích: _(không có)_.

### Bảng màu đề xuất (design tokens – khai báo 1 lần trong `app/globals.css`)

| Token | Ý nghĩa | Mã đề xuất |
|---|---|---|
| `--color-primary` | Xanh lá trầm | `#2F4A3A` |
| `--color-primary-dark` | Xanh lá trầm đậm (nền footer/hero) | `#1F3328` |
| `--color-cream` | Trắng kem (nền chính) | `#F8F3E9` |
| `--color-wood` | Nâu gỗ | `#6B4A2F` |
| `--color-gold` | Vàng đồng (điểm nhấn, CTA phụ, đường kẻ) | `#B08D57` |
| `--color-ink` | Chữ chính | `#2B2620` |

Gợi ý font (phải có subset **vietnamese**): tiêu đề serif mang tính truyền thống (vd. *Lora*, *Playfair Display*, *Noto Serif*), nội dung sans dễ đọc (vd. *Be Vietnam Pro*, *Inter*). Hoạ tiết trang trí: lá thuốc, mây, vân gỗ, khung viền kiểu Á Đông – dùng nhẹ, không rối.

---

## 8. Chức năng cần có

| # | Chức năng | Trạng thái |
|---|---|---|
| F1 | Landing Page một trang | Bắt buộc |
| F2 | Danh sách dịch vụ **và** bảng giá | Bắt buộc |
| F3 | Thư viện ảnh / video (có xem phóng to – lightbox) | Bắt buộc |
| F4 | Phản hồi khách hàng | Bắt buộc |
| F5 | **Nút gọi điện** (cố định, luôn hiển thị trên mobile) | Bắt buộc |
| F6 | **Bản đồ Google Maps** (embed theo toạ độ ở mục 2) | Bắt buộc |
| F7 | **Liên hệ đặt lịch** (form: họ tên, SĐT, dịch vụ, thời gian mong muốn, tại cơ sở/tại nhà, ghi chú) | Bắt buộc |
| F8 | Nút **Zalo / Messenger** | ⏳ **Chờ xác nhận** – làm sẵn nhưng **tắt bằng cờ cấu hình**, chỉ bật khi khách xác nhận và có link |

Ngoài phạm vi (KHÔNG làm nếu chưa có yêu cầu mới): giỏ hàng, thanh toán online, đăng nhập/tài khoản, blog nhiều trang, đa ngôn ngữ, trang quản trị.

### Cấu trúc trang đề xuất (thứ tự section)
1. **Header** (sticky): logo, menu anchor, nút "Gọi ngay".
2. **Hero**: tên thương hiệu, câu giới thiệu ngắn, CTA *Gọi ngay* + *Đặt lịch*.
3. **Giới thiệu**: bài giới thiệu thương hiệu (từ tư liệu khách).
4. **Điểm khác biệt**: USP mục 6 (số liệu dạng counter).
5. **Dịch vụ**: 3 dịch vụ mục 4.
6. **Bảng giá**: gói 60/90/120 phút + các dịch vụ khác.
7. **Thư viện ảnh/video**.
8. **Phản hồi khách hàng**.
9. **Đặt lịch / Liên hệ**: form + SĐT + giờ mở cửa + địa chỉ.
10. **Bản đồ**.
11. **Footer**: thông tin liên hệ, link Maps, (Facebook nếu có).
12. **Nút nổi**: Gọi điện (luôn bật), Zalo/Messenger (theo cờ F8).

---

## 9. Nội dung sẵn có & thông tin còn thiếu

**Khách đã có (cần lấy từ Drive / sale):** bài giới thiệu thương hiệu, bảng giá, danh sách dịch vụ, thông tin liên hệ, một số ảnh thực tế.

**Lưu ý từ sale:** *"ảnh lấy thêm trên mạng nhe"* → ảnh thực tế của khách là **ưu tiên số 1**; được phép **bổ sung ảnh từ internet** khi thiếu, với điều kiện ở mục quy tắc ảnh trong `AGENTS.md`.

**Còn thiếu – phiếu có nhắc "SALE BỔ SUNG HỒ SƠ":**
- [x] SĐT: 0989.588.030 (Zalo chưa xác nhận)
- [x] Người liên hệ: Ngọc
- [ ] Khách đồng ý xem demo? (bắt buộc)
- [ ] Link Facebook Page
- [ ] Xác nhận dùng Zalo / Messenger + link
- [x] Địa chỉ: 711 Hồng Hà · [ ] Giờ mở cửa
- [x] Giá cụ thể từng gói
- [ ] Xác minh số liệu USP (mục 6)
- [ ] Hạn giao demo, mức ưu tiên

Trong lúc chờ: dùng placeholder tập trung tại một file cấu hình, **không rải rác trong component**.

---

## 10. Tiêu chí nghiệm thu bản demo

- [ ] Đủ toàn bộ chức năng F1–F7; F8 có sẵn nhưng tắt theo cờ.
- [ ] Đúng bảng màu & phong cách mục 7; hiển thị tốt từ 360px đến desktop.
- [ ] Nút gọi điện hoạt động (`tel:`) và luôn thấy được trên mobile.
- [ ] Bản đồ hiển thị đúng vị trí (21.0303889, 105.8573478).
- [ ] Toàn bộ nội dung tiếng Việt có dấu, không lỗi font.
- [ ] Không có số liệu / chứng chỉ / giá / đánh giá bịa đặt ngoài phạm vi mục 4, 6.
- [ ] `npm run lint` và `npm run build` chạy không lỗi.
- [ ] Đã điền 3 ô vàng trên phiếu (Dev phụ trách, Trạng thái demo, Link demo).

---

## 11. Nhật ký thay đổi yêu cầu

| Ngày | Người yêu cầu | Nội dung thay đổi | Ảnh hưởng |
|---|---|---|---|
| 10/11/2026 | — | Khởi tạo tài liệu từ Phiếu Dev 58 | — |
| 10/11/2026 | Dev | Triển khai landing page theo brief thiết kế "Warm Oriental Wellness" (mục 12) | Toàn trang |
| 10/11/2026 | Người dùng | Thay toàn bộ ảnh minh hoạ tạm bằng ảnh thật trong `public/images` | Mọi section có ảnh |
| 11/11/2026 | Người dùng | Áp dụng hệ style mục 13 (Accessible & Ethical, Nature Distilled, Academia chọn lọc, Storytelling); USP còn 3 số liệu tĩnh; giá ghi "Liên hệ"; gỡ ảnh người lấy từ mạng | Toàn trang |
| 11/11/2026 | Người dùng | Cập nhật nội dung theo bài giới thiệu của cơ sở (mục 14): hotline, địa chỉ, bảng giá, slogan, lý do chọn | Toàn bộ text |
| 11/11/2026 | Người dùng | Hero đổi bố cục theo ảnh mẫu (chữ trái, ảnh lớn tràn phải với cạnh cong); ảnh phải = `public/images/hero-img.jpg` do người dùng chỉ định – **ngoại lệ** của quy tắc "không ảnh người từ mạng" (mục 13), cần xác minh giấy phép & cân nhắc thay ảnh thật | Hero |
| 11/11/2026 | Người dùng | Header mobile: mở menu → khoá cuộn trang (mở khoá khi đóng / Esc / chọn mục / chuyển sang desktop) | Header |
| 11/11/2026 | Người dùng | Dịch vụ: rút ngắn quãng cuộn của scroller (bước 420px, sân khấu 540px) → section thấp hơn trên desktop | Dịch vụ |
| 11/11/2026 | Người dùng | Hero trên desktop cao theo màn hình nhưng giới hạn 720–900px (màn lớn không còn kéo Hero cao theo) | Hero |
| 11/11/2026 | Người dùng | Hero: ảnh phải đổi sang `hero3-img.webp` (bản nét hơn cùng cảnh), phóng 2× Lanczos + làm nét, quality 90, `sizes=100vw` để không bị phóng mờ | Hero |
| 11/11/2026 | Người dùng | Hero: ảnh phải đổi sang `hero2-img.jpg` (trùng library/ed787bbf → ô Thư viện đổi sang ảnh mặt tiền ban ngày để không lặp). Đáy Hero cắt theo đường cong (mask), Giới thiệu kéo lên dưới đường cong → bỏ dải kem thừa giữa 2 section | Hero, Giới thiệu, Thư viện |
| 11/11/2026 | Người dùng | Giới thiệu: đổi ảnh bên trái sang `public/images/about-img.png` (→ `photos/about-img.webp`) | Giới thiệu |
| 11/11/2026 | Người dùng | Giới thiệu (lần 3): bố cục theo ảnh mẫu – ảnh lớn tràn mép trái hoà dần sang nền kem bằng gradient, nội dung bên phải (nhãn, tiêu đề 2 độ đậm, đoạn văn, dòng thông tin, nút, hộp hotline bo tròn) | Giới thiệu |
| 11/11/2026 | Người dùng | Không lặp ảnh giữa các section: mỗi ảnh chỉ dùng 1 lần; bổ sung ảnh từ `public/images/library` (người dùng chỉ định – ngoại lệ mục 13, chỉ ảnh không lộ mặt kỹ thuật viên); thẻ thông tin khu Đặt lịch dùng logo thay ảnh mặt tiền | Mọi section có ảnh |
| 11/11/2026 | Người dùng | Giới thiệu (lần 2): bố cục theo ảnh mẫu spa – trái: đoạn dẫn + ảnh khung viên thuốc (pill) trên nền vệt cọ màu nước, lá thuốc, huy hiệu tròn; phải: logo, tiêu đề lớn căn giữa, dòng nhấn trên vệt cọ, đoạn văn, địa chỉ góc dưới | Giới thiệu |
| 11/11/2026 | Người dùng | Bảng giá – 2 dịch vụ lẻ thành ô ảnh accordion ngang (ServicePanel): mặc định giá + tiêu đề trên ảnh; hover/focus → ô giãn & hiện chi tiết; thiết bị không hover → luôn hiện chi tiết | Bảng giá |
| 11/11/2026 | Người dùng | Tiêu đề Hero dùng hiệu ứng WarpText (React Bits, thư viện `ogl` – WebGL): chữ uốn cong theo chuột, gợn sóng khi nhấn; giữ thẻ `<h1>` chữ thật cho trình đọc màn hình/SEO; giảm chuyển động → chữ đứng yên | Hero |
| 11/11/2026 | Người dùng | Hero cao đúng 1 màn hình; header cố định: trong phạm vi Hero nền trùng màu Hero, nav dồn trái, ẩn nút "Gọi ngay" (nút gọi nổi vẫn luôn hiện); cuộn qua Hero → nền kem, nav ra giữa, hiện nút | Header, Hero |
| 11/11/2026 | Người dùng | Dịch vụ: "scroller" chồng thẻ 3D chạy theo cuộn (sticky) trên desktop, theo code mẫu người dùng gửi; mobile / giảm chuyển động / SSR = danh sách tĩnh đầy đủ. Ngoại lệ: chuyển động gắn với cuộn | Dịch vụ |
| 11/11/2026 | Người dùng | Giới thiệu: bố cục theo ảnh mẫu – cụm ảnh tròn (1 lớn tràn mép trái + 1 nhỏ chồng góc dưới), tiêu đề serif viết hoa 2 dòng bên phải; giữ nền kem | Giới thiệu |
| 11/11/2026 | Người dùng | Testimonials: 3 card trên 1 hàng theo ảnh mẫu (avatar trong góc khuyết, ngoặc kép lớn, khung lệch phía sau) + hiệu ứng nổi bồng bềnh như trên mặt nước (tắt khi giảm chuyển động). Không có sao & tên người (nội dung mẫu – AGENTS.md mục 1) | Phản hồi |
| 11/11/2026 | Người dùng | 3 thẻ giá 60/90/120 phút dùng hiệu ứng lật (FlipCard – React Bits, thư viện `motion`): mặt trước ảnh minh hoạ + tiêu đề đè lên ảnh, nhấn để lật xem chi tiết | Bảng giá |

---

## 12. Brief thiết kế đã áp dụng (10/11/2026) – "Đông Y Hiện Đại & Chữa Lành"

**Tinh thần:** mộc mạc, tin cậy của y học cổ truyền + bố cục thoáng, **chữ to rõ** (khách mỏi mắt, lớn tuổi); điểm nhấn cảm xúc là "đôi bàn tay xúc giác".

**Nhận diện:** logo tách nền (`public/images/brand/`); hoạ tiết **3 chấm vàng đồng nối liền** (3 huyệt dọc sống lưng trong logo) dùng làm divider & dấu đầu dòng.

**Nhịp màu nền (không để cả trang một nền kem):**

| Section | Nền |
|---|---|
| Hero | Xanh trầm đậm `#1F3328` |
| Giới thiệu | Kem `#F8F3E9` |
| Điểm khác biệt (USP) | Xanh trầm `#2F4A3A` (bo cong trên/dưới) |
| Dịch vụ | Kem `#F8F3E9` |
| Bảng giá | Kem gỗ `#EFE7DA` |
| Thư viện ảnh | Kem `#F8F3E9` |
| Phản hồi | Kem gỗ `#EFE7DA` |
| Đặt lịch + Bản đồ | Kem `#F8F3E9` |
| Footer | Xanh trầm đậm `#1F3328` (bo cong trên) |

**Khoảng cách & chữ:**

| Hạng mục | Desktop (≥1280) | Mobile (360–768) |
|---|---|---|
| Padding dọc section | 96–112px | 64–72px |
| Tiêu đề → nội dung | 48–56px | 32–40px |
| Gap giữa thẻ | 28–32px | 20–24px |
| Chữ nội dung | 17–18px, lh 1.65, rộng ≤ 620px | 16–17px, lh 1.6, lề 20px |
| Định lượng | Tiêu đề 5–9 từ · mô tả dẫn 18–28 từ · thẻ 15–25 từ | |

**Bắt buộc về chữ:** không để **1 chữ (âm tiết) rớt xuống dòng cuối** ở mọi khối chữ trên desktop, tablet, mobile (xem AGENTS.md mục 3).

**Hero:** vừa đúng 1 màn hình (trừ header); 2 cột desktop, xếp chồng mobile; khung vòm viền vàng đồng + ảnh ghép chồng; CTA "Gọi ngay" (vàng đồng) + "Đặt lịch hẹn" (viền sáng).

**Điều chỉnh so với brief để tuân thủ mục 1 của AGENTS.md (trung thực nội dung):**
- "giải tỏa cơn đau mỏi **tận gốc**" → "giải tỏa **đúng chỗ** đau mỏi" (tránh tuyên bố điều trị).
- "10+ **Kỹ Thuật Viên**" → "10+ **Nhân viên**" (phiếu ghi "hơn 10 nhân viên").
- Giá: hiển thị "Liên hệ báo giá" cho tới khi có bảng giá thật.
- Phản hồi khách hàng: nội dung mẫu (`isSample: true`), chỉ ghi nhóm khách, không tên/không số sao.
- "Phổ biến nhất" (gói 90 phút), "100% Tận tâm", nội dung đào tạo KTV: giữ theo brief nhưng gắn `TODO(SALE)` cần xác nhận.

**Ảnh:** đã thay toàn bộ ảnh minh hoạ tạm bằng ảnh thật trong `public/images/photos/` (danh mục, nguồn và ảnh bị loại: `docs/ASSETS.md`).

---

## 13. Hệ style áp dụng (11/11/2026) – thay thế các điểm trái ngược ở mục 12

| Style | Lấy gì | Bỏ gì |
|---|---|---|
| **Accessible & Ethical** (nền tảng bắt buộc) | Tương phản mục tiêu **7:1**; chữ **≥ 16px**; viền focus **3–4px**; vùng bấm **≥ 44×44px**; skip link; thân thiện trình đọc màn hình; giọng văn đặt tay nghề lên trước | — |
| **Nature Distilled** | Ấm, gỗ, chất liệu hữu cơ, bóng mềm, easing ease-out | Terracotta, cam đất, lớp grain đè lên ảnh |
| **Academia** (chọn lọc) | Khung ảnh **vòm**; CTA **đồng thau**; **drop cap serif** cho bài giới thiệu | Nền gỗ gụ tối, vignette nặng, ảnh sepia, đỏ crimson, font Cinzel |
| **Storytelling-Driven** | Tiêu đề serif; **hiện dần khi cuộn 600ms**; khoảng cách lớn giữa các khu | Parallax |
| Organic Biophilic (hoạ tiết) | Đường SVG lá thuốc & mây ở viền khu vực, độ mờ thấp | Xanh trời, xanh rừng tươi, bo góc 24px khắp nơi |
| Hero-Centric + Conversion | Chữ hero đặt trên **nền màu đặc**; CTA "Gọi ngay" lớn; ô nhập form cao **48px**; "Tại cơ sở / Tại nhà" là 2 ô lớn | Chữ phủ lên ảnh |
| Social Proof (USP) | Khối số liệu **tĩnh**: 15 năm · 10+ nhân viên · 80–100 khách/ngày | **Không** hiệu ứng đếm số (số chưa xác minh; trình đọc màn hình đọc sai) |
| Bảng giá (cập nhật 11/11) | **Thẻ lật** (FlipCard): mặt trước = ảnh minh hoạ + tiêu đề trên dải nền màu đặc (giữ tương phản); nhấn / Enter / Space để lật xem chi tiết; nút "Đặt gói này" đặt **ngoài** thẻ; giảm chuyển động → đổi mặt bằng mờ dần; chưa có giá → "**Liên hệ**" | Nút bấm lồng trong thẻ lật, tắt viền focus |

### Quy tắc màu chữ (đã đo tương phản)

| Cặp màu | Tỉ lệ | Dùng |
|---|---|---|
| Ink `#2B2620` trên kem | 13.56:1 | Chữ chính |
| Ink-soft `#4A4239` trên kem / kem gỗ | 8.92 / 8.04:1 | Chữ phụ |
| Wood-deep `#5A3D26` trên kem / kem gỗ | 8.91 / 8.03:1 | Nhãn mục (eyebrow), giá |
| Kem trên xanh trầm / xanh đậm | 8.78 / 12.15:1 | Chữ trên nền tối |
| Cream-muted `#ECE4D6` trên xanh trầm | 7.70:1 | Chữ phụ trên nền tối (thay cho chữ kem mờ) |
| Vàng sáng `#D4B67A` trên xanh đậm | 6.89:1 | Chữ nhấn trên nền tối (tiêu đề, số lớn) |
| Ink trên nút đồng thau `#D4B67A` | 7.69:1 | CTA đồng thau (hero, gói nổi bật) |
| Trắng trên xanh trầm | 9.72:1 | Nút "Gọi ngay" trên nền sáng |
| ~~Vàng đồng `#B08D57` trên kem~~ | 2.80:1 ✗ | **Chỉ** dùng cho đường kẻ, icon, hoạ tiết – không làm màu chữ |

### Ảnh
- Ảnh lấy từ mạng **chỉ** là ảnh không gian & chất liệu (lá thuốc, đá nóng, khăn, phòng trị liệu, dụng cụ). **Không** dùng ảnh người từ mạng (kể cả cận cảnh bàn tay đang xoa bóp), vì khách sẽ hiểu đó là kỹ thuật viên thật của cơ sở.
- Ảnh người chỉ dùng khi là **ảnh thật của cơ sở** do khách cung cấp và đã đồng ý.
- Khu Dịch vụ & thẻ giá trị USP dùng **icon nét** trong khung vòm thay cho ảnh.

---

## 14. Nội dung từ bài giới thiệu của cơ sở (11/11/2026) & điều chỉnh theo quy tắc

Nguồn: bài giới thiệu "KHI THỊ GIÁC KHÉP LẠI, ĐÔI TAY TRỞ THÀNH NHỊP CẦU NĂNG LƯỢNG CHỮA LÀNH" người dùng gửi.

**Dùng nguyên văn / gần nguyên văn:** slogan, khẩu hiệu "15 năm chắc tay nghề – Trọn vẹn tâm y", bảng giá, hotline (Ngọc), địa chỉ, "80–100 lượt khách mỗi ngày", "trên 10 nhân viên", "100% kỹ thuật viên khiếm thị (Nam/Nữ)", đoạn mở đầu về nhịp sống đô thị & xúc giác tôi luyện qua năm tháng.

**Viết lại để tuân thủ AGENTS.md mục 1 & REQUIREMENTS mục 13** (người dùng có thể yêu cầu dùng nguyên văn):

| Câu gốc | Đã đổi thành | Lý do |
|---|---|---|
| "chữa đúng bệnh, phục hồi sâu từ gốc" | "chạm đúng điểm đau, đặt lực ấn chuẩn xác" | Tuyên bố điều trị bệnh |
| "Giải tỏa đau nhức xương khớp" | "giúp giảm cảm giác đau mỏi cơ, xương khớp" | Tuyên bố điều trị |
| "Đánh bay tà khí, thanh lọc cơ thể" | "làm ấm cơ thể, giải cảm, lưu thông khí huyết" | Tuyên bố sức khoẻ khó kiểm chứng |
| "Nhiều năm sống trong bóng tối đã ban tặng… đôi bàn tay đầy thấu cảm" | "Kỹ năng xúc giác được tôi luyện qua năm tháng giúp các kỹ thuật viên khiếm thị…" | Lối kể khơi lòng thương – đặt tay nghề lên trước |
| Tiêu đề "Khi thị giác khép lại, đôi tay trở thành nhịp cầu năng lượng chữa lành" | "Đôi tay thấu cảm, chạm đúng điểm đau" | Như trên |

**Cần xác minh trước khi công bố chính thức (`verified: false`, `TODO(SALE)`):** chứng chỉ hành nghề YHCT của kỹ thuật viên, 15 năm, trên 10 nhân viên, 80–100 khách/ngày, 100% KTV khiếm thị.

**Ghi nhận:** biển hiệu/xe "711 Hồng Hà – Trạm bảo dưỡng cơ thể" trong thư mục ảnh có thể là của chính cơ sở → chờ sale xác nhận trước khi dùng.
