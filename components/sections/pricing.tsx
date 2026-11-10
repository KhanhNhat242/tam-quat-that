import { pricing } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { nb } from '@/lib/text'
import { revealDelay } from '@/lib/style'
import { ArrowRightIcon, PhoneIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'
import { ServiceLink } from '@/components/ui/service-link'
import { DotBullet } from '@/components/ui/three-dots'

export function Pricing() {
  return (
    <section id="bang-gia" aria-labelledby="pricing-title" className="section-y relative bg-sand lg:py-26">
      {/* đường viền vàng đồng mảnh phân tách với khu Dịch vụ */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="container-page">
        <SectionHeading id="pricing-title" eyebrow={pricing.eyebrow} title={pricing.title} description={pricing.description} />

        {/* 3 gói thời gian */}
        <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-3 lg:gap-7">
          {pricing.packages.map((p, i) => (
            <div key={p.id} data-reveal="up" style={revealDelay(i * 130)} className={`flex ${p.featured ? 'md:-my-3' : ''}`}>
              <article
                className={`relative flex w-full flex-col rounded-[22px] border p-7 text-center transition-all duration-500 hover:-translate-y-1.5 lg:p-8 ${
                  p.featured
                    ? 'border-2 border-gold bg-forest-deep text-cream shadow-[0_30px_60px_-28px_rgb(31_51_40/0.75)]'
                    : 'border-wood-soft/80 bg-paper text-ink shadow-[0_18px_40px_-32px_rgb(107_74_47/0.7)] hover:border-gold'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-light px-4 py-1.5 text-[13.5px] font-semibold tracking-wide whitespace-nowrap text-forest-deep shadow">
                    {pricing.featuredLabel}
                  </span>
                )}
                <p className={`text-[14.5px] font-medium ${p.featured ? 'text-cream/70' : 'text-ink-soft'}`}>{nb(pricing.packageService)}</p>
                <p className="mt-3 font-serif leading-none">
                  <span className={`text-[56px] font-semibold lg:text-[64px] ${p.featured ? 'text-gold-light' : 'text-forest-deep'}`}>{p.minutes}</span>
                  <span className={`ml-2 text-[22px] ${p.featured ? 'text-cream' : 'text-forest'}`}>Phút</span>
                </p>
                <p
                  className={`mx-auto mt-4 w-full border-y py-3 font-serif text-[19px] font-semibold ${
                    p.featured ? 'border-gold/35 text-gold-light' : 'border-wood/15 text-gold-dark'
                  }`}
                >
                  {p.price ?? pricing.priceFallback}
                </p>
                <ul className="mt-5 flex-1 space-y-3 text-left">
                  {p.items.map((item) => (
                    <li key={item} className={`flex gap-3 text-[16px] leading-[1.5] ${p.featured ? 'text-cream/85' : 'text-ink-soft'}`}>
                      <DotBullet />
                      <span>{nb(item)}</span>
                    </li>
                  ))}
                </ul>
                <ServiceLink
                  serviceId={p.id}
                  className={`btn mt-7 w-full ${
                    p.featured ? 'bg-gold-light text-forest-deep hover:bg-cream' : 'border border-forest text-forest hover:bg-forest hover:text-cream'
                  }`}
                >
                  {pricing.packageCta}
                </ServiceLink>
              </article>
            </div>
          ))}
        </div>

        {/* Dịch vụ lẻ */}
        <div
          data-reveal="up"
          className="mx-auto mt-8 max-w-[1080px] overflow-hidden rounded-[22px] border border-wood-soft/80 bg-paper lg:mt-10"
        >
          <ul className="divide-y divide-wood/12 md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
            {pricing.extras.map((e) => (
              <li key={e.id} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
                <div>
                  <h3 className="font-serif text-[21px] font-semibold text-forest-deep lg:text-[22px]">{nb(e.name)}</h3>
                  <p className="mt-1.5 text-[15.5px] leading-[1.55] text-ink-soft lg:text-[16px]">{nb(e.text)}</p>
                </div>
                <div className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-1.5">
                  <span className="font-serif text-[17px] font-semibold whitespace-nowrap text-gold-dark">{e.price ?? pricing.priceFallback}</span>
                  <ServiceLink serviceId={e.id} className="inline-flex min-h-11 items-center gap-1.5 font-semibold whitespace-nowrap text-forest hover:text-gold-dark">
                    {pricing.packageCta}
                    <ArrowRightIcon size={17} />
                  </ServiceLink>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p data-reveal="up" className="mx-auto mt-7 flex max-w-[620px] flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[15px] text-ink-soft italic">
          <span>{nb(pricing.note)}</span>
          <a href={callHref} className="inline-flex items-center gap-1.5 font-semibold text-forest not-italic hover:text-gold-dark">
            <PhoneIcon size={16} />
            Gọi ngay
          </a>
        </p>
      </div>
    </section>
  )
}
