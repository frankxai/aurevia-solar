/**
 * Verified against the Impressum of BOTH live RIAL properties
 * (www.solarcarport.tech/impressum and www.pvlager.com/impressum, harvested 2026-08-05).
 * Both agree on every field. Nothing here is inferred.
 *
 * Aurevia trades as a brand of RIAL Energy GmbH, so this is Aurevia's Impressum too.
 * If Aurevia is ever spun into its own legal entity, this file is the only thing to change.
 */
export const COMPANY = {
  legalName: 'RIAL Energy GmbH',
  brand: 'Aurevia',
  street: 'Lautenthaler Str. 11 A',
  postalCode: 'D-38723',
  city: 'Seesen',
  region: 'Harz, Niedersachsen',
  managingDirector: 'Mihail Dohocher',
  register: 'Amtsgericht Braunschweig HRB 210762',
  vatId: 'DE360912776',
  taxNumber: '21/211/04806',
  phone: '+49 1590 6261350',
  phoneHref: '+4915906261350',
  email: 'info@solarcarport.tech',
} as const;

export const COMPANY_ADDRESS_LINES = [
  COMPANY.legalName,
  COMPANY.street,
  `${COMPANY.postalCode} ${COMPANY.city}`,
] as const;

/**
 * The former EU online-dispute platform was discontinued in 2025. Its obsolete link
 * must not be restored; the separate consumer-dispute statement lives in the Impressum.
 */
