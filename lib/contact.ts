import { business } from './site-config'
import { telHref } from './text'

/** Href cho mọi nút "Gọi ngay": tel: khi đã có SĐT, nếu chưa → cuộn tới form đặt lịch. */
export const callHref = business.phone ? telHref(business.phone) : '#dat-lich'

/** Chuỗi hiển thị cho trường có thể chưa có dữ liệu */
export const orPending = (value: string) => value || business.pendingText
