import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
  description: 'Інформація про конфіденційність для користувачів, які зв’язуються з Konomic Digital SL. через сайт, WhatsApp, Telegram та email.',
  alternates: { canonical: '/uk/privacy-policy' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Конфіденційність" title="Інформація про конфіденційність для відвідувачів сайту та звернень" text="Ця сторінка описує, як можуть оброблятися контактні дані та інформація із запиту, коли користувач зв’язується з Konomic Digital SL. через сайт, WhatsApp, Telegram або email." />
      <div className="mt-12 space-y-6">
        {[
          ['Які дані можуть збиратися', 'Користувач може передати ім’я, контактні дані, бажану мову, опис запиту та пов’язані документи.'],
          ['Для чого це використовується', 'Інформація використовується для первинного розбору запиту, відповіді, маршрутизації у відповідний формат консультації та продовження комунікації, якщо це доречно.'],
          ['Які канали використовуються', 'Поточні канали першого контакту включають WhatsApp, Telegram, email і веб-сторінки з контактними CTA.'],
          ['Мінімізація даних', 'Запитуватися має лише та інформація, яка потрібна для розуміння ситуації та адекватної відповіді.'],
          ['Питання', 'З питань конфіденційності можна використовувати поточний публічний email: nikita.lukashok@gmail.com.'],
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
