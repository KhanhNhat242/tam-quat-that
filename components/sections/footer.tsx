import Image from 'next/image'
import { business, footer, logo, navItems, services } from '@/lib/site-config'
import { callHref, orPending } from '@/lib/contact'
import { nb } from '@/lib/text'
import { ClockIcon, MapPinIcon, PhoneIcon } from '@/components/ui/icons'
import { Curve } from '@/components/ui/curve'

const linkClass = 'inline-flex min-h-11 items-center transition-colors duration-200 hover:text-gold-light'

export function Footer() {
  return (
    <footer className="on-dark relative bg-forest-deep pt-24 text-cream lg:pt-28">
      <Curve position="top" colorClass="text-cream" />

      <div className="container-page relative grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr] lg:gap-14 lg:pb-16">
        <div className="md:col-span-2 lg:col-span-1">
          <a href="#trang-chu" className="inline-flex items-center gap-4" aria-label={`${business.brand} – về đầu trang`}>
            <Image src={logo.iconLight.src} width={logo.iconLight.width} height={logo.iconLight.height} alt="" className="h-16 w-auto" />
            <span>
              <span className="block font-serif text-[24px] font-bold tracking-[0.06em] text-cream uppercase">{business.name}</span>
              <span className="mt-1 block font-serif text-[17px] text-gold-light">{nb(`711 Hồng_Hà · ${business.tagline}`)}</span>
            </span>
          </a>
          <p className="mt-5 font-serif text-[19px] text-gold-light italic">“{nb(business.slogan)}”</p>
          <p className="mt-3 max-w-[400px] text-[16px] leading-[1.65] text-cream-muted">{nb(footer.description)}</p>
        </div>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="font-serif text-[20px] font-semibold text-gold-light">
            {footer.servicesTitle}
          </h2>
          <ul className="mt-4 text-[16px] text-cream">
            {services.items.map((s) => (
              <li key={s.id}>
                <a href="#dich-vu" className={linkClass}>
                  {nb(s.name)}
                </a>
              </li>
            ))}
            <li>
              <a href="#bang-gia" className={linkClass}>
                Bảng giá dịch vụ
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-[20px] font-semibold text-gold-light">{footer.contactTitle}</h2>
          <ul className="mt-4 space-y-2 text-[16px] text-cream">
            <li className="flex items-start gap-3">
              <PhoneIcon size={18} aria-hidden className="mt-3 shrink-0 text-gold-light" />
              {business.phone ? (
                <a href={callHref} className={`${linkClass} font-semibold underline decoration-gold-light underline-offset-4`}>
                  {business.phone} ({business.contactName})
                </a>
              ) : (
                <span className="py-2.5">{orPending('')}</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon size={18} aria-hidden className="mt-3 shrink-0 text-gold-light" />
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} py-2 underline decoration-gold-light underline-offset-4`}>
                {business.address ? nb(business.address) : 'Xem trên Google Maps'}
                <span className="sr-only">(mở Google Maps trong thẻ mới)</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon size={18} aria-hidden className="mt-3 shrink-0 text-gold-light" />
              <span className="py-2.5">Giờ mở cửa: {orPending(business.openingHours)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-gold/40">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 pb-28 text-center text-[16px] text-cream-muted lg:flex-row lg:pb-5 lg:text-left">
          <p>{footer.copyright}</p>
          <nav aria-label="Liên kết cuối trang" className="shrink-0">
            <ul className="grid grid-cols-2 justify-items-center gap-x-8 whitespace-nowrap min-[380px]:flex min-[380px]:gap-x-5">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className={linkClass}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
