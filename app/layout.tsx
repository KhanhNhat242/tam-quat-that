import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro, Lora } from 'next/font/google'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Suspense } from 'react'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin', 'vietnamese'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const beVietnam = Be_Vietnam_Pro({
  variable: '--font-be-vietnam',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tẩm Quất Thật – Tẩm quất người khiếm thị tại Hà Nội',
  description:
    'Tẩm quất – bấm huyệt Đông y, cạo gió – giác hơi và tẩm quất tại nhà bởi đội ngũ kỹ thuật viên khiếm thị tận tâm tại Hà Nội. Gọi ngay để đặt lịch.',
  openGraph: {
    title: 'Tẩm Quất Thật – Tẩm quất người khiếm thị',
    description: 'Lắng nghe cơ thể bằng đôi tay tận tâm. Bấm huyệt Đông y tại cơ sở hoặc tại nhà ở Hà Nội.',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/images/brand/logo-full.png', width: 640, height: 600, alt: 'Logo Tẩm Quất Thật' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#1f3328',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${lora.variable} ${beVietnam.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <AntdRegistry>{children}</AntdRegistry>
        </Suspense>
      </body>
    </html>
  )
}
