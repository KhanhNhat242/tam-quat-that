/**
 * NGUỒN DỮ LIỆU DUY NHẤT của website (xem AGENTS.md mục 2 & docs/REQUIREMENTS.md).
 * Component chỉ đọc từ đây – không hard-code nội dung trong component.
 * Nội dung theo bài giới thiệu của cơ sở (REQUIREMENTS mục 14), đã điều chỉnh theo quy tắc trung thực (AGENTS.md mục 1).
 * Mọi chỗ còn thiếu / cần xác minh được đánh dấu `TODO(SALE)`.
 *
 * Quy ước `_`: nối âm tiết của một từ ghép để không bị ngắt dòng giữa từ (xem lib/text.ts → nb()).
 */

/* -------------------------------------------------------------------------- */
/* Thông tin doanh nghiệp                                                      */
/* -------------------------------------------------------------------------- */
export const business = {
  name: 'Tẩm Quất Thật',
  /** Thương hiệu đầy đủ theo bài giới thiệu của cơ sở */
  brand: 'Tẩm Quất Thật – 711 Hồng Hà',
  fullName: 'Tẩm Quất Thật – 711 Hồng Hà (Tẩm quất người khiếm thị)',
  tagline: 'Tẩm quất người khiếm thị',
  slogan: 'Chạm đúng điểm_đau – Cảm_nhận sự chữa_lành',
  motto: '15 năm chắc tay nghề – Trọn vẹn tâm y',
  city: 'Hà Nội',
  district: 'Hoàn Kiếm',
  street: '711 Hồng Hà',
  /** Hotline đặt lịch (khách cung cấp 11/11/2026). Zalo chưa xác nhận. */
  phone: '0989.588.030',
  contactName: 'Ngọc',
  /** Hiển thị qua nb() – `_` giữ cụm địa danh không bị ngắt dòng */
  address: '711 Hồng_Hà (gần Chương_Dương_Độ), Q._Hoàn_Kiếm, Hà_Nội',
  // TODO(SALE): bổ sung giờ mở cửa.
  openingHours: '',
  // TODO(SALE): bổ sung link Facebook Page nếu có.
  facebook: '',
  geo: { lat: 21.0303889, lng: 105.8573478 },
  mapsUrl:
    'https://www.google.com/maps/place/T%E1%BA%A9m+qu%E1%BA%A5t+th%E1%BA%ADt+(T%E1%BA%A9m+qu%E1%BA%A5t+ng%C6%B0%E1%BB%9Di+khi%E1%BA%BFm+th%E1%BB%8B)/@21.0303889,105.8547729,1626m/data=!3m1!1e3!4m6!3m5!1s0x3135ab0037fe6ba5:0x2c54cb7bc8039aa1!8m2!3d21.0303889!4d105.8573478!16s%2Fg%2F11wngfrq_v?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbedUrl: 'https://www.google.com/maps?q=21.0303889,105.8573478&z=17&hl=vi&output=embed',
  priceRange: '40.000đ – 300.000đ',
  /** Hiển thị khi chưa có dữ liệu thật */
  pendingText: 'Đang cập nhật',
} as const

/* -------------------------------------------------------------------------- */
/* Cờ tính năng chờ xác nhận (F8)                                              */
/* -------------------------------------------------------------------------- */
export const features = {
  // TODO(SALE): chỉ bật khi khách xác nhận dùng Zalo/Messenger và có link.
  enableZalo: false,
  enableMessenger: false,
  zaloUrl: '', // vd. https://zalo.me/0989588030
  messengerUrl: '', // vd. https://m.me/<page>
} as const

/* -------------------------------------------------------------------------- */
/* Hình ảnh                                                                    */
/* Ảnh thật trong public/images/photos/ (danh mục & nguồn: docs/ASSETS.md).  */
/* `position` = object-position: giữ đúng tiêu điểm khi ảnh bị cắt theo khung. */
/* -------------------------------------------------------------------------- */
export type SiteImage = { src: string; alt: string; width: number; height: number; position?: string }

/**
 * Chỉ ảnh thật của cơ sở + ảnh KHÔNG GIAN / CHẤT LIỆU từ mạng (không ảnh người) – REQUIREMENTS mục 13.
 */
