import type { Metadata } from 'next';
import Link from 'next/link';
import { coreServices } from '@/content/site';
import { localeContent } from '@/content/i18n';
import { localizeFaqs, localizeTrustPoints } from '@/content/site-locale';

export const metadata: Metadata = {
  title: 'Русскоязычная юридическая поддержка на Тенерифе',
  description: 'Премиальная юридическая поддержка на Тенерифе по недвижимости, резиденции, бизнесу и договорам.',
  alternates: {
    canonical: '/ru',
    languages: {
      en: '/en',
      de: '/de',
      ru: '/ru',
      uk: '/uk',
      'x-default': '/en',
    },
  },
};

const heroChips = [
  'для иностранцев',
  'сделки с недвижимостью',
  'помощь с переездом',
  'деловые вопросы',
];

export default function RuHomePage() {
  const copy = localeContent.ru;
  const trustPoints = localizeTrustPoints('ru');
  const faqs = localizeFaqs('ru');
  const topServices = coreServices.slice(0, 4);
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-6xl">
            Юридическая поддержка на Тенерифе
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#4f5a64] sm:text-lg md:text-xl md:leading-8">
            Для иностранцев, покупателей недвижимости, предпринимателей и семей, которым нужна ясная и надёжная правовая поддержка на Тенерифе.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
            {heroChips.map((item) => (
              <div key={item} className="ui-card-soft rounded-full px-3 py-1.5 text-xs leading-5 text-[#33404a] sm:px-4 sm:py-2 sm:text-sm">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/ru/book-consultation" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium hover:bg-[#0d1528] sm:px-6">
              {copy.home.primaryCta}
            </Link>
            <Link href="/ru/contact" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6">
              {copy.home.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6"><div className="ui-card-dark p-6 text-white sm:p-8 md:p-10"><div className="relative z-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">Почему Konomic</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{copy.home.whyTitle}</h2><p className="mt-3 text-sm leading-6 text-white/75 sm:mt-4 sm:leading-7">{copy.home.whyText}</p><div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">{trustPoints.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">{item}</div>)}</div></div></div><div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#8f7d67] sm:text-xs sm:tracking-[0.3em]">Быстрый контакт</div><p className="mt-3 text-sm leading-7 text-[#4f5a64] sm:text-base sm:leading-8">WhatsApp — самый быстрый вход. Email и Telegram остаются для длинного контекста и документов.</p></div></div>
      </section>
      <section className="ui-section border-t border-black/5"><div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{copy.home.coreServicesEyebrow}</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{copy.home.coreServicesTitle}</h2></div><p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">{copy.home.coreServicesText}</p></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">{topServices.map((service) => <article key={service.slug} className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.25em] text-[#8f7d67]">{service.eyebrow}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.summary}</p><Link href="/ru/services" className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#1d252b]">К услугам →</Link></article>)}</div></section>
      <section className="border-t border-black/5 bg-[#1e252b] py-18 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10"><div><div className="text-xs uppercase tracking-[0.3em] text-[#d5bd9e]">{copy.home.marketEyebrow}</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{copy.home.marketTitle}</h2></div></div></section>
      <section className="ui-section border-t border-black/5"><div className="max-w-3xl"><div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{copy.home.faqEyebrow}</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{copy.home.faqTitle}</h2></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-5">{faqs.map((item) => <div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7"><h3 className="text-lg font-semibold tracking-tight">{item.q}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p></div>)}</div></section>
    </main>
  );
}
