import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Immobilienanwalt Teneriffa',
  description:
    'Rechtsberatung auf Teneriffa für Immobilienkauf, Due Diligence, Dokumentenprüfung und Risikominimierung für internationale Käufer.',
  alternates: { canonical: '/de/services/immobilienanwalt-teneriffa' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'Vor Reservierungs- oder Kaufverträgen',
  'Vor einer Anzahlung oder größeren Überweisung',
  'Wenn die Dokumentenlage der Immobilie noch unklar ist',
  'Wenn ein internationaler Käufer Risiken vor der Bindung prüfen will',
];

const checks = [
  'Prüfung von Reservierung, Kaufvertrag und zugehörigen Unterlagen',
  'Due Diligence vor dem Kauf, wenn relevant',
  'Prüfung von Eigentum, Schulden, Genehmigungen und Transaktionsrisiken',
  'Frühe Erkennung von Punkten, die vor der Unterschrift geklärt werden sollten',
];

const firstMessage = [
  'Adresse oder Inseratslink der Immobilie',
  'Ob bereits ein Reservierungs- oder Kaufdokument vorliegt',
  'Ob bereits eine Anzahlung verlangt oder geleistet wurde',
  'Ihr Zeitrahmen und wo Sie sich aktuell befinden',
  'Unterlagen, die bereits zur Prüfung vorliegen',
];

export default function DePropertyPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Immobilienrecht"
        title="Immobilienanwalt auf Teneriffa für internationale Käufer und Investoren"
        text="Diese Seite richtet sich an Mandanten, die vor Anzahlung, Reservierungsvertrag oder Immobilienkauf auf Teneriffa rechtliche Klarheit brauchen."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Typische Situationen</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Wann eine frühe Prüfung meist sinnvoll ist</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Warum frühe Prüfung wichtig ist</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Bei Immobilientransaktionen ist der nützlichste rechtliche Schritt oft vor der Zahlung</h2>
            <p className="mt-4 text-sm leading-7 text-white/82 md:text-base">
              In vielen Fällen ist die entscheidende Prüfung vor Reservierung, vor Anzahlung und vor dem Moment sinnvoll, in dem man davon ausgeht, dass die Unterlagen „schon in Ordnung“ sind.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Was diese Leistung abdecken kann</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Häufige Prüfungspunkte vor einer Immobilienentscheidung</h2>
          <div className="mt-6 grid gap-3">
            {checks.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Was zuerst geschickt werden sollte</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Eine praktische Erstnachricht macht die Prüfung nützlicher</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            Immobilienanfrage starten
          </a>
        </div>
      </div>

      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
        <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Nächster Schritt</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">Wenn bereits ein Dokument vorliegt, ist die Prüfung vor der Unterschrift meist der richtige erste Schritt</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
          Wenn der Vorgang bereits läuft und ein Reservierungsvertrag, Kaufvertragsentwurf oder andere Unterlagen vorliegen, ist der klarste erste Schritt meist eine kurze WhatsApp-Nachricht und danach das strukturierte Teilen der Dokumente.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Erste Nachricht senden</a>
          <Link href="/de/contact" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Kontaktoptionen öffnen</Link>
        </div>
      </div>
    </main>
  );
}
