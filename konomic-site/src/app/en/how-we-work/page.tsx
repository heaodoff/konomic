import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'How Konomic Works',
  description:
    'How Konomic handles first contact, document review, consultation flow, multilingual communication, and remote-first legal support for foreign clients in Tenerife.',
  alternates: { canonical: '/en/how-we-work' },
};

const firstContact = [
  'For most new matters, the first message should start on WhatsApp.',
  'A short summary is enough to begin if the issue is still early-stage.',
  'If documents already exist, they can usually be shared after the first contact.',
];

const reviewLogic = [
  'The matter is reviewed at an early stage to identify the right next step.',
  'The goal is to create clarity before the issue becomes more expensive or more complicated.',
  'The first useful outcome is usually not “everything is solved”, but a clearer legal path.',
];

const documents = [
  'Draft contracts or signed contracts',
  'Property documents or listing references',
  'Residency-related paperwork or local registration documents',
  'Business drafts, agreements, or commercial documents',
];

const remotePoints = [
  'Many foreign clients start before arriving in Tenerife.',
  'Document review can often begin remotely where relevant.',
  'WhatsApp, Telegram, and email allow practical first-step coordination.',
];

const processSteps = [
  'You send the first message, usually on WhatsApp.',
  'The issue is reviewed and the most suitable consultation or review format is identified.',
  'If relevant, documents are shared in advance.',
  'The next step is defined clearly so you know what matters now and what can wait.',
];

export default function HowWeWorkPage() {
  return (
    <main className="ui-section ui-section-cool">
      <SectionIntro
        eyebrow="How we work"
        title="A clearer process for foreign clients dealing with legal matters in Tenerife"
        text="This page explains how Konomic handles first contact, early review, documents, consultation flow, and multilingual communication for clients who need legal clarity before signing, relocating, investing, or structuring business activity."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">First contact</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Start with a short message, not a long formal intake</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstContact.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Early review</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">The first goal is clarity, not complexity</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/82 md:text-base">
              {reviewLogic.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Documents</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">What clients often send before the next step</h2>
          <div className="mt-6 grid gap-3">
            {documents.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Remote-friendly process</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Useful for clients who are still abroad</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {remotePoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
        <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">How the flow usually works</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">A practical legal process from first message to next step</h2>
        <ol className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
          {processSteps.map((item, index) => (
            <li key={item}>{index + 1}. {item}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}
