import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Process from '@/components/Process'
import Clients from '@/components/Clients'
import BlogSection from '@/components/BlogSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Nav />
      <Hero />
      <Marquee />

      {/* Tagline */}
      <section className="tagline">
        <div className="container">
          <div className="tagline__inner">
            <h2 className="tagline__left reveal">
              Создаю цифровые продукты, которые работают и запоминаются
            </h2>
            <p className="tagline__right reveal reveal-delay-1">
              Дизайнер с фокусом на UX-стратегию, визуальный язык и продуктовое мышление
            </p>
          </div>
        </div>
      </section>

      <Projects />
      <About />
      <Process />
      <Clients />
      <BlogSection />
      <ContactForm />
      <Footer />
    </ScrollRevealProvider>
  )
}
