import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Иммиграционный юрист на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе по вопросам резиденции, иммиграции, документов, локальных регистраций и переезда в Испанию.',
  alternates: { canonical: '/ru/services/immigracionnyy-yurist-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function RuImmigrationPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Иммиграция и резиденция"
        title="Юридическая поддержка на Тенерифе по резиденции, документам и переезду"
        text="Эта страница для клиентов, которым нужен более понятный старт в вопросах переезда на Тенерифе, резиденции и локальных документов."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Типовые ситуации</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• До переезда на Тенерифе</li><li>• Когда неясен путь по резиденции</li><li>• Когда локальные документы и шаги вызывают путаницу</li><li>• Когда процесс нужно начать из-за границы</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Что помогает прояснить ранний разбор</h2><div className="mt-6 grid gap-3">{['Ориентация по резиденции и переезду','Контекст по NIE / TIE и локальным документам','Вопросы семьи и relocation','Удалённый первый шаг, если это уместно'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Что лучше прислать первым</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Обычно полезно сразу указать, из какой страны вы начинаете, какой у вас тип задачи по резиденции или переезду, какой срок важен и есть ли уже документы.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Начать консультацию по резиденции</a></div>
    </main>
  );
}
