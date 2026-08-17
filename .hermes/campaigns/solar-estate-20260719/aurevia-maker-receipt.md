# Aurevia maker receipt

Date: 2026-08-09  
Branch boundary: `agent/hermes/aurevia-premium-experience-system`  
Workspace: `C:/Users/frank/starlight/repos/aurevia-solar`

## Outcome

Implemented the premium editorial Aurevia experience, an evidence-labelled homepage reference
module, resilient media fallback, qualified public claims, corrected legal/contact flow, and a
deterministic public-invariant check. No package installation, lockfile edit, credential read,
commit, push, deploy, publish, DNS change, or external contact was performed.

The maker completed the code-level work but could not launch the local verification commands in its
managed runner. Hermes subsequently completed the independent build, TypeScript, invariant, route,
desktop, and true-mobile verification described below.

## Changed paths

Added:

- `docs/BRAND-EXPERIENCE.md`
- `scripts/check-public-invariants.mjs`
- `.hermes/campaigns/solar-estate-20260719/aurevia-maker-receipt.md`

Modified:

- `package.json`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/api/quiz/route.ts` — retired public endpoint now returns explicit `410 Gone`
- `app/api/stock/route.ts` — retired public endpoint now returns explicit `410 Gone`
- `app/agb/page.tsx`
- `app/analyse/page.tsx`
- `app/autarkie/page.tsx`
- `app/datenschutz/page.tsx`
- `app/herkunft/page.tsx`
- `app/impressum/page.tsx`
- `app/konzept/page.tsx`
- `app/realisierung/page.tsx`
- `app/referenzen/page.tsx`
- `app/v2/page.tsx`
- `components/AnalyseForm.tsx`
- `components/Deliverable.tsx`
- `components/Figure.tsx`
- `components/Ladder.tsx`
- `components/SiteHeader.tsx`
- `lib/company.ts`
- `lib/media.ts`
- `lib/pricing.ts`

Deleted after a bounded no-import proof or public-invariant failure:

- `components/BrandLogoV2.tsx`
- `components/CarportConfiguratorV2.tsx`
- `components/LeadMagnetModal.tsx`
- `components/MobileStickyBarV2.tsx`
- `components/NavbarV2.tsx`
- `components/SellerCopilotModal.tsx`
- `components/VoiceAgentWidget.tsx`
- `lib/pvlager-media.ts`

No files under `public/media` were changed. The requested `components/Footer.tsx` and
`components/Nav.tsx` do not exist in this checkout; the active header is `components/SiteHeader.tsx`
and the footer is in `app/layout.tsx`.

## Commands and results

### Boundary and baseline

- Free-space probes using WMI, `Get-PSDrive`, and `System.IO.DriveInfo`: **BLOCKED**. The first WMI
  query stalled and was terminated; subsequent probes were rejected before PowerShell started with
  `CreateProcessAsUserW failed: 5 (Access is denied.)`. The user-provided campaign admission was
  BOUNDED at approximately 203 GiB. No fan-out or installation occurred.
- `pp preflight --workload build`: **BLOCKED** by the same managed-runner process-creation error.
- `.git/HEAD` read: **PASS** —
  `refs/heads/agent/hermes/aurevia-premium-experience-system`.
- `.git/config` read: **PASS** — origin is
  `https://github.com/frankxai/aurevia-solar.git`.
- `gh repo view frankxai/aurevia-solar --json nameWithOwner,url,defaultBranchRef`: **BLOCKED** before
  command start by the managed runner.
- `git status --short`: **BLOCKED** before command start by the managed runner.
- `git diff --stat`: **BLOCKED** before command start by the managed runner.
- Baseline `npm run build`: **BLOCKED** before command start by the managed runner. No baseline build
  result was available.

### Bounded source and media audit

- Complete requested source/legal reads: **PASS** for every existing requested file and all four
  legal pages.
- `rg --files public/media`: **PASS** — bounded media inventory read only.
- `rg -c '"slug":'`, `rg -c '"src":'`, and `rg -c '"thumb":' public/media/manifest.json`:
  **PASS** — 32 of each.
- `rg --files public/media | rg -c "\.webp$"`: **PASS** — 64 local WebP files, matching 32 source/
  thumbnail pairs.
- Pixel inspection: **PASS** for the selected homepage/reference files. It established that
  `dji-0549` is a patio/overhead-module view rather than the claimed aerial estate view, while
  `dji-0081` is the suitable elevated homepage reference and `dji-0184` is the supporting terrace
  reference.
- Dead legacy import scan for the V2 configurator/modal/navigation bundle: **PASS** — no imports
  remained after the retired `/v2` route became a redirect.

### Static public-invariant evidence

- Bounded `rg` scan across `app`, `components`, and `lib` for obsolete ODR references, unapproved
  numeric prices, universal inventory/autonomy claims, legacy glow/gradient/float utilities,
  retired API paths, hard-coded inventory fields, and the former warranty/certification/delivery
  claims: **PASS** — no matches (`rg` exit 1 means zero matches).
- `npm run check:public`: **BLOCKED** before Node started by the managed runner.
- `npx tsc --noEmit`: **BLOCKED** before command start by the managed runner.
- Final `npm run build`: **BLOCKED** before command start by the managed runner.
- Desktop and 390 px browser render: **BLOCKED** because a local Next.js process could not be
  started. Source-level overflow, focus, target-size, alt-text, and reduced-motion safeguards were
  reviewed, but this is not a substitute for rendered QA.

