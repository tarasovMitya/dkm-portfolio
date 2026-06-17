import Link from 'next/link'
import { posts } from '@/data/blog'

export default function BlogSection() {
  return (
    <section className="blog-sec">
      <div className="blog-bar reveal">
        <h3>Блог</h3>
        <Link href="/blog">Все статьи</Link>
      </div>

      <div className="blog-grid">
        {posts.slice(0, 3).map((post, i) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="blog-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
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
    </section>
  )
}
