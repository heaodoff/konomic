import { SectionIntro } from '@/components/SiteShell';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="About Konomic"
        title="A stronger legal brand for Tenerife’s international market"
        text="Konomic is being shaped as a premium multilingual legal support brand for foreign clients who need clarity, speed, and trust when dealing with Tenerife property, relocation, business, and legal matters."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">What makes the positioning different</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <li>• International-client-first communication, not generic local legal copy.</li>
            <li>• Premium visual language instead of a dated brochure look.</li>
            <li>• Service structure designed around search intent and lead quality.</li>
            <li>• Clear entry points for property, relocation, business, and contracts.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
          <h2 className="text-2xl font-semibold tracking-tight">What is still needed before launch</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80 md:text-base">
            <li>• Real company description and public-facing legal positioning.</li>
            <li>• Confirmed team, lawyer credentials, and compliance-safe copy.</li>
            <li>• Official contact details, address, and lead channels.</li>
            <li>• Final legal review before publication and SEO rollout.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
