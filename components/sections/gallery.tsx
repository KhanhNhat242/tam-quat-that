'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery, images } from '@/lib/site-config'
import { nb } from '@/lib/text'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExpandIcon } from '@/components/ui/icons'
import { SectionHeading } from '@/components/ui/section-heading'

/* Bố cục bento 4 ô: desktop lưới 4 cột × 2 hàng, mobile 2 cột */
const tileClass = [
  'col-span-2 row-span-2', // mặt tiền – ô lớn
  'col-span-2', // giác hơi – ô ngang
  '', // biển hiệu buổi tối
  '', // đá nóng & thảo mộc
]

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)
  const total = gallery.items.length

  const close = useCallback(() => {
    setIndex(null)
    lastTrigger.current?.focus()
  }, [])
  const go = useCallback((step: number) => setIndex((i) => (i === null ? i : (i + step + total) % total)), [total])

  const isOpen = index !== null
  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      // Giữ tiêu điểm trong hộp thoại (a11y)
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button'))
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, go])

  const current = index !== null ? gallery.items[index] : null
  const currentImg = current ? images[current.image] : null

  return (
    <section id="thu-vien" aria-labelledby="gallery-title" className="section-y bg-cream lg:py-24">
      <div className="container-page">
        <SectionHeading id="gallery-title" title={gallery.title} description={gallery.description} layout="split" />

        <ul className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:auto-rows-[250px] lg:grid-cols-4 lg:gap-5">
          {gallery.items.map((item, i) => {
            const img = images[item.image]
            return (
              <li key={item.image + i} className={tileClass[i]}>
                <button
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget
                    setIndex(i)
                  }}
                  className="group relative block h-full w-full overflow-hidden rounded-[var(--radius-card)] bg-sand"
                  aria-label={`Xem ảnh lớn: ${item.caption}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={i === 0 ? '(min-width: 1024px) 600px, 100vw' : '(min-width: 1024px) 300px, 50vw'}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    style={{ objectPosition: img.position }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent"
                  />
                  <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 text-left lg:inset-x-5 lg:bottom-4">
                    <span className="font-serif text-[16px] leading-snug text-white sm:text-[18px]">{nb(item.caption)}</span>
                    <span className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-gold-light text-gold-light sm:inline-flex">
                      <ExpandIcon size={16} />
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Lightbox */}
      {current && currentImg && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="on-dark fixed inset-0 z-[70] flex flex-col bg-forest-deep"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 text-cream sm:px-6">
            <span className="text-[16px] text-cream-muted tabular-nums" aria-live="polite">
              {index! + 1} / {total}
            </span>
            <button
              ref={closeRef}
              type="button"
              aria-label="Đóng"
              onClick={close}
              className="inline-flex size-12 items-center justify-center rounded-full border-2 border-cream-muted hover:border-gold-light"
            >
              <CloseIcon size={22} />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={(e) => e.stopPropagation()}>
            <figure key={index} className="lightbox-fade relative flex h-full w-full max-w-[1100px] flex-col items-center justify-center">
              <div className="relative h-full max-h-[78svh] w-full">
                <Image src={currentImg.src} alt={currentImg.alt} fill sizes="100vw" className="object-contain" />
              </div>
              <figcaption className="mt-4 text-center font-serif text-[18px] text-cream lg:text-[20px]">{nb(current.caption)}</figcaption>
            </figure>
            <button
              type="button"
              aria-label="Ảnh trước"
              onClick={() => go(-1)}
              className="absolute left-2 inline-flex size-12 items-center justify-center rounded-full border-2 border-cream-muted bg-forest-deep text-cream hover:bg-gold-light hover:text-ink sm:left-6"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              type="button"
              aria-label="Ảnh sau"
              onClick={() => go(1)}
              className="absolute right-2 inline-flex size-12 items-center justify-center rounded-full border-2 border-cream-muted bg-forest-deep text-cream hover:bg-gold-light hover:text-ink sm:right-6"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>
          <div className="h-6" />
        </div>
      )}
    </section>
  )
}
