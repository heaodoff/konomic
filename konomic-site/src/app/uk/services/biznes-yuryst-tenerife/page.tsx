import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Бізнес-юрист на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе для відкриття компанії, структури бізнесу, комерційних договорів і супроводу іноземних підприємців.',
  alternates: { canonical: '/uk/services/biznes-yuryst-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function UkBusinessPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Бізнес і структура"
        title="Юридична підтримка на Тенерифе для бізнесу, підприємців і міжнародних проєктів"
        text="Ця сторінка для клієнтів, які хочуть відкрити, структурувати або безпечніше вести бізнес на Тенерифе та в Іспанії."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Типові ситуації</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• До запуску компанії або структури в Іспанії</li><li>• Коли між партнерами потрібні зрозумілі домовленості</li><li>• Коли комерційні документи потрібно перевірити заздалегідь</li><li>• Коли іноземному підприємцю важливо зменшити структурні помилки на старті</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Що може включати ця послуга</h2><div className="mt-6 grid gap-3">{['Відкриття та структура компанії','Домовленості між партнерами','Перевірка комерційних договорів','Рання юридична ясність до зростання ризику'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Корисний перший крок</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">У першому повідомленні краще коротко пояснити, який тип бізнесу або структури планується, чи є вже чернетки документів і який термін найбільш важливий.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Почати консультацію щодо бізнесу</a></div>
    </main>
  );
}
