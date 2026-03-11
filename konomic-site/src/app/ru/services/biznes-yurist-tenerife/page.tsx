import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Бизнес-юрист на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе для открытия компании, структурирования бизнеса, договоров и сопровождения иностранных предпринимателей.',
  alternates: { canonical: '/ru/services/biznes-yurist-tenerife' },
};

const bullets = [
  'Поддержка при открытии и структурировании бизнеса в Испании',
  'Помощь по вопросам партнёров, долей и договорённостей',
  'Проверка коммерческих договоров и юридических рисков',
  'Сопровождение иностранных предпринимателей в рабочем режиме',
];

export default function RuBusinessPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Бизнес и корпоративное сопровождение"
        title="Юридическая поддержка на Тенерифе для бизнеса, предпринимателей и международных проектов"
        text="Эта страница нужна клиентам, которые хотят открыть, структурировать или безопасно вести бизнес на Тенерифе и в Испании. Для иностранных предпринимателей риск часто возникает на стыке структуры компании, договоров и локальной практики."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h2 className="text-2xl font-semibold tracking-tight">С чем должна помогать эта услуга</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><h2 className="text-2xl font-semibold tracking-tight">Типовые кейсы</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base"><li>• Открытие компании в Испании или на Тенерифе</li><li>• Структура между партнёрами и распределение ролей</li><li>• Договоры с подрядчиками и клиентами</li><li>• Постоянная юридическая поддержка международного бизнеса</li></ul></div>
      </div>
    </main>
  );
}
