// Single source of truth for hardcoded config values used across components.

export const SECTION_IDS = {
  home: "home",
  about: "about",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  contributions: "contributions",
  contact: "contact",
} as const;

export const CAREER_START_DATE = new Date(2023, 0); // January 2023

export const RESUME_URL =
  "https://drive.google.com/file/d/1YOl-_xifAZeF5UYEbrZux1j4x2q2vcmj/view?usp=drive_link";

export const SCROLL_CONFIG = {
  navScrollOffset: 80, // offset used by smoothScrollTo when landing on a section
  navScrollDuration: 400,
  navStickyOffset: 120, // how early a section is considered "active" while scrolling
  navShadowThreshold: 20, // scrollY past which the header gets a shadow/blur
  scrollToTopThreshold: 500, // scrollY past which the "scroll to top" button appears
};

export const TYPEWRITER_CONFIG = {
  typingSpeed: 80,
  eraseSpeed: 45,
  pauseMs: 2000,
};

export const REVEAL_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px",
};

export const TOAST_DURATION_MS = 3000;

export const INTRO_SCREEN_CONFIG = {
  techCycleIntervalMs: 400,
  completeDelayMs: 900,
};

export const TWITTER_BLUE = "#1D9BF0";

export const ICON_CDN = {
  devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons",
  simpleicon: "https://cdn.simpleicons.org",
};

export const CONTRIBUTION_CALENDAR_THEME = {
  light: ["#e8f4f2", "#a3d4cc", "#4db0a4", "#0d9488", "#0a6e65"],
  dark: ["#1a2625", "#003d38", "#006059", "#009e91", "#00c5b5"],
};
