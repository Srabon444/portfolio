"use client";

import { personalInfo } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";
import ContactButton from "../shared/ContactButton";

const coreValues = [
  {
    title: "Clean Architecture",
    description: "Maintainable, scalable code that follows solid architectural principles.",
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "User-Centered Design",
    description: "Building accessible, usable applications that users actually enjoy.",
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description: "Staying sharp through emerging trends, best practices, and side projects.",
    icon: (
      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

const quickFacts = [
  { label: "Location", value: personalInfo.location },
  // { label: "Availability", value: "Open to opportunities" },
  { label: "Focus", value: "Full-Stack Engineering" },
  { label: "Approach", value: "Product-minded" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <Container>
        <SmoothScrollReveal>
          <SectionHeader
            eyebrow="About"
            title="Get to Know Me"
            bgWord="ABOUT"
            description="A bit about who I am, what I do, and how I approach software engineering."
          />
        </SmoothScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — bio + quick facts + CTAs */}
          <SmoothScrollReveal direction="left" delay={0.1} duration={0.5}>
            <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground mb-8">
              <p>
                I&apos;m a{" "}
                <strong className="text-foreground font-semibold">{personalInfo.title}</strong>{" "}
                with a passion for building clean, performant, and user-centered digital products.
              </p>
              <p>
                Based in {personalInfo.location}, I&apos;ve worked across the full stack — from
                pixel-perfect UIs to scalable backend APIs. I&apos;m always chasing the next
                interesting problem to solve.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, writing technical
                content, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {quickFacts.map(({ label, value }) => (
                <div key={label} className="bg-card rounded-lg px-4 py-3 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ContactButton text="Contact Me" />
              <Link
                href="https://drive.google.com/file/d/1YOl-_xifAZeF5UYEbrZux1j4x2q2vcmj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/8 border border-primary/25 rounded-lg text-sm font-medium text-primary hover:bg-primary/15 hover:border-primary/40 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </Link>
            </div>
          </SmoothScrollReveal>

          {/* Right — philosophy */}
          <SmoothScrollReveal direction="right" delay={0.2} duration={0.5}>
            <h3 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Technical Philosophy
            </h3>
            <div className="space-y-4">
              {coreValues.map((value, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SmoothScrollReveal>
        </div>
      </Container>
    </section>
  );
}
