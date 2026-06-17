import Link from 'next/link'

export default function About() {
  return (
    <section className="about-sec" id="about">
      <div className="about-hero">
        <div className="about-hero-flex">
          <div className="about-hero-heading">
            <h2 className="about-tge">
              7 лет помогаю бизнесам расти через дизайн, который работает
            </h2>
            <Link href="/#contact" className="about-cta-link">
              Есть проект? Давайте работать →
            </Link>
          </div>

          <div className="about-hero-photos">
            <div className="about-hero-circle">
              <img
                src="https://dkm-folio.ru/wp-content/uploads/covers/about_circle.jpg"
                alt="Дмитрий Кищенко"
                loading="lazy"
              />
            </div>
            <div className="about-hero-rect">
              <img
                src="https://dkm-folio.ru/wp-content/uploads/covers/about_rect.jpg"
                alt="Рабочий процесс"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-lead-row reveal">
        <p className="about-lead">
          Дизайнер с фокусом на UX-стратегию, визуальный язык и продуктовое мышление.
          Работаю с командами от стартапов до устоявшихся брендов — от первого брифа
          до готового продукта в продакшне. Каждый проект начинается с погружения
          в бизнес-задачу, а не с макетов.
        </p>
      </div>
    </section>
  )
}
