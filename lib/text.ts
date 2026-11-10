const NBSP = ' '

/**
 * Chống "rớt 1 chữ" xuống dòng cuối: nối `count` chữ cuối bằng khoảng trắng không ngắt.
 * Dùng cho MỌI đoạn text hiển thị (tiêu đề, mô tả, nhãn) – kết hợp text-wrap: pretty/balance trong globals.css.
 *
 * Quy ước trong site-config: dấu `_` nối các âm tiết của MỘT từ ghép (vd. `Uy_Tín`, `Bấm_huyệt`)
 * để không bao giờ bị ngắt giữa từ ghép; khi hiển thị `_` được đổi thành khoảng trắng không ngắt.
 */
export function nb(text: string, count = 2): string {
  const words = text.trim().split(/\s+/)
  const join = (parts: string[], sep: string) => parts.join(sep).replace(/_/g, NBSP)
  if (words.length <= count) return join(words, NBSP)
  const head = join(words.slice(0, words.length - count), ' ')
  const tail = join(words.slice(words.length - count), NBSP)
  return `${head} ${tail}`
}

/** Bỏ dấu `_` (dùng cho alt, aria-label, metadata – nơi không cần chống ngắt dòng) */
export const plain = (text: string) => text.replace(/_/g, ' ')

/** Số điện thoại hiển thị → dạng href tel: */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
