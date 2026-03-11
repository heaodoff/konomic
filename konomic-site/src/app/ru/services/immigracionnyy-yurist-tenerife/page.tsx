import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Иммиграционный юрист на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе по вопросам резиденции, иммиграции, документов, локальных регистраций и переезда в Испанию.',
  alternates: { canonical: '/ru/services/immigracionnyy-yurist-tenerife' },
};

const bullets = [
  'Ориентация по вариантам резиденции и документам',
  'Помощь с NIE, TIE и локальными регистрациями',
  'Поддержка по family reunification и релокации',
  'Подготовка ещё до приезда на Тенерифе',
];

export default function RuImmigrationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Иммиграция и резиденция"
        title="Юридическая поддержка на Тенерифе по резиденции, документам и переезду"
        text="Эта страница нужна клиентам, которым нужен понятный старт в вопросах переезда и легализации на Тенерифе. Ошибки здесь обычно начинаются не в офисе миграции, а раньше — когда непонятно, какие документы нужны, в каком порядке действовать и что подготовить заранее."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">С чем должна помогать эта услуга</h2>
          <div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">Типовые кейсы</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
            <li>• Переезд на Тенерифе одному или с семьёй</li>
            <li>• Понимание пути к резиденции и пакета документов</li>
            <li>• Подготовка до приезда в Испанию</li>
            <li>• Поддержка на локальных шагах после переезда</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
