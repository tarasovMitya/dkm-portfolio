import { reviews } from '@/data/clients'

function ReviewText({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) return <>{text}</>
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <span className="rv-hl">{text.slice(idx, idx + highlight.length)}</span>
      {text.slice(idx + highlight.length)}
    </>
  )
}

function Card({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div className="rv-card">
      <div className="rv-card__head">
        <img src={r.avatar} alt={r.name} className="rv-card__avatar" loading="lazy" />
        <div>
          <div className="rv-card__name">{r.name}</div>
          <div className="rv-card__role">
            {r.role} at <span className="rv-card__co">{r.company}</span>
          </div>
        </div>
      </div>
      <p className="rv-card__text">
        <ReviewText text={r.text} highlight={r.highlight} />
      </p>
    </div>
  )
}

export default function Clients() {
  const col1 = [reviews[0], reviews[1], reviews[2], reviews[3]]
  const col2top = [reviews[4]]
  const col3 = [reviews[5], reviews[6], reviews[7], reviews[8]]

  return (
    <section className="rv-sec">
      <div className="rv-inner">
      {/* Header */}
      <div className="rv-header reveal">
        <div className="rv-badges">
          <span className="rv-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#EA4335"/>
              <circle cx="12" cy="12" r="10" fill="url(#ggrad)"/>
              <defs>
                <radialGradient id="ggrad" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="#FBBC05"/>
                  <stop offset="50%" stopColor="#EA4335"/>
                  <stop offset="100%" stopColor="#4285F4"/>
                </radialGradient>
              </defs>
            </svg>
            <strong>4.9</strong>
          </span>
          <span className="rv-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#f5a623">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <strong>4.8</strong>
          </span>
        </div>
        <h2 className="rv-headline">Мне доверяют клиенты</h2>
      </div>

      {/* 3-column masonry */}
      <div className="rv-grid">
        {/* Col 1 — all text cards */}
        <div className="rv-col">
          {col1.map(r => <Card key={r.id} r={r} />)}
        </div>

        {/* Col 2 — card + tall video (stretches to match col1 height) */}
        <div className="rv-col rv-col--center">
          {col2top.map(r => <Card key={r.id} r={r} />)}

          {/* Video card */}
          <div className="rv-video-card">
            <div className="rv-video-overlay">
              <div className="rv-video-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="rv-video-label">Отзыв клиента</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop&crop=face"
              alt="Видео-отзыв"
              loading="lazy"
            />
          </div>
        </div>

        {/* Col 3 — all text cards */}
        <div className="rv-col">
          {col3.map(r => r && <Card key={r.id} r={r} />)}
        </div>
      </div>
      </div>
    </section>
  )
}
