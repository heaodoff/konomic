import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Contacto Konomic Digital SL. en Tenerife',
  description: 'Contacta con Konomic Digital SL. para asuntos de inmuebles, residencia, empresa, contratos y clientes internacionales en Tenerife.',
  alternates: { canonical: '/es/contact' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

export default function ContactPage() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Contacto" title="Contacta con Konomic Digital SL." text="Konomic Digital SL. trabaja con un flujo de contacto centrado en WhatsApp. El email y Telegram siguen disponibles como canales secundarios." />
      <div className="mt-10 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium hover:bg-[#0d1528]">Empezar por WhatsApp</a>
        <a href="mailto:nikita.lukashok@gmail.com" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Enviar email</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Abrir Telegram</a>
      </div>
    </main>
  );
}
