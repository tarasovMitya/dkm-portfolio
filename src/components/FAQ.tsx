'use client'
import { useState, useRef } from 'react'

const faqs = [
  {
    q: 'Сколько стоит разработка дизайна?',
    a: 'Стоимость зависит от объёма и сложности проекта. Лендинг — от 60 000 ₽, дизайн-система — от 150 000 ₽. На первом звонке я оцениваю задачу и называю точную сумму.'
  },
  {
    q: 'Как долго длится проект?',
    a: 'Лендинг — 7–14 дней, полноценный продукт — от 4 недель. Работаю итерационно: уже через неделю видите первые результаты, а не ждёте финал месяцами.'
  },
  {
    q: 'Работаете ли вы с зарубежными клиентами?',
    a: 'Да. Работаю с клиентами из России, СНГ и Европы. Общаюсь на русском и английском, принимаю оплату в рублях, долларах и евро.'
  },
  {
    q: 'Что входит в передачу исходников?',
    a: 'Передаю Figma-файл с организованными компонентами, экспортированные ассеты в нужных форматах, гайд по шрифтам и цветам. Разработчик сможет сразу работать без лишних вопросов.'
  },
  {
    q: 'Делаете ли вы правки после сдачи?',
    a: 'В проекте предусмотрено 2 раунда правок на каждом этапе. После финальной сдачи — 2 недели гарантийной поддержки. Дополнительные правки оплачиваются отдельно.'
  },
  {
    q: 'С чего начать работу?',
    a: 'Заполните форму или напишите мне напрямую. Проведём 30-минутный звонок: узнаю задачу, расскажу подход и предложу решение. Без обязательств.'
  },
  {
    q: 'Можете ли вы сделать дизайн и разработку?',
    a: 'Да. Помимо дизайна занимаюсь разработкой: WordPress, Tilda и кастомная вёрстка. Могу закрыть проект под ключ — от концепции до готового сайта.'
  },
  {
    q: 'Как проходит процесс согласования?',
    a: 'Работаю в Figma — вы видите результат в реальном времени и оставляете комментарии прямо в файле. Никаких PDF и потерянных правок в переписке.'
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className="faq-body"
        ref={bodyRef}
        style={{ maxHeight: open ? (bodyRef.current?.scrollHeight ?? 400) + 'px' : '0px' }}
      >
        <p className="faq-a">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const half = Math.ceil(faqs.length / 2)
  const col1 = faqs.slice(0, half)
  const col2 = faqs.slice(half)

  return (
    <section className="faq-sec reveal" id="faq">
      <div className="faq-header">
        <div className="sec-bar reveal">
          <span className="sec-label">FAQ</span>
        </div>
        <h2 className="faq-title reveal">Частые вопросы</h2>
      </div>
      <div className="faq-grid">
        <div className="faq-col">
          {col1.map((item, i) => <Item key={i} {...item} />)}
        </div>
        <div className="faq-col">
          {col2.map((item, i) => <Item key={i} {...item} />)}
        </div>
      </div>
    </section>
  )
}
