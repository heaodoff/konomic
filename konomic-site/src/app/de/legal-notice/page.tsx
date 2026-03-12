import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Öffentliche rechtliche und Unternehmensinformationen für Konomic Digital SL.',
  alternates: { canonical: '/de/legal-notice' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Legal Notice" title="Öffentliche rechtliche und gesellschaftsrechtliche Informationen" text="Diese Seite enthält die öffentlich sichtbaren Unternehmensangaben, die auf der Website aus Gründen der Transparenz und des Vertrauens angezeigt werden." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="ui-card p-8 md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Unternehmensangaben</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#59646e] md:text-base">
            <li>• Unternehmensname: Konomic Digital SL.</li>
            <li>• Öffentlicher WhatsApp / Telefon: +34 643 319 719</li>
            <li>• Öffentliche E-Mail: nikita.lukashok@gmail.com</li>
            <li>• Öffentliches Telegram: @nkitl0</li>
          </ul>
        </section>
        <section className="ui-card-dark p-8 text-white md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Öffentliche Einschränkungen</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-white/82 md:text-base">
            <li>• Auf der Website wird keine öffentliche Büroanschrift angezeigt.</li>
            <li>• Es werden derzeit keine Namen von Anwälten oder Teammitgliedern veröffentlicht.</li>
            <li>• Die Website ist als Plattform für Kontaktaufnahme und Lead-Generierung aufgebaut.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
