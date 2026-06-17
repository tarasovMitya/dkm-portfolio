'use client'
import { useEffect, useRef } from 'react'

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const elEl = el

    // Prevent scroll while loading
    document.body.style.overflow = 'hidden'

    const counter = el.querySelector('.pl-counter') as HTMLElement
    const bar     = el.querySelector('.pl-bar-fill') as HTMLElement
    const logo    = el.querySelector('.pl-logo') as HTMLElement

    let current = 0
    const target = 100
    const duration = 1600 // ms

    // Animate counter 0 → 100
    const start = performance.now()
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1)
      // ease out quart
      const ep = 1 - Math.pow(1 - p, 4)
      current = Math.round(ep * target)
      if (counter) counter.textContent = String(current).padStart(2, '0')
      if (bar) bar.style.transform = `scaleX(${ep})`
      if (p < 1) requestAnimationFrame(tick)
      else finish()
    }
    requestAnimationFrame(tick)

    function finish() {
      setTimeout(() => {
        elEl.classList.add('pl-done')
        document.body.style.overflow = ''
        setTimeout(() => elEl.remove(), 700)
      }, 200)
    }
  }, [])

  return (
    <div className="pl-wrap" ref={ref}>
      <div className="pl-logo">DKM</div>
      <div className="pl-bottom">
        <span className="pl-label">Loading</span>
        <span className="pl-counter">00</span>
      </div>
      <div className="pl-bar">
        <div className="pl-bar-fill" />
      </div>
    </div>
  )
}
