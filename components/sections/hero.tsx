import Image from 'next/image'
import { hero, images, logo } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { nb } from '@/lib/text'
import { CalendarIcon, PhoneIcon } from '@/components/ui/icons'
import { ThreeDots } from '@/components/ui/three-dots'
import { Fragment, type CSSProperties } from 'react'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section
      id="trang-chu"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden bg-forest-deep text-cream lg:min-h-[max(640px,calc(100svh-var(--header-h)))]"
    >
      {/* ---- Nền: ánh nến vàng đồng, lưới chấm, logo chìm ---- */}
      <div aria-hidden className="pattern-lattice absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden
        className="candle-glow absolute -z-10 size-[620px] rounded-full bg-[radial-gradient(circle,rgb(201_168_114/0.32),transparent_65%)] max-lg:-right-40 max-lg:bottom-0 lg:top-1/2 lg:right-[2%] lg:-translate-y-1/2"
      />
      <div
        aria-hidden
        className="absolute -left-24 top-1/2 -z-10 hidden w-[520px] -translate-y-1/2 opacity-[0.06] lg:block"
      >
        <Image src={logo.iconLight.src} width={logo.iconLight.width} height={logo.iconLight.height} alt="" />
      </div>
      <div aria-hidden className="absolute inset-y-0 left-[6%] -z-10 hidden w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent xl:block" />

      <div className="container-page flex flex-1 flex-col lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:py-16 xl:gap-20">
        {/* ---- Cột chữ ---- */}
        <div className="relative z-10 pt-9 sm:pt-14 lg:pt-0">
          <p className="hero-rise eyebrow flex items-center gap-3 text-gold-light max-sm:text-[12px] max-sm:tracking-[0.12em]" style={d(100)}>
            <span aria-hidden className="hidden h-px w-8 bg-gold-light/70 sm:block" />
            {nb(hero.eyebrow)}
          </p>

          <h1
            id="hero-title"
            className="hero-rise mt-5 font-serif text-[36px] leading-[1.14] font-semibold sm:text-[50px] lg:mt-6 lg:text-[50px] xl:text-[57px]"
            style={d(220)}
          >
            {/* Mỗi cụm từ không bị ngắt giữa chừng → không bao giờ rớt 1 chữ */}
            <span className="block text-cream">
              {hero.titleLead.map((c, i) => (
                <Fragment key={c}>
                  {i > 0 && ' '}
                  <span className="whitespace-nowrap">{c}</span>
                </Fragment>
              ))}
            </span>
            <span className="block text-gold-light italic">
              {hero.titleAccent.map((c, i) => (
                <Fragment key={c}>
                  {i > 0 && ' '}
                  <span className="whitespace-nowrap">{c}</span>
                </Fragment>
              ))}
            </span>
          </h1>

          <ThreeDots className="hero-rise mt-5 lg:mt-7" width={120} />

          <p
            className="hero-rise text-body mt-4 max-w-[540px] text-cream/82 lg:mt-6"
            style={d(360)}
          >
            {nb(hero.description)}
          </p>

          <div className="hero-rise mt-7 flex flex-wrap gap-3 lg:mt-9 lg:gap-4" style={d(480)}>
            <a
              href={callHref}
              className="btn breathe bg-gold-light text-forest-deep shadow-[0_12px_30px_-12px_rgb(201_168_114/0.8)] hover:bg-cream max-[379px]:flex-1"
            >
              <PhoneIcon size={20} />
              {hero.primaryCta}
            </a>
            <a
              href="#dat-lich"
              className="btn border border-cream/45 text-cream hover:border-gold-light hover:bg-cream/8 max-[379px]:flex-1"
            >
              <CalendarIcon size={20} />
              {hero.secondaryCta}
            </a>
          </div>

          <ul
            className="hero-rise mt-7 hidden flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-cream/70 sm:flex lg:mt-10"
            style={d(600)}
          >
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-gold-light" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Cột ảnh: khung vòm viền vàng đồng ---- */}
        <div className="relative mt-9 min-h-[230px] flex-1 sm:mt-12 lg:mt-0 lg:flex lg:h-full lg:items-center lg:justify-center">
          <div style={d(150)} className="hero-rise absolute inset-x-0 top-0 bottom-0 mx-auto w-[min(76%,330px)] sm:w-[min(62%,380px)] lg:relative lg:inset-auto lg:aspect-[4/5] lg:h-auto lg:max-h-[calc(100svh-var(--header-h)-120px)] lg:w-full lg:max-w-[440px]">
            {/* viền vòm lệch */}
            <div aria-hidden style={d(500)} className="hero-rise arch absolute -inset-3 border border-gold/60 max-lg:bottom-0 lg:-inset-4" />
            <div style={d(200)} className="hero-arch arch relative h-full w-full overflow-hidden border-2 border-gold shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] max-lg:rounded-b-none max-lg:border-b-0">
              <Image
                src={images.handsFoot.src}
                alt={images.handsFoot.alt}
                fill
                preload
                sizes="(min-width: 1024px) 440px, 80vw"
                className="object-cover"
                style={{ objectPosition: images.handsFoot.position }}
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 via-transparent to-transparent" />
            </div>

            {/* ảnh ghép chồng góc dưới */}
            <div style={d(750)} className="hero-rise absolute -bottom-6 -left-14 hidden w-[42%] overflow-hidden rounded-[22px] border-4 border-cream shadow-[0_24px_50px_-20px_rgb(0_0_0/0.7)] lg:block xl:-left-20">
              <Image
                src={images.backPress.src}
                alt={images.backPress.alt}
                width={images.backPress.width}
                height={images.backPress.height}
                sizes="200px"
                className="aspect-square h-auto w-full object-cover"
                style={{ objectPosition: images.backPress.position }}
              />
            </div>

            {/* huy hiệu nổi */}
            <div className="deco-float absolute -top-2 -right-4 hidden size-[118px] flex-col items-center justify-center rounded-full border border-gold-light/70 bg-forest/90 text-center shadow-xl backdrop-blur lg:flex xl:-right-10">
              <span className="font-serif text-[34px] leading-none font-semibold text-gold-light">15</span>
              <span className="mt-1 text-[12.5px] leading-tight text-cream/85">
                năm
                <br />
                kinh nghiệm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* gợi ý cuộn (desktop) */}
      <a
        href="#gioi-thieu"
        aria-label="Cuộn xuống phần giới thiệu"
        className="absolute bottom-16 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[12px] tracking-[0.2em] text-cream/60 uppercase lg:flex"
      >
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-cream/40">
          <span className="scroll-hint mt-2 size-1.5 rounded-full bg-gold-light" />
        </span>
      </a>

      {/* dải bo cong chuyển sang nền kem */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-px z-20 h-7 w-full text-cream sm:h-12 lg:h-16"
      >
        <path d="M0 80V40C240 10 480 0 720 0s480 10 720 40v40z" fill="currentColor" />
        <path d="M0 40C240 10 480 0 720 0s480 10 720 40" fill="none" stroke="#b08d57" strokeOpacity=".7" strokeWidth="1.5" />
      </svg>
    </section>
  )
}
