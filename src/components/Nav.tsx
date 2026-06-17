'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav__cluster">
        <button className="hamburger" aria-label="Меню">
          <span /><span />
        </button>
        <Link href="/#projects" className="nav__link">Проекты</Link>
        <Link href="/#about" className="nav__link">Обо мне</Link>
      </div>

      <Link href="/" className="nav__wordmark">DKM</Link>

      <div className="nav__cluster">
        <Link href="/blog" className="nav__link">Блог</Link>
        <Link href="/#contact" className="nav__cta">Связаться</Link>
      </div>
    </nav>
  )
}
