import Link from 'next/link';
import { ReactNode } from 'react';
import { localeContent, localeLabels, locales, type Locale } from '@/content/i18n';

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

export function SiteShell({ children, locale = 'en' }: { children: ReactNode; locale?: Locale }) {
  const copy = localeContent[locale];
  return (
    <div className="min-h-screen pb-24 text-[#14213d] md:pb-0">
      <header className="z-30 border-b border-[#14213d]/8 bg-[rgba(255,255,255,0.84)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-10 lg:py-5">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <Link href={`/${locale}`} className="flex min-w-0 flex-col">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#9a6200] sm:text-xs sm:tracking-[0.35em]">Konomic Digital SL.</span>
              <span className="mt-0.5 line-clamp-1 text-xs text-[#516074] sm:mt-1 sm:text-sm">{copy.brandTagline}</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-[#14213d]/8 bg-white/88 px-2 py-1 md:flex">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className={`ui-button inline-flex min-w-[2.75rem] items-center justify-center rounded-full px-2.5 py-1 text-xs font-medium transition ${
                      item === locale ? 'bg-[#14213d] text-white hover:text-white' : 'text-[#516074] hover:bg-[#14213d]/5'
                    }`}
                  >
                    <span className={`${item === locale ? 'text-white' : ''}`}>{localeLabels[item]}</span>
                  </Link>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button ui-button-primary hidden rounded-full border border-[#14213d] bg-[#14213d] px-5 py-2 text-sm font-medium text-white hover:bg-[#0d1528] hover:text-white sm:inline-flex"
              >
                <span className="text-white">{copy.nav.book}</span>
              </a>
            </div>
          </div>

          <div className="mt-3 hidden items-center gap-7 text-sm text-[#47515a] md:flex">
            <Link href={`/${locale}/services`} className="ui-link-soft">{copy.nav.services}</Link>
            <Link href={`/${locale}/about`} className="ui-link-soft">{copy.nav.about}</Link>
            <Link href={`/${locale}/faq`} className="ui-link-soft">{copy.nav.faq}</Link>
            <Link href={`/${locale}/contact`} className="ui-link-soft">{copy.nav.contact}</Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">WhatsApp</a>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram</a>
          </div>

          <div className="mt-2.5 flex flex-col gap-2.5 md:hidden">
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 flex-wrap gap-1.5 rounded-full border border-[#14213d]/8 bg-white/88 p-1.5">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className={`ui-button inline-flex min-w-[2.4rem] items-center justify-center rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                      item === locale ? 'bg-[#14213d] text-white hover:text-white' : 'text-[#516074] hover:bg-[#14213d]/5'
                    }`}
                  >
                    <span className={`${item === locale ? 'text-white' : 'opacity-100'}`}>{localeLabels[item]}</span>
                  </Link>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button ui-button-primary inline-flex shrink-0 items-center justify-center rounded-full bg-[#14213d] px-4 py-2 text-xs font-medium text-white hover:bg-[#0d1528]"
              >
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href={`/${locale}/services`} className="ui-button ui-button-secondary rounded-xl border border-[#14213d]/8 bg-white/88 px-4 py-2.5 text-center text-[#47515a]">{copy.nav.services}</Link>
              <Link href={`/${locale}/about`} className="ui-button ui-button-secondary rounded-xl border border-[#14213d]/8 bg-white/88 px-4 py-2.5 text-center text-[#47515a]">{copy.nav.about}</Link>
              <Link href={`/${locale}/faq`} className="ui-button ui-button-secondary rounded-xl border border-[#14213d]/8 bg-white/88 px-4 py-2.5 text-center text-[#47515a]">{copy.nav.faq}</Link>
              <Link href={`/${locale}/contact`} className="ui-button ui-button-secondary rounded-xl border border-[#14213d]/8 bg-white/88 px-4 py-2.5 text-center text-[#47515a]">{copy.nav.contact}</Link>
            </div>
          </div>
        </div>
      </header>
      {children}

      <div className="ui-mobile-sticky md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-3">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#14213d]/12 bg-white px-4 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">
            Telegram
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary inline-flex items-center justify-center rounded-full bg-[#14213d] px-4 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">
            WhatsApp
          </a>
        </div>
      </div>

      <footer className="border-t border-[#14213d]/8 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#9a6200]">Konomic Digital SL.</div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#58636d]">{copy.footerBlurb}</p>
          </div>
          <div>
            <div className="text-sm font-semibold">{copy.nav.services}</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#58636d]">
              <Link href={`/${locale}/services`} className="ui-link-soft">{copy.nav.services}</Link>
              <Link href={`/${locale}/about`} className="ui-link-soft">{copy.nav.about}</Link>
              <Link href={`/${locale}/faq`} className="ui-link-soft">{copy.nav.faq}</Link>
              <Link href={`/${locale}/contact`} className="ui-link-soft">{copy.nav.contact}</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-4 flex flex-col gap-2 text-sm leading-7 text-[#58636d]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">WhatsApp: +34 643 319 719</a>
              <a href="mailto:nikita.lukashok@gmail.com" className="ui-link-soft">Email: nikita.lukashok@gmail.com</a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-link-soft">Telegram: @nkitl0</a>
            </div>
            <div className="mt-5 flex flex-col gap-2 text-sm leading-7 text-[#58636d]">
              <Link href={`/${locale}/legal-notice`} className="ui-link-soft">Legal Notice</Link>
              <Link href={`/${locale}/privacy-policy`} className="ui-link-soft">Privacy Policy</Link>
              <Link href={`/${locale}/terms`} className="ui-link-soft">Terms & Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.3em] text-[#9a6200]">{eyebrow}</div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-5 text-base leading-8 text-[#516074] md:text-lg">{text}</p>
    </div>
  );
}
