const steps = [
  { num: '01', title: 'Бриф', desc: 'Погружаюсь в задачу: бизнес-цели, аудитория, конкуренты, метрики успеха.' },
  { num: '02', title: 'Исследование', desc: 'UX-аудит, CJM, анализ паттернов — нахожу реальные проблемы, а не симптомы.' },
  { num: '03', title: 'Концепция', desc: 'Структура, архитектура информации, прототипы. Согласование до пикселей.' },
  { num: '04', title: 'Дизайн', desc: 'От вайрфреймов до финального UI с дизайн-системой и спецификациями.' },
  { num: '05', title: 'Сдача', desc: 'Передаю макеты, отвечаю на вопросы разработки, сопровождаю до запуска.' },
]

export default function Process() {
  return (
    <section className="process-sec">
      <div className="sec-bar reveal">
        <h3>Процесс работы</h3>
        <span>5 этапов</span>
      </div>

      <div className="process-steps reveal">
        {steps.map((s) => (
          <div key={s.num} className="process-step">
            <div className="process-step__num">{s.num}</div>
            <div className="process-step__title">{s.title}</div>
            <p className="process-step__desc">{s.desc}</p>
            <div className="process-step__accent" />
          </div>
        ))}
      </div>
    </section>
  )
}
