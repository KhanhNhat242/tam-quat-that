import type { CSSProperties } from 'react'

/** Khai báo kiểu cho WarpText.jsx (React Bits, biến thể JS-CSS) để dùng trong file TSX. */
export interface WarpTextProps {
  /** Dùng '\n' để xuống dòng */
  text?: string
  color?: string
  warpStrength?: number
  warpScale?: number
  speed?: number
  pointerInfluence?: number
  pointerStrength?: number
  refraction?: number
  chromatic?: number
  ripple?: boolean
  clickRipple?: boolean
  idleDrift?: number
  lens?: 'bulge' | 'pinch' | 'swirl'
  intro?: boolean
  fontSize?: string | number
  fontWeight?: string | number
  fontFamily?: string
  letterSpacing?: string | number
  lineHeight?: string | number
  /** (dự án) căn chữ trong canvas */
  align?: 'center' | 'left'
  className?: string
  style?: CSSProperties
}

export default function WarpText(props: WarpTextProps): React.JSX.Element
