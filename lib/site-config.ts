/**
 * NGUỒN DỮ LIỆU DUY NHẤT của website (xem AGENTS.md mục 2 & docs/REQUIREMENTS.md).
 * Component chỉ đọc từ đây – không hard-code nội dung trong component.
 * Mọi chỗ còn thiếu dữ liệu thật được đánh dấu `TODO(SALE)`.
 */

/* -------------------------------------------------------------------------- */
/* Thông tin doanh nghiệp                                                      */
/* -------------------------------------------------------------------------- */
export const business = {
  name: 'Tẩm Quất Thật',
  fullName: 'Tẩm Quất Thật – Tẩm quất người khiếm thị',
  tagline: 'Tẩm quất người khiếm thị',
  city: 'Hà Nội',
  // TODO(SALE): bổ sung SĐT / Zalo (bắt buộc). Để trống → nút gọi cuộn tới form đặt lịch.
  phone: '',
  // TODO(SALE): bổ sung địa chỉ chi tiết (không tự bịa).
  address: '',
  // TODO(SALE): bổ sung giờ mở cửa.
  openingHours: '',
  // TODO(SALE): bổ sung link Facebook Page nếu có.
  facebook: '',
  geo: { lat: 21.0303889, lng: 105.8573478 },
  mapsUrl:
    'https://www.google.com/maps/place/T%E1%BA%A9m+qu%E1%BA%A5t+th%E1%BA%ADt+(T%E1%BA%A9m+qu%E1%BA%A5t+ng%C6%B0%E1%BB%9Di+khi%E1%BA%BFm+th%E1%BB%8B)/@21.0303889,105.8547729,1626m/data=!3m1!1e3!4m6!3m5!1s0x3135ab0037fe6ba5:0x2c54cb7bc8039aa1!8m2!3d21.0303889!4d105.8573478!16s%2Fg%2F11wngfrq_v?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbedUrl: 'https://www.google.com/maps?q=21.0303889,105.8573478&z=17&hl=vi&output=embed',
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
  zaloUrl: '', // vd. https://zalo.me/<sđt>
  messengerUrl: '', // vd. https://m.me/<page>
} as const

/* -------------------------------------------------------------------------- */
/* Hình ảnh                                                                    */
/* Ảnh thật trong public/images/photos/ (danh mục & nguồn: docs/ASSETS.md).  */
/* `position` = object-position: giữ đúng tiêu điểm khi ảnh bị cắt theo khung. */
/* -------------------------------------------------------------------------- */
export type SiteImage = { src: string; alt: string; width: number; height: number; position?: string }

