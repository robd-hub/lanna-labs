# Lanna Labs — Frontend Implementation Plan

**Checklist:** [implementation_plan_checklist.md](./implementation_plan_checklist.md)

This plan turns the frontend review into phased, shippable work. Each phase has clear outcomes; later phases assume earlier ones are done unless noted.

**Primary positioning (decide once, apply everywhere):** Custom websites for small and medium businesses — one point of contact, fixed price, craft-led studio (Lanna: calm, Thailand-inspired, done properly).

---

## Phase 0 — Foundations (do first)

**Goal:** One voice, no broken UX, no duplicate anchors or dead ends.

| # | Task | Files / areas | Acceptance criteria |
|---|------|---------------|---------------------|
| 0.1 | **Unify messaging** | `app/layout.tsx` metadata, `Hero.tsx`, `Footer.tsx`, `CTA.tsx`, nav labels | Single headline promise + consistent CTA copy (pick one primary label, e.g. “Book a free call” / “Let’s talk” — use everywhere with same subtext where relevant). Remove “AI systems” / “growth mapping” unless intentionally part of brand. |
| 0.2 | **Copy proofread** | `About.tsx`, `Team.tsx` | Fix typos: dramatically, credibility, “inspired by” (not “from”). Tighten Rob bio title (“Founder” or “Founder & lead designer”). |
| 0.3 | **Fix duplicate `id="about"`** | `About.tsx`, `Team.tsx` | Unique section IDs: e.g. `id="story"` and `id="team"`. Update any future anchor links accordingly. |
| 0.4 | **Remove or fix dead links** | `Footer.tsx` | “Case Studies” either links to real work (Phase 2) or is removed until ready. |
| 0.5 | **Fix empty Services eyebrow** | `ServicesHero.tsx` | Eyrow label present (e.g. “Services”) or element removed — no blank `<p>`. |
| 0.6 | **CTA markup cleanup** | `CTA.tsx` | Valid JSX (no stray `</section >`), consistent button styling with `Hero` / `Navbar`. |

**Estimated effort:** Small (0.5–1 day)

---

## Phase 1 — Navigation & accessibility

**Goal:** Usable on mobile; keyboard- and motion-friendly.

| # | Task | Files / areas | Acceptance criteria |
|---|------|---------------|---------------------|
| 1.1 | **Mobile navigation** | `Navbar.tsx` (new mobile menu state) | Below `md`: hamburger or equivalent opens Services, About, and primary CTA. Focus trap or sensible focus return on close. |
| 1.2 | **Smart nav links** | `Navbar.tsx`, optional small helper | On `/`: optional hash links to `#services`, `#contact` (or dedicated sections). On inner routes: `/services`, `/about`. |
| 1.3 | **Skip link** | `app/layout.tsx` or shared shell | “Skip to main content” visible on focus, targets `<main>`. |
| 1.4 | **Focus styles** | `globals.css`, buttons/links site-wide | Visible `focus-visible` rings on interactive elements (not opacity-only). |
| 1.5 | **Reduced motion** | `LogoBar.tsx`, `globals.css` | `prefers-reduced-motion`: marquee static or paused; respect in any scroll animations added later. |
| 1.6 | **Marquee semantics** | `LogoBar.tsx` | Decorative strip marked appropriately; clarifying label for what names mean (see 2.3). |

**Estimated effort:** Small–medium (1–2 days)

---

## Phase 2 — Trust & proof (highest business impact)

**Goal:** Show work; replace generic stats with studio-specific proof.

| # | Task | Files / areas | Acceptance criteria |
|---|------|---------------|---------------------|
| 2.1 | **Work / portfolio section** | New `components/Work.tsx` (or `CaseStudies.tsx`), `app/page.tsx` | 2–3 project cards: image, title, one-line outcome, external link. Ayuri Beauty as flagship minimum. Placed after Hero or after About (decide in design pass). |
| 2.2 | **Wire footer Case Studies** | `Footer.tsx` | Links to work section (`/#work`) or dedicated `/work` page if scope grows. |
| 2.3 | **Reframe logo bar** | `LogoBar.tsx` | Label clarifies intent: e.g. “Platforms we build with” (not implied client logos). Optional: real SVG/wordmarks if licensing allows. |
| 2.4 | **Replace hero stats** | `Hero.tsx` | Swap generic UX percentages for 3–4 Lanna-specific facts: e.g. sites delivered, typical timeline, performance target (“under 2s”), direct contact. Optional: one short client quote. |
| 2.5 | **Rob team photo** | `Team.tsx`, `public/` | Real photo or intentional placeholder (illustration/initials) — no raw `[Photo]` text. |
| 2.6 | **Services homepage link** | `Services.tsx` | Clear path to `/services` (“See all services” or inline link on section heading). |

**Estimated effort:** Medium (2–3 days, depends on assets/copy)

---

## Phase 3 — Visual design & layout variety

**Goal:** Distinct sections, stronger brand, less “same hero everywhere.”

