import { business } from '@/lib/site-config'
import { plain } from '@/lib/text'
import { RevealObserver } from '@/components/ui/reveal-observer'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Usp } from '@/components/sections/usp'
import { Services } from '@/components/sections/services'
import { Pricing } from '@/components/sections/pricing'
import { Gallery } from '@/components/sections/gallery'
import { Testimonials } from '@/components/sections/testimonials'
import { Booking } from '@/components/sections/booking'
import { Footer } from '@/components/sections/footer'
import { FloatingContact } from '@/components/sections/floating-contact'

/** JSON-LD: chỉ đưa các trường đã có dữ liệu thật (AGENTS.md mục 5) */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: business.fullName,
  slogan: plain(business.slogan),
  description: 'Tẩm quất – bấm huyệt Đông y, cạo gió – giác hơi, tẩm quất tại nhà bởi kỹ thuật viên khiếm thị tại 711 Hồng Hà, Hoàn Kiếm, Hà Nội.',
  areaServed: business.city,
  priceRange: business.priceRange,
  geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
  hasMap: business.mapsUrl,
  ...(business.phone ? { telephone: business.phone.replace(/\./g, ' ') } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality: `${business.district}, ${business.city}`,
    addressCountry: 'VN',
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#noi-dung"
        className="sr-only z-[80] rounded-full bg-forest px-5 py-3 text-[17px] font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Bỏ qua tới nội dung
      </a>
      <Header />
      <main id="noi-dung" tabIndex={-1} className="flex-1">
        <Hero />
        <About />
        {/* <Usp /> */}
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingContact />
      <RevealObserver />
    </>
  )
}
