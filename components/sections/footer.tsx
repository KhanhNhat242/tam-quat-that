import Image from 'next/image'
import { business, footer, logo, navItems, services } from '@/lib/site-config'
import { callHref, orPending } from '@/lib/contact'
import { nb } from '@/lib/text'
import { ClockIcon, MapPinIcon, PhoneIcon } from '@/components/ui/icons'
import { Curve } from '@/components/ui/curve'
import { ThreeDots } from '@/components/ui/three-dots'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep pt-24 text-cream lg:pt-28">
      <Curve position="top" colorClass="text-cream" />
      <div aria-hidden className="pattern-lattice absolute inset-0 opacity-40" />

      <div className="container-page relative grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-14 lg:pb-16">
        <div className="md:col-span-2 lg:col-span-1">
          <a href="#trang-chu" className="inline-flex items-center gap-4" aria-label={`${business.name} – về đầu trang`}>
            <Image src={logo.iconLight.src} width={logo.iconLight.width} height={logo.iconLight.height} alt="" className="h-16 w-auto" />
            <span>
              <span className="block font-serif text-[24px] font-bold tracking-[0.06em] text-cream uppercase">{business.name}</span>
              <span className="mt-1 block font-serif text-[16px] text-gold-light">{business.tagline}</span>
            </span>
          </a>
          <p className="mt-5 max-w-[380px] text-[16px] leading-[1.65] text-cream/70">{nb(footer.description)}</p>
          <ThreeDots className="mt-6" width={112} />
        </div>

        <div>
          <h2 className="font-serif text-[20px] font-semibold text-gold-light">{footer.servicesTitle}</h2>
          <ul className="mt-5 space-y-3">
            {services.items.map((s) => (
              <li key={s.id}>
                <a href="#dich-vu" className="text-[16px] text-cream/80 transition-colors hover:text-gold-light">
                  {nb(s.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-[20px] font-semibold text-gold-light">{footer.contactTitle}</h2>
          <ul className="mt-5 space-y-3.5 text-[16px] text-cream/80">
            <li className="flex items-start gap-3">
              <PhoneIcon size={18} className="mt-1 shrink-0 text-gold-light" />
              {business.phone ? <a href={callHref} className="hover:text-gold-light">{business.phone}</a> : orPending('')}
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon size={18} className="mt-1 shrink-0 text-gold-light" />
              {orPending(business.openingHours)}
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon size={18} className="mt-1 shrink-0 text-gold-light" />
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/60 underline-offset-4 hover:text-gold-light">
                {business.address || 'Xem trên Google Maps'}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-gold/20">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 pb-24 text-[14px] text-cream/55 sm:flex-row sm:pb-6">
          <p>{footer.copyright}</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold-light">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
