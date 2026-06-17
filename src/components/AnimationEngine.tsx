'use client'
import { useEffect } from 'react'

export default function AnimationEngine() {
  useEffect(() => {
    let lenisInstance: any = null
    const rafIds: number[] = []
    let mosaicInited = false
    let mosaicCards: HTMLElement[] = []
    let mosaicFinalPos: Array<{ x: number; y: number }> = []
    let mosaicStartPos: Array<{ x: number; y: number }> = []

    let VW = window.innerWidth
    let VH = window.innerHeight

    /* ── Lenis smooth scroll ──────────────────────── */
    function initLenis() {
      import('lenis').then(({ default: Lenis }) => {
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
        })

        function raf(time: number) {
          lenisInstance.raf(time)
          const id = requestAnimationFrame(raf)
          rafIds.push(id)
        }
        rafIds.push(requestAnimationFrame(raf))

        initAfterLenis()
      }).catch(() => {
        initAfterLenis()
      })
    }

    /* ── Header scroll state ──────────────────────── */
    function initHeader() {
      const h = document.querySelector('.site-header')
      if (!h) return
      function update(scrollY?: number) {
        h.classList.toggle('is-scrolled', (scrollY ?? window.scrollY) > 1)
      }
      if (lenisInstance) {
        lenisInstance.on('scroll', (e: any) => update(e.scroll))
      }
      window.addEventListener('scroll', () => update(), { passive: true })
      update()
    }

    /* ── Hero clip-path ───────────────────────────── */
    function initHeroClip() {
      const wrap = document.querySelector('.hero-wrap') as HTMLElement
      const sticky = document.querySelector('.hero-sticky') as HTMLElement
      const bg = document.querySelector('.hero-bg') as HTMLElement
      const content = document.querySelector('.hero-content') as HTMLElement
      if (!wrap || !sticky) return

      let MAX_X: number, MAX_Y: number, MAX_B: number, MAX_R: number

      if (VW < 768) return
      if (VW < 1200) {
        MAX_X = VW * 0.10; MAX_Y = VH * 0.04; MAX_B = VH * 0.04; MAX_R = 6
      } else {
        MAX_X = VW * 0.350; MAX_Y = VH * 0.138; MAX_B = VH * 0.138; MAX_R = 12
      }

      function easeInOut(t: number) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      }

      function tick() {
        const rect = wrap.getBoundingClientRect()
        const total = wrap.offsetHeight - VH
        const p = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0
        const ep = easeInOut(p)

        sticky.style.clipPath = `inset(${(MAX_Y * ep).toFixed(2)}px ${(MAX_X * ep).toFixed(2)}px ${(MAX_B * ep).toFixed(2)}px ${(MAX_X * ep).toFixed(2)}px round ${(MAX_R * ep).toFixed(2)}px)`

        if (content) content.style.opacity = Math.max(0, 1 - p * 6.0).toFixed(3)
        if (bg) bg.style.transform = `scale(1.06) translateY(${(-p * 3).toFixed(2)}%)`

        driveMosaicCards(p)
        rafIds.push(requestAnimationFrame(tick))
      }
      rafIds.push(requestAnimationFrame(tick))
    }

    /* ── Mosaic cards ─────────────────────────────── */
    function initMosaicCards() {
      if (VW < 1200) return
      const stage = document.querySelector('.mosaic-stage') as HTMLElement
      if (!stage) return
      mosaicCards = Array.from(stage.querySelectorAll('.mc')) as HTMLElement[]
      if (!mosaicCards.length) return
      setTimeout(() => buildMosaic(), 50)
    }

    function buildMosaic() {
      const baseY = VH * 2.20
      const leftEdge = VW * 0.3545
      const rightEdge = VW * 0.6614
      const cardH = VH * 0.288
      const gap = 16

      const c0w = mosaicCards[0]?.offsetWidth || VW * 0.302
      const c1w = mosaicCards[1]?.offsetWidth || VW * 0.193
      const c2w = mosaicCards[2]?.offsetWidth || VW * 0.193
      const c3w = mosaicCards[3]?.offsetWidth || VW * 0.302

      const y0 = baseY + VH * 0.022 + 120
      const y1 = y0 + cardH + gap
      const y2 = baseY - VH * 0.342 + 300
      const y3 = y2 + cardH + gap

      mosaicFinalPos = [
        { x: leftEdge  - c0w - 40, y: y0 },
        { x: leftEdge  - c1w - 40, y: y1 },
        { x: rightEdge - 10,       y: y2 },
        { x: rightEdge - 10,       y: y3 },
      ]
      mosaicStartPos = [
        { x: -(c0w + 120), y: y0 },
        { x: -(c1w + 120), y: y1 },
        { x: VW + 120,     y: y2 },
        { x: VW + 120,     y: y3 },
      ]

      mosaicCards.forEach((card, i) => {
        const sp = mosaicStartPos[i]
        card.style.left = sp.x + 'px'
        card.style.top  = sp.y + 'px'
        card.style.transform = 'rotate(0deg)'
        card.style.opacity = '0'
      })

      mosaicInited = true
    }

    function driveMosaicCards(scrollP: number) {
      if (!mosaicInited) return
      const CARD_BASE    = 0.65
      const CARD_STAGGER = 0.07
      const CARD_DUR     = 0.15

      mosaicCards.forEach((card, i) => {
        const fp = mosaicFinalPos[i]
        const sp = mosaicStartPos[i]
        if (!fp || !sp) return

        const cStart = CARD_BASE + i * CARD_STAGGER
        let cp = (scrollP - cStart) / CARD_DUR
        cp = Math.max(0, Math.min(1, cp))
        const ecp = 1 - Math.pow(1 - cp, 3)

        card.style.left    = (sp.x + (fp.x - sp.x) * ecp).toFixed(2) + 'px'
        card.style.top     = (sp.y + (fp.y - sp.y) * ecp).toFixed(2) + 'px'
        card.style.opacity = ecp.toFixed(3)
      })
    }

    /* ── Hero video ───────────────────────────────── */
    function initHeroVideo() {
      const bg = document.querySelector('.hero-bg') as HTMLElement
      if (!bg) return
      const v = document.createElement('video')
      v.src = 'https://dkm-folio.ru/wp-content/uploads/covers/hero_bg.mp4'
      v.autoplay = true; v.loop = true; v.muted = true
      v.setAttribute('playsinline', '')
      v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;'
      bg.style.backgroundImage = 'none'
      bg.style.background = '#111'
      bg.appendChild(v)
    }

    /* ── Hero text entrance ───────────────────────── */
    function initHeroText() {
      setTimeout(() => document.body.classList.add('rdy'), 100)
    }

    /* ── Tagline word-by-word ─────────────────────── */
    function initTaglineWords() {
      const sec = document.querySelector('.tagline-sec')
      if (!sec) return
      const spans: HTMLElement[] = []

      sec.querySelectorAll('h2, p').forEach(el => {
        el.classList.remove('reveal')
        const text = (el as HTMLElement).innerText.trim()
        el.innerHTML = text.split(/\s+/).map(w => `<span class="tw">${w}</span>`).join(' ')
        spans.push(...Array.from(el.querySelectorAll<HTMLElement>('.tw')))
      })

      function tick() {
        const vh = window.innerHeight
        spans.forEach(sp => {
          const top = sp.getBoundingClientRect().top
          let t = 1 - top / (vh * 0.72)
          t = Math.max(0, Math.min(1, t))
          const e = 1 - Math.pow(1 - t, 2)
          sp.style.opacity = (0.4 + 0.6 * e).toFixed(3)
        })
        rafIds.push(requestAnimationFrame(tick))
      }
      rafIds.push(requestAnimationFrame(tick))
    }

    /* ── Scroll reveal ────────────────────────────── */
    function initReveal() {
      const els = document.querySelectorAll('.reveal')
      if (!els.length) return
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' })
      els.forEach(el => io.observe(el))
    }

    /* ── Custom cursor ────────────────────────────── */
    function initCursor() {
      const c = document.querySelector('.c-cursor') as HTMLElement
      const d = document.querySelector('.c-cursor-dot') as HTMLElement
      if (!c || !window.matchMedia('(hover:hover)').matches) return

      let cx = 0, cy = 0, tx = 0, ty = 0, dx = 0, dy = 0

      window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY })

      function loop() {
        cx += (tx - cx) * 0.15; cy += (ty - cy) * 0.15
        dx += (tx - dx) * 0.55; dy += (ty - dy) * 0.55
        c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
        d.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`
        rafIds.push(requestAnimationFrame(loop))
      }
      rafIds.push(requestAnimationFrame(loop))

      document.querySelectorAll('a,button,.proj-item,.blog-card,.mc').forEach(el => {
        el.addEventListener('mouseenter', () => c.classList.add('on'))
        el.addEventListener('mouseleave', () => c.classList.remove('on'))
      })
    }

    /* ── ScrollStack cards ────────────────────────── */
    function initStackCards() {
      if (VW < 768) return
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.proj-stack-card'))
      if (!cards.length) return

      const ITEM_DISTANCE   = 100
      const ITEM_SCALE      = 0.03
      const ITEM_STACK_DIST = 30
      const STACK_POS_PCT   = 0.20
      const SCALE_END_PCT   = 0.10
      const BASE_SCALE      = 0.85

      cards.forEach((card, i) => {
        card.style.position           = 'relative'
        card.style.willChange         = 'transform'
        card.style.transformOrigin    = 'top center'
        card.style.backfaceVisibility = 'hidden'
        if (i < cards.length - 1) card.style.marginBottom = ITEM_DISTANCE + 'px'
      })

      setTimeout(() => {
        const cardTops = cards.map(c => c.getBoundingClientRect().top + window.scrollY)
        const endEl = document.querySelector<HTMLElement>('.scroll-stack-end')
        const endTop = endEl
          ? endEl.getBoundingClientRect().top + window.scrollY
          : (cardTops[cardTops.length - 1] || 0) + 1400

        function update() {
          const scrollTop  = window.scrollY
          const vh         = window.innerHeight
          const stackPosPx = vh * STACK_POS_PCT
          const scaleEndPx = vh * SCALE_END_PCT
          const pinEnd     = endTop - vh * 0.5

          cards.forEach((card, i) => {
            const cardTop      = cardTops[i]
            const triggerStart = cardTop - stackPosPx - ITEM_STACK_DIST * i
            const triggerEnd   = cardTop - scaleEndPx
            const pinStart     = triggerStart

            const denom  = triggerEnd - triggerStart
            const scaleP = denom > 0 ? Math.max(0, Math.min(1, (scrollTop - triggerStart) / denom)) : 0
            const target = BASE_SCALE + i * ITEM_SCALE
            const scale  = 1 - scaleP * (1 - target)

            let ty = 0
            if (scrollTop >= pinStart && scrollTop <= pinEnd) {
              ty = scrollTop - cardTop + stackPosPx + ITEM_STACK_DIST * i
            } else if (scrollTop > pinEnd) {
              ty = pinEnd - cardTop + stackPosPx + ITEM_STACK_DIST * i
            }

            card.style.transform = `translate3d(0,${ty.toFixed(1)}px,0) scale(${scale.toFixed(4)})`
          })
        }

        if (lenisInstance) lenisInstance.on('scroll', update)
        window.addEventListener('scroll', update, { passive: true })
        update()
      }, 400)
    }

    /* ── About text-generate effect ──────────────── */
    function initAboutTextGenerate() {
      const el = document.querySelector('.about-tge') as HTMLElement
      if (!el) return
      const words = el.innerText.trim().split(/\s+/)
      el.innerHTML = words
        .map((w, i) => `<span class="tge-word" style="animation-delay:${i * 70}ms">${w}</span>`)
        .join(' ')

      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.tge-word').forEach(span => span.classList.add('tge-run'))
            io.unobserve(entry.target)
          }
        })
      }, { threshold: 0.2 })
      io.observe(el)
    }

    /* ── Anchor smooth scroll ─────────────────────── */
    function initAnchors() {
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const target = document.querySelector(a.getAttribute('href') || '')
          if (!target) return
          e.preventDefault()
          if (lenisInstance) {
            lenisInstance.scrollTo(target, { offset: -70, duration: 1.4 })
          } else {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        })
      })
    }

    /* ── Boot after Lenis ready ───────────────────── */
    function initAfterLenis() {
      initHeroText()
      initHeroVideo()
      initTaglineWords()
      initReveal()
      initCursor()
      initAnchors()

      setTimeout(() => {
        initHeroClip()
        initMosaicCards()
        initHeader()
        initStackCards()
        initAboutTextGenerate()
      }, 200)
    }

    const onResize = () => { VW = window.innerWidth; VH = window.innerHeight }
    window.addEventListener('resize', onResize)

    initLenis()

    return () => {
      lenisInstance?.destroy()
      rafIds.forEach(id => cancelAnimationFrame(id))
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('rdy')
    }
  }, [])

  return null
}
