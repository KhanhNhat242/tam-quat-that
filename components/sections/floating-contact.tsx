import { business, features } from '@/lib/site-config'
import { callHref } from '@/lib/contact'
import { MessengerIcon, PhoneIcon, ZaloIcon } from '@/components/ui/icons'

/** Cụm nút liên hệ nổi (F5 luôn bật; F8 Zalo/Messenger bật bằng cờ trong site-config). */
export function FloatingContact() {
  const showZalo = features.enableZalo && features.zaloUrl
  const showMessenger = features.enableMessenger && features.messengerUrl

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3 lg:right-8 lg:bottom-8">
      {showMessenger && (
        <a
          href={features.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin Messenger"
          className="inline-flex size-13 items-center justify-center rounded-full bg-paper text-[#0866ff] shadow-lg ring-1 ring-wood/15 transition-transform hover:-translate-y-0.5"
        >
          <MessengerIcon size={28} />
        </a>
      )}
      {showZalo && (
        <a
          href={features.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin Zalo"
          className="inline-flex size-13 items-center justify-center overflow-hidden rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <ZaloIcon size={52} />
        </a>
      )}
      <a
        href={callHref}
        aria-label={`Gọi hotline ${business.phone} (${business.contactName})`}
        className="breathe inline-flex size-15 items-center justify-center rounded-full border-2 border-gold-light bg-forest text-white shadow-[0_14px_30px_-10px_rgb(31_51_40/0.8)] transition-transform hover:-translate-y-0.5 lg:size-16"
      >
        <PhoneIcon size={26} />
      </a>
    </div>
  )
}
