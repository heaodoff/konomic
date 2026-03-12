import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Residency & Immigration Legal Support in Tenerife',
  description:
    'Legal support in Tenerife for foreign clients dealing with residency, relocation, documentation, and early legal preparation before or after arrival.',
  alternates: { canonical: '/en/services/residency-immigration-lawyer-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Residency service"
        title="Residency and immigration legal support in Tenerife"
        text="This service is designed for foreign clients who need legal clarity around relocation, residency, local documentation, and the first legal steps before or after arriving in Tenerife."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Typical situations</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Before moving to Tenerife</li><li>• When the right residency path is unclear</li><li>• When local registrations or documents create confusion</li><li>• When the process needs to begin from abroad</li></ul></div>
        <div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">What early legal clarity can help with</h2><div className="mt-6 grid gap-3">{['Residency and relocation orientation','NIE / TIE and local documentation context','Family-related relocation questions','Remote-first first step where useful'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div>
      </div>
      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">What to send first</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">A useful first message usually includes where you are now, what type of residency or relocation issue you are dealing with, your timeline, and whether any document already exists.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Start residency enquiry</a></div>
    </main>
  );
}
