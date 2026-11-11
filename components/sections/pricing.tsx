import Image from 'next/image'
import type { CSSProperties } from 'react'
import { images, pricing } from '@/lib/site-config'
import { nb, plain } from '@/lib/text'
import FlipCard from '@/components/ui/flip-card/FlipCard'
import { ArrowRightIcon, RotateIcon } from '@/components/ui/icons'
import { DotBullet, ThreeDots } from '@/components/ui/three-dots'
import { SectionHeading } from '@/components/ui/section-heading'
import { ServiceLink } from '@/components/ui/service-link'

type Extra = (typeof pricing.extras)[number]

/** Thứ tự xuất hiện lệch nhịp của từng dòng chi tiết (CSS: .svc-detail [data-stagger]) */
const stagger = (i: number) => ({ '--i': i }) as CSSProperties

/**
 * Một ô dịch vụ lẻ dạng accordion ngang.
 * Mặc định chỉ hiện giá + tiêu đề đè lên ảnh; hover hoặc focus bàn phím → ô giãn ngang và hiện chi tiết.
 * Thiết bị không hover được (điện thoại, máy tính bảng): chi tiết luôn hiển thị.
 */
function ServicePanel({ extra }: { extra: Extra }) {
  const img = images[extra.image]
  return (
    <li className="svc-panel on-dark relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-forest-deep text-cream">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
        className="svc-image -z-10 object-cover"
        style={{ objectPosition: img.position }}
      />
      {/* Mặc định: chỉ 1 dải tối mỏng ở đáy cho tiêu đề – ảnh phía trên giữ nguyên độ rõ */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[42%] bg-gradient-to-t from-forest-deep/90 via-forest-deep/50 to-transparent" />
      {/* Hover/focus: lớp tối toàn ô (ảnh được làm mờ trong CSS) để chữ chi tiết luôn đủ tương phản */}
      <div aria-hidden className="svc-shade absolute inset-0 -z-10 bg-forest-deep/65" />

      <div className="p-6 lg:p-8">
        <p className="font-serif whitespace-nowrap text-gold-light">
          <span className="text-[26px] font-semibold">{extra.price ?? pricing.priceFallback}</span>{' '}
          <span className="text-[16px]">{extra.unit}</span>
        </p>
        <h4 className="mt-1 font-serif text-[24px] leading-[1.2] font-semibold text-cream lg:text-[28px]">{nb(extra.name)}</h4>

        <div className="svc-detail">
          <div>
            {/* p-1/-m-1: chừa chỗ cho viền focus, tránh bị overflow cắt mất */}
            <div className="-m-1 p-1 pt-4">
              <p data-stagger style={stagger(0)} className="text-[16px] font-semibold text-cream">{nb(extra.audience)}</p>
              <p data-stagger style={stagger(1)} className="mt-2 max-w-[520px] text-[16.5px] leading-[1.6] text-cream-muted">{nb(extra.description)}</p>
              <div data-stagger style={stagger(2)} className="mt-5">
              <ServiceLink serviceId={extra.id} className="btn min-h-12 bg-gold-light text-ink hover:bg-cream">
                {pricing.packageCta}
                <ArrowRightIcon size={18} />
              </ServiceLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

/**
 * Bảng giá: 3 thẻ lật (FlipCard – React Bits) cho gói 60/90/120 phút + 2 ô dịch vụ lẻ accordion ngang (ServicePanel).
 * Mặt trước: ảnh minh hoạ + tiêu đề; nhấn / Enter / Space để lật xem chi tiết (REQUIREMENTS mục 13).
 */
export function Pricing() {
  return (
    <section id="bang-gia" aria-labelledby="pricing-title" className="section-y relative overflow-hidden bg-sand lg:py-26">

      <div className="container-page">
        <SectionHeading id="pricing-title" title={pricing.title} description={pricing.description} layout="split" />

        {/* 3 gói thời gian – thẻ lật (FlipCard). Nút "Đặt gói này" đặt NGOÀI thẻ vì thẻ là một nút bấm. */}
        {/* Tên liệu trình hiển thị 1 lần cho cả 3 gói (không lặp trên từng thẻ) */}
        <h3 className="mb-5 font-serif text-[24px] font-semibold text-forest-deep lg:mb-6 lg:text-[28px]">{nb(pricing.packageService)}</h3>
        <ul className="grid gap-8 md:grid-cols-3 md:gap-5 lg:gap-7" data-reveal="up">
          {pricing.packages.map((p) => {
            const img = images[p.image]
            const price = p.price ?? pricing.priceFallback
            const descId = `goi-${p.minutes}-chi-tiet`
            return (
              <li key={p.id} className="flex flex-col gap-4">
                <p id={descId} className="sr-only">
                  {`${plain(pricing.packageService)} ${p.minutes} phút, giá ${price}. ${pricing.packageDetails.map(plain).join('. ')}.`}
                </p>
                <FlipCard
                  fluid
                  ariaLabel={`Gói ${p.minutes} phút – ${price}. Lật thẻ để xem chi tiết`}
                  ariaDescribedBy={descId}
                  axis="y"
                  flipOnClick
                  draggable
                  dragDistance={0}
                  tilt
                  tiltMax={12}
                  glare
                  glareOpacity={0.22}
                  hoverScale={1.03}
                  perspective={1100}
                  stiffness={170}
                  damping={20}
                  height={460}
                  radius={14}
                  background="var(--color-forest-deep)"
                  color="var(--color-cream)"
                  shadow
                  shadowColor="var(--color-forest-deep)"
                  shadowOpacity={0.35}
                  front={
                    <div className="relative h-full w-full">
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 340px, 92vw"
                        className="object-cover"
                        style={{ objectPosition: img.position }}
                        draggable={false}
                      />
                      {/* Tiêu đề đè lên ảnh, đặt trên dải nền màu đặc để luôn đủ tương phản */}
                      <div className="absolute inset-x-0 bottom-0">
                        <div aria-hidden className="h-14 bg-gradient-to-t from-forest-deep to-transparent" />
                        <div className="bg-forest-deep px-6 pb-6 text-left">
                          <p className="font-serif leading-none text-cream">
                            <span className="text-[52px] font-semibold">{p.minutes}</span>
                            <span className="ml-2 text-[22px]">phút</span>
                          </p>
                          <p className="mt-4 flex items-center gap-2 text-[16px] font-medium text-gold-light">
                            <RotateIcon size={18} />
                            {pricing.flipHint}
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                  back={
                    <div className="flex h-full flex-col px-6 py-7 text-left lg:px-7">
                      <p className="font-serif text-[26px] leading-tight lg:text-[30px] font-semibold whitespace-nowrap text-cream">Gói {p.minutes} phút</p>
                      <p className="mt-3 font-serif text-[40px] leading-none font-semibold text-gold-light">{price}</p>
                      <ThreeDots className="mt-5 text-gold-light" width={96} />
                      <ul className="mt-5 flex-1 space-y-3">
                        {pricing.packageDetails.map((d) => (
                          <li key={d} className="flex gap-3 text-[16.5px] leading-[1.5] text-cream">
                            <DotBullet />
                            <span>{nb(d)}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 flex items-center gap-2 text-[16px] font-medium text-gold-light">
                        <RotateIcon size={18} />
                        {pricing.flipBackHint}
                      </p>
                    </div>
                  }
                />
              </li>
            )
          })}
        </ul>

        {/* Dịch vụ lẻ – 2 ô ảnh accordion ngang (CSS: .svc-* trong app/globals.css) */}
        <h3 className="mt-14 font-serif text-[24px] font-semibold text-forest-deep lg:mt-16 lg:text-[28px]">Dịch vụ lẻ</h3>
        <ul data-reveal="up" className="svc-row mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-6 lg:gap-5">
          {pricing.extras.map((e) => (
            <ServicePanel key={e.id} extra={e} />
          ))}
        </ul>
      </div>
    </section>
  )
}
