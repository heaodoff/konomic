import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Abogado de extranjería en Tenerife',
  description:
    'Asistencia jurídica en Tenerife para residencia, extranjería, documentación, trámites locales y traslado a España.',
  alternates: { canonical: '/es/services/abogado-extranjeria-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Residencia y extranjería"
        title="Asistencia jurídica en Tenerife para residencia, documentación y traslado"
        text="Esta página está pensada para clientes que necesitan un inicio más claro para mudarse a Tenerife o resolver dudas sobre residencia, documentación local y primeros pasos legales en España."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="ui-card p-8 md:p-10"><h2 className="text-2xl font-semibold tracking-tight">Situaciones habituales</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Antes de mudarse a Tenerife</li><li>• Cuando no está claro qué vía de residencia corresponde</li><li>• Cuando la documentación o los pasos locales generan confusión</li><li>• Cuando el proceso tiene que empezar desde fuera de España</li></ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><h2 className="text-2xl font-semibold tracking-tight">Qué puede ayudar a aclarar pronto</h2><div className="mt-6 grid gap-3">{['Orientación sobre residencia y traslado','Contexto sobre NIE / TIE y documentación local','Preguntas de reunificación o traslado familiar','Primer paso remoto cuando sea útil'].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">{item}</div>)}</div></div></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><h2 className="text-2xl font-semibold tracking-tight">Qué conviene enviar primero</h2><p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">Lo más útil suele ser indicar desde dónde empieza el cliente, qué tipo de situación de residencia o traslado tiene, cuál es el plazo y si ya existe documentación.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-6 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Empezar consulta de residencia</a></div>
    </main>
  );
}
