import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Послуги',
  description: 'Україномовні сторінки послуг щодо нерухомості, резиденції, бізнесу та договорів на Тенерифе.',
  alternates: { canonical: '/uk/services' },
};

const pages = [
  {
    href: '/uk/services/advokat-z-nerukhomosti-tenerife',
    title: 'Адвокат з нерухомості на Тенерифе',
    text: 'Для купівлі нерухомості, due diligence, перевірки договорів і зниження ризиків до депозиту або угоди.',
  },
  {
    href: '/uk/services/immihratsiynyy-yuryst-tenerife',
    title: 'Імміграційний юрист на Тенерифе',
    text: 'Для резиденції, документів, локальних реєстрацій і переїзду на Тенерифе або до Іспанії.',
  },
  {
    href: '/uk/services/biznes-yuryst-tenerife',
    title: 'Бізнес-юрист на Тенерифе',
    text: 'Для відкриття компанії, структурування бізнесу, комерційних договорів і постійного супроводу.',
  },
  {
    href: '/uk/services/perevirka-dohovoriv-tenerife',
    title: 'Перевірка договорів на Тенерифе',
    text: 'Для перевірки договорів, правок умов і контролю ризиків до підписання або оплати.',
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Послуги"
        title="Україномовні сторінки послуг під основний попит"
        text="Тут зібрані ключові напрями для україномовних клієнтів на Тенерифе. Кожна сторінка працює як окрема SEO-точка входу і точка заявки."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <article key={page.href} className="rounded-[1.75rem] border border-black/5 bg-white/90 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
            <h2 className="text-2xl font-semibold tracking-tight">{page.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{page.text}</p>
            <Link href={page.href} className="mt-5 inline-flex text-sm font-medium text-[#1d252b]">Відкрити сторінку →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
