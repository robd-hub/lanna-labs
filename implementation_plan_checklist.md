# Lanna Labs — Implementation Checklist

Companion to [implementation_plan.md](./implementation_plan.md). Check items off as you complete them.

**Status key:** Use `[x]` when done, or add date inline: `[x] 2026-06-03`

---

## Pre-build decisions

Lock these before Phase 0 copy work spreads everywhere.

- [ ] **Primary CTA label** chosen (nav + hero + footer + CTA block)
- [ ] **Secondary CTA wording** decided (if nav short vs section long)
- [ ] **Site metadata one-liner** matches hero promise (not legacy “AI systems” copy)
- [ ] **Portfolio v1 projects** listed (minimum: Ayuri Beauty — URL, screenshot, one-line outcome)
- [ ] **Accent color** hex chosen and noted for `globals.css`
- [ ] **About page strategy** chosen (teaser on home + unique `/about` vs shared blocks)
- [ ] **Logo bar meaning** chosen (platforms/tools vs client logos with permission)

---

## Phase 0 — Foundations

- [ ] **0.1** `app/layout.tsx` — title & description aligned with positioning
- [ ] **0.1** `Hero.tsx` — headline/subhead match brand voice
- [ ] **0.1** `Footer.tsx` — CTA copy aligned (no “growth mapping” unless intentional)
- [ ] **0.1** `CTA.tsx` — same CTA label pattern as nav/hero
- [ ] **0.1** `Navbar.tsx` — CTA label consistent
- [ ] **0.2** `About.tsx` — typos fixed (dramatically, credibility, etc.)
- [ ] **0.2** `Team.tsx` — typos fixed; Rob title tightened
- [ ] **0.3** `About.tsx` — unique section `id` (e.g. `story`)
- [ ] **0.3** `Team.tsx` — unique section `id` (e.g. `team`)
- [ ] **0.3** Anchor/hash links updated if any reference old IDs
- [ ] **0.4** `Footer.tsx` — Case Studies removed OR points to real destination
- [ ] **0.5** `ServicesHero.tsx` — eyebrow label filled or empty element removed
- [ ] **0.6** `CTA.tsx` — valid JSX; button styles match `Hero` / `Navbar`

### Phase 0 — verify

- [ ] Read home, about, services, footer aloud — one consistent story
- [ ] No `#` dead links in footer
- [ ] No duplicate `id` in DOM (inspect or search repo)

---

## Phase 1 — Navigation & accessibility

- [ ] **1.1** Mobile menu UI (hamburger / close control)
- [ ] **1.1** Mobile menu includes Services, About, primary CTA
- [ ] **1.1** Menu open/close keyboard accessible; focus handled on close
- [ ] **1.2** Nav on `/` — hash links OR scroll targets documented
- [ ] **1.2** Nav on `/services`, `/about` — route links correct
- [ ] **1.3** Skip link added; visible on focus; jumps to `<main>`
- [ ] **1.4** `focus-visible` styles on links and buttons site-wide
- [ ] **1.5** `prefers-reduced-motion` — marquee disabled/static
- [ ] **1.6** Logo bar label clarifies what names represent
- [ ] **1.6** Decorative marquee not announced as critical content

### Phase 1 — verify

- [ ] Test at 375px width: open menu, visit all links, book CTA
- [ ] Tab through navbar → main → footer without traps
- [ ] Enable “Reduce motion” in OS — marquee behaves correctly

---

## Phase 2 — Trust & proof

- [ ] **2.1** `components/Work.tsx` (or equivalent) created
- [ ] **2.1** At least 2 project cards (Ayuri required)
- [ ] **2.1** Each card: image, title, outcome line, external link
- [ ] **2.1** Section added to `app/page.tsx` with `id="work"` (or agreed ID)
- [ ] **2.2** Footer Case Studies links to work section/page
- [ ] **2.3** `LogoBar.tsx` — reframed label copy
- [ ] **2.3** Optional: real platform wordmarks (if doing)
- [ ] **2.4** `Hero.tsx` — generic stats replaced with studio-specific proof
- [ ] **2.5** Rob photo or intentional placeholder (no `[Photo]` text)
- [ ] **2.6** `Services.tsx` — link to `/services` from home section

### Phase 2 — verify

- [ ] Portfolio images load; alt text descriptive
- [ ] External project links open correctly
- [ ] Hero proof points are factual / defensible

---

## Phase 3 — Visual design & layout variety

