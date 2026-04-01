"use server";

import { leadFormSchema } from "@/lib/schemas";

const PORTAL_ID = "7080361";
const FORM_GUID = "533b5811-81a4-4aa9-be99-5cb3c4845098";
const SUBSCRIPTION_TYPE_ID = 8387018;
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

export async function submitLeadForm(formData: FormData) {
  const raw = {
    company: formData.get("company") as string,
    firstname: formData.get("firstname") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || "",
    category: (formData.get("category") as string) || "",
    consent: formData.get("consent") === "true",
  };

  const parsed = leadFormSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || "Valideringsfel" };
  }

  const payload = {
    fields: [
      { name: "company", value: parsed.data.company },
      { name: "firstname", value: parsed.data.firstname },
      { name: "email", value: parsed.data.email },
      { name: "phone", value: parsed.data.phone || "" },
      {
        name: "message",
        value: parsed.data.category
          ? `Kategori: ${parsed.data.category}`
          : "",
      },
      {
        name: "ar_du_privatperson_eller_foretag_",
        value: "YuHEmw-69Ba0yOFfAUgtV",
      },
    ],
    context: {
      pageUri: "https://vardgivare.varden.se",
      pageName: "B2B Sajt – Leadformulär",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "Jag godkänner att Vården.se kontaktar mig angående min förfrågan.",
        communications: [
          {
            value: true,
            subscriptionTypeId: SUBSCRIPTION_TYPE_ID,
            text: "Godkänner kommunikation",
          },
        ],
      },
    },
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`HubSpot error: ${res.status}`);
    return { success: true };
  } catch {
    return {
      error: "Något gick fel. Försök igen eller kontakta salj@varden.se",
    };
  }
}
