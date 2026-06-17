import Link from 'next/link'
import { posts } from '@/data/blog'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог — Кищенко Дмитрий',
  description: 'Статьи о дизайне, UX-стратегии и построении продуктов',
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 80, background: 'var(--surface-canvas)', minHeight: '100vh' }}>
        <div className="blog-hero">
          <h1 className="blog-hero__title">Блог</h1>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
              <img src={post.cover} alt={post.title} className="blog-card__cover" loading="lazy" />
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span>{post.date}</span>
                  <span className="blog-card__meta-dot" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </>
  )
}
