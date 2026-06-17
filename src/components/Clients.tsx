import { reviews } from '@/data/clients'

function highlightText(text: string, highlight?: string) {
  if (!highlight) return <>{text}</>
  const lower = text.toLowerCase()
  const idx = lower.indexOf(highlight.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + highlight.length)}</mark>
      {text.slice(idx + highlight.length)}
    </>
  )
}

export default function Clients() {
  const cols = [
    reviews.filter((_, i) => i % 3 === 0),
    reviews.filter((_, i) => i % 3 === 1),
    reviews.filter((_, i) => i % 3 === 2),
  ]

  return (
    <section className="clients-sec">
      <div className="clients-header reveal">
        <p className="clients-kicker">Клиенты</p>
        <h2 className="clients-headline">Мои клиенты рекомендуют</h2>
        <div className="clients-ratings">
          <div className="clients-rating-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f5a623">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Яндекс Услуги — 4.9</span>
          </div>
          <div className="clients-rating-item">
            <span className="clients-rating-stars">★</span>
            <span>Profi.ru — 4.93</span>
          </div>
        </div>
      </div>

      <div className="clients-masonry">
        {cols.map((col, ci) => (
          <div key={ci} className={`reveal${ci > 0 ? ` reveal-delay-${ci}` : ''}`} style={{ transitionDelay: `${ci * 0.1}s` }}>
            {col.map((r) => (
              <div key={r.id} className="review-card" style={{ marginBottom: 14 }}>
                <div className="review-card__head">
                  <img src={r.avatar} alt={r.name} className="review-card__avatar" loading="lazy" />
                  <div>
                    <div className="review-card__name">{r.name}</div>
                    <div className="review-card__role">
                      {r.role} at <span>{r.company}</span>
                    </div>
                  </div>
                </div>
                <p className="review-card__text">
                  {highlightText(r.text, r.highlight)}
                </p>
                {r.rating && (
                  <div className="review-card__stars">{'★'.repeat(r.rating)}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
