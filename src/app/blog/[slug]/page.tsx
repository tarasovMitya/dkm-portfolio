import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/data/blog'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return { title: `${post.title} — Блог — Кищенко Дмитрий` }
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  return lines.map((line, i) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.replace('## ', '')}</h2>
    if (trimmed === '') return <br key={i} />
    return <p key={i}>{trimmed}</p>
  })
}

export default function ArticlePage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const currentIndex = posts.indexOf(post)
  const next = posts[(currentIndex + 1) % posts.length]

  return (
    <>
      <Nav />
      <div style={{ paddingTop: 80, background: 'var(--surface-canvas)', minHeight: '100vh' }}>

        <div className="article-hero">
          <p className="article-hero__category">{post.category}</p>
          <h1 className="article-hero__title">{post.title}</h1>
          <div className="article-hero__meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} чтения</span>
          </div>
        </div>

        <div className="article-cover">
          <img src={post.cover} alt={post.title} loading="lazy" />
        </div>

        <div className="article-body">
          {renderContent(post.content)}
        </div>

        <div className="project-next" style={{ background: 'var(--surface-canvas)' }}>
          <p className="project-next__label">Следующая статья</p>
          <Link href={`/blog/${next.slug}`} className="project-next__title">
            {next.title} →
          </Link>
        </div>

        <Footer />
      </div>
    </>
  )
}
