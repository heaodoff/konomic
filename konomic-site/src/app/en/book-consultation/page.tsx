import { SectionIntro } from '@/components/SiteShell';

export default function BookConsultationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Consultation"
        title="A productized consultation page should make hiring feel simple"
        text="Instead of an empty contact form, Konomic should offer clear starting points: legal review, property purchase check, relocation consultation, or business setup consultation."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          ['Fast Legal Review', 'Best for documents, contracts, and early risk checks before signing or paying.'],
          ['Property Purchase Legal Check', 'Useful for buyers before reservation contracts, deposits, or due diligence gaps create problems.'],
          ['Relocation Legal Starter Consultation', 'Ideal for residency, documents, and moving-to-Tenerife planning.'],
          ['Business Setup Consultation', 'For founders and foreign owners opening or structuring business activity in Spain.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[1.75rem] border border-black/5 bg-white/90 p-7 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
