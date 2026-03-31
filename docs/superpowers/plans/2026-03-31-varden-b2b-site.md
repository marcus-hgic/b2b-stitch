# Vården.se B2B Sajt — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, conversion-optimized B2B website for Vården.se that convinces healthcare providers to sign up and purchase services, using Google Stitch for iterative design and exporting to production code.

**Architecture:** Stitch-first iterative design → export HTML/CSS → integrate into a static site served from `site/public/`. The `.stitch/` directory holds the design system (DESIGN.md), site map (SITE.md), metadata, and raw Stitch exports. Each page is designed in Stitch via MCP, downloaded, and integrated. The stitch-loop skill's baton pattern drives iteration. Lead form submits to HubSpot Forms API (public endpoint, no auth required).

**Tech Stack:** Google Stitch (MCP), HTML/CSS/JS (exported), vanilla JS for HubSpot form, Stitch Skills (taste-design, stitch-design, stitch-loop, enhance-prompt)

---

## Brand Foundation

### Colors (from Vården.se Brand Book)
| Token | Hex | Role |
|-------|-----|------|
| Duck Blue 2 | `#055F72` | Primary — CTA buttons, nav, headings |
| Duck Blue 5 | `#4D9BA9` | Secondary — hover states, accents |
| Apricot 400 | `#FE8E7A` | Accent — CTA highlights, attention |
| Grey 0 | `#181E29` | Primary text |
| Grey 2 | `#566075` | Secondary text, descriptions |
| Grey 10 | `#F1F3F7` | Background surfaces |
| White | `#FFFFFF` | Card/container fill |
| Apricot 100 | `#F9EAEA` | CTA section backgrounds |
| Logo Blue | `#1D8CB9` | Logo only — never in UI elements |

### Typography
Choose a premium sans-serif (NOT Roboto, NOT Inter) that elevates the brand while keeping the professional healthcare feel. Recommended: **Satoshi** (headings) + **Geist** (body). Brand book uses Roboto — we're upgrading for the new site.

### Key Stats (verified)
- ~1 000 000 sidvisningar per månad
- 18 000 medverkande mottagningar
- ~1 000 betalande kunder
- 22 282 omdömen från patienter
- 10+ års erfarenhet
- 12+ journalsystemintegrationer

---

## Site Architecture (5 pages)

| Page | Purpose | Primary CTA |
|------|---------|-------------|
| `index` | Hero + ecosystem overview + pain points + social proof + trust | "Boka kostnadsfri genomgång" (opens lead form modal) |
| `tjanster` | All products in ecosystem + secondary services | "Jag vill veta mer" (opens lead form modal) |
| `appointments` | Flagship product deep-dive | "Boka kostnadsfri genomgång" |
| `ai-chatt` | AI chat product deep-dive | "Boka gratis demo" |
| `kontakt` | Lead form + contact info | Form submit |

### CTA Strategy
- **Primary CTA:** "Boka kostnadsfri genomgång" — everywhere. Low commitment, high value.
- **Lead form modal** opens on all CTA clicks (except kontakt page which has inline form)
- **Secondary CTA:** "Se våra tjänster" (ghost button linking to tjanster page)
- **Form fields:** Kliniknamn, Kontaktperson, E-post, Telefon (valfritt), Kategori dropdown, GDPR consent

### HubSpot Form Integration
```
Endpoint: POST https://api.hsforms.com/submissions/v3/integration/submit/7080361/533b5811-81a4-4aa9-be99-5cb3c4845098
No auth required (public API)

Fields mapping:
  clinicName → "company"
  contactName → "firstname"
  email → "email"
  phone → "phone" (optional)
  clinicCategory → "message" (prefixed "Kategori: {value}")
  Hard-coded: ar_du_privatperson_eller_foretag_ = "YuHEmw-69Ba0yOFfAUgtV"

GDPR consent:
  subscriptionTypeId: 8387018
  text: "Jag godkänner att Vården.se kontaktar mig angående min förfrågan"

Context:
  pageUri: current page URL
  pageName: "B2B Sajt – Leadformulär"
```

### Image Assets (from img.varden.se CDN)

**Brand:**
- Logo: `https://img.varden.se/varden.se/b2b/brand/varden-logo-nocross--768x768.webp`

**Customer logos (10):**
- audika, dch, folktandvarden, hlthy, kry, mamamia, meliva, smiletandvard, synsam, tandea
- Pattern: `https://img.varden.se/varden.se/b2b/customer-logos/{name}--768x768.webp`

**EHR/Integration logos (13):**
- almasoft, clinicbuddy, composite, eg, eg-hano, frenda, kaddio, kuralink, metodika, muntra, opus, teleq, webdoc
- Pattern: `https://img.varden.se/varden.se/b2b/ehr-logos/{name}--768x768.webp`

