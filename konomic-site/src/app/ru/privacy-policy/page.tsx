import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Информация о конфиденциальности для пользователей, которые связываются с Konomic Digital SL. через сайт, WhatsApp, Telegram и email.',
  alternates: { canonical: '/ru/privacy-policy' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Конфиденциальность" title="Информация о конфиденциальности для посетителей сайта и обращений" text="Эта страница описывает, как могут обрабатываться контактные данные и информация по обращению, когда пользователь связывается с Konomic Digital SL. через сайт, WhatsApp, Telegram или email." />
      <div className="mt-12 space-y-6">
        {[
          ['Какие данные могут собираться', 'Пользователь может передать имя, контактные данные, предпочитаемый язык, описание запроса и связанные документы.'],
          ['Зачем это используется', 'Информация используется для первичного разбора запроса, ответа, маршрутизации в подходящий формат консультации и продолжения коммуникации, если это уместно.'],
          ['Какие каналы используются', 'Текущие каналы первого контакта включают WhatsApp, Telegram, email и веб-страницы с контактными CTA.'],
          ['Минимизация данных', 'Запрашиваться должна только та информация, которая нужна для понимания ситуации и адекватного ответа.'],
          ['Вопросы', 'По вопросам конфиденциальности можно использовать текущий публичный email: nikita.lukashok@gmail.com.'],
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
