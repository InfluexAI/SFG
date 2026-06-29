# Skrobonja Financial Group — Design System

A brand & UI system for **Skrobonja Financial Group**, a St. Louis–based wealth management firm
founded in 1993 by Brian Skrobonja (ChFC®, CPWA®). The firm positions itself as a *Full-Service
Financial Concierge* / personal family office, coordinating legal, tax, insurance, and investment
strategy under proprietary programs like **WealthSync™**, **BUILD Banking™**, and **Cashflow
Confidence™**.

The visual world is **editorial and premium**: a high-contrast serif (GT Super) for voice and
headlines, a clean grotesque (HK Grotesk) for interface, anchored on the brand **navy `#24334A`**
from the logo, over warm ivory paper, with a restrained brass accent for moments of emphasis.

---

## Sources used to build this system

- **Logos** — `uploads/Logo on Light Background.svg`, `uploads/Logo on Dark Background.svg`
  (copied + cropped into `assets/`). The "SF" monogram emblem in both files was authored with a
  **photographic raster fill that is missing from the file**, so the original textured emblem can't
  render. The emblem *outline is vector*, so the system also ships **solid-fill lockups** —
  `logo-full-navy.svg` / `logo-full-white.svg` — where the monogram is filled in brand navy / white.
  Wordmark-only lockups (`logo-wordmark-*.svg`) are also available for tight spaces. *Ask the client
  for the original emblem texture if the photographic fill is required.*
- **Fonts** — GT Super Display, GT Super Text, HK Grotesk (Trial weights) from `uploads/`,
  copied into `assets/fonts/`. **Trial licenses — secure production licenses before shipping.**
- **Brand copy & positioning** — skrobonjafinancialgroup.com, skrobonjawealth.com,
  brianskrobonja.com (public marketing copy, used to drive voice and the UI kit content).
- **`SFG Signature Style.pdf`** — referenced in the upload manifest but **not present in the
  project filesystem**. This is the official brand guide; the color accents and semantic hues here
  are *derived* (see Visual Foundations) and should be reconciled against it. **Please re-upload.**

---

## CONTENT FUNDAMENTALS — how Skrobonja writes

**Voice:** trusted advisor — warm, composed, quietly contrarian. The firm "challenges audiences to
think differently about money" and debunks financial myths, but never with hype. Confidence without
salesmanship.

**Point of view:** **"we" speaking to "you."** Copy is relational and concierge-like, not corporate.
> "We don't just manage money — we align it with your life."
> "We operate like your personal family office."

**Casing & punctuation:** Sentence case for headlines and body. Em dashes for asides. No exclamation
marks. Trademark symbols are part of the brand vocabulary and must be kept: **WealthSync™**,
**BUILD Banking™**, **Cashflow Confidence™**, **Common-Sense Financial™**.

**Cadence:** Lead with a clear, human promise, then a single explanatory sentence. Favor concrete
outcomes — "predictable, tax-smart income," "transforms complexity into clarity" — over abstract
adjectives.

**Vocabulary:** family office · holistic · coordinate / align · clarity · freedom · purpose ·
legacy · generational · fiduciary · concierge. Avoid: "cookie-cutter," product-pushing, jargon left
unexplained.

**Emoji:** none. The brand never uses emoji.

**Compliance is non-negotiable.** Any marketing surface carries the required disclosures —
"Securities offered only by duly registered individuals through Madison Avenue Securities, LLC
(MAS), Member FINRA & SIPC… Past performance is no guarantee of future returns. Investing involves
risk and possible loss of principal capital." See `ui_kits/website/SiteParts.jsx` (Footer) for the
canonical block. Never imply guaranteed returns.

**Example microcopy**
- CTA: *Book a conversation* · *Explore WealthSync™* · *Request introduction*
- Eyebrow: *Full-Service Financial Concierge* · *The WealthSync™ Process*
- Reassurance: *A 30-minute introduction — no obligation.*

---

## VISUAL FOUNDATIONS

**Color.** The official brand palette — **Grey `#4E4C49`**, **Copper `#B87333`**, **Orange
`#CD5700`**, **Dark Blue `#24334A`** (primary), **Darker Blue `#1A2637`**, **Black `#000000`**.
Dark Blue is the dominant brand color; Copper (`--copper-500`) carries eyebrows, rules, and
editorial accents; Orange (`--orange-600`) is the bold CTA color, used sparingly — one per view.
Backgrounds stay warm: default page ivory `#FBFAF6`, tinted sections cream `#F4EFE6`. Never use
both Copper and Orange in the same composition.

**Typography.** Three families, clear roles:
- **GT Super Display** — hero headlines, big numerals. High-contrast didone-ish serif; tight
  tracking (−0.02em), leading 1.02–1.1. This is the brand's "voice."
- **GT Super Text** — long-form body, leads, and pull quotes. Warm, bookish, set 1.5–1.75 leading.
  Italics are expressive — use for emphasis words inside display headlines (often in brass).
