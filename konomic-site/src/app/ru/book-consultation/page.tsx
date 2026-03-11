import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = { title: 'Консультация', alternates: { canonical: '/ru/book-consultation' } };

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro eyebrow="Консультация" title="Консультация" text="Эта страница подготовлена как локализованная русская версия английской MVP-структуры." />
    </main>
  );
}
