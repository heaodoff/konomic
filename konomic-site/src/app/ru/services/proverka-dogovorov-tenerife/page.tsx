import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Проверка договоров на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе для проверки договоров, подготовки документов и контроля рисков до подписания или оплаты.',
  alternates: { canonical: '/ru/services/proverka-dogovorov-tenerife' },
};

const bullets = [
  'Проверка договоров купли-продажи, аренды и услуг',
  'Выявление рисков до подписания или оплаты',
  'Помощь с формулировками и правками условий',
  'Больше ясности для иностранного клиента до обязательств',
];

export default function RuContractsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Договоры и документы"
        title="Проверка договоров на Тенерифе до подписания, депозита или обязательств"
        text="Эта страница нужна клиентам, которые не хотят подписывать договор вслепую, не понимая юридических последствий. В недвижимости, бизнесе и сервисных соглашениях проблемы часто начинаются там, где документ приняли слишком быстро."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h2 className="text-2xl font-semibold tracking-tight">С чем должна помогать эта услуга</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><h2 className="text-2xl font-semibold tracking-tight">Типовые кейсы</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base"><li>• Договор по недвижимости или reserva contract</li><li>• Договор аренды или пользования</li><li>• Коммерческий договор с клиентом или подрядчиком</li><li>• Проверка перед оплатой или долгим обязательством</li></ul></div>
      </div>
    </main>
  );
}
