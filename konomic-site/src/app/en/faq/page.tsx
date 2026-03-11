import { SectionIntro } from '@/components/SiteShell';
import { faqs } from '@/content/site';

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="FAQ"
        title="The questions that remove friction before a client contacts you"
        text="A good legal FAQ helps both conversion and SEO. This section is meant to answer the practical questions international clients ask before committing to a consultation."
      />
      <div className="mt-12 grid gap-5">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-[1.5rem] border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
            <h2 className="text-lg font-semibold tracking-tight">{item.q}</h2>
            <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
