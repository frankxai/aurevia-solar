import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const failures = [];
const fail = (message) => failures.push(message);
const read = (relativePath) => readFileSync(join(root, relativePath), 'utf8');

const manifest = JSON.parse(read('public/media/manifest.json'));
const mediaBySlug = new Map(manifest.map((item) => [item.slug, item]));

// --- Retired endpoints must stay 410 and free of live-data fields -------------
for (const retiredRoute of [
  'app/api/stock/route.ts',
  'app/api/quiz/route.ts',
  'app/api/dossier/route.ts',
]) {
  const absolutePath = join(root, retiredRoute);
  if (!existsSync(absolutePath)) {
    fail(`${retiredRoute}: retired public endpoint must retain an explicit 410 response`);
    continue;
  }

  const source = read(retiredRoute);
  if (!source.includes('status: 410')) {
    fail(`${retiredRoute}: retired public endpoint must return 410 Gone`);
  }
  for (const forbiddenField of ['inStock', 'available', 'unitPrice', 'customerId', 'VERIFIED_AND_RESERVED', 'ExpiresInHours']) {
    if (source.includes(forbiddenField)) {
      fail(`${retiredRoute}: retired endpoint contains legacy live-data field ${forbiddenField}`);
    }
  }
}

// --- Media manifest integrity -------------------------------------------------
for (const item of manifest) {
  for (const field of ['src', 'thumb']) {
    const publicPath = item[field];
    if (typeof publicPath !== 'string' || !publicPath.startsWith('/media/')) {
      fail(`media ${item.slug}: ${field} must start with /media/`);
      continue;
    }
    if (!existsSync(join(root, 'public', publicPath.slice(1)))) {
      fail(`media ${item.slug}: missing ${publicPath}`);
    }
  }
}

for (const slug of ['dji-0081', 'dji-0184']) {
  if (!mediaBySlug.has(slug)) fail(`critical homepage media missing from manifest: ${slug}`);
}

// --- Recursive claim scan over every public source surface --------------------
// The previous 17-file allowlist let an agent invert the homepage while keeping
// three sentinel strings intact. Scan everything; allowlists only per-pattern.
const scanDirs = ['app', 'components', 'lib'];
const scanExtensions = new Set(['.ts', '.tsx', '.mjs', '.css']);

function* walk(dir) {
  for (const entry of readdirSync(join(root, dir))) {
    const rel = join(dir, entry);
    const stats = statSync(join(root, rel));
    if (stats.isDirectory()) {
      yield* walk(rel);
    } else if ([...scanExtensions].some((ext) => entry.endsWith(ext))) {
      yield rel.split('\\').join('/');
    }
  }
}

const forbiddenEverywhere = [
  [/ec\.europa\.eu\/consumers\/odr/i, 'obsolete EU dispute-platform URL'],
  [/\bODR_URL\b/, 'obsolete ODR export'],
  [/ODR platform reference is mandatory/i, 'obsolete mandatory-ODR comment'],
  [/390\s*€/i, 'unapproved numeric analysis price'],
  [/2[.]900\s*€/i, 'unapproved numeric concept price'],
  [/tatsächlich verfügbarem Lagerbestand/i, 'unverified live-inventory wording'],
  [/60\s*[–-]\s*75\s*%/i, 'universal autonomy performance range'],
  [/85\s*[–-]\s*95\s*%/i, 'universal autonomy performance range'],
  [/reviewCount/, 'fabricated social proof field (no review system exists)'],
  [/rating:\s*[\d.]/, 'fabricated rating value (no review system exists)'],
  [/Lizenz Aktiv/i, 'fake purchase confirmation'],
  [/setPurchased/, 'client-side purchase simulation'],
  [/Sofort-Zugang/, 'instant-access CTA without a payment rail'],
  [/inkl\.\s*0\s*%\s*MwSt/i, 'asserted VAT rate on a price (tax statements are per-case)'],
  [/Steuerbefreit/i, 'asserted tax exemption'],
  [/vatExemptionApplied/, 'programmatic VAT-exemption assertion'],
  [/weltweit\s+erste/i, 'unverifiable world-first superlative'],
  [/Statik-Zertifikat/i, 'certificate claim without an issued certificate'],
  [/\d+\s*Jahre\s*(Statik|Garantie)/i, 'guarantee claim outside manufacturer datasheets'],
  [/garantiert\s+\d+\s*Jahre/i, 'guarantee claim outside manufacturer datasheets'],
  [/VERIFIED_AND_RESERVED/, 'fake verification status'],
  [/reserviert!/, 'fake reservation confirmation'],
  [/Stk\.\s*Sofort/i, 'live stock quantity claim'],
  [/totalPromptsInFullPack/, 'advertised pack size decoupled from real content'],
  [/100\+\s*(SOTA\s*)?([A-Za-z-]*\s*)?Prompts/i, 'prompt count claim exceeding real content'],
];