**Hero images:**
- `hero/search-varden--2048x812.webp` — platform mockup (desktop + mobile)
- `hero/vardgivarprofil-tandvard--2048x1030.webp` — Smile clinic profile screenshot

**Product images:**
- `product/product-search--2048x2880.webp` — search results page
- `product/product-vardgivarprofil--2048x2880.webp` — provider profile (laptop + phone)
- `product/appointments-hero--2048x2880.webp` — appointments phone mockup
- `product/appointments-trio--2048x3392.webp` — 3-step booking flow
- `product/appointments-booking-flow--2048x1352.webp` — booking UI
- `product/appointments-customize--2048x1473.webp` — customization
- `product/product-trio-overview--2048x3392.webp` — overview trio

**Editorial images:**
- `editorial/clinic-reception--2048x3372.webp` — nurses in corridor
- `editorial/healthcare-consultation--2048x3372.webp` — doctor with laptop
- `editorial/office-meeting--2048x3372.webp` — nurse with stethoscope

**All images use responsive variant pattern:** Replace `--{size}` suffix:
- `--320x320.webp` (thumb), `--768x{h}.webp` (mobile), `--1536x{h}.webp` (tablet), `--2048x{h}.webp` (desktop)

---

## Testimonials (all verified real)

### From for-vardgivare landing page:
1. **Anna Lindqvist — Tandkliniken Södermalm**
   > "Sedan vi gick med i Vården.se har vi fått en jämn ström av nya patienter. Bokningarna ökade med 40 % på bara tre månader."

2. **Erik Johansson — Specialistläkarna i Göteborg**
   > "AI-chatten har blivit vår bästa medarbetare — den svarar på patientfrågor dygnet runt och avlastar receptionen enormt."

3. **Maria Nilsson — Vårdcentralen Eken**
   > "Enkel uppstart och fantastisk support. Vi var live inom en vecka och hade fullbokade tider redan första månaden."

### From AI-chatt landing:
4. **Dr. Anna Lindberg — Gynekolog & FertilitetsCenter**
   > "AI-chatten har minskat våra administrativa samtal med 40%. Patienterna får svar direkt istället för att vänta på att vi ska ringa tillbaka."

5. **Maria Eriksson — Göteborgs IVF Klinik**
   > "Röstsamtalsfunktionen är fantastisk! Äldre patienter som inte är vana vid att chatta kan nu prata direkt med vår AI-assistent."

6. **Johan Andersson — VD, Aesthetica**
   > "Vi får betydligt färre samtal nu när chatten svarar på de vanligaste frågorna. Personalen kan fokusera på det som verkligen kräver mänsklig kontakt."

### From old HubSpot site:
7. **Rianna Kürren — Klinikchef, Tandvårdskliniken**
   > "Med Vården.se har vi ökat våra bokningar med 40 %. Implementationen var snabb och supporten fantastisk."

8. **Elliot Fvance — Grundare, Fysioterapikliniken**
   > "Magiskt enkelt att komma igång. Nu får vi patienter som aktivt söker just den vård vi erbjuder."

---

## Content: Products (Ecosystem)

### Core Products (featured on startsida + tjanster):

**1. Vårdgivarprofil** — Synlighet på rätt plats
En professionell profil som gör att patienter hittar och väljer er när de söker vård, utan att ni behöver lägga tid på marknadsföring eller administration.
- SEO-optimerad profil på Sveriges största vårdplattform
- Nå rätt patienter med målgruppsanpassad branding
- Central portal där patienter hittar och bokar era tjänster
- Lägre CPC utan content-kostnader

**2. Appointments** — Digitalt bokningsverktyg
Ett modernt bokningsflöde integrerat med ert journalsystem som minskar avbrott, missade bokningar och telefonsamtal så att personalen får arbetsro.
- Anpassa designen till ert varumärke
- Välj vilka tjänster och kliniker ni vill visa
- Sätt affärsregler för olika ärendetyper och tider
- Integrera med flera journalsystem i ett flöde
- Upp till 25 % mindre tid på admin

**3. AI-chatt** — Digitalt patientstöd dygnet runt
Ett AI-drivet stöd som automatiskt hanterar vanliga frågor, guidar patienter rätt och avlastar teamet från återkommande ärenden dygnet runt.
- Stöd för 50+ språk
- Röstsamtal med AI-assistent
- Instagram DM-integration
- Integration med journalsystem
- 1 995 kr/mån, ingen bindningstid

**4. Vårdanpassad hemsida** — Byggd för patientbokningar
En modern och SEO-optimerad mottagningshemsida byggd för att göra det enkelt för patienter att hitta, välja och boka er mottagning.

### Secondary Services (on tjanster page):
- **Bokningsintegration** — Anslut era befintliga bokningssystem och visa tillgängliga tider direkt online
- **Fotopaket** — Professionella bilder som stärker ert varumärke och bygger förtroende
- **Tandvårdswidget** — Låt patienter enkelt räkna ut sitt tandvårdsbidrag direkt på er sida (gratis)
- **Annonsering** — Öka synligheten med riktade kampanjer på Vården.se

