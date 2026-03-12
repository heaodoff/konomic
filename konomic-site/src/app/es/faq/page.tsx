import { SectionIntro } from '@/components/SiteShell';

const faqItems = [
  {
    q: '¿Hace falta estar en Tenerife para empezar?',
    a: 'No siempre. Muchas consultas pueden empezar en remoto, sobre todo cuando lo importante es revisar documentos o aclarar el siguiente paso antes de viajar, firmar o pagar.',
  },
  {
    q: '¿Se puede revisar un contrato antes de firmarlo?',
    a: 'Sí. Esa es una de las razones más útiles para contactar pronto. Revisar antes de firmar suele ser mucho más valioso que intentar corregir el problema después.',
  },
  {
    q: '¿Trabajan con compradores extranjeros de inmuebles en Tenerife?',
    a: 'Sí. Los asuntos inmobiliarios son uno de los pilares principales de la web, especialmente para compradores e inversores extranjeros que quieren revisar riesgos antes de comprometer dinero.',
  },
  {
    q: '¿Puedo enviar documentos antes de una consulta?',
    a: 'Sí, cuando tenga sentido. Si ya existen documentos, normalmente se pueden compartir después del primer mensaje para que la revisión sea más útil y más ordenada.',
  },
  {
    q: '¿Qué conviene poner en el primer WhatsApp?',
    a: 'Un resumen breve del asunto, si ya se ha firmado o pagado algo, el plazo o urgencia, el idioma preferido y si existe algún documento para revisar.',
  },
  {
    q: '¿Cuáles son los principales asuntos que cubre la web?',
    a: 'El foco principal es inmuebles, residencia y traslado, empresa, revisión de contratos y otras cuestiones legales relacionadas con clientes internacionales en Tenerife.',
  },
  {
    q: '¿Se puede empezar el proceso desde fuera de España?',
    a: 'Sí. Muchas personas empiezan antes de llegar a Tenerife, especialmente cuando necesitan revisar documentos, orientación legal temprana o entender mejor el siguiente paso.',
  },
  {
    q: '¿Qué canal de contacto es mejor?',
    a: 'WhatsApp es el canal principal porque suele ser el más rápido y más claro. Telegram sirve para coordinación escrita y email es mejor para varios documentos o explicaciones más largas.',
  },
  {
    q: '¿Qué pasa después del primer mensaje?',
    a: 'El asunto se revisa, se identifica el formato de consulta o revisión más adecuado y se define el siguiente paso para que el cliente sepa qué preparar y cómo continuar.',
  },
  {
    q: '¿La web está pensada para comunicación multilingüe?',
    a: 'Sí. La estructura multilingüe es una de las diferencias clave, porque muchos clientes internacionales necesitan entender bien el proceso desde el principio en un idioma claro para ellos.',
  },
];

export default function FaqPage() {
  return (
    <main className="ui-section ui-section-cool">
      <SectionIntro
        eyebrow="FAQ"
        title="Preguntas que suelen aparecer antes del primer contacto"
        text="Una buena sección de preguntas frecuentes debe reducir dudas antes de escribir. Esta página se centra en las preguntas prácticas que suelen hacer los clientes internacionales antes de iniciar una consulta sobre inmuebles, residencia, empresa o contratos en Tenerife."
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
