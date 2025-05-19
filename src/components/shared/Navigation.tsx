"use client";

import { personalInfo } from "@/data/portfolioData";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Experience", href: "#experience", sectionId: "experience" },
  { name: "Skills", href: "#skills", sectionId: "skills" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrolled = window.scrollY > 20;
      setIsScrolled(currentScrolled);
      
      // Update the header height
      const newHeaderHeight = currentScrolled ? 64 : 80;
      setHeaderHeight(newHeaderHeight);
      document.documentElement.style.setProperty('--header-height', `${newHeaderHeight}px`);
      
      // Check which section is currently in view
      const sections = navLinks.map(link => document.getElementById(link.sectionId));
      const pageYOffset = window.pageYOffset;
      
      // Find the section closest to the top of the viewport
      let currentSection = "home";
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 100; // Offset to trigger slightly before the section
          const distance = Math.abs(pageYOffset - sectionTop);
          
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Set initial header height
    const initialHeaderHeight = window.scrollY > 20 ? 64 : 80;
    setHeaderHeight(initialHeaderHeight);
    document.documentElement.style.setProperty('--header-height', `${initialHeaderHeight}px`);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll handler function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu first to prevent layout shifts
      setIsMenuOpen(false);
        // Add small delay for mobile menu to close before scrolling
      setTimeout(() => {
        // Use smoothScrollTo if available, otherwise fall back to standard scrollTo
        if ((window as any).smoothScrollTo) {
          (window as any).smoothScrollTo({
            top: targetElement.offsetTop - headerHeight,
          });
        } else {
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth',
          });
        }
        
        // Update active section
        setActiveSection(targetId);
      }, 10);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/#home" className="font-bold text-xl md:text-2xl" onClick={(e) => handleNavClick(e, "#home")}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary-foreground dark:to-blue-300">
            {personalInfo.name.split(" ")[0]}
          </span>
          <span className="hidden sm:inline">
            .{personalInfo.name.split(" ")[1].toLowerCase()}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-all duration-300 ease-in-out py-2 border-b-2 ${
                    activeSection === link.sectionId
                      ? "opacity-100 border-primary dark:border-primary"
                      : "opacity-80 hover:opacity-100 border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-foreground p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[var(--header-height)] left-0 right-0 bg-white dark:bg-gray-900 shadow-md overflow-y-auto max-h-[70vh] z-50"
          >
            <Container className="py-4">
              <ul className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block py-3 px-4 rounded-md transition-colors text-foreground dark:text-white ${
                        activeSection === link.sectionId
                          ? "bg-gray-100 dark:bg-gray-800 text-primary dark:text-primary-foreground"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}