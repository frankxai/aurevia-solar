# Aurevia Tokens

Source of truth: `app/globals.css` + `tailwind.config.ts` in `frankxai/aurevia-solar`.
This file transcribes them for cross-repo reference. Promotion target:
`starlight-design-intelligence/brand-packs/aurevia/` (deferred 2026-08-19 — that repo was
mid-flight under another agent).

## Color

| Token | Value | Role |
|---|---|---|
| `--au-paper` | `#f4f0e7` | Page ground — warm ivory |
| `--au-paper-2` | `#ebe5da` | Recessed panels, grids |
| `--au-surface` | `#faf8f2` | Raised cards, forms |
| `--au-ink` | `#191a17` | Primary text — near-black |
| `--au-ink-2` | `#42443e` | Secondary text |
| `--au-ink-3` | `#65685f` | Captions, labels |
| `--au-rule` | `#aaa69b` | Hairlines |
| `--au-rule-soft` | `#d6d0c5` | Soft hairlines, grid lines |
| `--au-copper` | `#8a6039` | Wayfinding accent — never decorative flood |
| `--au-copper-text` | `#704a29` | Copper as text / focus outline |
| `--au-copper-soft` | `#e7d8c6` | Copper wash (selection, highlights) |
| `--au-data` | `#315967` | Data / technical values |
| `--au-positive` | `#3d654b` | Confirmed / available |
| `--au-attention` | `#8b4e32` | Caution, correction notes |

No dark theme. No amber, no emerald, no gradient text. Copper is a signal, not a paint.

## Type

- `font-display`: **Fraunces** (fallback Georgia, serif) — theses, chapter heads.
- `font-sans`: **Inter** (fallback system-ui) — navigation, facts, forms, notices.
- Scale: `display` clamp(2.5rem→4.75rem) · `title` clamp(1.75rem→2.5rem) ·
  `measure` clamp(3rem→6rem) for single large figures.
- Sentence case. All-caps only as a ≤3-word, ≤12px eyebrow, max one per viewport.

## Geometry & rhythm

- Radii: `1px / 2px / 3px` — deliberately near-square; the brand reads as instrumentation.
- Spacing: 8-px rhythm; `--au-space-5` clamp(2.5rem→4.5rem) block, `--au-space-7`
  clamp(4.75rem→8rem) section.
- Measure: `max-w-prose` = 64ch.

## Motion

- Easing: `--au-ease` `cubic-bezier(0.16, 1, 0.3, 1)`.
- Durations: `micro` 180ms (state changes), `enter` 520ms (section entry).
- Motion explains state or hierarchy; nothing loops, nothing floats.
- `prefers-reduced-motion` always respected.
