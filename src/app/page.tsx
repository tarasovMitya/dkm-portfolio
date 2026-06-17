import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Process from '@/components/Process'
import Clients from '@/components/Clients'
import FAQ from '@/components/FAQ'
import BlogSection from '@/components/BlogSection'
import ContactForm from '@/components/ContactForm'
import AnimationEngine from '@/components/AnimationEngine'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <AnimationEngine />
      <Nav />
      <Hero />

      {/* Tagline */}
      <section className="tagline-sec" id="tagline">
        <h2>Создаю цифровые продукты, которые работают и запоминаются</h2>
        <p>Дизайнер с фокусом на UX-стратегию, визуальный язык и продуктовое мышление</p>
      </section>

      <Projects />
      <About />
      <Process />
      <Clients />
      <FAQ />
      <BlogSection />
      <ContactForm />
    </>
  )
}