---

## Pain Points (for startsida)

1. **Administration av tider tar för mycket tid** — Tid som bör läggas på vård läggs istället på att flytta och administrera tider i ett eller flera journalsystem.
2. **"Måndagstrycket" är dåligt för arbetsmiljön** — Många patienter ringer in i början av veckan vilket ger ett ojämnt tryck för vårdpersonalen och skapar stress.
3. **Hantering av flera patientflöden är krångligt** — Beroende på om det är regionala-, privata- eller försäkringsärenden ser hanteringen väldigt olika ut. Det saknas ett enkelt sätt att hantera olika flöden.
4. **Benämning på tjänster är onödigt svåra** — Benämningar i era journalsystem är anpassade för vårdgivare, inte patienter, och när patienter inte förstår tenderar de att avbryta bokningar.

---

## Onboarding Steps (for startsida/tjanster)

| Steg | Titel | Beskrivning |
|------|-------|-------------|
| 1 | Avstämning | En kort dialog där vi går igenom er verksamhet, era mål och var den administrativa belastningen uppstår i dag. |
| 2 | Upplägg & uppstart | Vi tar fram en tydlig plan och sköter hela uppsättningen och onboardingen med minimal insats från er sida. |
| 3 | Lansering & löpande förbättring | Vi lanserar lösningen, följer upp och säkerställer att arbetsron ökar och patientflödet fungerar bättre över tid. |

---

## Value Propositions

1. **Patienter söker vård digitalt** — Vi hjälper er fånga den efterfrågan ni annars hade missat.
2. **Ett smidigt bokningsflöde** — Frigör tid och gör det lättare för personalen att fokusera på patienterna.
3. **Digitalt AI-stöd** — Avlastar mottagningen och tar hand om återkommande frågor utan att skapa mer arbete.

---

## Contact Information (for kontakt page)

- **Sälj:** salj@varden.se — Frågor om tjänster och hur ni blir kund
- **Support:** support@varden.se — Frågor om er profil eller ändringar
- **Ekonomi:** ekonomi@varden.se — Avtal och fakturor
- **Svarstid:** Inom 24 timmar

---

## File Structure

```
b2b-stitch/
├── .stitch/
│   ├── DESIGN.md            # Design system (generated by taste-design skill)
│   ├── SITE.md              # Site vision, sitemap, roadmap
│   ├── metadata.json        # Stitch project & screen IDs
│   ├── next-prompt.md       # Baton file for stitch-loop
│   └── designs/             # Raw Stitch exports
│       ├── index.html / .png
│       ├── tjanster.html / .png
│       ├── appointments.html / .png
│       ├── ai-chatt.html / .png
│       └── kontakt.html / .png
├── site/
│   └── public/
│       ├── index.html
│       ├── tjanster.html
│       ├── appointments.html
│       ├── ai-chatt.html
│       ├── kontakt.html
│       └── js/
│           └── lead-form.js  # HubSpot form submission logic
├── .env.local               # STITCH_API_KEY (gitignored)
├── .mcp.json                # Stitch MCP config
└── docs/superpowers/plans/  # This plan
```

---

## Task 1: Create DESIGN.md with taste-design Skill

**Files:**
- Create: `.stitch/DESIGN.md`

- [ ] **Step 1: Invoke the taste-design skill**

Generate a DESIGN.md with these parameters:

```
Project: Vården.se B2B — conversion-optimized healthcare SaaS site
Atmosphere: Professional Scandinavian healthcare meets modern SaaS.
Trustworthy, warm, confident — not sterile. Like a well-funded healthtech
company's marketing site.

Density: 4 (balanced, breathing room)
Variance: 5 (slight asymmetry, professional)
Motion: 4 (subtle, purposeful — no playful bouncing)

Color Palette (from brand book):
- Primary: Duck Blue 2 (#055F72) — CTA buttons, nav, key headings
- Secondary: Duck Blue 5 (#4D9BA9) — hover states, secondary elements
- Accent: Apricot 400 (#FE8E7A) — CTA highlights, attention grabbers
- Text primary: Grey 0 (#181E29)
- Text secondary: Grey 2 (#566075)
- Background: Grey 10 (#F1F3F7), White (#FFFFFF)
- CTA sections: Apricot 100 (#F9EAEA) background

Typography: Premium sans-serif. NOT Inter, NOT Roboto.
Headings: Satoshi or Cabinet Grotesk — confident, modern
Body: Geist — clean, readable
Mono: Geist Mono — for stats/numbers

Requirements:
- Swedish text throughout
- Healthcare credibility + B2B conversion focus
- Generous whitespace, premium feel
- Stats counters pattern for social proof numbers
- Card patterns for services
- Trust strip/logo bar pattern
- Mobile-first responsive
```

