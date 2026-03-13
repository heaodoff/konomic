import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asistencia jurídica en Tenerife en español',
  description:
    'Asistencia jurídica multilingüe en Tenerife para clientes extranjeros con asuntos de inmuebles, residencia, empresa y contratos.',
  alternates: {
    canonical: '/es',
    languages: { en: '/en', de: '/de', ru: '/ru', uk: '/uk', es: '/es', 'x-default': '/en' },
  },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

const trustPoints = [
  'Enfoque pensado para clientes internacionales en Tenerife',
  'Útil antes de firmar, trasladarse o invertir',
  'Posibilidad de compartir documentos por adelantado',
  'WhatsApp como primer canal de contacto',
];

const processSteps = [
  'Envía el primer mensaje por WhatsApp con un resumen breve del asunto.',
  'Comparte documentos, plazo y si ya se ha firmado o pagado algo.',
  'El asunto se revisa y se dirige al tipo de consulta o revisión más adecuado.',
  'Se definen los siguientes pasos de forma clara para que el cliente sepa qué preparar.',
];

const serviceHighlights = [
  {
    title: 'Asistencia jurídica inmobiliaria',
    eyebrow: 'Para compradores, inversores y propietarios',
    text: 'Revisión legal antes de contratos de reserva, compraventa, pagos y decisiones inmobiliarias en Tenerife.',
    bullets: ['Due diligence antes de comprar', 'Revisión contractual antes de firmar', 'Comprobación de cargas, deudas y licencias'],
    href: '/es/services/abogado-inmobiliario-tenerife',
  },
  {
    title: 'Residencia, inmigración y traslado',
    eyebrow: 'Para quienes se mudan a Tenerife',
    text: 'Apoyo jurídico para residencia, documentación local y preparación legal antes o después de la llegada.',
    bullets: ['Orientación sobre residencia y traslado', 'NIE / TIE y trámites locales', 'Primer paso remoto cuando sea útil'],
    href: '/es/services/abogado-extranjeria-tenerife',
  },
  {
    title: 'Empresa y estructura societaria',
    eyebrow: 'Para fundadores y operadores',
    text: 'Apoyo jurídico para emprendedores extranjeros, estructura de empresa, documentos mercantiles y actividad en España.',
    bullets: ['Apoyo en constitución y estructura', 'Acuerdos entre socios', 'Contratos mercantiles y organización'],
    href: '/es/services/abogado-empresa-tenerife',
  },
  {
    title: 'Revisión de contratos y documentos legales',
    eyebrow: 'Para quien necesita claridad antes de firmar',
    text: 'Revisión de contratos y documentos antes de asumir obligaciones, transferir dinero o cerrar riesgos.',
    bullets: ['Contratos de compraventa y alquiler', 'Acuerdos comerciales y de servicios', 'Revisión bilingüe de documentación'],
    href: '/es/services/revision-contratos-tenerife',
  },
];

const clientSituations = [
  'Comprar un inmueble en Tenerife y querer revisión legal antes de entregar una señal',
  'Mudarse a España y necesitar claridad sobre residencia o documentación',
  'Poner en marcha una empresa o estructurar actividad como fundador extranjero',
  'Revisar un contrato antes de firmarlo o de transferir dinero',
  'Enviar documentos desde el extranjero antes de llegar a Tenerife',
  'Necesitar una orientación jurídica clara antes de cometer un error costoso',
];

const faqItems = [
  {
    q: '¿Hace falta estar en Tenerife para empezar?',
    a: 'No siempre. Muchas consultas pueden empezar en remoto, especialmente cuando lo importante es revisar documentos o aclarar el siguiente paso antes de viajar o firmar.',
  },
  {
    q: '¿Se puede revisar un contrato antes de firmarlo?',
    a: 'Sí. De hecho, esa suele ser una de las razones más útiles para contactar pronto. Revisar antes de firmar suele ser más valioso que intentar corregir el problema después.',
  },
  {
    q: '¿Trabajan con compradores extranjeros de inmuebles?',
    a: 'Sí. Los asuntos inmobiliarios son uno de los pilares principales de la web, sobre todo para compradores e inversores extranjeros que quieren revisar riesgos antes de comprometer fondos.',
  },
  {
    q: '¿Puedo enviar documentos antes de una consulta?',
    a: 'Sí, cuando tenga sentido. Si ya existen documentos, normalmente se pueden compartir después del primer mensaje para que la revisión sea más útil y ordenada.',
  },
  {
    q: '¿Qué conviene escribir en el primer WhatsApp?',
    a: 'Un resumen breve del asunto, si ya se ha firmado o pagado algo, el plazo o urgencia, el idioma preferido y si existe algún documento para revisar.',
  },
  {
    q: '¿Qué canales de contacto son mejores?',
    a: 'WhatsApp es el canal principal porque suele ser el más rápido y claro. Telegram sirve para coordinación escrita y email es mejor para documentos o explicaciones más largas.',
  },
];

