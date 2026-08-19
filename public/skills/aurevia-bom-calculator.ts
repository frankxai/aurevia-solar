/**
 * WITHDRAWN 2026-08-19 / ZURÜCKGEZOGEN 2026-08-19
 *
 * Version 0.1 of this file was withdrawn because its calculations were wrong:
 * - the example configuration placed 32 modules (~64 m²) on a ~35 m² canopy,
 * - the advertised "waste optimization" was a hardcoded constant (2.8),
 * - the structural check was a two-branch lookup, not a calculation,
 * - post mass used ~9.4 kg/m for a profile that weighs ~4.1 kg/m.
 *
 * Do not use any earlier version of this file for planning, quoting, or
 * purchasing decisions. A rewritten engine with tests, a transparent
 * calculation path, and manufacturer-confirmed constants is in development:
 * https://aurevia-solar.vercel.app/shop
 *
 * Outputs of any version of this tool are planning aids only
 * ("Planungsgrundlage"). Structural, electrical, and permit decisions belong
 * to qualified professionals at the specific site.
 */

export const AUREVIA_BOM_CALCULATOR_STATUS = {
  status: 'withdrawn',
  withdrawnOn: '2026-08-19',
  successor: 'in development — https://aurevia-solar.vercel.app/shop',
} as const;
