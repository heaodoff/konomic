import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Cómo funciona Konomic',
  description:
    'Cómo gestiona Konomic el primer contacto, la revisión inicial, los documentos, la comunicación multilingüe y el inicio remoto para clientes internacionales en Tenerife.',
  alternates: { canonical: '/es/how-we-work' },
};

const firstContact = [
  'Para la mayoría de nuevos asuntos, el primer mensaje debería empezar por WhatsApp.',
  'Un resumen breve suele ser suficiente si el asunto todavía está en fase temprana.',
  'Si ya existen documentos, normalmente pueden compartirse después del primer contacto.',
];
const reviewLogic = [
  'El asunto se revisa en una fase temprana para identificar el siguiente paso correcto.',
  'El objetivo es crear claridad antes de que el problema se vuelva más caro o más complejo.',
  'El primer resultado útil normalmente no es “todo está resuelto”, sino un camino legal más claro.',
];
const documents = [
  'Borradores de contrato o contratos ya firmados',
  'Documentos de inmueble o referencias del anuncio',
  'Papeles de residencia o registros locales',
  'Borradores societarios, acuerdos o documentos comerciales',
];
const remotePoints = [
  'Muchos clientes internacionales empiezan antes de llegar a Tenerife.',
  'La revisión documental puede comenzar en remoto cuando sea relevante.',
  'WhatsApp, Telegram y email permiten una coordinación inicial práctica.',
];
const processSteps = [
  'El cliente envía el primer mensaje, normalmente por WhatsApp.',
  'Se revisa el asunto y se identifica el formato de consulta o revisión más adecuado.',
  'Si hace falta, los documentos se comparten por adelantado.',
  'Se define el siguiente paso con claridad para saber qué importa ahora y qué puede esperar.',
];

export default function HowWeWorkPage() {
  return (
    <main className="ui-section ui-section-cool">
      <SectionIntro eyebrow="Cómo trabajamos" title="Un proceso más claro para clientes internacionales con asuntos legales en Tenerife" text="Esta página explica cómo Konomic gestiona el primer contacto, la revisión temprana, los documentos, el flujo de consulta y la comunicación multilingüe para clientes que necesitan claridad legal antes de firmar, trasladarse, invertir o estructurar actividad." />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2"><div className="ui-card p-8 md:p-10"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Primer contacto</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Empezar con un mensaje breve, no con un intake largo</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">{firstContact.map((item)=><li key={item}>• {item}</li>)}</ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Revisión temprana</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">El primer objetivo es claridad, no complejidad</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-white/82 md:text-base">{reviewLogic.map((item)=><li key={item}>• {item}</li>)}</ul></div></div></div><div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"><div className="ui-card p-8 md:p-10"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Documentos</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Qué suelen enviar los clientes antes del siguiente paso</h2><div className="mt-6 grid gap-3">{documents.map((item)=><div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div><div className="ui-card p-8 md:p-10"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Proceso remoto</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Útil para clientes que todavía están fuera</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">{remotePoints.map((item)=><li key={item}>• {item}</li>)}</ul></div></div><div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Cómo suele funcionar el flujo</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Un proceso legal práctico desde el primer mensaje hasta el siguiente paso</h2><ol className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">{processSteps.map((item,index)=><li key={item}>{index+1}. {item}</li>)}</ol></div>
    </main>
  );
}
