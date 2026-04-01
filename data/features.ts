import type { Feature } from "@/lib/types";

const CDN = "https://img.varden.se/varden.se/b2b";

export const appointmentsFeatures: Feature[] = [
  {
    icon: "Monitor",
    title: "Placera bokningsflödet där det passar bäst",
    description: "Som pop-up vid knapptryck eller direkt på en landningssida. Oavsett flöde, ärendetyp eller journalsystem erbjuder Appointments en enhetlig användarupplevelse utan att kräva en mobilapp.",
    imageSrc: `${CDN}/product/appointments-booking-flow--2048x1352.webp`,
  },
  {
    icon: "Palette",
    title: "Anpassa designen till er verksamhet",
    description: "Integrera Appointments sömlöst genom att anpassa med er logotyp, färger och typsnitt. Skapa en helhet som känns som en naturlig del av er hemsida.",
    imageSrc: `${CDN}/product/appointments-customize--2048x1473.webp`,
  },
  {
    icon: "Building2",
    title: "Visa rätt tjänster för rätt kliniker",
    description: "Skräddarsy tjänster för varje klinik och skapa en tydlig bild av ert kompletta utbud — allt på patientens villkor.",
    imageSrc: `${CDN}/product/appointments-widget--2048x1799.webp`,
  },
  {
    icon: "SlidersHorizontal",
    title: "Sätt affärsregler med förval",
    description: "Forma bokningsflödet med affärsregler som styr patienten till rätt tjänst och tider. Anpassa vilka ärendetyper och bokningstider som visas.",
    imageSrc: `${CDN}/product/appointments-calendar--2048x1031.webp`,
  },
  {
    icon: "UserCheck",
    title: "Ge patienten kontroll över sitt val av utövare",
    description: "Ge patienter möjligheten att välja utövare när det är relevant. Visa utövare och tillgänglighet smidigt i samma steg.",
    imageSrc: `${CDN}/product/appointments-booking-detail--2048x1888.webp`,
  },
];

export const aiChattFeatures: Feature[] = [
  { icon: "Clock", title: "Dygnet runt", description: "Ge svar direkt — utan att patienter behöver ringa eller leta på hemsidan. Tillgänglig 24/7." },
  { icon: "CalendarDays", title: "Enkel tidbokning", description: "Patienter ser lediga tider direkt i chatten och bokar via kopplade journalsystem." },
  { icon: "Globe", title: "50+ språk", description: "Svara automatiskt på alla patientfrågor — oavsett språk. Nå fler patienter." },
  { icon: "Phone", title: "Röstsamtal", description: "Patienter kan prata direkt med AI-assistenten. Perfekt för de som föredrar samtal." },
  { icon: "Instagram", title: "Instagram DM", description: "Svara på frågor direkt i Instagram DM. Slipp tappa patienter till konkurrenter." },
  { icon: "Smartphone", title: "Mobilvänlig chatt", description: "Dina patienter kan chatta från vilken enhet som helst. Perfekt anpassad för mobil, surfplatta och dator." },
];

export const vardgivarprofilFeatures: Feature[] = [
  {
    icon: "Target",
    title: "Nå rätt patienter med målgruppsanpassad branding",
    description: "Er profil anpassas för att nå de patienter som söker just den typ av vård ni erbjuder. Med tydlig kategorisering och relevant information hamnar ni framför rätt ögon.",
    imageSrc: `${CDN}/hero/vardgivarprofil-tandvard--2048x1030.webp`,
  },
  {
    icon: "Search",
    title: "SEO-optimerad profil för bättre synlighet",
    description: "Varje profil byggs med sökmotoroptimering i grunden. Er mottagning syns högt i sökresultaten när patienter söker efter vård i ert område.",
    imageSrc: `${CDN}/product/product-search--2048x1024.webp`,
  },
  {
    icon: "MapPin",
    title: "Central portal där patienter hittar och bokar",
    description: "Vården.se samlar legitimerad vård på ett ställe. Patienter kan enkelt hitta er, jämföra tjänster och boka direkt — utan omvägar.",
    imageSrc: `${CDN}/product/product-search-wide--2048x1024.webp`,
  },
];

export const aiHemsidaFeatures: Feature[] = [
  {
    icon: "Search",
    title: "SEO-optimerad för vårdrelaterade sökningar",
    description: "Er hemsida rankas högt på Google när patienter söker efter er typ av vård i ert område.",
    imageSrc: `${CDN}/product/product-search--2048x1024.webp`,
  },
  {
    icon: "CalendarDays",
    title: "Integrerad med ert bokningssystem",
    description: "Patienter kan boka tid direkt från er hemsida via Appointments-widgeten.",
    imageSrc: `${CDN}/product/appointments-booking-flow--2048x1352.webp`,
  },
  {
    icon: "Palette",
    title: "Professionell design utan krångel",
    description: "Vi bygger och underhåller er hemsida. Ni fokuserar på vård.",
    imageSrc: `${CDN}/product/product-vardgivarprofil--2048x1024.webp`,
  },
];
