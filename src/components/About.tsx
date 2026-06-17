import Link from 'next/link'

export default function About() {
  return (
    <section className="about-sec" id="about">
      <div className="about-inner">
        <div className="about-bottom">
          <div className="about-bottom-left">
            <h2 className="about-tge">
              7 лет помогаю бизнесам<br />
              расти через дизайн,<br />
              который работает
            </h2>
            <Link href="/#contact" className="about-link">
              Есть проект? Давайте работать →
            </Link>
          </div>

          <div className="about-photos">
            <div className="about-circle">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face"
                alt="Дмитрий Кищенко"
                loading="lazy"
              />
            </div>
            <div className="about-rect">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=320&h=480&fit=crop&crop=top"
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
