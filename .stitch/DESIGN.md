# Design System: Vården B2B — AD-Level Upgrade

> This document is the single source of truth for the Vården.se B2B site design.
> It replaces the previous generic version with art-director-level specifications.
> Reference: info.doctolib.fr (dark hero, real photography, motion product demos)
> Reference: linear.app (typography precision, visual restraint, confident spacing)

---

## 1. Visual Theme & Atmosphere

A bold, authoritative Scandinavian healthtech interface that commands attention from the first pixel. The atmosphere is **Doctolib meets Linear** — a dark, confident hero section that immediately communicates "this is a serious platform", followed by warm, spacious content sections with real photography and product UI screenshots. This is not a template. This is a custom-designed B2B site that makes clinic owners think "these people know what they're doing."

**Density:** 5 — Purposeful density. Hero is rich and immersive. Content sections have generous breathing room but never feel empty. Every pixel earns its place.

**Variance:** 6 — Confident asymmetry. No section looks like a template grid. Hero uses a dramatic split. Product sections use mixed-size cards. Feature rows alternate with real screenshots, not placeholder icons.

**Motion:** 5 — Fluid, intentional. Scroll-triggered reveals with staggered timing. Product screenshots have subtle parallax float. Stats count up. Logos fade from greyscale. Nothing bounces or spins.

**Language:** All Swedish. B2B tone: "ni"-form, direct, professional. No hype words.

**Key Principle: NO EMPTY GREY BOXES.** Every visual surface must contain either a real photograph, a real product screenshot, or a styled illustration. Grey placeholder rectangles with centered icons are strictly BANNED.

---

## 2. Color Palette & Roles

### Primary Palette (Vården Brand Book — exact hex codes)

