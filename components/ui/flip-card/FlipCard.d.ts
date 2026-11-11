import type { ReactNode } from 'react'

/** Khai báo kiểu cho FlipCard.jsx (React Bits, biến thể JS-CSS) để dùng trong file TSX. */
export interface FlipCardProps {
  front?: ReactNode
  back?: ReactNode
  /** Điều khiển từ ngoài (controlled) */
  flipped?: boolean
  defaultFlipped?: boolean
  onFlipChange?: (flipped: boolean) => void
  axis?: 'x' | 'y'
  flipOnClick?: boolean
  draggable?: boolean
  dragDistance?: number
  tilt?: boolean
  tiltMax?: number
  glare?: boolean
  glareOpacity?: number
  hoverScale?: number
  perspective?: number
  stiffness?: number
  damping?: number
  width?: number
  height?: number
  radius?: number
  background?: string
  color?: string
  shadow?: boolean
  shadowColor?: string
  shadowOpacity?: number
  disabled?: boolean
  ariaLabel?: string
  /** (dự án) id của phần mô tả đầy đủ cho trình đọc màn hình */
  ariaDescribedBy?: string
  /** (dự án) rộng 100% theo cột lưới */
  fluid?: boolean
  className?: string
}

export default function FlipCard(props: FlipCardProps): React.JSX.Element
