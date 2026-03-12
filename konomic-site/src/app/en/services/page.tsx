import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';
import { coreServices } from '@/content/site';

export const metadata: Metadata = {
  title: 'Legal Services in Tenerife',
  description:
    'Explore Konomic’s legal service structure for Tenerife: property, immigration, business setup, contracts, inheritance, and disputes.',
  alternates: {
    canonical: '/en/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Services"
        title="A service structure designed around real demand"
        text="This service architecture is based on what competitors already sell, but cleaned up for stronger positioning, better lead quality, and more useful multilingual SEO."
      />

      <div className="mt-12 grid gap-6">
        {coreServices.map((service, index) => (
          <section key={service.slug} id={service.slug} className="ui-card p-8 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">
                {index < 4 ? 'Launch priority' : 'Expansion service'}
              </div>
              <div className="rounded-full border border-black/8 bg-[#faf7f3] px-3 py-1 text-xs text-[#59646e]">{service.eyebrow}</div>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">{service.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#56616b]">{service.summary}</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                  {bullet}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
