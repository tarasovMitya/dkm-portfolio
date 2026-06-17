import Link from 'next/link'
import { posts } from '@/data/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог — Кищенко Дмитрий',
}

export default function BlogPage() {
  return (
    <div className="blog-page">
      <nav className="inner-nav">
        <Link href="/" className="inner-nav__back">← Главная</Link>
        <Link href="/" className="inner-nav__brand">DKM</Link>
      </nav>

      <div className="blog-page-hero">
        <h1 className="blog-page-title">Блог</h1>
      </div>

      <div className="blog-page-grid">
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
            <div className="blog-thumb">
              <img src={post.cover} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-body">
              <p className="blog-cat">{post.category}</p>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <span className="blog-meta-dot" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
