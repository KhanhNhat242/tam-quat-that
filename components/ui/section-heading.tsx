import { nb } from '@/lib/text'
import { ThreeDots } from './three-dots'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  id?: string
  className?: string
}

/**
 * Tiêu đề section thống nhất: nhãn mục + hoạ tiết 3 huyệt + H2 serif + mô tả dẫn.
 * Khoảng cách tiêu đề → nội dung: 32–40px mobile, 48–56px desktop (đặt bằng mb).
 */
export function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'light', id, className = '' }: Props) {
  const center = align === 'center'
  const dark = tone === 'dark'
  return (
    <div
      className={`mb-9 lg:mb-14 ${center ? 'mx-auto text-center' : ''} max-w-[780px] ${className}`}
      data-reveal="up"
    >
      <p className={`eyebrow ${dark ? 'text-gold-light' : 'text-gold-dark'}`}>{nb(eyebrow)}</p>
      <ThreeDots className={`mt-3 ${center ? 'mx-auto' : ''}`} width={112} />
      <h2
        id={id}
        className={`mt-4 font-serif text-[30px] leading-[1.22] font-semibold sm:text-[36px] lg:text-[44px] ${
          dark ? 'text-cream' : 'text-forest-deep'
        }`}
      >
        {nb(title)}
      </h2>
      {description && (
        <p className={`text-body mt-4 lg:mt-5 ${center ? 'mx-auto' : ''} max-w-[620px] ${dark ? 'text-cream/80' : 'text-ink-soft'}`}>
          {nb(description)}
        </p>
      )}
    </div>
  )
}