export default function EsHomePage() {
  return (
    <main>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 lg:py-24">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(252,163,17,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(20,33,61,0.07),transparent_28%)]"
          aria-hidden="true"
        />
        <div className="flex flex-col justify-center">
          <Image
            src="/konomic-logo.png"
            alt="Logotipo de Konomic"
            width={420}
            height={175}
            priority
            className="mb-6 h-auto w-[190px] sm:w-[230px] md:w-[280px]"
          />
          <div className="ui-accent-chip mb-4 inline-flex w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            Asistencia jurídica en Tenerife para clientes internacionales
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-7xl">
            Asistencia jurídica multilingüe en Tenerife para clientes extranjeros.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#516074] sm:text-lg md:text-xl md:leading-8">
            Apoyo para inmuebles, residencia, empresa y contratos, con un primer paso claro para quienes necesitan seguridad jurídica antes de firmar, trasladarse, invertir o estructurar actividad en España.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528] sm:px-6"
            >
              Empezar por WhatsApp
            </a>
            <Link
              href="/es/services"
              className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white/88 px-5 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45 sm:px-6"
            >
              Ver servicios
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#58636d] sm:mt-6">
            <span>Principal: WhatsApp</span>
            <span>•</span>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">
              Telegram
            </a>
            <span>•</span>
            <a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">
              Email
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {trustPoints.map((item) => (
              <div key={item} className="ui-card px-5 py-5 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="ui-card-dark p-6 text-white sm:p-8 md:p-10">
            <div className="relative z-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#fca311] sm:text-xs sm:tracking-[0.28em]">
                Por qué conviene consultar pronto
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                La revisión legal es más útil antes de firmar documentos o comprometer dinero.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">
                Muchas personas necesitan ayuda antes de una reserva, antes de una compra, antes de iniciar trámites de residencia o antes de cerrar una estructura empresarial que todavía no entienden bien.
              </p>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {[
                  'Revisión antes de contratos de reserva o compraventa',
                  'Claridad antes de residencia y traslado',
                  'Apoyo antes de iniciar o estructurar una empresa',
                  'Revisión documental antes de asumir obligaciones costosas',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/88">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ui-card-soft rounded-[1.5rem] px-6 py-6 sm:rounded-[2rem] sm:px-8 sm:py-7 md:px-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#9a6200] sm:text-xs sm:tracking-[0.3em]">
              Primer mensaje
            </div>
            <p className="mt-3 text-sm leading-7 text-[#516074] sm:text-base sm:leading-8">
              La forma más rápida de empezar es un WhatsApp breve con el asunto, el plazo, el idioma y cualquier documento que ya exista.
            </p>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-tint">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">A quién ayuda Konomic</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Pensado para las situaciones legales que los clientes extranjeros afrontan con más frecuencia en Tenerife.
            </h2>
            <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
              {[
                'Compradores extranjeros de inmuebles',
                'Personas que se trasladan a Tenerife',
                'Fundadores y empresarios',
                'Familias con cuestiones legales transfronterizas',
              ].map((item) => (
                <div key={item} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="ui-card p-6 sm:p-7 md:p-9">
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Cómo empieza el proceso</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Siguientes pasos claros desde el primer mensaje.
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[#59646e] md:mt-6 md:space-y-4 md:text-base">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14213d] text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-cream">
        <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">Servicios principales</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
              Los asuntos legales con los que más a menudo conviene empezar.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#59646e] md:text-base">
            La estructura pública se centra en las situaciones donde la claridad jurídica temprana suele evitar más riesgo después.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-2">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="ui-card p-6 sm:p-7 md:p-9">
              <div className="text-xs uppercase tracking-[0.25em] text-[#9a6200]">{service.eyebrow}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{service.text}</p>
              <div className="mt-4 grid gap-2.5">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="ui-card-soft px-4 py-3 text-sm text-[#33404a]">
                    {bullet}
                  </div>
                ))}
              </div>
              <Link href={service.href} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">
                Ver detalles del servicio →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#14213d]/8 bg-[#14213d] py-18 text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,163,17,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#fca311]">Situaciones habituales</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              La web debe ser útil antes de que el problema jurídico se vuelva más caro.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clientSituations.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/88">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section ui-section-cool">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">FAQ</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
            Preguntas que suelen aparecer antes del primer contacto.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-5">
          {faqItems.map((item) => (
            <div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">
              <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
