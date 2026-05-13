"use client";

import {
  experiences,
  educations,
  Experience as ExperienceType,
  Education as EducationType,
} from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import { useState } from "react";
import ContactButton from "../shared/ContactButton";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section id="experience" className="py-24 bg-background">
      <Container>
        <SmoothScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary flex-shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Career Journey</h2>
          <p className="text-muted-foreground text-[15px] max-w-xl">
            My professional history and educational background.
          </p>
        </SmoothScrollReveal>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1 gap-1">
            {(["work", "education"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-background shadow-sm text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "work" ? "Work Experience" : "Education"}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {activeTab === "work" && (
            <div className="space-y-6">
              {experiences.map((exp: ExperienceType, index) => (
                <SmoothScrollReveal key={exp.id} delay={index * 0.08} duration={0.5}>
                  <div className="relative pl-8 pb-2">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                    {/* Timeline dot */}
                    <div className="absolute left-[-5px] top-5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                          {exp.period}
                        </span>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                            exp.jobType === "Remote"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800/40"
                              : "bg-stone-50 text-stone-600 border-stone-200 dark:bg-stone-900/20 dark:text-stone-300 dark:border-stone-800/40"
                          }`}
                        >
                          {exp.jobType}
                        </span>
                        {exp.isContract && (
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/40">
                            Contract
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-semibold text-foreground mb-1">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mb-3">
                        <span className="text-sm text-muted-foreground">{exp.company}</span>
                        <span className="text-xs text-muted-foreground/60">·</span>
                        <span className="text-xs text-muted-foreground/80">{exp.location}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-medium border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SmoothScrollReveal>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              {educations.map((edu: EducationType, index) => (
                <SmoothScrollReveal key={edu.id} delay={index * 0.08} duration={0.5}>
                  <div className="relative pl-8 pb-2">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                    <div className="absolute left-[-5px] top-5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/20 inline-block mb-3">
                        {edu.period}
                      </span>
                      <h3 className="text-base font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      {edu.description && (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </SmoothScrollReveal>
              ))}

              <SmoothScrollReveal delay={0.2} duration={0.5}>
                <div className="pl-8 relative">
                  <div className="absolute left-0 top-0 h-8 w-px bg-border" />
                  <div className="bg-muted rounded-xl p-5 border border-border mt-2">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Regularly enhancing skills through online courses, workshops, and contributing
                      to open-source projects.
                    </p>
                  </div>
                </div>
              </SmoothScrollReveal>
            </div>
          )}

          {/* CTA */}
          <SmoothScrollReveal delay={0.1} duration={0.5} className="mt-14">
            <div className="text-center bg-muted rounded-2xl p-8 border border-border">
              <h4 className="text-lg font-semibold mb-2">Let&apos;s Work Together</h4>
              <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
                Want to discuss how my experience can contribute to your project? Always open to
                new opportunities.
              </p>
              <ContactButton text="Get In Touch" />
            </div>
          </SmoothScrollReveal>
        </div>
      </Container>
    </section>
  );
}
