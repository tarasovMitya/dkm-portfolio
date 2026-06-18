export default function Hero() {
  return (
    <div className="hero-wrap">
      <div className="hero-sticky" id="hero">
        <div className="hero-bg" style={{ background: '#111 url(/img/hero_cover.png) center/cover no-repeat' }}>
          <video
            id="hero-vid"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.8s ease', zIndex: 1, pointerEvents: 'none' }}
          >
            <source src="https://dkm-folio.ru/wp-content/uploads/covers/hero_bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <div className="hero-top">
            <span className="hero-role">UI/UX Designer · Москва</span>
          </div>

          <h1 className="hero-h1">
            <span className="hl"><span>Привет, я</span></span>
            <span className="hl"><span><strong>Кищенко</strong></span></span>
            <span className="hl"><span><strong>Дмитрий</strong></span></span>
          </h1>

          <div className="hero-foot">
            <p className="hero-desc">
              Веб-дизайнер с системным мышлением. 7+ лет — от UX-стратегии
              и запуска продуктов до брендинга и роста конверсии.
            </p>
            <span className="hero-scroll-cue">
              Листай вниз{' '}
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                <path d="M6 1v16M1 12l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Mosaic cards — all local assets */}
      <div className="mosaic-stage" aria-hidden="true">
        <a className="mc mc-0" href="/projects/leadgen-platform">
          <img src="/img/leadgen-cover.jpg" alt="LeadGen Platform" loading="lazy" />
          <div className="mc-label">LeadGen Platform · SaaS</div>
        </a>

        <a className="mc mc-1" href="/projects/ecopulse">
          <img src="/cover_ecopulse.png" alt="EcoPulse" loading="lazy" />
          <div className="mc-label">EcoPulse · Brand</div>
        </a>

        <a className="mc mc-2" href="/projects/swc-capital">
          <video autoPlay loop muted playsInline>
            <source src="https://dkm-folio.ru/wp-content/uploads/covers/swc_bg.mp4" type="video/mp4" />
          </video>
          <div className="mc-logo">
            <img src="/img/swc_logo.svg" alt="" />
          </div>
          <div className="mc-label">SWC.Capital · Website</div>
        </a>

        <a className="mc mc-3" href="/projects/slot-home">
          <img src="/img/slothome_cover.jpg" alt="slot-home.ru" loading="lazy" />
          <div className="mc-label">slot-home.ru · Dashboard</div>
        </a>
      </div>
    </div>
  )
}
