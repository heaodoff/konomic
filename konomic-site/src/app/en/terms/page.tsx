import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Terms and Disclaimer',
  description: 'Basic terms and disclaimer for using the Konomic Digital SL. website and contacting through its public channels.',
  alternates: { canonical: '/en/terms' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Terms" title="Website terms and disclaimer" text="This page provides a basic framework for how the website should be used and clarifies that initial contact does not automatically create a formal professional relationship." />
      <div className="mt-12 space-y-6">
        {[
          ['Informational use', 'Website content is intended for informational and contact-initiation purposes and should not be treated as a substitute for formal case-specific advice.'],
          ['No automatic engagement', 'Sending a message through WhatsApp, Telegram, email, or the site does not by itself create a formal client relationship.'],
          ['Case assessment first', 'Any legal matter should be assessed individually before a scope of work or ongoing engagement is assumed.'],
          ['External platforms', 'Communication may take place through third-party platforms such as WhatsApp, Telegram, and email.'],
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
