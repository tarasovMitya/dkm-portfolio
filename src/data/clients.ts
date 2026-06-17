export interface Review {
  id: number
  name: string
  role: string
  company: string
  text: string
  avatar: string
  highlight?: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Алексей Морозов',
    role: 'CEO',
    company: 'TechFlow',
    text: 'Дмитрий сделал редизайн нашего SaaS-продукта за 3 недели. Конверсия выросла на 34%. Очень системный подход — не просто рисует, а думает о бизнесе.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face',
    highlight: 'Конверсия выросла на 34%',
  },
  {
    id: 2,
    name: 'Мария Соколова',
    role: 'Founder',
    company: 'EcoPulse',
    text: 'Работали над брендингом для нашей НКО. Дмитрий погрузился в тему, предложил несколько концепций и сделал полный гайдлайн. Всё с первого раза — без лишних итераций.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face',
    highlight: 'Всё с первого раза',
  },
  {
    id: 3,
    name: 'Игорь Петров',
    role: 'Co-Founder & CTO',
    company: 'DevStack',
    text: 'Обратился за UX-аудитом. Получил не просто список проблем, а готовые решения с обоснованием. Буду обращаться снова.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face',
    highlight: 'готовые решения с обоснованием',
  },
  {
    id: 4,
    name: 'Елена Власова',
    role: 'Product Manager',
    company: 'Retail Pro',
    text: 'Дизайн дашборда для трёх ролей одновременно — сложный проект. Дмитрий справился отлично. Пользователи отмечают, что интерфейс очень интуитивный.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',
    highlight: 'интерфейс очень интуитивный',
  },
  {
    id: 5,
    name: 'Андрей Климов',
    role: 'CEO',
    company: 'SWC Capital',
    text: 'Нам был нужен сайт, который передаёт серьёзность платформы. Дмитрий сделал именно это — строго, статусно, с характером. Рекомендую.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face',
    highlight: 'строго, статусно, с характером',
  },
  {
    id: 6,
    name: 'Татьяна Борисова',
    role: 'Marketing Director',
    company: 'GrowthLab',
    text: 'Заказали лендинг под запуск нового продукта. Сделали за 10 дней, включая правки. Качество на уровне больших агентств, но без раздутых смет и бюрократии.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=face',
    highlight: 'без раздутых смет',
  },
  {
    id: 7,
    name: 'Денис Ларин',
    role: 'Founder',
    company: 'LeadGen',
    text: 'Совместная работа над платформой заняла несколько месяцев. Дмитрий всегда на связи, предлагает решения до того, как они становятся проблемой.',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&fit=crop&crop=face',
    highlight: 'предлагает решения до того, как они становятся проблемой',
  },
  {
    id: 8,
    name: 'Светлана Иванова',
    role: 'Co-Founder',
    company: 'Bright Space',
    text: 'Очень рекомендую Дмитрия! Быстрая коммуникация, высокое качество работы и понимание бизнеса. Мы получили именно то, что хотели.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=96&h=96&fit=crop&crop=face',
    highlight: 'понимание бизнеса',
  },
]
