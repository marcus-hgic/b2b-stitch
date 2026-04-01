import type { PainPoint } from "@/lib/types";

export const painPoints: PainPoint[] = [
  {
    icon: "Clock",
    title: "Administration av tider tar för mycket tid",
    description: "Tid som bör läggas på vård läggs istället på att flytta och administrera tider i ett eller flera journalsystem.",
  },
  {
    icon: "AlertTriangle",
    title: "\"Måndagstrycket\" är dåligt för arbetsmiljön",
    description: "Många patienter ringer in i början av veckan vilket ger ett ojämnt tryck för vårdpersonalen och skapar stress.",
  },
  {
    icon: "GitBranch",
    title: "Hantering av flera patientflöden är krångligt",
    description: "Beroende på om det är regionala-, privata- eller försäkringsärenden ser hanteringen väldigt olika ut.",
  },
  {
    icon: "HelpCircle",
    title: "Benämning på tjänster är onödigt svåra",
    description: "Benämningar i era journalsystem är anpassade för vårdgivare, inte patienter, och när patienter inte förstår tenderar de att avbryta bokningar.",
  },
];
