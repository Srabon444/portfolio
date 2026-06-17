"use client";

import { personalInfo } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import Link from "next/link";
import dynamic from "next/dynamic";
import animationData from "@/data/lottie/development.json";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { GitHubIcon, GitLabIcon, LinkedInIcon, EmailIcon } from "../shared/SocialIcons";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
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
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-6">
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
            <div className="space-y-4 text-sm sm:text-[15px] text-muted-foreground mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
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
            <div className="grid grid-cols-2 gap-2 mb-8 max-w-lg mx-auto lg:mx-0">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Availability", value: "Open to opportunities" },
                { label: "Focus", value: "Full-Stack Engineering" },
                { label: "Approach", value: "Product-minded" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-muted rounded-lg px-3 py-2 border border-border">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-xs font-medium text-foreground">{value}</p>
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
          className="w-full max-w-xs lg:max-w-md flex-shrink-0"
        >
          <Lottie animationData={animationData} loop className="w-full h-auto" />
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}
