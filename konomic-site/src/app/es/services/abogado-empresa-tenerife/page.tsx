import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Abogado de empresa en Tenerife',
  description:
    'Asistencia jurídica en Tenerife para apertura de empresa, estructura societaria, contratos comerciales y apoyo continuo a empresarios internacionales.',
  alternates: { canonical: '/es/services/abogado-empresa-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Empresa y estructura"
        title="Asistencia jurídica en Tenerife para empresa, emprendedores y proyectos internacionales"
        text="Esta página está pensada para clientes que quieren abrir, estructurar o operar un negocio en Tenerife con más claridad jurídica antes de asumir errores societarios o contractuales."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Situaciones habituales</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Antes de abrir o estructurar una empresa en España</li><li>• Cuando hace falta ordenar acuerdos entre socios</li><li>• Cuando contratos mercantiles necesitan revisión</li><li>• Cuando un operador extranjero quiere empezar con menos riesgo estructural</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Qué puede incluir este servicio</h2><div className="mt-6 grid gap-3">{['Constitución y estructura de empresa','Acuerdos entre socios o partners','Revisión de contratos mercantiles','Claridad jurídica temprana antes de operar'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Primer paso útil</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">El primer mensaje debería explicar qué tipo de estructura o actividad se quiere poner en marcha, si ya hay borradores o acuerdos y qué plazo importa más.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Empezar consulta de empresa</a></div>
    </main>
  );
}
