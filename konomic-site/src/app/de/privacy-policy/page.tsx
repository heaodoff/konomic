import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Datenschutzhinweise für Nutzer, die Konomic Digital SL. über Website, WhatsApp, Telegram oder E-Mail kontaktieren.',
  alternates: { canonical: '/de/privacy-policy' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Privacy Policy" title="Datenschutzhinweise für Website-Besucher und Anfragen" text="Diese Seite beschreibt, wie Kontaktdaten und Anfragedaten behandelt werden können, wenn Nutzer Konomic Digital SL. über Website, WhatsApp, Telegram oder E-Mail kontaktieren." />
      <div className="mt-12 space-y-6">
        {[
          ['Erhobene Daten', 'Ein Nutzer kann Name, Kontaktdaten, bevorzugte Sprache, Beschreibung der Anfrage und zugehörige Dokumente übermitteln.'],
          ['Zweck', 'Die Informationen werden verwendet, um die Anfrage zu prüfen, zu beantworten, dem passenden Beratungsformat zuzuordnen und die Kommunikation fortzusetzen, wenn dies sinnvoll ist.'],
          ['Verwendete Kanäle', 'Zu den aktuellen Lead-Kanälen gehören WhatsApp, Telegram, E-Mail und Website-basierte Kontaktimpulse.'],
          ['Datenminimierung', 'Es sollten nur die Informationen angefragt werden, die nötig sind, um den Sachverhalt zu verstehen und angemessen zu reagieren.'],
          ['Fragen', 'Für datenschutzbezogene Fragen ist die aktuelle öffentliche Kontaktadresse nikita.lukashok@gmail.com.'],
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
