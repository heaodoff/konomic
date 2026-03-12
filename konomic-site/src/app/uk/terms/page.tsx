import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Умови та застереження',
  description: 'Базові умови використання сайту Konomic Digital SL. і його публічних каналів зв’язку.',
  alternates: { canonical: '/uk/terms' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Умови" title="Умови використання сайту та застереження" text="Ця сторінка задає базову рамку використання сайту та уточнює, що перший контакт сам по собі не створює автоматично формальних професійних відносин." />
      <div className="mt-12 space-y-6">
        {[
          ['Інформаційний характер', 'Контент сайту призначений для інформації та першого контакту і не повинен розглядатися як заміна формальної індивідуальної юридичної консультації.'],
          ['Немає автоматичного engagement', 'Повідомлення через WhatsApp, Telegram, email або сайт саме по собі не створює формальних відносин клієнт–виконавець.'],
          ['Спочатку оцінка ситуації', 'Будь-яке юридичне питання має оцінюватися індивідуально до того, як припускається обсяг роботи або постійний супровід.'],
          ['Зовнішні платформи', 'Комунікація може відбуватися через сторонні платформи, включаючи WhatsApp, Telegram та email.'],
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
