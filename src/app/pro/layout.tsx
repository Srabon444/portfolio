import type { Metadata } from "next";
import { Libre_Caslon_Display } from "next/font/google";

// Hidden route: no link from the main site, and noindex keeps it out of search.

const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-caslon",
});

export const metadata: Metadata = {
  title: "Ashraful Islam, Software Engineer",
  description: "Software engineer building business software and web platforms.",
  robots: { index: false, follow: false },
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return <div className={caslon.variable}>{children}</div>;
}
