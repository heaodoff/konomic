import { SectionIntro } from '@/components/SiteShell';

export default function AboutPage() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Sobre Konomic"
        title="Konomic Digital SL. para el mercado jurídico internacional de Tenerife"
        text="Konomic Digital SL. se presenta como una marca jurídica premium y multilingüe para clientes extranjeros con asuntos relacionados con inmuebles, traslado, empresa, contratos y otras cuestiones legales en Tenerife."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Qué diferencia a la marca</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <li>• Comunicación pensada primero para clientes internacionales.</li>
            <li>• Lenguaje visual premium en lugar de un estilo de folleto anticuado.</li>
            <li>• Estructura de servicios pensada para intención de búsqueda y calidad de lead.</li>
            <li>• Puntos de entrada claros para inmuebles, traslado, empresa y contratos.</li>
          </ul>
        </div>
        <div className="ui-card-dark p-8 text-white md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Perfil público de la empresa</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80 md:text-base">
            <li>• Nombre de la empresa: Konomic Digital SL.</li>
            <li>• Teléfono / WhatsApp público habilitado</li>
            <li>• La dirección pública no se muestra</li>
            <li>• No se muestran nombres del equipo o abogados</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
