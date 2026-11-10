'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { business, logo, navItems } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { CloseIcon, MenuIcon, PhoneIcon } from '@/components/ui/icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Scrollspy: đánh dấu mục menu đang xem
    const ids = navItems.map((n) => n.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 h-(--header-h) border-b border-gold/70 bg-cream/95 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? 'shadow-[0_10px_30px_-18px_rgb(31_51_40/0.45)]' : ''
      }`}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <a href="#trang-chu" className="flex min-w-0 items-center gap-2.5 min-[400px]:gap-3" aria-label={`${business.name} – về đầu trang`}>
          <Image src={logo.icon.src} width={logo.icon.width} height={logo.icon.height} alt="" className="h-10 w-auto min-[400px]:h-11 lg:h-13" preload />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[17px] font-bold tracking-[0.05em] whitespace-nowrap text-forest-deep uppercase min-[400px]:text-[19px] lg:text-[22px]">
              {business.name}
            </span>
            <span className="mt-1 font-serif text-[12px] whitespace-nowrap text-forest min-[400px]:text-[12.5px] lg:text-[14px]">{business.tagline}</span>
          </span>
        </a>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item, i) => (
              <li key={item.href} className="flex items-center">
                {i > 0 && <span aria-hidden className="mx-1 size-1 rounded-full bg-gold/70" />}
                <a
                  href={item.href}
                  className={`relative px-3 py-2 text-[16.5px] font-medium transition-colors hover:text-forest ${
                    active === item.href ? 'text-forest' : 'text-ink-soft'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-gold transition-transform duration-500 ${
                      active === item.href ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={callHref} className="btn hidden min-h-12 bg-forest text-cream hover:bg-forest-deep sm:inline-flex">
            <PhoneIcon size={19} />
            Gọi ngay
          </a>
          <a
            href={callHref}
            aria-label="Gọi ngay"
            className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-cream sm:hidden"
          >
            <PhoneIcon size={19} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-gold/60 text-forest-deep lg:hidden"
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full origin-top border-b border-gold/50 bg-cream shadow-lg transition-all duration-400 lg:hidden ${
          open ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        <ul className="container-page py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-13 items-center justify-between border-b border-wood/10 font-serif text-[19px] text-forest-deep last:border-0"
              >
                {item.label}
                <span aria-hidden className="size-1.5 rounded-full bg-gold" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