- [ ] **Step 2: Review and refine DESIGN.md**

Verify: color palette matches brand book hex codes, typography specifies exact font families, anti-patterns populated, component stylings cover buttons/cards/forms, layout principles define responsive behavior.

- [ ] **Step 3: Commit**

```bash
git add .stitch/DESIGN.md
git commit -m "feat: add design system via taste-design skill"
```

---

## Task 2: Create SITE.md and Project Scaffolding

**Files:**
- Create: `.stitch/SITE.md`
- Create: `.stitch/designs/` (directory)

- [ ] **Step 1: Write SITE.md**

```markdown
# Vården.se B2B — Site Vision

## 1. Purpose
A conversion-optimized B2B website that convinces Swedish healthcare providers
to sign up for Vården.se's digital ecosystem. The site communicates trust,
professionalism, and clear value — driving visitors toward booking a free
consultation ("Boka kostnadsfri genomgång").

## 2. Target Audience
- Clinic owners and practice managers in Sweden
- Decision-makers at private healthcare organizations
- Office managers handling patient administration

## 3. Key Messages
- "Sveriges största samlingsplats för legitimerad vård" — 18 000+ mottagningar
- Solve real pain: admin burden, "måndagstrycket", multi-system chaos
- Digital ecosystem: synlighet + bokning + AI-stöd + hemsida
- Simple onboarding, measurable results

## 4. Sitemap
- [ ] index — Landing page with hero, ecosystem, pain points, social proof
- [ ] tjanster — Complete product/service overview
- [ ] appointments — Flagship booking product deep-dive
- [ ] ai-chatt — AI chat product deep-dive
- [ ] kontakt — Lead form + contact details

## 5. Roadmap
1. index
2. tjanster
3. appointments
4. ai-chatt
5. kontakt

## 6. Stitch Project ID
[Will be populated after project creation]
```

- [ ] **Step 2: Create designs directory**

```bash
mkdir -p .stitch/designs
```

- [ ] **Step 3: Commit**

```bash
git add .stitch/SITE.md
git commit -m "feat: add site vision and roadmap"
```

---

## Task 3: Create Stitch Project via MCP

**Files:**
- Create: `.stitch/metadata.json`
- Modify: `.stitch/SITE.md` (add project ID)

- [ ] **Step 1: Create the Stitch project**

Call `create_project` with title "Vården.se B2B".

- [ ] **Step 2: Get full project details and save metadata.json**

Call `get_project`, save full response to `.stitch/metadata.json`.

- [ ] **Step 3: Update SITE.md with project ID**

- [ ] **Step 4: Commit**

```bash
git add .stitch/metadata.json .stitch/SITE.md
git commit -m "feat: create Stitch project, save metadata"
```

---

## Task 4: Design + Generate Landing Page (index)

**Files:**
- Create: `.stitch/designs/index.html`, `.stitch/designs/index.png`
- Create: `site/public/index.html`
- Modify: `.stitch/metadata.json`, `.stitch/SITE.md`

- [ ] **Step 1: Craft the enhanced prompt using enhance-prompt skill**

Content for the prompt:

