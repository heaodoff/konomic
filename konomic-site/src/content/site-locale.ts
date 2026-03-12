import type { Locale } from './i18n';

export function localizeTrustPoints(locale: Locale) {
  const map = {
    en: [
      'Built for international clients in Tenerife',
      'Premium multilingual positioning',
      'Clear process and commercially useful advice',
      'Remote-friendly onboarding and document review',
    ],
    de: [
      'Für internationale Mandanten auf Teneriffa aufgebaut',
      'Hochwertige mehrsprachige Positionierung',
      'Klare Abläufe statt unnötiger Juristensprache',
      'Remote-Onboarding und Dokumentenprüfung möglich',
    ],
    ru: [
      'Сайт под иностранных клиентов на Тенерифе',
      'Премиальное многоязычное позиционирование',
      'Понятный процесс вместо юридической мутности',
      'Можно стартовать удалённо и прислать документы заранее',
    ],
    uk: [
      'Сайт для міжнародних клієнтів на Тенерифе',
      'Преміальне багатомовне позиціонування',
      'Чіткий процес замість заплутаної юридичної мови',
      'Можна почати дистанційно та надіслати документи заздалегідь',
    ],
    es: [
      'Pensado para clientes internacionales en Tenerife',
      'Posicionamiento premium y multilingüe',
      'Proceso claro en lugar de lenguaje jurídico confuso',
      'Posibilidad de empezar en remoto y revisar documentos antes',
    ],
  } satisfies Record<Locale, string[]>;
  return map[locale];
}

export function localizeFaqs(locale: Locale) {
  const map = {
    en: [
      { q: 'Do you work with foreign clients in Tenerife?', a: 'Yes. Konomic is being built specifically around international clients, foreign buyers, founders, and families dealing with legal matters in Tenerife.' },
      { q: 'Which languages are planned for the site?', a: 'The multilingual SEO plan is focused on English, German, Russian, and Ukrainian, with Spanish available where needed.' },
      { q: 'Can clients start remotely?', a: 'Yes. Remote consultation and document review are a core part of the positioning because many clients begin the process before arriving in Tenerife.' },
      { q: 'What should a client do first?', a: 'Start with a consultation or structured legal review so the issue, risks, and next steps can be defined early.' },
    ],
    de: [
      { q: 'Arbeiten Sie mit internationalen Mandanten auf Teneriffa?', a: 'Ja. Konomic wird gezielt für internationale Mandanten, Käufer, Unternehmer und Familien mit Rechtsfragen auf Teneriffa aufgebaut.' },
      { q: 'Welche Sprachen sind geplant?', a: 'Der Fokus der mehrsprachigen SEO-Strategie liegt auf Englisch, Deutsch, Russisch und Ukrainisch.' },
      { q: 'Kann man den Prozess remote starten?', a: 'Ja. Viele Mandanten beginnen vor ihrer Ankunft auf Teneriffa, daher sind Remote-Beratung und Dokumentenprüfung zentral.' },
      { q: 'Was ist der erste sinnvolle Schritt?', a: 'Am besten startet man mit einer Beratung oder strukturierten juristischen Erstprüfung, damit Risiken und nächste Schritte früh geklärt werden.' },
    ],
    ru: [
      { q: 'Вы работаете с иностранными клиентами на Тенерифе?', a: 'Да. Konomic изначально строится под международных клиентов, покупателей, предпринимателей и семьи с юридическими вопросами на Тенерифе.' },
      { q: 'Какие языки планируются на сайте?', a: 'Основной фокус многоязычного SEO — английский, немецкий, русский и украинский.' },
      { q: 'Можно ли начать процесс удалённо?', a: 'Да. Многие клиенты начинают ещё до приезда на Тенерифе, поэтому удалённая консультация и проверка документов — важная часть модели.' },
      { q: 'Какой первый шаг лучше сделать?', a: 'Оптимально начать с консультации или структурированного юридического разбора, чтобы рано понять риски и следующие шаги.' },
    ],
    uk: [
      { q: 'Ви працюєте з іноземними клієнтами на Тенерифе?', a: 'Так. Konomic від початку будується для міжнародних клієнтів, покупців, підприємців і сімей із юридичними питаннями на Тенерифе.' },
      { q: 'Які мови плануються на сайті?', a: 'Основний фокус багатомовного SEO — англійська, німецька, російська та українська.' },
      { q: 'Чи можна почати процес дистанційно?', a: 'Так. Багато клієнтів починають ще до приїзду на Тенерифе, тому дистанційна консультація та перевірка документів є важливою частиною моделі.' },
      { q: 'Який перший крок найкращий?', a: 'Найкраще почати з консультації або структурованого юридичного розбору, щоб рано визначити ризики та наступні кроки.' },
    ],
    es: [
      { q: '¿Trabajan con clientes internacionales en Tenerife?', a: 'Sí. Konomic está orientado a clientes internacionales, compradores extranjeros, emprendedores y familias con asuntos legales en Tenerife.' },
      { q: '¿Qué idiomas ofrece la web?', a: 'La arquitectura multilingüe está pensada para inglés, alemán, ruso, ucraniano y español.' },
      { q: '¿Se puede empezar el proceso en remoto?', a: 'Sí. Muchas personas inician el proceso antes de llegar a Tenerife, por eso la consulta remota y la revisión documental forman parte del enfoque.' },
      { q: '¿Cuál es el mejor primer paso?', a: 'Lo más útil es empezar con una consulta o una revisión legal estructurada para definir riesgos y siguientes pasos desde el principio.' },
    ],
  } satisfies Record<Locale, { q: string; a: string }[]>;
  return map[locale];
}
