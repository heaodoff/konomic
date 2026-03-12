import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Юридическая консультация на Тенерифе',
  description:
    'Выберите подходящий формат консультации по недвижимости, резиденции, бизнесу или проверке документов на Тенерифе.',
  alternates: { canonical: '/ru/book-consultation' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const offers = [
  ['Быстрая юридическая проверка', 'Лучше всего подходит для документов, договоров и ранней проверки рисков до подписи или оплаты.'],
  ['Проверка покупки недвижимости', 'Полезно для покупателей до reserva, депозита или проблем с due diligence.'],
  ['Стартовая консультация по переезду', 'Подходит для резиденции, документов и планирования переезда на Тенерифе.'],
  ['Консультация по структуре бизнеса', 'Для основателей и владельцев, которые открывают или структурируют деятельность в Испании.'],
];

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Консультация" title="Выберите подходящую консультацию и затем перенесите разговор в WhatsApp" text="Konomic Digital SL. использует WhatsApp-first intake. Это делает первый шаг быстрее, прямее и понятнее для иностранных клиентов, которым нужна юридическая ясность без лишнего ожидания." />
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Написать в WhatsApp</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Открыть Telegram</a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offers.map(([title, text]) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8f7d67]">Формат консультации</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d] px-5 py-2 text-sm font-medium text-[#14213d] hover:bg-[#14213d] hover:text-white">Начать в WhatsApp</a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-2 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Telegram</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
