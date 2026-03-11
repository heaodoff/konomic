import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Адвокат з нерухомості на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе для купівлі нерухомості, due diligence, перевірки договорів і зниження ризиків для іноземних покупців.',
  alternates: { canonical: '/uk/services/advokat-z-nerukhomosti-tenerife' },
};

const bullets = [
  'Перевірка об’єкта до купівлі та до внесення депозиту',
  'Перевірка права власності, боргів і обтяжень',
  'Перевірка документів, ліцензій і прихованих ризиків',
  'Супровід покупців, продавців та інвесторів',
];

export default function UkPropertyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Нерухомість"
        title="Адвокат з нерухомості на Тенерифе для іноземних покупців та інвесторів"
        text="Ця сторінка потрібна клієнтам, яким важливо зрозуміти ризики ще до того, як вони внесуть депозит, підпишуть договір або зайдуть у саму угоду. На Тенерифе проблема часто не в ціні об’єкта, а в тому, що не було перевірено заздалегідь."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">З чим має допомагати ця послуга</h2>
          <div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">Типові кейси</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
            <li>• Купівля квартири, будинку або вілли на Тенерифе</li>
            <li>• Перевірка перед депозитом або reserva contract</li>
            <li>• Підтримка іноземних інвесторів</li>
            <li>• Проблеми з ліцензіями, боргами чи документами</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
