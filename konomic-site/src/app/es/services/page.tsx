import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Servicios jurídicos en Tenerife',
  description:
    'Asistencia jurídica multilingüe en Tenerife para clientes extranjeros con asuntos de inmuebles, residencia, empresa, contratos, herencias y conflictos.',
  alternates: { canonical: '/es/services' },
};

const serviceBlocks = [
  {
    href: '/es/services/abogado-inmobiliario-tenerife',
    title: 'Asistencia jurídica inmobiliaria',
    label: 'Habitual antes de comprar o pagar',
    summary:
      'Apoyo legal para compradores extranjeros, inversores, vendedores y propietarios que necesitan revisión antes de reservar, pagar o firmar en Tenerife.',
    situations: [
      'Antes de firmar una reserva o una compraventa',
      'Antes de transferir una señal o una cantidad importante',
      'Cuando hay dudas sobre documentos, cargas o licencias',
    ],
    bullets: ['Due diligence antes de comprar', 'Revisión contractual previa a la firma', 'Comprobación de riesgos documentales'],
  },
  {
    href: '/es/services/abogado-extranjeria-tenerife',
    title: 'Residencia, inmigración y traslado',
    label: 'Habitual antes de mudarse',
    summary:
      'Orientación jurídica para personas que se trasladan a Tenerife o necesitan claridad sobre residencia, documentación local y primeros pasos legales en España.',
    situations: [
      'Antes de mudarse a Tenerife',
      'Cuando residencia o documentación no están claros',
      'Cuando el proceso debe empezar desde el extranjero',
    ],
    bullets: ['Residencia y traslado', 'NIE / TIE y trámites locales', 'Primer paso remoto cuando sea útil'],
  },
  {
    href: '/es/services/abogado-empresa-tenerife',
    title: 'Empresa y estructura societaria',
    label: 'Habitual para fundadores y operadores',
    summary:
      'Apoyo legal para fundadores extranjeros, estructura empresarial, documentación mercantil y puesta en marcha de actividad en España.',
    situations: [
      'Antes de empezar una estructura empresarial en España',
      'Cuando socios o fundadores necesitan acuerdos claros',
      'Cuando hace falta revisar contratos mercantiles',
    ],
    bullets: ['Constitución y estructura', 'Acuerdos entre socios', 'Contratos y organización mercantil'],
  },
  {
    href: '/es/services/revision-contratos-tenerife',
    title: 'Revisión de contratos y documentos legales',
    label: 'Habitual antes de firmar',
    summary:
      'Revisión de contratos y documentos antes de asumir obligaciones, transferir dinero o aceptar riesgos que todavía no están claros.',
    situations: [
      'Antes de firmar contratos con riesgo económico o legal',
      'Cuando un contrato bilingüe necesita revisión',
      'Cuando hay que entender bien obligaciones antes de comprometerse',
    ],
    bullets: ['Contratos de compraventa y alquiler', 'Acuerdos comerciales y de servicios', 'Revisión bilingüe de documentación'],
  },
];

const secondaryServices = [
  'Herencias, sucesiones y coordinación transfronteriza',
  'Conflictos civiles y disputas contractuales',
  'Apoyo legal cuando un problema ya existe y necesita revisión temprana',
];

export default function Page() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Servicios"
        title="Servicios jurídicos para los asuntos con los que más a menudo conviene empezar en Tenerife"
        text="La estructura pública se centra en inmuebles, residencia, empresa y contratos, es decir, en los puntos donde muchos clientes extranjeros necesitan claridad legal antes de firmar, pagar, trasladarse o asumir riesgos innecesarios."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 space-y-6">
        {serviceBlocks.map((service) => (
          <section key={service.title} className="ui-card p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{service.label}</div>
              <div className="rounded-full border border-black/8 bg-[#faf7f3] px-3 py-1 text-xs text-[#59646e]">Servicio principal</div>
            </div>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#56616b]">{service.summary}</p>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Situaciones habituales</div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
                    {service.situations.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                    {bullet}
                  </div>
                ))}
                <Link
                  href={service.href}
                  className="ui-button ui-button-primary mt-2 inline-flex items-center justify-center rounded-full bg-[#14213d] px-5 py-3 text-sm font-medium text-white hover:bg-[#0d1528]"
                >
                  Ver servicio
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10 ui-card-dark p-6 text-white sm:p-8 md:p-10">
        <div className="relative z-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Bloque premium de expansión</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Estructuración fiscal, ventajas de Canarias y constitución de empresa ZEC</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/82 md:text-base">
            Para fundadores y operadores que estudian montar empresa en Tenerife o en Canarias, el siguiente bloque fuerte es la estructuración jurídica correcta, el encaje de ZEC y la coordinación societaria y fiscal dentro del marco legal.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/es/services/estructuracion-fiscal-zec-canarias" className="ui-button ui-button-primary rounded-full bg-white px-6 py-3 text-sm font-medium text-[#14213d] hover:bg-white/90">Ver página ZEC y estructura fiscal</Link>
            <Link href="/es/contact" className="ui-button ui-button-secondary rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15">Hablar sobre la estructura</Link>
          </div>
          <div className="mt-8 grid gap-3">
            {secondaryServices.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/86">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
