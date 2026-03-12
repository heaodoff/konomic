import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice and public company information for Konomic Digital SL.',
  alternates: { canonical: '/en/legal-notice' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Legal Notice" title="Public legal and company information" text="This page provides the public company details currently displayed on the website for transparency and trust." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="ui-card p-8 md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Company information</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#59646e] md:text-base">
            <li>• Company name: Konomic Digital SL.</li>
            <li>• Public WhatsApp / phone: +34 643 319 719</li>
            <li>• Public email: nikita.lukashok@gmail.com</li>
            <li>• Public Telegram: @nkitl0</li>
          </ul>
        </section>
        <section className="ui-card-dark p-8 text-white md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Public limitations</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-white/82 md:text-base">
            <li>• No public office address is shown on the site.</li>
            <li>• No public lawyer or team names are currently shown.</li>
            <li>• The website is structured as a lead-generation and contact platform.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
