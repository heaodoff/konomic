import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Проверка договоров на Тенерифе',
  description:
    'Юридическая поддержка на Тенерифе для проверки договоров, документов и контроля рисков до подписания или оплаты.',
  alternates: { canonical: '/ru/services/proverka-dogovorov-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function RuContractsPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Договоры и документы"
        title="Проверка договоров на Тенерифе до подписания, оплаты или обязательств"
        text="Эта страница для клиентов, которые не хотят подписывать документ, не понимая его юридических и финансовых последствий."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Типовые ситуации</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• До подписания договора по недвижимости, аренде, услугам или бизнесу</li><li>• Когда документ на другом языке и требует более ясной проверки</li><li>• Когда не до конца понятны юридические или финансовые последствия</li><li>• Когда безопаснее сначала проверить, а потом уже соглашаться</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">С чем помогает такая проверка</h2><div className="mt-6 grid gap-3">{['Договоры купли-продажи и аренды','Коммерческие и сервисные договоры','Проверка двуязычных документов','Раннее прояснение обязательств и рисков'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Что лучше прислать первым</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Обычно самый полезный первый шаг — короткое сообщение в WhatsApp плюс проект договора или документа с пояснением, что именно вас больше всего беспокоит и когда ожидается подписание.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Начать проверку договора</a></div>
    </main>
  );
}
