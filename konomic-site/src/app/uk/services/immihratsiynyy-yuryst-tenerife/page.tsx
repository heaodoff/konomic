import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Імміграційний юрист на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе з питань резиденції, імміграції, документів, локальних реєстрацій і переїзду до Іспанії.',
  alternates: { canonical: '/uk/services/immihratsiynyy-yuryst-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function UkImmigrationPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Імміграція та резиденція"
        title="Юридична підтримка на Тенерифе щодо резиденції, документів і переїзду"
        text="Ця сторінка для клієнтів, яким потрібен зрозуміліший старт у питаннях переїзду на Тенерифе, резиденції та локальних документів."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Типові ситуації</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• До переїзду на Тенерифе</li><li>• Коли незрозумілий шлях до резиденції</li><li>• Коли місцеві документи й кроки викликають плутанину</li><li>• Коли процес треба починати з-за кордону</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Що може прояснити ранній розбір</h2><div className="mt-6 grid gap-3">{['Орієнтація щодо резиденції та переїзду','Контекст щодо NIE / TIE і місцевих документів','Питання сім’ї та relocation','Дистанційний перший крок, якщо це доречно'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Що краще надіслати першим</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Зазвичай корисно відразу вказати, з якої країни ви стартуєте, який у вас тип питання щодо резиденції або переїзду, який термін важливий і чи вже є документи.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Почати консультацію щодо резиденції</a></div>
    </main>
  );
}
