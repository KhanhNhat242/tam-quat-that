'use client'

import type { ReactNode } from 'react'
import type { ServiceId } from '@/lib/site-config'

export const SELECT_SERVICE_EVENT = 'tqt:select-service'

type Props = {
  serviceId: ServiceId
  className?: string
  children: ReactNode
}

/** Link cuộn tới form đặt lịch và chọn sẵn dịch vụ tương ứng. */
export function ServiceLink({ serviceId, className, children }: Props) {
  return (
    <a
      href="#dat-lich"
      className={className}
      onClick={() => {
        window.dispatchEvent(new CustomEvent<ServiceId>(SELECT_SERVICE_EVENT, { detail: serviceId }))
      }}
    >
      {children}
    </a>
  )
}
