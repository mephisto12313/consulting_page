export type Segment = {
  id: string;
  title: string;
  benefit: string;
};

export type ServiceCluster = {
  id: string;
  title: string;
  lead: string;
  services: { slug: string; title: string; description: string }[];
};

export type CaseItem = {
  slug: string;
  title: string;
  type: string;
  contribution: string;
  services: string[];
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  leader?: boolean;
};

export const segments: Segment[] = [
  {
    id: "owner",
    title: "Собственник",
    benefit: "Стратегия актива, best-use, упаковка объекта",
  },
  {
    id: "developer",
    title: "Девелопер",
    benefit: "Продукт, концепция, исследования, сопровождение",
  },
  {
    id: "management",
    title: "УК",
    benefit: "Сервисная концепция, стандарты, эксплуатация",
  },
  {
    id: "broker",
    title: "Estate-брокер",
    benefit: "Аналитика и материалы для сделки",
  },
  {
    id: "investor",
    title: "Инвестор",
    benefit: "Аудит объектов и due diligence",
  },
  {
    id: "state",
    title: "Государство",
    benefit: "Территориальные стратегии и конкурсы",
  },
];

export const directions = [
  {
    id: "territory",
    title: "Территории и стратегия",
    text: "Устойчивое развитие, best-use и GIS-аналитика территорий.",
  },
  {
    id: "product",
    title: "Девелоперский продукт",
    text: "От исследования до архитектурной концепции и конкурсов.",
  },
  {
    id: "brand",
    title: "Бренд и коммуникации",
    text: "Айдентика, упаковка объектов, комьюнити и продвижение.",
  },
  {
    id: "ops",
    title: "Эксплуатация и сервис",
    text: "Стандарты УК, сервисные концепции, fit-out проектов.",
  },
  {
    id: "digital",
    title: "Цифра и процессы",
    text: "Цифровые решения, автоматизация и моделирование процессов.",
  },
  {
    id: "sales",
    title: "Продажи и образование",
    text: "Стратегия продаж, тренинги и программы для команд девелопера.",
  },
];

export const clusters: ServiceCluster[] = [
  {
    id: "territory",
    title: "Территории и стратегия",
    lead: "Стратегии развития территорий и аналитика для решений на карте.",
    services: [
      {
        slug: "sustainable-development",
        title: "Устойчивое территориальное развитие",
        description:
          "Комплексные стратегии развития территорий и объектов с опорой на данные и сценарии использования.",
      },
      {
        slug: "best-use-gis",
        title: "Best-use анализ и GIS-аналитика",
        description:
          "Оценка наилучшего использования участка и пространственная аналитика для продукта и инвестиций.",
      },
      {
        slug: "tourism-dev",
        title: "Туристический девелопмент",
        description:
          "Продуктовые и территориальные решения для туристических и смешанных функций.",
      },
    ],
  },
  {
    id: "product",
    title: "Девелоперский продукт",
    lead: "Программирование продукта от исследования до концепции.",
    services: [
      {
        slug: "dev-product",
        title: "Разработка девелоперского продукта",
        description:
          "Формирование продукта от исследований и ЗнП до логики продаж и ввода.",
      },
      {
        slug: "masterplan",
        title: "Генеральный план и архитектурная концепция",
        description:
          "Сопровождение и разработка ГП и архитектурной концепции среды.",
      },
      {
        slug: "competitions",
        title: "Архитектурные конкурсы",
        description:
          "Организация и проведение конкурсов с фокусом на результат для заказчика.",
      },
      {
        slug: "investment-audit",
        title: "Аудит объектов для инвестирования",
        description:
          "Проверка потенциала объекта и рисков до сделки.",
      },
    ],
  },
  {
    id: "environment",
    title: "Инженерия и среда",
    lead: "Качество среды, инженерия и детальный дизайн.",
    services: [
      {
        slug: "engineering-audit",
        title: "Инженерный аудит зданий и территорий",
        description:
          "Диагностика инженерных систем и ограничений территории.",
      },
      {
        slug: "wayfinding",
        title: "Дизайн среды и навигации",
        description:
          "Средовые сценарии и навигационные системы для сложных объектов.",
      },
      {
        slug: "landscape",
        title: "Ландшафтный дизайн",
        description:
          "Разработка и сопровождение ландшафтных решений.",
      },
      {
        slug: "interior",
        title: "Дизайн интерьера и экспозиции",
        description:
          "Интерьеры и экспозиционные пространства под продуктовую логику.",
      },
    ],
  },
  {
    id: "brand",
    title: "Бренд и коммуникации",
    lead: "Смыслы, визуальный язык и присутствие на рынке.",
    services: [
      {
        slug: "territorial-branding",
        title: "Территориальный и продуктовый брендинг",
        description:
          "Позиционирование территории или продукта для целевых аудиторий.",
      },
      {
        slug: "identity",
        title: "Айдентика и фирменный стиль",
        description:
          "Визуальная система, которая держит продукт на всех носителях.",
      },
      {
        slug: "comms",
        title: "Коммуникационная стратегия и продвижение",
        description:
          "Стратегия коммуникаций и продвижения девелоперского продукта.",
      },
      {
        slug: "packaging",
        title: "Упаковка объектов недвижимости",
        description:
          "Упаковка объекта для продажи, аренды или привлечения инвестиций.",
      },
      {
        slug: "community",
        title: "Комьюнити и событийный менеджмент",
        description:
          "События и комьюнити как часть ценности объекта.",
      },
    ],
  },
  {
    id: "ops",
    title: "Эксплуатация и стандарты",
    lead: "Как объект живёт после ввода.",
    services: [
      {
        slug: "standards",
        title: "Стандартизация для девелоперов и УК",
        description:
          "Стандарты качества среды, сервиса и процессов.",
      },
      {
        slug: "service-concept",
        title: "Сервисная и эксплуатационная концепция",
        description:
          "Модель сервиса и эксплуатации здания под продукт.",
      },
      {
        slug: "concierge",
        title: "Автоматизированные и консьерж-сервисы",
        description:
          "Сервисные сценарии и цифровые точки касания жителя/арендатора.",
      },
      {
        slug: "fitout",
        title: "Управление проектами отделки",
        description:
          "Сопровождение fit-out и отделочных программ.",
      },
    ],
  },
  {
    id: "digital",
    title: "Цифра и процессы",
    lead: "Инструменты, которые ускоряют решения бюро и заказчика.",
    services: [
      {
        slug: "digital",
        title: "Цифровые решения",
        description:
          "Цифровые продукты и интеграции под задачи девелопмента.",
      },
      {
        slug: "bpm",
        title: "Моделирование бизнес-процессов",
        description:
          "Описание и оптимизация процессов команд заказчика.",
      },
      {
        slug: "ai-it",
        title: "ИИ-автоматизация и ИТ-интеграции",
        description:
          "Автоматизация операционной деятельности и связка систем.",
      },
    ],
  },
  {
    id: "sales",
    title: "Продажи и образование",
    lead: "Команды, которые умеют продавать и развивать продукт.",
    services: [
      {
        slug: "sales-strategy",
        title: "Организация продаж и стратегический консалтинг",
        description:
          "Настройка продаж и тренинги для коммерческих команд.",
      },
      {
        slug: "education",
        title: "Образовательные программы",
        description:
          "Программы для продуктовых и маркетинговых отделов девелоперов.",
      },
    ],
  },
];

