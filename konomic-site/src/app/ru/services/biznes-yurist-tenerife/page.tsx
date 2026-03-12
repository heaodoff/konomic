import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Бизнес-юрист на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе для открытия компании, структуры бизнеса, коммерческих договоров и сопровождения иностранных предпринимателей.',
  alternates: { canonical: '/ru/services/biznes-yurist-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function RuBusinessPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Бизнес и структура"
        title="Юридическая поддержка на Тенерифе для бизнеса, предпринимателей и международных проектов"
        text="Эта страница для клиентов, которые хотят открыть, структурировать или безопаснее вести бизнес на Тенерифе и в Испании."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Типовые ситуации</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• До запуска компании или структуры в Испании</li><li>• Когда между партнёрами нужны ясные договорённости</li><li>• Когда коммерческие документы нужно проверить заранее</li><li>• Когда иностранному предпринимателю важно уменьшить структурные ошибки на старте</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Что может включать эта услуга</h2><div className="mt-6 grid gap-3">{['Открытие и структура компании','Договорённости между партнёрами','Проверка коммерческих договоров','Ранняя юридическая ясность до роста риска'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Полезный первый шаг</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">В первом сообщении лучше кратко объяснить, какой тип бизнеса или структуры планируется, есть ли уже черновики документов и какой срок наиболее важен.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Начать консультацию по бизнесу</a></div>
    </main>
  );
}
