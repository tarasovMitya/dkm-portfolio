import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectContactForm from '@/components/ProjectContactForm'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const p = projects.find(p => p.slug === params.slug)
  return p ? { title: `${p.title} — Кищенко Дмитрий` } : {}
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <div className="project-page">

      {/* ── Nav ── */}
      <nav className="inner-nav">
        <Link href="/#work" className="inner-nav__back">← Все проекты</Link>
        <Link href="/" className="inner-nav__brand">DKM</Link>
      </nav>

      {/* ── 1. Обложка проекта ── */}
      <section className="proj-cover-sec">
        <div className="proj-cover-meta">
          {project.tags.map(t => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
          <span className="proj-tag">{project.year}</span>
        </div>
        <h1 className="proj-title">{project.title}</h1>

        {project.coverVideo ? (
          <video
            className="proj-cover-media"
            autoPlay loop muted playsInline
            poster={project.cover}
          >
            <source src={project.coverVideo} type="video/mp4" />
          </video>
        ) : (
          <img src={project.cover} alt={project.title} className="proj-cover-media" />
        )}
      </section>

      {/* ── 2. О проекте ── */}
      <section className="proj-section proj-about-sec">
        <div className="proj-section-label">О проекте</div>
        <div className="proj-about-grid">
          <p className="proj-about-desc">{project.description}</p>
          <div className="proj-about-meta">
            <div className="proj-meta-item">
              <div className="proj-meta-label">Год</div>
              <div className="proj-meta-value">{project.year}</div>
            </div>
            <div className="proj-meta-item">
              <div className="proj-meta-label">Роль</div>
              <div className="proj-meta-value">{project.role}</div>
            </div>
            <div className="proj-meta-item">
              <div className="proj-meta-label">Тип</div>
              <div className="proj-meta-value">{project.tags.join(', ')}</div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener" className="proj-site-link">
                Перейти на сайт ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── 3. Задача ── */}
      <section className="proj-section proj-challenge-sec">
        <div className="proj-section-label">Задача</div>
        <h2 className="proj-challenge-text">{project.challenge}</h2>
        <p className="proj-solution-text">{project.solution}</p>
      </section>

      {/* ── 4. Job To Be Done ── */}
      {project.jtbd.length > 0 && (
        <section className="proj-section proj-jtbd-sec">
          <div className="proj-section-label">Job To Be Done</div>
          <div className="proj-jtbd-grid">
            {project.jtbd.map((j, i) => (
              <div key={i} className="proj-jtbd-card">
                <div className="proj-jtbd-num">0{i + 1}</div>
                <h3 className="proj-jtbd-job">{j.job}</h3>
                <div className="proj-jtbd-row">
                  <div className="proj-jtbd-col proj-jtbd-pain">
                    <div className="proj-jtbd-col-label">Боль</div>
                    <p>{j.pain}</p>
                  </div>
                  <div className="proj-jtbd-col proj-jtbd-gain">
                    <div className="proj-jtbd-col-label">Решение</div>
                    <p>{j.gain}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 5. User Flow ── */}
      {project.userFlow.length > 0 && (
        <section className="proj-section proj-flow-sec">
          <div className="proj-section-label">User Flow</div>
          <div className="proj-flow-steps">
            {project.userFlow.map((f, i) => (
              <div key={i} className="proj-flow-step">
                <div className="proj-flow-num">{f.step}</div>
                {i < project.userFlow.length - 1 && (
                  <div className="proj-flow-arrow">→</div>
                )}
                <div className="proj-flow-info">
                  <div className="proj-flow-title">{f.title}</div>
                  <div className="proj-flow-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 6. Скриншоты проекта ── */}
      {project.screens.length > 0 && (
        <section className="proj-section proj-screens-sec">
          <div className="proj-section-label">Страницы проекта</div>
          <div className={`proj-screens-grid proj-screens-grid--${project.screens.length === 1 ? 'one' : 'two'}`}>
            {project.screens.map((src, i) => (
              <div key={i} className="proj-screen-item">
                <img src={src} alt={`${project.title} экран ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="proj-result-block">
            <div className="proj-section-label">Результат</div>
            <p className="proj-result-text">{project.result}</p>
          </div>
        </section>
      )}

      {/* ── 7. Отзыв клиента ── */}
      {project.testimonial && (
        <section className="proj-section proj-testimonial-sec">
          <div className="proj-section-label">Отзыв клиента</div>
          <blockquote className="proj-quote">
            <p className="proj-quote-text">«{project.testimonial.text}»</p>
            <footer className="proj-quote-author">
              {project.testimonial.avatar && (
                <img src={project.testimonial.avatar} alt={project.testimonial.name} className="proj-quote-avatar" />
              )}
              <div>
                <div className="proj-quote-name">{project.testimonial.name}</div>
                <div className="proj-quote-role">{project.testimonial.role}, {project.testimonial.company}</div>
              </div>
            </footer>
          </blockquote>
        </section>
      )}

      {/* ── 8. CTA с формой ── */}
      <section className="proj-section proj-cta-sec">
        <div className="proj-cta-inner">
          <div className="proj-cta-text">
            <div className="proj-section-label">Хотите так же?</div>
            <h2 className="proj-cta-title">Давайте обсудим ваш проект</h2>
            <p className="proj-cta-sub">Расскажите задачу — предложу решение и назову стоимость</p>
          </div>
          <ProjectContactForm />
        </div>
      </section>

      {/* ── Следующий проект ── */}
      <section className="proj-next-sec">
        <p className="proj-next-label">Следующий проект</p>
        <Link href={`/projects/${next.slug}`} className="proj-next-title">
          {next.title} →
        </Link>
      </section>

    </div>
  )
}
