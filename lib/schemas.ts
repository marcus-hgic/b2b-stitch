import { z } from "zod";

export const leadFormSchema = z.object({
  company: z.string().min(1, "Kliniknamn krävs"),
  firstname: z.string().min(1, "Kontaktperson krävs"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().optional(),
  category: z.string().optional(),
  consent: z.literal(true, {
    message: "Du måste godkänna för att fortsätta",
  }),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
