/**
 * Hoạ tiết Organic Biophilic: đường SVG mềm (lá thuốc, mây cuộn Á Đông) đặt ở VIỀN khu vực, độ mờ thấp.
 * Thuần trang trí → aria-hidden, không nhận chuột. Màu lấy theo currentColor (đặt bằng class text-*).
 */
type Props = { className?: string }

/** Cành lá thuốc */
export function LeafSprig({ className = '' }: Props) {
  return (
    <svg aria-hidden viewBox="0 0 240 320" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={`pointer-events-none ${className}`}>
      <path d="M118 312C122 240 118 160 132 92 140 54 156 26 176 8" />
      {[
        [124, 270, -1],
        [122, 226, 1],
        [124, 184, -1],
        [128, 142, 1],
        [136, 104, -1],
        [148, 68, 1],
      ].map(([x, y, side], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${side} 1) rotate(${-28 + i * 3})`}>
          <path d="M0 0C14-26 44-38 76-30 64-4 34 10 0 0Z" />
          <path d="M0 0C24-10 46-18 70-28" strokeOpacity=".6" />
        </g>
      ))}
    </svg>
  )
}

/** Mây cuộn kiểu Á Đông */
export function CloudScroll({ className = '' }: Props) {
  return (
    <svg aria-hidden viewBox="0 0 260 110" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={`pointer-events-none ${className}`}>
      <path d="M10 86h214" />
      <path d="M38 86c-16 0-24-12-20-24 4-11 17-15 26-9-2-17 12-30 28-27 9 2 15 8 17 16 6-16 22-26 40-22 19 4 30 22 26 40 12-6 27 0 30 13 3 12-6 23-18 23" />
      <path d="M78 62c0-9 7-15 15-15s14 6 14 13-5 11-11 11-9-4-9-8 3-6 6-6" />
      <path d="M150 58c0-10 8-17 17-17s16 7 16 15-6 13-13 13-11-5-11-10 4-7 7-7" />
      <path d="M232 98h20M2 98h22" strokeOpacity=".6" />
    </svg>
  )
}
