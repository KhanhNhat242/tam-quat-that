import { nb } from '@/lib/text'

type Props = {
  /** Nhãn mục – CHỈ dùng khi bổ sung thông tin, không lặp lại tiêu đề */
  eyebrow?: string
  title: string
  description?: string
  /**
   * center: tiêu đề giữa (dùng tiết chế);
   * left: tiêu đề trái;
   * split: tiêu đề trái – mô tả phải (desktop), tránh khuôn "mọi section căn giữa".
   */
  layout?: 'center' | 'left' | 'split'
  tone?: 'light' | 'dark'
  id?: string
  className?: string
}

/**
 * Tiêu đề section. Màu chữ theo bảng tương phản REQUIREMENTS mục 13
 * (nền sáng: wood-deep / ink-soft; nền tối: cream-muted).
 */
export function SectionHeading({ eyebrow, title, description, layout = 'left', tone = 'light', id, className = '' }: Props) {
  const dark = tone === 'dark'
  const eyebrowEl = eyebrow ? (
    <p className={`eyebrow mb-4 ${dark ? 'text-cream-muted' : 'text-wood-deep'}`}>{nb(eyebrow)}</p>
  ) : null
  const titleEl = (
    <h2
      id={id}
      className={`font-serif text-[30px] leading-[1.2] font-semibold sm:text-[36px] lg:text-[44px] ${dark ? 'text-cream' : 'text-forest-deep'}`}
    >
      {nb(title)}
    </h2>
  )
  const descEl = description ? (
    <p className={`text-body ${dark ? 'text-cream-muted' : 'text-ink-soft'}`}>{nb(description)}</p>
  ) : null

  if (layout === 'split') {
    return (
      <div className={`mb-9 grid gap-4 lg:mb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 ${className}`} data-reveal="up">
        <div>
          {eyebrowEl}
          {titleEl}
        </div>
        {descEl && <div className="max-w-[520px] lg:pb-1.5">{descEl}</div>}
      </div>
    )
  }

  const center = layout === 'center'
  return (
    <div className={`mb-9 max-w-[720px] lg:mb-12 ${center ? 'mx-auto text-center' : ''} ${className}`} data-reveal="up">
      {eyebrowEl}
      {titleEl}
      {descEl && <div className={`mt-4 max-w-[600px] ${center ? 'mx-auto' : ''}`}>{descEl}</div>}
    </div>
  )
}
