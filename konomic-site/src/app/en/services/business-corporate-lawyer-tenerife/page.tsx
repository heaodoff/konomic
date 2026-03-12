import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Business & Corporate Legal Support in Tenerife',
  description:
    'Legal support in Tenerife for foreign founders, business owners, and operators dealing with company setup, structure, commercial documents, and business risk.',
  alternates: { canonical: '/en/services/business-corporate-lawyer-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Business service"
        title="Business and corporate legal support in Tenerife"
        text="This service is designed for foreign founders, business owners, and operators who need legal clarity before setting up, structuring, or formalising business activity in Spain."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Typical situations</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Before starting a company structure in Spain</li><li>• When founders need clearer partner or shareholder arrangements</li><li>• When business documents need legal review</li><li>• When foreign operators want fewer structural mistakes at the start</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">What this can include</h2><div className="mt-6 grid gap-3">{['Company formation and structure','Shareholder or partner arrangements','Commercial contract review','Early legal clarity before operating risk grows'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">First useful step</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">A short first message should explain what kind of business structure or activity is planned, whether any draft documents already exist, who is involved, and what timeline matters.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Start business enquiry</a></div>
    </main>
  );
}