- **HK Grotesk** — all UI: buttons, labels, nav, captions, and the signature **tracked uppercase
  eyebrow** (0.18em) that echoes the logo's "FINANCIAL" lockup.

**Spacing & layout.** 8px base grid; generous editorial whitespace; section rhythm ≈96px. Content
maxes ~1240px with 40px gutters. Asymmetric two-column heroes (text + image) are the signature
layout.

**Backgrounds & imagery.** No gradients-as-decoration except the deep navy → near-black gradient
used on CTA blocks and the hero image well. Photography direction (per the logo's photographic
emblem fill and the firm's tone): **warm, natural-light portraiture** — real families, advisors,
St. Louis — never sterile stock. Imagery is placed in rounded wells with soft shadow. *No brand
photography was provided; the UI kit uses labeled placeholder wells where photos belong.*

**Cards.** White surface, hairline border (`--border-subtle`), 16px radius (`--radius-lg`), soft
navy-tinted `--shadow-sm` at rest. Interactive cards lift `−2px` to `--shadow-lg` on hover. A
"sunken" cream variant and an "inverse" navy variant exist for rhythm. **No colored-left-border
cards, no neon, no purple gradients.**

**Corner radii.** Modest and consistent: controls `--radius-sm` (6px), cards `--radius-lg` (16px),
hero/CTA wells `--radius-xl` (24px), pills only for tags/switches. Nothing is fully rounded except
those pills.

**Elevation.** Cool navy-tinted shadows, low and soft (`rgba(20,32,47,…)`), four steps xs→xl. No
hard black drop shadows.

**Borders & rules.** 1px hairlines in gray-200 / cream-deep. The **40×3px brass rule** above pull
quotes and short brass lines before eyebrows are recurring motifs.

**Motion.** Calm and editorial. `--ease-standard` (cubic-bezier .4,0,.2,1), durations 140/220/360ms.
Fades and short translates only — **no bounce, no spring, no infinite loops** on content. Nav gains
a translucent blurred backdrop on scroll.

**Interaction states.** Hover = a step darker (navy buttons → `--navy-800`) or a soft navy-50 wash
(secondary/ghost). Focus = a 3px **brass focus ring** (`--ring-focus`). Press relies on the darker
active color rather than scale. Links underline on hover with a 2px offset.

**Transparency & blur.** Used deliberately: the sticky nav backdrop blur, the modal scrim
(`rgba(15,25,37,.55)` + 3px blur). Otherwise surfaces are solid.

---

## ICONOGRAPHY

**No brand icon set was provided** (no icon font, sprite, or SVG icon library in the uploads). The
brand is type-led and uses **no emoji** and **no unicode glyph icons** in headlines. Where small
indicators are needed, the system currently uses minimal geometric brass marks (a small filled
square in a brass-tint tile) rather than literal icons — consistent with the restrained, editorial
tone.

**Recommended substitute (flagged):** for product UI that genuinely needs icons, use
**[Lucide](https://lucide.dev)** — thin, geometric, 1.5–2px stroke — which matches the refined
grotesque feel. Load from CDN and render in `currentColor` so icons inherit navy/brass:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```
Keep icons sparse, stroke-only, sized 18–24px, never multicolor. **Confirm against the Signature
Style PDF before standardizing** — the client may have a prescribed set.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link (imports only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper for Claude Code.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`,
`elevation.css`, `base.css`. All reached via `styles.css`.

**`assets/`** — `logo-wordmark-navy.svg`, `logo-wordmark-white.svg` (safe lockups),
`logo-light-bg.svg`, `logo-dark-bg.svg` (originals, emblem blank), `fonts/` (GT Super + HK Grotesk).

**`components/`** — React primitives (namespace `window.SkrobonjaFinancialDesignSystem_ffb578`):
- `core/` — **Button**, **Badge**, **Tag**, **Avatar**
- `content/` — **Card**, **StatBlock**, **Quote**, **Eyebrow**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**

**`ui_kits/website/`** — `index.html`: a full marketing **homepage** recreation (sticky nav, hero,
WealthSync™ process, services grid, testimonial, CTA, footer w/ disclosures, contact modal),
composed from the primitives. JSX in `SiteParts.jsx` + `SiteBody.jsx`.

**`guidelines/cards/`** — foundation specimen cards rendered in the Design System tab
(Colors, Type, Spacing, Brand).

---

## Caveats
1. **`SFG Signature Style.pdf` is missing** — brass accent + semantic palette are derived. Re-upload
   to reconcile.
2. **Logo emblem texture is missing** — the original photographic fill is absent; the system ships
   solid-fill monogram lockups (`logo-full-*.svg`) plus wordmark-only versions. Provide the emblem
   texture if the photographic treatment is required.
3. **Fonts are Trial weights** — license before production.
4. **No brand photography or icon set provided** — placeholders + a flagged Lucide substitution.
