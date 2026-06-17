"use client";

import { ReactNode, useEffect, useRef } from "react";
import { observe, unobserve } from "@/lib/scrollObserver";

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

    observe(el, (entry) => {
      if (entry.isIntersecting) {
        el.classList.add("in-view");
        if (once) unobserve(el);
      } else if (!once) {
        el.classList.remove("in-view");
      }
    });

    return () => unobserve(el);
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
