# Design System: Varden B2B

## 1. Visual Theme & Atmosphere

A confident, warm Scandinavian healthcare interface with balanced breathing room and purposeful restraint. The atmosphere is professional yet approachable — like walking into a well-funded healthtech company's Stockholm headquarters: clean blonde wood, abundant natural light, and every surface communicating quiet competence. This is not a sterile hospital dashboard or a loud startup landing page. It is a trustworthy B2B platform that speaks to clinic owners and practice managers who value credibility over flash.

**Density:** 4 — Balanced, generous whitespace. Every section breathes. Content groups are clearly separated by vertical rhythm, not crammed together. Padding is generous (`clamp(3rem, 8vw, 6rem)` between major sections).

**Variance:** 5 — Slight asymmetry, firmly professional. Hero sections use left-aligned or split-screen layouts. Feature sections alternate between left-image/right-text and right-image/left-text zig-zag patterns. Grid layouts use unequal column ratios (7:5, 8:4) rather than equal splits.

**Motion:** 4 — Subtle, purposeful. Elements fade-in on scroll with gentle vertical translation (`translateY(1rem)` to `translateY(0)`). No playful bouncing, no dramatic choreography. Spring physics with higher damping for a weighty, premium feel. Transitions feel intentional, like a confident handshake.

**Language:** All UI text, headings, CTAs, and placeholder content in Swedish. This is a Swedish B2B site for Swedish healthcare professionals.

---

## 2. Color Palette & Roles

### Primary Palette (Varden Brand Book — exact hex codes mandatory)

