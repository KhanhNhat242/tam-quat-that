import { images, services } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { ArrowRightIcon } from '@/components/ui/icons'
import ServicesScroller from './services-scroller'

/**
 * Dịch vụ – tiêu đề + "scroller" chồng thẻ 3D theo cuộn (desktop) / danh sách tĩnh (mobile, giảm chuyển động).
 * Nền xanh trầm (forest) → chữ dùng cream / cream-muted / gold-light (REQUIREMENTS mục 13).
 * Lưu ý: KHÔNG đặt overflow-hidden trên section – sẽ làm hỏng position: sticky của sân khấu.
 */
export function Services() {
  const items = services.items.map((s) => ({
    id: s.id,
    name: s.name,
    tag: s.tag,
    text: s.text,
    points: s.points,
    image: images[s.image],
  }))

  return (
    <section id="dich-vu" aria-labelledby="services-title" className="on-dark bg-forest pt-17 pb-12 lg:pt-26 lg:pb-16">
      <div className="container-page mb-10 grid gap-5 lg:mb-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16" data-reveal="up">
        <h2 id="services-title" className="font-serif text-[30px] leading-[1.2] font-semibold text-cream sm:text-[36px] lg:text-[44px]">
          {nb(services.title)}
        </h2>
        <div className="max-w-[520px]">
          <p className="text-body text-cream-muted">{nb(services.description)}</p>
          <a
            href="#bang-gia"
            className="group mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-cream underline decoration-gold-light decoration-2 underline-offset-[6px] hover:text-gold-light"
          >
            {services.priceLink}
            <ArrowRightIcon size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <ServicesScroller items={items} labels={{ cta: services.cta, goTo: services.progressLabel }} />
    </section>
  )
}
