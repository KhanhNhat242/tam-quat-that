'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { ServiceId, SiteImage } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { ArrowRightIcon } from '@/components/ui/icons'
import { DotBullet } from '@/components/ui/three-dots'
import { SELECT_SERVICE_EVENT } from '@/components/ui/service-link'

export type ScrollerService = {
  id: ServiceId
  name: string
  tag: string
  text: string
  points: readonly string[]
  image: SiteImage
}

type Labels = { cta: string; goTo: string }

/**
 * 3 dịch vụ — chồng thẻ 3D chạy theo cuộn (sticky), chuyển thể từ code mẫu người dùng gửi.
 * - SSR + mobile + prefers-reduced-motion: danh sách tĩnh (đầy đủ nội dung, SEO).
 * - Desktop (≥1024px, không giảm chuyển động): sân khấu sticky; tiến độ cuộn → thẻ ở giữa.
 * Ngoại lệ đã ghi nhận: chuyển động gắn với cuộn (REQUIREMENTS mục 11).
 */
export default function ServicesScroller({ items, labels }: { items: ScrollerService[]; labels: Labels }) {
  const enhanced = useMediaQuery('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
  return enhanced ? <Stage items={items} labels={labels} /> : <StaticList items={items} labels={labels} />
}

/** Đọc media query không cần setState trong effect (SSR luôn trả false → bản tĩnh) */
function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', cb)
      return () => mq.removeEventListener('change', cb)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** Chọn sẵn dịch vụ trong form đặt lịch rồi để link #dat-lich cuộn xuống */
const selectService = (id: ServiceId) => window.dispatchEvent(new CustomEvent<ServiceId>(SELECT_SERVICE_EVENT, { detail: id }))

const pad = (i: number) => String(i + 1).padStart(2, '0')

/* ───────────────────────── Bản tĩnh ───────────────────────── */
function StaticList({ items, labels }: { items: ScrollerService[]; labels: Labels }) {
  return (
    <ol className="container-page grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {items.map((s, i) => (
        <li key={s.id} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper shadow-[0_20px_40px_-28px_rgb(0_0_0/0.6)]">
          <div className="relative aspect-[4/3] bg-sand">
            <Image src={s.image.src} alt="" fill sizes="(min-width:1024px) 380px, (min-width:768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: s.image.position }} />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="font-serif text-[18px] text-wood-deep tabular-nums">{pad(i)}</p>
            <h3 className="mt-1 font-serif text-[24px] leading-snug font-semibold text-forest-deep">{nb(s.name)}</h3>
            <p className="text-body mt-3 text-ink-soft">{nb(s.text)}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[16px] text-ink">
                  <DotBullet />
                  <span>{nb(pt)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <a
                href="#dat-lich"
                onClick={() => selectService(s.id)}
                className="flex min-h-11 items-center justify-between border-t border-wood-soft pt-4 font-semibold text-forest hover:text-forest-deep focus-visible:outline-forest-deep"
              >
                {labels.cta}
                <ArrowRightIcon size={20} />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ───────────────────────── Sân khấu 3D sticky ───────────────────────── */
// Mỗi dịch vụ chiếm 45svh quãng cuộn, tối đa 420px → section gọn trên màn lớn (tổng ~1.6k px thay vì ~2.2k)
const STEP = 'min(45svh, 420px)'
// Sân khấu cao vừa nội dung, dính ở giữa vùng dưới header
const STAGE_H = 'min(calc(100svh - var(--header-h) - 48px), 540px)'
const STAGE_TOP = `calc(var(--header-h) + (100svh - var(--header-h) - ${STAGE_H}) / 2)`

function Stage({ items, labels }: { items: ScrollerService[]; labels: Labels }) {
  const n = items.length
  const wrapRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [active, setActive] = useState(0)

  const apply = useCallback((p: number) => {
    const card = cardRefs.current[0]
    const stage = card?.parentElement
    const w = card?.offsetWidth ?? 442
    const h = card?.offsetHeight ?? 333
    // Căn giữa bằng toạ độ làm tròn tuyệt đối theo pixel nguyên → ảnh không bị lệch nửa pixel (mờ)
    const sr = stage?.getBoundingClientRect()
    const fracX = sr ? sr.left - Math.floor(sr.left) : 0
    const fracY = sr ? sr.top - Math.floor(sr.top) : 0
    const x0 = Math.round((sr?.width ?? w) / 2 - w / 2 + fracX) - fracX
    const y0 = Math.round((sr?.height ?? h) / 2 - h / 2 + fracY) - fracY
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const o = i - p // vị trí tương đối so với thẻ giữa
      const a = Math.abs(o)
      const sign = Math.sign(o)
      el.style.zIndex = String(100 - Math.round(a * 10))
      el.tabIndex = Math.round(p) === i ? 0 : -1
      if (a < 0.02) {
        // Thẻ ở giữa: chỉ dịch 2D, không nghiêng/scale/filter → ảnh nét nhất
        el.style.transform = `translate(${x0}px, ${y0}px)`
        el.style.opacity = '1'
        el.style.filter = 'none'
        return
      }
      // thẻ kề: lệch 66% chiều cao; thẻ xa hơn: dồn về mép
      const y = sign * (Math.min(a, 1) * 0.66 + Math.max(a - 1, 0) * 0.34) * h
      const rot = -sign * Math.min(a, 1.6) * 24
      const scale = 1 - Math.min(a, 2.5) * 0.08
      el.style.transform = `translate3d(${x0}px, ${Math.round(y0 + y)}px, 0) rotateX(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      el.style.opacity = String(Math.max(0, 1 - Math.max(a - 0.6, 0) * 0.45))
      el.style.filter = `brightness(${(1 - Math.min(a, 2) * 0.12).toFixed(3)})`
    })
  }, [])

  useEffect(() => {
    let raf = 0
    const tick = () => {
      raf = 0
      const wrap = wrapRef.current
      if (!wrap) return
      const stage = stageRef.current
      const rect = wrap.getBoundingClientRect()
      const stickyTop = stage ? parseFloat(getComputedStyle(stage).top) || 0 : 0
      const total = wrap.offsetHeight - (stage?.offsetHeight ?? window.innerHeight)
      const t = total > 0 ? Math.min(1, Math.max(0, (stickyTop - rect.top) / total)) : 0
      const p = t * (n - 1)
      apply(p)
      setActive(Math.round(p))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [apply, n])

  const goTo = (i: number) => {
    const wrap = wrapRef.current
    if (!wrap) return
    const stage = stageRef.current
    const stickyTop = stage ? parseFloat(getComputedStyle(stage).top) || 0 : 0
    const total = wrap.offsetHeight - (stage?.offsetHeight ?? window.innerHeight)
    const top = wrap.getBoundingClientRect().top + window.scrollY - stickyTop
    window.scrollTo({ top: top + (total * i) / (n - 1) + 1, behavior: 'smooth' })
  }

  const s = items[active]

  return (
    <div ref={wrapRef} style={{ height: `calc(${STAGE_H} + ${STEP} * ${n - 1})` }} className="relative">
      <div ref={stageRef} style={{ top: STAGE_TOP, height: STAGE_H }} className="sticky flex items-center overflow-hidden">
        <div className="container-page grid w-full grid-cols-12 items-center gap-8">
          {/* Cột trái: số thứ tự, tên dịch vụ, thông tin nhanh */}
          <div className="col-span-3 self-center" aria-live="polite">
            <div key={s.id} className="fade-in">
              <p className="font-serif text-[104px] leading-none text-gold-light">{pad(active)}</p>
              <span aria-hidden className="mt-6 block h-px w-12 bg-gold-light" />
              <h3 className="mt-6 font-serif text-[30px] leading-[1.15] font-semibold text-cream xl:text-[34px]">{nb(s.name)}</h3>
              <ul className="mt-5 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[16px] text-cream-muted">
                    <DotBullet />
                    <span>{nb(pt)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Giữa: chồng thẻ 3D */}
          <div style={{ height: STAGE_H }} className="relative col-span-6 [perspective:1200px]">
            {items.map((it, i) => (
              <a
                key={it.id}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                href="#dat-lich"
                onClick={() => selectService(it.id)}
                aria-label={`${it.name.replace(/_/g, ' ')} – ${labels.cta}`}
                className="absolute top-0 left-0 block w-[min(100%,442px)] overflow-hidden rounded-[var(--radius-card)] border border-gold/50 bg-forest-deep shadow-[0_28px_56px_-26px_rgb(0_0_0/0.75)]"
              >
                <span className="relative block aspect-[4/3] bg-sand">
                  <Image src={it.image.src} alt="" fill sizes="442px" className="object-cover" style={{ objectPosition: it.image.position }} />
                </span>
              </a>
            ))}
          </div>

          {/* Cột phải: mô tả, CTA, chỉ báo vị trí */}
          <div className="col-span-3 flex gap-6 self-center">
            <span aria-hidden className="w-px shrink-0 self-stretch bg-gold/50" />
            <div className="min-w-0">
              <div key={s.id} className="fade-in">
                <p className="font-serif text-[22px] font-semibold text-gold-light">{nb(s.tag)}</p>
                <p className="mt-3 text-[16.5px] leading-[1.6] text-cream-muted">{nb(s.text)}</p>
                <a href="#dat-lich" onClick={() => selectService(s.id)} className="btn mt-6 min-h-12 bg-gold-light text-ink hover:bg-cream">
                  {labels.cta} <ArrowRightIcon size={20} />
                </a>
              </div>
              <ol className="mt-10 flex gap-2" aria-label={labels.goTo}>
                {items.map((it, i) => (
                  <li key={it.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`${pad(i)} · ${it.name.replace(/_/g, ' ')}`}
                      aria-current={i === active ? 'step' : undefined}
                      className="group grid h-11 w-10 place-items-center"
                    >
                      <span className={`block h-1 w-full rounded-full transition-colors ${i === active ? 'bg-gold-light' : 'bg-cream/30 group-hover:bg-cream/60'}`} />
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
