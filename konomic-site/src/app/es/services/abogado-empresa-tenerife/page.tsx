import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Abogado de empresa en Tenerife',
  description: 'Asistencia jurídica en Tenerife para apertura de empresa, estructura societaria, contratos comerciales y apoyo continuo a empresarios internacionales.',
  alternates: { canonical: '/es/services/abogado-empresa-tenerife' },
};

const bullets = [
  'Apoyo para abrir y estructurar empresa en España',
  'Acompañamiento en pactos entre socios y organización societaria',
  'Revisión de contratos comerciales y riesgos jurídicos',
  'Soporte continuo para empresarios y operadores internacionales',
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Empresa y estructura" title="Asistencia jurídica en Tenerife para empresa, emprendedores y proyectos internacionales" text="Esta página está pensada para clientes que quieren abrir, estructurar o operar un negocio en Tenerife con más seguridad jurídica. En muchos casos, el riesgo aparece en la intersección entre contratos, estructura y práctica local." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">En qué debe ayudar este servicio</h2><div className="mt-6 grid gap-3">{bullets.map((item) => <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div>
        <div className="ui-card-dark p-8 text-white md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Casos típicos</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base"><li>• Apertura de empresa en Tenerife o España</li><li>• Organización entre socios y reparto de roles</li><li>• Contratos con clientes o proveedores</li><li>• Acompañamiento jurídico recurrente para actividad internacional</li></ul></div>
      </div>
    </main>
  );
}
