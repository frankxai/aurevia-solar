/**
 * NEEDS FRANK'S CONFIRMATION BEFORE THIS SITE LEAVES *.vercel.app.
 *
 * These are recommended figures, not established ones. They were derived from what a
 * Planungsbüro charges for comparable work (€2.500–6.000, six weeks) and from the
 * position that Stufe 1 must be cheap enough to buy without a meeting and expensive
 * enough to qualify. Nothing here came from RIAL Energy.
 *
 * The ladder logic that matters more than the numbers: Stufe 1 is credited against
 * Stufe 2, and Stufe 2 is credited against the installation. The customer is never
 * paying twice, which is what makes the first step easy to take.
 */
export const PRICING = {
  analyse: {
    amount: 390,
    display: '390 €',
    note: 'Einmalig. Wird vollständig auf ein Konzept angerechnet.',
  },
  konzept: {
    display: 'ab 2.900 €',
    note: 'Wird vollständig auf die Realisierung angerechnet.',
  },
  realisierung: {
    display: 'nach Konzept',
    note: 'Festpreis auf Basis des Konzepts. Umsetzung durch die RIAL Energy GmbH.',
  },
} as const;

/** Prices are shown to consumers, so they are gross and must say so (PAngV). */
export const PRICE_DISCLOSURE = 'Alle Preise inkl. gesetzlicher Umsatzsteuer.';
