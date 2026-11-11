type Props = {
  /** Vị trí: mép trên hoặc mép dưới của section chứa nó */
  position: 'top' | 'bottom'
  /** Class màu (text-*) của section KỀ BÊN – phần cong được tô bằng màu đó */
  colorClass: string
  withLine?: boolean
}

/** Dải bo cong mềm chuyển giữa 2 nền khác màu (kem ↔ xanh trầm). */
export function Curve({ position, colorClass, withLine = true }: Props) {
  const top = position === 'top'
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-10 h-7 w-full overflow-visible sm:h-12 lg:h-16 ${colorClass} ${
        top ? '-top-px rotate-180' : '-bottom-px'
      }`}
    >
      {/* Tô tràn quá mép SVG 6 đơn vị (overflow-visible) → không lộ vạch hở nửa pixel ở DPR 1 / 1.25 */}
      <path d="M0 86V40C240 10 480 0 720 0s480 10 720 40v46z" fill="currentColor" />
      {withLine && (
        <path d="M0 40C240 10 480 0 720 0s480 10 720 40" fill="none" stroke="#b08d57" strokeOpacity=".7" strokeWidth="1.5" />
      )}
    </svg>
  )
}
