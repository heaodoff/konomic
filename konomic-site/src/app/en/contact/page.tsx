import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Contact Konomic Digital SL. in Tenerife',
  description:
    'Contact Konomic Digital SL. for Tenerife property, residency, business, contract, and foreign-client legal matters. WhatsApp-first contact available.',
  alternates: {
    canonical: '/en/contact',
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const firstMessageChecklist = [
  'What the matter is about',
  'Whether anything has already been signed or paid',
  'Your timeline or urgency',
  'Your preferred language',
  'Any document already available for review',
];

const channelGuide = [
  {
    title: 'WhatsApp',
    eyebrow: 'Primary',
    text: 'Best for new enquiries, fastest replies, and the clearest first step.',
  },
  {
    title: 'Telegram',
    eyebrow: 'Secondary',
    text: 'Useful if you prefer Telegram for written coordination and shorter follow-up messages.',
  },
  {
    title: 'Email',
    eyebrow: 'Documents',
    text: 'Best when you need to attach files, longer explanations, or a larger document set.',
  },
];

const processSteps = [
  'You send the first message, ideally on WhatsApp.',
  'The matter is reviewed and directed to the right consultation or legal review format.',
  'If needed, documents can be shared in advance by email or messaging.',
  'Next steps are defined clearly so the client knows what to prepare and what happens next.',
];

export default function ContactPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Contact"
        title="Contact Konomic Digital SL."
        text="For most new enquiries, WhatsApp is the fastest and clearest first step. Use email when documents need to be attached and Telegram if that channel is more convenient for written coordination."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta-channel="whatsapp"
          data-cta-location="contact-primary"
          data-cta-locale="en"
          className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
        >
          Start on WhatsApp
        </a>
        <a
          href="mailto:nikita.lukashok@gmail.com"
          className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45"
        >
          Send email
        </a>
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45"
        >
          Open Telegram
        </a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {channelGuide.map((item) => (
          <div key={item.title} className="ui-card-soft px-6 py-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">{item.eyebrow}</div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#59646e]">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-6 sm:p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">First message</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">What to include in your first enquiry</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
            A short, structured message usually makes the first review faster and more useful. If documents already exist, they can be shared after the first contact.
          </p>
          <div className="mt-6 grid gap-3">
            {firstMessageChecklist.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-[#14213d]/8 bg-[#fffdfa] px-5 py-5 sm:px-6 sm:py-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Suggested WhatsApp template</div>
            <div className="mt-4 text-sm leading-7 text-[#47515a] md:text-base">
              Hello. I need legal help with [property / residency / business / contract]. I am currently in [country/location]. The issue is [short description]. [Nothing has been signed yet / a document has already been signed]. My preferred language is [language]. My timeline is [timeline].
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-md text-xs leading-6 text-[#67727c]">
              If the matter is urgent or a deadline is close, start on WhatsApp first.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta-channel="whatsapp"
              data-cta-location="contact-template-cta"
              data-cta-locale="en"
              className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
            >
              Send on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="ui-card-soft rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
            <h2 className="text-2xl font-semibold tracking-tight">Public contact details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
              <li>• WhatsApp / phone: +34 643 319 719</li>
              <li>• Email: nikita.lukashok@gmail.com</li>
              <li>• Telegram: @nkitl0</li>
              <li>• Company: Konomic Digital SL.</li>
            </ul>
          </div>
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Client flow</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base">
                {processSteps.map((item, index) => (
                  <li key={item}>{index + 1}. {item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
