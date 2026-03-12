import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Юрист по недвижимости на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе для покупки недвижимости, due diligence, проверки документов и снижения рисков для иностранных покупателей.',
  alternates: { canonical: '/ru/services/yurist-po-nedvizhimosti-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'До подписания reserva contract или договора купли-продажи',
  'До перевода депозита или другой существенной суммы',
  'Когда по объекту ещё не ясна документальная ситуация',
  'Когда иностранному покупателю нужна проверка рисков до сделки',
];

const checks = [
  'Проверка reserva, договора купли-продажи и связанных документов',
  'Due diligence до покупки, когда это уместно',
  'Проверка титула, долгов, лицензий и рисков сделки',
  'Раннее выявление вопросов, которые лучше снять до подписи',
];

const firstMessage = [
  'Адрес объекта или ссылка на объявление',
  'Есть ли уже reserva или проект договора',
  'Запрашивался ли уже депозит и был ли он оплачен',
  'Ваш срок и где вы сейчас находитесь',
  'Любые документы, которые уже можно прислать на проверку',
];

export default function RuPropertyPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Недвижимость"
        title="Юрист по недвижимости на Тенерифе для иностранных покупателей и инвесторов"
        text="Эта страница для клиентов, которым нужна юридическая ясность до депозита, reserva contract или сделки по недвижимости на Тенерифе."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Типовые ситуации</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Когда обычно имеет смысл обращаться</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Почему важно смотреть заранее</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">В сделках по недвижимости самый полезный юридический шаг часто происходит до перевода денег</h2>
            <p className="mt-4 text-sm leading-7 text-white/82 md:text-base">
              Во многих случаях ключевая проверка нужна до reserva, до депозита и до момента, когда клиент уже предполагает, что с документами “и так всё нормально”.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Что может входить в услугу</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Частые точки проверки до решения по объекту</h2>
          <div className="mt-6 grid gap-3">
            {checks.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Что лучше прислать первым</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Практичное первое сообщение делает разбор полезнее</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            Начать консультацию по недвижимости
          </a>
        </div>
      </div>

      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
        <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Следующий шаг</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">Если документ уже есть, обычно правильнее сначала проверить его до подписи</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
          Если сделка уже движется и есть reserva, проект договора или другие документы, самый ясный первый шаг — написать в WhatsApp и затем прислать документ на структурированную проверку.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Отправить первое сообщение</a>
          <Link href="/ru/contact" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Открыть контакты</Link>
        </div>
      </div>
    </main>
  );
}
