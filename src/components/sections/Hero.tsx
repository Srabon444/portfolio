"use client";

import { personalInfo } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("/lottie/development.json")
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-2xl w-full">
          <SmoothScrollReveal delay={0.0} duration={0.5}>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-6">
              {personalInfo.name}
            </h1>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.16} duration={0.5}>
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="h-px w-10 bg-primary flex-shrink-0" />
              <h2 className="text-base md:text-lg font-medium text-primary tracking-wide">
                {personalInfo.title}
              </h2>
            </div>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.24} duration={0.5}>
            <div className="space-y-4 text-[15px] text-muted-foreground mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                With{" "}
                <strong className="text-foreground font-semibold">3+ years of experience</strong>,
                I help businesses{" "}
                <strong className="text-foreground font-semibold">build and ship</strong>{" "}
                production-ready digital products. I specialise in{" "}
                <strong className="text-foreground font-semibold">Full-Stack Web Development</strong>{" "}
                using React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL — from
                pixel-perfect interfaces to robust backend systems.
              </p>
              <p>
                I&apos;ve shipped platforms serving thousands of real users — from an{" "}
                <strong className="text-foreground font-semibold">ERP for a Fortune 500 client</strong>{" "}
                to{" "}
                <strong className="text-foreground font-semibold">
                  Bangladesh&apos;s largest ambulance booking system
                </strong>
                . I deliver{" "}
                <strong className="text-foreground font-semibold">
                  scalable, performance-optimized
                </strong>{" "}
                solutions. Available for{" "}
                <strong className="text-foreground font-semibold">remote and onsite</strong>{" "}
                opportunities worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-8 max-w-lg mx-auto lg:mx-0">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Availability", value: "Open to opportunities" },
                { label: "Focus", value: "Full-Stack Engineering" },
                { label: "Approach", value: "Product-minded" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-muted rounded-lg px-4 py-3 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.32} duration={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link
                href="#contact"
                onClick={(e) => scrollTo(e, "contact")}
                className="px-7 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center font-medium text-sm"
              >
                Get in Touch
              </Link>
              <Link
                href="#projects"
                onClick={(e) => scrollTo(e, "projects")}
                className="px-7 py-3 rounded-lg border border-border text-foreground/80 hover:bg-muted hover:text-foreground transition-colors text-center font-medium text-sm"
              >
                View My Work
              </Link>
            </div>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.4} duration={0.5}>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              {[
                {
                  href: personalInfo.gitlab,
                  label: "GitLab",
                  icon: (
                    <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                    </svg>
                  ),
                },
                {
                  href: personalInfo.github,
                  label: "GitHub",
                  icon: (
                    <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  ),
                },
                {
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                  icon: (
                    <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  ),
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  label: "Email",
                  icon: (
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </SmoothScrollReveal>
        </div>

        {/* Lottie animation */}
        <SmoothScrollReveal
          direction="right"
          delay={0.2}
          duration={0.7}
          className="w-full max-w-xs lg:max-w-md flex-shrink-0"
        >
          {isMounted && animationData && (
            <Lottie animationData={animationData} loop className="w-full h-auto" />
          )}
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}
