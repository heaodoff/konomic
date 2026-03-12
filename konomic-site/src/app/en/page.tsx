import type { Metadata } from 'next';
import Link from 'next/link';
import { coreServices, faqs, trustPoints } from '@/content/site';

export const metadata: Metadata = {
  title: 'English-Speaking Legal Services in Tenerife',
  description:
    'Premium multilingual legal support in Tenerife for foreign clients, with services for property, residency, business, and contracts.',
  alternates: {
    canonical: '/en',
  },
  openGraph: {
    title: 'English-Speaking Legal Services in Tenerife',
    description:
      'Premium multilingual legal support in Tenerife for foreign clients, with services for property, residency, business, and contracts.',
    url: '/en',
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';
const topServices = coreServices.slice(0, 4);

const audiences = [
  'Foreign property buyers',
  'Expats relocating to Tenerife',
  'Founders and business owners',
  'Families needing legal clarity',
];

const processSteps = [
  'Start on WhatsApp or send a structured enquiry',
  'The matter is reviewed and routed to the right consultation',
  'Documents are requested only where relevant',
  'The case moves into paid consultation or ongoing support',
];

export default function EnHomePage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]" aria-hidden="true" />
        <div className="flex flex-col justify-center">
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            English version · premium legal support in Tenerife
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">
            Legal support in Tenerife for foreign clients, property matters, and business decisions.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">
            Konomic is presented as a premium multilingual legal brand for expats, property buyers, founders,
            and families who need clear guidance, fast orientation, and a more reliable way to handle legal matters in Tenerife.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528] sm:px-6">
              Start on WhatsApp
            </a>
            <Link href="/en/contact" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6">
              View contact options
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6">
            <span>Primary: WhatsApp</span>
            <span>•</span>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram</a>
            <span>•</span>
            <a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">Email</a>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            <Stat value="WhatsApp-first" label="primary lead channel" />
            <Stat value="EN / DE / RU / UK / ES" label="multilingual coverage" />
            <Stat value="Property / Residency" label="core commercial intent" />
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">Why Konomic</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Built for Tenerife’s international legal demand.</h2>
              <p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">
                The goal is not to look like another generic local firm. The goal is to feel clear, premium,
                multilingual, and easy to hire for foreign clients who want confidence before they commit.
              </p>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {trustPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">Lead routing</div>
            <p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">
              Start on WhatsApp for the fastest reply. Use Telegram for quick written coordination. Use email when documents or longer explanations are needed.
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-tint">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Who we help</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Designed for the client types that actually drive demand</h2>
            <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
              {audiences.map((item) => (
                <div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">{item}</div>
              ))}
            </div>
          </div>
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">How it works</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Clear process from first message to paid support</h2>
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

      <section className="ui-section ui-section-cream">
        <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Core services</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">The services most worth leading with</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            These four services give Konomic the best mix of local SEO opportunity, commercial intent, and trust-building value.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">
          {topServices.map((service) => (
            <article key={service.slug} className="ui-card p-6 sm:p-7 md:p-9">
              <div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.summary}</p>
              <Link href={`/en/services#${service.slug}`} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">
                View service details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">Market angle</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Most competitors are broad, dated, or vague. Konomic should feel sharper and easier to trust.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Separate language folders for SEO',
              'Service-led architecture instead of generic brochure copy',
              'WhatsApp-first intake for faster conversion',
              'Sharper design that feels private, premium, and trustworthy',
            ].map((item) => (
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
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">Questions the site should answer before a client hesitates</h2>
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="ui-card px-5 py-5 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,33,61,0.10)]">
      <div className="text-2xl font-semibold tracking-tight text-[#14213d]">{value}</div>
      <div className="mt-1 text-sm text-[#59646e]">{label}</div>
    </div>
  );
}
