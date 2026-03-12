import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Contact Konomic Digital SL. in Tenerife',
  description:
    'Contact Konomic Digital SL. for Tenerife property, residency, business, contract, and foreign-client legal matters. WhatsApp-first contact available.',
  alternates: {
    canonical: '/en/contact',
  },
};

const fields = [
  'Full name',
  'Email address',
  'Phone / WhatsApp',
  'Preferred language',
  'Service needed',
  'Short case description',
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Contact"
        title="Contact Konomic Digital SL."
        text="Konomic Digital SL. can be contacted directly by WhatsApp, email, or Telegram. The contact flow is set up without public office address or public team profiles."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">Recommended enquiry form</h2>
          <form className="mt-6 grid gap-4" action="#" method="post">
            <div className="grid gap-4 md:grid-cols-2">
              {fields.slice(0, 4).map((label) => (
                <label key={label} className="grid gap-2 text-sm font-medium text-[#33404a]">
                  <span>{label}</span>
                  <input
                    type="text"
                    placeholder={label}
                    className="rounded-2xl border border-black/8 bg-[#fcfaf7] px-4 py-3 text-sm outline-none transition focus:border-[#1d252b]/30"
                  />
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#33404a]">
              <span>{fields[4]}</span>
              <select className="rounded-2xl border border-black/8 bg-[#fcfaf7] px-4 py-3 text-sm outline-none transition focus:border-[#1d252b]/30">
                <option>Property & Real Estate</option>
                <option>Immigration & Residency</option>
                <option>Business Setup & Corporate</option>
                <option>Contract Review</option>
                <option>Inheritance & Probate</option>
                <option>Dispute Resolution</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#33404a]">
              <span>{fields[5]}</span>
              <textarea
                rows={6}
                placeholder="Describe the matter, your timeline, and what kind of help you need."
                className="rounded-2xl border border-black/8 bg-[#fcfaf7] px-4 py-3 text-sm outline-none transition focus:border-[#1d252b]/30"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="max-w-md text-xs leading-6 text-[#67727c]">
                Primary contact channel: WhatsApp. Secondary channels: email and Telegram. No public office address is displayed.
              </p>
              <button
                type="submit"
                className="rounded-full bg-[#1d252b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#11171b]"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-black/5 bg-[#f5efe8] p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Public contact details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
              <li>• WhatsApp / phone: +34 643 319 719</li>
              <li>• Email: nikita.lukashok@gmail.com</li>
              <li>• Telegram: @nkitl0</li>
              <li>• Company: Konomic Digital SL.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-black/5 bg-[#1f262d] p-8 text-white shadow-[0_30px_80px_rgba(26,31,36,0.14)]">
            <h2 className="text-2xl font-semibold tracking-tight">Recommended client journey</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-base">
              <li>1. Contact Konomic Digital SL. by WhatsApp or structured enquiry</li>
              <li>2. Receive the right consultation recommendation</li>
              <li>3. Share documents if review is needed</li>
              <li>4. Move into paid consultation or ongoing support</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
