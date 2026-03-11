import Link from 'next/link';
import { ReactNode } from 'react';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f3ee_0%,#f4efe9_34%,#fffdfa_100%)] text-[#1d252b]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(255,253,250,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/en" className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.35em] text-[#8f7d67]">Konomic</span>
            <span className="mt-1 text-sm text-[#56616b]">Premium legal support in Tenerife</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-[#47515a] md:flex">
            <Link href="/en/services">Services</Link>
            <Link href="/en/about">About</Link>
            <Link href="/en/faq">FAQ</Link>
            <Link href="/en/contact">Contact</Link>
          </nav>
          <Link
            href="/en/book-consultation"
            className="rounded-full border border-[#1d252b] px-5 py-2 text-sm font-medium transition hover:bg-[#1d252b] hover:text-white"
          >
            Book consultation
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#8f7d67]">Konomic</div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#58636d]">
              Premium multilingual legal support in Tenerife for foreign clients, property buyers, founders, and families.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#58636d]">
              <Link href="/en/services">Services</Link>
              <Link href="/en/about">About</Link>
              <Link href="/en/faq">FAQ</Link>
              <Link href="/en/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Launch note</div>
            <p className="mt-4 text-sm leading-7 text-[#58636d]">
              This build is an MVP direction focused on structure, design, and SEO architecture. Final deployment requires real company details, lead channels, and legal copy review.
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
