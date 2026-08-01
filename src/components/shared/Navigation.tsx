"use client";

import { personalInfo } from "@/data/portfolioData";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { useScrollY } from "@/hooks/useScrollY";
import { RESUME_URL, SCROLL_CONFIG, SECTION_IDS, TWITTER_BLUE } from "@/lib/constants";

const navLinks = [
  { name: "Home", href: `#${SECTION_IDS.home}`, sectionId: SECTION_IDS.home },
  { name: "Experience", href: `#${SECTION_IDS.experience}`, sectionId: SECTION_IDS.experience },
  { name: "Skills", href: `#${SECTION_IDS.skills}`, sectionId: SECTION_IDS.skills },
  { name: "Projects", href: `#${SECTION_IDS.projects}`, sectionId: SECTION_IDS.projects },
  { name: "Contact", href: `#${SECTION_IDS.contact}`, sectionId: SECTION_IDS.contact },
];

export default function Navigation() {
  const scrollY = useScrollY();
  const isScrolled = scrollY > SCROLL_CONFIG.navShadowThreshold;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.home);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.sectionId));
    let current: string = SECTION_IDS.home;
    sections.forEach((section) => {
      if (section && scrollY >= section.offsetTop - SCROLL_CONFIG.navStickyOffset) {
        current = section.id;
      }
    });
    setActiveSection(current);
  }, [scrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        toggleButtonRef.current && !toggleButtonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    smoothScrollTo(sectionId);
  };

  const firstName = personalInfo.name.split(" ")[0];
  const lastName = personalInfo.name.split(" ")[1]?.toLowerCase();

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href={`#${SECTION_IDS.home}`}
          onClick={(e) => scrollTo(e, SECTION_IDS.home)}
          className="flex items-center gap-1.5 font-bold text-xl md:text-2xl select-none"
        >
          <span className="text-primary">{firstName}</span>
          {lastName && (
            <span className="text-foreground/70 font-normal hidden sm:inline">.{lastName}</span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 flex-shrink-0"
            style={{ color: TWITTER_BLUE }}
            fill="currentColor"
            aria-label="Verified"
          >
            <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.93.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.53 1.26 3.93.81c.66 1.31 1.9 2.19 3.33 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.sectionId)}
                  className={`relative text-sm font-medium py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 ${
                    activeSection === link.sectionId
                      ? "text-primary after:w-full"
                      : "text-foreground/70 hover:text-foreground after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary/30 bg-primary/8 text-sm font-medium text-primary hover:bg-primary/15 hover:border-primary/50 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        } bg-background/95 backdrop-blur-sm`}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.sectionId)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.sectionId
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/8 transition-colors"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