- [ ] **3.1** Accent color added to `:root` in `globals.css`
- [ ] **3.2** `components/PageHero.tsx` created
- [ ] **3.2** `ServicesHero.tsx` refactored to use `PageHero`
- [ ] **3.2** `AboutHero.tsx` refactored to use `PageHero`
- [ ] **3.2** Legal heroes refactored to use `PageHero`
- [ ] **3.2** `Hero.tsx` — home variant preserved (stats, height)
- [ ] **3.3** Section-level `fontSize: 1.25vw` removed from home hero
- [ ] **3.4** Team section visually distinct from About on same page
- [ ] **3.5** `/about` — deeper or reordered content vs home duplicate
- [ ] **3.5** Home remains teaser-length About/Team where intended
- [ ] **3.6** Service feature cards — icons/numbers/hover
- [ ] **3.7** Accent applied sparingly (eyebrows, links, ≤3 touchpoints/viewport)

### Phase 3 — verify

- [ ] Subpages don’t feel like copy-paste of home hero
- [ ] About route doesn’t feel like scrolling home twice
- [ ] Accent not overused (grep hex usage if helpful)

---

## Phase 4 — Content architecture & services funnel

- [ ] **4.1** `components/Process.tsx` created
- [ ] **4.1** 3–4 steps match real workflow
- [ ] **4.1** Process on home and/or `/services`
- [ ] **4.2** `ServicesDetail.tsx` — pricing/scope hint on available service
- [ ] **4.2** Coming-soon services still visually de-emphasized
- [ ] **4.3** FAQ component (if doing this phase item)
- [ ] **4.3** FAQ accordion keyboard accessible
- [ ] **4.4** `CTA.tsx` + `Footer.tsx` — unified headline/button pattern

### Phase 4 — verify

- [ ] User can path: home → services detail → book call without confusion
- [ ] FAQ answers match how you actually work (if shipped)

---

## Phase 5 — Performance, SEO & polish

- [ ] **5.1** Home — unique `metadata` title & description
- [ ] **5.1** About — unique metadata
- [ ] **5.1** Services — unique metadata
- [ ] **5.1** Privacy — unique metadata
- [ ] **5.1** Terms — unique metadata
- [ ] **5.2** Default OG image asset added
- [ ] **5.2** `openGraph` configured
- [ ] **5.2** `twitter` card configured
- [ ] **5.3** `thailand.jpg` optimized (format/size)
- [ ] **5.3** `christine.jpg` optimized
- [ ] **5.3** Work screenshots optimized
- [ ] **5.3** LCP image has `priority` + appropriate `sizes`
- [ ] **5.4** Favicon matches `logo-icon.svg`
- [ ] **5.5** Optional motion — single pattern, respects reduced motion

### Phase 5 — verify

- [ ] Lighthouse / PageSpeed: LCP reasonable on home
- [ ] Share link preview (iMessage, Slack, or OG debugger) looks correct
- [ ] Favicon visible in browser tab

---

## Phase 6 — Backlog (optional)

- [ ] **6.1** Testimonials / quotes
- [ ] **6.2** Before/after slider
- [ ] **6.3** Sticky mobile CTA bar
- [ ] **6.4** Dedicated `/work` page
- [ ] **6.5** Pricing page or tiers
- [ ] **6.6** Light theme

---

## New components (track creation)

- [ ] `PageHero.tsx`
- [ ] `Work.tsx` (or `CaseStudies.tsx`)
- [ ] `Process.tsx`
- [ ] `FAQ.tsx` (optional)

---

## Final release checklist

Run before calling the implementation plan “done.”

### Routes & layout

- [ ] `/` — all sections render; no layout shift surprises
- [ ] `/about`
- [ ] `/services`
- [ ] `/privacy`
- [ ] `/terms`

### Responsive

- [ ] 375px (iPhone SE class)
- [ ] 768px (tablet)
- [ ] 1280px+ (desktop)

### Accessibility

- [ ] Skip link works
- [ ] Focus visible on all interactive elements
- [ ] Images have meaningful `alt`
- [ ] Reduced motion respected
- [ ] Color contrast acceptable on `text-muted` and buttons

### Links & CTAs

- [ ] All Cal.com links open; `rel="noopener noreferrer"` present
- [ ] Instagram / X links work
- [ ] No `href="#"` placeholders left (unless intentional)

### Content & SEO

- [ ] No spelling errors in visible copy
- [ ] Metadata matches each page’s content
- [ ] Copyright year correct in footer

### Build

- [ ] `npm run build` succeeds
- [ ] `npm run lint` clean (or only known exceptions)

---

## Progress summary

| Phase | Total tasks | Done |
|-------|-------------|------|
| Pre-build decisions | 7 | |
| Phase 0 | 13 + 3 verify | |
| Phase 1 | 10 + 3 verify | |
| Phase 2 | 10 + 3 verify | |
| Phase 3 | 12 + 3 verify | |
| Phase 4 | 8 + 2 verify | |
| Phase 5 | 14 + 3 verify | |
| Phase 6 | 6 | |
| Final release | 20 | |

_Update the Done column as you go, or strike through phases in this file._

---

*Companion to [implementation_plan.md](./implementation_plan.md).*
