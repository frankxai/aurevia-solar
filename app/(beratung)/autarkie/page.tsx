import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Figure, Plate } from '@/components/Figure';
import { Measure } from '@/components/Measure';

export const metadata: Metadata = {
  title: 'Autarkie',
  description:
    'Was Energieautarkie tatsächlich bedeutet — und wo der Unterschied zwischen hohem Eigenverbrauch und echter Inselfähigkeit liegt.',
};

const grade = [
  {
    value: 'Netzparallel',
    unit: 'Eigenverbrauch',
    note: 'Photovoltaik und Speicher optimieren den Eigenverbrauch. Verhalten bei Netzausfall hängt von der konkret geplanten Technik ab.',
  },
  {
    value: 'Gekoppelt',
    unit: 'Wärme und Mobilität',
    note: 'Wärmepumpe und Ladeinfrastruktur werden in das Energieszenario einbezogen. Eine Quote ergibt sich erst aus Objekt- und Verbrauchsdaten.',
  },
  {
    value: 'Geplant',
    unit: 'Ersatz- oder Inselbetrieb',
    note: 'Gewünschte Lasten, Umschaltung und Reserve werden separat betrachtet. Eignung und Freigabe sind objekt- und anlagenspezifisch.',
  },
];

export default function Autarkie() {
  return (
    <>
      <PageHeader
        label="Der Ansatz"
        title="Autarkie ist eine Auslegung, keine Ausstattung."
        lead={'Fast jede Anlage wird als „autark“ verkauft. Tatsächlich unterscheiden sich die Ausbaustufen erheblich — und der Unterschied fällt erst auf, wenn das Netz ausfällt.'}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-block sm:px-8">
        <Plate
          slug="dji-0184"
          alt="PV-Module als Überdachung einer bestehenden Terrasse"
          priority
          ratio="21 / 9"
          captionText="Referenzaufnahme einer vorhandenen Terrassenüberdachung. Sie belegt die bauliche Idee, nicht Ertrag, Autarkiegrad oder Eignung eines anderen Objekts."
        />
      </section>

      <section className="border-y border-rule">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-rule-soft sm:grid-cols-3">
          {grade.map((g) => (
            <Measure key={g.unit} value={g.value} unit={g.unit} note={g.note} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="au-label">Der teure Irrtum</p>
            <h2 className="mt-5 font-display text-title font-semibold">
              Ein größerer Speicher ersetzt keine Auslegung.
            </h2>
          </div>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Ein größerer Speicher allein macht eine Anlage nicht ersatzstrom- oder inselfähig.
              Dafür müssen unter anderem Wechselrichter, Umschaltung, Schutzkonzept und die zu
              versorgenden Lasten zusammenpassen und fachlich freigegeben werden.
            </p>
            <p>
              Auch getrennt beschaffte Photovoltaik, Wärmepumpe und Ladepunkt brauchen definierte
              Schnittstellen. Ob eine gemeinsame Regelung sinnvoll und technisch möglich ist,
              hängt vom Bestand und den gewählten Komponenten ab.
            </p>
            <p className="text-ink">
              Deshalb steht die konzeptionelle Auslegung vor der Beschaffung. Ziel, Lasten und
              gewünschtes Verhalten bei Netzausfall bestimmen, welche technische Fachplanung als
              Nächstes erforderlich ist.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Referenzaufnahmen</p>
          <h2 className="mt-5 max-w-[24ch] font-display text-title font-semibold">
            Nebenflächen können Teil des Energiekonzepts werden.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2">
            Carport, Terrassendach, Zaun oder Pergola können als Modulflächen geprüft werden. Ob
            eine Fläche geeignet ist und welchen Ertrag sie erwarten lässt, ergibt sich erst aus
            Standort, Verschattung, Konstruktion und Fachplanung.
          </p>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <Figure
              slug="carport-u-berdachung-eggerling-8"
              alt="Solarcarport mit Aluminium-Unterkonstruktion"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="6x2-aufdach-terrasse-anton1"
              alt="Terrassenüberdachung mit teiltransparenten Modulen"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="zaun-muster-vor-haus-2-kopie-2"
              alt="Solarzaun als Grundstücksabgrenzung vor einem Wohnhaus"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
          </div>

          <Link
            href="/referenzen"
            className="mt-12 inline-flex min-h-[44px] items-center text-base font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
          >
            Alle Referenzen ansehen
          </Link>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[20ch] font-display text-title font-semibold">
            Welche Stufe für Ihr Anwesen sinnvoll ist, ergibt die Analyse.
          </h2>
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
