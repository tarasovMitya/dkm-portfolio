import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section className="projects-sec" id="work">
      <div className="sec-bar reveal">
        <h3>Проекты</h3>
        <Link href="/projects">Все работы</Link>
      </div>

      <div className="proj-list">
        {projects.map((p) => (
          <div className="proj-stack-card" key={p.slug}>
            <div className="proj-item">
              <div className="proj-item-img">
                {p.coverVideo ? (
                  <>
                    <video autoPlay loop muted playsInline>
                      <source src={p.coverVideo} type="video/mp4" />
                    </video>
                    {p.logo && (
                      <div className="proj-item-logo">
                        <img src={p.logo} alt={p.title} />
                      </div>
                    )}
                  </>
                ) : (
                  <img src={p.cover} alt={p.title} loading="lazy" />
                )}
              </div>

              <div className="proj-item-info">
                <div className="proj-item-body">
                  <h2 className="proj-item-title">{p.title}</h2>
                  <p className="proj-item-desc">{p.description}</p>
                </div>

                <div className="proj-item-footer">
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="proj-tag">{t}</span>
                    ))}
                  </div>
                  <div className="proj-actions">
                    <Link href={`/projects/${p.slug}`} className="proj-action-detail">
                      Подробнее →
                    </Link>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener"
                        className="proj-action-site"
                      >
                        <span className="proj-action-icon">↗</span>
                        Сайт
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="scroll-stack-end" />
      </div>
    </section>
  )
}
