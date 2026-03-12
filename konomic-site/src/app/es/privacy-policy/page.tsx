import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Información de privacidad para usuarios que contacten con Konomic Digital SL. a través de la web, WhatsApp, Telegram y email.',
  alternates: { canonical: '/es/privacy-policy' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Privacidad" title="Información de privacidad para visitantes y consultas" text="Esta página resume cómo puede gestionarse la información de contacto y de consulta cuando una persona contacta con Konomic Digital SL. a través de la web, WhatsApp, Telegram o email." />
      <div className="mt-12 space-y-6">
        {[
          ['Datos recogidos', 'La persona usuaria puede facilitar nombre, datos de contacto, idioma preferido, descripción de la consulta y documentos relacionados.'],
          ['Finalidad', 'La información se utiliza para entender la consulta, responder, dirigir el asunto al formato adecuado y continuar la comunicación cuando proceda.'],
          ['Canales utilizados', 'Los canales actuales de contacto incluyen WhatsApp, Telegram, email y elementos de contacto integrados en la web.'],
          ['Minimización', 'Solo debe solicitarse la información necesaria para comprender el asunto y responder de forma adecuada.'],
          ['Consultas', 'Para cuestiones relacionadas con privacidad, el correo público actual es nikita.lukashok@gmail.com.'],
        ].map(([title, text]) => (
          <section key={title} className="ui-card p-8 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