```
Swedish B2B landing page for Vården.se — Sveriges största samlingsplats
för legitimerad vård.

SECTIONS:

1. NAVIGATION: Vården.se logo (img.varden.se/varden.se/b2b/brand/varden-logo-nocross) left,
   links: Tjänster, Appointments, AI-chatt, Kontakt.
   CTA button "Boka kostnadsfri genomgång" in Duck Blue 2 (#055F72), right.

2. HERO (left-aligned, asymmetric):
   Headline: "Ökad synlighet, fler bokningar och minskad administrativ belastning."
   Subtext: "Vården.se hjälper privata vårdgivare att bli hittade där patienter söker
   vård, skapa ett smidigt bokningsflöde och avlasta mottagningen genom digitalt stöd."
   Primary CTA: "Boka kostnadsfri genomgång" (Duck Blue 2 #055F72, filled)
   Secondary CTA: "Se våra tjänster" (ghost/outline button)
   Right side: Platform mockup image (use img.varden.se product images).
   Below hero: Category pills row "Vilken typ av mottagning driver du?" —
   Tandläkare, Vårdcentral, Specialistvård, Kvinnohälsa, Fysisk hälsa, Psykisk hälsa, Annat

3. TRUST STRIP: Horizontal logo bar. "Används av ledande kliniker"
   Logos: Audika, Folktandvården, Kry, Meliva, Smiletandvård, Synsam, Tandea, DCH, HLTHY, Mamamia
   Muted/greyscale treatment. Continuous scroll or static.

4. SOCIAL PROOF STATS BAR (Duck Blue 2 background, white text):
   "1 000 000+ sidvisningar/mån" | "18 000+ mottagningar" | "22 282 omdömen" | "10+ års erfarenhet"

5. VALUE PROPOSITIONS (3-column, icons):
   a) "Patienter söker vård digitalt" — Vi hjälper er fånga den efterfrågan ni annars hade missat.
   b) "Ett smidigt bokningsflöde" — Frigör tid för personalen att fokusera på patienterna.
   c) "Digitalt AI-stöd" — Avlastar mottagningen från återkommande ärenden dygnet runt.

6. ECOSYSTEM OVERVIEW: "Ett komplett digitalt ekosystem för er mottagning"
   Subtext: "Allt du behöver för att nå patienter, fylla tider och växa — samlat i en plattform."
   4 product cards (asymmetric grid, NOT 3 equal columns):
   - Vårdgivarprofil (globe icon, emerald accent) — Synlighet på rätt plats
   - Appointments (calendar icon, sky accent) — Digitalt bokningsverktyg
   - AI-chatt (message-square icon, amber accent) — Digitalt patientstöd 24/7
   - Vårdanpassad hemsida (layout icon, rose accent) — Byggd för patientbokningar
   Trust text below: "Ingen bindningstid"

7. PAIN POINTS: "Känner ni igen er?" (Apricot 100 #F9EAEA background section)
   4 pain point cards in 2x2 grid:
   - "Administration av tider tar för mycket tid"
   - "Måndagstrycket" är dåligt för arbetsmiljön"
   - "Hantering av flera patientflöden är krångligt"
   - "Benämning på tjänster är onödigt svåra"
   Each with short description text.

8. ONBOARDING: "Enkel uppstart" — 3 numbered steps:
   1. Avstämning
   2. Upplägg & uppstart
   3. Lansering & löpande förbättring

9. TESTIMONIALS (2-3 quotes):
   - Anna Lindqvist, Tandkliniken Södermalm: "Bokningarna ökade med 40 %..."
   - Erik Johansson, Specialistläkarna: "AI-chatten har blivit vår bästa medarbetare..."
   - Maria Nilsson, Vårdcentralen Eken: "Vi var live inom en vecka..."

10. INTEGRATION LOGOS: "Integrerar med etablerade journalsystem"
    All 13 EHR logos in a row.

11. FINAL CTA (Apricot 100 background):
    "Redo att stärka din mottagning?"
    "Anslut dig till hundratals vårdgivare som redan växer med Vården.se."
    CTA: "Boka kostnadsfri genomgång"

12. FOOTER: Logo, nav links (Tjänster, Appointments, AI-chatt, Kontakt, Support),
    Contact: salj@varden.se, support@varden.se, ekonomi@varden.se
    Copyright: © 2026 Vården Online Sverige AB
```

Append DESIGN SYSTEM block from `.stitch/DESIGN.md`.

- [ ] **Step 2: Generate the screen in Stitch**

Call `generate_screen_from_text` with `deviceType: DESKTOP`.

- [ ] **Step 3: Download design assets**

Download HTML and screenshot to `.stitch/designs/index.html` and `.stitch/designs/index.png`.

- [ ] **Step 4: Review and iterate with edit_screens if needed**

- [ ] **Step 5: Integrate into site/public/index.html**

Wire navigation links to other pages. Replace placeholder image URLs with actual `img.varden.se` CDN URLs.

- [ ] **Step 6: Update metadata.json and SITE.md**

- [ ] **Step 7: Commit**

```bash
git add .stitch/ site/public/index.html
git commit -m "feat: generate and integrate landing page"
```

---

## Task 5: Design + Generate Tjänster Page

**Files:**
- Create: `.stitch/designs/tjanster.html`, `.stitch/designs/tjanster.png`
- Create: `site/public/tjanster.html`
- Modify: `.stitch/metadata.json`, `.stitch/SITE.md`

- [ ] **Step 1: Craft enhanced prompt**

```
Swedish B2B services page for Vården.se. Same navigation and footer as index.

SECTIONS:

1. HERO: "Ett komplett digitalt ekosystem för er mottagning"
   Subtext: "Allt du behöver för att nå patienter, fylla tider och växa."

2. CORE PRODUCTS (4 large cards, asymmetric 2x2 grid):

   a) Vårdgivarprofil — "Synlighet på rätt plats"
      En professionell profil som gör att patienter hittar och väljer er.
      SEO-optimerad, målgruppsanpassad branding, central portal.
      Image: product-vardgivarprofil
      CTA: "Läs mer"

   b) Appointments — "Digitalt bokningsverktyg" [FEATURED — accent border]
      Modernt bokningsflöde integrerat med ert journalsystem.
      Anpassningsbar design, affärsregler, multi-journal integration.
      Upp till 25 % mindre tid på admin.
      Image: appointments-hero
      CTA: "Utforska Appointments"

   c) AI-chatt — "Digitalt patientstöd dygnet runt"
      AI-drivet stöd, 50+ språk, röstsamtal, Instagram DM.
      1 995 kr/mån, ingen bindningstid.
      CTA: "Utforska AI-chatten"

   d) Vårdanpassad hemsida — "Byggd för patientbokningar"
      Modern SEO-optimerad mottagningshemsida.
      CTA: "Läs mer"

3. SECONDARY SERVICES (smaller cards, horizontal strip):
   - Bokningsintegration
   - Fotopaket
   - Tandvårdswidget (gratis)
   - Annonsering

4. INTEGRATION LOGOS: "Integrerar med marknadens journalsystem"
   All 13 EHR logos.

5. CTA: "Vill ni veta mer?" + "Boka kostnadsfri genomgång"
```

