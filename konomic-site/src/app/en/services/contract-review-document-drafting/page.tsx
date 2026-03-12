import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Contract Review & Legal Document Support',
  description:
    'Contract review and legal document support in Tenerife for clients who need clarity before signing, paying, or accepting legal obligations.',
  alternates: { canonical: '/en/services/contract-review-document-drafting' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Contract review"
        title="Contract review and legal document support"
        text="This service is designed for clients who want a contract or legal document reviewed before they sign, pay, or take on obligations they do not fully understand yet."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Typical situations</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Before signing a property, rental, service, or commercial contract</li><li>• When a document exists in another language and needs clearer review</li><li>• When the legal or financial effect of the document is still unclear</li><li>• When the safest next step is to review before commitment</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">What this can help with</h2><div className="mt-6 grid gap-3">{['Property and rental contract review','Commercial and service agreement review','Bilingual document review','Early clarification of obligations and risk'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">What to send first</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">The most useful first step is usually a short WhatsApp message plus the draft agreement or document, together with a note explaining what worries you most and when the document is due to be signed.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Start contract review enquiry</a></div>
    </main>
  );
}
