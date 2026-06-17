import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  const [p0, p1, p2, p3] = projects

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Проекты</span>
          <Link href="/#projects" className="projects__see-all">Все работы →</Link>
        </div>

        <div className="projects__mosaic">
          {/* Row 1: tall card left + short card right */}
          <div className="project-card project-card--tall reveal">
            <div className="project-card__media">
              <img src={p0.cover} alt={p0.title} className="project-card__img" loading="lazy" />
            </div>
            <div className="project-card__info">
              <div className="project-card__tags">
                {p0.tags.map(t => <span key={t} className="project-card__tag">{t}</span>)}
              </div>
              <h3 className="project-card__title">{p0.title}</h3>
              <p className="project-card__desc">{p0.description}</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
                <Link href={`/projects/${p0.slug}`} className="project-card__link">Подробнее →</Link>
                {p0.link && <a href={p0.link} target="_blank" rel="noopener" className="project-card__link">Сайт ↗</a>}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="project-card reveal reveal-delay-1">
              <div className="project-card__media">
                <img src={p1.cover} alt={p1.title} className="project-card__img" loading="lazy" />
              </div>
              <div className="project-card__info">
                <div className="project-card__tags">
                  {p1.tags.map(t => <span key={t} className="project-card__tag">{t}</span>)}
                </div>
                <h3 className="project-card__title">{p1.title}</h3>
                <p className="project-card__desc">{p1.description}</p>
                <Link href={`/projects/${p1.slug}`} className="project-card__link">Подробнее →</Link>
              </div>
            </div>

            <div className="project-card reveal reveal-delay-2">
              <div className="project-card__media">
                {p2.coverVideo ? (
                  <video
                    className="project-card__video"
                    autoPlay muted loop playsInline
                    poster={p2.cover}
                  >
                    <source src={p2.coverVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img src={p2.cover} alt={p2.title} className="project-card__img" loading="lazy" />
                )}
              </div>
              <div className="project-card__info">
                <div className="project-card__tags">
                  {p2.tags.map(t => <span key={t} className="project-card__tag">{t}</span>)}
                </div>
                <h3 className="project-card__title">{p2.title}</h3>
                <p className="project-card__desc">{p2.description}</p>
                <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
                  <Link href={`/projects/${p2.slug}`} className="project-card__link">Подробнее →</Link>
                  {p2.link && <a href={p2.link} target="_blank" rel="noopener" className="project-card__link">Сайт ↗</a>}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: full-width */}
          <div className="project-card reveal reveal-delay-1" style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0 }}>
              <div className="project-card__media" style={{ height: 320 }}>
                <img src={p3.cover} alt={p3.title} className="project-card__img" loading="lazy" />
              </div>
              <div className="project-card__info" style={{ padding: '32px 36px' }}>
                <div className="project-card__tags">
                  {p3.tags.map(t => <span key={t} className="project-card__tag">{t}</span>)}
                </div>
                <h3 className="project-card__title">{p3.title}</h3>
                <p className="project-card__desc">{p3.description}</p>
                <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                  <Link href={`/projects/${p3.slug}`} className="project-card__link">Подробнее →</Link>
                  {p3.link && <a href={p3.link} target="_blank" rel="noopener" className="project-card__link">Сайт ↗</a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
