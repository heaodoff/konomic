import Link from 'next/link';
import { ReactNode } from 'react';
import { localeContent, localeLabels, locales, type Locale } from '@/content/i18n';

export function SiteShell({ children, locale = 'en' }: { children: ReactNode; locale?: Locale }) {
  const copy = localeContent[locale];
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f3ee_0%,#f4efe9_34%,#fffdfa_100%)] text-[#1d252b]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(255,253,250,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href={`/${locale}`} className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.35em] text-[#8f7d67]">Konomic Digital SL.</span>
            <span className="mt-1 text-sm text-[#56616b]">{copy.brandTagline}</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-[#47515a] md:flex">
            <Link href={`/${locale}/services`}>{copy.nav.services}</Link>
            <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
            <Link href={`/${locale}/faq`}>{copy.nav.faq}</Link>
            <Link href={`/${locale}/contact`}>{copy.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-black/6 bg-white/70 px-2 py-1 md:flex">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
                    item === locale ? 'bg-[#1d252b] text-white' : 'text-[#56616b] hover:bg-black/5'
                  }`}
                >
                  {localeLabels[item]}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}/book-consultation`}
              className="rounded-full border border-[#1d252b] px-5 py-2 text-sm font-medium transition hover:bg-[#1d252b] hover:text-white"
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
              <Link href={`/${locale}/services`}>{copy.nav.services}</Link>
              <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
              <Link href={`/${locale}/faq`}>{copy.nav.faq}</Link>
              <Link href={`/${locale}/contact`}>{copy.nav.contact}</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Public contact</div>
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
