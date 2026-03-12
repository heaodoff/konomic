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
const topServices = coreServices.slice(0, 4);

export default function EnHomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-[#cdb79d] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#8f6e50]">
            English version · premium legal support in Tenerife
          </div>
          <h1 className="max-w-4xl text-5xl leading-tight font-semibold tracking-tight md:text-7xl">
            Legal support in Tenerife for foreign clients, property matters, and business decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5a64] md:text-xl">
            Konomic is presented as a premium multilingual legal brand for expats, property buyers, founders,
            and families who need clear guidance, fast orientation, and a more reliable way to handle legal matters in Tenerife.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#1d252b] px-6 py-3 text-sm font-medium text-white hover:bg-[#11171b]">
              Start on WhatsApp
            </a>
            <Link href="/en/contact" className="ui-button ui-button-secondary rounded-full border border-[#1d252b]/15 bg-white/80 px-6 py-3 text-sm font-medium text-[#1d252b] hover:border-[#1d252b]/35">
              View contact options
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Stat value="WhatsApp-first" label="primary lead channel" />
            <Stat value="EN / DE / RU / UK" label="multilingual coverage" />
            <Stat value="Property / Residency" label="core commercial intent" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="ui-card-dark p-8 text-white md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#d5bd9e]">Why Konomic</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Built for Tenerife’s international legal demand.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              The goal is not to look like another generic local firm. The goal is to feel clear, premium,
              multilingual, and easy to hire for foreign clients who want confidence before they commit.
            </p>
            <div className="mt-6 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="ui-card-soft rounded-[2rem] px-8 py-7 md:px-10">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Direct access</div>
            <p className="mt-3 text-base leading-8 text-[#4f5a64]">
              WhatsApp is the fastest path for a new enquiry. Email and Telegram stay available for longer context and document exchange.
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section border-t border-black/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Core services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">The services most worth leading with</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            These four services give Konomic the best mix of local SEO opportunity, commercial intent, and trust-building value.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topServices.map((service) => (
            <article key={service.slug} className="ui-card p-8 md:p-9">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8f7d67]">{service.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.summary}</p>
              <Link href={`/en/services#${service.slug}`} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#1d252b]">
                View service details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#1e252b] py-18 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#d5bd9e]">Market angle</div>
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
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section border-t border-black/5">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Questions the site should answer before a client hesitates</h2>
        </div>
        <div className="mt-10 grid gap-5">
          {faqs.map((item) => (
            <div key={item.q} className="ui-card px-6 py-6 md:px-7 md:py-7">
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
    <div className="ui-card px-5 py-5 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(24,31,38,0.07)]">
      <div className="text-2xl font-semibold tracking-tight text-[#1d252b]">{value}</div>
      <div className="mt-1 text-sm text-[#59646e]">{label}</div>
    </div>
  );
}