| # | Task | Files / areas | Acceptance criteria |
|---|------|---------------|---------------------|
| 3.1 | **Design tokens** | `globals.css` | Add 1 accent color (warm gold / stone / muted green — tied to Lanna story). Document hex in `:root`. |
| 3.2 | **Shared `PageHero` component** | New `components/PageHero.tsx`; refactor `Hero.tsx`, `ServicesHero.tsx`, `AboutHero.tsx`, legal heroes | Props: eyebrow, title, subtitle, size (`home` \| `subpage`). Gradients and clamps in one place. Home hero keeps unique height/stats; subpages share `subpage` variant. |
| 3.3 | **Remove hero `1.25vw` on section** | `Hero.tsx` | Section-level font scaling removed; use Tailwind/clamp on elements only. |
| 3.4 | **Section layout differentiation** | `About.tsx`, `Team.tsx`, `Services.tsx` | About page vs home: reduce duplicate scroll (see 3.5). Team uses distinct background or spacing vs About block on same page. |
| 3.5 | **About page de-duplication** | `app/about/page.tsx`, `app/page.tsx` | Home: teaser About + Team. `/about`: deeper story (values, process, extended copy) OR reorder so repeat sections feel intentional, not copy-paste. |
| 3.6 | **Service cards visual weight** | `Services.tsx` | Icons or numbers on feature cards; optional subtle hover. Align with accent token. |
| 3.7 | **Accent usage** | Eyebrows, links, one stat, logo detail | Accent used sparingly (2–3 touchpoints per viewport max). |

**Estimated effort:** Medium (2–4 days)

---

## Phase 4 — Content architecture & services funnel

**Goal:** Clear journey from interest → services detail → booking.

| # | Task | Files / areas | Acceptance criteria |
|---|------|---------------|---------------------|
| 4.1 | **Process strip** | New `components/Process.tsx` | 3–4 steps: Discover → Design → Build → Handoff (or match actual workflow). On home and/or `/services`. |
| 4.2 | **Services detail enhancements** | `ServicesDetail.tsx` | Available service: optional “from £X” band or “Fixed price — scope in call.” Coming-soon items stay de-emphasized. |
| 4.3 | **FAQ (optional)** | New `components/FAQ.tsx`, `/services` | 4–6 questions: timeline, ownership, revisions, hosting, payment. Accordion accessible. |
| 4.4 | **Unified CTA block** | `CTA.tsx`, `Footer.tsx` | Same headline pattern + one button label; footer secondary style OK but same action. |

**Estimated effort:** Medium (1–2 days)

---

## Phase 5 — Performance, SEO & polish

**Goal:** Fast LCP, good share cards, production-ready assets.

| # | Task | Files / areas | Acceptance criteria |
|---|------|---------------|---------------------|
| 5.1 | **Per-page metadata** | `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, legal pages | Unique `title` and `description` per route. |
| 5.2 | **Open Graph / Twitter** | `app/layout.tsx` or per-page | `openGraph` + `twitter` with default OG image (brand mark on dark bg). |
| 5.3 | **Image optimization** | `thailand.jpg`, `christine.jpg`, work screenshots | WebP/AVIF where possible; `priority` on home LCP image; sensible `sizes` on `Image`. |
| 5.4 | **Favicon** | `app/` favicon from `logo-icon.svg` | Consistent with navbar mark. |
| 5.5 | **Light motion (optional)** | Section enter, hero stagger | One animation pattern max; respects `prefers-reduced-motion`. |

**Estimated effort:** Small–medium (1–2 days)

---

## Phase 6 — Nice-to-have (backlog)

| # | Task | Notes |
|---|------|-------|
| 6.1 | Testimonials carousel or quote cards | After 2+ clients willing to quote |
| 6.2 | Before/after slider | Strong for web redesign positioning |
| 6.3 | Sticky mobile CTA after scroll | Thin bar: “Book a call” |
| 6.4 | Dedicated `/work` page | When portfolio exceeds 3–4 projects |
| 6.5 | Pricing page or tier cards | Only if fixed packages are defined |
| 6.6 | Light theme | Low priority for current brand |

---

## Suggested implementation order

```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 (as needed)
```

**Rationale:** Messaging and bugs first (0), then mobile nav (1), then portfolio/proof (2) for conversion, then visual polish (3–4), then SEO/perf (5).

---

## Component map (target state)

| Component | Responsibility |
|-----------|----------------|
| `Navbar` | Desktop + mobile nav, scroll state, consistent CTA |
| `PageHero` | Shared subpage hero; home may extend or wrap |
| `Hero` | Home-only: headline, proof stats, primary CTA |
| `LogoBar` | Clarified tool/platform strip, a11y-safe motion |
| `Work` | Portfolio cards |
| `About` | Studio story (home teaser vs about depth) |
| `Team` | People cards, real photos |
| `Services` | Feature grid + link to services page |
| `Process` | How we work steps |
| `CTA` | Book-a-call section |
| `Footer` | Links, legal, secondary CTA |
| `ServicesDetail` | Numbered service list on `/services` |
| `FAQ` | Optional accordion on services |

---

## Decisions required before build

1. **Primary CTA label** — “Let’s talk” vs “Book a free 30-minute call” (or both: short in nav, long in CTA block).
2. **Portfolio scope** — Which projects ship in v1 (minimum: Ayuri).
3. **Accent color** — Pick one hex aligned with Lanna / Thailand craft story.
4. **About page strategy** — Teaser on home + unique long-form on `/about`, vs shared blocks with different ordering only.
5. **Logo bar** — Tools/platforms only, or client logos with permission.

---

## Testing checklist (per phase)

- [ ] Mobile: nav opens, links work, CTA tappable
- [ ] Desktop: all routes, no duplicate section IDs
- [ ] Keyboard: tab order, skip link, focus visible
- [ ] `prefers-reduced-motion`: marquee/static fallbacks
- [ ] Lighthouse: LCP image, metadata on share preview
- [ ] Copy: no typos; metadata matches page content
- [ ] External links: Cal.com opens with `rel="noopener noreferrer"`

---

## Out of scope (this plan)

- Backend, CMS, or blog
- Automation / AI service pages beyond current “Coming soon” UI
- Rebrand or new logo design
- Legal copy rewrites (structure/a11y only if touched)

---

*Last updated: June 2026 — derived from frontend review brainstorm.*
