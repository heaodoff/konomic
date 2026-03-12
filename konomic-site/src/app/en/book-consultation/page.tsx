import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Book a Legal Consultation in Tenerife',
  description:
    'Choose the right consultation format for Tenerife legal support: legal review, property check, relocation consultation, or business setup call.',
  alternates: {
    canonical: '/en/book-consultation',
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const offers = [
  ['Fast Legal Review', 'Best for documents, contracts, and early risk checks before signing or paying.'],
  ['Property Purchase Legal Check', 'Useful for buyers before reservation contracts, deposits, or due diligence gaps create problems.'],
  ['Relocation Legal Starter Consultation', 'Ideal for residency, documents, and moving-to-Tenerife planning.'],
  ['Business Setup Consultation', 'For founders and foreign owners opening or structuring business activity in Spain.'],
];

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Consultation"
        title="Choose the right consultation, then move the conversation to WhatsApp"
        text="Konomic Digital SL. uses a WhatsApp-first intake. That keeps the first step fast, direct, and easier for foreign clients who want clarity without waiting."
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium hover:bg-[#0d1528]">Start on WhatsApp</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Open Telegram</a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offers.map(([title, text]) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8f7d67]">Consultation format</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d] px-5 py-2 text-sm font-medium text-[#14213d] hover:bg-[#14213d] hover:text-white">Start on WhatsApp</a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-2 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Telegram</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
