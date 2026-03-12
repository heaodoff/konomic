import { SectionIntro } from '@/components/SiteShell';
import { localizeFaqs } from '@/content/site-locale';

export default function FaqPage() {
  const faqs = localizeFaqs('es');
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="FAQ" title="Preguntas frecuentes antes de contactar" text="Una buena sección de preguntas frecuentes reduce fricción, mejora la confianza y aclara los siguientes pasos para el cliente." />
      <div className="mt-12 grid gap-5">
        {faqs.map((item) => (
          <div key={item.q} className="ui-card px-6 py-6 md:px-7 md:py-7">
            <h2 className="text-lg font-semibold tracking-tight">{item.q}</h2>
            <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