export const images = {
  // Ảnh khách gửi – mặt tiền, biển xanh chữ vàng đồng, số 711
  storefront: { src: '/images/photos/storefront.webp', alt: 'Mặt tiền Tẩm Quất Thật tại 711 Hồng Hà với biển hiệu xanh chữ vàng đồng', width: 480, height: 720, position: '50% 58%' },
  // Ảnh khách gửi – mặt tiền buổi tối với biển "Người mù tẩm quất thật 711"
  storefrontNight: { src: '/images/photos/storefront-night.webp', alt: 'Mặt tiền Tẩm Quất Thật buổi tối với biển hiệu sáng đèn', width: 660, height: 780, position: '50% 45%' },
  /**
   * NGOẠI LỆ do người dùng chỉ định (11/11/2026): ảnh người từ mạng cho Hero (REQUIREMENTS mục 11).
   * TODO(SALE): xác minh giấy phép; nên thay bằng ảnh thật tại cơ sở (ảnh gốc chỉ 408×612 px).
   */
  heroImg: { src: '/images/hero-img.jpg', alt: 'Khách thư giãn trong liệu trình xoa bóp vai lưng', width: 408, height: 612, position: '55% 45%' },
  // Ảnh chất liệu từ mạng (TODO(SALE): xác minh giấy phép trước khi go-live – docs/ASSETS.md)
  cupping: { src: '/images/photos/cupping.jpg', alt: 'Bộ ống giác hơi, lọ cao đỏ và nến ấm trên giường trị liệu', width: 736, height: 981, position: '50% 72%' },
  // Đã cắt bỏ phần nền có người (chỉ giữ chất liệu) – REQUIREMENTS mục 13
  herbal: { src: '/images/photos/herbal-stones.webp', alt: 'Đá nóng, bình gốm và que hương thảo mộc trên bàn trị liệu', width: 626, height: 519, position: '50% 50%' },
  /**
   * Ảnh từ public/images/library do người dùng chỉ định (11/11/2026) – ngoại lệ REQUIREMENTS mục 13.
   * Chỉ chọn ảnh KHÔNG lộ mặt kỹ thuật viên. TODO(SALE): xác minh giấy phép; ưu tiên thay bằng ảnh thật tại cơ sở.
   */
  // Người dùng chỉ định cho phần Giới thiệu (11/11/2026) – TODO(SALE): xác minh nguồn/giấy phép
  aboutImg: { src: '/images/photos/about-img.webp', alt: 'Đôi tay kỹ thuật viên xoa ấn dọc lưng', width: 1084, height: 1451, position: '45% 62%' },
  // Người dùng chỉ định cho Hero (11/11/2026) – cùng ảnh với library/ed787bbf. TODO(SALE): xác minh giấy phép
  /** Bản nét: hero3-img.webp phóng 2× (Lanczos + làm nét nhẹ) → 2048×1374 */
  hero3Img: { src: '/images/photos/hero3-img.webp', alt: 'Khách thư giãn khi được xoa bóp vai lưng bên thảo mộc và tinh dầu', width: 2048, height: 1374, position: '74% 50%' },
  hero2Img: { src: '/images/photos/hero2-img.webp', alt: 'Khách thư giãn khi được xoa bóp vai lưng bên thảo mộc và tinh dầu', width: 1200, height: 781, position: '74% 50%' },
  shoulderPress: { src: '/images/photos/shoulder-press.webp', alt: 'Day ấn huyệt vùng vai lưng', width: 712, height: 734, position: '50% 40%' },
  calfPress: { src: '/images/photos/calf-press.webp', alt: 'Bấm huyệt bắp chân', width: 735, height: 1103, position: '50% 45%' },
  backPress: { src: '/images/photos/back-press.webp', alt: 'Xoa bóp dọc sống lưng', width: 640, height: 640, position: '50% 88%' },
  footReflex: { src: '/images/photos/foot-reflex.webp', alt: 'Bấm huyệt bàn chân dưới ánh nến ấm', width: 1024, height: 1536, position: '50% 55%' },
  hotStone: { src: '/images/photos/hot-stone.webp', alt: 'Chườm đá nóng dọc sống lưng', width: 736, height: 917, position: '50% 60%' },
  warmOil: { src: '/images/photos/warm-oil.webp', alt: 'Tinh dầu ấm trước khi xoa bóp', width: 1014, height: 1014, position: '50% 45%' },
  footHands: { src: '/images/photos/foot-hands.webp', alt: 'Đôi tay day ấn huyệt bàn chân', width: 667, height: 1000, position: '50% 40%' },
  herbalSpa: { src: '/images/photos/herbal-spa.webp', alt: 'Khách thư giãn bên thảo mộc và tinh dầu', width: 1200, height: 781, position: '50% 50%' },
  neckPress: { src: '/images/photos/neck-press.webp', alt: 'Cận cảnh day ấn huyệt vùng gáy', width: 1081, height: 540, position: '50% 60%' },
} satisfies Record<string, SiteImage>

