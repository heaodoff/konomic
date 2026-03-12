import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Русскоязычная юридическая поддержка на Тенерифе',
  description:
    'Многоязычная юридическая поддержка на Тенерифе для иностранцев по недвижимости, резиденции, бизнесу и договорам.',
  alternates: {
    canonical: '/ru',
    languages: {
      en: '/en',
      de: '/de',
      ru: '/ru',
      uk: '/uk',
      es: '/es',
      'x-default': '/en',
    },
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const trustPoints = [
  'Фокус на иностранных клиентах на Тенерифе',
  'Полезно до подписи, переезда или инвестиций',
  'Документы можно прислать заранее',
  'WhatsApp — основной первый канал связи',
];

const processSteps = [
  'Отправьте первое сообщение в WhatsApp с коротким описанием ситуации.',
  'Пришлите документы, срок и укажите, подписано ли уже что-то.',
  'Ситуация смотрится и направляется в подходящий формат консультации или проверки.',
  'Следующие шаги фиксируются ясно, чтобы клиент понимал, что подготовить дальше.',
];

const serviceHighlights = [
  {
    title: 'Юридическая поддержка по недвижимости',
    eyebrow: 'Для покупателей, инвесторов и собственников',
    text: 'Юридическая проверка до reserva contract, купли-продажи, оплаты и решений по недвижимости на Тенерифе.',
    bullets: ['Due diligence до покупки', 'Проверка договора до подписи', 'Проверка титула, долгов и лицензий'],
    href: '/ru/services/yurist-po-nedvizhimosti-tenerife',
  },
  {
    title: 'Резиденция, иммиграция и переезд',
    eyebrow: 'Для тех, кто переезжает на Тенерифе',
    text: 'Юридическая поддержка по резиденции, локальным документам и подготовке до или после приезда.',
    bullets: ['Ориентация по резиденции и relocation', 'NIE / TIE и локальные шаги', 'Удалённый старт, если это уместно'],
    href: '/ru/services/immigracionnyy-yurist-tenerife',
  },
  {
    title: 'Бизнес и структура компании',
    eyebrow: 'Для основателей и операторов',
    text: 'Поддержка для иностранных предпринимателей по структуре бизнеса, коммерческим документам и запуску деятельности в Испании.',
    bullets: ['Открытие и структура компании', 'Договорённости между партнёрами', 'Коммерческие договоры и сопровождение'],
    href: '/ru/services/biznes-yurist-tenerife',
  },
  {
    title: 'Проверка договоров и документов',
    eyebrow: 'Для тех, кому нужна ясность до подписи',
    text: 'Проверка договоров и документов до того, как клиент возьмёт на себя обязательства, переведёт деньги или зафиксирует риск.',
    bullets: ['Договоры по недвижимости и аренде', 'Коммерческие и сервисные договоры', 'Проверка двуязычных документов'],
    href: '/ru/services/proverka-dogovorov-tenerife',
  },
];

const clientSituations = [
  'Покупка недвижимости на Тенерифе и желание проверить документы до депозита',
  'Переезд в Испанию и необходимость понять вопросы резиденции и документов',
  'Запуск бизнеса или структуры как иностранный основатель',
  'Проверка договора до подписи или перевода денег',
  'Отправка документов из другой страны до приезда на Тенерифе',
  'Необходимость понять правильный юридический следующий шаг, а не гадать',
];

const faqItems = [
  {
    q: 'Нужно ли быть на Тенерифе, чтобы начать?',
    a: 'Не обязательно. Во многих случаях первый этап можно начать удалённо, особенно если важно проверить документы или понять следующий шаг до поездки, подписи или оплаты.',
  },
  {
    q: 'Можно ли проверить договор до подписания?',
    a: 'Да. Это одна из самых полезных причин написать заранее. Проверка до подписи почти всегда ценнее, чем попытка исправлять проблему потом.',
  },
  {
    q: 'Работаете ли вы с иностранными покупателями недвижимости?',
    a: 'Да. Недвижимость — одно из ключевых направлений сайта, особенно для иностранных покупателей и инвесторов, которым нужно понять риски до перевода денег.',
  },
  {
    q: 'Можно ли прислать документы заранее?',
    a: 'Да, когда это уместно. Если документы уже есть, их обычно можно отправить после первого сообщения, чтобы разбор был точнее и структурированнее.',
  },
  {
    q: 'Что писать в первый WhatsApp?',
    a: 'Кратко опишите ситуацию, укажите, подписано ли уже что-то, какой срок или срочность, какой язык вам удобен и есть ли документы для проверки.',
  },
  {
    q: 'Какой канал связи лучше?',
    a: 'Основной канал — WhatsApp, потому что он обычно самый быстрый и понятный. Telegram подходит для переписки, email — для документов и длинного контекста.',
  },
];

export default function RuHomePage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]" aria-hidden="true" />
        <div className="flex flex-col justify-center">
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            Русскоязычная юридическая поддержка на Тенерифе
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">
            Многоязычная юридическая поддержка на Тенерифе для иностранцев.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">
            Поддержка по недвижимости, резиденции, бизнесу и договорам — с понятным первым шагом для клиентов, которым нужна юридическая ясность до подписи, переезда, инвестиций или структуры бизнеса в Испании.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528] sm:px-6">
              Написать в WhatsApp
            </a>
            <Link href="/ru/services" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6">
              Смотреть услуги
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6">
            <span>Основной: WhatsApp</span>
            <span>•</span>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram</a>
            <span>•</span>
            <a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">Email</a>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {trustPoints.map((item) => (
              <div key={item} className="ui-card px-5 py-5 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">
                Почему стоит обращаться раньше
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Юридическая проверка особенно полезна до подписи документов и перевода денег.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">
                Многим иностранным клиентам помощь нужна до reserva contract, до переезда, до запуска структуры бизнеса или до согласия на условия, которые ещё не до конца понятны.
              </p>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {[
                  'Проверка до reserva contract или договора купли-продажи',
                  'Ясность до шагов по резиденции и переезду',
                  'Поддержка до запуска или структуры бизнеса',
                  'Проверка документов до дорогих обязательств',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">
              Первое сообщение
            </div>
            <p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">
              Самый быстрый старт — короткий WhatsApp с описанием вопроса, сроком, языком и документами, если они уже есть.
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-tint">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Кому помогает Konomic</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Сайт построен вокруг тех юридических ситуаций, с которыми иностранцы чаще всего сталкиваются на Тенерифе.
            </h2>
            <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
              {[
                'Иностранные покупатели недвижимости',
                'Люди, переезжающие на Тенерифе',
                'Основатели и владельцы бизнеса',
                'Семьи с трансграничными юридическими вопросами',
              ].map((item) => (
                <div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Как начинается процесс</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Понятные следующие шаги уже с первого сообщения.
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[#59646e] md:mt-6 md:space-y-4 md:text-base">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-cream">
        <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Ключевые услуги</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
              Те юридические задачи, с которых чаще всего и стоит начинать.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            Публичная структура услуг сфокусирована на тех ситуациях, где ранняя юридическая ясность обычно помогает избежать большего риска позже.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="ui-card p-6 sm:p-7 md:p-9">
              <div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.text}</p>
              <div className="mt-4 grid gap-2.5">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">
                    {bullet}
                  </div>
                ))}
              </div>
              <Link href={service.href} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">
                Смотреть детали услуги →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">Типовые ситуации</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Сайт должен быть полезен до того, как юридическая проблема станет дороже.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clientSituations.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/88">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-cool">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">FAQ</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
            Вопросы, которые чаще всего возникают до первого контакта.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-5">
          {faqItems.map((item) => (
            <div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">
              <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