- [ ] **Step 2-6: Generate, download, review, integrate, update, commit**

Same pattern as Task 4.

```bash
git commit -m "feat: generate and integrate services page"
```

---

## Task 6: Design + Generate Appointments Page

**Files:**
- Create: `.stitch/designs/appointments.html`, `.stitch/designs/appointments.png`
- Create: `site/public/appointments.html`

- [ ] **Step 1: Craft enhanced prompt**

```
Swedish B2B product deep-dive for "Appointments" by Vården.se.
Same navigation and footer.

SECTIONS:

1. PRODUCT HERO (split layout):
   Left: "Förenkla bokning på er egna hemsida med Appointments"
   Subtext: "Följ med i den digitala utvecklingen och ge patienter en snabbare,
   mer tillgänglig bokningsupplevelse."
   CTA: "Boka kostnadsfri genomgång"
   Right: Phone mockup of Appointments widget (appointments-hero image)

2. "VAD ÄR APPOINTMENTS?" section:
   "En bokningswidget som integreras direkt med ert befintliga bokningssystem.
   Widgeten gör det möjligt för patienter att boka tid på er hemsida 24/7."

3. FEATURES (zig-zag alternating layout):
   a) "Placera bokningsflödet där det passar bäst" — pop-up eller landningssida
   b) "Anpassa designen till er verksamhet" — logotyp, färger, typsnitt
   c) "Visa rätt tjänster för rätt kliniker" — skräddarsy per klinik
   d) "Sätt affärsregler med förval" — styr patient till rätt tjänst/tider
   e) "Ge patienten kontroll över sitt val av utövare"
   Each with product screenshot from img.varden.se CDN.

4. STATS HIGHLIGHT: "Upp till 25 % mindre tid på admin"

5. HOW IT WORKS (3 steps):
   1. "Registrera kliniken" — få en SEO-anpassad profil
   2. "Integrera bokning" — lägg upp widget med en enkel kod
   3. "Ta emot bokningar" — enkelt och tryggt med Mobilt BankID dygnet runt

6. INTEGRATION LOGOS: All 13 EHR logos.

7. TESTIMONIALS:
   - Rianna Kürren: "ökat våra bokningar med 40 %"
   - Elliot Fvance: "Magiskt enkelt att komma igång"

8. FAQ accordion:
   - "Hur snabbt kan vi komma igång?" — hjälper med allt, igång inom dagar
   - "Behöver jag byta bokningssystem?" — Nej, fungerar med de flesta
   - "Vad händer om en patient avbokar?" — hanteras i ert system
   - "Kan vi använda för flera kliniker?" — Ja, flera kliniker i samma widget

9. CTA: "Redo att bli bokningsbar 24/7?" + "Boka kostnadsfri genomgång"
```

- [ ] **Step 2-6: Generate, download, review, integrate, update, commit**

```bash
git commit -m "feat: generate and integrate Appointments product page"
```

---

## Task 7: Design + Generate AI-chatt Page

**Files:**
- Create: `.stitch/designs/ai-chatt.html`, `.stitch/designs/ai-chatt.png`
- Create: `site/public/ai-chatt.html`

- [ ] **Step 1: Craft enhanced prompt**

