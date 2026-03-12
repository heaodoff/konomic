import { SectionIntro } from '@/components/SiteShell';

const audiencePoints = [
  'Foreign property buyers and investors',
  'People relocating to Tenerife and dealing with residency questions',
  'Founders and business owners structuring activity in Spain',
  'Clients who need contracts reviewed before signing or paying',
];

const workflowPoints = [
  'Start with a short message on WhatsApp, ideally with the issue and timeline.',
  'Share documents in advance if something already exists.',
  'The matter is reviewed and directed to the right consultation or legal review format.',
  'Next steps are defined clearly so the client knows what matters now and what can wait.',
];

const trustPoints = [
  'Company name: Konomic Digital SL.',
  'Public WhatsApp, Telegram, and email contact are available.',
  'The site is built for multilingual communication with foreign clients.',
  'Legal notice, privacy policy, and terms pages are available.',
];

export default function AboutPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="About Konomic"
        title="Legal support in Tenerife for foreign clients who need clarity before they move, sign, or invest"
        text="Konomic Digital SL. is structured around the legal matters foreign clients most often need help with in Tenerife: property, residency, business, contracts, and related cross-border issues."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Who this is for</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">A practical entry point for the situations foreign clients face most often</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {audiencePoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="ui-card-dark p-8 text-white md:p-9">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">How the process works</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Clear first contact, clear next steps</h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-white/82 md:text-base">
              {workflowPoints.map((item, index) => (
                <li key={item}>{index + 1}. {item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Why this model matters</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Many legal issues become more expensive when they are reviewed too late</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <p>
              Foreign clients often need legal clarity before a reservation contract is signed, before a payment is made, before a company is structured, or before relocation paperwork starts moving in the wrong direction.
            </p>
            <p>
              The site is therefore built around early review, structured first contact, and multilingual communication that makes the process easier to understand from the beginning.
            </p>
            <p>
              Where relevant, the first step can begin remotely, which is useful for clients who are still abroad and need to review documents before arriving in Tenerife.
            </p>
          </div>
        </div>

        <div className="ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Public trust layer</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">What is publicly available</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {trustPoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
