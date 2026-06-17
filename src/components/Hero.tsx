'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    if (img.complete) {
      img.classList.add('loaded')
    } else {
      img.onload = () => img.classList.add('loaded')
    }
  }, [])

  return (
    <section className="hero">
      {/* Swap this image for your own hero photo */}
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80&fit=crop&auto=format"
        alt=""
        className="hero__bg"
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__left">
          <h1 className="hero__headline">
            Привет,<br />
            я Кищенко<br />
            Дмитрий
          </h1>
        </div>
        <div className="hero__right">
          <p className="hero__sub">
            Веб-дизайнер с системным мышлением. 7+ лет — от UX-стратегии
            и запуска продуктов до брендинга и роста конверсии.
          </p>
        </div>
      </div>

      <div className="hero__scroll">
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path d="M9 1v20M1 13l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Листай вниз</span>
      </div>
    </section>
  )
}