```
Swedish B2B product page for AI-chatt by Vården.se.
Same navigation and footer.

SECTIONS:

1. HERO: "Skräddarsydd AI-chatt för din mottagning"
   Subtext: "Ge dina patienter omedelbar hjälp dygnet runt. Vår AI-assistent
   svarar på frågor, hjälper med tidbokning och talar alla språk."
   CTA: "Boka gratis demo"
   Secondary: "Se hur det fungerar"
   Trust badges: "Gratis testperiod · Inget kreditkort · Klart på 5 min"
   Right side: Chat widget mockup with animated conversation.

2. CUSTOMER LOGO STRIP: "Används av ledande kliniker i Norden"

3. FEATURES GRID (6 features, 3x2):
   a) "Dygnet runt" — Ge svar direkt utan att patienter ringer. 24/7.
   b) "Enkel tidbokning" — Se lediga tider i chatten, boka via journalsystem.
   c) "50+ språk" — Svara automatiskt oavsett språk.
   d) "Röstsamtal" — Patienter pratar direkt med AI-assistenten.
   e) "Instagram DM" — Svara på frågor i Instagram. Slipp tappa patienter.
   f) "Mobilvänlig" — Fungerar perfekt på alla enheter.

4. HOW IT WORKS (3 steps):
   1. "Lägg till en rad kod" — klistra in widget, klart under en minut
   2. "Anpassa till din klinik" — färger, logotyp, hälsningsfras
   3. "Börja svara automatiskt" — AI:n lär känna er verksamhet

5. PRICING (single card, centered):
   "Allt ingår — 1 995 kr/mån (exkl. moms)"
   Feature list: Obegränsat antal konversationer, 24/7, 50+ språk,
   Röstsamtal, Instagram DM, Anpassad profil, Journal-integration,
   Admingränssnitt, Personlig onboarding.
   "Ingen bindningstid. Avsluta när du vill."
   CTA: "Kom igång nu"

6. TESTIMONIALS:
   - Dr. Anna Lindberg: "minskat administrativa samtal med 40 %"
   - Maria Eriksson: "Röstsamtalsfunktionen är fantastisk"
   - Johan Andersson: "Personalen kan fokusera på mänsklig kontakt"

7. FAQ accordion:
   - Hur lång tid tar det att komma igång? — 5 minuter
   - Kan AI:n svara fel? — Ställer aldrig diagnoser, hänvisar rätt
   - Fungerar med vårt bokningssystem? — Ja, de flesta
   - Hur hanteras GDPR? — EU-servrar, GDPR-kompatibelt
   - Kan vi anpassa AI:ns svar? — Absolut

8. INTEGRATION LOGOS: EHR logos.

9. CTA: "Redo att förbättra din patientkommunikation?" + "Boka gratis demo"
```

- [ ] **Step 2-6: Generate, download, review, integrate, update, commit**

```bash
git commit -m "feat: generate and integrate AI-chatt product page"
```

---

## Task 8: Design + Generate Kontakt Page

**Files:**
- Create: `.stitch/designs/kontakt.html`, `.stitch/designs/kontakt.png`
- Create: `site/public/kontakt.html`

- [ ] **Step 1: Craft enhanced prompt**

```
Swedish B2B contact page for Vården.se. Same navigation and footer.

SECTIONS:

1. HERO: "Kom igång med Vården.se"
   Subtext: "Fyll i formuläret så kontaktar vi dig inom 24 timmar."

2. SPLIT LAYOUT:
   LEFT (60%): Inline lead form:
   - Kliniknamn (required text input)
   - Kontaktperson (required text input)
   - E-post (required email input)
   - Telefon (optional tel input)
   - Kategori (dropdown: Tandläkare, Vårdcentral, Specialistvård,
     Kvinnohälsa, Fysisk hälsa, Psykisk hälsa, Annat)
   - GDPR checkbox: "Jag godkänner att Vården.se kontaktar mig"
   - "Skicka förfrågan" button (Duck Blue 2, full width)
   Label above inputs, error below. Clean, spacious layout.

   RIGHT (40%): Contact info cards:
   - salj@varden.se — "Frågor om tjänster och hur ni blir kund"
   - support@varden.se — "Frågor om er profil eller ändringar"
   - ekonomi@varden.se — "Avtal och fakturor"

3. TRUST STRIP: "Vi svarar inom 24 timmar"
   + "18 000+ mottagningar medverkar" + "Ingen bindningstid"

4. CUSTOMER LOGOS below trust strip.
```

- [ ] **Step 2-6: Generate, download, review, integrate, update, commit**

```bash
git commit -m "feat: generate and integrate contact page"
```

---

## Task 9: Implement HubSpot Lead Form (JavaScript)

**Files:**
- Create: `site/public/js/lead-form.js`
- Modify: All HTML pages (add script + modal markup)

- [ ] **Step 1: Write lead-form.js**

