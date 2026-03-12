import type { Metadata } from 'next';
import Link from 'next/link';
import { coreServices } from '@/content/site';
import { localeContent } from '@/content/i18n';
import { localizeFaqs, localizeTrustPoints } from '@/content/site-locale';

export const metadata: Metadata = {
  title: 'Українська юридична підтримка на Тенерифе',
  description: 'Преміальна юридична підтримка на Тенерифе з питань нерухомості, резиденції, бізнесу та договорів.',
  alternates: {
    canonical: '/uk',
    languages: {
      en: '/en',
      de: '/de',
      ru: '/ru',
      uk: '/uk',
      'x-default': '/en',
    },
  },
};

export default function UkHomePage() {
  const copy = localeContent.uk;
  const trustPoints = localizeTrustPoints('uk');
  const faqs = localizeFaqs('uk');
  const topServices = coreServices.slice(0, 4);
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-[#cdb79d] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#8f6e50]">{copy.home.badge}</div>
          <h1 className="max-w-4xl text-5xl leading-tight font-semibold tracking-tight md:text-7xl">{copy.home.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5a64] md:text-xl">{copy.home.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/uk/book-consultation" className="rounded-full bg-[#1d252b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#11171b]">{copy.home.primaryCta}</Link>
            <Link href="/uk/contact" className="rounded-full border border-[#1d252b]/15 bg-white/80 px-6 py-3 text-sm font-medium text-[#1d252b] transition hover:border-[#1d252b]/35">{copy.home.secondaryCta}</Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><div className="text-xs uppercase tracking-[0.28em] text-[#d5bd9e]">Чому Konomic</div><h2 className="mt-4 text-3xl font-semibold tracking-tight">{copy.home.whyTitle}</h2><p className="mt-4 text-sm leading-7 text-white/75">{copy.home.whyText}</p><div className="mt-6 space-y-4">{trustPoints.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">{item}</div>)}</div></div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{copy.home.coreServicesEyebrow}</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{copy.home.coreServicesTitle}</h2></div><p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">{copy.home.coreServicesText}</p></div><div className="mt-10 grid gap-6 md:grid-cols-2">{topServices.map((service) => <article key={service.slug} className="rounded-[1.75rem] border border-black/5 bg-white/85 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><div className="text-xs uppercase tracking-[0.25em] text-[#8f7d67]">{service.eyebrow}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.summary}</p><Link href="/uk/services" className="mt-5 inline-flex text-sm font-medium text-[#1d252b]">До послуг →</Link></article>)}</div></section>
      <section className="bg-[#1e252b] py-16 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10"><div><div className="text-xs uppercase tracking-[0.3em] text-[#d5bd9e]">{copy.home.marketEyebrow}</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{copy.home.marketTitle}</h2></div></div></section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10"><div className="max-w-3xl"><div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{copy.home.faqEyebrow}</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{copy.home.faqTitle}</h2></div><div className="mt-10 grid gap-5">{faqs.map((item) => <div key={item.q} className="rounded-[1.5rem] border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h3 className="text-lg font-semibold tracking-tight">{item.q}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p></div>)}</div></section>
    </main>
  );
}
