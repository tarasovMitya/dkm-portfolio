import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'

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
      <nav className="inner-nav">
        <Link href="/#work" className="inner-nav__back">← Все проекты</Link>
        <Link href="/" className="inner-nav__brand">DKM</Link>
      </nav>

      <div className="project-hero-block">
        <div className="project-hero-meta">
          {project.tags.map(t => <span key={t} className="project-hero-tag">{t}</span>)}
          <span className="project-hero-tag">{project.year}</span>
        </div>
        <h1 className="project-hero-title">{project.title}</h1>
        <p className="project-hero-desc">{project.description}</p>
      </div>

      <div className="project-meta-bar">
        <div className="project-meta-item">
          <div className="project-meta-label">Год</div>
          <div className="project-meta-value">{project.year}</div>
        </div>
        <div className="project-meta-item">
          <div className="project-meta-label">Роль</div>
          <div className="project-meta-value">{project.role}</div>
        </div>
        <div className="project-meta-item">
          <div className="project-meta-label">Тип</div>
          <div className="project-meta-value">{project.tags.join(', ')}</div>
        </div>
      </div>

      {project.coverVideo ? (
        <video className="project-cover-img" autoPlay loop muted playsInline poster={project.cover}>
          <source src={project.coverVideo} type="video/mp4" />
        </video>
      ) : (
        <img src={project.cover} alt={project.title} className="project-cover-img" />
      )}

      <div className="project-body-content">
        <div className="project-body-section">
          <h2>Задача</h2>
          <p>{project.challenge}</p>
        </div>
        <div className="project-body-section">
          <h2>Решение</h2>
          <p>{project.solution}</p>
        </div>
        <div className="project-body-section">
          <h2>Результат</h2>
          <p>{project.result}</p>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener" className="project-cta-btn">
            Перейти на сайт ↗
          </a>
        )}
      </div>

      <div className="project-next-block">
        <p className="project-next-label">Следующий проект</p>
        <Link href={`/projects/${next.slug}`} className="project-next-title">
          {next.title} →
        </Link>
      </div>
    </div>
  )
}
