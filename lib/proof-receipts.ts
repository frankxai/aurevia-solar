export interface ProofReceipt {
  productSlug: string;
  productTitle: string;
  version: string;
  date: string;
  status: 'published' | 'pending';
  assistantsTested: string[];
  /** What the evidence shows — plain statements only, each backed by content below. */
  findings: string[];
  /** What the product does not do, refused, or got wrong in testing. */
  boundaries: string[];
  /** A deterministic, reader-checkable example where one exists. */
  workedCheck?: {
    title: string;
    steps: string[];
  };
}

/**
 * Receipts are published with a product, never before. A product without a
 * published receipt cannot leave 'in-development' status (BRAND-EXPERIENCE §6a.3).
 */
export const PROOF_RECEIPTS: ProofReceipt[] = [
  {
    productSlug: 'aurevia-estate-architect-core',
    productTitle: 'Estate Architect Skill v0.2',
    version: '0.2.0',
    date: '2026-08-19',
    status: 'pending',
    assistantsTested: [],
    findings: [
      'Full assistant transcripts (Claude, ChatGPT, Gemini) will be published here before the skill leaves draft status.',
    ],
    boundaries: [
      'Produces planning estimates only — no load capacities, compliance verdicts, or certificates.',
      'Does not know stock, prices, delivery times, VAT rates, or subsidy rules, and says so.',
      'Estimates depend on the module datasheet you actually buy; the built-in 440 Wp reference is an assumption.',
    ],
    workedCheck: {
      title: 'Check the geometry yourself (double-carport example)',
      steps: [
        'Canopy: 6.00 m × 5.80 m. Reference module: 1.762 m × 1.134 m (landscape).',
        'Across the 5.80 m width: 3 columns × 1.762 m = 5.286 m — fits. A 4th column (7.048 m) does not.',
        'Along the 6.00 m length: 5 rows × 1.134 m = 5.670 m — fits. A 6th row (6.804 m) does not.',
        '3 × 5 = 15 modules × 440 Wp = 6.6 kWp. The withdrawn v0.1 claimed 32 modules on this canopy — 64 m² of glass on 34.8 m² of roof.',
      ],
    },
  },
];

export interface CorrectionRecord {
  date: string;
  what: string;
  why: string;
}

/** Published corrections are permanent. Removing one fails the invariant gate intent. */
export const CORRECTIONS: CorrectionRecord[] = [
  {
    date: '2026-08-19',
    what: 'Withdrew every v0.1 digital product file and stripped the storefront.',
    why: 'The v0.1 shop displayed invented ratings and review counts for products that had never been sold, confirmed fake license activations without any payment system, asserted a 0% VAT rate that does not apply to digital goods, advertised deliverables that did not exist, and shipped a calculator whose example configuration was physically impossible. All of it is gone; paid products return only when each file exists, each number is generated, and each capability claim carries a receipt on this page.',
  },
];
