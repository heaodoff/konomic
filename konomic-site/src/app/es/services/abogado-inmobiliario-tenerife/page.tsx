import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Abogado inmobiliario en Tenerife',
  description:
    'Asistencia jurídica en Tenerife para compra de inmuebles, revisión documental, due diligence y reducción de riesgos para compradores internacionales.',
  alternates: { canonical: '/es/services/abogado-inmobiliario-tenerife' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'Antes de firmar una reserva o un contrato de compraventa',
  'Antes de pagar una señal o transferir una cantidad relevante',
  'Cuando la situación documental del inmueble no está clara',
  'Cuando un comprador extranjero quiere revisar riesgos antes de comprometerse',
];

const checks = [
  'Revisión de reserva, compraventa y documentación relacionada',
  'Due diligence antes de comprar cuando resulte relevante',
  'Comprobación de titularidad, cargas, deudas, licencias y riesgo de operación',
  'Detección temprana de puntos que conviene aclarar antes de firmar',
];

const firstMessage = [
  'Ubicación del inmueble o referencia del anuncio',
  'Si ya existe reserva o documento de compraventa',
  'Si ya se ha pedido o pagado una señal',
  'Plazo y lugar donde se encuentra ahora el cliente',
  'Cualquier documento ya disponible para revisar',
];

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Servicio inmobiliario"
        title="Abogado inmobiliario en Tenerife para compradores e inversores internacionales"
        text="Esta página está pensada para clientes que necesitan claridad jurídica antes de pagar una señal, firmar una reserva o avanzar con una compraventa en Tenerife."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Situaciones habituales</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Cuándo suele tener sentido consultar</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Por qué importa revisar pronto</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">En operaciones inmobiliarias, el mejor momento para revisar suele ser antes de comprometer dinero</h2>
            <p className="mt-4 text-sm leading-7 text-white/82 md:text-base">
              En muchas compras, el paso legal más útil ocurre antes de firmar una reserva, antes de transferir una señal o antes de asumir que toda la documentación ya está suficientemente clara.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Qué puede cubrir este servicio</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Puntos de revisión habituales antes de una decisión inmobiliaria</h2>
          <div className="mt-6 grid gap-3">
            {checks.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Qué conviene enviar primero</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Un primer mensaje práctico hace la revisión más útil</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            Empezar consulta inmobiliaria
          </a>
        </div>
      </div>

      <div className="mt-12 ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
        <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Siguiente paso</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">Si ya existe un documento, lo más útil suele ser revisarlo antes de firmar</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#56616b] md:text-base">
          Si la operación ya está en marcha y existe una reserva, una compraventa o documentación relacionada, el primer paso más claro suele ser escribir por WhatsApp y después compartir el documento para una revisión estructurada.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Enviar primer mensaje</a>
          <Link href="/es/contact" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Ver opciones de contacto</Link>
        </div>
      </div>
    </main>
  );
}