- **Duck Blue 2** (#055F72) — Primary. Navigation, hero backgrounds, primary CTA fills, section headings, stat numbers. The deep teal anchor.
- **Duck Blue 5** (#4D9BA9) — Secondary. Hover states, labels/badges, icon tints, link text, light accent borders.
- **Apricot 400** (#FE8E7A) — Accent. High-priority CTAs ("Boka kostnadsfri genomgång"), featured badges, active nav underlines, attention dots. Maximum ONE apricot element per viewport.
- **Apricot 100** (#F9EAEA) — Warm section background for CTA banners and pain point sections.

### Neutrals

- **Charcoal Ink** (#181E29) — Primary text. All headings on light backgrounds, body copy. Never pure black.
- **Muted Slate** (#566075) — Secondary text. Descriptions, metadata, captions, placeholders.
- **Cloud Canvas** (#F1F3F7) — Alternating section background. Creates depth rhythm.
- **Pure Surface** (#FFFFFF) — Cards, hero text areas, input fields.
- **Whisper Border** (rgba(86, 96, 117, 0.12)) — Card borders, dividers, input borders.

### Gradient Treatments (NEW — AD-level visual depth)

- **Hero Gradient:** `linear-gradient(135deg, #032D38 0%, #055F72 50%, #0A7A94 100%)` — Deep-to-medium teal for the immersive hero. NOT flat #055F72.
- **Card Hover Glow:** `box-shadow: 0 20px 40px rgba(5, 95, 114, 0.12), 0 4px 12px rgba(5, 95, 114, 0.06)` — Tinted to Duck Blue for coherence.
- **Image Overlay (editorial photos):** `linear-gradient(180deg, transparent 40%, rgba(3, 45, 56, 0.8) 100%)` — Darkening bottom for text overlays on photos.
- **Section Transition:** Subtle `radial-gradient(ellipse at 50% 0%, rgba(5, 95, 114, 0.04) 0%, transparent 70%)` at top of white sections for gentle depth.

### Banned Colors

- **Logo Blue** (#1D8CB9) — Logo only. NEVER in UI.
- **Pure Black** (#000000) — BANNED. Use Charcoal Ink.
- **Neon / Oversaturated** — BANNED.
- **Purple / Violet** — BANNED.

---

## 3. Typography Rules

### Font Stack

- **Display/Headlines:** Satoshi (Variable, 700–900). Track-tight: `-0.03em` for display, `-0.015em` for H2. Hierarchy through weight AND size contrast — hero headline should feel 3x the visual weight of body text.
- **Body:** Geist (Variable, 400–500). Line-height: 1.65. Max width: `60ch` (tighter than before for more compact paragraphs). Minimum: `1rem`.
- **Mono/Stats:** Geist Mono (600–700). For statistics, pricing, numerical emphasis. Tabular-nums enabled.

### Type Scale (Updated for AD-level impact)

| Level | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| Display | `clamp(3rem, 6vw, 4.5rem)` | 800 | -0.03em | Hero headline — BIGGER than before |
| H1 | `clamp(2.25rem, 4.5vw, 3.25rem)` | 700 | -0.02em | Page section titles |
| H2 | `clamp(1.75rem, 3.5vw, 2.5rem)` | 700 | -0.015em | Sub-section titles |
| H3 | `clamp(1.25rem, 2vw, 1.5rem)` | 600 | -0.01em | Card titles |
| Body | `1rem` | 400 | 0 | Body copy |
| Body SM | `0.875rem` | 400 | 0.01em | Captions, meta |
| Stat Number | `clamp(2.5rem, 5vw, 4rem)` | 700 | -0.02em | Counter stats |
| Stat Label | `0.8125rem` | 500 | 0.06em | Stat labels, UPPERCASE |

### Banned

- Inter, Roboto, Times New Roman, Georgia, Garamond, Palatino, system-ui for display.

---

## 4. Component Stylings

### Buttons

- **Primary CTA:** Duck Blue 2 fill, white text, `border-radius: 0.75rem`, `padding: 1rem 2.25rem`. Hover: lighten to Duck Blue 5 over 200ms. Active: `translateY(1px)` push. Shadow on hover: `0 4px 16px rgba(5, 95, 114, 0.2)`.
- **Accent CTA:** Apricot 400 fill, white text (NOT dark text — white reads better). Hover: darken 10%. Shadow on hover: `0 4px 16px rgba(254, 142, 122, 0.25)`.
- **Ghost:** Transparent, 1.5px Duck Blue 2 border. Hover: fill Duck Blue 2 + white text.
- **BANNED:** No outer glow. No gradient fills. No custom cursors.

### Cards — Product/Ecosystem (REDESIGNED)

Each card MUST contain a real product image, not a placeholder icon in a grey box.

- **Shape:** `border-radius: 1rem` (16px). Overflow hidden for image clipping.
- **Structure:** Full-bleed image top (aspect-ratio: 16/10, object-fit: cover), content area below with padding `1.5rem`.
- **Hover:** Card lifts `translateY(-6px)` with expanding shadow. Image scales `scale(1.03)` within its container.
- **Featured variant:** Apricot 400 top border (3px) or subtle gradient border.

### Stats Counter

- **Background:** Hero gradient (dark teal), NOT flat Duck Blue 2.
- **Numbers:** Geist Mono 700, white, `clamp(2.5rem, 5vw, 4rem)`. Count-up animation.
- **Labels:** Geist 500, white at 70% opacity, uppercase, wide tracking.
- **Separators:** Vertical white line at 15% opacity between stats on desktop.

### Trust Strip / Logo Bar

- **Logos:** Real images from CDN via `next/image`. Greyscale filter: `grayscale(1) opacity(0.4)`. Hover: `grayscale(0) opacity(1)` with 400ms ease.
- **Size:** Each logo `h-8` to `h-10`, `object-contain`.
- **Label:** "Används av ledande kliniker" — Geist 500, `0.75rem`, uppercase, Muted Slate, `tracking-[0.08em]`.

### Navigation

- **Desktop:** Sticky, Duck Blue 2 background (solid, not transparent). Logo left (white), links center, Apricot CTA button right.
- **Active link:** White text + Apricot underline (2px, offset `4px`).
- **Inactive:** White at 80% opacity. Hover: white 100%.
- **Mobile:** Hamburger → full overlay, Duck Blue 2 background, large tap targets.

### Forms

- **Label:** Geist 500, `0.8125rem`, Charcoal Ink. Gap `0.375rem` to input.
- **Input:** White fill, 1px Whisper Border, `border-radius: 0.5rem`, `padding: 0.75rem 1rem`. Focus: Duck Blue 2 border + `ring-2 ring-duck-blue/20`.
- **Submit:** Full-width Duck Blue 2 button, `py-3`, `font-semibold`.

---

## 5. Image Mapping — Exact CDN Asset Per Section

**CDN Base:** `https://img.varden.se/varden.se/b2b`

### Homepage (/)

| Section | Image | CDN Path | Size |
|---------|-------|----------|------|
| Hero right | Platform mockup (desktop+mobile) | `hero/search-varden--2048x812.webp` | 2048x812 |
| Ecosystem — Vårdgivarprofil | Laptop+phone showing clinic profile | `product/product-vardgivarprofil--2048x2880.webp` | 2048w |
| Ecosystem — Appointments | 3-phone booking flow | `product/appointments-trio--2048x3392.webp` | 2048w |
| Ecosystem — AI-chatt | Dentiq booking app (as chat proxy) | `product/appointments-dentiq--1536x4532.webp` | 1536w |
| Ecosystem — Hemsida | Search results page | `product/product-search--2048x2880.webp` | 2048w |
| Pain points bg | Nurse leaning (editorial warmth) | `marketing/sviken-vardlogistik--2048x1862.webp` | 2048w |
| Onboarding | Doctor with patient and baby | `product/product-search-onboarding--2048x1024.webp` | 2048w |
| Testimonials accent | Nurse smiling (Lisa) | `editorial/office-meeting--2048x3372.webp` | 2048w |

### Tjänster (/tjanster)

| Section | Image | CDN Path |
|---------|-------|----------|
| Hero | Platform overview mockup flow | `marketing/paket-overview--2048x2984.webp` |
| Vårdgivarprofil card | Smile clinic landing page | `hero/vardgivarprofil-tandvard--2048x1030.webp` |
| Appointments card | Phone booking app | `product/appointments-hero--1536x4532.webp` |
| AI-chatt card | Aesthetica booking alt | `product/appointments-aesthetica-alt--1536x4532.webp` |
| Hemsida card | Search wide (booking UI) | `product/product-search-wide--2048x1024.webp` |
| Fotopaket | Clinic staff group photo | `marketing/fotopaket-2--2048x3584.webp` |

### Appointments (/appointments)

| Section | Image | CDN Path |
|---------|-------|----------|
| Hero right | Phone booking app hero | `product/appointments-hero--1536x4532.webp` |
| Feature 1: Placera | Booking flow UI | `product/appointments-booking-flow--2048x1352.webp` |
| Feature 2: Anpassa | Customize step UI | `product/appointments-customize--2048x1473.webp` |
| Feature 3: Visa tjänster | Widget clinic selection | `product/appointments-widget--2048x1799.webp` |
| Feature 4: Affärsregler | Calendar booking UI | `product/appointments-calendar--2048x1031.webp` |
| Feature 5: Val av utövare | Booking detail with times | `product/appointments-booking-detail--2048x1888.webp` |
| Case study | Aesthetica phone mockup | `product/appointments-aesthetica--1536x4532.webp` |

### AI-chatt (/ai-chatt)

| Section | Image | CDN Path |
|---------|-------|----------|
| Hero right | Build decorative chat widget component (animated) | N/A — code component |
| Features accent | Nurse in corridor | `editorial/clinic-reception--2048x3372.webp` |
| Social proof | Doctor at laptop | `editorial/healthcare-consultation--2048x3372.webp` |

### Kontakt (/kontakt)

| Section | Image | CDN Path |
|---------|-------|----------|
| Hero/bg | Contact illustration (admin dashboard) | `marketing/contact-illustration--2048x3372.webp` |
| Trust accent | Clinical equipment detail | `marketing/fotopaket-1--2048x3584.webp` |

---

## 6. Hero Section — AD-Level Specification

The hero is the MOST IMPORTANT section. It must be bold enough to stop a scrolling clinic owner.

### Homepage Hero

```
┌─────────────────────────────────────────────────────────┐
│  ██████ DARK TEAL GRADIENT BACKGROUND ███████████████    │
│  ███████████████████████████████████████████████████████  │
│                                                          │
│  [Logo]  Tjänster  Appointments  AI-chatt  Kontakt [CTA]│
│                                                          │
│   ┌──────────────────┐    ┌─────────────────────────┐   │
│   │  Label badge      │    │                         │   │
│   │                   │    │   REAL PRODUCT           │   │
│   │  LARGE HEADLINE   │    │   SCREENSHOT             │   │
│   │  White text on    │    │   (search-varden)        │   │
│   │  dark background  │    │   with subtle float      │   │
│   │                   │    │   animation + shadow      │   │
│   │  Subtext (70%     │    │                         │   │
│   │  white opacity)   │    │                         │   │
│   │                   │    └─────────────────────────┘   │
│   │  [Apricot CTA]    │                                  │
│   │  [Ghost CTA]      │                                  │
│   └──────────────────┘                                   │
│                                                          │
│   Category pills: Tandläkare | Vårdcentral | ...        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Background:** Hero gradient `linear-gradient(135deg, #032D38, #055F72, #0A7A94)` — NOT white, NOT flat color.
**Text:** White headline (Satoshi 800, `clamp(3rem, 6vw, 4.5rem)`). Subtext white at 70%.
**Image:** `hero/search-varden` floating with `drop-shadow(0 24px 48px rgba(0,0,0,0.3))` and subtle `translateY` hover/idle animation.
**CTA:** Apricot 400 primary, white ghost secondary.
**Category pills:** Semi-transparent white (white/10 bg, white/80 text) on the dark background.

### Product Page Heroes (Appointments, AI-chatt)

Same dark gradient treatment. Product screenshot/mockup right side. Left-aligned text.

---

## 7. Layout Principles

### Grid

- **Max-width:** `1320px` (widened from 1280 for more presence).
- **Grid:** 12-column CSS Grid. Common splits: 7/5, 5/7 (alternating), 8/4.
- **Section rhythm:** `clamp(5rem, 12vw, 9rem)` between major sections (more generous than before).

### Section Backgrounds (Rhythm)

Alternate between white and Cloud Canvas, with the hero (dark) and CTA sections (Apricot 100) breaking the pattern:

```
[HERO — Dark Gradient]
[Trust Logos — White]
[Stats — Dark Gradient]
[Value Props — Cloud Canvas]
[Ecosystem — White]
[Pain Points — Apricot 100]
[Onboarding — White]
[Testimonials — Cloud Canvas]
[Integration — White]
[CTA — Apricot 100]
[Footer — Charcoal Ink]
```

### Feature Sections (NO GREY BOXES)

- **Zig-zag rows:** Image left / text right, then text left / image right. Each image is a REAL product screenshot inside a styled container:
  - Container: `border-radius: 1rem`, `overflow: hidden`, subtle border (Whisper), `bg-cloud` as fallback only behind the real image.
  - Image: `object-cover`, fills container. Product screenshots get a subtle `drop-shadow`.
  - BANNED: Grey rectangles with a centered Lucide icon.

### Ecosystem / Product Grid

- **Layout:** NOT 4 equal cards. Use a **bento grid**: first card spans full width (or 2 columns), remaining cards in 3-column below, OR a 2x2 with varied heights.
- **Each card:** Has a real product screenshot (top 60% of card), text content (bottom 40%).
- **BANNED:** Same image on multiple cards. Every card gets a unique image from the CDN.

---

## 8. Motion & Interaction

### Animation Engine

- **Spring curve:** `cubic-bezier(0.22, 1, 0.36, 1)` — overdamped, premium feel.
- **Duration:** 200ms micro, 400ms reveals, 600ms section transitions.
- **Hardware only:** `transform` and `opacity`. Never animate layout properties.

### Scroll Reveals

- **Pattern:** `translateY(2rem)` + `opacity: 0` → `translateY(0)` + `opacity: 1`.
- **Stagger:** 100ms between items in a group.
- **Trigger:** IntersectionObserver at 20% threshold. Once only.

### Hero-Specific Animation

- **Product screenshot:** Idle float — `translateY(-8px)` to `translateY(8px)`, 6s loop, ease-in-out. Plus drop-shadow that expands/contracts with the float.
- **Stats count-up:** Numbers animate from 0 to value over 2s on scroll-into-view.
- **Logo bar:** Individual logos stagger-fade-in with 60ms delays.

### Banned

- No bounce, no parallax, no auto-video, no scroll-jacking, no cursor-followers, no spinners.

---

## 9. Anti-Patterns (BANNED)

### The "AI-Generated Look" Kills List

1. **Grey placeholder boxes with centered icons** — THE #1 BAN. Every visual surface gets a real image or is removed entirely.
2. **Same image repeated across cards** — Each product card uses a DIFFERENT, UNIQUE image from the CDN.
3. **White/light hero with dark text** — Heroes are DARK (gradient) for impact. Doctolib does this. We do this.
4. **3 equal-width white cards** — Use bento grids, asymmetric layouts, or mixed sizes.
5. **Icon-only feature cards** — Features show product UI screenshots, not abstract icons.
6. **Flat, shadowless cards** — Cards need depth: subtle shadow at rest, pronounced on hover.
7. **Template-level spacing** — Sections need MORE vertical rhythm than defaults.

### Visual Bans

- No emojis
- No pure black (#000000)
- No Logo Blue (#1D8CB9) in UI
- No neon/glow/oversaturated
- No purple/violet
- No gradient text
- No overlapping elements

### Typography Bans

- No Inter, Roboto, generic serifs
- No `LABEL // YEAR` formatting
- No white background hero (use dark gradient)

### Content Bans

- No fabricated statistics
- No AI cliches: "Elevera", "Sömlöst", "Nästa generation"
- No stock doctor photos (use our CDN editorial photos)
- No "Scrolla ner" / scroll arrows
- No broken image links

---

## 10. Implementation Checklist

Before considering any page "done", verify:

- [ ] Hero uses dark gradient background, not white
- [ ] Hero has a real product screenshot with float animation and drop-shadow
- [ ] Every ecosystem/product card has a UNIQUE real image from CDN
- [ ] NO grey placeholder boxes anywhere — every visual surface has content
- [ ] Stats section uses dark gradient background with white text
- [ ] Zig-zag features show real product screenshots, not icons-in-grey-boxes
- [ ] Typography uses Satoshi for headlines (check letter-spacing is tight)
- [ ] Cards have hover lift + shadow expansion
- [ ] Logo strips use real CDN logos via next/image, not text placeholders
- [ ] CTAs use Apricot 400 for primary, Duck Blue 2 for secondary
- [ ] Mobile: single column, no horizontal overflow, 44px tap targets
- [ ] Scroll reveal animations on value props, cards, testimonials
