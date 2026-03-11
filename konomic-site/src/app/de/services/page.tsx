import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Deutschsprachige Leistungsseiten für Immobilienrecht, Aufenthaltsrecht, Unternehmensstruktur und Vertragsprüfung auf Teneriffa.',
  alternates: { canonical: '/de/services' },
};

const pages = [
  {
    href: '/de/services/immobilienanwalt-teneriffa',
    title: 'Immobilienanwalt Teneriffa',
    text: 'Für Immobilienkauf, Due Diligence, Vertragsprüfung und Risikominimierung vor Zahlung oder Reservierung.',
  },
  {
    href: '/de/services/aufenthaltsrecht-teneriffa',
    title: 'Aufenthaltsrecht Teneriffa',
    text: 'Für Residency, Dokumente, lokale Registrierungen und Relocation nach Teneriffa oder Spanien.',
  },
  {
    href: '/de/services/gesellschaftsrecht-teneriffa',
    title: 'Gesellschaftsrecht Teneriffa',
    text: 'Für Unternehmensgründung, Strukturierung, geschäftliche Verträge und laufende rechtliche Begleitung.',
  },
  {
    href: '/de/services/vertragspruefung-teneriffa',
    title: 'Vertragsprüfung Teneriffa',
    text: 'Für Vertragsprüfung, Dokumentenerstellung und Risikokontrolle vor Unterschrift oder Anzahlung.',
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Leistungen"
        title="Deutschsprachige Leistungsseiten für die wichtigste Nachfrage"
        text="Hier sind die Kernleistungen gebündelt, die für deutsche und deutschsprachige Mandanten auf Teneriffa am relevantesten sind. Jede Seite ist als eigener SEO- und Lead-Entry-Point aufgebaut."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <article key={page.href} className="rounded-[1.75rem] border border-black/5 bg-white/90 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
            <h2 className="text-2xl font-semibold tracking-tight">{page.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{page.text}</p>
            <Link href={page.href} className="mt-5 inline-flex text-sm font-medium text-[#1d252b]">Seite öffnen →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
