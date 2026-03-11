import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = { title: 'Leistungen', alternates: { canonical: '/de/services' } };

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro eyebrow="Leistungen" title="Leistungen" text="Diese Seite wird als lokalisierte deutsche Version der englischen MVP-Struktur vorbereitet." />
    </main>
  );
}
