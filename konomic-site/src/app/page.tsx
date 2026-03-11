const services = [
  {
    title: 'Immigration & Residency',
    text: 'Residence permits, relocation support, documentation, and legal guidance for foreign clients moving to Tenerife.',
  },
  {
    title: 'Property & Real Estate',
    text: 'Due diligence, contract review, transaction support, and legal protection for buyers, sellers, and investors.',
  },
  {
    title: 'Business Setup & Corporate',
    text: 'Company formation, business structuring, commercial contracts, and practical legal support for entrepreneurs.',
  },
  {
    title: 'Contracts & Legal Review',
    text: 'Review and negotiation support for private, commercial, and property-related agreements before you sign.',
  },
];

const audience = [
  'International clients relocating to Tenerife',
  'Property buyers and investors',
  'Business owners and founders',
  'Families needing local legal support',
];

const reasons = [
  'Multilingual support for international clients',
  'Tenerife-focused legal and business context',
  'Clear process instead of vague legal talk',
  'Premium, practical, business-minded positioning',
];

const processSteps = [
  'Initial enquiry',
  'Consultation and case review',
  'Clear action plan',
  'Execution and representation',
];

const faqs = [
  {
    q: 'Do you work with foreign clients in Tenerife?',
    a: 'Yes. Konomic is positioned for international clients who need legal, property, relocation, or business support in Tenerife.',
  },
  {
    q: 'Can clients communicate in different languages?',
    a: 'Yes. The site is being prepared for English, German, Russian, and Ukrainian-speaking audiences.',
  },
  {
    q: 'What kinds of matters do you handle?',
    a: 'Core focus areas include immigration, property transactions, business setup, contracts, and related administrative support.',
  },
  {
    q: 'How do consultations work?',
    a: 'A client submits an enquiry, receives an initial review, and then gets a clear next-step recommendation based on the matter.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f3ee_0%,#f3efe9_30%,#fffdfa_100%)] text-[#1d252b]">
      <section className="border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#8f7d67]">Konomic</div>
            <div className="mt-1 text-sm text-[#56616b]">Premium legal support in Tenerife</div>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-[#1d252b] px-5 py-2 text-sm font-medium transition hover:bg-[#1d252b] hover:text-white"
          >
            Book consultation
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-[#cdb79d] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[#8f6e50]">
            For international clients
          </div>
          <h1 className="max-w-4xl text-5xl leading-tight font-semibold tracking-tight md:text-7xl">
            Legal support in Tenerife that feels clear, modern, and reliable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5a64] md:text-xl">
            Konomic is being positioned as a premium multilingual legal and business support firm for foreigners,
            property buyers, founders, and families navigating Tenerife.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#1d252b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#11171b]"
            >
              Request legal help
            </a>
            <a
              href="#services"
              className="rounded-full border border-[#1d252b]/15 bg-white/80 px-6 py-3 text-sm font-medium text-[#1d252b] transition hover:border-[#1d252b]/35"
            >
              Explore services
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Stat value="4" label="target languages" />
            <Stat value="MVP" label="SEO-led launch" />
            <Stat value="24/7" label="lead capture intent" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <div className="text-xs uppercase tracking-[0.28em] text-[#d5bd9e]">Core positioning</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">A boutique legal presence for Tenerife.</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Not a generic lawyer directory. Not a dusty local brochure site. A high-trust multilingual acquisition
            website designed to rank, convert, and feel premium.
          </p>
          <div className="mt-8 space-y-4">
            {audience.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Commercial core for the first launch</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            These are the four services most worth launching first: clearest demand, strongest lead quality, and best SEO fit.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-black/5 bg-white/85 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1e252b] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#d5bd9e]">Why this can beat competitors</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Most competing sites are either outdated, vague, or visually weak.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/85">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">How it should work</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Simple client flow</h2>
          <div className="mt-8 space-y-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-[#faf7f3] px-4 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d252b] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <div className="text-sm font-medium text-[#263039] md:text-base">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-[#f5efe8] p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">SEO architecture</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Built for multilingual search, not just visual polish.</h2>
          <ul className="mt-8 space-y-4 text-sm leading-7 text-[#4f5a64] md:text-base">
            <li>• Separate indexable paths for English, German, Russian, and Ukrainian.</li>
            <li>• Dedicated service pages for immigration, property, business, and contracts.</li>
            <li>• Future audience pages for British, German-speaking, Russian-speaking, and Ukrainian clients.</li>
            <li>• Blog and legal guides for long-tail local SEO in Tenerife and the Canary Islands.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Questions the site should answer fast</h2>
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

      <section id="contact" className="border-t border-black/5 bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Next step</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">What is still needed to ship this properly</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-[#59646e] md:text-base">
              <li>• Confirm the exact list of legal services Konomic really provides.</li>
              <li>• Decide which people, qualifications, and company details can be shown publicly.</li>
              <li>• Provide official contact details, legal entity data, and preferred lead channel.</li>
              <li>• Choose the deployment stack, domain, and booking/contact method.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
            <div className="text-xs uppercase tracking-[0.3em] text-[#d5bd9e]">Current status</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Premium homepage draft is ready.</h3>
            <p className="mt-4 text-sm leading-7 text-white/75">
              This is the first branded direction. From here the next move is turning it into a real multilingual site with real company data, service pages, forms, and deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">English-first MVP</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Premium visual direction</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">SEO-led architecture</span>
            </div>
          </div>
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
