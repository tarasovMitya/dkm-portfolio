import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <div className="c-cursor" />
      <div className="c-cursor-dot" />

      <header className="site-header">
        <Link href="/" className="brand">DKM</Link>
        <nav className="nav">
          <Link href="/#work">Проекты</Link>
          <Link href="/#about">Обо мне</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/#contact">Контакты</Link>
        </nav>
      </header>
    </>
  )
}
