import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Адвокат з нерухомості на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе для купівлі нерухомості, due diligence, перевірки документів і зниження ризиків для іноземних покупців.',
  alternates: { canonical: '/uk/services/advokat-z-nerukhomosti-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'До підписання reserva contract або договору купівлі-продажу',
  'До переказу депозиту або іншої суттєвої суми',
  'Коли документальна ситуація щодо об’єкта ще неясна',
  'Коли іноземному покупцю потрібна перевірка ризиків до угоди',
];

const checks = [
  'Перевірка reserva, договору купівлі-продажу та пов’язаних документів',
  'Due diligence до купівлі, коли це доречно',
  'Перевірка титулу, боргів, ліцензій і ризиків угоди',
  'Раннє виявлення питань, які краще зняти до підпису',
];

const firstMessage = [
  'Адреса об’єкта або посилання на оголошення',
  'Чи вже є reserva або проєкт договору',
  'Чи вже запитувався або сплачувався депозит',
  'Ваш термін і де ви зараз перебуваєте',
  'Будь-які документи, які вже можна надіслати на перевірку',
];

export default function UkPropertyPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Нерухомість"
        title="Адвокат з нерухомості на Тенерифе для іноземних покупців та інвесторів"
        text="Ця сторінка для клієнтів, яким потрібна юридична ясність до депозиту, reserva contract або угоди з нерухомістю на Тенерифе."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Типові ситуації</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Коли зазвичай варто звертатися</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Чому важливо перевіряти раніше</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">У справах з нерухомістю найкорисніший юридичний крок часто відбувається до переказу коштів</h2>
            <p className="mt-4 text-sm leading-7 text-white/82 md:text-base">
              У багатьох випадках ключова перевірка потрібна до reserva, до депозиту і до моменту, коли клієнт уже припускає, що з документами «і так усе гаразд».
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Що може входити в послугу</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Типові точки перевірки до рішення по об’єкту</h2>
          <div className="mt-6 grid gap-3">
            {checks.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Що краще надіслати першим</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Практичне перше повідомлення робить розбір кориснішим</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            Почати консультацію щодо нерухомості
          </a>
        </div>
      </div>

      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
        <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Наступний крок</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">Якщо документ уже є, зазвичай правильніше спочатку перевірити його до підпису</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
          Якщо угода вже рухається і є reserva, проєкт договору або інші документи, найзрозуміліший перший крок — написати у WhatsApp і потім надіслати документ на структуровану перевірку.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Надіслати перше повідомлення</a>
          <Link href="/uk/contact" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Відкрити контакти</Link>
        </div>
      </div>
    </main>
  );
}