for (const dir of scanDirs) {
  for (const file of walk(dir)) {
    const source = read(file);
    for (const [pattern, label] of forbiddenEverywhere) {
      if (pattern.test(source)) fail(`${file}: ${label}`);
    }
    // A § 12 UStG mention is only allowed with its per-case hedge (SSOT §6).
    if (
      /§\s*12\s*(Abs\.?\s*3\s*)?UStG/.test(source) &&
      !/Einzelfall|steuerliche Beratung/.test(source)
    ) {
      fail(`${file}: § 12 UStG mentioned without the required per-case hedge`);
    }
  }
}

// --- public/skills: only the corrected v0.2 files and withdrawal stubs --------
const skillFiles = {
  'aurevia-estate-architect.skill.md': /version:\s*0\.2/,
  'solar-carport-prompts-sample.json': /"promptsInThisSample":\s*3/,
  'openapi-aurevia-planner.yaml': /WITHDRAWN/,
  'aurevia-bom-calculator.ts': /WITHDRAWN/,
  'aurevia-solar-swarm.json': /"status":\s*"withdrawn"/,
};

const skillsDir = join(root, 'public/skills');
for (const [filename, sentinel] of Object.entries(skillFiles)) {
  const rel = `public/skills/${filename}`;
  if (!existsSync(join(root, rel))) {
    fail(`${rel}: expected corrected/withdrawal file is missing (agent-facing URLs must not 404)`);
    continue;
  }
  if (!sentinel.test(read(rel))) {
    fail(`${rel}: missing its correction/withdrawal sentinel — do not restore withdrawn content`);
  }
}
for (const entry of readdirSync(skillsDir)) {
  if (!(entry in skillFiles)) {
    fail(`public/skills/${entry}: unexpected file — paid deliverables must never live under public/`);
  }
}
const bannedSkillClaims = [
  [/binding/i, 'binding-offer language aimed at third-party assistants'],
  [/60\s*seconds/i, 'binding-allocation timing claim'],
  [/live warehouse/i, 'live-stock capability claim'],
  [/stockReservation/i, 'reservation capability claim'],
];
for (const filename of Object.keys(skillFiles)) {
  const source = read(`public/skills/${filename}`);
  for (const [pattern, label] of bannedSkillClaims) {
    if (pattern.test(source)) fail(`public/skills/${filename}: ${label}`);
  }
}

// --- Homepage proof-module sentinels ------------------------------------------
const home = read('app/page.tsx');
if (!home.includes('slug="dji-0081"')) fail('homepage must use the audited hero media');
if (!home.includes('Referenz · bestehende Ausführung')) {
  fail('homepage proof module must carry an explicit reference label');
}
if (!home.includes('Zu validieren')) fail('homepage proof module must name site validation');

const figure = read('components/Figure.tsx');
if (!figure.includes('MediaFallback')) fail('media primitive must retain its designed fallback');

const analysisForm = read('components/AnalyseForm.tsx');
if (!analysisForm.includes('mailto:')) fail('analysis form must retain a user-controlled handoff');
if (analysisForm.includes('/api/quiz')) fail('analysis form must not call the retired intake API');

const styles = read('app/globals.css');
for (const deadUtility of ['glow-card', 'text-gradient-gold', 'animate-float']) {
  if (styles.includes(deadUtility)) fail(`dead visual utility returned: ${deadUtility}`);
}
if (!styles.includes('prefers-reduced-motion')) fail('reduced-motion override is required');
if (!styles.includes(':focus-visible')) fail('visible keyboard focus styling is required');

if (failures.length > 0) {
  console.error('Public invariant check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Public invariant check passed: ${manifest.length} media entries, recursive claim scan over ${scanDirs.join(', ')} + public/skills.`,
);
