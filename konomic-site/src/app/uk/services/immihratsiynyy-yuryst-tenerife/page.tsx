import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Імміграційний юрист на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе з питань резиденції, імміграції, документів, локальних реєстрацій і переїзду до Іспанії.',
  alternates: { canonical: '/uk/services/immihratsiynyy-yuryst-tenerife' },
};

const bullets = [
  'Орієнтація щодо варіантів резиденції та документів',
  'Допомога з NIE, TIE і локальними реєстраціями',
  'Підтримка щодо family reunification і релокації',
  'Підготовка ще до приїзду на Тенерифе',
];

export default function UkImmigrationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Імміграція та резиденція"
        title="Юридична підтримка на Тенерифе щодо резиденції, документів і переїзду"
        text="Ця сторінка потрібна клієнтам, яким потрібен зрозумілий старт у питаннях переїзду та легалізації на Тенерифе. Помилки тут зазвичай починаються не в міграційному офісі, а раніше — коли незрозуміло, які документи потрібні, у якому порядку діяти та що варто підготувати заздалегідь."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">З чим має допомагати ця послуга</h2>
          <div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">Типові кейси</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
            <li>• Переїзд на Тенерифе самостійно або з сім’єю</li>
            <li>• Розуміння шляху до резиденції та пакета документів</li>
            <li>• Підготовка до приїзду в Іспанію</li>
            <li>• Підтримка на локальних кроках після переїзду</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
