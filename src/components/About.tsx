import Link from 'next/link'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__text reveal">
            <span className="about__eyebrow">Обо мне</span>
            <h2 className="about__headline">
              7 лет помогаю бизнесам расти через дизайн, который работает
            </h2>
            <p className="about__body">
              Дизайнер с фокусом на UX-стратегию, визуальный язык и продуктовое мышление.
              Работаю с командами от стартапов до устоявшихся брендов — от первого брифа
              до готового продукта в продакшне.
            </p>
            <Link href="/#contact" className="about__cta">Есть проект? Давайте работать →</Link>
          </div>

          <div className="about__images reveal reveal-delay-1">
            <div className="about__img-wrap">
              <img
                src="https://dkm-folio.ru/wp-content/uploads/covers/about_circle.jpg"
                alt="О дизайнере"
                loading="lazy"
              />
            </div>
            <div className="about__img-wrap">
              <img
                src="https://dkm-folio.ru/wp-content/uploads/covers/about_rect.jpg"
                alt="Рабочий процесс"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