```javascript
// HubSpot Form Submission
const HUBSPOT_PORTAL_ID = '7080361';
const HUBSPOT_FORM_GUID = '533b5811-81a4-4aa9-be99-5cb3c4845098';
const SUBSCRIPTION_TYPE_ID = 8387018;
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

function openLeadModal(prefilledCategory) {
  const modal = document.getElementById('lead-modal');
  if (prefilledCategory) {
    document.getElementById('lead-category').value = prefilledCategory;
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLeadModal() {
  const modal = document.getElementById('lead-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

async function submitLeadForm(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Skickar...';

  const data = {
    fields: [
      { name: 'company', value: form.clinicName.value },
      { name: 'firstname', value: form.contactName.value },
      { name: 'email', value: form.email.value },
      { name: 'phone', value: form.phone.value || '' },
      { name: 'message', value: `Kategori: ${form.category.value}` },
      { name: 'ar_du_privatperson_eller_foretag_', value: 'YuHEmw-69Ba0yOFfAUgtV' }
    ],
    context: {
      pageUri: window.location.href,
      pageName: 'B2B Sajt – Leadformulär'
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'Jag godkänner att Vården.se kontaktar mig angående min förfrågan.',
        communications: [
          { value: true, subscriptionTypeId: SUBSCRIPTION_TYPE_ID, text: 'Godkänner kommunikation' }
        ]
      }
    }
  };

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      form.innerHTML = '<div class="success-message"><h3>Tack för din förfrågan!</h3><p>Vi hör av oss inom 24 timmar.</p></div>';
      setTimeout(closeLeadModal, 3000);
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Skicka förfrågan';
    alert('Något gick fel. Försök igen eller kontakta oss på salj@varden.se');
  }
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.id === 'lead-modal') closeLeadModal();
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLeadModal();
});
```

- [ ] **Step 2: Create modal HTML template**

Create a reusable modal HTML snippet to inject into all pages:

```html
<div id="lead-modal" class="hidden">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <button onclick="closeLeadModal()" class="modal-close">&times;</button>
    <h2>Kom igång med Vården.se</h2>
    <p>Fyll i formuläret så kontaktar vi dig inom 24 timmar.</p>
    <form onsubmit="submitLeadForm(event)">
      <label>Kliniknamn *</label>
      <input name="clinicName" required>
      <label>Kontaktperson *</label>
      <input name="contactName" required>
      <label>E-post *</label>
      <input name="email" type="email" required>
      <label>Telefon</label>
      <input name="phone" type="tel">
      <label>Kategori</label>
      <select name="category" id="lead-category">
        <option value="">Välj kategori...</option>
        <option>Tandläkare</option>
        <option>Vårdcentral</option>
        <option>Specialistvård</option>
        <option>Kvinnohälsa</option>
        <option>Fysisk hälsa</option>
        <option>Psykisk hälsa</option>
        <option>Annat</option>
      </select>
      <label class="consent">
        <input type="checkbox" required>
        Jag godkänner att Vården.se kontaktar mig angående min förfrågan
      </label>
      <button type="submit">Skicka förfrågan</button>
    </form>
  </div>
</div>
<script src="js/lead-form.js"></script>
```

- [ ] **Step 3: Wire all CTA buttons**

All "Boka kostnadsfri genomgång" / "Jag vill veta mer" buttons call `openLeadModal()`.
Category pills on index hero call `openLeadModal('Tandläkare')` etc.

- [ ] **Step 4: Test form submission**

Open page locally, fill form, verify POST to HubSpot succeeds (check Network tab, expect 200).

- [ ] **Step 5: Commit**

```bash
git add site/public/js/lead-form.js site/public/
git commit -m "feat: add HubSpot lead form with modal"
```

---

## Task 10: Cross-Page Polish and Navigation Wiring

**Files:**
- Modify: All `site/public/*.html`

- [ ] **Step 1: Unify navigation across all pages**

Every page: Logo → index.html, Tjänster → tjanster.html, Appointments → appointments.html, AI-chatt → ai-chatt.html, CTA button → openLeadModal()

- [ ] **Step 2: Unify footer**

Same footer everywhere with logo, nav, contact emails, copyright.

- [ ] **Step 3: Replace all placeholder image URLs**

Ensure all images use `img.varden.se` CDN URLs with responsive variants.

- [ ] **Step 4: Wire all internal links**

Check every `href="#"` and replace with actual page references.

- [ ] **Step 5: Verify locally**

```bash
npx serve site/public
```

Click through all pages, test all links, test form submission.

- [ ] **Step 6: Commit**

```bash
git add site/public/
git commit -m "fix: unify navigation, wire links, add real image URLs"
```

---

## Task 11: Mobile Review and Polish

- [ ] **Step 1: Generate mobile variants or review responsive behavior**
- [ ] **Step 2: Fix any mobile issues via edit_screens**
- [ ] **Step 3: Commit**

```bash
git commit -m "fix: mobile responsive polish"
```

---

## Task 12: Final Review and Push

- [ ] **Step 1: Full visual walkthrough** — all pages, all CTAs, form submission
- [ ] **Step 2: Verify conversion elements:**
  - [ ] Primary CTA above the fold on every page
  - [ ] Stats bar with real numbers
  - [ ] Pain points resonate with target audience
  - [ ] Trust signals: customer count, years, logos
  - [ ] Clear funnel: index → tjanster/product → kontakt/modal
  - [ ] Lead form works end-to-end with HubSpot
  - [ ] All testimonials present with names
  - [ ] Integration logos displayed

- [ ] **Step 3: Push to GitHub**

```bash
git push origin main
```