export const logo = {
  icon: { src: '/images/brand/logo-icon.png', width: 320, height: 335 },
  iconLight: { src: '/images/brand/logo-icon-light.png', width: 320, height: 335 },
} as const

/* -------------------------------------------------------------------------- */
/* Điều hướng                                                                  */
/* -------------------------------------------------------------------------- */
export const navItems = [
  { href: '#gioi-thieu', label: 'Giới thiệu' },
  { href: '#dich-vu', label: 'Dịch vụ' },
  { href: '#bang-gia', label: 'Bảng giá' },
  { href: '#dat-lich', label: 'Đặt lịch' },
] as const

/* -------------------------------------------------------------------------- */
/* Nội dung các section                                                        */
/* -------------------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Tẩm Quất Người Khiếm Thị · 711 Hồng_Hà',
  /** Slogan của cơ sở, tách theo cụm để xuống dòng đúng chỗ */
  titleLead: ['Chạm Đúng', 'Điểm Đau'],
  titleAccent: ['Cảm Nhận', 'Sự Chữa Lành'],
  description:
    'Giữa nhịp sống hối_hả chốn đô_thị, đôi bàn tay nhạy_bén của kỹ_thuật_viên khiếm thị giúp bạn xua tan mệt_mỏi, thư_giãn tại cơ_sở hoặc tại nhà.',
  primaryCta: 'Gọi ngay',
  secondaryCta: 'Đặt lịch hẹn',
  highlights: ['15 năm chắc tay nghề', 'Tại cơ sở & tại nhà', 'Hoàn Kiếm, Hà Nội'],
  /** Ảnh lớn bên phải (bố cục theo ảnh mẫu của người dùng) */
  image: 'hero3Img' as const,
} as const

export const about = {
  eyebrow: 'Câu Chuyện Của Chúng Tôi',
  // Tiêu đề gốc "Khi thị giác khép lại…" đã đổi theo REQUIREMENTS mục 14 (đặt tay nghề lên trước).
  title: 'Đôi Tay Thấu_Cảm, Chạm Đúng Điểm Đau',
  /** Tiêu đề 2 dòng theo cụm (dòng 2 là màu nhấn) */
  titleLead: ['Đôi Tay', 'Thấu Cảm'],
  titleAccent: ['Chạm Đúng', 'Điểm Đau'],
  paragraphs: 'Chỉ một cái chạm nhẹ, các kỹ_thuật_viên khiếm thị nhận ra từng thớ cơ đang bó chặt, từng huyệt đạo đang bế_tắc. Kết hợp tinh_hoa Y học cổ_truyền và tình yêu nghề tận_tụy, mỗi nhịp ấn huyệt giúp lưu_thông kinh_lạc, xua tan mệt_mỏi, ưu_phiền.',
  /** Ảnh lớn bên trái (người dùng chỉ định) */
  image: 'aboutImg' as const,
  /**
   * Desktop: căn từ gần đỉnh để không mất phần trên (đôi tay ở ~60% chiều cao vẫn trong khung).
   * Mobile: khung thấp → căn vào đôi tay để chúng không lẫn vào vùng chuyển màu dưới ảnh.
   */
  imagePosition: { mobile: '45% 58%', desktop: '45% 12%' },
  /** Dòng thông tin dưới đoạn văn (kiểu "tác giả / ngày" trong ảnh mẫu) */
  meta: ['Tẩm Quất Thật', '711 Hồng_Hà, Hoàn_Kiếm'],
  cta: 'Đặt lịch hẹn',
  hotlineLabel: 'Hotline đặt lịch',
  callCta: 'Gọi ngay',
  imageTag: '711 Hồng_Hà (gần Chương_Dương_Độ), Hoàn_Kiếm',
  signature: 'Tẩm Quất Thật · 711 Hồng_Hà',
} as const

