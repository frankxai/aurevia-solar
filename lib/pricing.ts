/**
 * Commercial terms are deliberately non-numeric until RIAL has approved a live price.
 * The website may explain the commissioning model, but it must not turn an internal
 * recommendation into a universal public offer.
 */
export const PRICING = {
  analyse: {
    display: 'Honorar nach Umfang',
    note: 'Wird vor Beauftragung verbindlich in Textform ausgewiesen.',
  },
  konzept: {
    display: 'Objektbezogenes Angebot',
    note: 'Umfang und Vergütung folgen aus Analyse und benötigten Prüfleistungen.',
  },
  realisierung: {
    display: 'Individuelles Angebot',
    note: 'Leistungsumfang und Preis regelt ausschließlich der gesonderte Werkvertrag.',
  },
} as const;

export const PRICE_DISCLOSURE =
  'Konkrete Vergütung, Umsatzsteuerbehandlung und eine mögliche Anrechnung werden vor Beauftragung in Textform ausgewiesen.';
