import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Gesellschaftsrecht Teneriffa',
  description:
    'Juristische Unterstützung auf Teneriffa für Unternehmensgründung, Strukturierung, Verträge und laufende rechtliche Begleitung für internationale Unternehmer.',
  alternates: { canonical: '/de/services/gesellschaftsrecht-teneriffa' },
};

const bullets = [
  'Begleitung bei Gründung und Strukturierung in Spanien',
  'Unterstützung bei Gesellschafter- und Partnerfragen',
  'Prüfung von geschäftlichen Verträgen und Risiken',
  'Laufende rechtliche Orientierung für ausländische Unternehmer',
];

export default function DeBusinessPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Business & Gesellschaftsrecht"
        title="Juristische Unterstützung auf Teneriffa für Unternehmen, Gründer und internationale Betreiber"
        text="Diese Seite ist für Mandanten gedacht, die auf Teneriffa oder in Spanien ein Unternehmen gründen, strukturieren oder sauber absichern wollen. Gerade für internationale Gründer entstehen Risiken oft an den Übergängen zwischen Verträgen, Struktur und lokaler Umsetzung."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]"><h2 className="text-2xl font-semibold tracking-tight">Wobei Konomic helfen soll</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-[#f8f4ef] px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]"><h2 className="text-2xl font-semibold tracking-tight">Typische Fälle</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base"><li>• Unternehmensgründung in Spanien oder auf Teneriffa</li><li>• Strukturierung zwischen Gesellschaftern und Partnern</li><li>• Verträge mit Dienstleistern oder Kunden</li><li>• Laufende rechtliche Unterstützung für internationale Betreiber</li></ul></div>
      </div>
    </main>
  );
}
