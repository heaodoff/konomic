import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Юридична консультація на Тенерифе',
  description:
    'Оберіть відповідний формат консультації щодо нерухомості, резиденції, бізнесу або перевірки документів на Тенерифе.',
  alternates: { canonical: '/uk/book-consultation' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const offers = [
  ['Швидкий юридичний розбір', 'Найкраще підходить для документів, договорів і ранньої перевірки ризиків до підпису чи оплати.'],
  ['Перевірка купівлі нерухомості', 'Корисно для покупців до reserva, депозиту чи проблем із due diligence.'],
  ['Стартова консультація щодо переїзду', 'Підходить для резиденції, документів і планування переїзду на Тенерифе.'],
  ['Консультація щодо структури бізнесу', 'Для засновників і власників, які відкривають або структурують діяльність в Іспанії.'],
];

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Консультація" title="Оберіть відповідну консультацію і потім перенесіть розмову в WhatsApp" text="Konomic Digital SL. використовує WhatsApp-first intake. Це робить перший крок швидшим, прямішим і зрозумілішим для міжнародних клієнтів, яким потрібна юридична ясність без зайвого очікування." />
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Почати у WhatsApp</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Відкрити Telegram</a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offers.map(([title, text]) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8f7d67]">Формат консультації</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d] px-5 py-2 text-sm font-medium text-[#14213d] hover:bg-[#14213d] hover:text-white">Почати у WhatsApp</a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-2 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Telegram</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