export const proofStats = [
  { value: "40+", label: "продуктов разработано" },
  { value: "60+", label: "экспертов в сети бюро" },
  { value: "25+", label: "консалтинговых проектов" },
  { value: "15+", label: "девелоперов-партнёров" },
];

export const cases: CaseItem[] = [
  {
    slug: "embankment-quarter",
    title: "Квартал у набережной",
    type: "Проекты развития",
    contribution:
      "Продуктовая стратегия и сценарии среды для смешанного квартала.",
    services: ["Девелоперский продукт", "Дизайн среды"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "business-campus",
    title: "Бизнес-кампус",
    type: "Здания",
    contribution:
      "Репозиционирование объекта и сервисная концепция для УК.",
    services: ["Брендинг", "Сервисная концепция"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "land-portfolio",
    title: "Портфель участков",
    type: "Земельные участки",
    contribution:
      "Best-use анализ и приоритизация сценариев освоения.",
    services: ["Best-use", "GIS-аналитика"],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "retail-street",
    title: "Стрит-ритейл коридор",
    type: "Коммерция",
    contribution:
      "Упаковка коммерческой функции и коммуникационная рамка.",
    services: ["Упаковка объектов", "Коммуникации"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "resort-cluster",
    title: "Курортный кластер",
    type: "Проекты развития",
    contribution:
      "Туристический девелопмент и территориальный бренд.",
    services: ["Туристический девелопмент", "Брендинг"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "office-tower",
    title: "Башня офисов",
    type: "Здания",
    contribution:
      "Аудит для инвестора и сценарии редевелопмента.",
    services: ["Инвестиционный аудит", "Инженерный аудит"],
    image:
      "https://images.unsplash.com/photo-1479839672679-c3200cceb90d?auto=format&fit=crop&w=1600&q=80",
  },
];

export const caseTypes = [
  "Все",
  "Проекты развития",
  "Здания",
  "Земельные участки",
  "Коммерция",
];

export const leaders: TeamMember[] = [
  {
    name: "Роман Потехин",
    role: "Операционный директор",
    focus: "Девелоперский продукт · коммерция",
    leader: true,
  },
  {
    name: "Наталья Орлова",
    role: "Коммерческий директор",
    focus: "Девелоперский продукт · экономика",
    leader: true,
  },
  {
    name: "Левон Егорян",
    role: "Финансовый директор",
    focus: "Финансы проектов",
    leader: true,
  },
];

export const team: TeamMember[] = [
  {
    name: "Борис Кондаков",
    role: "Руководитель проектов",
    focus: "Благоустройство · светодизайн",
  },
  {
    name: "Алексей Гладских",
    role: "Руководитель проектов",
    focus: "Жилые здания · архитектура",
  },
  {
    name: "Дмитрий Грошев",
    role: "Руководитель проектов",
    focus: "BIM-аналитика",
  },
  {
    name: "Джаннет Абдусаламова",
    role: "Руководитель проектов",
    focus: "Коммерция · архитектура",
  },
  {
    name: "Оксана Тремсина",
    role: "Руководитель проектов",
    focus: "Жилые здания · маркетинг",
  },
  {
    name: "Алия Степанова",
    role: "PR-директор",
    focus: "Комьюнити · коммуникации",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80";

export const missionImage =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80";
