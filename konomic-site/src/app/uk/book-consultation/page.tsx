import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = { title: 'Консультація', alternates: { canonical: '/uk/book-consultation' } };

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro eyebrow="Консультація" title="Консультація" text="Ця сторінка підготовлена як локалізована українська версія англомовної MVP-структури." />
    </main>
  );
}
