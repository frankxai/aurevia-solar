# aurevia-solar — agent instructions

Next.js site deployed through Vercel's git integration (https://aurevia-solar.vercel.app). This repo is part of the
FrankX / Starlight estate; the shared contract is
`Starlight-Intelligence-System/docs/architecture/agents-md/band-a.md`. Repo rules below.

- Package manager: pnpm (pnpm-lock.yaml is authoritative). Never add a second lockfile.
- Before pushing: `pnpm run check:public` and `pnpm run build` (the build runs the public-invariants check first).
- Work on `agent/<harness>/<scope>` branches and open a draft PR. Never push to `main`.
- Brand and positioning live in `docs/` (`POSITIONING.md`, `BRAND-EXPERIENCE.md`, `brand-pack/`); read them before
  changing public copy.
- Security bumps cite real advisory IDs only: check each with `gh api advisories/<id>` before writing it down.
