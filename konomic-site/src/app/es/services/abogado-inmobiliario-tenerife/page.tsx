import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Abogado inmobiliario en Tenerife',
  description: 'Asistencia jurídica en Tenerife para compra de inmuebles, due diligence, revisión de contratos y reducción de riesgos para compradores internacionales.',
  alternates: { canonical: '/es/services/abogado-inmobiliario-tenerife' },
};

const bullets = [
  'Revisión previa a la compra y al contrato de reserva',
  'Comprobación de titularidad, cargas y deudas',
  'Revisión de licencias, documentación y riesgos ocultos',
  'Apoyo para compradores, vendedores e inversores',
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Inmuebles" title="Abogado inmobiliario en Tenerife para compradores e inversores internacionales" text="Esta página está pensada para clientes que necesitan claridad jurídica antes de pagar una señal, firmar un contrato de reserva o cerrar una compraventa. En Tenerife, el problema muchas veces no es el precio, sino lo que no se revisó a tiempo." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">En qué debe ayudar este servicio</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="ui-card-dark p-8 text-white md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Casos típicos</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base"><li>• Compra de apartamento, casa o villa en Tenerife</li><li>• Revisión antes de pagar una señal</li><li>• Apoyo para inversores extranjeros</li><li>• Incidencias con licencias, deudas o documentación</li></ul></div>
      </div>
    </main>
  );
}
