import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LeadFormProvider } from "@/components/lead-form-provider";
import LeadFormModal from "@/components/lead-form-modal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vården.se | För Vårdgivare",
    template: "%s | Vården.se",
  },
  description:
    "Sveriges ledande plattform för vårdgivare. Synlighet, onlinebokning, AI-chatt och mer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <LeadFormProvider>
          {children}
          <LeadFormModal />
        </LeadFormProvider>
      </body>
    </html>
  );
}
