import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Páginas de servicios en español sobre inmuebles, residencia, empresa y contratos en Tenerife.',
  alternates: { canonical: '/es/services' },
};

const pages = [
  { href: '/es/services', title: 'Inmuebles y compraventa', text: 'Asistencia legal para compra de inmuebles, due diligence y reducción de riesgos antes de pagar o firmar.' },
  { href: '/es/services', title: 'Residencia e inmigración', text: 'Orientación legal para residencia, documentación, trámites locales y traslado a Tenerife o España.' },
  { href: '/es/services', title: 'Empresa y estructura societaria', text: 'Apoyo para apertura de empresa, estructura del negocio, contratos comerciales y acompañamiento continuo.' },
  { href: '/es/services', title: 'Revisión de contratos', text: 'Revisión de contratos, ajuste de condiciones y control de riesgos antes de firmar o asumir obligaciones.' },
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Servicios" title="Páginas de servicios en español para la demanda principal" text="Aquí se reúnen los servicios clave para clientes hispanohablantes en Tenerife. Cada página funciona como punto de entrada SEO y como punto de conversión." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <article key={page.title} className="ui-card p-8 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">{page.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#59646e] md:text-base">{page.text}</p>
            <Link href={page.href} className="ui-link-soft mt-5 inline-flex text-sm font-medium text-[#14213d]">Abrir sección →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
