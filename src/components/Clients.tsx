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

function VideoCard({ label, src }: { label: string; src: string }) {
  return (
    <div className="rv-video-card">
      <img src={src} alt={label} loading="lazy" />
      <div className="rv-video-overlay">
        <div className="rv-video-play">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <span className="rv-video-label">{label}</span>
      </div>
    </div>
  )
}

export default function Clients() {
  // 5 left + (2 center cards + 2 videos) + 5 right = 12 cards
  const col1 = [reviews[0], reviews[1], reviews[2], reviews[3], reviews[4]]
  const center1 = reviews[5]
  const center2 = reviews[6]
  const col3 = [reviews[7], reviews[8], reviews[9], reviews[10], reviews[11]]

  return (
    <section className="rv-sec">
      {/* Header */}
      <div className="rv-header reveal">
        <div className="rv-badges">
          <span className="rv-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#EA4335"/>
              <circle cx="12" cy="12" r="10" fill="url(#gg2)"/>
              <defs>
                <radialGradient id="gg2" cx="30%" cy="30%">
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

      {/* 3-column masonry — full section width */}
      <div className="rv-grid">
        {/* Col 1 — 5 cards */}
        <div className="rv-col">
          {col1.map(r => <Card key={r.id} r={r} />)}
        </div>

        {/* Col 2 — card + video + card + video, all stretch to col1 height */}
        <div className="rv-col rv-col--center">
          <Card r={center1} />
          <VideoCard
            label="Отзыв клиента"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop&crop=face"
          />
          <Card r={center2} />
          <VideoCard
            label="О работе с дизайнером"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=700&fit=crop&crop=face"
          />
        </div>

        {/* Col 3 — 5 cards */}
        <div className="rv-col">
          {col3.map(r => r && <Card key={r.id} r={r} />)}
        </div>
      </div>
    </section>
  )
}
