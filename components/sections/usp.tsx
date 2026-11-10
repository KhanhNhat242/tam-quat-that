import Image from 'next/image'
import { images, logo, usp } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { revealDelay } from '@/lib/style'
import { Counter } from '@/components/ui/counter'
import { Curve } from '@/components/ui/curve'
import { SectionHeading } from '@/components/ui/section-heading'

export function Usp() {
  return (
    <section aria-labelledby="usp-title" className="relative isolate overflow-hidden bg-forest py-24 text-cream lg:py-32">
      <Curve position="top" colorClass="text-cream" />
      <Curve position="bottom" colorClass="text-cream" />

      {/* nền: lưới chấm + vân lá thuốc chìm ở góc */}
      <div aria-hidden className="pattern-lattice absolute inset-0 -z-10 opacity-50" />
      <svg aria-hidden viewBox="0 0 400 400" className="deco-float absolute -top-6 -left-16 -z-10 w-[300px] text-gold opacity-[0.12] lg:w-[420px]">
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M40 360C120 260 200 180 360 40" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${80 + i * 46} ${310 - i * 46})`}>
              <path d="M0 0c-10-40 10-80 50-96 6 40-10 80-50 96z" />
              <path d="M0 0c40 10 80-6 96-46-40-6-80 10-96 46z" />
            </g>
          ))}
        </g>
      </svg>
      <div aria-hidden className="absolute -right-24 -bottom-16 -z-10 w-[380px] opacity-[0.07] lg:w-[460px]">
        <Image src={logo.iconLight.src} width={logo.iconLight.width} height={logo.iconLight.height} alt="" />
      </div>

      <div className="container-page">
        <SectionHeading id="usp-title" eyebrow={usp.eyebrow} title={usp.title} tone="dark" />

        {/* Dải 4 con số */}
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
          {usp.stats.map((s, i) => (
            <div
              key={s.unit}
              data-reveal="up"
              style={revealDelay(i * 120)}
              className={`flex flex-col items-center px-2 text-center lg:px-4 ${
                i % 2 === 1 ? 'border-l border-gold/25' : ''
              } ${i === 2 ? 'lg:border-l lg:border-gold/25' : ''}`}
            >
              <dt className="order-2 mt-3 max-w-[200px] text-[15px] leading-snug text-cream/75 lg:text-[16px]">
                <span className="mb-1 block font-serif text-[19px] font-semibold text-cream lg:text-[21px]">{s.unit}</span>
                {nb(s.label)}
              </dt>
              <dd className="order-1 font-serif text-[34px] leading-none font-semibold whitespace-nowrap min-[400px]:text-[38px] text-gold-light sm:text-[46px] lg:text-[50px]">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        {/* 2 thẻ giá trị cốt lõi */}
        <div className="mt-14 grid gap-5 lg:mt-18 lg:grid-cols-2 lg:gap-8">
          {usp.values.map((v, i) => {
            const img = images[v.image]
            return (
              <div key={v.title} data-reveal="up" style={revealDelay(i * 150)} className="flex">
              <article
                className="group flex w-full items-stretch overflow-hidden rounded-[22px] border border-gold/30 bg-forest-deep/55 backdrop-blur-sm transition-colors duration-500 hover:border-gold/70"
              >
                <div className="relative w-[34%] shrink-0 overflow-hidden sm:w-[38%]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 220px, 35vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: img.position }}
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <h3 className="font-serif text-[20px] leading-snug font-semibold text-gold-light lg:text-[23px]">{nb(v.title)}</h3>
                  <p className="mt-2 text-[15.5px] leading-[1.6] text-cream/80 lg:text-[17px]">{nb(v.text)}</p>
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
