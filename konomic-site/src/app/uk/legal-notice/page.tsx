import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Правова інформація',
  description: 'Публічна правова та корпоративна інформація для Konomic Digital SL.',
  alternates: { canonical: '/uk/legal-notice' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Правова інформація" title="Публічна правова та корпоративна інформація" text="На цій сторінці зібрано публічні дані компанії, які зараз розміщені на сайті для прозорості та довіри." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="ui-card p-8 md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Інформація про компанію</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#59646e] md:text-base">
            <li>• Назва компанії: Konomic Digital SL.</li>
            <li>• Публічний WhatsApp / телефон: +34 643 319 719</li>
            <li>• Публічний email: nikita.lukashok@gmail.com</li>
            <li>• Публічний Telegram: @nkitl0</li>
          </ul>
        </section>
        <section className="ui-card-dark p-8 text-white md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Публічні обмеження</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-white/82 md:text-base">
            <li>• На сайті не публікується фізична адреса офісу.</li>
            <li>• На сайті не публікуються імена юристів або команди.</li>
            <li>• Сайт побудовано як платформу для першого контакту та lead generation.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
