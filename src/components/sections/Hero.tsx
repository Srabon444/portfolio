"use client";

import { personalInfo } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import Link from "next/link";
import dynamic from "next/dynamic";
import animationData from "@/data/lottie/development.json";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { GitHubIcon, GitLabIcon, LinkedInIcon, EmailIcon } from "../shared/SocialIcons";
import { useState, useEffect } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const roles = [
  "ERP Specialist",
  "Full-Stack Engineer",
  "Software Engineer",
];

function useTypewriter(texts: string[], typingSpeed = 80, eraseSpeed = 45, pauseMs = 2000) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const full = texts[idx];

    if (!erasing && display === full) {
      const t = setTimeout(() => setErasing(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (erasing && display === "") {
      setErasing(false);
      setIdx((i) => (i + 1) % texts.length);
      return;
    }
    const delay = erasing ? eraseSpeed : typingSpeed;
    const t = setTimeout(() => {
      setDisplay((d) => erasing ? d.slice(0, -1) : full.slice(0, d.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [display, idx, erasing, texts, typingSpeed, eraseSpeed, pauseMs]);

  return display;
}

export default function Hero() {
  const typedRole = useTypewriter(roles);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        {/* Text content */}
        <div className="text-center lg:text-left flex-1 min-w-0">
          <SmoothScrollReveal delay={0.0} duration={0.5}>
            {/* Available badge — oval pill */}
            <div className="flex items-center justify-center lg:justify-start mb-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/50 bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                    style={{ animation: "pulse-ring 1.8s ease-out infinite" }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-5">
              {personalInfo.name}
            </h1>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.12} duration={0.5}>
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6 min-h-[1.75rem]">
              <div className="h-px w-10 bg-primary flex-shrink-0" />
              <span className="text-base md:text-lg font-medium text-primary tracking-wide">
                {typedRole}
                <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
              </span>
            </div>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.2} duration={0.5}>
            <p className="text-sm sm:text-[15px] text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Full-Stack Software Engineer with 3+ years building production-ready web applications
              — from ERP systems for Fortune 500 clients to Bangladesh&apos;s largest ambulance booking platform.
              Available for remote opportunities worldwide.
            </p>
          </SmoothScrollReveal>

          <SmoothScrollReveal delay={0.28} duration={0.5}>
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

          <SmoothScrollReveal delay={0.35} duration={0.5}>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              {[
                { href: personalInfo.gitlab, label: "GitLab", Icon: GitLabIcon },
                { href: personalInfo.github, label: "GitHub", Icon: GitHubIcon },
                { href: personalInfo.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                { href: `mailto:${personalInfo.email}`, label: "Email", Icon: EmailIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-4.5 w-4.5" />
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
          className="w-full max-w-xs lg:max-w-sm flex-shrink-0"
        >
          <Lottie animationData={animationData} loop className="w-full h-auto" />
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}
