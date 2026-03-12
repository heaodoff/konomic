import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Gesellschaftsrecht Teneriffa',
  description:
    'Juristische Unterstützung auf Teneriffa für Unternehmensgründung, Strukturierung, Verträge und Begleitung internationaler Unternehmer.',
  alternates: { canonical: '/de/services/gesellschaftsrecht-teneriffa' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function DeBusinessPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Business & Struktur"
        title="Juristische Unterstützung auf Teneriffa für Unternehmen, Gründer und internationale Projekte"
        text="Diese Seite richtet sich an Mandanten, die ein Unternehmen aufbauen, strukturieren oder sicherer betreiben wollen — auf Teneriffa oder in Spanien."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Typische Situationen</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Vor Gründung oder Strukturierung eines Unternehmens in Spanien</li><li>• Wenn klare Vereinbarungen zwischen Partnern nötig sind</li><li>• Wenn Handels- oder Dienstleistungsverträge vorab geprüft werden sollen</li><li>• Wenn internationale Gründer strukturelle Fehler am Anfang vermeiden wollen</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Was diese Leistung abdecken kann</h2><div className="mt-6 grid gap-3">{['Gründung und Unternehmensstruktur','Vereinbarungen zwischen Partnern','Prüfung geschäftlicher Verträge','Frühe rechtliche Klarheit vor wachsendem Risiko'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Sinnvoller erster Schritt</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">In der ersten Nachricht hilft meist eine kurze Erklärung, welche Struktur oder Tätigkeit geplant ist, ob bereits Entwürfe existieren und welcher Zeitrahmen entscheidend ist.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Business-Anfrage starten</a></div>
    </main>
  );
}
