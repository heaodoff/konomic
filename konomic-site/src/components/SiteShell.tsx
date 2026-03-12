import Link from 'next/link';
import { ReactNode } from 'react';
import { localeContent, localeLabels, locales, type Locale } from '@/content/i18n';

export function SiteShell({ children, locale = 'en' }: { children: ReactNode; locale?: Locale }) {
  const copy = localeContent[locale];
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f3ee_0%,#f4efe9_34%,#fffdfa_100%)] text-[#1d252b]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(255,253,250,0.82)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
          <div className="flex items-start justify-between gap-4">
            <Link href={`/${locale}`} className="flex min-w-0 flex-col">
              <span className="text-xs uppercase tracking-[0.35em] text-[#8f7d67]">Konomic Digital SL.</span>
              <span className="mt-1 text-sm text-[#56616b]">{copy.brandTagline}</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-black/6 bg-white/70 px-2 py-1 md:flex">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className={`ui-button rounded-full px-2.5 py-1 text-xs font-medium transition ${
                      item === locale ? 'bg-[#1d252b] text-white hover:text-white' : 'text-[#56616b] hover:bg-black/5'
                    }`}
                  >
                    {localeLabels[item]}
                  </Link>
                ))}
              </div>
              <Link
                href={`/${locale}/book-consultation`}
                className="ui-button ui-button-secondary hidden rounded-full border border-[#1d252b] px-5 py-2 text-sm font-medium hover:bg-[#1d252b] hover:text-white sm:inline-flex"
              >
                {copy.nav.book}
              </Link>
            </div>
          </div>

          <div className="mt-4 hidden items-center gap-7 text-sm text-[#47515a] md:flex">
            <Link href={`/${locale}/services`} className="ui-link-soft">{copy.nav.services}</Link>
            <Link href={`/${locale}/about`} className="ui-link-soft">{copy.nav.about}</Link>
            <Link href={`/${locale}/faq`} className="ui-link-soft">{copy.nav.faq}</Link>
            <Link href={`/${locale}/contact`} className="ui-link-soft">{copy.nav.contact}</Link>
          </div>

          <div className="mt-4 flex flex-col gap-3 md:hidden">
            <div className="flex flex-wrap gap-2 rounded-2xl border border-black/6 bg-white/70 p-2">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`ui-button rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    item === locale ? 'bg-[#1d252b] text-white hover:text-white' : 'text-[#56616b] hover:bg-black/5'
                  }`}
                >
                  <span className="opacity-100">{localeLabels[item]}</span>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href={`/${locale}/services`} className="ui-button ui-button-secondary rounded-xl border border-black/6 bg-white/70 px-4 py-2.5 text-center text-[#47515a]">
                {copy.nav.services}
              </Link>
              <Link href={`/${locale}/about`} className="ui-button ui-button-secondary rounded-xl border border-black/6 bg-white/70 px-4 py-2.5 text-center text-[#47515a]">
                {copy.nav.about}
              </Link>
              <Link href={`/${locale}/faq`} className="ui-button ui-button-secondary rounded-xl border border-black/6 bg-white/70 px-4 py-2.5 text-center text-[#47515a]">
                {copy.nav.faq}
              </Link>
              <Link href={`/${locale}/contact`} className="ui-button ui-button-secondary rounded-xl border border-black/6 bg-white/70 px-4 py-2.5 text-center text-[#47515a]">
                {copy.nav.contact}
              </Link>
            </div>

            <Link
              href={`/${locale}/book-consultation`}
              className="ui-button ui-button-secondary inline-flex items-center justify-center rounded-full border border-[#1d252b] px-5 py-2.5 text-sm font-medium hover:bg-[#1d252b] hover:text-white"
            >
              {copy.nav.book}
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#8f7d67]">Konomic Digital SL.</div>
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
            <p className="mt-4 text-sm leading-7 text-[#58636d]">
              WhatsApp: +34 643 319 719
              <br />
              Email: nikita.lukashok@gmail.com
              <br />
              Telegram: @nkitl0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.3em] text-[#8f7d67]">{eyebrow}</div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-5 text-base leading-8 text-[#56616b] md:text-lg">{text}</p>
    </div>
  );
}
