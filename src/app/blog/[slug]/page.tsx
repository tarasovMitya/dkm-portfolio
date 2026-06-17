import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/data/blog'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const p = posts.find(p => p.slug === params.slug)
  return p ? { title: `${p.title} — Блог — Кищенко Дмитрий` } : {}
}

function renderContent(content: string) {
  return content.trim().split('\n').map((line, i) => {
    const t = line.trim()
    if (t.startsWith('## ')) return <h2 key={i}>{t.replace('## ', '')}</h2>
    if (!t) return null
    return <p key={i}>{t}</p>
  })
}

export default function ArticlePage({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const next = posts[(posts.indexOf(post) + 1) % posts.length]

  return (
    <div className="article-page">
      <nav className="inner-nav">
        <Link href="/blog" className="inner-nav__back">← Блог</Link>
        <Link href="/" className="inner-nav__brand">DKM</Link>
      </nav>

      <div className="article-hero">
        <p className="article-cat">{post.category}</p>
        <h1 className="article-title">{post.title}</h1>
        <div className="article-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} чтения</span>
        </div>
      </div>

      <div className="article-cover">
        <img src={post.cover} alt={post.title} loading="lazy" />
      </div>

      <div className="article-body">{renderContent(post.content)}</div>

      <div className="project-next-block" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="project-next-label">Следующая статья</p>
        <Link href={`/blog/${next.slug}`} className="project-next-title">
          {next.title} →
        </Link>
      </div>
    </div>
  )
}
