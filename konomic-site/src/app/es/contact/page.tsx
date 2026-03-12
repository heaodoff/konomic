import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Contacto Konomic Digital SL. en Tenerife',
  description: 'Contacta con Konomic Digital SL. para asuntos de inmuebles, residencia, empresa, contratos y clientes internacionales en Tenerife.',
  alternates: { canonical: '/es/contact' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

export default function ContactPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Contacto" title="Contacta con Konomic Digital SL." text="Konomic Digital SL. utiliza un flujo de leads centrado en WhatsApp. Para la mayoría de nuevas consultas, WhatsApp es la vía más rápida y más clara." />
      <div className="mt-10 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium hover:bg-[#0d1528]">Empezar por WhatsApp</a>
        <a href="mailto:nikita.lukashok@gmail.com" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Enviar email</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Abrir Telegram</a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="ui-card-soft px-6 py-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Principal</div><h3 className="mt-3 text-lg font-semibold tracking-tight">WhatsApp</h3><p className="mt-2 text-sm leading-7 text-[#59646e]">La mejor opción para una nueva consulta y la respuesta más rápida.</p></div>
        <div className="ui-card-soft px-6 py-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Secundario</div><h3 className="mt-3 text-lg font-semibold tracking-tight">Telegram</h3><p className="mt-2 text-sm leading-7 text-[#59646e]">Útil si prefieres coordinarte por Telegram.</p></div>
        <div className="ui-card-soft px-6 py-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Documentos</div><h3 className="mt-3 text-lg font-semibold tracking-tight">Email</h3><p className="mt-2 text-sm leading-7 text-[#59646e]">La mejor opción para adjuntos, documentos y contexto más amplio.</p></div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
          <h2 className="text-2xl font-semibold tracking-tight">Datos públicos de contacto</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
            <li>• WhatsApp / teléfono: +34 643 319 719</li>
            <li>• Email: nikita.lukashok@gmail.com</li>
            <li>• Telegram: @nkitl0</li>
            <li>• Empresa: Konomic Digital SL.</li>
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Qué pasa después</h2>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base">
            <li>1. El cliente escribe primero, idealmente por WhatsApp</li>
            <li>2. El asunto se dirige al formato de consulta adecuado</li>
            <li>3. Si hace falta, los documentos se comparten por email o Telegram</li>
            <li>4. El caso pasa a consulta de pago o acompañamiento continuo</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
