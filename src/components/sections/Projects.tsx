"use client";

import { projects } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const priorityFilters = ["All", "Next.js", "React.js", "TypeScript", "Node.js"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeFilter));

  return (
    <section id={SECTION_IDS.projects} className="pt-10 pb-16 md:pt-14 md:pb-24 bg-muted">
      <Container>
        <SmoothScrollReveal>
          <SectionHeader
            eyebrow="What I've Built"
            title="Projects"
            description="A selection of projects — from production systems to personal builds."
          />
        </SmoothScrollReveal>

        {/* Filter pills */}
        <SmoothScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {priorityFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </SmoothScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <SmoothScrollReveal key={project.id} delay={index * 0.06} duration={0.5}>
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 flex flex-col h-full group">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-10 w-10 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    {project.work && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-background/90 text-foreground border border-border/50 backdrop-blur-sm">
                        Work
                      </span>
                    )}
                    {project.hobby && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-background/90 text-foreground border border-border/50 backdrop-blur-sm">
                        Personal
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-medium border border-border">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </SmoothScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
