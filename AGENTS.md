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

## Frontier experience

For product interfaces, editorial work and multimedia, read the [Frontier Experience Constitution](https://github.com/Starlight-Intelligence/starlight-design-intelligence/blob/35c96d7fb4a75d879a92756e03ab5018228eea27/portfolio/frontier-experience-constitution.md) and select the task in its [skill registry](https://github.com/Starlight-Intelligence/starlight-design-intelligence/blob/35c96d7fb4a75d879a92756e03ab5018228eea27/SKILLS.md#frontier-experience-routing). Use this repository's product, brand and release authorities. Record the source revision and the evidence from the actual workflow in the PR.
