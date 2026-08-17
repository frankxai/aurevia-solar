import Link from 'next/link';
import { Deliverable } from '@/components/Deliverable';
import { Figure, Plate } from '@/components/Figure';
import { Ladder } from '@/components/Ladder';
import { Measure } from '@/components/Measure';

export default function Home() {
  return (
    <>
      <section
        aria-labelledby="home-title"
        className="mx-auto w-full max-w-6xl px-5 pb-block pt-14 sm:px-8 sm:pt-20 lg:pt-24"
      >
        <p className="au-label">Energieautonomie · Niedersachsen &amp; Harz</p>

        <div className="mt-6 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-16">
          <h1
            id="home-title"
            className="max-w-[14ch] font-display text-display font-semibold"
          >
            Ihr Anwesen. Ein Energiesystem.
          </h1>

          <div className="min-w-0 border-l border-rule pl-5 sm:pl-7">
            <p className="max-w-prose text-lg leading-relaxed text-ink-2">
              Aurevia entwickelt die objektbezogene Entscheidungsgrundlage für Erzeugung,
              Speicher, Wärme und Mobilität — mit einem klaren Weg von der Analyse bis zur
              möglichen Realisierung.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-3">
              Für Wohnhäuser, Höfe und private Anwesen. Technische Nachweise und behördliche oder
              netzseitige Freigaben erfolgen, soweit erforderlich, separat durch die zuständigen
              Stellen.
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/analyse"
            className="inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Analyse anfragen
          </Link>
          <Link
            href="/autarkie"
            className="inline-flex min-h-[52px] items-center justify-center border border-rule px-8 text-base text-ink transition-colors duration-micro ease-au hover:border-ink"
          >
            Den Beratungsweg verstehen
          </Link>
        </div>

        <Plate
          slug="dji-0081"
          alt="Ansicht einer in den Gebäudebestand integrierten PV-Terrassenüberdachung"
          priority
          ratio="16 / 9"
          className="mt-14 sm:mt-16"
          captionText="Bestehende PV-Terrassenüberdachung aus dem RIAL-Medienbestand. Sie zeigt eine mögliche Flächennutzung; Eignung, Ertrag, Tragwerk und Genehmigungsweg sind am jeweiligen Objekt zu prüfen."
        />
      </section>

      <section aria-label="Aurevia in Kürze" className="border-y border-rule">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-rule-soft sm:grid-cols-3">
          <Measure
            value="1"
            unit="Entscheidungsweg"
            note="Analyse, Konzept und mögliche Umsetzung bleiben in einer nachvollziehbaren Abfolge."
          />
          <Measure
            value="Seesen"
            unit="Operative Basis"
            note="Die RIAL Energy GmbH ist der benannte Vertragspartner und die operative Basis der Marke."
          />
          <Measure
            value="Objekt"
            unit="Vor Katalog"
            note="Verbrauch, Flächen und Randbedingungen bestimmen die Empfehlung — nicht ein Universalpaket."
          />
        </div>
      </section>

      <section
        aria-labelledby="coordination-title"
        className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8"
      >
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="au-label">Die eigentliche Aufgabe</p>
            <h2 id="coordination-title" className="mt-5 font-display text-title font-semibold">
              Nicht mehr Technik. Mehr Zusammenhang.
            </h2>
          </div>

          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Photovoltaik, Speicher, Wärmepumpe, Ladepunkt und Ersatzstrom berühren verschiedene
              Gewerke. Einzelangebote beantworten deshalb oft nur Teilfragen — nicht, welche
              Reihenfolge für das gesamte Anwesen sinnvoll ist.
            </p>
            <p>
              Aurevia ordnet Ziele, Verbrauch und Flächen in ein gemeinsames Szenario ein. Offene
              Punkte werden sichtbar benannt und den zuständigen Prüf- und Freigabeschritten
              zugeordnet.
            </p>
            <p className="text-ink">
              So entsteht zuerst eine belastbare Entscheidungsvorlage. Erst danach wird aus
              Varianten ein konkreter Auftrag.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="reference-title" className="border-t border-rule bg-paper-2">
        <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-12 px-5 py-section sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start lg:gap-16">
          <Figure
            slug="dji-0184"
            alt="PV-Module als Überdachung einer bestehenden Terrasse"
            sizes="(min-width: 1024px) 42rem, 100vw"
          />

          <div className="min-w-0 lg:pt-2">
            <p className="au-label text-copper-text">Referenz · bestehende Ausführung</p>
            <h2 id="reference-title" className="mt-5 font-display text-title font-semibold">
              Eine Fläche wird Teil des Systems.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              Die Aufnahme belegt eine reale bauliche Situation: Eine Terrasse kann Aufenthaltsort
              und potenzielle Erzeugungsfläche zugleich sein. Sie ist ein Prinzipbeispiel, keine
              Zusage für ein anderes Grundstück.
            </p>

            <dl className="mt-9 border-t border-rule text-sm leading-relaxed">
              <div className="grid gap-2 border-b border-rule-soft py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                <dt className="font-medium text-ink">Sichtbar</dt>
                <dd className="text-ink-2">Modulfläche, Tragstruktur und Anschluss an den Bestand.</dd>
              </div>
              <div className="grid gap-2 border-b border-rule-soft py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                <dt className="font-medium text-ink">Übertragbar</dt>
                <dd className="text-ink-2">Der Ansatz, Nebenflächen in die Gesamtplanung einzubeziehen.</dd>
              </div>
              <div className="grid gap-2 border-b border-rule-soft py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                <dt className="font-medium text-ink">Zu validieren</dt>
                <dd className="text-ink-2">
                  Statik, Elektroplanung, Verschattung, Netzanschluss, Ertrag und Genehmigungsweg.
                </dd>
              </div>
            </dl>

            <Link
              href="/referenzen"
              className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
            >
              Weitere Referenzaufnahmen ansehen
            </Link>
          </div>
        </div>
      </section>

      <Ladder />
      <Deliverable />

      <section aria-labelledby="final-cta-title" className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Nächster Schritt</p>
          <h2 id="final-cta-title" className="mt-5 max-w-[20ch] font-display text-title font-semibold">
            Beginnen Sie mit Ihrem Objekt, nicht mit einem Paket.
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">
            Senden Sie die Eckdaten unverbindlich zur Vorprüfung. Umfang, Honorar, benötigte
            Unterlagen und mögliche Anrechnung werden vor einer Beauftragung transparent bestätigt.
          </p>
          <Link
            href="/analyse"
            className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Analyse anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
