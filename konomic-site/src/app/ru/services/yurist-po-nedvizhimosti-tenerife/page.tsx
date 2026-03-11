import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Юрист по недвижимости на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе для покупки недвижимости, due diligence, проверки договоров и снижения рисков для иностранных покупателей.',
  alternates: { canonical: '/ru/services/yurist-po-nedvizhimosti-tenerife' },
};

const bullets = [
  'Проверка объекта до покупки и до внесения депозита',
  'Проверка права собственности, долгов и обременений',
  'Проверка документов, лицензий и скрытых рисков',
  'Сопровождение покупателей, продавцов и инвесторов',
];

export default function RuPropertyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Недвижимость"
        title="Юрист по недвижимости на Тенерифе для иностранных покупателей и инвесторов"
        text="Эта страница нужна клиентам, которым важно понять риски до того, как они заплатят депозит, подпишут договор или войдут в сделку. На Тенерифе проблема часто не в цене объекта, а в том, что не было проверено заранее."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">С чем должна помогать эта услуга</h2>
          <div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">Типовые кейсы</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
            <li>• Покупка квартиры, дома или виллы на Тенерифе</li>
            <li>• Проверка перед депозитом или reserva contract</li>
            <li>• Поддержка иностранных инвесторов</li>
            <li>• Проблемы с лицензиями, долгами или документами</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
