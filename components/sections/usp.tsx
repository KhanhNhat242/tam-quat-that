import { usp } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { Curve } from '@/components/ui/curve'
import { LeafSprig } from '@/components/ui/motifs'
import { SectionHeading } from '@/components/ui/section-heading'

/**
 * Vì sao chọn chúng tôi – 2 cột: số liệu TĨNH dạng chữ (không đếm số, trình đọc màn hình đọc `spoken`)
 * và 3 lý do dạng danh sách kẻ dòng (thay cho thẻ icon-tiêu đề-đoạn văn giống hệt nhau).
 */
export function Usp() {
  return (
    <section aria-labelledby="usp-title" className="on-dark relative isolate overflow-hidden bg-forest py-24 text-cream lg:py-32">
      <Curve position="top" colorClass="text-cream" />
      <Curve position="bottom" colorClass="text-cream" />
      <LeafSprig className="absolute top-16 -right-8 -z-10 hidden w-[220px] text-gold-light opacity-[0.12] lg:block" />

      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="usp-title" eyebrow={usp.eyebrow} title={usp.title} tone="dark" className="!mb-10" />

          <dl className="grid grid-cols-2 gap-x-8 gap-y-8" data-reveal="up">
            {usp.stats.map((s) => (
              <div key={s.unit} className="flex flex-col border-t border-gold/50 pt-5">
                <dt className="order-2 mt-2">
                  <span className="block font-serif text-[19px] leading-snug font-semibold text-cream">{nb(s.unit)}</span>
                  <span className="mt-1 block text-[16px] leading-snug text-cream-muted">{nb(s.label)}</span>
                </dt>
                <dd className="order-1 font-serif text-[40px] leading-none font-semibold whitespace-nowrap text-gold-light lg:text-[52px]">
                  <span aria-hidden>{s.display}</span>
                  <span className="sr-only">{s.spoken}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[16px] text-cream-muted italic">{usp.note}</p>
        </div>

        {/* 3 lý do chọn */}
        <ul className="self-end border-t border-gold/50" data-reveal="up">
          {usp.values.map((v) => (
            <li key={v.title} className="border-b border-gold/50 py-7 lg:py-8">
              <h3 className="font-serif text-[23px] leading-snug font-semibold text-cream lg:text-[26px]">{nb(v.title)}</h3>
              <p className="text-body mt-2 text-cream-muted">{nb(v.text)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
