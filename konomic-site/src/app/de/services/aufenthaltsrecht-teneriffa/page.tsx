import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Aufenthaltsrecht Teneriffa',
  description:
    'Juristische Unterstützung auf Teneriffa für Aufenthalt, Residency, Dokumente, lokale Registrierungen und den Umzug nach Spanien.',
  alternates: { canonical: '/de/services/aufenthaltsrecht-teneriffa' },
};

const bullets = [
  'Orientierung zu Residency-Optionen und Unterlagen',
  'Unterstützung bei NIE, TIE und lokalen Registrierungen',
  'Begleitung für Familienzusammenführung und Umzug',
  'Vorbereitung bereits vor der Ankunft auf Teneriffa',
];

export default function DeImmigrationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Aufenthalt & Immigration"
        title="Juristische Unterstützung auf Teneriffa für Aufenthalt, Residency und Relocation"
        text="Diese Seite ist für Mandanten gedacht, die einen klaren Einstieg in den Umzug nach Teneriffa brauchen. Bei Aufenthaltsthemen entsteht das Problem oft nicht erst bei der Behörde, sondern viel früher bei unklaren Dokumenten, falscher Reihenfolge oder fehlender Vorbereitung."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">Wobei Konomic helfen soll</h2>
          <div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">Typische Fälle</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
            <li>• Umzug nach Teneriffa als Privatperson oder Familie</li>
            <li>• Klärung von Dokumenten und Residency-Weg</li>
            <li>• Vorbereitung vor der Ankunft in Spanien</li>
            <li>• Unterstützung bei lokalen Schritten nach dem Umzug</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