/**
 * USP – số liệu do cơ sở cung cấp, CHƯA xác minh (REQUIREMENTS mục 6, 14).
 * Hiển thị TĨNH (không đếm số); `spoken` = cách trình đọc màn hình đọc.
 */
export const usp = {
  eyebrow: 'Vì Sao Chọn Chúng Tôi',
  title: '15 Năm Chắc Tay_Nghề – Trọn Vẹn Tâm Y',
  stats: [
    { display: '15', spoken: '15', unit: 'Năm', label: 'Uy tín bền vững tại quận Hoàn_Kiếm', verified: false },
    // Phiếu & bài giới thiệu ghi "trên 10 người" → giữ đúng là nhân viên.
    { display: '10+', spoken: 'Hơn 10', unit: 'Nhân viên', label: 'Đội ngũ tâm huyết, quy mô lớn', verified: false },
    { display: '80–100', spoken: 'Từ 80 đến 100', unit: 'Lượt khách mỗi ngày', label: 'Tin tưởng lựa chọn Tẩm Quất Thật', verified: false },
    { display: '100%', spoken: '100 phần trăm', unit: 'Kỹ thuật viên khiếm thị', label: 'Nam và nữ, tay nghề cao', verified: false },
  ],
  note: 'Số liệu do cơ sở cung cấp.',
  values: [
    {
      title: 'Tay nghề Y học cổ_truyền',
      // TODO(SALE): xác minh chứng chỉ hành nghề YHCT trước khi công bố chính thức.
      text: 'Kỹ_thuật_viên khiếm thị (nam/nữ) tay nghề cao, sở hữu chứng_chỉ hành nghề Y học cổ_truyền.',
      icon: 'leaf' as const,
    },
    {
      title: 'Xúc giác tinh tế',
      // Bỏ "chữa đúng bệnh, phục hồi sâu từ gốc" (tuyên bố điều trị – REQUIREMENTS mục 14).
      text: 'Chạm đúng điểm đau, cảm nhận từng thớ cơ đang bó chặt để đặt lực ấn chuẩn xác, vừa vặn.',
      icon: 'hand' as const,
    },
    {
      title: 'Uy tín 15_năm tại Hoàn_Kiếm',
      text: 'Đội ngũ trên 10 nhân viên tâm huyết, đón tiếp chu đáo tại 711 Hồng_Hà suốt 15 năm.',
      icon: 'heart' as const,
    },
  ],
} as const

export type ServiceId = 'tq60' | 'tq90' | 'tq120' | 'cao-gio' | 'tai-nha'

export const services = {
  title: 'Hệ Thống Dịch_Vụ Trị_Liệu Chuyên Sâu',
  description:
    'Ba liệu_pháp theo Y học cổ_truyền, phục vụ tại cơ_sở 711 Hồng_Hà hoặc tận nhà theo yêu_cầu của bạn.',
  cta: 'Chọn dịch vụ này',
  priceLink: 'Xem bảng giá',
  progressLabel: 'Chuyển tới dịch vụ',
  items: [
    {
      id: 'tq90' as ServiceId,
      name: 'Tẩm_quất – Bấm_huyệt Đông_y',
      tag: 'Từ 150.000đ',
      text: 'Day ấn huyệt đạo giúp giảm cảm giác đau mỏi cơ, xương khớp và đả thông kinh_lạc, cho cơ_thể nhẹ_nhõm, thư_thái.',
      icon: 'acupressure' as const,
      image: 'shoulderPress' as const,
      /** Thông tin nhanh (giá thật theo bài giới thiệu của cơ sở) */
      points: ['60 phút · 150.000đ', '90 phút · 225.000đ', '120 phút · 300.000đ'],
    },
    {
      id: 'cao-gio' as ServiceId,
      name: 'Cạo_gió – Giác_hơi bài phong_hàn',
      tag: '40.000đ / lượt',
      text: 'Phương_pháp dân_gian giúp làm ấm cơ_thể, giải cảm và lưu_thông khí huyết khi trái gió trở trời.',
      icon: 'cupping' as const,
      image: 'cupping' as const,
      points: ['40.000đ / lượt', 'Bài phong hàn – làm ấm cơ thể'],
    },
    {
      id: 'tai-nha' as ServiceId,
      name: 'Tẩm_quất tại_nhà theo yêu_cầu',
      tag: 'Từ 200.000đ',
      text: 'Kỹ_thuật_viên đến tận nơi theo lịch hẹn, để bạn thư_giãn trọn vẹn ngay trong không_gian quen thuộc.',
      icon: 'home' as const,
      image: 'backPress' as const,
      points: ['200.000đ / 60 phút', 'Chưa gồm phí di chuyển', 'Đặt trước qua hotline'],
    },
  ],
} as const

