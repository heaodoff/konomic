import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Reservar consulta jurídica en Tenerife',
  description:
    'Elige el tipo de consulta adecuado para inmuebles, residencia, empresa o revisión legal de documentos en Tenerife.',
  alternates: { canonical: '/es/book-consultation' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const offers = [
  ['Revisión legal rápida', 'La mejor opción para documentos, contratos y revisión temprana de riesgos antes de firmar o pagar.'],
  ['Chequeo legal para compra de inmueble', 'Útil para compradores antes de reservas, señales o problemas de due diligence.'],
  ['Consulta inicial para traslado', 'Pensada para residencia, documentación y planificación del traslado a Tenerife.'],
  ['Consulta para estructura empresarial', 'Para fundadores y empresarios que abren o estructuran actividad en España.'],
];

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Consulta" title="Elegir la consulta adecuada y pasar después a WhatsApp" text="Konomic Digital SL. utiliza una entrada principal por WhatsApp. Así el primer paso resulta más rápido, más directo y más fácil para clientes internacionales que quieren claridad sin espera innecesaria." />
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Empezar por WhatsApp</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Abrir Telegram</a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {offers.map(([title, text]) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Formato de consulta</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d] px-5 py-2 text-sm font-medium text-[#14213d] hover:bg-[#14213d] hover:text-white">Empezar por WhatsApp</a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-2 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Telegram</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
