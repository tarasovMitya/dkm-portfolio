import Link from 'next/link'

export default function About() {
  return (
    <section className="about-sec" id="about">
      <div className="about-inner">
        <div className="about-bottom">
          <div className="about-bottom-left">
            <h2 className="about-tge">
              7 лет помогаю бизнесам расти через дизайн, который работает
            </h2>
            <Link href="/#contact" className="about-link">
              Есть проект? Давайте работать →
            </Link>
          </div>

          <div className="about-photos">
            <div className="about-circle">
              <img
                src="/about_circle.jpg"
                alt="Дмитрий Кищенко"
                loading="lazy"
              />
            </div>
            <div className="about-rect">
              <img
                src="/about_rect.jpg"
                alt="Дмитрий Кищенко"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
