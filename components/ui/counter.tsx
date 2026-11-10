'use client'

import { useEffect, useRef } from 'react'

type Props = { value: number; prefix?: string; suffix?: string; duration?: number }

/**
 * Số đếm tăng dần khi lọt vào khung nhìn. HTML ban đầu đã chứa giá trị cuối
 * (không JS / giảm chuyển động vẫn thấy đúng số); cập nhật trực tiếp vào DOM để tránh re-render.
 */
export function Counter({ value, prefix = '', suffix = '', duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const render = (n: number) => {
      el.textContent = `${prefix}${n}${suffix}`
    }
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          render(Math.round(value * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        render(0)
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, prefix, suffix, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {`${prefix}${value}${suffix}`}
    </span>
  )
}
