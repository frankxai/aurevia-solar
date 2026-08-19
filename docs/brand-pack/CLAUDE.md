# Agent guardrails — Aurevia

Read `docs/BRAND-EXPERIENCE.md` (SSOT v2) and `docs/POSITIONING.md` before any styling,
copy, or product work in this repo. Non-negotiables for agents:

1. **Never bypass the token layer.** All color/type/radius/motion comes from
   `app/globals.css` + `tailwind.config.ts`. No hex literals, no dark themes, no amber
   gradients, no `rounded-3xl`, no glow/blur orbs, no gradient text, no `uppercase` runs.
2. **Never invent claims.** No ratings, review counts, sales badges, certificates,
   guarantees, VAT rates, stock, delivery times, or superlatives. Numbers are generated or
   counted, never typed. `scripts/check-public-invariants.mjs` enforces this — run
   `pnpm check:public` before proposing any change, and never weaken the gate to make a
   diff pass.
3. **Never simulate commerce.** No purchase flows without a real Merchant-of-Record rail.
   Products without existing deliverables are `in-development` + waitlist.
4. **Agent-facing files** under `public/skills/` never contain stock/reservation/binding
   language; withdrawn versions are replaced in place, never 404'd.
5. **No cross-brand copying.** Nothing from PV Lager / SolarCarport.tech is reskinned here,
   and Aurevia files are never copied into sibling repos (that contamination happened once —
   see BRAND-EXPERIENCE changelog v2.0).
6. **Liability line everywhere.** Engineering outputs are Planungsgrundlage; Fachbetriebe
   carry statics/electrical/permits. This sentence ships on every product page and inside
   every delivered artifact.
