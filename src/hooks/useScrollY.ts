"use client";

import { useState, useEffect } from "react";

const subs = new Set<(y: number) => void>();
let active = false;

function notify() {
  const y = window.scrollY;
  subs.forEach((fn) => fn(y));
}

export function useScrollY(): number {
  // Always init to 0 so server and client render the same HTML (fixes hydration mismatch)
  const [y, setY] = useState(0);

  useEffect(() => {
    if (!active && typeof window !== "undefined") {
      window.addEventListener("scroll", notify, { passive: true });
      active = true;
    }
    subs.add(setY);
    // Sync immediately in case scrollY changed before this effect ran
    setY(window.scrollY);

    return () => {
      subs.delete(setY);
      if (subs.size === 0) {
        window.removeEventListener("scroll", notify);
        active = false;
      }
    };
  }, []);

  return y;
}
