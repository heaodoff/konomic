import { SectionIntro } from '@/components/SiteShell';

const audiencePoints = [
  'Compradores e inversores extranjeros en inmuebles',
  'Personas que se trasladan a Tenerife y necesitan claridad sobre residencia o documentación',
  'Fundadores y empresarios que estructuran actividad en España',
  'Clientes que necesitan revisar contratos antes de firmar o pagar',
];

const workflowPoints = [
  'El primer contacto suele empezar por WhatsApp con un resumen breve del asunto.',
  'Si ya existen documentos, pueden compartirse por adelantado.',
  'El asunto se revisa y se dirige al tipo de consulta o revisión jurídica más adecuado.',
  'Los siguientes pasos se definen con claridad para que el cliente sepa qué preparar y qué viene después.',
];

const trustPoints = [
  'Nombre de la empresa: Konomic Digital SL.',
  'WhatsApp, Telegram y email públicos disponibles.',
  'La web está pensada para comunicación multilingüe con clientes internacionales.',
  'Aviso legal, privacidad y términos disponibles.',
];

export default function AboutPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Sobre Konomic"
        title="Asistencia jurídica en Tenerife para clientes extranjeros que necesitan claridad antes de mudarse, firmar o invertir"
        text="Konomic Digital SL. está estructurado alrededor de los asuntos legales que los clientes internacionales suelen necesitar con más frecuencia en Tenerife: inmuebles, residencia, empresa, contratos y cuestiones transfronterizas relacionadas."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Para quién está pensado</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Un punto de entrada práctico para las situaciones que más se repiten</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {audiencePoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="ui-card-dark p-8 text-white md:p-9">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Cómo funciona</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Primer contacto claro, siguientes pasos claros</h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-white/82 md:text-base">
              {workflowPoints.map((item, index) => (
                <li key={item}>{index + 1}. {item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Por qué este modelo importa</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Muchos problemas legales se vuelven más caros cuando se revisan demasiado tarde</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <p>
              Muchos clientes extranjeros necesitan claridad antes de firmar una reserva, antes de pagar, antes de iniciar trámites de residencia o antes de poner en marcha una estructura empresarial que todavía no comprenden del todo.
            </p>
            <p>
              Por eso la web se construye alrededor de revisión temprana, primer contacto estructurado y comunicación multilingüe que haga el proceso más comprensible desde el inicio.
            </p>
            <p>
              Cuando tiene sentido, el primer paso puede comenzar en remoto, lo que resulta útil para clientes que aún están fuera de Tenerife y necesitan revisar documentos antes de llegar.
            </p>
          </div>
        </div>

        <div className="ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Capa pública de confianza</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Qué está disponible públicamente</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {trustPoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
