import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Кищенко Дмитрий — UI/UX Designer',
  description: 'Веб-дизайнер с системным мышлением. 7+ лет — от UX-стратегии и запуска продуктов до брендинга и роста конверсии.',
  keywords: 'UI/UX дизайнер, веб-дизайн, брендинг, Москва',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
