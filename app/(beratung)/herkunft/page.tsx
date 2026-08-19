import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Figure } from '@/components/Figure';
import { Measure } from '@/components/Measure';
import { COMPANY } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Herkunft',
  description: `Aurevia ist eine Beratungsmarke der ${COMPANY.legalName} mit Sitz in ${COMPANY.city}.`,
};

export default function Herkunft() {
  return (
    <>
      <PageHeader
        label="Herkunft"
        title="Seesen, am Nordrand des Harzes."
        lead={`Aurevia ist die objektbezogene Beratungsmarke der ${COMPANY.legalName}. Vertragspartner, Anschrift und Registereintrag sind offen benannt.`}
      />

      <section className="border-y border-rule">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-rule-soft sm:grid-cols-3">
          <Measure
            value="Seesen"
            unit="Sitz der Gesellschaft"
            note={`${COMPANY.legalName}, ${COMPANY.street}. Die vollständigen Angaben stehen im Impressum.`}
          />
          <Measure
            value="1"
            unit="Benannter Vertragspartner"
            note="Leistungsumfang und beteiligte Fachbetriebe werden im jeweiligen Vertrag ausgewiesen."
          />
          <Measure
            value="HRB 210762"
            unit="Amtsgericht Braunschweig"
            note={`${COMPANY.legalName}, geführt von ${COMPANY.managingDirector}. Nachprüfbar im Handelsregister.`}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="au-label">Warum das zählt</p>
            <h2 className="mt-5 font-display text-title font-semibold">
              Herkunft schafft überprüfbare Zuständigkeit.
            </h2>
          </div>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Eine belastbare Entscheidung braucht einen klaren Vertragspartner. Deshalb nennt
              Aurevia die Gesellschaft hinter der Marke, ihre Anschrift und den Registereintrag
              direkt — statt Verantwortung hinter einer Plattform zu verteilen.
            </p>
            <p>
              Verfügbarkeit ist dagegen eine Momentaufnahme. Vorgesehene Fabrikate, Stückzahlen,
              Konditionen und Alternativen werden vor Beauftragung bestätigt; diese Website zeigt
              keinen Live-Lagerbestand.
            </p>
            <p className="text-ink">
              Aurevia strukturiert den Beratungsweg. Welche Planungs-, Liefer- und
              Ausführungsleistungen die {COMPANY.legalName} übernimmt, ergibt sich aus dem
              jeweiligen Angebot und Vertrag.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            <Figure
              slug="dji-20240906161612-0026-d"
              alt="Erhöhte Ansicht einer kleinen PV-Terrassenüberdachung"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="img-2945-kopie"
              alt="Aluminium-Unterkonstruktion einer Solarüberdachung"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="img-2951-kopie"
              alt="Detail der Trägerkonstruktion einer Überdachung"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Kontakt</p>
          <h2 className="mt-5 max-w-[22ch] font-display text-title font-semibold">
            Lieber direkt sprechen?
          </h2>
          <address className="mt-7 not-italic text-lg leading-relaxed text-ink-2">
            {COMPANY.legalName}
            <br />
            {COMPANY.street}
            <br />
            {COMPANY.postalCode} {COMPANY.city}
          </address>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
            >
              {COMPANY.phone}
            </a>
            <br />
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
            >
              {COMPANY.email}
            </a>
          </p>
          <Link
            href="/analyse"
            className="mt-10 inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Autarkie-Analyse anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
