const steps = [
  {
    num: '01',
    title: 'Бриф',
    desc: 'Погружаюсь в задачу: бизнес-цели, аудитория, конкуренты, метрики успеха.',
  },
  {
    num: '02',
    title: 'Исследование',
    desc: 'UX-аудит, CJM, анализ паттернов — нахожу реальные проблемы, а не симптомы.',
  },
  {
    num: '03',
    title: 'Концепция',
    desc: 'Структура, архитектура информации, прототипы. Согласование до пикселей.',
  },
  {
    num: '04',
    title: 'Дизайн',
    desc: 'От вайрфреймов до финального UI с дизайн-системой и спецификациями.',
  },
  {
    num: '05',
    title: 'Сдача',
    desc: 'Передаю макеты, отвечаю на вопросы разработки, сопровождаю до запуска.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 className="reveal" style={{
            fontSize: 'var(--text-heading)',
            fontWeight: 400,
            letterSpacing: 'var(--tracking-heading)',
            lineHeight: 'var(--leading-heading)',
            maxWidth: 480,
          }}>
            Процесс работы — прозрачно и предсказуемо
          </h2>
          <p className="reveal reveal-delay-1" style={{
            fontSize: 'var(--text-body-lg)',
            color: 'var(--color-pebble)',
            letterSpacing: 'var(--tracking-body-lg)',
            maxWidth: 320,
            textAlign: 'right',
          }}>
            Каждый этап с чёткими результатами и точками согласования
          </p>
        </div>

        <div className="process__grid reveal">
          {steps.map((step) => (
            <div className="process__step" key={step.num}>
              <div className="process__num">{step.num}</div>
              <div className="process__title">{step.title}</div>
              <p className="process__desc">{step.desc}</p>
              <div className="process__accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
