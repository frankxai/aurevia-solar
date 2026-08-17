import Link from 'next/link';
import { PRICING, PRICE_DISCLOSURE } from '@/lib/pricing';

const stufen = [
  {
    stufe: 'Stufe 1',
    name: 'Autarkie-Analyse',
    price: PRICING.analyse.display,
    priceNote: PRICING.analyse.note,
    body: 'Sie beschreiben Ihr Anwesen, den Verbrauch und Ihre Ziele. Die Analyse ordnet Erzeugung, Speicher, Ersatzstrom, Wärme und Mobilität als Szenario ein und benennt Datenlücken sowie weitere Prüfbedarfe.',
    detail: 'Konzeptionelle Vorplanung ohne Vor-Ort-Freigabe.',
    href: '/analyse',
    cta: 'Analyse anfragen',
  },
  {
    stufe: 'Stufe 2',
    name: 'Autarkie-Konzept',
    price: PRICING.konzept.display,
    priceNote: PRICING.konzept.note,
    body: 'Die Annahmen werden am Objekt konkretisiert. Flächen, Bestand, Netzanschluss und Genehmigungsweg werden aufgenommen; erforderliche Statik-, Elektro- und Fachnachweise bleiben den jeweils zuständigen qualifizierten Stellen vorbehalten.',
    detail: 'Ergebnis und offene Freigaben werden getrennt dokumentiert.',
    href: '/konzept',
    cta: 'Konzept ansehen',
  },
  {
    stufe: 'Stufe 3',
    name: 'Realisierung',
    price: PRICING.realisierung.display,
    priceNote: PRICING.realisierung.note,
    body: 'Beschaffung, Montagekoordination, Netzanmeldung und Inbetriebnahme werden im gesonderten Werkvertrag festgelegt. Zuständige Fachbetriebe und Netzbetreiber erteilen die erforderlichen technischen Freigaben.',
    detail: 'Umfang, Termine und Verantwortlichkeiten gelten wie vertraglich vereinbart.',
    href: '/realisierung',
    cta: 'Ablauf ansehen',
  },
];

export function Ladder() {
  return (
    <section className="border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <p className="au-label">Der Weg</p>
        <h2 className="mt-5 max-w-[24ch] font-display text-title font-semibold">
          Drei Stufen. Jede wird klar beauftragt.
        </h2>

        <ol className="mt-12 flex flex-col">
          {stufen.map((s) => (
            <li
              key={s.stufe}
              className="grid gap-x-10 gap-y-4 border-t border-rule py-9 lg:grid-cols-[8rem_minmax(0,1fr)_13rem]"
            >
              <p className="au-label pt-1 text-copper-text">{s.stufe}</p>

              <div>
                <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-2">{s.body}</p>
                <p className="mt-3 text-sm text-ink-3">{s.detail}</p>
              </div>

              <div className="lg:text-right">
                <p className="au-measure text-2xl font-semibold text-ink">{s.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2 lg:ml-auto lg:max-w-[18ch]">
                  {s.priceNote}
                </p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex min-h-[44px] items-center text-sm font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
                >
                  {s.cta}
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-t border-rule pt-6 text-xs text-ink-3">{PRICE_DISCLOSURE}</p>
      </div>
    </section>
  );
}
