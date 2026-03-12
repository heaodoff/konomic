import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Revisión de contratos en Tenerife',
  description: 'Asistencia jurídica en Tenerife para revisión de contratos, documentación y control de riesgos antes de firmar o pagar.',
  alternates: { canonical: '/es/services/revision-contratos-tenerife' },
};

const bullets = [
  'Revisión de contratos de compraventa, alquiler y servicios',
  'Detección de riesgos antes de firmar o pagar',
  'Apoyo en redacción y ajustes de condiciones',
  'Más claridad para clientes extranjeros antes de asumir obligaciones',
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Contratos y documentos" title="Revisión de contratos en Tenerife antes de firmar, pagar o asumir obligaciones" text="Esta página está pensada para clientes que no quieren firmar un documento sin entender sus consecuencias jurídicas. En inmuebles, empresa y servicios, muchos problemas empiezan justo cuando un contrato se acepta demasiado rápido." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">En qué debe ayudar este servicio</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="ui-card-dark p-8 text-white md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Casos típicos</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base"><li>• Contrato inmobiliario o contrato de reserva</li><li>• Contrato de alquiler o de uso</li><li>• Contrato comercial con cliente o proveedor</li><li>• Revisión previa a un pago o compromiso relevante</li></ul></div>
      </div>
    </main>
  );
}
