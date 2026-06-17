import Link from 'next/link'
import { posts } from '@/data/blog'

export default function BlogSection() {
  const featured = posts.slice(0, 3)

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-section__header reveal">
          <h2 className="blog-section__title">Блог</h2>
          <Link href="/blog" className="blog-section__link">Все статьи →</Link>
        </div>

        <div className="blog-grid">
          {featured.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={post.cover} alt={post.title} className="blog-card__cover" loading="lazy" />
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
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
      </div>
    </section>
  )
}
