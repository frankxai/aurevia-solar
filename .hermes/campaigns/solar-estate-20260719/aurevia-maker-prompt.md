# Objective
Upgrade Aurevia into a release-candidate premium, editorial energy-autonomy brand experience on branch `agent/hermes/aurevia-premium-experience-system`.

This is one bounded maker lane in a solar-estate campaign. Aurevia must be a distinct homeowner/estate-owner advisory brand, not a reskin of RIAL, PV Lager, SolarCarport.tech, or VR Gebäudetechnik.

# Mandatory safety and workspace rules
- Work only in `C:/Users/frank/starlight/repos/aurevia-solar`.
- NEVER recursive-search `C:/`, `C:/Users/frank`, home, Desktop, Documents, Downloads, OneDrive, or any phone/MTP mount.
- Do not clone, create worktrees, install packages, modify credentials, read `.env`, commit, push, deploy, publish, change DNS, or contact anyone.
- Check free C: GiB first. Current campaign admission was BOUNDED (~203 GiB free); if below 80 GiB, do not fan out or install anything.
- Preserve existing public legal/company data; do not print secrets or private customer data.
- AI advice is not structural, electrical, permitting, grid, tax, or commissioning approval. Do not add claims that imply certification or human engineering review unless the repo has verifiable evidence.
- “Unknown is not approved.” Do not hard-code live inventory, pricing, yield, savings, tax eligibility, warranty, certification, or performance claims as universal facts.

# Read first
Read the complete current boundary before editing:
- `package.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- `components/Figure.tsx`, `components/Ladder.tsx`, `components/Deliverable.tsx`, `components/Measure.tsx`, `components/Footer.tsx`, `components/Nav.tsx`
- `lib/company.ts`, all current legal pages, and the bounded file list under `public/media`/the media manifest without broad search.
- Run `git status --short`, `git diff --stat`, and the existing build before edits.

# Evidence from live preview audit
- Current preview is substantially more coherent than the legacy Wix sites: restrained black/ivory editorial typography and a clear paid analysis offer.
- However the hero screenshot showed a very large blank field and the intended architecture photograph was not visible. Find the real cause in `Plate`/manifest/CSS; do not guess. Provide a graceful, intentional fallback if the referenced media is missing.
- The page is text-heavy and visually repetitive. It needs at least one credible proof-led visual/project module and better journey pacing using existing, rights-safe repository media only.
- The source contains legacy generic “Apple-Grade Luxury UI/UX Pro Max” utilities and gradient/glass leftovers. Remove only dead/unused slop after proving it is unused; preserve restrained editorial direction.
- `lib/company.ts` claims the EU ODR platform reference is mandatory. That platform was discontinued in 2025; verify current usage within this repo and remove the obsolete ODR link/text if present. Do not invent replacement legal advice.
- Pricing/tax/engineering language must be qualified and truthful, not absolute. Preserve commercial clarity but add compact boundaries where needed.

# Required implementation
1. Add `docs/BRAND-EXPERIENCE.md` as the Aurevia SSOT: audience, promise, role within the RIAL/PV Lager/SolarCarport/VR estate, distinctive visual and verbal rules, non-goals, conversion path, and evidence/claim rules.
2. Improve the homepage hierarchy and visual pacing while preserving its restrained premium editorial identity. No generic neon, glassmorphism, glow-card, gradient overload, pill soup, dashboard panels, or “AI-first” buzzwords.
3. Fix the hero/project media presentation from root cause and ensure a non-broken, intentional fallback.
4. Add a compact proof-led project/experience module using existing rights-safe media and explicit labels such as example/reference/subject to site validation where appropriate. Do not fabricate customer names, numbers, testimonials, savings, inventory, or approvals.
5. Improve responsive behavior and accessibility: semantic headings/landmarks, focus-visible states, target sizes, reduced-motion behavior, alt text, contrast, and no horizontal overflow at 390px.
6. Remove obsolete ODR references if present, and qualify high-risk legal/tax/engineering language without turning the page into a wall of disclaimers.
7. Add deterministic checks for the critical public-claim/media/legal invariants if practical without new dependencies.

# Acceptance criteria
- `npm run build` passes from the current dependency state without installing or changing the lockfile.
- `npx tsc --noEmit` or project-local TypeScript equivalent passes without installing.
- No lockfile churn, dependency changes, secrets, deployment, commit, or push.
- Homepage renders with visible intentional media or a designed fallback; no giant accidental blank hero gap.
- At 390px and desktop, no horizontal overflow; primary CTA remains obvious; navigation and key controls are keyboard reachable.
- Obsolete EU ODR link/text is absent from user-facing surfaces and comments that claim it is mandatory are corrected.
- Diff is surgical and limited to this objective.

# Finish
Run the acceptance checks. Write `.hermes/campaigns/solar-estate-20260719/aurevia-maker-receipt.md` containing exact changed paths, commands/results, remaining blockers, and rollback (`git restore <changed paths>`). Do not commit or push.