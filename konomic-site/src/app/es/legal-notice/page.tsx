import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal e información pública de la empresa para Konomic Digital SL.',
  alternates: { canonical: '/es/legal-notice' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Aviso Legal" title="Información pública legal y societaria" text="Esta página recoge la información pública actualmente visible en la web para reforzar transparencia y confianza." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="ui-card p-8 md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Información de la empresa</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#59646e] md:text-base">
            <li>• Nombre de la empresa: Konomic Digital SL.</li>
            <li>• WhatsApp / teléfono público: +34 643 319 719</li>
            <li>• Email público: nikita.lukashok@gmail.com</li>
            <li>• Telegram público: @nkitl0</li>
          </ul>
        </section>
        <section className="ui-card-dark p-8 text-white md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Limitaciones públicas</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-white/82 md:text-base">
            <li>• No se muestra dirección física pública en la web.</li>
            <li>• No se muestran nombres del equipo ni de abogados.</li>
            <li>• La web está estructurada como plataforma de captación y contacto.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
