import { SectionIntro } from '@/components/SiteShell';

export default function AboutPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="About Konomic"
        title="Konomic Digital SL. for Tenerife’s international legal market"
        text="Konomic Digital SL. is presented as a premium multilingual legal support brand for foreign clients dealing with Tenerife property, relocation, business, contracts, and related legal matters."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Brand positioning</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">What sets the brand apart</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <li>• International-client-first communication.</li>
            <li>• Premium visual language instead of a dated brochure look.</li>
            <li>• Service structure designed around search intent and lead quality.</li>
            <li>• Clear entry points for property, relocation, business, and contracts.</li>
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-9">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Company transparency</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Public company profile</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80 md:text-base">
              <li>• Company name: Konomic Digital SL.</li>
              <li>• Public phone / WhatsApp is enabled</li>
              <li>• Public address is intentionally hidden</li>
              <li>• Public lawyer / team names are intentionally hidden</li>
              <li>• Legal notice, privacy, and terms pages are available</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