/** Bảng giá – theo bài giới thiệu của cơ sở (REQUIREMENTS mục 4). `price: null` → hiển thị "Liên hệ". */
export const pricing = {
  title: 'Bảng_Giá Dịch_Vụ Niêm_Yết Rõ_Ràng',
  description: 'Giá niêm yết theo thời lượng liệu trình tẩm_quất – bấm_huyệt Đông_y và các dịch_vụ lẻ.',
  priceFallback: 'Liên hệ',
  packageService: 'Tẩm_quất – Bấm_huyệt Đông_y',
  /**
   * Thẻ lật: mặt trước = ảnh minh hoạ (`image`) + tiêu đề; mặt sau = chi tiết.
   * Ảnh chỉ dùng ảnh thật / ảnh chất liệu (không ảnh người) – REQUIREMENTS mục 13.
   * TODO(SALE): xin ảnh thật phòng trị liệu để thay ảnh minh hoạ; xác nhận nội dung riêng của từng gói nếu có.
   */
  packages: [
    { id: 'tq60' as ServiceId, minutes: 60, price: '150.000đ' as string | null, featured: false, image: 'calfPress' as const },
    { id: 'tq90' as ServiceId, minutes: 90, price: '225.000đ' as string | null, featured: false, image: 'footReflex' as const },
    { id: 'tq120' as ServiceId, minutes: 120, price: '300.000đ' as string | null, featured: false, image: 'hotStone' as const },
  ],
  /** Nội dung chi tiết chung của liệu trình (theo bài giới thiệu của cơ sở, đã điều chỉnh mục 14) */
  packageDetails: [
    'Day ấn huyệt đạo, giảm cảm_giác đau mỏi cơ, xương khớp',
    'Đả thông kinh_lạc, cơ_thể nhẹ nhõm, thư_thái',
    'Kỹ_thuật_viên khiếm thị tay_nghề cao',
    'Tại cơ_sở 711 Hồng_Hà, Hoàn_Kiếm',
  ],
  flipHint: 'Nhấn để xem chi tiết',
  flipBackHint: 'Nhấn để lật lại',
  featuredLabel: 'Phổ biến nhất',
  packageCta: 'Đặt gói này',
  extras: [
    {
      id: 'cao-gio' as ServiceId,
      name: 'Cạo_gió – Giác_hơi bài phong_hàn',
      text: 'Làm ấm cơ_thể, giải cảm, lưu_thông khí huyết.',
      price: '40.000đ' as string | null,
      unit: '/ lượt',
      image: 'herbal' as const,
      audience: 'Khi trái gió trở trời, cơ_thể nặng nề, nhiễm lạnh',
      description: 'Phương_pháp dân_gian giúp làm ấm cơ_thể, giải cảm và lưu_thông khí huyết.',
    },
    {
      id: 'tai-nha' as ServiceId,
      name: 'Tẩm_quất tại_nhà (theo yêu_cầu)',
      text: 'Chưa bao gồm phí di_chuyển.',
      price: '200.000đ' as string | null,
      unit: '/ 60 phút',
      image: 'warmOil' as const,
      audience: 'Dành cho khách muốn thư_giãn ngay tại nhà',
      description: 'Kỹ_thuật_viên đến tận nơi theo lịch hẹn tại Hà_Nội. Giá chưa bao gồm phí di_chuyển.',
    },
  ],
  note: 'Hotline đặt lịch',
} as const

export const gallery = {
  title: 'Không_Gian & Khoảnh_Khắc Thư_Giãn',
  description: 'Biển hiệu thực tế tại 711 Hồng_Hà và những khoảnh_khắc thư_giãn quen thuộc trong mỗi buổi trị_liệu.',
  // TODO(SALE): xin thêm ảnh thật phòng trị liệu, dụng cụ, đá nóng, thảo dược để lấp đầy thư viện.
  items: [
    { image: 'storefrontNight', caption: 'Biển hiệu 711 Hồng Hà buổi tối' },
    { image: 'storefront', caption: 'Mặt tiền 711 Hồng Hà' },
    { image: 'footHands', caption: 'Bấm huyệt bàn chân' },
    { image: 'neckPress', caption: 'Day ấn huyệt vùng gáy' },
  ],
} as const

