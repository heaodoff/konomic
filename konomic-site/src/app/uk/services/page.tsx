import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = { title: 'Послуги', alternates: { canonical: '/uk/services' } };

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro eyebrow="Послуги" title="Послуги" text="Ця сторінка підготовлена як локалізована українська версія англомовної MVP-структури." />
    </main>
  );
}
