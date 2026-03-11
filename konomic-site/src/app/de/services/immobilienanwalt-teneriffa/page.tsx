import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Immobilienanwalt Teneriffa',
  description:
    'Rechtsberatung auf Teneriffa für Immobilienkauf, Due Diligence, Vertragsprüfung und Risikominimierung für internationale Käufer.',
  alternates: { canonical: '/de/services/immobilienanwalt-teneriffa' },
};

const bullets = [
  'Prüfung vor Kauf und Reservierungsvertrag',
  'Kontrolle von Eigentum, Schulden und Belastungen',
  'Prüfung von Lizenzen, Risiken und Unterlagen',
  'Unterstützung für Käufer, Verkäufer und Investoren',
];

export default function DePropertyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Immobilienrecht"
        title="Immobilienanwalt auf Teneriffa für internationale Käufer und Eigentümer"
        text="Diese Seite ist für Mandanten gedacht, die vor einer Zahlung, einem Reservierungsvertrag oder einem Kauf eine klare juristische Einschätzung brauchen. Gerade auf Teneriffa ist das Risiko oft nicht der Preis, sondern was im Hintergrund nicht geprüft wurde."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">Wobei Konomic helfen soll</h2>
          <div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">Typische Fälle</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
            <li>• Kauf einer Wohnung oder Villa auf Teneriffa</li>
            <li>• Prüfung vor Anzahlung oder Reservierung</li>
            <li>• Unterstützung für ausländische Investoren</li>
            <li>• Probleme mit Unterlagen, Schulden oder Genehmigungen</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
