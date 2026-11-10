import type { CSSProperties } from 'react'

/** Độ trễ cho hiệu ứng [data-reveal] (globals.css: --reveal-delay) */
export const revealDelay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties
