import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Estructuración fiscal y empresa ZEC en Tenerife',
  description:
    'Asistencia jurídica en Tenerife y Canarias para estructuración empresarial, constitución de empresa ZEC, planificación para fundadores y coordinación legal con fiscalistas.',
  alternates: { canonical: '/es/services/estructuracion-fiscal-zec-canarias' },
};

const whatsappUrl = 'https://wa.me/34643319719';

const situations = [
  'Antes de constituir una empresa en Tenerife o en Canarias',
  'Cuando un fundador quiere saber si ZEC tiene sentido para su modelo',
  'Cuando estructura societaria, socios y encaje legal deben coordinarse pronto',
  'Cuando un operador internacional quiere claridad antes de constituir o reestructurar',
];

const coverage = [
  'Orientación legal inicial sobre opciones de estructura empresarial en Canarias',
  'Apoyo jurídico para constitución de empresa ZEC y cuestiones de encaje estructural',
  'Soporte societario para fundadores y operadores extranjeros',
  'Coordinación con asesores fiscales, contables y otros profesionales locales',
  'Revisión de pactos, socios y documentación antes de cerrar la estructura',
];

const firstMessage = [
  'Qué tipo de actividad empresarial se quiere desarrollar',
  'Dónde residen actualmente fundadores u operadores',
  'Si la empresa ya existe o todavía debe constituirse',
  'Si el interés principal es ZEC, Canarias o estructura fiscal/societaria',
  'Cualquier borrador o nota de estructura ya disponible',
];

export default function ZecTaxPage() {
  return (
    <main className="ui-section ui-section-cream">
      <SectionIntro
        eyebrow="Estructura empresarial"
        title="Estructuración fiscal y constitución de empresa ZEC en Tenerife y Canarias"
        text="Esta página está pensada para fundadores, operadores y clientes internacionales que necesitan claridad jurídica sobre estructura empresarial en Canarias, encaje de ZEC y planificación societaria antes de constituir o reestructurar."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Situaciones habituales</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Cuándo este servicio suele ser relevante</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {situations.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-10">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Por qué interesa ZEC</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Por qué ZEC puede resultar más atractiva que una estructura societaria estándar</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/82 md:text-base">
              <p>
                Para empresas que realmente cumplen los requisitos, ZEC puede ofrecer un <strong>marco de impuesto sobre sociedades del 4%</strong> en lugar del tipo general del <strong>25% en España</strong>. Esa es una de las razones principales por las que atrae a fundadores y operadores internacionales.
              </p>
              <p>
                Además, Canarias opera con el sistema de <strong>IGIC en lugar del IVA peninsular</strong>, lo que en la estructura correcta puede aportar ventajas adicionales, incluido un tratamiento más favorable en determinados escenarios de importación.
              </p>
              <p>
                Por eso ZEC no suele verse solo como una forma de abrir una sociedad, sino como una <strong>decisión de estructura empresarial de mayor valor</strong> para la actividad adecuada.
              </p>
              <p>
                ZEC no es relevante para cualquier negocio, y la elegibilidad, la estructura y el efecto fiscal deben evaluarse caso por caso antes de apoyarse en ese régimen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Qué puede cubrir este servicio</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Trabajo jurídico y estructural habitual alrededor de ZEC y Canarias</h2>
          <div className="mt-6 grid gap-3">
            {coverage.map((item) => (
              <div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="ui-card p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Qué conviene enviar primero</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Un primer mensaje estructurado ahorra tiempo</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {firstMessage.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            Empezar consulta ZEC / estructura
          </a>
        </div>
      </div>
    </main>
  );
}
