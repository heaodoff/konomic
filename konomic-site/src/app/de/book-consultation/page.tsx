import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Juristische Beratung auf Teneriffa buchen',
  description:
    'Wählen Sie das passende Beratungsformat für Immobilien, Aufenthalt, Unternehmen oder Dokumentenprüfung auf Teneriffa.',
  alternates: { canonical: '/de/book-consultation' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const offers = [
  ['Schnelle juristische Prüfung', 'Am besten für Unterlagen, Verträge und frühe Risikoprüfung vor Unterschrift oder Zahlung.'],
  ['Rechtlicher Immobilienkauf-Check', 'Sinnvoll für Käufer vor Reservierung, Anzahlung oder Problemen bei der Due Diligence.'],
  ['Starter-Beratung für Relocation', 'Geeignet für Aufenthalt, Unterlagen und die Planung eines Umzugs nach Teneriffa.'],
  ['Beratung zur Unternehmensstruktur', 'Für Gründer und Inhaber, die geschäftliche Aktivität in Spanien aufbauen oder strukturieren.'],
];

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Beratung" title="Die passende Beratung wählen und das Gespräch danach auf WhatsApp verlagern" text="Konomic Digital SL. nutzt einen WhatsApp-first intake. Dadurch wird der erste Schritt schneller, direkter und klarer für internationale Mandanten, die rechtliche Klarheit ohne unnötige Wartezeit wollen." />
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Auf WhatsApp starten</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Telegram öffnen</a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offers.map(([title, text]) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8f7d67]">Beratungsformat</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d] px-5 py-2 text-sm font-medium text-[#14213d] hover:bg-[#14213d] hover:text-white">Auf WhatsApp starten</a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-2 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Telegram</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
