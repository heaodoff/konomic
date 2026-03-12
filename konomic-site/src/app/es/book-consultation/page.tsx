import { SectionIntro } from '@/components/SiteShell';

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

export default function BookConsultationPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Consulta" title="Elegir la consulta adecuada debería ser simple" text="La entrada principal es WhatsApp, pero esta página ayuda a orientar al cliente antes de iniciar la conversación." />
      <div className="mt-8 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium hover:bg-[#0d1528]">Empezar por WhatsApp</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Abrir Telegram</a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {['Revisión legal rápida', 'Chequeo legal para compra de inmueble', 'Consulta inicial para traslado', 'Consulta para estructura empresarial'].map((title) => (
          <div key={title} className="ui-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Formato de consulta</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">Consulta orientativa preparada para clientes internacionales en Tenerife.</p>
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
