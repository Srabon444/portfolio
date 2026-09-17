"use client";

import { projects } from "@/data/portfolioData";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

const AUTOPLAY_INTERVAL_MS = 5000;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const priorityFilters = ["All", "Next.js", "React.js", "TypeScript", "Node.js"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeFilter));

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".snap-start");
    const step = card ? card.offsetWidth + 24 : el.clientWidth;

    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    const atStart = el.scrollLeft <= 5;

    if (direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  };

  // Autoplay: advance one card every interval, pause while hovered.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || filteredProjects.length <= 1) return;

    let paused = false;
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });

    const id = setInterval(() => {
      if (!paused) scrollByCard(1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      clearInterval(id);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
    };
  }, [filteredProjects.length]);

  return (
    <section id={SECTION_IDS.projects} className="pt-10 pb-16 md:pt-14 md:pb-24 bg-muted">
      <Container>
        <SmoothScrollReveal>
          <SectionHeader
            eyebrow="What I've Built"
            title="Projects"
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

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {filteredProjects.map((project, index) => (
            <SmoothScrollReveal
              key={project.id}
              delay={index * 0.06}
              duration={0.5}
              className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
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

                  <div className="flex items-center gap-4">
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
                    {project.codeLink && (
                      <Link
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .269.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>
          ))}
          </div>

          {filteredProjects.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous project"
                className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border shadow-md text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next project"
                className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border shadow-md text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
