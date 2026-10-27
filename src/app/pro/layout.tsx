import type { Metadata } from "next";
import { Libre_Caslon_Display } from "next/font/google";
import { experiences, personalInfo } from "@/data/portfolioData";

// Hidden route: no link from the main site, and noindex keeps it out of search.

const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-caslon",
});

export const metadata: Metadata = {
  title: `${personalInfo.name}, ${experiences[0].role}`,
  description: `${experiences[0].role} at ${experiences[0].company}, leading ERP delivery for BDO clients in Singapore.`,
  robots: { index: false, follow: false },
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return <div className={caslon.variable}>{children}</div>;
}
