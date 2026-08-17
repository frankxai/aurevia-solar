import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { PRICING, PRICE_DISCLOSURE } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Autarkie-Konzept',
  description:
    'Stufe 2 konkretisiert die Autarkie-Analyse am Objekt und dokumentiert Varianten, Schnittstellen sowie erforderliche Fach- und Freigabeschritte.',
};

const schritte = [
  {
    n: '01',
    title: 'Objektbegehung',
    body: 'Erfassung zugänglicher Dach-, Fassaden- und Freiflächen, der sichtbaren Bestandssituation und der für weitere Prüfungen benötigten Unterlagen.',
  },
  {
    n: '02',
    title: 'Netzanschluss und Anmeldung',
    body: 'Vorprüfung von Zählerplatz, Anschlussannahmen und Anmeldeweg. Verbindliche Anschlussaussagen und Netzfreigaben erteilt ausschließlich der zuständige Netzbetreiber.',
  },
  {
    n: '03',
    title: 'Prüf- und Genehmigungsbedarf',
    body: 'Dokumentation der bekannten Standort- und Bestandsdaten sowie der benötigten Nachweise. Statik, Genehmigungsplanung und behördliche Entscheidungen erfolgen separat durch die jeweils zuständigen Stellen.',
  },
  {
    n: '04',
    title: 'Systemtopologie',
    body: 'Konzeptionelle Zuordnung von Erzeugung, Speicher, Ersatzstrom, Wärme und Mobilität. Die Elektroplanung und technische Freigabe sind nicht Bestandteil der Online-Analyse.',
  },
  {
    n: '05',
    title: 'Phasen- und Budgetrahmen',
    body: 'Welche Schritte aufeinander folgen, welche Fachnachweise zuvor benötigt werden und welche Leistungen als Nächstes angeboten werden können.',
  },
];

export default function Konzept() {
  return (
    <>
      <PageHeader
        label={`Stufe 2 · ${PRICING.konzept.display}`}
        title="Autarkie-Konzept"
        lead="Die Analyse stellt Annahmen auf. Das Konzept konkretisiert sie am Objekt, trennt Varianten von Freigaben und macht die nächsten Fachschritte nachvollziehbar."
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-section sm:px-8">
        <ol className="mt-4 flex flex-col">
          {schritte.map((s) => (
            <li
              key={s.n}
              className="grid gap-x-10 gap-y-3 border-t border-rule py-8 lg:grid-cols-[5rem_minmax(0,1fr)]"
            >
              <p className="au-measure au-label pt-1 text-copper-text">{s.n}</p>
              <div>
                <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-2">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="au-label">Anrechnung</p>
              <h2 className="mt-5 font-display text-title font-semibold">
                Jede Stufe bleibt nachvollziehbar.
              </h2>
            </div>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Analyse, Konzept und Realisierung bauen aufeinander auf. Bereits erarbeitete
                Grundlagen werden deshalb im Folgeangebot sichtbar vom neuen Leistungsumfang
                getrennt.
              </p>
              <p>
                Ob und in welcher Höhe eine Anrechnung erfolgt, wird vor Beauftragung in Textform
                ausgewiesen. Maßgeblich ist das jeweilige Angebot, nicht eine pauschale Aussage auf
                dieser Website.
              </p>
              <p className="text-ink">
                Der Umfang der übergebenen Unterlagen und die zugehörigen Nutzungsrechte ergeben
                sich aus der jeweiligen Beauftragung.
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-rule pt-6 text-xs text-ink-3">{PRICE_DISCLOSURE}</p>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[24ch] font-display text-title font-semibold">
            Das Konzept beginnt mit der Analyse.
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">
            Wir setzen eine Objektbegehung erst an, wenn die Grundlagen stehen — das spart Ihnen
            einen Termin, der sonst nur der Datenaufnahme dient.
          </p>
          <Link
            href="/analyse"
            className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Autarkie-Analyse anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
