import Image from 'next/image'
import { images, services } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { revealDelay } from '@/lib/style'
import { ArrowRightIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'
import { ServiceLink } from '@/components/ui/service-link'

export function Services() {
  return (
    <section id="dich-vu" aria-labelledby="services-title" className="section-y bg-cream lg:py-26">
      <div className="container-page">
        <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} description={services.description} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.items.map((s, i) => {
            const img = images[s.image]
            return (
              <div
                key={s.id}
                data-reveal="up"
                style={revealDelay(i * 140)}
                className={`flex ${i === 2 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-12px)] lg:col-span-1 lg:w-auto' : ''}`}
              >
              <article className="corner-frame group flex w-full flex-col overflow-hidden rounded-[22px] border border-wood-soft/70 bg-paper shadow-[0_20px_50px_-35px_rgb(107_74_47/0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_30px_60px_-30px_rgb(107_74_47/0.55)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-(--ease-soft) group-hover:scale-[1.07]"
                    style={{ objectPosition: img.position }}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/5 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-gold-light/60 bg-forest-deep/75 px-3.5 py-1.5 text-[14px] font-medium text-cream backdrop-blur">
                    {nb(s.tag)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-serif text-[22px] leading-snug font-semibold text-forest-deep lg:text-[24px]">{nb(s.name)}</h3>
                  <p className="mt-3 flex-1 text-[16px] leading-[1.6] text-ink-soft lg:text-[17px]">{nb(s.text)}</p>
                  <ServiceLink
                    serviceId={s.id}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-forest transition-colors hover:text-gold-dark"
                  >
                    {services.cta}
                    <ArrowRightIcon size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </ServiceLink>
                </div>
              </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
