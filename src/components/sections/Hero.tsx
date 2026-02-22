"use client";

import { personalInfo } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie with ssr disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    // Dynamic import of the Lottie animation
    fetch("/lottie/development.json")
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  // Smooth scroll handler function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Use our custom smooth scroll if available
    if (typeof window !== 'undefined') {
      if ((window as any).smoothScrollToElement) {
        (window as any).smoothScrollToElement(`#${targetId}`, 80); // 80px offset
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12"
    >
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left max-w-xl">
          <SmoothScrollReveal duration={0.4}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-gray-800 dark:text-primary text-sm font-medium mb-4">
              {personalInfo.availability}
            </span>
          </SmoothScrollReveal>
          
          <SmoothScrollReveal delay={0.1} duration={0.5}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m&nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary-foreground dark:to-blue-300">
                {personalInfo.name}
              </span>
            </h1>
          </SmoothScrollReveal>
          
          <SmoothScrollReveal delay={0.2} duration={0.5}>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
          </SmoothScrollReveal>
          
          <SmoothScrollReveal delay={0.3} duration={0.5}>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {personalInfo.bio}
            </p>
          </SmoothScrollReveal>
          
          <SmoothScrollReveal delay={0.4} direction="up" duration={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-6 py-3 rounded-lg bg-primary text-white dark:bg-primary-foreground dark:text-primary hover:opacity-90 transition-opacity text-center font-medium"
              >
                Get in Touch
              </Link>
              <Link
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center font-medium"
              >
                View My Work
              </Link>
            </div>
          </SmoothScrollReveal>
          
          {/* Social icons */}
          <SmoothScrollReveal delay={0.5} direction="up" duration={0.5}>
            <div className="flex items-center gap-5 justify-center lg:justify-start mt-2">
              <a
                href={personalInfo.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitLab"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group relative"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitLab
                </span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group relative"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group relative"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </SmoothScrollReveal>
        </div>

        {/* Lottie Animation */}
        <SmoothScrollReveal direction="right" delay={0.3} duration={0.7} className="w-full max-w-md lg:max-w-lg">
          {isMounted && animationData && (
            <Lottie 
              animationData={animationData} 
              loop={true}
              className="w-full h-auto"
            />
          )}
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}