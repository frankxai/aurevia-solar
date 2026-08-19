export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'ai-skills' | 'prompt-packs' | 'engineering-software' | 'swarms' | 'enterprise';
  categoryLabel: string;
  /** 'available' = downloadable today; 'in-development' = waitlist only, nothing is sold. */
  status: 'available' | 'in-development';
  /** Planned launch price. Displayed as a plan, never charged — no checkout exists yet. */
  plannedPriceEur: number | null;
  description: string;
  features: string[];
  capabilities: string[];
  /** Only files that exist in this repository, with generated (true) sizes. */
  deliverables: {
    filename: string;
    filetype: string;
    filesize: string;
    description: string;
  }[];
  sampleContent?: {
    type: 'prompt' | 'code' | 'json';
    title: string;
    preview: string;
  };
  licenseTerms: string;
  instantDownloadUrl?: string;
}

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'prod-01-core-skill',
    slug: 'aurevia-estate-architect-core',
    title: 'Aurevia Estate Architect Skill',
    subtitle: 'Planungs-Skill für Claude Code, ChatGPT und Gemini — Erstabschätzung mit expliziten Annahmen',
    category: 'ai-skills',
    categoryLabel: 'AI Skill / Agent Instruction',
    status: 'available',
    plannedPriceEur: 0,
    description:
      'Markdown-Skill, der AI-Assistenten eine ehrliche Erstabschätzung für Solar-Carport- und Dach-PV-Vorplanung beibringt: Modulanzahl aus realer Geometrie, klare Annahmen-Blöcke, keine Bestands-, Preis- oder Statikzusagen. Version 0.2 ersetzt die zurückgezogene Erstfassung.',
    features: [
      'Kompatibel mit Claude Code, ChatGPT, Gemini CLI und anderen Assistenten',
      'Geometrie-basierte Modulanzahl-Abschätzung, die physikalische Grenzen respektiert',
      'Erzwungener Annahmen-Block: Planungsgrundlage, keine Fachplanung',
      'Leitet Hardware-, Preis- und Verfügbarkeitsfragen an die Fachbetriebe weiter',
    ],
    capabilities: [
      'Geometrie-Abschätzung',
      'kWp-Überschlag',
      'JSON-Zusammenfassung',
      'Annahmen-Transparenz',
    ],
    deliverables: [
      {
        filename: 'aurevia-estate-architect.skill.md',
        filetype: 'Markdown Skill Specification',
        filesize: '~4 KB',
        description: 'Vollständiger Skill-Text (v0.2) mit Regeln, Rechenweg und Annahmen-Block.',
      },
    ],
    sampleContent: {
      type: 'prompt',
      title: 'Auszug aus dem Skill (v0.2):',
      preview: `## Rules
1. Reference module for estimates: glass-glass bifacial, 440 Wp, 1762 x 1134 mm.
2. Canopy packing: compute how many modules physically fit from the usable
   dimensions minus edge clearance. Never exceed the usable area.
   Worked example: a 6.00 x 5.80 m double-carport canopy fits
   3 landscape columns x 5 rows = 15 modules (about 6.6 kWp) - not more.
3. Never output a load capacity, compliance verdict, or certificate claim.
4. Never state stock, prices, delivery times, VAT rates, or subsidy eligibility.`,
    },
    licenseTerms: 'CC0 1.0 — freie private und kommerzielle Nutzung.',
    instantDownloadUrl: '/skills/aurevia-estate-architect.skill.md',
  },
  {
    id: 'prod-02-prompt-masterpack',
    slug: 'solar-visual-prompt-masterpack',
    title: 'Solar & Carport Visual Prompt Pack',
    subtitle: 'Kuratierte, getestete Render-Prompts für Midjourney, FLUX und SDXL — in Entwicklung',
    category: 'prompt-packs',
    categoryLabel: 'Visual Prompt Pack',
    status: 'in-development',
    plannedPriceEur: 29,
    description:
      'Fotorealistische Architektur-Prompts für Solar-Installateure, Architekten und Creator. Drei Beispiel-Prompts sind heute frei verfügbar; das vollständige Pack erscheint erst, wenn jeder Prompt mit Testbildern und Negative-Prompt-Matrix belegt ist. Die veröffentlichte Anzahl wird der tatsächlichen Anzahl entsprechen.',
    features: [
      '3 freie Beispiel-Prompts mit exakten Kamera- und Licht-Setups — heute herunterladbar',
      'Vollständiges Pack in Entwicklung: jeder Prompt mit Testbild-Beleg',
      'Negative-Prompt-Matrizen gegen Modul-Raster-Artefakte (in Arbeit)',
      'Material-Definitionen: Struktur-Aluminium, transluzentes Solarglas, EPDM',
    ],
    capabilities: [
      'Midjourney v6.1',
      'FLUX.1',
      'SDXL',
      'Ehrliche Stückzahl bei Launch',
    ],
    deliverables: [
      {
        filename: 'solar-carport-prompts-sample.json',
        filetype: 'JSON Sample (3 Prompts)',
        filesize: '~3 KB',
        description: 'Drei getestete Beispiel-Prompts, frei nutzbar (CC0).',
      },
    ],
    sampleContent: {
      type: 'prompt',
      title: 'Beispiel-Prompt (Bauhaus-Villa mit Doppel-Carport):',
      preview: `Architectural photograph of a luxury minimalist Bauhaus residence with an integrated double solar carport made of heavy-duty black anodized aluminum 100x100mm beams. The canopy features semi-transparent bifacial glass-glass solar panels casting geometric soft shadows on a polished dark concrete driveway. Soft overcast Northern European afternoon light, shot on Hasselblad H6D-100c, 35mm lens, f/4.0, ultra-sharp realistic textures --ar 16:9 --v 6.1 --style raw`,
    },
    licenseTerms: 'Beispiel-Prompts: CC0. Lizenz des vollständigen Packs wird bei Launch veröffentlicht.',
    instantDownloadUrl: '/skills/solar-carport-prompts-sample.json',
  },
  {
    id: 'prod-03-bom-generator',
    slug: 'autonomous-solar-bom-engine',
    title: 'Solar BOM & Cutting-List Engine',
    subtitle: 'Parametrische Stücklisten- und Zuschnitt-Berechnung — in Entwicklung',
    category: 'engineering-software',
    categoryLabel: 'Engineering Software',
    status: 'in-development',
    plannedPriceEur: 79,
    description:
      'TypeScript-Toolkit zur Generierung von Material-Stücklisten und Zuschnittplänen für 100×100-mm-Aluminium-Systeme. Die Erstfassung wurde zurückgezogen, weil ihre Beispielrechnung physikalisch unmöglich war. Die Neuentwicklung erscheint mit Testabdeckung, nachvollziehbarem Rechenweg und vom Hardware-Hersteller bestätigten Konstanten.',
    features: [
      'Geometrie-Validierung: Konfigurationen, die nicht aufs Dach passen, werden abgelehnt',
      'Zuschnittplan mit berechnetem (nicht behauptetem) Verschnitt',
      'CSV- und JSON-Export für Einkauf und ERP',
      'Alle Hardware-Konstanten mit Quellenangabe',
    ],
    capabilities: [
      'TypeScript / Node.js',
      'Test-Suite inklusive',
      'CSV / JSON Export',
      'Offener Rechenweg',
    ],
    deliverables: [],
    licenseTerms: 'Lizenz wird bei Launch veröffentlicht (geplant: Developer- & Installer-Lizenz).',
  },
  {
    id: 'prod-04-swarm-suite',
    slug: 'agentic-solar-swarm-suite',
    title: 'Agentic Solar Swarm Suite',
    subtitle: 'Multi-Agenten-Workflow für Solar-Vorplanung — in Entwicklung',
    category: 'swarms',
    categoryLabel: 'Multi-Agent Swarm',
    status: 'in-development',
    plannedPriceEur: 149,
    description:
      'Ein orchestrierter Agenten-Workflow von der Geometrie-Analyse über die Stücklisten-Erstellung bis zum dokumentierten Planungs-Dossier. Erscheint erst mit vollständigen System-Prompts je Agent, Tool-Schemata und einem lauffähigen Orchestrator samt veröffentlichtem Testlauf — nicht vorher.',
    features: [
      'Vollständige System-Prompts je Agenten-Rolle (nicht nur Rollennamen)',
      'JSON-Schema-Tooldefinitionen statt Tool-Namenslisten',
      'Lauffähiger Orchestrator für Claude Code + generischer Runner',
      'Veröffentlichter Beispiel-Testlauf als Beleg',
    ],
    capabilities: [
      'Claude Code Subagents',
      'Generischer Runner',
      'Dossier-Output',
      'Testlauf-Beleg',
    ],
    deliverables: [],
    licenseTerms: 'Lizenz wird bei Launch veröffentlicht.',
  },
  {
    id: 'prod-05-enterprise-suite',
    slug: 'aurevia-enterprise-white-label',
    title: 'Aurevia White-Label Template',
    subtitle: 'Next.js-Plattform-Template für Solar-Unternehmen — in Entwicklung',
    category: 'enterprise',
    categoryLabel: 'White-Label Template',
    status: 'in-development',
    plannedPriceEur: 499,
    description:
      'Das vollständige Next.js-Template der Aurevia-Plattform inklusive der interaktiven 3D-Explosionsansichten, zum Rebranding für das eigene Unternehmen. Erscheint als installierbares Paket mit Manifest und Setup-Anleitung, sobald es real existiert und dokumentiert ist.',
    features: [
      'Next.js + TypeScript + Tailwind Design-System',
      'Interaktive 3D-Explosions-Komponenten (Modul, Speicher, Carport)',
      'White-Label-Nutzungsrechte ohne wiederkehrende Gebühren (geplant)',
      'Installations-Manifest und Dokumentation',
    ],
    capabilities: [
      'Next.js Source',
      '3D CAD Komponenten',
      'White-Label Branding',
      'Einmalpreis (geplant)',
    ],
    deliverables: [],
    licenseTerms: 'Kommerzielle White-Label-Lizenz — Text wird bei Launch veröffentlicht.',
  },
];
