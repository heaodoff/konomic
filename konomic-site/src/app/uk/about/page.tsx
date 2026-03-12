import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Про нас',
  alternates: { canonical: '/uk/about' },
};

const audiencePoints = [
  'Іноземні покупці та інвестори в нерухомість',
  'Люди, які переїжджають на Тенерифе і вирішують питання резиденції та документів',
  'Підприємці та власники бізнесу, які структурують діяльність в Іспанії',
  'Клієнти, яким потрібно перевірити договір до підпису чи оплати',
];

const workflowPoints = [
  'Перший контакт зазвичай починається з короткого повідомлення у WhatsApp.',
  'Якщо документи вже є, їх можна надіслати заздалегідь.',
  'Ситуація переглядається і спрямовується у відповідний формат консультації або перевірки.',
  'Далі чітко визначаються наступні кроки та що потрібно підготувати.',
];

const trustPoints = [
  'Назва компанії: Konomic Digital SL.',
  'Публічні WhatsApp, Telegram і email доступні.',
  'Сайт розрахований на багатомовну комунікацію з міжнародними клієнтами.',
  'Доступні legal notice, privacy policy та terms.',
];

export default function Page() {
  return (
    <main className="ui-section">
      <SectionIntro
        eyebrow="Про Konomic"
        title="Юридична підтримка на Тенерифе для міжнародних клієнтів, яким потрібна ясність до переїзду, підпису чи інвестиції"
        text="Konomic Digital SL. побудовано навколо тих юридичних тем, з якими міжнародні клієнти найчастіше стикаються на Тенерифе: нерухомість, резиденція, бізнес, договори та пов’язані транскордонні питання."
      />
      <div className="mt-8 ui-rule" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Для кого це</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Практична точка входу для найтиповіших ситуацій</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {audiencePoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="ui-card-dark p-8 text-white md:p-9">
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#fca311]">Як відбувається робота</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Зрозумілий перший контакт і зрозумілі наступні кроки</h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-white/82 md:text-base">
              {workflowPoints.map((item, index) => (
                <li key={item}>{index + 1}. {item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="ui-card p-8 md:p-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Чому така модель важлива</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Багато юридичних проблем стають дорожчими, якщо дивитися їх занадто пізно</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <p>Часто клієнту потрібна ясність до reserva, до оплати, до запуску процесу резиденції або до структурування бізнесу.</p>
            <p>Тому сайт побудовано навколо ранньої перевірки, структурованого першого контакту та багатомовної комунікації, щоб процес був зрозумілим із самого початку.</p>
            <p>Якщо це доречно, перший крок можна почати дистанційно — це корисно для клієнтів, які ще не приїхали на Тенерифе.</p>
          </div>
        </div>

        <div className="ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
          <div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Публічний рівень довіри</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Що доступно публічно</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            {trustPoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
