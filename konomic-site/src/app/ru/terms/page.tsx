import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Условия и отказ от ответственности',
  description: 'Базовые условия использования сайта Konomic Digital SL. и его публичных каналов связи.',
  alternates: { canonical: '/ru/terms' },
};

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro eyebrow="Условия" title="Условия использования сайта и отказ от ответственности" text="Эта страница задаёт базовую рамку использования сайта и уточняет, что первый контакт сам по себе не создаёт автоматически формальных профессиональных отношений." />
      <div className="mt-12 space-y-6">
        {[
          ['Информационный характер', 'Контент сайта предназначен для информации и первого контакта и не должен рассматриваться как замена формальной индивидуальной юридической консультации.'],
          ['Нет автоматического engagement', 'Сообщение через WhatsApp, Telegram, email или сайт само по себе не создаёт формальных отношений клиент–исполнитель.'],
          ['Сначала оценка ситуации', 'Любой юридический вопрос должен оцениваться индивидуально до того, как предполагается объём работы или постоянное сопровождение.'],
          ['Внешние платформы', 'Коммуникация может происходить через сторонние платформы, включая WhatsApp, Telegram и email.'],
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
