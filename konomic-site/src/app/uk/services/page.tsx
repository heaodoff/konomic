import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Юридичні послуги на Тенерифе',
  description:
    'Багатомовна юридична підтримка на Тенерифе для міжнародних клієнтів із питаннями нерухомості, резиденції, бізнесу, договорів, спадщини та спорів.',
  alternates: { canonical: '/uk/services' },
};

const serviceBlocks = [
  {
    href: '/uk/services/advokat-z-nerukhomosti-tenerife',
    title: 'Юридична підтримка з нерухомості',
    label: 'Часто потрібно до купівлі або оплати',
    summary:
      'Підтримка для міжнародних покупців, інвесторів, продавців і власників, яким потрібна перевірка до reserva, оплати або підписання документів на Тенерифе.',
    situations: [
      'До підписання reserva або договору купівлі-продажу',
      'До переказу депозиту чи значної суми',
      'Коли є сумніви щодо документів, боргів чи ліцензій',
    ],
    bullets: ['Due diligence до купівлі', 'Перевірка договору до підпису', 'Перевірка документальних ризиків'],
  },
  {
    href: '/uk/services/immihratsiynyy-yuryst-tenerife',
    title: 'Резиденція, імміграція та переїзд',
    label: 'Часто потрібно до переїзду',
    summary:
      'Юридична допомога для тих, хто переїжджає на Тенерифе або вирішує питання резиденції, місцевих документів і перших кроків в Іспанії.',
    situations: [
      'До переїзду на Тенерифе',
      'Коли незрозумілі питання резиденції та документів',
      'Коли процес потрібно починати з іншої країни',
    ],
    bullets: ['Резиденція і переїзд', 'NIE / TIE та локальні формальності', 'Дистанційний перший етап, якщо це доречно'],
  },
  {
    href: '/uk/services/biznes-yuryst-tenerife',
    title: 'Бізнес і структура компанії',
    label: 'Часто потрібно підприємцям',
    summary:
      'Юридична підтримка для міжнародних засновників, структури компанії, комерційних документів і запуску діяльності в Іспанії.',
    situations: [
      'До запуску структури бізнесу в Іспанії',
      'Коли між партнерами потрібні зрозумілі домовленості',
      'Коли потрібно перевірити комерційні документи',
    ],
    bullets: ['Відкриття та структура компанії', 'Домовленості між партнерами', 'Комерційні договори й супровід'],
  },
  {
    href: '/uk/services/perevirka-dohovoriv-tenerife',
    title: 'Перевірка договорів і документів',
    label: 'Часто потрібно до підписання',
    summary:
      'Перевірка договорів і документів до того, як клієнт візьме на себе зобов’язання, перерахує кошти або зафіксує ризик.',
    situations: [
      'До підписання договору з фінансовим або юридичним ризиком',
      'Коли потрібно перевірити двомовний документ',
      'Коли важливо зрозуміти зобов’язання до підпису',
    ],
    bullets: ['Договори купівлі-продажу й оренди', 'Комерційні та сервісні договори', 'Перевірка документів двома мовами'],
  },
];

const secondaryServices = [
  'Спадщина, succession і транскордонна координація',
  'Цивільні конфлікти та спори за договорами',
  'Юридична підтримка, коли проблема вже існує і її потрібно рано переглянути',
];

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Послуги"
        title="Юридичні послуги для тих тем, з яких найчастіше варто починати на Тенерифе"
        text="Публічна структура послуг зосереджена на нерухомості, резиденції, бізнесі та договорах — тобто там, де міжнародному клієнту найчастіше потрібна юридична ясність до підпису, оплати, переїзду чи зайвого ризику."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 space-y-6">
        {serviceBlocks.map((service) => (
          <section key={service.title} className="ui-card p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{service.label}</div>
              <div className="rounded-full border border-black/8 bg-[#faf7f3] px-3 py-1 text-xs text-[#59646e]">Основна послуга</div>
            </div>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#56616b]">{service.summary}</p>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Типові ситуації</div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
                    {service.situations.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                    {bullet}
                  </div>
                ))}
                <Link href={service.href} className="ui-button ui-button-primary mt-2 inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
                  Відкрити послугу
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10 ui-card p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Premium business expansion</div>
          <div className="rounded-full border border-black/8 bg-[#faf7f3] px-3 py-1 text-xs text-[#59646e]">ZEC / Канари</div>
        </div>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Податкове структурування, переваги Канар і відкриття компанії в ZEC</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#56616b]">Для засновників і операторів, які розглядають відкриття компанії на Тенерифе або Канарах, цей блок зосереджений на правильній структурі, логіці ZEC та юридичній координації корпоративної моделі.</p>
            <div className="mt-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Чому це викликає інтерес</div><ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base"><li>• Для компаній, які реально підходять під режим, ZEC може дати 4% замість стандартних 25% корпоративного податку в Іспанії.</li><li>• На Канарах діє IGIC замість материкового ПДВ, що в правильній структурі може давати додаткові переваги.</li><li>• Цей блок важливий там, де клієнту потрібна не просто реєстрація компанії, а сильніша корпоративна рамка.</li></ul></div>
          </div>
          <div className="grid gap-3">
            {['Підтримка щодо компанії ZEC','Структурування бізнесу на Канарах','Координація з бухгалтерами і податковими консультантами'].map((item)=><div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}
            <Link href="/uk/services/podatkove-strukturuvannia-zec-kompaniia" className="ui-button ui-button-primary mt-2 inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Відкрити послугу</Link>
          </div>
        </div>
      </section>

      <section className="mt-10 ui-card-dark p-6 text-white sm:p-8 md:p-10">
        <div className="relative z-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Додаткові напрями</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Є й інші сфери, які теж можуть бути релевантні залежно від ситуації</h2>
          <div className="mt-6 grid gap-3">
            {secondaryServices.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
