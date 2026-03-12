import { SectionIntro } from '@/components/SiteShell';

const faqItems = [
  {
    q: 'Do I need to be in Tenerife to start?',
    a: 'Not necessarily. A first review can often begin remotely, which is useful for clients who are still abroad and need clarity before travelling, signing, or transferring money.',
  },
  {
    q: 'Can contracts or documents be reviewed before I sign them?',
    a: 'Yes. That is one of the most practical reasons to get in touch early. Contract review before signing is often far more useful than trying to fix the problem later.',
  },
  {
    q: 'Do you work with foreign property buyers in Tenerife?',
    a: 'Yes. Property matters are one of the main demand areas the site is built around, especially for foreign buyers, investors, and clients who want legal review before committing funds.',
  },
  {
    q: 'Can I send documents before a consultation?',
    a: 'Yes, where relevant. If documents already exist, they can usually be shared after the first message so the matter can be reviewed in a more structured way.',
  },
  {
    q: 'What should I include in the first WhatsApp message?',
    a: 'A short summary of the issue, whether anything has already been signed or paid, your timeline, your preferred language, and whether any document is already available.',
  },
  {
    q: 'Which matters are the main focus of the site?',
    a: 'The main public focus is property, residency and relocation, business setup, contract review, and related legal matters affecting foreign clients in Tenerife.',
  },
  {
    q: 'Can clients start the process from outside Spain?',
    a: 'Yes. Many foreign clients start before arriving in Tenerife, especially where they need document review, early legal orientation, or a clearer idea of the next step.',
  },
  {
    q: 'Which contact channel is best?',
    a: 'WhatsApp is the primary first-contact channel because it is usually the fastest and clearest. Telegram can be used for written coordination, and email is better for larger document sets or longer explanations.',
  },
  {
    q: 'What happens after the first message?',
    a: 'The matter is reviewed, the most suitable consultation or legal review format is identified, and the next step is defined more clearly so the client knows what to prepare and what comes next.',
  },
  {
    q: 'Is this site built for multilingual communication?',
    a: 'Yes. Multilingual structure is one of the main differences in the Konomic approach because many foreign clients need legal guidance in a language they understand clearly from the start.',
  },
];

export default function FaqPage() {
  return (
    <main className="ui-section ui-section-cool">
      <SectionIntro
        eyebrow="FAQ"
        title="Questions clients often ask before reaching out"
        text="A strong legal FAQ should reduce hesitation before first contact. This page focuses on the practical questions foreign clients often ask before starting a property, relocation, business, or contract-related enquiry in Tenerife."
      />
      <div className="mt-8 ui-rule" />
      <div className="mt-10 grid gap-4 md:mt-12 md:gap-5">
        {faqItems.map((item) => (
          <div key={item.q} className="ui-card px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">
            <h2 className="text-lg font-semibold tracking-tight">{item.q}</h2>
            <p className="mt-3 text-sm leading-7 text-[#59646e] md:text-base">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
