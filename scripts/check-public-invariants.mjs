import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const failures = [];
const fail = (message) => failures.push(message);
const read = (relativePath) => readFileSync(join(root, relativePath), 'utf8');

const manifest = JSON.parse(read('public/media/manifest.json'));
const mediaBySlug = new Map(manifest.map((item) => [item.slug, item]));

for (const retiredRoute of ['app/api/stock/route.ts', 'app/api/quiz/route.ts']) {
  const absolutePath = join(root, retiredRoute);
  if (!existsSync(absolutePath)) {
    fail(`${retiredRoute}: retired public endpoint must retain an explicit 410 response`);
    continue;
  }

  const source = read(retiredRoute);
  if (!source.includes('status: 410')) {
    fail(`${retiredRoute}: retired public endpoint must return 410 Gone`);
  }
  for (const forbiddenField of ['inStock', 'available', 'unitPrice', 'customerId']) {
    if (source.includes(forbiddenField)) {
      fail(`${retiredRoute}: retired endpoint contains legacy live-data field ${forbiddenField}`);
    }
  }
}

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

const publicClaimFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/agb/page.tsx',
  'app/datenschutz/page.tsx',
  'app/impressum/page.tsx',
  'app/widerruf/page.tsx',
  'app/analyse/page.tsx',
  'app/autarkie/page.tsx',
  'app/konzept/page.tsx',
  'app/realisierung/page.tsx',
  'app/herkunft/page.tsx',
  'app/referenzen/page.tsx',
  'components/AnalyseForm.tsx',
  'components/Deliverable.tsx',
  'components/Ladder.tsx',
  'lib/company.ts',
  'lib/pricing.ts',
];

const forbiddenPatterns = [
  [/ec\.europa\.eu\/consumers\/odr/i, 'obsolete EU dispute-platform URL'],
  [/\bODR_URL\b/, 'obsolete ODR export'],
  [/ODR platform reference is mandatory/i, 'obsolete mandatory-ODR comment'],
  [/390\s*€/i, 'unapproved numeric analysis price'],
  [/2[.]900\s*€/i, 'unapproved numeric concept price'],
  [/tatsächlich verfügbarem Lagerbestand/i, 'unverified live-inventory wording'],
  [/60\s*[–-]\s*75\s*%/i, 'universal autonomy performance range'],
  [/85\s*[–-]\s*95\s*%/i, 'universal autonomy performance range'],
];

for (const relativePath of publicClaimFiles) {
  const source = read(relativePath);
  for (const [pattern, label] of forbiddenPatterns) {
    if (pattern.test(source)) fail(`${relativePath}: ${label}`);
  }
}

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
  `Public invariant check passed: ${manifest.length} media entries, ${publicClaimFiles.length} claim surfaces.`,
);
