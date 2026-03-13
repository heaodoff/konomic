import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Tax Structuring & ZEC Company Setup in Tenerife',
  description:
    'Legal support in Tenerife and the Canary Islands for business structuring, ZEC company setup, founder planning, and coordination around compliant tax-efficient business structures.',
  alternates: { canonical: '/en/services/tax-structuring-zec-company-setup' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'Before setting up a company in Tenerife or the Canary Islands',
  'When a founder wants to understand whether ZEC is realistically relevant',
  'When business structure, shareholders, and legal setup need early coordination',
  'When a foreign operator wants legal clarity before incorporation or restructuring',
];

const coverage = [
  'Early legal orientation on Canary Islands business setup options',
  'Legal support around ZEC company setup and related structure questions',
  'Corporate setup support for foreign founders and operators',
  'Coordination with accountants, tax advisers, and other relevant local professionals',
  'Review of shareholder, partner, and company document layer before structure is finalised',
];

const firstMessage = [
  'What kind of business activity is planned',
  'Where the founders or operators are currently based',
  'Whether a company already exists or needs to be created',
  'Whether ZEC, Canary Islands structuring, or tax coordination is the main reason for the enquiry',
  'Any draft documents or structure notes already available',
];

export default function TaxStructuringPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Business structuring"
        title="Tax structuring and ZEC company setup in Tenerife and the Canary Islands"
        text="This page is designed for founders, operators, and international business clients who need legal clarity around Canary Islands company setup, ZEC-related structuring, and compliant business planning before incorporation or restructuring."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Typical situations</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">When this service is most relevant</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Positioning rule</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">This service is about compliant structuring, not aggressive tax promises</h2>
            <p className="mt-4 text-sm leading-7 text-white/82 md:text-base">
              The goal is to help clients understand lawful setup options, corporate structure, ZEC relevance, and the legal side of business planning in the Canary Islands — not to make unsupported promises about tax outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 ui-card-dark p-8 text-white md:p-10">
        <div className="relative z-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Why founders look at ZEC</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Why ZEC can be more attractive than a standard company setup</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-white/82 md:text-base">
            <p>
              For businesses that genuinely qualify, ZEC can offer a <strong>4% corporate tax framework</strong> instead of the standard <strong>25% Spanish corporate tax rate</strong>. That is one of the main reasons the structure attracts international founders, operators, and business owners looking at the Canary Islands as a serious long-term base.
            </p>
            <p>
              The Canary Islands also operate under the <strong>IGIC system rather than standard mainland VAT</strong>, which in the right structure may create additional advantages, including more favourable treatment in certain import-related scenarios.
            </p>
            <p>
              That is why ZEC is often considered not simply as a company-registration option, but as a <strong>higher-value business structuring decision</strong> for the right kind of international activity.
            </p>
            <p>
              ZEC is not relevant for every business, however, and eligibility, structure, and tax treatment should always be assessed case by case before relying on the regime.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">What this service can cover</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Common legal and structural work around ZEC and Canary Islands setup</h2>
          <div className="mt-6 grid gap-3">
            {coverage.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">What to send first</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">A structured first message saves time</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            Start ZEC / structuring enquiry
          </a>
        </div>
      </div>
    </main>
  );
}
