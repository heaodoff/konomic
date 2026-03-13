import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deutschsprachige Rechtsberatung auf Teneriffa',
  description:
    'Mehrsprachige Rechtsberatung auf Teneriffa für internationale Mandanten bei Immobilien, Aufenthalt, Unternehmen und Vertragsfragen.',
  alternates: {
    canonical: '/de',
    languages: { en: '/en', de: '/de', ru: '/ru', uk: '/uk', es: '/es', 'x-default': '/en' },
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const trustPoints = [
  'Auf internationale Mandanten auf Teneriffa ausgerichtet',
  'Sinnvoll vor Unterschrift, Umzug oder Investition',
  'Unterlagen können vorab geteilt werden',
  'WhatsApp als primärer erster Kontakt',
];

const processSteps = [
  'Senden Sie die erste Nachricht per WhatsApp mit einer kurzen Zusammenfassung.',
  'Teilen Sie Unterlagen, Zeitrahmen und ob bereits etwas unterschrieben oder bezahlt wurde.',
  'Der Sachverhalt wird geprüft und dem passenden Beratungs- oder Prüfungsformat zugeordnet.',
  'Die nächsten Schritte werden klar definiert, damit der Mandant weiß, was vorzubereiten ist.',
];

const serviceHighlights = [
  {
    title: 'Immobilienrechtliche Unterstützung',
    eyebrow: 'Für Käufer, Investoren und Eigentümer',
    text: 'Rechtliche Prüfung vor Reservierungsverträgen, Kaufverträgen, Zahlungen und Immobilienentscheidungen auf Teneriffa.',
    bullets: ['Due Diligence vor dem Kauf', 'Vertragsprüfung vor Unterschrift', 'Prüfung von Eigentum, Schulden und Lizenzen'],
    href: '/de/services/immobilienanwalt-teneriffa',
  },
  {
    title: 'Aufenthalt, Immigration und Relocation',
    eyebrow: 'Für Menschen, die nach Teneriffa ziehen',
    text: 'Juristische Unterstützung bei Aufenthalt, lokalen Dokumenten und rechtlicher Vorbereitung vor oder nach der Ankunft.',
    bullets: ['Orientierung zu Aufenthalt und Umzug', 'NIE / TIE und lokale Schritte', 'Remote-Start, wenn sinnvoll'],
    href: '/de/services/aufenthaltsrecht-teneriffa',
  },
  {
    title: 'Unternehmen und Gesellschaftsstruktur',
    eyebrow: 'Für Gründer und Betreiber',
    text: 'Unterstützung für internationale Gründer bei Unternehmensstruktur, Handelsdokumenten und geschäftlicher Tätigkeit in Spanien.',
    bullets: ['Gründung und Struktur', 'Vereinbarungen zwischen Partnern', 'Geschäftsverträge und Begleitung'],
    href: '/de/services/gesellschaftsrecht-teneriffa',
  },
  {
    title: 'Vertragsprüfung und Dokumente',
    eyebrow: 'Für Mandanten, die vor der Unterschrift Klarheit brauchen',
    text: 'Prüfung von Verträgen und Dokumenten, bevor Verpflichtungen, Zahlungen oder Risiken festgeschrieben werden.',
    bullets: ['Immobilien- und Mietverträge', 'Handels- und Dienstleistungsverträge', 'Prüfung zweisprachiger Dokumente'],
    href: '/de/services/vertragspruefung-teneriffa',
  },
];

const clientSituations = [
  'Immobilienkauf auf Teneriffa und rechtliche Prüfung vor einer Anzahlung',
  'Umzug nach Spanien und Klärung von Aufenthalt oder Dokumenten',
  'Aufbau einer Unternehmensstruktur als internationaler Gründer',
  'Prüfung eines Vertrags vor Unterschrift oder Überweisung',
  'Teilen von Unterlagen aus dem Ausland vor der Anreise nach Teneriffa',
  'Den richtigen rechtlichen nächsten Schritt verstehen, statt zu raten',
];

const faqItems = [
  {
    q: 'Muss ich auf Teneriffa sein, um zu starten?',
    a: 'Nicht immer. Viele Anfragen können remote beginnen, besonders wenn Unterlagen geprüft oder der nächste Schritt vor Reise, Unterschrift oder Zahlung geklärt werden soll.',
  },
  {
    q: 'Kann ein Vertrag vor der Unterschrift geprüft werden?',
    a: 'Ja. Gerade dafür lohnt sich ein früher Kontakt besonders. Eine Prüfung vor der Unterschrift ist meist deutlich wertvoller als eine spätere Korrektur.',
  },
  {
    q: 'Arbeiten Sie mit ausländischen Immobilienkäufern?',
    a: 'Ja. Immobilien gehören zu den wichtigsten Schwerpunkten der Website, insbesondere für internationale Käufer und Investoren, die Risiken vor einer Zahlung verstehen wollen.',
  },
  {
    q: 'Kann ich Unterlagen vorab schicken?',
    a: 'Ja, wenn es sinnvoll ist. Liegen Dokumente bereits vor, können sie meist nach der ersten Nachricht geteilt werden, damit die Prüfung strukturierter erfolgen kann.',
  },
  {
    q: 'Was sollte in der ersten WhatsApp-Nachricht stehen?',
    a: 'Kurz das Thema, ob bereits etwas unterschrieben oder bezahlt wurde, der Zeitrahmen, die bevorzugte Sprache und ob Unterlagen vorliegen.',
  },
  {
    q: 'Welcher Kontaktkanal ist am besten?',
    a: 'WhatsApp ist der primäre Kanal, weil er meist am schnellsten und klarsten ist. Telegram eignet sich für schriftliche Abstimmung, E-Mail für Unterlagen und längere Erklärungen.',
  },
];

export default function DeHomePage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]" aria-hidden="true" />
        <div className="flex flex-col justify-center">
          <Image
            src="/konomic-logo.png"
            alt="Konomic Logo"
            width={420}
            height={175}
            priority
            className="mb-6 h-auto w-[190px] sm:w-[230px] md:w-[280px]"
          />
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            Deutschsprachige Rechtsberatung auf Teneriffa
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">
            Mehrsprachige Rechtsberatung auf Teneriffa für internationale Mandanten.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">
            Unterstützung bei Immobilien, Aufenthalt, Unternehmen und Verträgen — mit einem klaren ersten Schritt für Mandanten, die vor Unterschrift, Umzug, Investition oder Strukturierung rechtliche Klarheit brauchen.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528] sm:px-6">Auf WhatsApp starten</a>
            <Link href="/de/services" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6">Leistungen ansehen</Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6"><span>Primär: WhatsApp</span><span>•</span><a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram</a><span>•</span><a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">E-Mail</a></div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">{trustPoints.map((item)=><div key={item} className="ui-card px-5 py-5 text-sm text-[#33404a]">{item}</div>)}</div>
        </div>
        <div className="space-y-4 sm:space-y-6"><div className="ui-card-dark p-6 text-white sm:p-8 md:p-10"><div className="relative z-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">Warum früher Kontakt wichtig ist</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Rechtliche Prüfung ist besonders wertvoll, bevor Dokumente unterschrieben und Zahlungen geleistet werden.</h2><p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">Viele internationale Mandanten brauchen Hilfe vor Reservierungsverträgen, vor Aufenthaltsprozessen, vor Unternehmensstrukturierung oder bevor sie Bedingungen zustimmen, die noch nicht klar genug sind.</p><div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">{['Prüfung vor Reservierungs- oder Kaufverträgen','Klarheit vor Aufenthalt und Relocation','Unterstützung vor Unternehmensstart oder Strukturierung','Dokumentenprüfung vor teuren Verpflichtungen'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">{item}</div>)}</div></div></div><div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10"><div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">Erste Nachricht</div><p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">Der schnellste Start ist eine kurze WhatsApp-Nachricht mit Thema, Zeitrahmen, Sprache und vorhandenen Unterlagen.</p></div></div>
      </section>
      <section className="ui-section ui-section-tint"><div className="grid gap-4 md:gap-6 lg:grid-cols-2"><div className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Wem Konomic hilft</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Gebaut rund um die rechtlichen Situationen, mit denen internationale Mandanten auf Teneriffa am häufigsten konfrontiert sind.</h2><div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">{['Ausländische Immobilienkäufer','Menschen im Umzug nach Teneriffa','Gründer und Unternehmer','Familien mit grenzüberschreitenden Rechtsfragen'].map((item)=><div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">{item}</div>)}</div></div><div className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Wie der Prozess beginnt</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Klare nächste Schritte schon ab der ersten Nachricht.</h2><ol className="mt-5 space-y-3 text-sm leading-7 text-[#59646e] md:mt-6 md:space-y-4 md:text-base">{processSteps.map((step,index)=><li key={step} className="flex gap-4"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-xs font-semibold text-white">0{index+1}</span><span>{step}</span></li>)}</ol></div></div></section>
      <section className="ui-section ui-section-cream"><div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between"><div><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Kernleistungen</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">Die rechtlichen Themen, bei denen Mandanten meist zuerst Hilfe brauchen.</h2></div><p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">Die öffentliche Leistungsstruktur konzentriert sich auf die Situationen, in denen frühe rechtliche Klarheit meist hilft, späteres Risiko zu vermeiden.</p></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">{serviceHighlights.map((service)=><article key={service.title} className="ui-card p-6 sm:p-7 md:p-9"><div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.text}</p><div className="mt-4 grid gap-2.5">{service.bullets.map((bullet)=><div key={bullet} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">{bullet}</div>)}</div><Link href={service.href} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">Leistungsdetails ansehen →</Link></article>)}</div></section>
      <section className="relative overflow-hidden border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" aria-hidden="true" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10"><div><div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">Typische Situationen</div><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Die Website sollte nützlich sein, bevor ein juristisches Problem teurer wird.</h2></div><div className="grid gap-4 sm:grid-cols-2">{clientSituations.map((item)=><div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/88">{item}</div>)}</div></div></section>
      <section className="ui-section ui-section-cool"><div className="max-w-3xl"><div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">FAQ</div><h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">Fragen, die am häufigsten vor dem ersten Kontakt auftauchen.</h2></div><div className="mt-8 grid gap-4 md:mt-10 md:gap-5">{faqItems.map((item)=><div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7"><h3 className="text-lg font-semibold tracking-tight">{item.q}</h3><p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p></div>)}</div></section>
    </main>
  );
}
