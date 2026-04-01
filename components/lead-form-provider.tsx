"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface LeadFormContextType {
  isOpen: boolean;
  prefilledCategory: string;
  openModal: (category?: string) => void;
  closeModal: () => void;
}

const LeadFormContext = createContext<LeadFormContextType | null>(null);

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledCategory, setPrefilledCategory] = useState("");

  const openModal = useCallback((category?: string) => {
    setPrefilledCategory(category || "");
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPrefilledCategory("");
    document.body.style.overflow = "";
  }, []);

  return (
    <LeadFormContext.Provider
      value={{ isOpen, prefilledCategory, openModal, closeModal }}
    >
      {children}
    </LeadFormContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadFormContext);
  if (!ctx)
    throw new Error("useLeadModal must be used within LeadFormProvider");
  return ctx;
}
