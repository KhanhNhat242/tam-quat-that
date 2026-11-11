'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { booking, business, type ServiceId } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { nb } from '@/lib/text'
import { CheckIcon, PhoneIcon } from '@/components/ui/icons'
import { SELECT_SERVICE_EVENT } from '@/components/ui/service-link'

type Mode = 'co-so' | 'tai-nha'
type Errors = Partial<Record<'name' | 'phone', string>>

const PHONE_RE = /^(0|\+?84)(3|5|7|8|9)\d{8}$/

/* Ô nhập cao 48px, viền ≥ 3:1 (wood), focus dùng viền 3px toàn cục trong globals.css */
const fieldClass =
  'w-full rounded-[10px] border-2 border-wood bg-paper px-4 text-[17px] text-ink placeholder:text-ink-soft transition-colors duration-200 focus:border-forest-deep'
const labelClass = 'mb-2 block text-[17px] font-semibold text-forest-deep'

export function BookingForm() {
  const [service, setService] = useState<ServiceId>('tq90')
  const [mode, setMode] = useState<Mode>('co-so')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<ServiceId>).detail
      setService(id)
      setSent(false)
      if (id === 'tai-nha') setMode('tai-nha')
    }
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect)
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect)
  }, [])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').replace(/[\s.-]/g, '')
    const next: Errors = {}
    if (name.length < 2) next.name = 'Vui lòng nhập họ và tên.'
    if (!phone) next.phone = 'Vui lòng nhập số điện thoại.'
    else if (!PHONE_RE.test(phone)) next.phone = 'Số điện thoại chưa đúng định dạng (VD: 0912 345 678).'
    setErrors(next)
    if (Object.keys(next).length) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus()
      return
    }
    // TODO(DEV): chưa có backend – gửi dữ liệu khi được duyệt kênh nhận (Zalo / email / Google Sheet).
    setSent(true)
    e.currentTarget.reset()
  }

  if (sent) {
    return (
      <div role="status" className="flex h-full flex-col items-center justify-center rounded-[var(--radius-card)] border-2 border-forest bg-paper p-8 text-center lg:p-12">
        <span aria-hidden className="inline-flex size-16 items-center justify-center rounded-full bg-forest text-white">
          <CheckIcon size={30} />
        </span>
        <p className="mt-5 font-serif text-[24px] font-semibold text-forest-deep">{booking.successTitle}</p>
        <p className="text-body mt-3 max-w-[420px] text-ink-soft">{nb(booking.success)}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={callHref} className="btn bg-forest text-white hover:bg-forest-deep">
            <PhoneIcon size={19} />
            Gọi {business.phone}
          </a>
          <button type="button" onClick={() => setSent(false)} className="btn border-2 border-forest text-forest hover:bg-forest hover:text-white">
            Đặt lịch khác
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-[var(--radius-card)] border border-wood-soft bg-paper p-6 shadow-[0_18px_40px_-34px_rgb(107_74_47/0.7)] sm:p-8 lg:p-9"
      aria-label="Form đặt lịch hẹn"
    >
      <div className="grid gap-[18px] sm:grid-cols-2">
        <div>
          <label htmlFor="bk-name" className={labelClass}>
            Họ và tên <span aria-hidden className="text-danger">*</span><span className="sr-only">(bắt buộc)</span>
          </label>
          <input
            id="bk-name"
            name="name"
            autoComplete="name"
            placeholder="Nguyễn Văn A"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'bk-name-err' : undefined}
            className={`${fieldClass} h-12 ${errors.name ? 'border-danger' : ''}`}
          />
          {errors.name && (
            <p id="bk-name-err" role="alert" className="mt-1.5 text-[16px] font-medium text-danger">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="bk-phone" className={labelClass}>
            Số điện thoại <span aria-hidden className="text-danger">*</span><span className="sr-only">(bắt buộc)</span>
          </label>
          <input
            id="bk-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0912 345 678"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'bk-phone-err' : undefined}
            className={`${fieldClass} h-12 ${errors.phone ? 'border-danger' : ''}`}
          />
          {errors.phone && (
            <p id="bk-phone-err" role="alert" className="mt-1.5 text-[16px] font-medium text-danger">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="bk-service" className={labelClass}>
            Chọn dịch vụ
          </label>
          <div className="relative">
            <select
              id="bk-service"
              name="service"
              value={service}
              onChange={(e) => {
                const id = e.target.value as ServiceId
                setService(id)
                if (id === 'tai-nha') setMode('tai-nha')
              }}
              className={`${fieldClass} h-12 appearance-none pr-11`}
            >
              {booking.serviceOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
            <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-forest" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>Hình thức phục vụ</legend>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { v: 'co-so', label: 'Tại cơ sở' },
                { v: 'tai-nha', label: 'Tại nhà' },
              ] as const
            ).map((o) => (
              <label
                key={o.v}
                className={`flex h-16 cursor-pointer items-center justify-center gap-3 rounded-[10px] border-2 text-[18px] font-semibold transition-colors duration-200 has-focus-visible:outline-3 has-focus-visible:outline-offset-3 has-focus-visible:outline-forest-deep ${
                  mode === o.v ? 'border-forest bg-forest text-white' : 'border-wood bg-paper text-ink hover:border-forest'
                }`}
              >
                <input type="radio" name="mode" value={o.v} checked={mode === o.v} onChange={() => setMode(o.v)} className="sr-only" />
                <span
                  aria-hidden
                  className={`flex size-5 items-center justify-center rounded-full border-2 ${mode === o.v ? 'border-gold-light' : 'border-wood'}`}
                >
                  {mode === o.v && <span className="size-2 rounded-full bg-gold-light" />}
                </span>
                {o.label}
              </label>
            ))}
          </div>
          {mode === 'tai-nha' && <p className="mt-2 text-[16px] text-ink-soft">Giá tại nhà chưa bao gồm phí di chuyển.</p>}
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="bk-time" className={labelClass}>
            Thời gian mong muốn
          </label>
          <input id="bk-time" name="time" type="datetime-local" className={`${fieldClass} h-12`} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="bk-note" className={labelClass}>
            Ghi chú thêm
          </label>
          <textarea
            id="bk-note"
            name="note"
            rows={3}
            placeholder={mode === 'tai-nha' ? 'Địa chỉ nhà, vùng đang đau mỏi…' : 'Vùng đang đau mỏi, yêu cầu về lực tay…'}
            className={`${fieldClass} resize-y py-3 leading-[1.55]`}
          />
        </div>
      </div>

      <button type="submit" className="btn mt-7 min-h-14 w-full bg-forest text-[17px] text-white hover:bg-forest-deep">
        {booking.submit}
      </button>
    </form>
  )
}
