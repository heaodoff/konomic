import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Vertragsprüfung Teneriffa',
  description:
    'Juristische Unterstützung auf Teneriffa für Vertragsprüfung, Dokumentenerstellung und Risikokontrolle vor Unterzeichnung oder Zahlung.',
  alternates: { canonical: '/de/services/vertragspruefung-teneriffa' },
};

const bullets = [
  'Prüfung von Kauf-, Miet- und Dienstleistungsverträgen',
  'Erkennung von Risiken vor Unterschrift oder Zahlung',
  'Unterstützung bei Formulierungen und Anpassungen',
  'Bessere Klarheit für ausländische Mandanten vor Bindung',
];

export default function DeContractsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Verträge & Dokumente"
        title="Vertragsprüfung auf Teneriffa vor Unterschrift, Anzahlung oder Verpflichtung"
        text="Diese Seite ist für Mandanten gedacht, die einen Vertrag nicht einfach unterschreiben wollen, ohne die rechtlichen Folgen zu verstehen. Gerade bei Immobilien, geschäftlichen Vereinbarungen und Dienstleistungen entstehen Probleme oft dort, wo ein Dokument zu schnell akzeptiert wurde."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h2 className="text-2xl font-semibold tracking-tight">Wobei Konomic helfen soll</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><h2 className="text-2xl font-semibold tracking-tight">Typische Fälle</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base"><li>• Immobilienvertrag oder Reservierungsvertrag</li><li>• Mietvertrag oder Nutzungsvereinbarung</li><li>• Geschäftsvertrag mit Kunde oder Dienstleister</li><li>• Prüfung vor Anzahlung oder langfristiger Verpflichtung</li></ul></div>
      </div>
    </main>
  );
}
