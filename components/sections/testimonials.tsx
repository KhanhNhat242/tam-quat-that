import type { CSSProperties } from 'react'
import { business, testimonials } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { ArrowRightIcon, UserIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'

/** Lệch nhịp trôi của 3 card để trông tự nhiên như trên mặt nước */
const FLOAT: CSSProperties[] = [
  { '--float-delay': '0s', '--float-duration': '6.5s' } as CSSProperties,
  { '--float-delay': '-2.2s', '--float-duration': '7.2s' } as CSSProperties,
  { '--float-delay': '-4.1s', '--float-duration': '6.8s' } as CSSProperties,
]

/**
 * Phản hồi – 3 card trên 1 hàng theo ảnh mẫu của người dùng:
 * avatar trong "góc khuyết" trên-trái, ngoặc kép lớn trên-phải, khung lệch vàng đồng phía sau,
 * hiệu ứng nổi bồng bềnh (tắt khi giảm chuyển động, dừng khi rê chuột/focus).
 * Nội dung đang là MẪU → không có tên người & số sao, hiển thị công khai `sampleNote`.
 */
export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section-y overflow-hidden bg-sand lg:py-24">
      <div className="container-page">
        <SectionHeading id="testimonials-title" title={testimonials.title} description={testimonials.description} layout="split" />

        <ul className="grid gap-14 pt-8 md:grid-cols-3 md:gap-6 lg:gap-8" data-reveal="up">
          {testimonials.items.map((t, i) => (
            <li key={t.group} className="float-group flex flex-col">
              <div className="float-water relative flex-1" style={FLOAT[i]}>
                {/* Khung lệch phía sau (trang trí) */}
                <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] bg-gold-light" />

                <figure className="relative flex h-full flex-col rounded-[18px] bg-paper px-6 pt-14 pb-7 shadow-[0_14px_30px_-22px_rgb(31_51_40/0.55)] lg:px-7">
                  {/* Avatar trong góc khuyết: vòng màu nền section tạo cảm giác cắt khuyết mép thẻ */}
                  <span
                    aria-hidden
                    className="absolute -top-9 left-6 inline-flex size-[76px] items-center justify-center rounded-full bg-forest text-cream ring-[10px] ring-sand lg:left-7"
                  >
                    <UserIcon size={34} strokeWidth={1.6} />
                  </span>
                  {/* Ngoặc kép lớn */}
                  <span aria-hidden className="absolute top-3 right-6 font-serif text-[96px] leading-none text-gold-light select-none">
                    ”
                  </span>

                  <figcaption className="pr-14">
                    <span className="block font-serif text-[20px] leading-snug font-semibold text-wood-deep">{nb(t.group)}</span>
                    <span className="mt-1 block text-[16px] text-ink-soft">{nb(t.service)}</span>
                  </figcaption>
                  <blockquote className="mt-4 flex-1 border-t border-wood-soft pt-4 text-[17px] leading-[1.65] text-ink">{nb(t.quote)}</blockquote>
                </figure>
              </div>
              {/* Bóng "mặt nước" co giãn ngược nhịp */}
              <div
                aria-hidden
                className="float-water-shadow mx-auto mt-6 h-3 w-[78%] rounded-[50%] bg-forest-deep/25 blur-[6px]"
                style={FLOAT[i]}
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 border-t border-wood-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
          {testimonials.isSample && <p className="text-[16px] text-ink-soft italic">{nb(testimonials.sampleNote)}</p>}
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 font-semibold whitespace-nowrap text-forest underline decoration-gold decoration-2 underline-offset-[6px] hover:text-forest-deep"
          >
            {testimonials.reviewsCta}
            <span className="sr-only">(mở trong thẻ mới)</span>
            <ArrowRightIcon size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
