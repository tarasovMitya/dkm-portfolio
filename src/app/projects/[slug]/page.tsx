import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return { title: `${project.title} — Кищенко Дмитрий` }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const currentIndex = projects.indexOf(project)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <Nav />

      <div style={{ paddingTop: 80, background: 'var(--surface-canvas)' }}>
        <div className="project-hero">
          <div className="project-hero__meta">
            {project.tags.map((t) => (
              <span key={t} className="project-card__tag">{t}</span>
            ))}
          </div>
          <h1 className="project-hero__title">{project.title}</h1>
          <p className="project-hero__desc">{project.description}</p>
        </div>

        <div className="project-info">
          <div className="project-info__item">
            <div className="project-info__label">Год</div>
            <div className="project-info__value">{project.year}</div>
          </div>
          <div className="project-info__item">
            <div className="project-info__label">Роль</div>
            <div className="project-info__value">{project.role}</div>
          </div>
          <div className="project-info__item">
            <div className="project-info__label">Тип</div>
            <div className="project-info__value">{project.tags.join(', ')}</div>
          </div>
        </div>

        {project.coverVideo ? (
          <video
            className="project-cover"
            autoPlay muted loop playsInline
            poster={project.cover}
          >
            <source src={project.coverVideo} type="video/mp4" />
          </video>
        ) : (
          <img src={project.cover} alt={project.title} className="project-cover" />
        )}

        <div className="project-body">
          <div className="project-body__section">
            <h2>Задача</h2>
            <p>{project.challenge}</p>
          </div>
          <div className="project-body__section">
            <h2>Решение</h2>
            <p>{project.solution}</p>
          </div>
          <div className="project-body__section">
            <h2>Результат</h2>
            <p>{project.result}</p>
          </div>
          {project.link && (
            <div>
              <a href={project.link} target="_blank" rel="noopener" className="project-link-btn">
                Перейти на сайт ↗
              </a>
            </div>
          )}
        </div>

        <div className="project-next">
          <p className="project-next__label">Следующий проект</p>
          <Link href={`/projects/${next.slug}`} className="project-next__title">
            {next.title} →
          </Link>
        </div>

        <Footer />
      </div>
    </>
  )
}
