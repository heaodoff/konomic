import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for users contacting Konomic Digital SL. through the website, WhatsApp, Telegram, and email.',
  alternates: { canonical: '/en/privacy-policy' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Privacy Policy" title="Privacy information for website visitors and enquiries" text="This page outlines how contact details and enquiry information may be handled when a user contacts Konomic Digital SL. through the website, WhatsApp, Telegram, or email." />
      <div className="mt-12 space-y-6">
        {[
          ['Data collected', 'A user may provide name, contact details, preferred language, enquiry description, and related documents when contacting Konomic Digital SL.'],
          ['Purpose', 'The information is used to review the enquiry, respond, route the matter to the correct consultation type, and continue communication when appropriate.'],
          ['Channels used', 'The current lead channels include WhatsApp, Telegram, email, and website-based enquiry prompts.'],
          ['Data minimisation', 'Only the information necessary to understand the matter and respond appropriately should be requested.'],
          ['Questions', 'For privacy-related questions, the current public contact email is nikita.lukashok@gmail.com.'],
        ].map(([title, text]) => (
          <section key={title} className="ui-card p-8 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
