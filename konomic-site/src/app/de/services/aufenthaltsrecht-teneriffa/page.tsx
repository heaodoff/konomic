import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Aufenthaltsrecht Teneriffa',
  description:
    'Juristische Unterstützung auf Teneriffa für Aufenthalt, Residency, Dokumente, lokale Registrierungen und Umzug nach Spanien.',
  alternates: { canonical: '/de/services/aufenthaltsrecht-teneriffa' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function DeImmigrationPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Aufenthalt & Immigration"
        title="Juristische Unterstützung auf Teneriffa für Aufenthalt, Dokumente und Umzug"
        text="Diese Seite richtet sich an Mandanten, die einen klareren Start bei Umzug, Aufenthalt und lokalen Dokumenten auf Teneriffa brauchen."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Typische Situationen</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Vor dem Umzug nach Teneriffa</li><li>• Wenn der richtige Aufenthaltsweg unklar ist</li><li>• Wenn lokale Dokumente und Schritte verwirrend sind</li><li>• Wenn der Prozess aus dem Ausland beginnen soll</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Was frühe Klärung helfen kann</h2><div className="mt-6 grid gap-3">{['Orientierung zu Aufenthalt und Relocation','Kontext zu NIE / TIE und lokalen Unterlagen','Fragen zu Familie und Umzug','Remote-Start, wenn sinnvoll'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Was zuerst geschickt werden sollte</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Hilfreich ist meist direkt anzugeben, aus welchem Land der Prozess startet, worum es beim Aufenthalt oder Umzug geht, welcher Zeitrahmen wichtig ist und ob bereits Unterlagen existieren.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Aufenthaltsanfrage starten</a></div>
    </main>
  );
}
