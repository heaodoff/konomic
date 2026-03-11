import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Русскоязычные страницы услуг по недвижимости, резиденции, бизнесу и договорам на Тенерифе.',
  alternates: { canonical: '/ru/services' },
};

const pages = [
  {
    href: '/ru/services/yurist-po-nedvizhimosti-tenerife',
    title: 'Юрист по недвижимости на Тенерифе',
    text: 'Для покупки недвижимости, due diligence, проверки договоров и снижения рисков до депозита или сделки.',
  },
  {
    href: '/ru/services/immigracionnyy-yurist-tenerife',
    title: 'Иммиграционный юрист на Тенерифе',
    text: 'Для резиденции, документов, локальных регистраций и переезда на Тенерифе или в Испанию.',
  },
  {
    href: '/ru/services/biznes-yurist-tenerife',
    title: 'Бизнес-юрист на Тенерифе',
    text: 'Для открытия компании, структуры бизнеса, коммерческих договоров и постоянного сопровождения.',
  },
  {
    href: '/ru/services/proverka-dogovorov-tenerife',
    title: 'Проверка договоров на Тенерифе',
    text: 'Для проверки договоров, правок условий и контроля рисков до подписания или оплаты.',
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Услуги"
        title="Русскоязычные страницы услуг под основной спрос"
        text="Здесь собраны ключевые направления для русскоязычных клиентов на Тенерифе. Каждая страница выступает как отдельная SEO-точка входа и точка заявки."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <article key={page.href} className="rounded-[1.75rem] border border-black/5 bg-white/90 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
            <h2 className="text-2xl font-semibold tracking-tight">{page.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{page.text}</p>
            <Link href={page.href} className="mt-5 inline-flex text-sm font-medium text-[#1d252b]">Открыть страницу →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
