import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Property & Real Estate Legal Support in Tenerife',
  description:
    'Legal support in Tenerife for foreign buyers, investors, sellers, and owners who need review before signing, paying, or committing to a property transaction.',
  alternates: { canonical: '/en/services/property-real-estate-lawyer-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'Before signing a reservation or purchase contract',
  'Before paying a deposit or transferring a larger amount',
  'When the legal or documentary position of the property is still unclear',
  'When a foreign buyer wants a more structured review before committing',
];

const checks = [
  'Review of reservation, purchase, or related property documents',
  'Due diligence before purchase where relevant',
  'Checks around title, debt, licences, and transaction risk',
  'Early identification of issues that should be clarified before signing',
];

const firstMessage = [
  'Property location or listing reference',
  'Whether a reservation or purchase document already exists',
  'Whether any deposit has already been requested or paid',
  'Your timeline and where you are currently located',
  'Any document already available for review',
];

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Property service"
        title="Property and real estate legal support in Tenerife"
        text="This page is designed for foreign buyers, investors, sellers, and owners who need legal clarity before signing, paying, or proceeding with a property matter in Tenerife."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Typical situations</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">When clients usually reach out</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Why early review matters</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Property risk is easier to manage before money is committed</h2>
            <p className="mt-4 text-sm leading-7 text-white/82 md:text-base">
              In many property matters, the most useful legal step happens before a reservation is signed, before a deposit is transferred, or before a buyer assumes that the paperwork is already safe enough.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">What this service can cover</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Common review points before a property decision</h2>
          <div className="mt-6 grid gap-3">
            {checks.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">What to send first</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">A practical first message makes the review more useful</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
          >
            Start property enquiry on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
        <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Next step</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">If a property document already exists, review before signing is usually the right first move</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
          If your matter is already moving and a reservation, purchase, or related document exists, the clearest first step is usually to send a short WhatsApp message and then share the document for structured review.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Send the first message</a>
          <Link href="/en/contact" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">View contact options</Link>
        </div>
      </div>
    </main>
  );
}
