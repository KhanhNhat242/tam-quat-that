import Image from 'next/image'
import { Fragment, type CSSProperties } from 'react'
import { about, business, images } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { nb } from '@/lib/text'
import { ArrowRightIcon, PhoneIcon } from '@/components/ui/icons'

/** Cụm từ không ngắt giữa chừng → tiêu đề không bao giờ rớt 1 chữ */
function Chunks({ parts }: { parts: readonly string[] }) {
  return parts.map((c, i) => (
    <Fragment key={c}>
      {i > 0 && ' '}
      <span className="whitespace-nowrap">{c}</span>
    </Fragment>
  ))
}

/**
 * Giới thiệu – bố cục theo ảnh mẫu (đảo bên theo yêu cầu):
 * ảnh lớn tràn mép trái, hoà dần sang nền kem bằng gradient; nội dung bên phải:
 * nhãn → tiêu đề 2 độ đậm → đoạn văn → dòng thông tin → nút → hộp hotline bo tròn.
 * Mobile: ảnh phía trên, gradient hoà xuống nội dung bên dưới.
 */
export function About() {
  const img = images[about.image]

  return (
    <section id="gioi-thieu" aria-labelledby="about-title" className="pull-under-curve relative isolate overflow-hidden bg-cream">
      {/* ---- Ảnh: trái (desktop) / trên (mobile) ---- */}
      <div className="relative h-[340px] sm:h-[420px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[54%]" data-reveal="left">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover [object-position:var(--pos)] lg:[object-position:var(--pos-lg)]"
          style={{ '--pos': about.imagePosition.mobile, '--pos-lg': about.imagePosition.desktop } as CSSProperties}
        />
        {/* Gradient chuyển tiếp ảnh → nền kem: sang phải (desktop), xuống dưới (mobile) */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-cream lg:hidden" />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 hidden w-[62%] bg-gradient-to-r from-transparent via-cream/80 via-55% to-cream to-90% lg:block"
        />
        {/* Mép trên/dưới dịu nhẹ để ảnh không cắt gắt vào section kề bên */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-16 bg-gradient-to-t from-cream/60 to-transparent lg:block" />
      </div>

      {/* ---- Nội dung: phải ---- */}
      <div className="container-page relative">
        <div className="-mt-10 pb-17 lg:mt-0 lg:ml-auto lg:w-[48%] lg:pt-[calc(7rem+var(--curve-h))] lg:pb-28 xl:w-[46%]" data-reveal="up">
          <h2 id="about-title" className="mt-4 font-serif text-[36px] leading-[1.1] sm:text-[44px] lg:text-[48px] xl:text-[54px]">
            <span className="block font-normal text-forest">
              <Chunks parts={about.titleLead} />
            </span>
            <span className="block font-semibold text-forest-deep">
              <Chunks parts={about.titleAccent} />
            </span>
          </h2>

          <div className="mt-6 max-w-[560px] space-y-4">
            <p className="text-body text-ink">{nb(about.paragraphs)}</p>
          </div>

          {/* Dòng thông tin (kiểu "tác giả / ngày") */}
          <p className="mt-6 text-[16px] font-semibold tracking-[0.08em] text-wood-deep uppercase">
            {about.meta[0]}{' '}
            <span className="inline-block font-medium tracking-normal whitespace-nowrap normal-case">
              <span aria-hidden className="mr-2 font-normal text-gold-dark">/</span>
              {nb(about.meta[1])}
            </span>
          </p>

          <a
            href="#dat-lich"
            className="btn group mt-7 min-h-12 bg-forest px-7 text-white hover:bg-forest-deep"
          >
            {about.cta}
            <ArrowRightIcon size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
