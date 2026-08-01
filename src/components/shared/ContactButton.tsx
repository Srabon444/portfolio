"use client";

import Link from "next/link";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { SECTION_IDS } from "@/lib/constants";

type ContactButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
  text?: string;
};

export default function ContactButton({
  className = "",
  variant = "primary",
  text = "Contact Me",
}: ContactButtonProps) {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo(SECTION_IDS.contact);
  };

  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border border-border text-foreground/80 hover:bg-muted hover:text-foreground",
  };

  return (
    <Link
      href={`#${SECTION_IDS.contact}`}
      onClick={scrollToContact}
      className={`inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}
