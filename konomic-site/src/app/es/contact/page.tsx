import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Contacto Konomic Digital SL. en Tenerife',
  description:
    'Contacta con Konomic Digital SL. para asuntos de inmuebles, residencia, empresa, contratos y clientes internacionales en Tenerife.',
  alternates: { canonical: '/es/contact' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const firstMessageChecklist = [
  'De qué trata el asunto',
  'Si ya se ha firmado o pagado algo',
  'Plazo o urgencia',
  'Idioma preferido',
  'Si ya existe algún documento para revisar',
];

const channelGuide = [
  {
    title: 'WhatsApp',
    eyebrow: 'Principal',
    text: 'La mejor vía para una nueva consulta, una respuesta más rápida y un primer paso más claro.',
  },
  {
    title: 'Telegram',
    eyebrow: 'Secundario',
    text: 'Útil si prefieres Telegram para coordinación escrita o seguimiento breve.',
  },
  {
    title: 'Email',
    eyebrow: 'Documentos',
    text: 'La mejor opción cuando necesitas adjuntar archivos, más contexto o varios documentos.',
  },
];

const processSteps = [
  'El primer mensaje suele empezar por WhatsApp.',
  'El asunto se revisa y se dirige al tipo de consulta o revisión jurídica más adecuado.',
  'Si hace falta, los documentos pueden compartirse por email o mensajería antes de continuar.',
  'Se definen los siguientes pasos con claridad para que el cliente sepa qué preparar y qué viene después.',
];

export default function ContactPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Contacto"
        title="Contacta con Konomic Digital SL."
        text="Para la mayoría de nuevas consultas, WhatsApp es la vía más rápida y más clara. Email es mejor cuando hay que adjuntar documentos, y Telegram puede servir si ese canal resulta más cómodo para coordinarse por escrito."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
        >
          Empezar por WhatsApp
        </a>
        <a
          href="mailto:nikita.lukashok@gmail.com"
          className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45"
        >
          Enviar email
        </a>
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45"
        >
          Abrir Telegram
        </a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {channelGuide.map((item) => (
          <div key={item.title} className="ui-card-soft px-6 py-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">{item.eyebrow}</div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#59646e]">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-6 sm:p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Primer mensaje</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Qué conviene incluir en la primera consulta</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
            Un mensaje breve y ordenado suele hacer que la primera revisión sea más rápida y más útil. Si ya existen documentos, se pueden compartir después del primer contacto.
          </p>
          <div className="mt-6 grid gap-3">
            {firstMessageChecklist.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-[#14213d]/8 bg-[#fffdfa] px-5 py-5 sm:px-6 sm:py-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Plantilla sugerida para WhatsApp</div>
            <div className="mt-4 text-sm leading-7 text-[#47515a] md:text-base">
              Hola. Necesito ayuda legal con [inmuebles / residencia / empresa / contrato]. Ahora mismo estoy en [país / lugar]. El asunto es [descripción breve]. [Todavía no he firmado nada / ya existe un documento firmado]. Mi idioma preferido es [idioma]. Mi plazo es [plazo].
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-md text-xs leading-6 text-[#67727c]">
              Si el asunto es urgente o hay un plazo cercano, lo mejor es empezar por WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
            >
              Enviar por WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="ui-card-soft rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
            <h2 className="text-2xl font-semibold tracking-tight">Datos públicos de contacto</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
              <li>• WhatsApp / teléfono: +34 643 319 719</li>
              <li>• Email: nikita.lukashok@gmail.com</li>
              <li>• Telegram: @nkitl0</li>
              <li>• Empresa: Konomic Digital SL.</li>
            </ul>
          </div>
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Flujo del cliente</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Qué ocurre después</h2>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base">
                {processSteps.map((item, index) => (
                  <li key={item}>{index + 1}. {item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
