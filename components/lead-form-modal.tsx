"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useLeadModal } from "@/components/lead-form-provider";
import ContactForm from "@/components/contact-form";

export default function LeadFormModal() {
  const { isOpen, prefilledCategory, closeModal } = useLeadModal();

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="bg-white max-w-md w-[92%] rounded-2xl p-8 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-text hover:text-ink transition"
          aria-label="Stäng"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-headline font-extrabold mb-2">
          Kom igång med Vården.se
        </h2>
        <p className="text-slate-text mb-6">
          Fyll i formuläret så kontaktar vi dig inom 24 timmar.
        </p>

        <ContactForm prefilledCategory={prefilledCategory} />
      </div>
    </div>
  );
}
