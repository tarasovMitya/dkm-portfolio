const items = [
  { title: 'LeadGen Platform', tag: 'SaaS' },
  { title: 'EcoPulse', tag: 'Brand' },
  { title: 'SWC.Capital', tag: 'Website' },
  { title: 'slot-home.ru', tag: 'Dashboard' },
  { title: 'LeadGen Platform', tag: 'SaaS' },
  { title: 'EcoPulse', tag: 'Brand' },
  { title: 'SWC.Capital', tag: 'Website' },
  { title: 'slot-home.ru', tag: 'Dashboard' },
]

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item.title}
            <em>{item.tag}</em>
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
