"use client";

import { ReactNode, useEffect, useRef } from "react";

interface SmoothScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function SmoothScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.55,
  once = true,
  className = "",
}: SmoothScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const revealClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
      ? "reveal-right"
      : direction === "none"
      ? "reveal-none"
      : "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
