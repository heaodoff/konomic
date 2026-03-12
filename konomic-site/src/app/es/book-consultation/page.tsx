import { SectionIntro } from '@/components/SiteShell';

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Consulta" title="Elegir la consulta adecuada debería ser simple" text="La entrada principal es WhatsApp, pero esta página ayuda a orientar al cliente antes de iniciar la conversación." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {['Revisión legal rápida', 'Chequeo legal para compra de inmueble', 'Consulta inicial para traslado', 'Consulta para estructura empresarial'].map((title) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Formato de consulta</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">Consulta orientativa preparada para clientes internacionales en Tenerife.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
