import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Vertragsprüfung Teneriffa',
  description:
    'Juristische Unterstützung auf Teneriffa für Vertragsprüfung, Dokumente und Risikokontrolle vor Unterschrift oder Zahlung.',
  alternates: { canonical: '/de/services/vertragspruefung-teneriffa' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function DeContractsPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Verträge & Dokumente"
        title="Vertragsprüfung auf Teneriffa vor Unterschrift, Zahlung oder Bindung"
        text="Diese Seite richtet sich an Mandanten, die ein Dokument nicht unterschreiben wollen, ohne die rechtlichen und wirtschaftlichen Folgen wirklich zu verstehen."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Typische Situationen</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Vor Immobilien-, Miet-, Dienstleistungs- oder Geschäftsverträgen</li><li>• Wenn das Dokument in einer anderen Sprache vorliegt</li><li>• Wenn rechtliche oder wirtschaftliche Folgen noch unklar sind</li><li>• Wenn die sicherste Entscheidung ist, zuerst prüfen zu lassen</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Wobei diese Prüfung hilft</h2><div className="mt-6 grid gap-3">{['Prüfung von Kauf- und Mietverträgen','Prüfung geschäftlicher und dienstleistungsbezogener Vereinbarungen','Prüfung zweisprachiger Dokumente','Frühe Klärung von Pflichten und Risiken'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Was zuerst geschickt werden sollte</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Meist ist der nützlichste erste Schritt eine kurze WhatsApp-Nachricht zusammen mit dem Vertragsentwurf oder Dokument und einem Hinweis darauf, was genau Sorge macht und wann unterschrieben werden soll.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Vertragsprüfung starten</a></div>
    </main>
  );
}