export const images = {
  // Ảnh khách gửi – mặt tiền thật, biển xanh chữ vàng đồng, số 711
  storefront: { src: '/images/photos/storefront.webp', alt: 'Mặt tiền cơ sở Tẩm Quất Thật với biển hiệu xanh chữ vàng đồng', width: 480, height: 720, position: '50% 58%' },
  // Ảnh bổ sung (TODO(SALE): xác minh giấy phép trước khi go-live – docs/ASSETS.md)
  handsFoot: { src: '/images/photos/hands-foot.jpg', alt: 'Đôi bàn tay kỹ thuật viên bấm huyệt bàn chân dưới ánh nến ấm', width: 1024, height: 1536, position: '50% 58%' },
  backPress: { src: '/images/photos/back-press.jpg', alt: 'Kỹ thuật viên day ấn huyệt vùng lưng', width: 640, height: 640, position: '50% 60%' },
  shoulderNeck: { src: '/images/photos/shoulder-neck.jpg', alt: 'Kỹ thuật viên day ấn huyệt vùng vai gáy', width: 712, height: 734, position: '50% 45%' },
  cupping: { src: '/images/photos/cupping.jpg', alt: 'Bộ ống giác hơi, lọ cao đỏ và nến ấm trên giường trị liệu', width: 736, height: 981, position: '50% 72%' },
  calf: { src: '/images/photos/calf.jpg', alt: 'Bấm huyệt bắp chân chuyên sâu giúp thư giãn cơ', width: 735, height: 1103, position: '50% 48%' },
  hotStone: { src: '/images/photos/hot-stone.jpg', alt: 'Liệu pháp chườm đá nóng dọc sống lưng dưới ánh nến', width: 736, height: 917, position: '50% 58%' },
  herbal: { src: '/images/photos/herbal-stones.jpg', alt: 'Đá nóng và hương thảo mộc trong phòng trị liệu', width: 626, height: 939, position: '50% 62%' },
  footReflex: { src: '/images/photos/foot-hands.jpg', alt: 'Đôi tay cảm nhận và day ấn huyệt bàn chân', width: 667, height: 1000, position: '50% 40%' },
  oilCare: { src: '/images/photos/oil-care.jpg', alt: 'Kỹ thuật viên chuẩn bị tinh dầu ấm trước khi xoa bóp', width: 1014, height: 1014, position: '50% 45%' },
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
  eyebrow: 'Tẩm Quất Người Khiếm Thị Hà_Nội',
  /** Tách theo cụm để xuống dòng đúng chỗ: "Bằng Đôi Tay / Tận Tâm" */
  titleLead: ['Lắng Nghe', 'Cơ Thể'],
  titleAccent: ['Bằng Đôi Tay', 'Tận Tâm'],
  description:
    'Xua tan đau mỏi vai_gáy, căng cơ và phục hồi năng lượng với liệu pháp bấm huyệt Đông_y truyền thống tại cơ sở hoặc tại nhà.',
  primaryCta: 'Gọi ngay',
  secondaryCta: 'Đặt lịch hẹn',
  highlights: ['Tại cơ sở', 'Tại nhà', 'Hà Nội'],
} as const

export const about = {
  eyebrow: 'Câu Chuyện Của Chúng Tôi',
  title: 'Chữ “Thật” Trong Từng Động_Tác Bấm_Huyệt',
  // TODO(SALE): xác minh nội dung đào tạo của KTV trước khi công bố chính thức.
  paragraphs: [
    'Tại Tẩm Quất Thật, mỗi kỹ thuật viên khiếm thị đều được đào tạo bài bản về hệ thống kinh lạc và huyệt đạo Đông_y cổ truyền.',
    // "tận gốc" được đổi để tránh tuyên bố mang tính điều trị (AGENTS.md mục 1).
    'Không bị phân tâm bởi thị giác, đôi bàn tay nhạy bén giúp cảm nhận chính xác từng điểm bó cơ để giải tỏa đúng chỗ đau mỏi.',
  ],
  imageTag: 'Không gian ấm cúng, sạch sẽ tại Hà_Nội',
  signature: 'Tẩm Quất Thật · Hà_Nội',
} as const

/** USP – số liệu do khách cung cấp, CHƯA xác minh (docs/REQUIREMENTS.md mục 6). */
export const usp = {
  eyebrow: 'Điểm Khác Biệt',
  title: 'Giá_Trị Tạo_Nên Uy_Tín Thương_Hiệu',
  stats: [
    { value: 15, prefix: '', suffix: '', unit: 'Năm', label: 'Kinh nghiệm hoạt động trong nghề', verified: false },
    // Phiếu ghi "hơn 10 nhân viên" → giữ đúng là nhân viên, không đổi thành "10+ KTV".
    { value: 10, prefix: '', suffix: '+', unit: 'Nhân viên', label: 'Đội ngũ tận tâm, giàu tay nghề', verified: false },
    { value: 100, prefix: '80 – ', suffix: '', unit: 'Khách/ngày', label: 'Lượt khách tin tưởng mỗi ngày', verified: false },
    // Khẩu hiệu thái độ phục vụ, không phải số liệu thống kê.
    { value: 100, prefix: '', suffix: '%', unit: 'Tận tâm', label: 'Chú trọng xúc giác & thái độ phục vụ', verified: false },
  ],
  values: [
    {
      title: 'Đôi tay xúc giác tinh tế',
      text: 'Kỹ thuật viên khiếm thị cảm nhận từng thớ cơ, điều chỉnh lực ấn vừa vặn với cơ địa của mỗi người.',
      image: 'footReflex',
    },
    {
      title: 'Thái độ phục vụ chu đáo',
      text: 'Đón tiếp nhẹ nhàng, lắng nghe vùng đau mỏi và gợi ý liệu trình phù hợp cho từng vị khách.',
      image: 'oilCare',
    },
  ],
} as const

