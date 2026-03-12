import type { Metadata } from 'next';
import Link from 'next/link';
import { coreServices } from '@/content/site';
import { localeContent } from '@/content/i18n';
import { localizeFaqs, localizeTrustPoints } from '@/content/site-locale';

export const metadata: Metadata = {
  title: 'Asistencia jurídica en Tenerife en español',
  description: 'Asistencia jurídica premium y multilingüe en Tenerife para inmuebles, residencia, negocios y contratos.',
  alternates: {
    canonical: '/es',
    languages: { en: '/en', de: '/de', ru: '/ru', uk: '/uk', es: '/es', 'x-default': '/en' },
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';
const audiences = [
  'Compradores extranjeros de inmuebles',
  'Personas que se trasladan a Tenerife',
  'Emprendedores y empresarios',
  'Familias que necesitan claridad legal',
];
const processSteps = [
  'Empieza por WhatsApp o envía una consulta estructurada',
  'El asunto se dirige al tipo de consulta adecuado',
  'Solo se piden documentos cuando realmente hacen falta',
  'El caso pasa a consulta de pago o acompañamiento continuo',
];

export default function EsHomePage() {
  const copy = localeContent.es;
  const trustPoints = localizeTrustPoints('es');
  const faqs = localizeFaqs('es');
  const topServices = coreServices.slice(0, 4);
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]" aria-hidden="true" />
        <div className="flex flex-col justify-center">
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">{copy.home.badge}</div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">{copy.home.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">{copy.home.text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium hover:bg-[#0d1528] sm:px-6">{copy.home.primaryCta}</a>
            <Link href="/es/contact" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6">{copy.home.secondaryCta}</Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6">
            <span>Principal: WhatsApp</span>
            <span>•</span>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram</a>
            <span>•</span>
            <a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">Email</a>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6"><div className="ui-card-dark p-6 text-white sm:p-8 md:p-10"><div className="relative z-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">Por qué Konomic</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{copy.home.whyTitle}</h2><p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">{copy.home.whyText}</p><div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">{trustPoints.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">{item}</div>)}</div></div></div><div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">Ruta de contacto</div><p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">Empieza por WhatsApp para la respuesta más rápida. Usa Telegram para coordinación breve y email cuando haya documentos o más contexto.</p></div></div>
      </section>
      <section className="ui-section ui-section-tint">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">A quién ayudamos</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Diseñado para los perfiles que realmente generan demanda</h2>
            <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
              {audiences.map((item) => (
                <div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">{item}</div>
              ))}
            </div>
          </div>
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Cómo funciona</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Proceso claro desde el primer mensaje hasta el soporte de pago</h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[#59646e] md:mt-6 md:space-y-4 md:text-base">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-xs font-semibold text-white">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="ui-section ui-section-cream"><div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">{copy.home.coreServicesEyebrow}</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{copy.home.coreServicesTitle}</h2></div><p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">{copy.home.coreServicesText}</p></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">{topServices.map((service) => <article key={service.slug} className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.summary}</p><Link href="/es/services" className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">Ver servicios →</Link></article>)}</div></section>
      <section className="relative overflow-hidden border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" aria-hidden="true" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10"><div><div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">{copy.home.marketEyebrow}</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{copy.home.marketTitle}</h2></div></div></section>
      <section className="ui-section ui-section-cool"><div className="max-w-3xl"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">{copy.home.faqEyebrow}</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{copy.home.faqTitle}</h2></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-5">{faqs.map((item) => <div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7"><h3 className="text-lg font-semibold tracking-tight">{item.q}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p></div>)}</div></section>
    </main>
  );
}
