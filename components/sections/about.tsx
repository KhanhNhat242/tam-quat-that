import Image from 'next/image'
import { about, images, logo } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { revealDelay } from '@/lib/style'
import { SectionHeading } from '@/components/ui/section-heading'

export function About() {
  return (
    <section id="gioi-thieu" aria-labelledby="about-title" className="section-y relative overflow-hidden bg-cream lg:py-26">
      {/* hoạ tiết lá chìm */}
      <div aria-hidden className="pointer-events-none absolute -right-28 top-10 hidden w-[360px] opacity-[0.05] lg:block">
        <Image src={logo.icon.src} width={logo.icon.width} height={logo.icon.height} alt="" />
      </div>

      <div className="container-page grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        {/* Ảnh mặt tiền */}
        <div className="relative mx-auto w-full max-w-[460px] pb-6 pl-6 lg:mx-0" data-reveal="left">
          <div aria-hidden className="arch absolute top-6 right-6 bottom-0 left-0 border border-gold/70" />
          <div className="arch relative aspect-[4/5] overflow-hidden shadow-[0_30px_60px_-30px_rgb(31_51_40/0.55)]">
            <Image
              src={images.storefront.src}
              alt={images.storefront.alt}
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="reveal-zoom object-cover"
              style={{ objectPosition: images.storefront.position }}
            />
          </div>
          <p className="absolute right-0 bottom-0 max-w-[230px] rounded-2xl bg-forest px-5 py-3.5 text-[15px] leading-snug text-cream shadow-xl sm:-right-4">
            <span aria-hidden className="mb-1.5 block h-0.5 w-8 bg-gold-light" />
            {nb(about.imageTag)}
          </p>
        </div>

        {/* Câu chuyện */}
        <div>
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} align="left" className="!mb-6 lg:!mb-8" />
          <div className="max-w-[620px] space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-body text-ink-soft" data-reveal="up" style={revealDelay(120 + i * 120)}>
                {nb(p)}
              </p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-wood/15 pt-6" data-reveal="up" style={revealDelay(360)}>
            <Image src={logo.icon.src} width={logo.icon.width} height={logo.icon.height} alt="" className="h-12 w-auto" />
            <p className="font-serif text-[18px] text-forest-deep italic lg:text-[20px]">{nb(about.signature)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
