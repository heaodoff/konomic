import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Налоговое структурирование и открытие компании в ZEC',
  description:
    'Юридическая поддержка на Тенерифе и Канарских островах по структурированию бизнеса, открытию компании в ZEC, корпоративной логике и координации с налоговыми специалистами.',
  alternates: { canonical: '/ru/services/nalogovoe-strukturirovanie-zec-kompaniya' },
};

const whatsappUrl = 'https://wa.me/34643319719';
const situations = [
  'До открытия компании на Тенерифе или на Канарских островах',
  'Когда основатель хочет понять, имеет ли ZEC смысл для его модели',
  'Когда структуру бизнеса, партнёров и юридическую логику нужно выстроить заранее',
  'Когда международному оператору нужна ясность до открытия или реструктуризации компании',
];
const coverage = [
  'Первичная юридическая ориентация по структурам бизнеса на Канарах',
  'Поддержка по открытию компании в ZEC и связанным структурным вопросам',
  'Корпоративная поддержка для иностранных основателей и операторов',
  'Координация с бухгалтерами, налоговыми консультантами и местными специалистами',
  'Проверка договорённостей, партнёров и корпоративных документов до финализации структуры',
];
const firstMessage = [
  'Какой тип бизнеса планируется',
  'Где сейчас находятся основатели или операторы',
  'Есть ли уже компания или она только будет создаваться',
  'Интересует ли клиента именно ZEC, Канары или налогово-корпоративная структура',
  'Есть ли уже черновики документов или схема структуры',
];
export default function Page(){return <main className="ui-section ui-section-cream"><SectionIntro eyebrow="Структурирование бизнеса" title="Налоговое структурирование и открытие компании в ZEC на Тенерифе и Канарах" text="Эта страница для основателей, операторов и международных клиентов, которым нужна юридическая ясность по структуре бизнеса на Канарских островах, ZEC и корпоративному планированию до открытия или реструктуризации." /><div className="mt-8 ui-rule" /><div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"><div className="ui-card p-8 md:p-10"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Типовые ситуации</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Когда эта услуга особенно релевантна</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">{situations.map((item)=><li key={item}>• {item}</li>)}</ul></div><div className="ui-card-dark p-8 text-white md:p-10"><div className="relative z-10"><div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Почему ZEC привлекает интерес</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Почему ZEC может быть интереснее обычной компании</h2><div className="mt-4 space-y-4 text-sm leading-7 text-white/82 md:text-base"><p>Для компаний, которые реально подходят под режим, ZEC может дать <strong>4% корпоративного налога</strong> вместо стандартных <strong>25% в Испании</strong>. Это одна из главных причин, почему этот режим интересует международных основателей и операторов.</p><p>Кроме того, на Канарских островах действует <strong>IGIC вместо материкового НДС</strong>, что в правильной структуре может давать дополнительные преимущества, включая более выгодный режим в отдельных импортных сценариях.</p><p>Поэтому ZEC часто рассматривается не как “просто регистрация компании”, а как <strong>более сильное решение для бизнес-структуры</strong> при подходящей международной модели.</p><p>ZEC подходит не каждому бизнесу, и применимость режима, структура и налоговый эффект должны оцениваться отдельно под конкретную модель.</p></div></div></div></div><div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"><div className="ui-card p-8 md:p-10"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Что может входить в услугу</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Частая юридическая и структурная работа вокруг ZEC и Канар</h2><div className="mt-6 grid gap-3">{coverage.map((item)=><div key={item} className="ui-card-soft px-4 py-4 text-sm text-[#33404a]">{item}</div>)}</div></div><div className="ui-card p-8 md:p-10"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Что лучше прислать первым</div><h2 className="mt-3 text-2xl font-semibold tracking-tight">Структурированное первое сообщение экономит время</h2><ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">{firstMessage.map((item)=><li key={item}>• {item}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary mt-8 inline-flex rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Начать консультацию по ZEC / структуре</a></div></div></main>}
