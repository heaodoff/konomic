export const locales = ['en', 'de', 'ru', 'uk', 'es'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  ru: 'RU',
  uk: 'UK',
  es: 'ES',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
  uk: 'Українська',
  es: 'Español',
};

export const localeContent: Record<
  Locale,
  {
    nav: { services: string; about: string; faq: string; contact: string; book: string };
    brandTagline: string;
    footerBlurb: string;
    launchNoteTitle: string;
    launchNoteText: string;
    home: {
      badge: string;
      title: string;
      text: string;
      primaryCta: string;
      secondaryCta: string;
      whyTitle: string;
      whyText: string;
      coreServicesEyebrow: string;
      coreServicesTitle: string;
      coreServicesText: string;
      marketEyebrow: string;
      marketTitle: string;
      faqEyebrow: string;
      faqTitle: string;
    };
  }
> = {
  en: {
    nav: { services: 'Services', about: 'About', faq: 'FAQ', contact: 'Contact', book: 'Book consultation' },
    brandTagline: 'Premium legal support in Tenerife',
    footerBlurb: 'Premium multilingual legal support in Tenerife for foreign clients, property buyers, founders, and families.',
    launchNoteTitle: 'Contact',
    launchNoteText: 'WhatsApp: +34 643 319 719 · Email: nikita.lukashok@gmail.com · Telegram: @nkitl0',
    home: {
      badge: 'English version · premium legal support in Tenerife',
      title: 'Legal support in Tenerife for foreign clients, property matters, and business decisions.',
      text: 'Konomic is presented as a premium multilingual legal brand for expats, property buyers, founders, and families who need clear guidance, fast orientation, and a more reliable way to handle legal matters in Tenerife.',
      primaryCta: 'Book consultation',
      secondaryCta: 'Start an enquiry',
      whyTitle: 'Built for Tenerife’s international legal demand.',
      whyText: 'The goal is not to look like another generic local firm. The goal is to feel clear, premium, multilingual, and easy to hire for foreign clients who want confidence before they commit.',
      coreServicesEyebrow: 'Core services',
      coreServicesTitle: 'The services most worth leading with',
      coreServicesText: 'These four services give Konomic the best mix of local SEO opportunity, commercial intent, and trust-building value.',
      marketEyebrow: 'Market angle',
      marketTitle: 'Most competitors are broad, dated, or vague. Konomic should feel sharper and easier to trust.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Questions the site should answer before a client hesitates',
    },
  },
  de: {
    nav: { services: 'Leistungen', about: 'Über uns', faq: 'FAQ', contact: 'Kontakt', book: 'Beratung buchen' },
    brandTagline: 'Premium-Rechtsberatung auf Teneriffa',
    footerBlurb: 'Mehrsprachige Premium-Rechtsberatung auf Teneriffa für ausländische Mandanten, Immobilienkäufer, Unternehmer und Familien.',
    launchNoteTitle: 'Kontakt',
    launchNoteText: 'WhatsApp: +34 643 319 719 · Email: nikita.lukashok@gmail.com · Telegram: @nkitl0',
    home: {
      badge: 'Deutsche Version · Premium-Rechtsberatung auf Teneriffa',
      title: 'Rechtsberatung auf Teneriffa für internationale Mandanten, Immobilienfragen und geschäftliche Entscheidungen.',
      text: 'Konomic wird als mehrsprachige Premium-Marke für Expats, Immobilienkäufer, Unternehmer und Familien präsentiert, die klare Orientierung und verlässliche juristische Unterstützung auf Teneriffa brauchen.',
      primaryCta: 'Beratung buchen',
      secondaryCta: 'Anfrage starten',
      whyTitle: 'Entwickelt für die internationale Rechtsnachfrage auf Teneriffa.',
      whyText: 'Das Ziel ist nicht, wie eine weitere generische lokale Kanzlei zu wirken. Die Marke soll klar, hochwertig, mehrsprachig und leicht beauftragbar wirken.',
      coreServicesEyebrow: 'Kernleistungen',
      coreServicesTitle: 'Die Leistungen mit der stärksten Nachfrage',
      coreServicesText: 'Diese vier Leistungen bieten die beste Kombination aus lokaler SEO-Chance, kommerzieller Nachfrage und Vertrauensaufbau.',
      marketEyebrow: 'Marktsituation',
      marketTitle: 'Die meisten Wettbewerber wirken breit, veraltet oder unklar. Konomic sollte präziser und vertrauenswürdiger erscheinen.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Fragen, die vor der Kontaktaufnahme beantwortet sein sollten',
    },
  },
  ru: {
    nav: { services: 'Услуги', about: 'О нас', faq: 'FAQ', contact: 'Контакт', book: 'Записаться на консультацию' },
    brandTagline: 'Премиальная юридическая поддержка на Тенерифе',
    footerBlurb: 'Премиальная многоязычная юридическая поддержка на Тенерифе для иностранцев, покупателей недвижимости, предпринимателей и семей.',
    launchNoteTitle: 'Контакт',
    launchNoteText: 'WhatsApp: +34 643 319 719 · Email: nikita.lukashok@gmail.com · Telegram: @nkitl0',
    home: {
      badge: 'Русская версия · юридическая поддержка на Тенерифе',
      title: 'Юридическая поддержка на Тенерифе для иностранцев, сделок с недвижимостью и деловых вопросов.',
      text: 'Konomic представлен как премиальный многоязычный юридический бренд для экспатов, покупателей недвижимости, предпринимателей и семей, которым нужна ясность, скорость и надёжная поддержка на Тенерифе.',
      primaryCta: 'Записаться на консультацию',
      secondaryCta: 'Оставить заявку',
      whyTitle: 'Сайт под международный спрос на юридические услуги на Тенерифе.',
      whyText: 'Задача — не выглядеть как ещё одна обычная локальная фирма. Задача — выглядеть ясно, дорого, многоязычно и удобно для клиента-иностранца.',
      coreServicesEyebrow: 'Ключевые услуги',
      coreServicesTitle: 'Услуги, с которых лучше всего заходить в рынок',
      coreServicesText: 'Эти четыре направления дают Konomic лучшую комбинацию локального SEO, коммерческого спроса и доверия.',
      marketEyebrow: 'Рынок',
      marketTitle: 'Большинство конкурентов выглядят устаревшими или размытыми. Konomic должен выглядеть точнее и сильнее.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Вопросы, на которые сайт должен отвечать до того, как клиент начнёт сомневаться',
    },
  },
  uk: {
    nav: { services: 'Послуги', about: 'Про нас', faq: 'FAQ', contact: 'Контакт', book: 'Записатися на консультацію' },
    brandTagline: 'Преміальна юридична підтримка на Тенерифе',
    footerBlurb: 'Преміальна багатомовна юридична підтримка на Тенерифе для іноземних клієнтів, покупців нерухомості, підприємців і сімей.',
    launchNoteTitle: 'Контакт',
    launchNoteText: 'WhatsApp: +34 643 319 719 · Email: nikita.lukashok@gmail.com · Telegram: @nkitl0',
    home: {
      badge: 'Українська версія · юридична підтримка на Тенерифе',
      title: 'Юридична підтримка на Тенерифе для іноземців, питань нерухомості та бізнес-рішень.',
      text: 'Konomic представлено як преміальний багатомовний юридичний бренд для експатів, покупців нерухомості, підприємців і сімей, яким потрібні ясність, швидкість і надійна підтримка на Тенерифе.',
      primaryCta: 'Записатися на консультацію',
      secondaryCta: 'Почати запит',
      whyTitle: 'Створено під міжнародний попит на юридичні послуги на Тенерифе.',
      whyText: 'Мета — не виглядати як ще одна типова локальна фірма. Мета — виглядати чітко, преміально, багатомовно та зручно для іноземного клієнта.',
      coreServicesEyebrow: 'Ключові послуги',
      coreServicesTitle: 'Послуги, з яких варто починати запуск',
      coreServicesText: 'Ці чотири напрями дають Konomic найкращу комбінацію локального SEO, комерційного попиту та довіри.',
      marketEyebrow: 'Ринок',
      marketTitle: 'Більшість конкурентів виглядають застаріло або розмито. Konomic має виглядати точніше й сильніше.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Питання, на які сайт має відповідати ще до того, як клієнт почне сумніватися',
    },
  },
  es: {
    nav: { services: 'Servicios', about: 'Sobre nosotros', faq: 'FAQ', contact: 'Contacto', book: 'Reservar consulta' },
    brandTagline: 'Asistencia jurídica premium en Tenerife',
    footerBlurb: 'Asistencia jurídica premium y multilingüe en Tenerife para clientes extranjeros, compradores de inmuebles, emprendedores y familias.',
    launchNoteTitle: 'Contacto',
    launchNoteText: 'WhatsApp: +34 643 319 719 · Email: nikita.lukashok@gmail.com · Telegram: @nkitl0',
    home: {
      badge: 'Versión en español · asistencia jurídica premium en Tenerife',
      title: 'Asistencia jurídica en Tenerife para clientes internacionales, inmuebles y decisiones empresariales.',
      text: 'Konomic se presenta como una marca jurídica premium y multilingüe para expatriados, compradores de inmuebles, emprendedores y familias que necesitan claridad, rapidez y una forma más fiable de resolver asuntos legales en Tenerife.',
      primaryCta: 'Reservar consulta',
      secondaryCta: 'Iniciar consulta',
      whyTitle: 'Diseñado para la demanda jurídica internacional de Tenerife.',
      whyText: 'El objetivo no es parecer otro despacho local genérico. El objetivo es transmitir claridad, nivel premium, capacidad multilingüe y confianza para clientes extranjeros.',
      coreServicesEyebrow: 'Servicios principales',
      coreServicesTitle: 'Los servicios con más sentido para liderar',
      coreServicesText: 'Estos cuatro servicios ofrecen la mejor combinación de intención comercial, oportunidad SEO local y generación de confianza.',
      marketEyebrow: 'Enfoque de mercado',
      marketTitle: 'Muchos competidores son amplios, anticuados o vagos. Konomic debe sentirse más preciso y más fiable.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Preguntas que la web debería resolver antes de que el cliente dude',
    },
  },
};