/**
 * Phản hồi khách hàng – TODO(SALE): thay bằng đánh giá thật (Google Maps / khách cung cấp).
 * isSample: true → nội dung mẫu cho bản demo, không gắn tên/ảnh người thật.
 */
export const testimonials = {
  title: 'Khách_Hàng Nói Gì Về Chúng_Tôi',
  description: 'Mỗi ngày, Tẩm Quất Thật vinh_dự đón nhận sự tin_tưởng của 80–100 lượt khách_hàng.',
  isSample: true,
  /** Hiển thị công khai vì nội dung là MẪU (craft: không trình bày đánh giá bịa như thật) */
  sampleNote: 'Nhận xét minh hoạ cho bản demo – sẽ thay bằng đánh giá thật của khách.',
  reviewsCta: 'Xem đánh giá trên Google Maps',
  items: [
    {
      quote: 'Sau giờ làm vai_gáy mỏi nhừ, chỉ một buổi 90 phút là thấy nhẹ nhõm hẳn. Lực tay vừa phải, các anh chị rất tinh ý.',
      group: 'Khách văn phòng tại Hà_Nội',
      service: 'Tẩm quất – bấm huyệt 90 phút',
    },
    {
      quote: 'Gọi tẩm quất tại nhà cho bố mẹ, kỹ thuật viên đến đúng giờ, nhẹ nhàng và chu đáo. Ông bà rất hài lòng.',
      group: 'Khách đặt lịch tại nhà',
      service: 'Tẩm quất tại nhà',
    },
    {
      quote: 'Không gian sạch sẽ, ấm cúng, nhân viên đón tiếp niềm nở. Được bấm huyệt đúng chỗ mỏi, tối về ngủ ngon hơn hẳn.',
      group: 'Khách quen tại cơ sở',
      service: 'Tẩm quất tại cơ sở',
    },
  ],
} as const

export const booking = {
  title: 'Đặt_Lịch Thư_Giãn Ngay Hôm_Nay',
  description:
    'Gọi hotline 0989.588.030 (Ngọc) hoặc điền thông_tin bên dưới để chúng tôi chuẩn_bị phòng và kỹ_thuật_viên chu_đáo nhất.',
  serviceOptions: [
    { id: 'tq60' as ServiceId, label: 'Tẩm quất – bấm huyệt 60 phút (150.000đ)' },
    { id: 'tq90' as ServiceId, label: 'Tẩm quất – bấm huyệt 90 phút (225.000đ)' },
    { id: 'tq120' as ServiceId, label: 'Tẩm quất – bấm huyệt 120 phút (300.000đ)' },
    { id: 'cao-gio' as ServiceId, label: 'Cạo gió – giác hơi (40.000đ / lượt)' },
    { id: 'tai-nha' as ServiceId, label: 'Tẩm quất tại nhà (200.000đ / 60 phút)' },
  ],
  submit: 'Gửi yêu cầu đặt lịch',
  // TODO(DEV): chưa có backend – form chỉ kiểm tra hợp lệ phía client, KHÔNG gửi dữ liệu đi đâu.
  // Vì vậy thông báo không nói "đã ghi nhận", mà hướng khách gọi hotline để chốt lịch.
  successTitle: 'Sẵn sàng đặt lịch',
  success: 'Cảm ơn bạn! Để giữ lịch hẹn, vui lòng gọi hotline 0989.588.030 (Ngọc) để được xác nhận thời gian.',
  infoTitle: 'Thông tin liên hệ',
  directions: 'Mở Google Maps chỉ đường',
} as const

export const footer = {
  servicesTitle: 'Dịch vụ chính',
  contactTitle: 'Liên hệ',
  description: '15 năm chắc tay_nghề – trọn vẹn tâm y. Nơi đôi bàn tay thấu_cảm giúp bạn có một cơ_thể vững_chãi và tinh_thần tươi mới.',
  copyright: '© 2026 Tẩm Quất Thật – 711 Hồng Hà. Bảo lưu mọi quyền.',
} as const
