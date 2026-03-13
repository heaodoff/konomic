import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';
import { coreServices } from '@/content/site';

export const metadata: Metadata = {
  title: 'Legal Services in Tenerife',
  description:
    'Multilingual legal support in Tenerife for foreign clients dealing with property, residency, business, contracts, inheritance, and disputes.',
  alternates: {
    canonical: '/en/services',
  },
};

const serviceContext: Record<
  string,
  {
    label: string;
    situations: string[];
  }
> = {
  'property-real-estate-lawyer-tenerife': {
    label: 'Common before purchase or payment',
    situations: [
      'Before signing a reservation or purchase contract',
      'Before paying a deposit for property in Tenerife',
      'When documents need review before commitment',
    ],
  },
  'residency-immigration-lawyer-tenerife': {
    label: 'Common before relocation',
    situations: [
      'Before moving to Tenerife',
      'When residency or local paperwork is unclear',
      'When the process needs to start from abroad',
    ],
  },
  'business-corporate-lawyer-tenerife': {
    label: 'Common for founders and operators',
    situations: [
      'Before starting a business structure in Spain',
      'When founders need agreement or structure review',
      'When commercial documents need legal clarity',
    ],
  },
  'contract-review-document-drafting': {
    label: 'Common before signing',
    situations: [
      'Before signing contracts with financial or legal risk',
      'When a bilingual or foreign-language contract needs review',
      'When obligations need to be understood before commitment',
    ],
  },
  'inheritance-probate-lawyer-tenerife': {
    label: 'Common for cross-border matters',
    situations: [
      'When estate issues involve Spain and another jurisdiction',
      'When probate or wills need local legal handling',
      'When foreign heirs need clarity on the Spanish side',
    ],
  },
  'dispute-resolution-litigation-tenerife': {
    label: 'Common when a problem already exists',
    situations: [
      'When a contract has already broken down',
      'When a property or payment dispute has escalated',
      'When pre-court legal review is needed',
    ],
  },
};

export default function ServicesPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Services"
        title="Legal services for the matters foreign clients most often need help with in Tenerife"
        text="The public service structure focuses on property, residency, business, contracts, inheritance, and disputes — especially where clients need legal clarity before signing, paying, relocating, or escalating a problem."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 space-y-6">
        {coreServices.map((service) => {
          const context = serviceContext[service.slug];
          return (
            <section key={service.slug} id={service.slug} className="ui-card p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{context?.label ?? 'Legal support'}</div>
                <div className="rounded-full border border-black/8 bg-[#faf7f3] px-3 py-1 text-xs text-[#59646e]">
                  {service.eyebrow}
                </div>
              </div>

              <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">{service.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#56616b]">{service.summary}</p>

                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Typical situations</div>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
                      {(context?.situations ?? []).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                      {bullet}
                    </div>
                  ))}
                  <Link
                    href="/en/contact"
                    className="ui-button ui-button-primary mt-2 inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
                  >
                    Start an enquiry
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-10 ui-card p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">Premium business expansion</div>
          <div className="rounded-full border border-black/8 bg-[#faf7f3] px-3 py-1 text-xs text-[#59646e]">ZEC / Canary structure</div>
        </div>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Tax structuring, Canary Islands advantages, and ZEC company setup</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#56616b]">For founders and operators considering Tenerife or Canary Islands company setup, this service focuses on compliant structuring, ZEC-related setup questions, and legal coordination around the right corporate framework.</p>
            <div className="mt-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Why it attracts interest</div><ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base"><li>• For qualifying businesses, ZEC may offer access to a 4% corporate tax framework instead of the standard 25% Spanish corporate tax rate.</li><li>• The Canary Islands operate under IGIC rather than mainland VAT, which may create additional structural advantages in the right case.</li><li>• This is relevant where founders need more than incorporation — they need the right legal and corporate structure.</li></ul></div>
          </div>
          <div className="grid gap-3">
            {['ZEC company setup support','Canary Islands business structuring','Coordination with tax advisers and accountants'].map((item)=><div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}
            <Link href="/en/services/tax-structuring-zec-company-setup" className="ui-button ui-button-primary mt-2 inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">View service page</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