export type ServiceId = 'tq60' | 'tq90' | 'tq120' | 'cao-gio' | 'tai-nha'

export const services = {
  eyebrow: 'Dịch Vụ',
  title: 'Các Liệu_Pháp Chăm_Sóc Sức_Khỏe',
  description:
    'Ba liệu pháp truyền thống được thực hiện bởi đôi tay giàu kinh nghiệm, phù hợp người làm văn phòng, người lớn tuổi và người hay căng cơ.',
  cta: 'Chọn dịch vụ này',
  items: [
    {
      id: 'tq90' as ServiceId,
      name: 'Tẩm_quất – Bấm_huyệt Đông_y',
      tag: 'Liệu trình 60 / 90 / 120 phút',
      text: 'Day ấn sâu vào các huyệt đạo vùng đầu, cổ vai_gáy, lưng và chân. Giúp lưu thông khí huyết và ngủ ngon giấc.',
      image: 'shoulderNeck',
    },
    {
      id: 'cao-gio' as ServiceId,
      name: 'Cạo gió – Giác hơi',
      tag: 'Giải cảm & Thông kinh lạc',
      text: 'Phương pháp dân gian giúp làm ấm cơ thể, giải cảm. Giảm cảm giác nặng nề, mỏi mệt khi trái gió trở trời.',
      image: 'cupping',
    },
    {
      id: 'tai-nha' as ServiceId,
      name: 'Tẩm_quất tại_nhà theo yêu_cầu',
      tag: 'Phục vụ tận nơi tại Hà_Nội',
      text: 'Đặt lịch trước, kỹ thuật viên đến tận nơi phục vụ. Thư giãn trọn vẹn ngay trong không gian quen thuộc của bạn.',
      image: 'calf',
    },
  ],
} as const

/**
 * Bảng giá – TODO(SALE): chưa có giá chính thức. `price: null` → hiển thị "Liên hệ báo giá".
 * Gói & mô tả hạng mục cần đối chiếu với bảng giá thật trong Drive.
 */
export const pricing = {
  eyebrow: 'Bảng Giá',
  title: 'Bảng_Giá Dịch_Vụ Niêm_Yết Rõ_Ràng',
  description: 'Liệu trình tẩm quất – bấm huyệt Đông_y theo thời lượng, cùng các dịch vụ lẻ phù hợp nhu cầu của bạn.',
  priceFallback: 'Liên hệ báo giá',
  note: 'Bảng giá chính thức đang được cập nhật. Vui lòng gọi để được báo giá chính xác.',
  packageService: 'Tẩm_quất – Bấm_huyệt Đông_y',
  packages: [
    {
      id: 'tq60' as ServiceId,
      minutes: 60,
      price: null as string | null,
      featured: false,
      items: ['Day ấn cổ, vai_gáy và lưng', 'Bấm huyệt giảm căng cơ', 'Hợp nghỉ trưa, sau giờ làm'],
    },
    {
      id: 'tq90' as ServiceId,
      minutes: 90,
      price: null as string | null,
      // TODO(SALE): xác nhận gói phổ biến nhất.
      featured: true,
      items: ['Toàn_thân: đầu, vai_gáy, lưng, chân', 'Bấm huyệt Đông_y chuyên sâu', 'Thư giãn sâu, dễ ngủ ngon hơn'],
    },
    {
      id: 'tq120' as ServiceId,
      minutes: 120,
      price: null as string | null,
      featured: false,
      items: ['Liệu trình toàn thân trọn vẹn', 'Tập trung vùng đau mỏi lâu ngày', 'Phục hồi năng lượng tối đa'],
    },
  ],
  featuredLabel: 'Phổ biến nhất',
  packageCta: 'Đặt gói này',
  extras: [
    {
      id: 'cao-gio' as ServiceId,
      name: 'Cạo gió – Giác hơi',
      text: 'Làm ấm cơ thể, giải cảm, giảm nặng nề mỏi mệt.',
      price: null as string | null,
    },
    {
      id: 'tai-nha' as ServiceId,
      name: 'Tẩm quất tại nhà',
      text: 'Kỹ thuật viên đến tận nơi theo lịch hẹn tại Hà_Nội.',
      price: null as string | null,
    },
  ],
} as const

