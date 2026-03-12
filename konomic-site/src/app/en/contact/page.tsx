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

const whatsappUrl = 'https://wa.me/34643319719';
const telegramUrl = 'https://t.me/nkitl0';

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
    <main className="ui-section">
      <SectionIntro
        eyebrow="Contact"
        title="Contact Konomic Digital SL."
        text="Konomic Digital SL. uses a WhatsApp-first lead flow. For most new enquiries, WhatsApp is the fastest and clearest starting point."
      />
      <div className="mt-10 flex flex-wrap gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Start on WhatsApp</a>
        <a href="mailto:nikita.lukashok@gmail.com" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Email Konomic</a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary rounded-full border border-[#14213d]/12 bg-white/88 px-6 py-3 text-sm font-medium text-[#14213d] hover:border-[#fca311]/45">Open Telegram</a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="ui-card-soft px-6 py-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Primary</div><h3 className="mt-3 text-lg font-semibold tracking-tight">WhatsApp</h3><p className="mt-2 text-sm leading-7 text-[#59646e]">Best for new enquiries, fastest replies, and first contact.</p></div>
        <div className="ui-card-soft px-6 py-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Secondary</div><h3 className="mt-3 text-lg font-semibold tracking-tight">Telegram</h3><p className="mt-2 text-sm leading-7 text-[#59646e]">Useful if you prefer Telegram for quick written coordination.</p></div>
        <div className="ui-card-soft px-6 py-6"><div className="text-xs uppercase tracking-[0.28em] text-[#9a6200]">Documents</div><h3 className="mt-3 text-lg font-semibold tracking-tight">Email</h3><p className="mt-2 text-sm leading-7 text-[#59646e]">Best for documents, longer descriptions, and attachments.</p></div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="ui-card p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Recommended enquiry form</h2>
          <form className="mt-6 grid gap-4" action={whatsappUrl} method="get">
            <div className="grid gap-4 md:grid-cols-2">
              {fields.slice(0, 4).map((label) => (
                <label key={label} className="grid gap-2 text-sm font-medium text-[#33404a]">
                  <span>{label}</span>
                  <input type="text" placeholder={label} className="rounded-2xl border border-[#14213d]/12 bg-[#fffdfa] px-4 py-3 text-sm outline-none transition focus:border-[#fca311]/50" />
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#33404a]">
              <span>{fields[4]}</span>
              <select className="rounded-2xl border border-[#14213d]/12 bg-[#fffdfa] px-4 py-3 text-sm outline-none transition focus:border-[#fca311]/50">
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
              <textarea rows={6} placeholder="Describe the matter, your timeline, and what kind of help you need." className="rounded-2xl border border-[#14213d]/12 bg-[#fffdfa] px-4 py-3 text-sm outline-none transition focus:border-[#fca311]/50" />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="max-w-md text-xs leading-6 text-[#67727c]">
                If the matter is urgent, start on WhatsApp. Use email when documents need to be attached.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-primary rounded-full bg-[#14213d] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d1528]">Send on WhatsApp</a>
            </div>
          </form>
        </div>

        <div className="grid gap-6">
          <div className="ui-card-soft rounded-[2rem] px-8 py-8 md:px-10 md:py-9">
            <h2 className="text-2xl font-semibold tracking-tight">Public contact details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#56616b] md:text-base">
              <li>• WhatsApp / phone: +34 643 319 719</li>
              <li>• Email: nikita.lukashok@gmail.com</li>
              <li>• Telegram: @nkitl0</li>
              <li>• Company: Konomic Digital SL.</li>
            </ul>
          </div>
          <div className="ui-card-dark p-8 text-white md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">What happens next</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-white/82 md:text-base">
              <li>1. You send the first message, ideally on WhatsApp</li>
              <li>2. The matter is routed to the right consultation type</li>
              <li>3. If needed, documents are shared by email or Telegram</li>
              <li>4. The matter moves into paid consultation or ongoing support</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
