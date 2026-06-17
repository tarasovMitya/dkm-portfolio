import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">© 2026 Кищенко Дмитрий</span>
      <div className="footer__links">
        <a href="https://kishchenko-dmitriy.ru" target="_blank" rel="noopener" className="footer__link">
          kishchenko-dmitriy.ru ↗
        </a>
        <Link href="/blog" className="footer__link">Блог</Link>
        <Link href="/#contact" className="footer__link">Контакты</Link>
      </div>
      <span className="footer__tags">UI/UX · Web Design · Moscow</span>
    </footer>
  )
}
