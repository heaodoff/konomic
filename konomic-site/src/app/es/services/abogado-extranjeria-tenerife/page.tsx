import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Abogado de extranjería en Tenerife',
  description: 'Asistencia jurídica en Tenerife para residencia, extranjería, documentación, trámites locales y traslado a España.',
  alternates: { canonical: '/es/services/abogado-extranjeria-tenerife' },
};

const bullets = [
  'Orientación sobre residencia, extranjería y documentación',
  'Apoyo con NIE, TIE y trámites locales',
  'Acompañamiento en procesos de traslado y reunificación',
  'Preparación antes de llegar a Tenerife',
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Residencia y extranjería" title="Asistencia jurídica en Tenerife para residencia, documentación y traslado" text="Esta página está orientada a clientes que necesitan un inicio claro para mudarse a Tenerife o regularizar su situación. Los errores suelen aparecer antes del trámite oficial, cuando no está claro qué documentos hacen falta ni en qué orden actuar." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">En qué debe ayudar este servicio</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="ui-card-dark p-8 text-white md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Casos típicos</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base"><li>• Traslado a Tenerife como persona individual o familia</li><li>• Definir la vía de residencia y el paquete documental</li><li>• Preparación antes de llegar a España</li><li>• Apoyo en los pasos locales posteriores al traslado</li></ul></div>
      </div>
    </main>
  );
}
