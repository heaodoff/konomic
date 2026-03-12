import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = { title: 'О нас', alternates: { canonical: '/ru/about' } };

const audiencePoints = [
  'Иностранные покупатели и инвесторы в недвижимость',
  'Люди, переезжающие на Тенерифе и решающие вопросы с резиденцией и документами',
  'Предприниматели и владельцы бизнеса, структурирующие деятельность в Испании',
  'Клиенты, которым нужно проверить договор до подписания или оплаты',
];

const workflowPoints = [
  'Первый контакт обычно начинается с короткого сообщения в WhatsApp.',
  'Если документы уже есть, их можно прислать заранее.',
  'Ситуация смотрится и направляется в нужный формат консультации или проверки.',
  'Следующие шаги фиксируются ясно, чтобы клиент понимал, что готовить дальше.',
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="О Konomic"
        title="Юридическая поддержка на Тенерифе для иностранцев, которым нужна ясность до переезда, подписи или сделки"
        text="Konomic Digital SL. строится вокруг тех юридических задач, с которыми иностранные клиенты чаще всего сталкиваются на Тенерифе: недвижимость, резиденция, бизнес, договоры и связанные трансграничные вопросы."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-9"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Для кого это</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Практичная точка входа для самых частых ситуаций</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">{audiencePoints.map((item)=><li key={item}>• {item}</li>)}</ul></div>
        <div className="ui-card-dark p-8 text-white md:p-9"><div className="relative z-10"><div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Как идёт работа</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Понятный первый контакт и понятные следующие шаги</h2><ol className="mt-6 space-y-4 text-sm leading-7 text-white/82 md:text-base">{workflowPoints.map((item,index)=><li key={item}>{index+1}. {item}</li>)}</ol></div></div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"><div className="ui-card p-8 md:p-9"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Почему такая модель важна</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Многие юридические проблемы становятся дороже, если смотреть их слишком поздно</h2><div className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><p>Часто клиенту нужна ясность до резерва, до оплаты, до запуска процесса по резиденции или до оформления структуры бизнеса.</p><p>Поэтому сайт строится вокруг ранней проверки, структурированного первого контакта и многоязычной коммуникации, чтобы процесс был понятен с самого начала.</p><p>Если это уместно, первый шаг можно начать удалённо — это полезно тем, кто ещё не приехал на Тенерифе.</p></div></div><div className="ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Публичный слой доверия</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Что доступно публично</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base"><li>• Компания: Konomic Digital SL.</li><li>• Открыты WhatsApp, Telegram и email</li><li>• Сайт рассчитан на многоязычную коммуникацию с иностранными клиентами</li><li>• Доступны legal notice, privacy и terms</li></ul></div></div>
    </main>
  );
}
