import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Terms and Disclaimer',
  description: 'Grundlegende Bedingungen und Haftungshinweise für die Nutzung der Website von Konomic Digital SL. und ihrer öffentlichen Kontaktkanäle.',
  alternates: { canonical: '/de/terms' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Terms" title="Nutzungsbedingungen und Hinweis" text="Diese Seite schafft einen grundlegenden Rahmen für die Nutzung der Website und stellt klar, dass der erste Kontakt nicht automatisch ein formelles Mandatsverhältnis begründet." />
      <div className="mt-12 space-y-6">
        {[
          ['Informationszweck', 'Die Inhalte der Website dienen Informations- und Kontaktzwecken und sind kein Ersatz für eine formelle, fallspezifische rechtliche Beratung.'],
          ['Kein automatisches Mandat', 'Eine Nachricht über WhatsApp, Telegram, E-Mail oder die Website begründet für sich genommen noch kein formelles Mandatsverhältnis.'],
          ['Fallprüfung zuerst', 'Jeder rechtliche Sachverhalt sollte individuell geprüft werden, bevor ein Leistungsumfang oder eine laufende Begleitung angenommen wird.'],
          ['Externe Plattformen', 'Die Kommunikation kann über Drittplattformen wie WhatsApp, Telegram und E-Mail erfolgen.'],
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
