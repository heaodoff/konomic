import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Перевірка договорів на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе для перевірки договорів, підготовки документів і контролю ризиків до підписання або оплати.',
  alternates: { canonical: '/uk/services/perevirka-dohovoriv-tenerife' },
};

const bullets = [
  'Перевірка договорів купівлі-продажу, оренди та послуг',
  'Виявлення ризиків до підписання або оплати',
  'Допомога з формулюваннями та правками умов',
  'Більше ясності для іноземного клієнта до зобов’язань',
];

export default function UkContractsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Договори та документи"
        title="Перевірка договорів на Тенерифе до підписання, депозиту чи зобов’язань"
        text="Ця сторінка потрібна клієнтам, які не хочуть підписувати договір навмання, не розуміючи юридичних наслідків. У нерухомості, бізнесі та сервісних угодах проблеми часто починаються там, де документ прийняли занадто швидко."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h2 className="text-2xl font-semibold tracking-tight">З чим має допомагати ця послуга</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><h2 className="text-2xl font-semibold tracking-tight">Типові кейси</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base"><li>• Договір щодо нерухомості або reserva contract</li><li>• Договір оренди чи користування</li><li>• Комерційний договір з клієнтом або підрядником</li><li>• Перевірка перед оплатою або довгим зобов’язанням</li></ul></div>
      </div>
    </main>
  );
}
