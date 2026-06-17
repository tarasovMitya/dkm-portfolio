import { reviews } from '@/data/clients'

function highlightText(text: string, highlight?: string) {
  if (!highlight) return <>{text}</>
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase())
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
  // Split into 3 columns for masonry
  const col1 = reviews.filter((_, i) => i % 3 === 0)
  const col2 = reviews.filter((_, i) => i % 3 === 1)
  const col3 = reviews.filter((_, i) => i % 3 === 2)

  const Card = ({ r }: { r: (typeof reviews)[0] }) => (
    <div className="review-card">
      <div className="review-card__head">
        <img src={r.avatar} alt={r.name} className="review-card__avatar" loading="lazy" />
        <div className="review-card__meta">
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
  )

  return (
    <section className="clients">
      <div className="container">
        <div className="clients__header reveal">
          <p className="clients__suptitle">Клиенты</p>
          <h2 className="clients__headline">
            Мои клиенты рекомендуют
          </h2>
          <div className="clients__rating">
            <div className="clients__rating-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f5a623"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span>Яндекс Услуги — 4.9</span>
            </div>
            <div className="clients__rating-item">
              <span className="clients__rating-stars">★</span>
              <span>Profi.ru — 4.93</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          <div className="reveal">
            {col1.map(r => <Card key={r.id} r={r} />)}
          </div>
          <div className="reveal reveal-delay-1">
            {col2.map(r => <Card key={r.id} r={r} />)}
          </div>
          <div className="reveal reveal-delay-2">
            {col3.map(r => <Card key={r.id} r={r} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
