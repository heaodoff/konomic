import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Бізнес-юрист на Тенерифе',
  description:
    'Юридична підтримка на Тенерифе для відкриття компанії, структурування бізнесу, договорів і супроводу іноземних підприємців.',
  alternates: { canonical: '/uk/services/biznes-yuryst-tenerife' },
};

const bullets = [
  'Підтримка при відкритті та структуруванні бізнесу в Іспанії',
  'Допомога з питаннями партнерів, часток і домовленостей',
  'Перевірка комерційних договорів і юридичних ризиків',
  'Супровід іноземних підприємців у робочому режимі',
];

export default function UkBusinessPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Бізнес і корпоративний супровід"
        title="Юридична підтримка на Тенерифе для бізнесу, підприємців і міжнародних проєктів"
        text="Ця сторінка потрібна клієнтам, які хочуть відкрити, структурувати або безпечніше вести бізнес на Тенерифе та в Іспанії. Для іноземних підприємців ризик часто виникає на стику структури компанії, договорів і місцевої практики."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h2 className="text-2xl font-semibold tracking-tight">З чим має допомагати ця послуга</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><h2 className="text-2xl font-semibold tracking-tight">Типові кейси</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base"><li>• Відкриття компанії в Іспанії або на Тенерифе</li><li>• Структура між партнерами та розподіл ролей</li><li>• Договори з підрядниками та клієнтами</li><li>• Постійна юридична підтримка міжнародного бізнесу</li></ul></div>
      </div>
    </main>
  );
}
