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
  const col1 = [reviews[0], reviews[1], reviews[2]]
  const col2 = [reviews[3], reviews[4]]
  const col3 = [reviews[5], reviews[6], reviews[7]]

  return (
    <section className="rv-sec">
      <div className="rv-header reveal">
        <div className="rv-badges">
          <span className="rv-badge">
            <svg width="13" height="13" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#4285F4"/>
                  <stop offset="33%"  stopColor="#EA4335"/>
                  <stop offset="66%"  stopColor="#FBBC05"/>
                  <stop offset="100%" stopColor="#34A853"/>
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#gg)"/>
              <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            4.9
          </span>
          <span className="rv-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#f5a623">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            4.8
          </span>
        </div>
        <h2 className="rv-headline">Мне доверяют клиенты</h2>
      </div>

      <div className="rv-grid">
        {/* Колонка 1 */}
        <div className="rv-col">
          {col1.map(r => <Card key={r.id} r={r} />)}
        </div>

        {/* Колонка 2 — с фото между карточек */}
        <div className="rv-col">
          <Card r={col2[0]} />
          <div className="rv-photo">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=760&fit=crop&crop=face"
              alt="Кищенко Дмитрий"
              loading="lazy"
            />
          </div>
          {col2[1] && <Card r={col2[1]} />}
        </div>

        {/* Колонка 3 */}
        <div className="rv-col">
          {col3.map(r => r && <Card key={r.id} r={r} />)}
        </div>
      </div>
    </section>
  )
}
