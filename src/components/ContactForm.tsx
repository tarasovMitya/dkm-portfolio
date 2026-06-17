'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', contact: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="cta-sec" id="contact">
      <p className="cta-kicker">Оставить заявку</p>

      <div className="cta-inner">
        <div>
          <a href="mailto:hello@dkm.design" className="cta-big">
            Давайте<br />работать
          </a>
          <p className="cta-sub">
            Расскажите о задаче — отвечу в течение дня
            и предложу решение ещё до договора.
          </p>
          <div className="cta-contacts">
            <a href="tel:+79998518535" className="cta-contact-item">+7 (999) 851-85-35</a>
            <span className="cta-contact-item">Москва, Россия</span>
            <a href="https://kishchenko-dmitriy.ru" target="_blank" rel="noopener" className="cta-contact-item">
              kishchenko-dmitriy.ru ↗
            </a>
          </div>
        </div>

        <div className="reveal">
          {sent ? (
            <div style={{ textAlign: 'center', color: 'rgba(240,237,232,.85)', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <p style={{ fontSize: 17, lineHeight: 1.6 }}>
                Заявка отправлена.<br />Отвечу в течение дня.
              </p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Имя"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Телефон или email"
                value={form.contact}
                onChange={e => setForm({ ...form, contact: e.target.value })}
                required
              />
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
              <textarea
                placeholder="Расскажите о проекте"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={4}
              />
              <button type="submit" className="cta-submit">
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="foot-row">
        <div className="foot-col">
          <h5>Платформы</h5>
          <ul>
            <li><a href="https://kishchenko-dmitriy.ru" target="_blank" rel="noopener">kishchenko-dmitriy.ru</a></li>
            <li><a href="#">Яндекс Услуги · 4.9 ★</a></li>
            <li><a href="#">Profi.ru · 4.93 ★</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Навигация</h5>
          <ul>
            <li><a href="/#work">Проекты</a></li>
            <li><a href="/#about">Обо мне</a></li>
            <li><a href="/blog">Блог</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-copy">
        <span>© 2026 Кищенко Дмитрий</span>
        <span>UI/UX · Web Design · Moscow</span>
      </div>
    </section>
  )
}
