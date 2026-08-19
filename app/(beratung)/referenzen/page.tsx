import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Figure } from '@/components/Figure';

export const metadata: Metadata = {
  title: 'Referenzen',
  description:
    'Referenzaufnahmen von Solarüberdachungen, Terrassendächern und Solarzäunen aus dem RIAL-Medienbestand.',
};

/**
 * Every entry is a repository reference photograph. Captions stay descriptive and do
 * not expose names inferred from source filenames or turn an image into performance proof.
 */
const projekte = [
  { slug: 'carport-u-berdachung-eggerling-8', alt: 'Solarcarport mit Aluminium-Unterkonstruktion' },
  { slug: '5x3-carport-rostak-19', alt: 'Doppelcarport mit PV-Modulüberdachung' },
  { slug: 'front-rechts-tesla-hyndai', alt: 'Doppelcarport mit zwei Elektrofahrzeugen unter der Überdachung' },
  { slug: '6x2-aufdach-terrasse-anton1', alt: 'Aufdach-Terrassenüberdachung mit teiltransparenten Modulen' },
  { slug: '6x2-aufdach-terrasse-anton5', alt: 'Terrassenüberdachung, Ansicht von der Gartenseite' },
  { slug: 'zaun-muster-vor-haus-2-kopie-2', alt: 'Solarzaun als Grundstücksabgrenzung vor einem Wohnhaus' },
  { slug: 'pergola', alt: 'Freistehende Pergola mit teiltransparenter Modulbelegung' },
  { slug: '5x3-carport-rostak-22', alt: 'Doppelcarport, Detail der Trägerkonstruktion' },
  { slug: 'img-2318', alt: 'Untersicht der bifazialen Module bei direkter Sonneneinstrahlung' },
];

const perspektiven = [
  { slug: 'dji-0081', alt: 'Erhöhte Ansicht einer PV-Terrassenüberdachung im Gebäudebestand' },
  { slug: 'dji-0549', alt: 'Untersicht einer PV-Terrassenüberdachung mit angrenzendem Garten' },
  { slug: 'dji-20241025120013-0161-d', alt: 'Erhöhte Ansicht eines Vordachs mit PV-Modulen' },
];

export default function Referenzen() {
  return (
    <>
      <PageHeader
        label="Referenzaufnahmen"
        title="Gebaut, nicht gerendert."
        lead="Die Aufnahmen stammen aus dem RIAL-Medienbestand und zeigen reale bauliche Ausführungen. Sie belegen nur das sichtbare Motiv; Leistungsdaten, Projektzuordnung und Übertragbarkeit folgen daraus nicht."
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-section sm:px-8">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projekte.map((p) => (
            <Figure
              key={p.slug}
              slug={p.slug}
              alt={p.alt}
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Drei Perspektiven</p>
          <h2 className="mt-5 max-w-[26ch] font-display text-title font-semibold">
            Die Einbindung ist das Argument.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2">
            Erst verschiedene Blickwinkel zeigen, wie Modulfläche, Tragwerk und Bestand
            zusammenkommen. Sie belegen eine Ausführung, aber keine Übertragbarkeit auf ein anderes
            Objekt.
          </p>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {perspektiven.map((p) => (
              <Figure
                key={p.slug}
                slug={p.slug}
                alt={p.alt}
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[24ch] font-display text-title font-semibold">
            Für Ihr Anwesen beginnt es mit einer Analyse.
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">
            Referenzen zeigen, was gebaut wurde. Was für Ihr Grundstück sinnvoll ist, ergibt sich
            aus Ausrichtung, Verbrauch und Zielsetzung — nicht aus einem Katalog.
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
