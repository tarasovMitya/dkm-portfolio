'use client'

export default function ProjectContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const project = (form.elements.namedItem('project') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const body = `Имя: ${name}%0AПроект: ${project}%0AТелефон: ${phone}`
    window.location.href = `mailto:info@dkm-folio.ru?subject=Новый проект&body=${body}`
  }

  return (
    <form className="proj-cta-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Ваше имя" className="proj-cta-input" required />
      <input type="text" name="project" placeholder="Кратко о проекте" className="proj-cta-input" required />
      <input type="tel" name="phone" placeholder="Телефон или Telegram" className="proj-cta-input" required />
      <button type="submit" className="proj-cta-btn">Отправить →</button>
    </form>
  )
}
