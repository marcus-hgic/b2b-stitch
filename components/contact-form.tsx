"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormData } from "@/lib/schemas";
import { submitLeadForm } from "@/lib/actions/hubspot";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const categoryOptions = [
  "Tandläkare",
  "Vårdcentral",
  "Specialistvård",
  "Kvinnohälsa",
  "Fysisk hälsa",
  "Psykisk hälsa",
  "Annat",
];

interface ContactFormProps {
  prefilledCategory?: string;
}

export default function ContactForm({ prefilledCategory }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      category: prefilledCategory || "",
      consent: undefined,
    },
  });

  async function onSubmit(data: LeadFormData) {
    setServerError("");
    const fd = new FormData();
    fd.set("company", data.company);
    fd.set("firstname", data.firstname);
    fd.set("email", data.email);
    fd.set("phone", data.phone || "");
    fd.set("category", data.category || "");
    fd.set("consent", String(data.consent));

    const result = await submitLeadForm(fd);
    if (result.error) {
      setServerError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="mx-auto text-duck-blue mb-4" size={48} />
        <p className="text-lg font-bold font-headline">
          Tack för din förfrågan!
        </p>
        <p className="text-slate-text mt-2">
          Vi hör av oss inom 24 timmar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium mb-1"
        >
          Kliniknamn *
        </label>
        <input
          id="company"
          type="text"
          {...register("company")}
          className="w-full border border-whisper rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-duck-blue"
          placeholder="Er klinik eller mottagning"
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
        )}
      </div>

      {/* Firstname */}
      <div>
        <label
          htmlFor="firstname"
          className="block text-sm font-medium mb-1"
        >
          Kontaktperson *
        </label>
        <input
          id="firstname"
          type="text"
          {...register("firstname")}
          className="w-full border border-whisper rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-duck-blue"
          placeholder="Ditt namn"
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstname.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          E-postadress *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full border border-whisper rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-duck-blue"
          placeholder="namn@klinik.se"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full border border-whisper rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-duck-blue"
          placeholder="070-123 45 67"
        />
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium mb-1"
        >
          Kategori
        </label>
        <select
          id="category"
          {...register("category")}
          className="w-full border border-whisper rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-duck-blue bg-white"
        >
          <option value="">Välj kategori...</option>
          {categoryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          value="true"
          className="mt-1 h-4 w-4 rounded border-whisper text-duck-blue focus:ring-duck-blue"
        />
        <label htmlFor="consent" className="text-sm text-slate-text">
          Jag godkänner att Vården.se kontaktar mig angående min förfrågan.
        </label>
      </div>
      {errors.consent && (
        <p className="text-red-500 text-sm">{errors.consent.message}</p>
      )}

      {serverError && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-duck-blue text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
      </button>
    </form>
  );
}
