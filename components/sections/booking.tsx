import Image from 'next/image'
import { booking, business, logo } from '@/lib/site-config'
import { callHref, orPending } from '@/lib/contact'
import { nb } from '@/lib/text'
import { ArrowRightIcon, ClockIcon, MapPinIcon, PhoneIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'
import { BookingForm } from './booking-form'

export function Booking() {
  const info = [
    {
      icon: PhoneIcon,
      label: `Hotline đặt lịch (${business.contactName})`,
      value: orPending(business.phone),
      href: business.phone ? callHref : undefined,
    },
    { icon: MapPinIcon, label: 'Địa chỉ', value: business.address || `${business.city} – xem bản đồ bên dưới` },
    { icon: ClockIcon, label: 'Giờ mở cửa', value: orPending(business.openingHours) },
  ]

  return (
    <section id="dat-lich" aria-labelledby="booking-title" className="section-y relative overflow-hidden bg-cream lg:py-28">

      <div className="container-page">
        <SectionHeading id="booking-title" title={booking.title} description={booking.description} layout="split" />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Cột trái: form */}
          <div data-reveal="left">
            <BookingForm />
          </div>

          {/* Cột phải: thông tin + bản đồ */}
          <div data-reveal="right" className="flex flex-col gap-5">
            <div className="on-dark overflow-hidden rounded-[var(--radius-card)] bg-forest-deep text-cream">
              <div className="flex items-center gap-4 border-b border-gold/40 p-5 sm:p-6">
                {/* Logo thay cho ảnh mặt tiền (ảnh mặt tiền đã dùng ở phần Giới thiệu – tránh lặp ảnh) */}
                <Image src={logo.iconLight.src} width={logo.iconLight.width} height={logo.iconLight.height} alt="" className="h-16 w-auto shrink-0" />
                <div>
                  <h3 className="font-serif text-[21px] font-semibold text-gold-light">{nb(business.brand)}</h3>
                  <p className="text-[16px] text-cream-muted">{nb(business.slogan)}</p>
                </div>
              </div>
              <dl className="space-y-4 p-5 sm:p-6">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span aria-hidden className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-light text-gold-light">
                      <Icon size={19} />
                    </span>
                    <div>
                      <dt className="text-[16px] text-cream-muted">{label}</dt>
                      <dd className="mt-0.5 text-[18px] font-semibold">
                        {href ? (
                          <a href={href} className="inline-flex min-h-11 items-center underline decoration-gold-light underline-offset-4 hover:text-gold-light">
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

            <div className="relative flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-[var(--radius-card)] border border-wood-soft bg-sand">
              <iframe
                title={`Bản đồ Google Maps – ${business.brand}`}
                src={business.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[300px] w-full flex-1 border-0"
                allowFullScreen
              />
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn absolute right-3 bottom-3 left-3 min-h-12 bg-forest text-[16px] text-white shadow-lg hover:bg-forest-deep sm:left-auto"
              >
                <MapPinIcon size={18} />
                {booking.directions}
                <span className="sr-only">(mở trong thẻ mới)</span>
                <ArrowRightIcon size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