export const gallery = {
  eyebrow: 'Thư Viện Ảnh',
  title: 'Không_Gian & Quy_Trình Trị_Liệu',
  description: 'Hình ảnh thực tế tại cơ_sở và các liệu_pháp chăm_sóc cơ_thể chuyên_sâu.',
  items: [
    { image: 'storefront', caption: 'Mặt tiền cơ sở Tẩm Quất Thật' },
    { image: 'hotStone', caption: 'Chườm đá nóng dọc sống lưng' },
    { image: 'footReflex', caption: 'Bấm huyệt bàn chân' },
    { image: 'cupping', caption: 'Giác hơi truyền thống' },
    { image: 'herbal', caption: 'Hương thảo mộc thư giãn' },
    { image: 'calf', caption: 'Bấm huyệt bắp chân chuyên sâu' },
  ],
} as const

/**
 * Phản hồi khách hàng – TODO(SALE): thay bằng đánh giá thật (Google Maps / khách cung cấp).
 * isSample: true → nội dung mẫu cho bản demo, không gắn tên/ảnh người thật.
 */
export const testimonials = {
  eyebrow: 'Phản Hồi',
  title: 'Khách_Hàng Nói Gì Về Chúng_Tôi',
  isSample: true,
  items: [
    {
      quote: 'Sau giờ làm vai_gáy mỏi nhừ, chỉ một buổi 90 phút là thấy nhẹ nhõm hẳn. Lực tay vừa phải, các anh chị rất tinh ý.',
      group: 'Khách văn phòng tại Hà_Nội',
    },
    {
      quote: 'Gọi tẩm quất tại nhà cho bố mẹ, kỹ thuật viên đến đúng giờ, nhẹ nhàng và chu đáo. Ông bà rất hài lòng.',
      group: 'Khách đặt lịch tại nhà',
    },
    {
      quote: 'Không gian sạch sẽ, ấm cúng, nhân viên đón tiếp niềm nở. Được bấm huyệt đúng chỗ mỏi, tối về ngủ ngon hơn hẳn.',
      group: 'Khách quen tại cơ sở',
    },
  ],
} as const

export const booking = {
  eyebrow: 'Đặt Lịch',
  title: 'Đặt_Lịch Thư_Giãn Ngay Hôm_Nay',
  description:
    'Điền thông tin bên dưới hoặc gọi trực tiếp để chúng tôi chuẩn bị phòng và kỹ thuật viên chu đáo nhất.',
  serviceOptions: [
    { id: 'tq60' as ServiceId, label: 'Tẩm quất – bấm huyệt 60 phút' },
    { id: 'tq90' as ServiceId, label: 'Tẩm quất – bấm huyệt 90 phút' },
    { id: 'tq120' as ServiceId, label: 'Tẩm quất – bấm huyệt 120 phút' },
    { id: 'cao-gio' as ServiceId, label: 'Cạo gió – giác hơi' },
    { id: 'tai-nha' as ServiceId, label: 'Tẩm quất tại nhà' },
  ],
  submit: 'Gửi yêu cầu đặt lịch',
  // TODO(DEV): chưa có backend – form chỉ kiểm tra & hiển thị xác nhận phía client.
  success: 'Cảm ơn bạn! Thông tin đặt lịch đã được ghi nhận. Để giữ lịch nhanh nhất, bạn có thể gọi trực tiếp cho chúng tôi.',
  infoTitle: 'Thông tin liên hệ',
  directions: 'Mở Google Maps chỉ đường',
} as const

export const footer = {
  servicesTitle: 'Dịch vụ chính',
  contactTitle: 'Liên hệ',
  description: 'Bấm huyệt Đông_y bằng đôi tay tận tâm của kỹ thuật viên khiếm thị giữa lòng Hà_Nội.',
  copyright: '© 2026 Tẩm Quất Thật. Bảo lưu mọi quyền.',
} as const
