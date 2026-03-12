import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Revisión de contratos en Tenerife',
  description:
    'Asistencia jurídica en Tenerife para revisión de contratos, documentación y control de riesgos antes de firmar o pagar.',
  alternates: { canonical: '/es/services/revision-contratos-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Contratos y documentos"
        title="Revisión de contratos en Tenerife antes de firmar, pagar o asumir obligaciones"
        text="Esta página está pensada para clientes que no quieren firmar un documento sin entender bien sus efectos jurídicos o económicos."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Situaciones habituales</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Antes de firmar un contrato inmobiliario, de alquiler, de servicios o comercial</li><li>• Cuando el documento está en otro idioma y necesita revisión más clara</li><li>• Cuando el efecto jurídico o económico del texto no está del todo claro</li><li>• Cuando lo más seguro es revisar antes de comprometerse</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Qué puede ayudar a revisar</h2><div className="mt-6 grid gap-3">{['Contratos de compraventa y alquiler','Acuerdos comerciales y de servicios','Revisión bilingüe de documentos','Clarificación temprana de obligaciones y riesgo'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Qué conviene enviar primero</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Lo más útil suele ser un WhatsApp breve junto con el borrador del contrato o documento, explicando qué preocupa más y cuándo está previsto firmarlo.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Empezar revisión de contrato</a></div>
    </main>
  );
}
