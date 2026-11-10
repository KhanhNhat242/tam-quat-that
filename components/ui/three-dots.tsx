type Props = {
  className?: string
  /** Độ rộng toàn bộ hoạ tiết (px) */
  width?: number
}

/**
 * Hoạ tiết nhận diện lấy từ logo: 3 huyệt đạo vàng đồng nối bằng đường "sống lưng" uốn nhẹ.
 * Dùng làm divider giữa tiêu đề/section.
 */
export function ThreeDots({ className = '', width = 132 }: Props) {
  return (
    <svg
      width={width}
      height={(width / 132) * 18}
      viewBox="0 0 132 18"
      fill="none"
      aria-hidden
      className={`text-gold ${className}`}
    >
      <path d="M0 9h30" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.2" />
      <path d="M102 9h30" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.2" />
      <path
        d="M36 9c8-7 16 7 24 0s16 7 24 0 10 3 12 0"
        stroke="currentColor"
        strokeOpacity=".7"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="36" cy="9" r="4.2" fill="currentColor" />
      <circle cx="66" cy="9" r="4.2" fill="currentColor" />
      <circle cx="96" cy="9" r="4.2" fill="currentColor" />
    </svg>
  )
}

/** Dấu đầu dòng: huyệt đạo nhỏ có vòng sáng */
export function DotBullet({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`relative mt-[0.55em] inline-flex size-2.5 shrink-0 ${className}`}>
      <span className="absolute inset-0 rounded-full bg-gold/25 scale-[2]" />
      <span className="relative size-2.5 rounded-full bg-gold" />
    </span>
  )
}
