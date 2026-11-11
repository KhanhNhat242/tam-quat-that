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
  title: 'Tẩm Quất Thật – 711 Hồng Hà | Tẩm quất người khiếm thị Hoàn Kiếm',
  description:
    'Tẩm quất – bấm huyệt Đông y từ 150.000đ, cạo gió – giác hơi, tẩm quất tại nhà bởi kỹ thuật viên khiếm thị tại 711 Hồng Hà, Hoàn Kiếm. Hotline 0989.588.030.',
  openGraph: {
    title: 'Tẩm Quất Thật – 711 Hồng Hà',
    description: 'Chạm đúng điểm đau – Cảm nhận sự chữa lành. 15 năm chắc tay nghề – Trọn vẹn tâm y.',
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
