import type { Metadata } from "next";
import { Newsreader } from "next/font/google";

// Hidden route: reachable only by typing /pro. Nothing on the main site links
// here, and search engines are told not to index or follow it.

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Ashraful Islam · Software Engineer",
  description: "Software engineer building web products and business systems.",
  robots: { index: false, follow: false },
};

export default function ProLayout({ children }: { children: React.ReactNode }) {
  return <div className={newsreader.variable}>{children}</div>;
}
