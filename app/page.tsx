import Link from 'next/link';
import { Ladder } from '@/components/Ladder';
import { Deliverable } from '@/components/Deliverable';
import { Measure } from '@/components/Measure';
import { Plate } from '@/components/Figure';

export default function Home() {
  return (
    <>
      {/* Hero — the thesis is sovereignty, stated plainly. No overlay, no gradient. */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-block pt-16 sm:px-8 sm:pt-24">
        <p className="au-label">Energieautarkie · Niedersachsen &amp; Harz</p>

        <h1 className="mt-6 max-w-[18ch] font-display text-display font-semibold">
          Ihr Anwesen versorgt sich selbst.
        </h1>

        <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink-2">
          Aurevia plant und realisiert Energieautarkie für Häuser, Höfe und Unternehmerfamilien.
          Ein Konzept, ein Ansprechpartner, eine Verantwortung — statt sechs Gewerken, die
          aufeinander warten.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/analyse"
            className="flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Autarkie-Analyse starten
          </Link>
          <Link
            href="/autarkie"
            className="flex min-h-[52px] items-center justify-center border border-rule px-8 text-base text-ink transition-colors duration-micro ease-au hover:border-ink"
          >
            Wie wir arbeiten
          </Link>
        </div>
      </section>

      {/*
        One photograph, placed after the thesis rather than behind it. The hero stays
        typographic — but the product is architecture, and the brand has to show it once
        before it starts making claims.
      */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-block sm:px-8">
        <Plate
          slug="dji-0549"
          alt="Luftaufnahme eines Anwesens mit Solarüberdachung und Dachanlage"
          priority
          ratio="21 / 9"
        />
      </section>

      {/* Measured facts. This brand argues with numbers, not adjectives. */}
      <section className="border-y border-rule">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-rule-soft sm:grid-cols-3">
          <Measure
            value="1"
            unit="Ansprechpartner"
            note="Von der Analyse bis zur Inbetriebnahme. Sie treffen Entscheidungen, keine Termine."
          />
          <Measure
            value="Seesen"
            unit="Eigenes Zentrallager"
            note="Komponenten aus eigenem Bestand statt aus einer Lieferkette, die niemand kontrolliert."
          />
          <Measure
            value="§ 12"
            unit="Abs. 3 UStG"
            note="Für Photovoltaik auf Wohngebäuden gilt der Nullsteuersatz. Wir weisen ihn korrekt aus."
          />
        </div>
      </section>

      {/* The problem, named precisely — this is what the buyer is actually paying to avoid. */}
      <section className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="au-label">Das eigentliche Problem</p>
            <h2 className="mt-5 font-display text-title font-semibold">
              Nicht die Technik. Die Koordination.
            </h2>
          </div>

          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Photovoltaik, Speicher, Wärmepumpe, Wallbox, Notstrom und Gebäudetechnik werden in der
              Regel von verschiedenen Betrieben geplant, bestellt und montiert. Jeder ist für sein
              Gewerk zuständig. Für das Zusammenspiel ist niemand zuständig.
            </p>
            <p>
              Das Ergebnis kennt jeder, der es einmal durchlaufen hat: Angebote, die sich nicht
              vergleichen lassen, Komponenten, die nicht miteinander sprechen, und ein Bauherr, der
              zum Projektleiter seines eigenen Hauses wird.
            </p>
            <p className="text-ink">
              Aurevia übernimmt diese Rolle. Wir planen das Gesamtsystem, bevor die erste Komponente
              bestellt wird — und verantworten, dass es als System funktioniert.
            </p>
          </div>
        </div>
      </section>

      <Ladder />
      <Deliverable />

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[20ch] font-display text-title font-semibold">
            Beginnen Sie mit der Analyse.
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">
            Die Autarkie-Analyse ist die belastbare Grundlage für jede weitere Entscheidung — und
            wird vollständig auf ein späteres Konzept angerechnet.
          </p>
          <Link
            href="/analyse"
            className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Autarkie-Analyse starten
          </Link>
        </div>
      </section>
    </>
  );
}
