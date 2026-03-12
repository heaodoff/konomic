import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Контакт Konomic Digital SL. на Тенерифе',
  description:
    'Зв’яжіться з Konomic Digital SL. щодо нерухомості, резиденції, бізнесу, договорів та міжнародних юридичних питань на Тенерифе.',
  alternates: { canonical: '/uk/contact' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const firstMessageChecklist = [
  'У чому суть питання',
  'Чи вже щось підписано або оплачено',
  'Термін або терміновість',
  'Бажана мова спілкування',
  'Чи вже є документи для перевірки',
];

const channelGuide = [
  { title: 'WhatsApp', eyebrow: 'Основний', text: 'Найкращий канал для нового звернення, швидкої відповіді та зрозумілого першого кроку.' },
  { title: 'Telegram', eyebrow: 'Другорядний', text: 'Зручний, якщо вам комфортніше координуватися письмово через Telegram.' },
  { title: 'Email', eyebrow: 'Документи', text: 'Найкращий варіант, коли потрібно надіслати файли, довший контекст або кілька документів.' },
];

const processSteps = [
  'Перше повідомлення зазвичай починається у WhatsApp.',
  'Ситуація переглядається і спрямовується у відповідний формат консультації або перевірки.',
  'Якщо потрібно, документи можна надіслати заздалегідь через email або месенджер.',
  'Наступні кроки формулюються чітко, щоб клієнт розумів, що підготувати і що буде далі.',
];

export default function ContactPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Контакт"
        title="Зв’язатися з Konomic Digital SL."
        text="Для більшості нових звернень WhatsApp — найшвидший і найзрозуміліший старт. Email краще підходить для документів, а Telegram може бути додатковим письмовим каналом для координації."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Почати у WhatsApp</a>
        <a href="mailto:nikita.lukashok@gmail.com" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Надіслати email</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Відкрити Telegram</a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {channelGuide.map((item) => (
          <div key={item.title} className="ui-card-soft px-6 py-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">{item.eyebrow}</div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#59646e]">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-6 sm:p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Перше повідомлення</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Що варто включити в перше звернення</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
            Коротке і структуроване повідомлення зазвичай робить первинний розбір швидшим і кориснішим. Якщо документи вже є, їх можна надіслати після першого контакту.
          </p>
          <div className="mt-6 grid gap-3">
            {firstMessageChecklist.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-[#14213d]/8 bg-[#fffdfa] px-5 py-5 sm:px-6 sm:py-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Шаблон для WhatsApp</div>
            <div className="mt-4 text-sm leading-7 text-[#47515a] md:text-base">
              Добрий день. Мені потрібна юридична допомога щодо [нерухомості / резиденції / бізнесу / договору]. Зараз я перебуваю в [країна / місце]. Ситуація така: [короткий опис]. [Нічого ще не підписано / документ уже існує]. Мені зручно спілкуватися [мова]. Мій термін — [термін].
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="ui-card-soft rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
            <h2 className="text-2xl font-semibold tracking-tight">Публічні контакти</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
              <li>• WhatsApp / телефон: +34 643 319 719</li>
              <li>• Email: nikita.lukashok@gmail.com</li>
              <li>• Telegram: @nkitl0</li>
              <li>• Компанія: Konomic Digital SL.</li>
            </ul>
          </div>
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Шлях клієнта</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Що відбувається далі</h2>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base">
                {processSteps.map((item, index) => (
                  <li key={item}>{index + 1}. {item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
