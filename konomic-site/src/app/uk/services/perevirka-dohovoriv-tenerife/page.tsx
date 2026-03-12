import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Перевірка договорів на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе для перевірки договорів, документів і контролю ризиків до підписання або оплати.',
  alternates: { canonical: '/uk/services/perevirka-dohovoriv-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function UkContractsPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Договори та документи"
        title="Перевірка договорів на Тенерифе до підписання, оплати чи зобов’язань"
        text="Ця сторінка для клієнтів, які не хочуть підписувати документ, не розуміючи його юридичних і фінансових наслідків."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Типові ситуації</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• До підписання договору щодо нерухомості, оренди, послуг або бізнесу</li><li>• Коли документ іншою мовою і потребує зрозумілішої перевірки</li><li>• Коли юридичні чи фінансові наслідки ще не до кінця зрозумілі</li><li>• Коли безпечніше спочатку перевірити, а потім уже погоджуватися</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Чим допомагає така перевірка</h2><div className="mt-6 grid gap-3">{['Договори купівлі-продажу та оренди','Комерційні та сервісні договори','Перевірка двомовних документів','Раннє прояснення зобов’язань і ризиків'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Що краще надіслати першим</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Зазвичай найкорисніший перший крок — коротке повідомлення у WhatsApp плюс проєкт договору або документа з поясненням, що саме вас найбільше турбує і коли очікується підписання.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Почати перевірку договору</a></div>
    </main>
  );
}
