import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs } from '@/content/site';

export const metadata: Metadata = {
  title: 'English-Speaking Legal Services in Tenerife',
  description:
    'Multilingual legal support in Tenerife for foreign clients dealing with property, residency, business, and contract matters.',
  alternates: {
    canonical: '/en',
  },
  openGraph: {
    title: 'English-Speaking Legal Services in Tenerife',
    description:
      'Multilingual legal support in Tenerife for foreign clients dealing with property, residency, business, and contract matters.',
    url: '/en',
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const serviceHighlights = [
  {
    title: 'Property & Real Estate Legal Support',
    eyebrow: 'For buyers, investors, and owners',
    text: 'Legal review before reservation contracts, purchase agreements, payments, and property decisions in Tenerife.',
    bullets: ['Due diligence before purchase', 'Contract review before signing', 'Title, debt, and licence checks'],
    href: '/en/services#property-real-estate-lawyer-tenerife',
  },
  {
    title: 'Immigration, Residency & Relocation Support',
    eyebrow: 'For people moving to Tenerife',
    text: 'Support for residency pathways, local documentation, and legal preparation before or after arrival.',
    bullets: ['Residency and relocation guidance', 'NIE / TIE and registrations', 'Remote-first start where relevant'],
    href: '/en/services#residency-immigration-lawyer-tenerife',
  },
  {
    title: 'Business Setup & Corporate Legal Support',
    eyebrow: 'For founders and operators',
    text: 'Legal support for foreign founders, company structure, commercial documents, and starting business activity in Spain.',
    bullets: ['Company setup support', 'Shareholder and partner arrangements', 'Commercial contracts and structure'],
    href: '/en/services#business-corporate-lawyer-tenerife',
  },
  {
    title: 'Contract Review & Legal Documents',
    eyebrow: 'For clients who need clarity before signing',
    text: 'Review of contracts and legal documents before money, obligations, or risk are locked in.',
    bullets: ['Property and rental contracts', 'Commercial and service agreements', 'Bilingual document review'],
    href: '/en/services#contract-review-document-drafting',
  },
];

const clientSituations = [
  'Buying property in Tenerife and wanting legal review before paying a deposit',
  'Relocating to Spain and needing clarity on residency or documentation',
  'Setting up a business structure as a foreign founder or operator',
  'Reviewing a contract before signing or transferring money',
  'Sending documents from abroad before arriving in Tenerife',
  'Trying to understand the right legal next step instead of guessing',
];

const processSteps = [
  'Send the first message on WhatsApp with a short summary of the matter.',
  'Share any relevant documents, timeline, and whether anything has already been signed.',
  'The matter is reviewed and routed to the right consultation or legal review format.',
  'Next steps are defined clearly, including what to prepare and how the matter can proceed.',
];

const trustPoints = [
  'Focused on foreign clients in Tenerife',
  'Useful before signing, relocating, or investing',
  'Documents can be shared in advance',
  'WhatsApp-first intake with multilingual communication',
];

const marketPoints = [
  'A clearer first step than the typical generic law-firm website',
  'Structured around property, relocation, business, and contracts',
  'Designed for foreign clients who often start the process remotely',
  'Built to feel practical, modern, and easy to trust',
];

export default function EnHomePage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]"
          aria-hidden="true"
        />
        <div className="flex flex-col justify-center">
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            English-speaking legal support in Tenerife
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">
            Multilingual legal support in Tenerife for foreign clients.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">
            Support for property, residency, business, and contract matters — with a clear first step for clients who need legal clarity before signing, relocating, investing, or structuring activity in Spain.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta-channel="whatsapp"
              data-cta-location="homepage-hero"
              data-cta-locale="en"
              className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528] sm:px-6"
            >
              Start on WhatsApp
            </a>
            <Link
              href="/en/services"
              className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6"
            >
              View services
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6">
            <span>Primary: WhatsApp</span>
            <span>•</span>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">
              Telegram
            </a>
            <span>•</span>
            <a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">
              Email
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {trustPoints.map((item) => (
              <div key={item} className="ui-card px-5 py-5 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">
                Why clients contact early
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Legal review matters most before documents are signed and money is committed.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">
                Many foreign clients need help before purchase contracts, before relocation paperwork, before company setup, or before agreeing to legal terms they do not fully trust yet.
              </p>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {[
                  'Review before reservation or purchase contracts',
                  'Clarity before relocation and residency steps',
                  'Support before starting or structuring business activity',
                  'Document review before obligations become expensive',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">
              First message guidance
            </div>
            <p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">
              The fastest start is a short WhatsApp message with your issue, timeline, language, and any document that already exists.
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-tint">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Who Konomic helps</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Built around the legal situations foreign clients most often face in Tenerife.
            </h2>
            <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
              {[
                'Foreign property buyers',
                'People relocating to Tenerife',
                'Founders and business owners',
                'Families dealing with cross-border legal questions',
              ].map((item) => (
                <div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">How the process starts</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Clear next steps from the first message.
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[#59646e] md:mt-6 md:space-y-4 md:text-base">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-cream">
        <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Core services</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
              The legal matters clients most often need help with first.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            The main service pillars focus on the situations where foreign clients usually need legal clarity before the risk grows.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="ui-card p-6 sm:p-7 md:p-9">
              <div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.text}</p>
              <div className="mt-4 grid gap-2.5">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">
                    {bullet}
                  </div>
                ))}
              </div>
              <Link href={service.href} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">
                View service details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">Typical situations</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              The site should feel useful before a legal problem becomes more expensive.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clientSituations.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/88">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-cool">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">FAQ</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
            Questions clients often ask before reaching out.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-5">
          {faqs.map((item) => (
            <div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">
              <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
