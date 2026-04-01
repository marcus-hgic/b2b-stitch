import type { OnboardingStep } from "@/lib/types";

export const onboardingSteps: OnboardingStep[] = [
  {
    number: 1,
    title: "Avstämning",
    description: "En kort dialog där vi går igenom er verksamhet, era mål och var den administrativa belastningen uppstår i dag.",
  },
  {
    number: 2,
    title: "Upplägg & uppstart",
    description: "Vi tar fram en tydlig plan och sköter hela uppsättningen och onboardingen med minimal insats från er sida.",
  },
  {
    number: 3,
    title: "Lansering & löpande förbättring",
    description: "Vi lanserar lösningen, följer upp och säkerställer att arbetsron ökar och patientflödet fungerar bättre över tid.",
  },
];
