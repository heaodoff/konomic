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

const topServices = coreServices.slice(0, 4);

export default function EnHomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-[#cdb79d] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#8f6e50]">
            English version · SEO-first MVP
          </div>
          <h1 className="max-w-4xl text-5xl leading-tight font-semibold tracking-tight md:text-7xl">
            Premium multilingual legal support in Tenerife for foreign clients.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5a64] md:text-xl">
            Konomic is being built as a modern legal acquisition site for property buyers, expats, founders, and
            families who need clear legal help in Tenerife without the usual outdated law-firm feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/en/book-consultation" className="rounded-full bg-[#1d252b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#11171b]">
              Request consultation
            </Link>
            <Link href="/en/services" className="rounded-full border border-[#1d252b]/15 bg-white/80 px-6 py-3 text-sm font-medium text-[#1d252b] transition hover:border-[#1d252b]/35">
              Explore services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Stat value="EN / DE" label="demand capture" />
            <Stat value="RU / UK" label="differentiation" />
            <Stat value=".es" label="local trust" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <div className="text-xs uppercase tracking-[0.28em] text-[#d5bd9e]">Core positioning</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Built for Tenerife’s international legal demand.</h2>
          <div className="mt-6 space-y-4">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Core services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">What the first release should sell hardest</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            These are the most commercially useful and SEO-relevant services for a first multilingual launch.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topServices.map((service) => (
            <article key={service.slug} className="rounded-[1.75rem] border border-black/5 bg-white/85 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8f7d67]">{service.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.summary}</p>
              <Link href={`/en/services#${service.slug}`} className="mt-5 inline-flex text-sm font-medium text-[#1d252b]">
                View service details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1e252b] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#d5bd9e]">Why this direction works</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Competitors mostly look dated. The gap is premium clarity and real multilingual structure.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Separate language folders for SEO',
              'Service-led architecture instead of generic brochure copy',
              'Productized consultations for easier lead capture',
              'Sharper design that feels private, premium, and trustworthy',
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Questions this site should answer immediately</h2>
        </div>
        <div className="mt-10 grid gap-5">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[1.5rem] border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
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
    <div className="rounded-[1.5rem] border border-black/5 bg-white/80 p-5 shadow-[0_8px_24px_rgba(24,31,38,0.04)]">
      <div className="text-2xl font-semibold tracking-tight text-[#1d252b]">{value}</div>
      <div className="mt-1 text-sm text-[#59646e]">{label}</div>
    </div>
  );
}
