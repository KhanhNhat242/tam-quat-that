'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { business, logo, navItems } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { CloseIcon, MenuIcon, PhoneIcon } from '@/components/ui/icons'

/**
 * Header cố định (fixed) – 2 trạng thái:
 * - Trong phạm vi Hero: ở đúng đầu trang nền trong suốt (hoà vào Hero); vừa cuộn → nền đặc forest-deep để chữ Hero không đè lên nav, chữ sáng, nav dồn sát logo bên trái, ẩn nút "Gọi ngay".
 * - Cuộn qua Hero: nền kem, nav ra giữa, hiện nút "Gọi ngay" (như cũ).
 * Nút gọi nổi (FloatingContact) luôn hiển thị nên ẩn nút ở header không làm mất đường gọi điện.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [inHero, setInHero] = useState(true)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const [navLeft, setNavLeft] = useState(320)
  const rowRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const hero = document.getElementById('trang-chu')
      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80
      setInHero(hero ? hero.getBoundingClientRect().bottom > headerH + 1 : false)
    }
    // Vị trí nav khi dồn trái: ngay sau cụm logo + 48px
    const measure = () => {
      const row = rowRef.current?.getBoundingClientRect()
      const lg = logoRef.current?.getBoundingClientRect()
      if (row && lg) setNavLeft(Math.round(lg.right - row.left + 48))
    }
    const onResize = () => {
      measure()
      onScroll()
    }
    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    document.fonts?.ready.then(measure)

    // Scrollspy: đánh dấu mục menu đang xem
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach((n) => {
      const el = document.getElementById(n.href.slice(1))
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    // Menu mobile mở → khoá cuộn trang (html + body; bù độ rộng thanh cuộn để trang không bị giật ngang)
    const html = document.documentElement
    const body = document.body
    const prev = { html: html.style.overflow, body: body.style.overflow, pad: body.style.paddingRight }
    const scrollbar = window.innerWidth - html.clientWidth
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
    // Chuyển sang desktop (≥1024px, menu mobile bị ẩn) → tự đóng để không kẹt khoá cuộn
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      html.style.overflow = prev.html
      body.style.overflow = prev.body
      body.style.paddingRight = prev.pad
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const dark = inHero
  const icon = dark ? logo.iconLight : logo.icon

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-(--header-h) border-b transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
        dark
          ? // Đầu trang: trong suốt (hoà vào Hero). Đã cuộn: nền đặc cùng màu Hero → nội dung cuộn qua không đè lên nav
            `on-dark border-transparent ${scrolled ? 'bg-forest-deep shadow-[0_10px_30px_-18px_rgb(0_0_0/0.6)]' : 'bg-transparent'}`
          : `border-gold/70 bg-cream/95 backdrop-blur-md ${scrolled ? 'shadow-[0_10px_30px_-18px_rgb(31_51_40/0.45)]' : ''}`
      }`}
    >
      <div ref={rowRef} className="container-page relative flex h-full items-center justify-between gap-4">
        <a
          ref={logoRef}
          href="#trang-chu"
          className="flex min-w-0 items-center gap-2.5 min-[400px]:gap-3"
          aria-label={`${business.name} – về đầu trang`}
        >
          <Image src={icon.src} width={icon.width} height={icon.height} alt="" className="h-10 w-auto min-[400px]:h-11 lg:h-13" preload />
          {/* Cụm logo: dòng phụ cỡ nhỏ là ngoại lệ duy nhất của quy tắc chữ ≥ 16px (AGENTS.md mục 3) */}
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-[17px] font-bold tracking-[0.05em] whitespace-nowrap uppercase transition-colors duration-300 min-[400px]:text-[19px] lg:text-[22px] ${
                dark ? 'text-cream' : 'text-forest-deep'
              }`}
            >
              {business.name}
            </span>
            <span
              className={`mt-1 font-serif text-[12px] whitespace-nowrap transition-colors duration-300 min-[400px]:text-[12.5px] lg:text-[14px] ${
                dark ? 'text-cream-muted' : 'text-forest'
              }`}
            >
              {business.tagline}
            </span>
          </span>
        </a>

        {/* Nav: dồn trái (sát logo) trong Hero, trượt ra giữa khi cuộn qua Hero */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden transition-[left,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:absolute lg:top-1/2 lg:block"
          style={{ left: dark ? navLeft : '50%', transform: `translate(${dark ? '0' : '-50%'}, -50%)` }}
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item, i) => {
              const isActive = !dark && active === item.href
              return (
                <li key={item.href} className="flex items-center">
                  {i > 0 && <span aria-hidden className={`mx-1 size-1 rounded-full ${dark ? 'bg-gold-light' : 'bg-gold/70'}`} />}
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative inline-flex min-h-11 items-center px-3 text-[17px] font-medium transition-colors duration-200 ${
                      dark
                        ? 'text-cream-muted hover:text-cream'
                        : isActive
                          ? 'text-forest-deep'
                          : 'text-ink-soft hover:text-forest-deep'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 bottom-1 h-0.5 origin-center rounded-full bg-gold transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Ẩn hẳn (invisible → không nhận Tab) khi đang ở Hero */}
          <a
            href={callHref}
            aria-hidden={dark || undefined}
            tabIndex={dark ? -1 : undefined}
            className={`btn hidden min-h-12 bg-forest text-white transition-[opacity,visibility] duration-300 hover:bg-forest-deep sm:inline-flex ${
              dark ? 'invisible opacity-0' : 'visible opacity-100'
            }`}
          >
            <PhoneIcon size={19} />
            Gọi ngay
          </a>
          <a
            href={callHref}
            aria-label="Gọi ngay"
            className={`size-11 items-center justify-center rounded-full bg-forest text-white sm:hidden ${dark ? 'hidden' : 'inline-flex'}`}
          >
            <PhoneIcon size={19} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex size-11 items-center justify-center rounded-full border-2 transition-colors duration-300 lg:hidden ${
              dark ? 'border-cream-muted text-cream' : 'border-wood text-forest-deep'
            }`}
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full max-h-[calc(100svh-var(--header-h))] origin-top overflow-y-auto overscroll-contain border-b border-gold/50 bg-cream shadow-lg transition-all duration-300 ease-out lg:hidden ${
          open ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        <ul className="container-page py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-13 items-center justify-between border-b border-wood-soft font-serif text-[19px] text-forest-deep last:border-0"
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
