import type { OnboardingStep } from "@/lib/types";

interface OnboardingStepsProps {
  steps: OnboardingStep[];
}

export default function OnboardingSteps({ steps }: OnboardingStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
      {/* Connecting line on desktop */}
      <div className="hidden md:block absolute top-7 left-[16.6%] right-[16.6%] h-px bg-whisper" />

      {steps.map((step) => (
        <div key={step.number} className="text-center relative z-10">
          <div className="w-14 h-14 bg-duck-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-duck-blue font-bold text-lg">
              {step.number}
            </span>
          </div>
          <h4 className="font-bold font-headline mb-2">{step.title}</h4>
          <p className="text-slate-text text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