- **Duck Blue 2** (#055F72) — Primary brand color. Used for: navigation bar background, primary CTA button fills, key section headings, active states, focus rings. This is the anchor color — confident, deep teal that communicates healthcare authority.
- **Duck Blue 5** (#4D9BA9) — Secondary blue. Used for: hover states on primary buttons, secondary interactive elements, icon tints, link text, subtle accent borders. Lighter sibling of Duck Blue 2.
- **Apricot 400** (#FE8E7A) — Single accent color. Used for: CTA highlight buttons (specifically "Boka demo" / "Kom igang"), attention-grabbing badges, notification dots, underline accents on key value propositions. Warm coral-peach that creates contrast against the cool blue palette.
- **Apricot 100** (#F9EAEA) — Warm section background. Used for: CTA banner sections, testimonial highlight strips, promotional blocks. A soft blush that signals "take action here" without shouting.

### Neutrals

- **Charcoal Ink** (#181E29) — Primary text color. All headings, body copy, and navigation links. Deep navy-charcoal, never pure black.
- **Muted Slate** (#566075) — Secondary text. Descriptions, metadata, supporting copy, input placeholders, timestamps.
- **Cloud Canvas** (#F1F3F7) — Page background for alternating sections. Cool-neutral grey that creates depth when alternated with white sections.
- **Pure Surface** (#FFFFFF) — Card fills, hero backgrounds, primary content areas, input fields.
- **Whisper Border** (rgba(86, 96, 117, 0.12)) — Card borders, divider lines, input borders. Derived from Muted Slate at 12% opacity for consistency.

### Banned Colors

- **Logo Blue** (#1D8CB9) — BANNED from all UI elements. Reserved exclusively for the Varden logo mark. Never use in buttons, links, backgrounds, or any interactive element.
- **Pure Black** (#000000) — BANNED. Always use Charcoal Ink (#181E29) instead.
- **Any neon or oversaturated color** — BANNED. No electric blues, no hot pinks, no fluorescent greens.
- **Purple in any shade** — BANNED. No AI-purple aesthetic.

---

## 3. Typography Rules

### Font Stack

- **Display/Headlines:** Satoshi (Variable, 700–900 weight) — Confident geometric sans-serif with distinctive character. Track-tight (`letter-spacing: -0.02em` for display, `-0.01em` for subheadings). Hierarchy driven by weight and color, not excessive size jumps.
- **Body:** Geist (Variable, 400–500 weight) — Clean, highly readable sans-serif. Relaxed leading (`line-height: 1.6`). Max line width `65ch`. Body size minimum `1rem` (16px), secondary body at `0.9375rem` (15px).
- **Mono/Stats:** Geist Mono (500–700 weight) — For statistics counters, data points, pricing figures, and numerical emphasis. Used in the "18 000+ mottagningar" pattern and similar stat displays. Tabular nums enabled.

### Type Scale

| Level | Size | Weight | Font | Tracking | Usage |
|-------|------|--------|------|----------|-------|
| Display | `clamp(2.5rem, 5vw, 4rem)` | 800 | Satoshi | -0.02em | Hero headline |
| H1 | `clamp(2rem, 4vw, 3rem)` | 700 | Satoshi | -0.02em | Page section titles |
| H2 | `clamp(1.5rem, 3vw, 2.25rem)` | 700 | Satoshi | -0.01em | Sub-section titles |
| H3 | `clamp(1.25rem, 2vw, 1.5rem)` | 600 | Satoshi | -0.01em | Card titles, feature heads |
| Body | `1rem` (16px) | 400 | Geist | 0 | Primary body copy |
| Body Small | `0.875rem` (14px) | 400 | Geist | 0.01em | Captions, metadata |
| Stat Number | `clamp(2rem, 4vw, 3.5rem)` | 700 | Geist Mono | -0.02em | Counter statistics |
| Stat Label | `0.875rem` (14px) | 500 | Geist | 0.05em | Labels beneath stat numbers, uppercase |

### Typography Banned List

- **Inter** — BANNED. Generic, overused in AI-generated interfaces.
- **Roboto** — BANNED. Brand book default we are deliberately upgrading from.
- **Times New Roman, Georgia, Garamond, Palatino** — BANNED. No generic serifs.
- **System UI / default sans-serif** — BANNED for display text. Acceptable only as final fallback in font stack.

---

## 4. Component Stylings

### Buttons

- **Primary CTA:** Duck Blue 2 (#055F72) fill, white text, `border-radius: 0.75rem` (12px), `padding: 0.875rem 2rem`. Hover: Duck Blue 5 (#4D9BA9) fill with smooth 200ms transition. Active: `translateY(1px)` tactile push. Font: Geist, 500 weight, `0.9375rem`.
- **Accent CTA ("Boka demo"):** Apricot 400 (#FE8E7A) fill, Charcoal Ink (#181E29) text. Hover: darken 8% with 200ms ease. Active: `translateY(1px)`. Used sparingly — maximum one per viewport.
- **Secondary/Ghost:** Transparent fill, Duck Blue 2 border (1.5px), Duck Blue 2 text. Hover: Duck Blue 2 fill with white text. Transition 200ms ease.
- **Link Button:** No border, no fill. Duck Blue 5 text with subtle underline offset. Hover: Duck Blue 2 text.
- **Banned:** No outer glow shadows. No neon hover effects. No custom cursors. No gradient fills on buttons.

### Cards (Service/Product Cards)

- **Shape:** `border-radius: 1.25rem` (20px). Generous internal padding (`2rem`).
- **Fill:** Pure Surface (#FFFFFF) on Cloud Canvas backgrounds. Cloud Canvas (#F1F3F7) on white backgrounds.
- **Border:** 1px Whisper Border. No visible shadow at rest.
- **Hover:** Subtle lift — `translateY(-4px)` with diffused shadow (`0 12px 32px rgba(5, 95, 114, 0.08)`). Shadow tinted to Duck Blue 2 at low opacity for color coherence. Transition: 300ms ease with spring feel.
- **Layout:** Icon or illustration top, H3 title, body description, optional CTA link at bottom. Never 3 equal cards in a row — use 2-column zig-zag or asymmetric grid (one large card + two stacked smaller cards).

### Stats Counter Pattern

For displaying metrics like "18 000+ mottagningar" and "1 000 000+ sidvisningar":
- **Number:** Geist Mono, 700 weight, `clamp(2rem, 4vw, 3.5rem)`, Duck Blue 2 (#055F72) color.
- **Label:** Geist, 500 weight, `0.875rem`, uppercase, `letter-spacing: 0.05em`, Muted Slate (#566075).
- **Layout:** Horizontal row on desktop (3–4 stats), single column stack on mobile. Each stat separated by a subtle vertical divider (Whisper Border, 1px, 60% height) on desktop.
- **Animation:** Numbers count up from 0 on scroll-into-view. Duration 1.5s, ease-out curve. Only triggers once.
- **Important:** Only use real, verified data provided by the client. Never fabricate statistics.

### Trust Strip / Logo Bar

For displaying customer logos, integration partner logos, or media mentions:
- **Layout:** Horizontal scrolling row, centered within max-width container. Logos in grayscale (filter: grayscale(100%) opacity(0.5)), transitioning to full color on section hover or individual logo hover.
- **Spacing:** Generous horizontal gap (`3rem` between logos). Vertical padding `2rem` above and below.
- **Label:** Optional small text above — "Betrodd av Sveriges ledande kliniker" — in Geist, 500 weight, `0.75rem`, uppercase, Muted Slate, `letter-spacing: 0.08em`.
- **Mobile:** Logos wrap to 2 rows or use horizontal auto-scroll (CSS animation, `40s linear infinite`).
- **Dividers:** Thin Whisper Border lines above and below the trust strip to create visual containment.

### Inputs & Forms (HubSpot Form Styling Override)

- **Label:** Geist, 500 weight, `0.875rem`, Charcoal Ink. Positioned above input with `0.5rem` gap.
- **Input:** Pure Surface fill, 1px Whisper Border, `border-radius: 0.625rem` (10px), `padding: 0.875rem 1rem`. Font: Geist, 400, `1rem`.
- **Focus:** Border transitions to Duck Blue 2 (#055F72), plus a 3px focus ring in Duck Blue 2 at 20% opacity.
- **Error:** Border turns to a muted red (#D64545), error text below in same red, Geist 400, `0.8125rem`.
- **Placeholder:** Muted Slate (#566075) at 60% opacity.
- **Banned:** No floating labels. No inline icons inside inputs. No animated label transitions.

### Navigation

- **Desktop:** Horizontal bar, Pure Surface background with subtle bottom border (Whisper Border). Logo left, nav links center-right, primary CTA button far right. Sticky on scroll with backdrop-blur.
- **Links:** Geist, 500 weight, `0.9375rem`, Charcoal Ink. Hover: Duck Blue 2 with 150ms transition. Active page: Duck Blue 2 with a 2px bottom indicator.
- **CTA in Nav:** Small primary button (Duck Blue 2 fill, compact padding `0.625rem 1.25rem`).
- **Mobile (< 768px):** Hamburger menu icon (3 lines, not an X until opened). Full-screen overlay menu with large tap targets (`3.5rem` height per item). Smooth slide-in from right, 300ms ease.

---

## 5. Layout Principles

### Grid System

- **Max-width container:** `1280px` centered with `padding-inline: clamp(1.25rem, 4vw, 3rem)`.
- **Primary grid:** CSS Grid, 12-column on desktop. Common patterns: 7/5 split, 8/4 split, 6/6 split (only for balanced comparisons, not features).
- **Section rhythm:** Vertical spacing between major sections: `clamp(4rem, 10vw, 8rem)`.
- **Internal section padding:** `clamp(3rem, 6vw, 5rem)` top and bottom within colored background sections.

### Hero Section

- **Layout:** Left-aligned or split-screen (text left 55%, visual right 45%). NEVER centered full-width text.
- **Headline:** Satoshi Display weight, Duck Blue 2 or Charcoal Ink. One line of emphasis in Apricot 400 (a key phrase underlined or highlighted, not the whole heading).
- **Subheadline:** Geist, 400 weight, `1.125rem`, Muted Slate. Max 2 lines, directly supporting the headline.
- **CTA:** One primary button (Apricot 400 or Duck Blue 2). No secondary "Las mer" link next to it.
- **Visual:** Right side shows product screenshot, illustration, or abstract pattern. Never a stock photo of smiling doctors.
- **Banned:** No "Scrolla ner" text. No bouncing scroll arrow. No overlapping text on images.

### Feature/Service Sections

- **Pattern:** 2-column zig-zag. Row 1: text left, visual right. Row 2: visual left, text right. Each row is a full-width section with alternating backgrounds (white / Cloud Canvas).
- **Banned:** 3 equal-width feature cards in a horizontal row. Instead use: asymmetric grid (1 large + 2 small stacked), 2-column alternating, or vertical stack with generous spacing.

### CTA Banner Sections

- **Background:** Apricot 100 (#F9EAEA) full-width.
- **Content:** Centered text block with H2 heading (Satoshi, 700, Charcoal Ink), supporting paragraph (Geist, Muted Slate), and single Apricot 400 or Duck Blue 2 CTA button.
- **Shape:** Subtle `border-radius: 1.5rem` on the inner container if it does not span full width.

### Footer

- **Background:** Charcoal Ink (#181E29) or Duck Blue 2 (#055F72).
- **Text:** Pure Surface (#FFFFFF) for headings, 70% opacity white for secondary links.
- **Structure:** 4-column grid on desktop (Brand/tagline, Produkter, Foretag, Kontakt), collapsing to stacked accordion on mobile.
- **Bottom bar:** Copyright, privacy links, separated by Whisper Border top line.

---

## 6. Motion & Interaction

### Animation Engine

- **Spring Physics:** `stiffness: 120, damping: 24` — slightly overdamped for a premium, weighty feel. No linear easing anywhere. No `ease-in-out` for interactive elements (use spring curves or custom cubic-bezier approximations: `cubic-bezier(0.22, 1, 0.36, 1)`).
- **Duration baseline:** 200ms for micro-interactions (button hover), 400ms for element reveals, 600ms for section transitions.
- **Hardware acceleration:** All animations use `transform` and `opacity` exclusively. Never animate `top`, `left`, `width`, `height`, `margin`, or `padding`.

### Scroll-Triggered Reveals

- **Pattern:** Elements fade in with `translateY(1.5rem)` to `translateY(0)` + `opacity: 0` to `opacity: 1`.
- **Stagger:** When multiple items appear (cards, stats, list items), cascade with 80ms delay between each item.
- **Trigger:** IntersectionObserver at 15% visibility threshold. Each element animates only once (no re-triggering on scroll up).

### Micro-Interactions

- **Button hover:** Background color shift over 200ms. Subtle `scale(1.01)` on hover, `scale(0.99)` with `translateY(1px)` on active.
- **Card hover:** `translateY(-4px)` lift with expanding shadow over 300ms.
- **Link hover:** Color transition 150ms, underline slides in from left.
- **Stats counter:** Count-up animation from 0, 1.5s duration, triggered once on scroll-into-view.
- **Logo bar:** Grayscale to color transition on hover, 400ms ease.

### Banned Motion Patterns

- No bouncing animations (`bounce`, `rubberBand`).
- No spinning loaders (use skeletal shimmer instead).
- No parallax scrolling.
- No auto-playing video backgrounds.
- No horizontal scroll-jacking.
- No cursor-following elements.

---

## 7. Responsive Strategy

### Breakpoints

- **Mobile:** < 768px — Single column everything. Tap targets minimum 44px.
- **Tablet:** 768px - 1024px — 2-column grids where appropriate. Navigation may remain horizontal if items fit.
- **Desktop:** > 1024px — Full layout expression. 12-column grid active.

### Mobile-First Rules

- All multi-column layouts collapse to single column below 768px. No exceptions.
- Hero split-screen becomes stacked: headline first, visual below.
- Stats counter row becomes vertical stack with horizontal dividers replacing vertical ones.
- Cards stack vertically with full-width.
- Navigation collapses to hamburger with full-screen overlay.
- Section vertical padding reduces proportionally: `clamp(3rem, 8vw, 6rem)`.
- Font sizes scale via `clamp()` — display headline never below `2rem`, body never below `1rem`.
- Images: `max-width: 100%`, `height: auto`. No horizontal overflow. Ever.
- Horizontal scroll on any viewport is a critical failure.

### Touch Optimization

- All interactive elements: minimum `44px` height tap target.
- Buttons: minimum `48px` height on mobile.
- Form inputs: `48px` height on mobile for comfortable thumb entry.
- Adequate spacing between tap targets (minimum `8px` gap).

---

## 8. Anti-Patterns (Banned)

### Visual Bans
- No emojis anywhere in the interface
- No pure black (#000000) — use Charcoal Ink (#181E29)
- No Logo Blue (#1D8CB9) in UI elements — logo only
- No neon colors, no outer glow shadows, no oversaturated accents
- No gradient text on headings
- No overlapping elements — every element occupies its own clean spatial zone
- No purple/violet in any context

### Typography Bans
- No Inter font
- No Roboto font
- No generic serif fonts (Times New Roman, Georgia, Garamond, Palatino)
- No `LABEL // YEAR` formatting patterns ("SYSTEM // 2024")
- No centered hero text (variance is 5 — use left-aligned or split-screen)

### Layout Bans
- No 3 equal-width cards in a horizontal row — use asymmetric grids or zig-zag
- No centered hero sections — force split-screen or left-aligned
- No absolute-positioned content stacking
- No `h-screen` — use `min-h-[100dvh]`
- No flexbox `calc()` percentage hacks — use CSS Grid
- No horizontal scroll on any viewport

### Content Bans
- No fabricated statistics or metrics — only use real data explicitly provided
- No fake system/metric sections ("SYSTEM PERFORMANCE METRICS")
- No AI copywriting cliches: "Elevera", "Somlost", "Nasta generation", "Revolutionera"
- No generic placeholder names ("John Doe", "Acme", "Nexus")
- No fake round numbers ("99.99%", "50%")
- No filler UI text: "Scrolla ner", "Svep", scroll arrows, bouncing chevrons
- No stock photos of smiling doctors or generic medical imagery
- No broken Unsplash links — use `picsum.photos` or SVG illustrations

### Interaction Bans
- No custom mouse cursors
- No parallax scrolling effects
- No auto-playing video or audio
- No horizontal scroll-jacking
- No floating chat widgets in mockups
- No circular loading spinners — use skeletal shimmer loaders

---

## 9. Content Patterns (Swedish B2B Healthcare)

### Tone of Voice
Confident, knowledgeable, direct. Speaks to clinic owners and healthcare professionals as equals. No condescension, no hype. Formal "ni" address (not "du" unless brand guidelines specify otherwise). Short sentences. Clear value propositions.

### Heading Patterns
- Hero: Direct value statement. "Fler patienter till din mottagning" (not "Vi hjalper dig att...")
- Section: Benefit-led. "Bli synlig dar patienterna soker" (not "Var synlighetstjanst")
- CTA: Action-oriented. "Boka en demo", "Kom igang idag", "Se vara tjanster"

### Social Proof Format
- Stats: "18 000+ mottagningar", "1 000 000+ sidvisningar/manad" — Geist Mono, Duck Blue 2
- Testimonials: Real quotes with name, title, clinic name. Photo optional (use SVG avatar placeholder if no photo).
- Logos: Grayscale trust strip with real partner/integration logos only

### Page Structure Convention
1. Navigation (sticky)
2. Hero (split-screen, single CTA)
3. Trust strip (logo bar)
4. Stats counter section
5. Feature zig-zag sections (2–3 features)
6. Testimonial / social proof
7. CTA banner (Apricot 100 background)
8. Footer
