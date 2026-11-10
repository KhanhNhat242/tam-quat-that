import Image from 'next/image'
import { booking, business, images } from '@/lib/site-config'
import { callHref, orPending } from '@/lib/contact'
import { nb } from '@/lib/text'
import { ArrowRightIcon, ClockIcon, MapPinIcon, PhoneIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'
import { BookingForm } from './booking-form'

export function Booking() {
  const info = [
    { icon: PhoneIcon, label: 'Điện thoại', value: orPending(business.phone), href: business.phone ? callHref : undefined },
    { icon: ClockIcon, label: 'Giờ mở cửa', value: orPending(business.openingHours) },
    { icon: MapPinIcon, label: 'Địa chỉ', value: business.address || `${business.city} – xem bản đồ bên dưới` },
  ]

  return (
    <section id="dat-lich" aria-labelledby="booking-title" className="section-y relative bg-cream lg:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-page">
        <SectionHeading id="booking-title" eyebrow={booking.eyebrow} title={booking.title} description={booking.description} />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Cột trái: form */}
          <div data-reveal="left">
            <BookingForm />
          </div>

          {/* Cột phải: thông tin + bản đồ */}
          <div data-reveal="right" className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[22px] bg-forest-deep text-cream">
              <div className="flex items-center gap-4 border-b border-gold/25 p-5 sm:p-6">
                <div className="relative size-18 shrink-0 overflow-hidden rounded-2xl border border-gold/50">
                  <Image src={images.storefront.src} alt={images.storefront.alt} fill sizes="72px" className="object-cover" style={{ objectPosition: '50% 52%' }} />
                </div>
                <div>
                  <p className="font-serif text-[21px] font-semibold text-gold-light">{business.name}</p>
                  <p className="text-[15px] text-cream/75">{nb(business.tagline)}</p>
                </div>
              </div>
              <dl className="space-y-4 p-5 sm:p-6">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-light">
                      <Icon size={19} />
                    </span>
                    <div>
                      <dt className="text-[13.5px] tracking-wide text-cream/60 uppercase">{label}</dt>
                      <dd className="mt-0.5 text-[17px] font-medium">
                        {href ? (
                          <a href={href} className="hover:text-gold-light">
                            {value}
                          </a>
                        ) : (
                          nb(value)
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-[22px] border border-gold/50 bg-sand">
              <iframe
                title={`Bản đồ Google Maps – ${business.name}`}
                src={business.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[300px] w-full flex-1 border-0 grayscale-[25%] sepia-[12%]"
                allowFullScreen
              />
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn absolute right-3 bottom-3 left-3 min-h-12 bg-forest text-[15.5px] text-cream shadow-lg hover:bg-forest-deep sm:left-auto"
              >
                <MapPinIcon size={18} />
                {booking.directions}
                <ArrowRightIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[15.5px] text-ink-soft lg:hidden">
          Cần tư vấn nhanh?{' '}
          <a href={callHref} className="font-semibold text-forest underline decoration-gold underline-offset-4">
            Gọi ngay cho chúng tôi
          </a>
        </p>
      </div>
    </section>
  )
}
