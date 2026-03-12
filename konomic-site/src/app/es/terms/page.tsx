import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Términos y Aviso',
  description: 'Términos básicos y aviso para el uso de la web de Konomic Digital SL. y sus canales públicos de contacto.',
  alternates: { canonical: '/es/terms' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Términos" title="Términos de uso y aviso general" text="Esta página establece un marco básico de uso de la web y aclara que un primer mensaje no crea automáticamente una relación profesional formal." />
      <div className="mt-12 space-y-6">
        {[
          ['Uso informativo', 'El contenido de la web tiene un fin informativo y de inicio de contacto, y no sustituye una revisión específica del caso.'],
          ['Sin contratación automática', 'Enviar un mensaje por WhatsApp, Telegram, email o formularios no crea por sí mismo una relación profesional formal.'],
          ['Evaluación del caso', 'Cada asunto debe revisarse individualmente antes de asumir alcance, estrategia o prestación continuada.'],
          ['Plataformas externas', 'La comunicación puede desarrollarse a través de plataformas de terceros como WhatsApp, Telegram y email.'],
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
