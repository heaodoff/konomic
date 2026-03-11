import { SectionIntro } from '@/components/SiteShell';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <SectionIntro
        eyebrow="Contact"
        title="Book a consultation or start with a structured legal enquiry"
        text="This page is ready for real contact details, intake fields, and lead routing. Right now it holds the correct premium structure for a legal consultation page."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-[0_12px_40px_rgba(24,31,38,0.05)]">
          <h2 className="text-2xl font-semibold tracking-tight">Recommended intake fields</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#56616b] md:text-base">
            <li>• Full name</li>
            <li>• Email and phone / WhatsApp</li>
            <li>• Preferred language</li>
            <li>• Service needed</li>
            <li>• Property / immigration / business / dispute context</li>
            <li>• Desired consultation format: remote or in person</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-black/5 bg-[#f5efe8] p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Lead-routing priority</h2>
          <p className="mt-4 text-sm leading-7 text-[#56616b] md:text-base">
            Best default stack: website form + WhatsApp + direct email. Add phone only if response handling is disciplined enough to keep the premium feel.
          </p>
        </div>
      </div>
    </main>
  );
}
