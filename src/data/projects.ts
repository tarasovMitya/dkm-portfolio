export interface Project {
  slug: string
  title: string
  tags: string[]
  description: string
  cover: string
  coverVideo?: string
  link?: string
  year: string
  role: string
  challenge: string
  solution: string
  result: string
  images: string[]
}

export const projects: Project[] = [
  {
    slug: 'leadgen-platform',
    title: 'LeadGen Platform',
    tags: ['SaaS', 'Web'],
    description:
      'SaaS-платформа для автоматического сбора и квалификации лидов из Яндекс Карт, OpenStreetMap и других источников. Добавляет контакты в CRM — чтобы команда занималась продажами, а не парсингом.',
    cover: 'https://image.thum.io/get/width/1440/crop/900/https://leadgen-platform.ru/',
    link: 'https://leadgen-platform.ru/',
    year: '2024',
    role: 'Product Designer',
    challenge:
      'Создать интуитивный интерфейс для сложного SaaS-продукта, который парсит данные из множества источников и структурирует их в CRM.',
    solution:
      'Разработал модульную дизайн-систему с акцентом на читаемость данных и эффективность операций. Каждый элемент UI проверен на реальных пользователях.',
    result:
      'Запущена в продакшн, онбординг новых пользователей сократился на 40% по сравнению с прototипом.',
    images: [
      'https://image.thum.io/get/width/1440/crop/900/https://leadgen-platform.ru/',
    ],
  },
  {
    slug: 'ecopulse',
    title: 'EcoPulse',
    tags: ['Brand', 'НКО'],
    description:
      'Фирменный стиль и визуальная система для НКО EcoPulse — организации, которая продвигает экологичные технологии и устойчивое развитие. Логотип, гайдлайн, носители.',
    cover: 'https://dkm-folio.ru/wp-content/uploads/covers/cover_ecopulse.png',
    year: '2024',
    role: 'Brand Designer',
    challenge:
      'Создать узнаваемый бренд для НКО, который передаёт ценности экологичности и технологичности одновременно.',
    solution:
      'Разработал визуальную систему на основе природных форм и современного минимализма: зелёная палитра, геометричный логотип, чистая типографика.',
    result:
      'Гайдлайн из 48 страниц, применённый в трёх городских кампаниях и партнёрских материалах.',
    images: ['https://dkm-folio.ru/wp-content/uploads/covers/cover_ecopulse.png'],
  },
  {
    slug: 'swc-capital',
    title: 'SWC.Capital',
    tags: ['Website', 'Brand'],
    description:
      'Веб-сайт для Sky World Community — социально-венчурной экосистемы, объединяющей инвесторов и предпринимателей для развития устойчивых проектов по всему миру.',
    cover: 'https://dkm-folio.ru/wp-content/uploads/covers/swc_logo.svg',
    coverVideo: 'https://dkm-folio.ru/wp-content/uploads/covers/swc_bg.mp4',
    year: '2024',
    role: 'Web Designer',
    challenge:
      'Передать статус и доверие премиальной инвестиционной платформы через дизайн, сохранив при этом ощущение открытости и социальной миссии.',
    solution:
      'Тёмная тема с золотыми акцентами, строгая типографика, большие образные фотографии. Лендинг выстроен по принципу storytelling.',
    result: 'Сайт запущен, органический трафик вырос на 60% в первый месяц.',
    images: ['https://dkm-folio.ru/wp-content/uploads/covers/swc_logo.svg'],
  },
  {
    slug: 'slot-home',
    title: 'slot-home.ru',
    tags: ['Dashboard', 'Web App'],
    description:
      'Дизайн дашборда для маркетплейса бытовых услуг. Три роли — администратор, клиент и исполнитель — каждая со своим сценарием, интерфейсом и логикой взаимодействия.',
    cover: 'https://image.thum.io/get/width/1440/crop/900/https://slot-home.ru/',
    link: 'https://slot-home.ru/',
    year: '2024',
    role: 'UI/UX Designer',
    challenge:
      'Спроектировать три совершенно разных интерфейса в рамках одной системы: для оператора, клиента и мастера — с разными задачами и уровнями экспертизы.',
    solution:
      'Единая дизайн-система с модульными компонентами, адаптирующимися под каждую роль. Цветовое кодирование статусов, чёткая иерархия действий.',
    result: 'Три роли, одна система — время на обучение новых пользователей сократилось на 35%.',
    images: ['https://image.thum.io/get/width/1440/crop/900/https://slot-home.ru/'],
  },
]
