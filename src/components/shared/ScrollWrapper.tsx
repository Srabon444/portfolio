"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface ScrollWrapperProps {
  children: React.ReactNode;
}

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Only run on the client side
    if (typeof window === "undefined") return;

    // Dynamically import GSAP plugins
    const initScrollSmoother = async () => {
      // Dynamic imports for GSAP plugins
      const ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).default;
      const ScrollSmoother = (await import("gsap/dist/ScrollSmoother")).default;
      
      // Register plugins
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // Create ScrollSmoother instance
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5, // Smoother scrolling (adjust as needed)
        effects: true, // Enable speed and lag attributes
        smoothTouch: 0.1, // Smooth touch scrolling
        normalizeScroll: true, // Normalize wheel/touch behavior
        ignoreMobileResize: true, // Improve mobile performance
      });

      // Make available globally for other components
      (window as any).smoother = smoother;
    };

    initScrollSmoother();

    return () => {
      // Cleanup function - if needed, kill the instance
      if ((window as any).smoother) {
        (window as any).smoother.kill();
      }
    };
  }, []);

  return (
    <>
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </>
  );
}