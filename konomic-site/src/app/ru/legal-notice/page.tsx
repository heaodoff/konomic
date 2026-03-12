import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Правовая информация',
  description: 'Публичная правовая и корпоративная информация для Konomic Digital SL.',
  alternates: { canonical: '/ru/legal-notice' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Правовая информация" title="Публичная правовая и корпоративная информация" text="На этой странице собраны публичные данные компании, которые сейчас размещены на сайте для прозрачности и доверия." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="ui-card p-8 md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Информация о компании</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#59646e] md:text-base">
            <li>• Название компании: Konomic Digital SL.</li>
            <li>• Публичный WhatsApp / телефон: +34 643 319 719</li>
            <li>• Публичный email: nikita.lukashok@gmail.com</li>
            <li>• Публичный Telegram: @nkitl0</li>
          </ul>
        </section>
        <section className="ui-card-dark p-8 text-white md:p-9">
          <h2 className="text-2xl font-semibold tracking-tight">Публичные ограничения</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-white/82 md:text-base">
            <li>• На сайте не публикуется физический адрес офиса.</li>
            <li>• На сайте не публикуются имена юристов или команды.</li>
            <li>• Сайт построен как платформа для первого контакта и lead generation.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
