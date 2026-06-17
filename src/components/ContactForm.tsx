'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', contact: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your form handler (Formspree, API route, etc.)
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__text reveal">
            <p className="contact__eyebrow">Оставить заявку</p>
            <h2 className="contact__headline">
              Есть проект?<br />Давайте работать
            </h2>
            <p className="contact__sub">
              Расскажите о задаче — отвечу в течение дня
              и предложу решение ещё до договора.
            </p>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:+79998518535" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-body-sm)' }}>
                +7 (999) 851-85-35
              </a>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'var(--text-caption)', letterSpacing: '0.08em' }}>
                Москва, Россия
              </span>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            {sent ? (
              <div style={{ textAlign: 'center', color: 'var(--color-pure-white)', padding: '40px 0' }}>
                <div style={{ fontSize: 'var(--text-heading)', marginBottom: 16 }}>✓</div>
                <p style={{ fontSize: 'var(--text-body-lg)', letterSpacing: 'var(--tracking-body-lg)' }}>
                  Заявка отправлена.<br />Отвечу в течение дня.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    placeholder="Телефон или email"
                    value={form.contact}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                    required
                  />
                </div>
                <div className="form-field">
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="">Тип задачи</option>
                    <option value="ux">UX/UI дизайн</option>
                    <option value="brand">Брендинг</option>
                    <option value="web">Веб-сайт</option>
                    <option value="audit">UX-аудит</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div className="form-field">
                  <textarea
                    placeholder="Расскажите о проекте"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <button type="submit" className="form__submit">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
