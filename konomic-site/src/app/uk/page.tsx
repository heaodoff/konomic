import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Українська юридична підтримка на Тенерифе',
  description:
    'Багатомовна юридична підтримка на Тенерифе для міжнародних клієнтів із питаннями нерухомості, резиденції, бізнесу та договорів.',
  alternates: {
    canonical: '/uk',
    languages: { en: '/en', de: '/de', ru: '/ru', uk: '/uk', es: '/es', 'x-default': '/en' },
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const trustPoints = [
  'Фокус на міжнародних клієнтах на Тенерифе',
  'Корисно до підпису, переїзду чи інвестиції',
  'Документи можна надіслати заздалегідь',
  'WhatsApp — основний перший канал зв’язку',
];

const processSteps = [
  'Надішліть перше повідомлення у WhatsApp з коротким описом ситуації.',
  'Надішліть документи, термін і вкажіть, чи вже щось підписано або оплачено.',
  'Ситуація переглядається і спрямовується у відповідний формат консультації або перевірки.',
  'Наступні кроки формулюються чітко, щоб клієнт розумів, що підготувати далі.',
];

const serviceHighlights = [
  {
    title: 'Юридична підтримка з нерухомості',
    eyebrow: 'Для покупців, інвесторів і власників',
    text: 'Юридична перевірка до reserva contract, купівлі-продажу, оплати та рішень щодо нерухомості на Тенерифе.',
    bullets: ['Due diligence до купівлі', 'Перевірка договору до підпису', 'Перевірка титулу, боргів і ліцензій'],
    href: '/uk/services/advokat-z-nerukhomosti-tenerife',
  },
  {
    title: 'Резиденція, імміграція та переїзд',
    eyebrow: 'Для тих, хто переїжджає на Тенерифе',
    text: 'Юридична підтримка щодо резиденції, місцевих документів і підготовки до або після приїзду.',
    bullets: ['Орієнтація щодо резиденції та relocation', 'NIE / TIE і місцеві кроки', 'Дистанційний старт, якщо це доречно'],
    href: '/uk/services/immihratsiynyy-yuryst-tenerife',
  },
  {
    title: 'Бізнес і структура компанії',
    eyebrow: 'Для засновників та операторів',
    text: 'Підтримка для міжнародних підприємців щодо структури бізнесу, комерційних документів і запуску діяльності в Іспанії.',
    bullets: ['Відкриття та структура компанії', 'Домовленості між партнерами', 'Комерційні договори й супровід'],
    href: '/uk/services/biznes-yuryst-tenerife',
  },
  {
    title: 'Перевірка договорів і документів',
    eyebrow: 'Для тих, кому потрібна ясність до підпису',
    text: 'Перевірка договорів і документів до того, як клієнт візьме на себе зобов’язання, перерахує кошти або зафіксує ризик.',
    bullets: ['Договори щодо нерухомості та оренди', 'Комерційні та сервісні договори', 'Перевірка двомовних документів'],
    href: '/uk/services/perevirka-dohovoriv-tenerife',
  },
];

const clientSituations = [
  'Купівля нерухомості на Тенерифе і бажання перевірити документи до депозиту',
  'Переїзд до Іспанії та потреба зрозуміти питання резиденції та документів',
  'Запуск бізнесу або структури як іноземний засновник',
  'Перевірка договору до підпису або переказу грошей',
  'Надсилання документів з іншої країни до приїзду на Тенерифе',
  'Потреба зрозуміти правильний юридичний наступний крок, а не вгадувати',
];

const faqItems = [
  {
    q: 'Чи потрібно бути на Тенерифе, щоб почати?',
    a: 'Не обов’язково. У багатьох випадках перший етап можна почати дистанційно, особливо якщо важливо перевірити документи або зрозуміти наступний крок до поїздки, підпису чи оплати.',
  },
  {
    q: 'Чи можна перевірити договір до підпису?',
    a: 'Так. Це одна з найкорисніших причин написати заздалегідь. Перевірка до підпису майже завжди цінніша, ніж спроби виправляти проблему потім.',
  },
  {
    q: 'Чи працюєте ви з іноземними покупцями нерухомості?',
    a: 'Так. Нерухомість — один із ключових напрямів сайту, особливо для міжнародних покупців та інвесторів, яким потрібно зрозуміти ризики до переказу коштів.',
  },
  {
    q: 'Чи можна надіслати документи заздалегідь?',
    a: 'Так, коли це доречно. Якщо документи вже є, їх зазвичай можна надіслати після першого повідомлення, щоб розбір був точнішим і структурованішим.',
  },
  {
    q: 'Що писати в перший WhatsApp?',
    a: 'Коротко опишіть ситуацію, вкажіть, чи вже щось підписано, який термін або терміновість, якою мовою вам зручно і чи є документи для перевірки.',
  },
  {
    q: 'Який канал зв’язку кращий?',
    a: 'Основний канал — WhatsApp, бо він зазвичай найшвидший і найзрозуміліший. Telegram підходить для листування, email — для документів і довшого контексту.',
  },
];

export default function UkHomePage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]" aria-hidden="true" />
        <div className="flex flex-col justify-center">
          <Image
            src="/konomic-logo.png"
            alt="Логотип Konomic"
            width={420}
            height={175}
            priority
            className="mb-6 h-auto w-[190px] sm:w-[230px] md:w-[280px]"
          />
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            Україномовна юридична підтримка на Тенерифе
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">
            Багатомовна юридична підтримка на Тенерифе для міжнародних клієнтів.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">
            Підтримка щодо нерухомості, резиденції, бізнесу та договорів — із чітким першим кроком для клієнтів, яким потрібна юридична ясність до підпису, переїзду, інвестиції чи структурування діяльності в Іспанії.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528] sm:px-6">Почати у WhatsApp</a>
            <Link href="/uk/services" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6">Переглянути послуги</Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6"><span>Основний: WhatsApp</span><span>•</span><a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram</a><span>•</span><a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">Email</a></div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">{trustPoints.map((item)=><div key={item} className="ui-card px-5 py-5 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="space-y-4 sm:space-y-6"><div className="ui-card-dark p-6 text-white sm:p-8 md:p-10"><div className="relative z-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">Чому варто звертатися раніше</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Юридична перевірка особливо корисна до підпису документів і переказу коштів.</h2><p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">Багатьом міжнародним клієнтам допомога потрібна до reserva contract, до переїзду, до запуску структури бізнесу або до згоди на умови, які ще не до кінця зрозумілі.</p><div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">{['Перевірка до reserva contract або договору купівлі-продажу','Ясність до кроків по резиденції та переїзду','Підтримка до запуску чи структурування бізнесу','Перевірка документів до дорогих зобов’язань'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">{item}</div>)}</div></div></div><div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">Перше повідомлення</div><p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">Найшвидший старт — короткий WhatsApp з описом питання, терміном, мовою та документами, якщо вони вже є.</p></div></div>
      </section>
      <section className="ui-section ui-section-tint"><div className="grid gap-4 md:gap-6 lg:grid-cols-2"><div className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Кому допомагає Konomic</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Сайт побудований навколо тих юридичних ситуацій, з якими міжнародні клієнти найчастіше стикаються на Тенерифе.</h2><div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">{['Іноземні покупці нерухомості','Люди, які переїжджають на Тенерифе','Засновники та власники бізнесу','Сім’ї з транскордонними юридичними питаннями'].map((item)=><div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">{item}</div>)}</div></div><div className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Як починається процес</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Зрозумілі наступні кроки вже з першого повідомлення.</h2><ol className="mt-5 space-y-3 text-sm leading-7 text-[#59646e] md:mt-6 md:space-y-4 md:text-base">{processSteps.map((step,index)=><li key={step} className="flex gap-4"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-xs font-semibold text-white">0{index+1}</span><span>{step}</span></li>)}</ol></div></div></section>
      <section className="ui-section ui-section-cream"><div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Ключові послуги</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">Ті юридичні питання, з яких найчастіше варто починати.</h2></div><p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">Публічна структура послуг зосереджена на тих ситуаціях, де рання юридична ясність зазвичай допомагає уникнути більшого ризику пізніше.</p></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">{serviceHighlights.map((service)=><article key={service.title} className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.text}</p><div className="mt-4 grid gap-2.5">{service.bullets.map((bullet)=><div key={bullet} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">{bullet}</div>)}</div><Link href={service.href} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">Переглянути деталі послуги →</Link></article>)}</div></section>
      <section className="relative overflow-hidden border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" aria-hidden="true" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10"><div><div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">Типові ситуації</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Сайт має бути корисним до того, як юридична проблема стане дорожчою.</h2></div><div className="grid gap-4 sm:grid-cols-2">{clientSituations.map((item)=><div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/88">{item}</div>)}</div></div></section>
      <section className="ui-section ui-section-cool"><div className="max-w-3xl"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">FAQ</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">Питання, які найчастіше виникають до першого контакту.</h2></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-5">{faqItems.map((item)=><div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7"><h3 className="text-lg font-semibold tracking-tight">{item.q}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p></div>)}</div></section>
    </main>
  );
}
