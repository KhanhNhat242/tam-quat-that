import Image from 'next/image'
import type { CSSProperties } from 'react'
import { business, hero, images } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { nb } from '@/lib/text'
import { ArrowRightIcon, PhoneIcon } from '@/components/ui/icons'
import WarpText from '@/components/ui/warp-text/WarpText'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/** Ký tự xuống dòng cho WarpText (mỗi cụm của tiêu đề là 1 dòng) */
const LINE_BREAK = String.fromCharCode(10)

/** Cỡ chữ tiêu đề (dùng chung cho 2 canvas WarpText) */
const TITLE_VARS = { '--wt-fs': 'clamp(2.125rem, 1.2rem + 3.6vw, 3.25rem)' } as CSSProperties

/**
 * Cấu hình WarpText theo đoạn mẫu người dùng gửi; cỡ/độ đậm/khoảng chữ chỉnh cho font Lora (tối đa 700)
 * và dấu tiếng Việt. Canvas cao 2.75× cỡ chữ (2 dòng × 1.08 + lề cho phần uốn cong), lề âm bù khoảng trống.
 */
const WARP = {
  align: 'left',
  warpStrength: 0.08,
  warpScale: 1.7,
  speed: 0.55,
  lens: 'bulge',
  pointerInfluence: 0.42,
  pointerStrength: 0.38,
  refraction: 0.018,
  chromatic: 0.35,
  idleDrift: 0.2,
  ripple: true,
  clickRipple: true,
  intro: true,
  fontSize: 'var(--wt-fs)',
  fontWeight: 600,
  letterSpacing: '0.01em',
  lineHeight: 1.08,
  // minHeight: 0 – ghi đè min-height 220px mặc định của WarpText.css
  // marginLeft/width: bù lề 2% bên trong canvas để chữ thẳng mép với đoạn mô tả
  style: {
    height: 'calc(var(--wt-fs) * 2.75)',
    minHeight: 0,
    margin: 'calc(var(--wt-fs) * -0.3) 0 calc(var(--wt-fs) * -0.3) -2%',
    width: '102%',
  },
} as const

/** Cạnh cong hữu cơ của khung ảnh (toạ độ 0–1 theo khung, dùng chung cho clip-path & đường viền vàng) */
const EDGE_DESKTOP = 'M0.2,0 C0.03,0.16 0.13,0.33 0.06,0.5 C-0.01,0.68 0.09,0.85 0.19,1'
const EDGE_MOBILE = 'M0,0.14 C0.2,0.02 0.42,0.1 0.62,0.05 C0.8,0.01 0.92,0.04 1,0.08'

/**
 * Hero – cao đúng 1 màn hình (header cố định nằm đè lên phần trên, cùng màu nền), bố cục theo ảnh mẫu: chữ bên trái trên NỀN MÀU ĐẶC (luôn đủ tương phản),
 * ảnh lớn tràn mép phải với cạnh trái cong mềm (mobile: ảnh phía dưới, cạnh trên lượn sóng).
 */
export function Hero() {
  const img = images[hero.image]

  return (
    <section
      id="trang-chu"
      aria-labelledby="hero-title"
      className="on-dark hero-curve-mask relative isolate z-10 flex min-h-svh flex-col overflow-hidden bg-forest-deep pt-(--header-h) text-cream lg:min-h-[clamp(720px,100svh,900px)]"
    >
      {/* clip-path dùng chung cho khung ảnh */}
      <svg aria-hidden width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
            <path d={`${EDGE_DESKTOP} L1,1 L1,0 Z`} />
          </clipPath>
          <clipPath id="hero-curve-m" clipPathUnits="objectBoundingBox">
            <path d={`${EDGE_MOBILE} L1,1 L0,1 Z`} />
          </clipPath>
        </defs>
      </svg>

      {/* ---- Ảnh lớn bên phải (desktop) / phía dưới (mobile) ---- */}
      <div
        style={d(150)}
        className="hero-rise relative order-2 mt-8 min-h-[200px] flex-1 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[54%] xl:w-[52%]"
      >
        <div className="absolute inset-0 [clip-path:url(#hero-curve-m)] lg:[clip-path:url(#hero-curve)]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            preload
            quality={90}
            // Ảnh phủ kín (object-cover) khung cao 100svh → bề ngang hiển thị thực tế ~1.5× chiều cao,
            // lớn hơn nhiều so với 54vw; khai báo 100vw để trình duyệt chọn bản đủ lớn, không bị phóng mờ.
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: img.position }}
          />
          {/* Dải chuyển màu nhẹ ở đỉnh ảnh: header trong suốt nằm đè lên, chữ nav vẫn đọc rõ */}
          <div aria-hidden className="absolute inset-x-0 top-0 hidden h-[calc(var(--header-h)*1.6)] bg-gradient-to-b from-forest-deep/80 to-transparent lg:block" />
          {/* làm dịu mép ảnh sát nền tối */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-forest-deep/35 via-transparent to-transparent" />
        </div>

        <svg
          aria-hidden
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 -top-3 h-full w-full text-gold-light lg:hidden"
        >
          <path d={EDGE_MOBILE} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      {/* ---- Cột chữ ---- */}
      <div className="container-page relative z-10 order-1 lg:flex lg:flex-1 lg:items-center">
        <div className="pt-9 sm:pt-14 lg:w-[46%] lg:py-20 lg:pr-6 xl:w-[45%]">
          {/*
            Tiêu đề: hiệu ứng WarpText (WebGL). Chữ thật nằm trong <h1> (sr-only) cho trình đọc màn hình & SEO;
            2 canvas (mỗi màu một canvas) chỉ là hình ảnh → aria-hidden.
          */}
          <h1 id="hero-title" className="mt-5 font-serif font-semibold uppercase lg:mt-6" style={TITLE_VARS}>
            <span className="sr-only">{`${hero.titleLead.join(' ')} – ${hero.titleAccent.join(' ')}`}</span>
            <span aria-hidden className="block">
              <WarpText text={hero.titleLead.join(LINE_BREAK).toUpperCase()} className="text-cream" {...WARP} />
              <WarpText text={hero.titleAccent.join(LINE_BREAK).toUpperCase()} className="text-gold-light" {...WARP} />
            </span>
          </h1>

          <p className="hero-rise text-body mt-6 max-w-[520px] text-cream-muted lg:mt-8" style={d(300)}>
            {nb(hero.description)}
          </p>

          <div className="hero-rise mt-7 flex flex-wrap gap-3 lg:mt-9 lg:gap-4" style={d(400)}>
            {/* CTA chính: đồng thau + chữ ink (7.69:1) */}
            <a
              href={callHref}
              className="btn min-h-14 bg-gold-light px-5 text-[17px] text-ink shadow-[0_10px_24px_-14px_rgb(0_0_0/0.6)] hover:bg-cream sm:px-7"
            >
              <PhoneIcon size={21} />
              {hero.primaryCta}
            </a>
            {/* CTA phụ: viền pill + mũi tên như ảnh mẫu */}
            <a
              href="#dat-lich"
              className="btn group min-h-14 border-2 border-cream-muted px-5 text-[17px] text-cream hover:border-gold-light hover:text-gold-light sm:px-7"
            >
              {hero.secondaryCta}
              <ArrowRightIcon size={19} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Viền vàng theo đường cong đáy (phần dưới đường cong đã trong suốt nhờ .hero-curve-mask) */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-7 w-full text-gold sm:h-12 lg:h-16"
      >
        <path d="M0 40C240 10 480 0 720 0s480 10 720 40" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>
    </section>
  )
}
