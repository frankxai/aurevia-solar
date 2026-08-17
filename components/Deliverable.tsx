/**
 * The deliverable made tangible. For this buyer the document IS the product —
 * he wants something he can put on his desk and hand to his Steuerberater.
 */
const contents = [
  {
    n: '01',
    title: 'Verbrauchsprofil',
    body: 'Jahres- und Lastgang Ihres Anwesens, aufgeschlüsselt nach Haushalt, Wärme, Mobilität und — falls vorhanden — Betrieb.',
  },
  {
    n: '02',
    title: 'Erzeugungsprognose',
    body: 'Ertragsprognose für betrachtete Dach-, Fassaden- und Freiflächen, mit Annahmen zu Ausrichtung, Verschattung und Datengrundlage.',
  },
  {
    n: '03',
    title: 'Speicher- und Notstromauslegung',
    body: 'Konzeptionelle Dimensionierung für Eigenverbrauch und eine getrennte Betrachtung der gewünschten Ersatz- oder Inselbetriebsfunktion.',
  },
  {
    n: '04',
    title: 'Sektorenkopplung',
    body: 'Einbindung von Wärmepumpe, Ladeinfrastruktur und Gebäudetechnik in ein gemeinsam geregeltes System.',
  },
  {
    n: '05',
    title: 'Komponentenliste',
    body: 'Vorgesehene Fabrikate und Stückzahlen mit gekennzeichnetem Verfügbarkeitsstand. Bestand und Konditionen werden vor Beauftragung erneut bestätigt.',
  },
  {
    n: '06',
    title: 'Phasenplan und Budget',
    body: 'Was zuerst gebaut wird, was warten kann, und was der Ausbau in welcher Reihenfolge kostet.',
  },
];

export function Deliverable() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <div className="max-w-prose">
          <p className="au-label">Das Ergebnis</p>
          <h2 className="mt-5 font-display text-title font-semibold">
            Ein Dokument, mit dem Sie arbeiten können.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            Kein Angebot mit drei Zeilen und einer Summe. Ein Konzept, das Annahmen, Varianten und
            offene Prüfbedarfe nachvollziehbar herleitet — als Grundlage für die von Ihnen
            beauftragten Fach- und Freigabestellen.
          </p>
        </div>

        <dl className="mt-14 grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {contents.map((c) => (
            <div key={c.n} className="au-row py-6">
              <dt className="flex items-baseline gap-4">
                <span className="au-measure text-sm text-ink-3">{c.n}</span>
                <span className="text-lg font-medium text-ink">{c.title}</span>
              </dt>
              <dd className="mt-2 pl-[2.25rem] text-[15px] leading-relaxed text-ink-2">{c.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
