import { testimonials } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { revealDelay } from '@/lib/style'
import { QuoteIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section-y relative bg-sand lg:py-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-page">
        <SectionHeading id="testimonials-title" eyebrow={testimonials.eyebrow} title={testimonials.title} />
      </div>

      {/* Mobile: vuốt ngang · Desktop: lưới 3 cột */}
      <ul className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 md:container-page md:grid md:grid-cols-3 md:gap-7 md:overflow-visible">
        {testimonials.items.map((t, i) => (
          <li
            key={t.group}
            data-reveal="up"
            style={revealDelay(i * 130)}
            className="w-[84%] max-w-[380px] shrink-0 snap-start md:w-auto md:max-w-none"
          >
            <figure className="relative flex h-full flex-col rounded-[22px] border border-wood-soft/70 bg-paper p-7 shadow-[0_18px_40px_-32px_rgb(107_74_47/0.7)] lg:p-8">
              <QuoteIcon size={42} className="text-gold" />
              <blockquote className="mt-4 flex-1 font-serif text-[18px] leading-[1.6] text-ink lg:text-[19px]">
                {nb(t.quote)}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-wood/12 pt-5 text-[15px] font-medium text-forest">
                <span aria-hidden className="flex gap-1">
                  <span className="size-1.5 rounded-full bg-gold" />
                  <span className="size-1.5 rounded-full bg-gold" />
                  <span className="size-1.5 rounded-full bg-gold" />
                </span>
                {nb(t.group)}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-[13.5px] text-ink-soft md:hidden" aria-hidden>
        Vuốt ngang để xem thêm →
      </p>
    </section>
  )
}