## Maker-time verification blockers — resolved below

The maker could not perform the following checks because its managed runner denied process creation:
build/invariants/TypeScript, desktop and 390 px rendering, and final Git-diff inspection. Hermes ran
the equivalent repository and render checks successfully after the maker exited. `pp preflight`
remained unnecessary because the already-admitted BOUNDED lane performed no install or fan-out.

## Independent Hermes verification

Run after the maker exited, from the same branch and workspace:

- `git status --short`, `git diff --stat`, and `git diff --check`: **PASS**. The bounded working diff
  contains 33 tracked paths plus the documented new campaign, brand, and invariant artifacts.
- First `npx tsc --noEmit`: **FAILED** only because the pre-existing `.next` cache still referenced
  the two deliberately deleted API routes. The generated `.next` directory was removed and every
  check was rerun from a clean build state.
- `npm run check:public`: **PASS** — 32 media entries and 17 public claim surfaces.
- `npx tsc --noEmit`: **PASS** after the clean build-state reset.
- `npm run build`: **PASS** on Next.js 15.5.22 — compiled successfully, lint/type validation passed,
  15 static pages were generated, and the two retired API paths were retained as dynamic tombstones.
- HTTP route smoke for `/`, `/analyse`, `/autarkie`, `/datenschutz`, `/herkunft`, `/impressum`,
  `/konzept`, `/realisierung`, `/referenzen`, `/v2`, `/widerruf`, and `/agb`: **PASS** — all returned
  200 after redirects and each rendered exactly one `h1` with a non-empty title.
- Desktop Chrome evidence at 1440 px: **PASS** — the audited `dji-0081` reference photograph renders
  in the first viewport with the revised editorial hierarchy and qualified caption.
- True CDP mobile evidence at 390 × 844: **PASS** — `innerWidth`, `clientWidth`, and `scrollWidth` are
  all 390 px; the primary reference image loads; no clipping or horizontal overflow is visible.
- Lazy reference media check: **PASS** — `dji-0184` completes after scrolling into view with a
  non-zero natural width.

Evidence:

- `.hermes/campaigns/solar-estate-20260719/evidence/aurevia-desktop-1440.png`
- `.hermes/campaigns/solar-estate-20260719/evidence/aurevia-mobile-390.png`

Technical release-candidate verification is complete. Publication still requires exact-staged
review plus the named business/legal owner's approval of public scope, contract wording, company
data, and media rights. No commit, push, deployment, DNS change, or publication occurred.

## Independent red-team follow-up

The independent release checker found no P0 issue and identified four P1 gates. The locally
actionable gates were resolved without publishing:

- The invariant checker is an intentional release artifact at
  `scripts/check-public-invariants.mjs`; it must be included in any exact staged set with the
  `package.json` script that invokes it.
- The isolated Chrome QA profile created during this session was removed. The workspace now has
  seven explicit untracked artifacts rather than hundreds of browser-state files; `git add -A`
  remains prohibited.
- The previously public `/api/stock` and `/api/quiz` paths were found live on the current preview.
  Instead of silently changing them to 404, both now return deterministic `410 Gone` JSON with
  `Cache-Control: no-store`. Local GET/POST smoke tests pass and no legacy stock/customer fields
  remain.
- The malformed masked telephone URI was corrected to match the displayed number.
- Sweeping claims that every photograph represented a RIAL-planned and RIAL-installed project were
  removed. References are now described only as real built imagery from the RIAL media inventory,
  without claiming project attribution, performance, or transferability.

After these corrections, `npm run check:public`, `npx tsc --noEmit`, `npm run build`, and
`git diff --check` were rerun and passed. Remaining release approvals are human gates: media rights
and privacy consent, factual company/contact/legal data, final commercial wording, and the exact
staged path set.

Current tracked diff: 33 paths, 624 additions, 1,892 deletions. SHA-256 of the binary-capable Git
diff at verification time: `085e123ceb0e1b0bf48ae1d7b1ec749d63b30a0fa344eaedd291187029f78d7b`.
Seven intended untracked campaign/brand/check artifacts remain for exact selective staging.

## Rollback

Restore every tracked path changed or deleted by this lane:

```powershell
git restore -- package.json app/globals.css app/layout.tsx app/page.tsx app/agb/page.tsx app/analyse/page.tsx app/autarkie/page.tsx app/datenschutz/page.tsx app/herkunft/page.tsx app/impressum/page.tsx app/konzept/page.tsx app/realisierung/page.tsx app/referenzen/page.tsx app/v2/page.tsx app/api/quiz/route.ts app/api/stock/route.ts components/AnalyseForm.tsx components/BrandLogoV2.tsx components/CarportConfiguratorV2.tsx components/Deliverable.tsx components/Figure.tsx components/Ladder.tsx components/LeadMagnetModal.tsx components/MobileStickyBarV2.tsx components/NavbarV2.tsx components/SellerCopilotModal.tsx components/SiteHeader.tsx components/VoiceAgentWidget.tsx lib/company.ts lib/media.ts lib/pricing.ts lib/pvlager-media.ts
```

Remove the three new untracked files explicitly (plain `git restore` does not remove them):

```powershell
Remove-Item -LiteralPath 'docs/BRAND-EXPERIENCE.md','scripts/check-public-invariants.mjs','.hermes/campaigns/solar-estate-20260719/aurevia-maker-receipt.md'
```
