import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CAREER_START_DATE } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearsOfExperience(): string {
  const years = (Date.now() - CAREER_START_DATE.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return `${Math.floor(years * 2) / 2}+`;
}

// "Label: body" bullets render the label bold; a bullet without ": " has no label
export function splitBulletLabel(text: string): [label: string | null, body: string] {
  const i = text.indexOf(": ");
  return i === -1 ? [null, text] : [text.slice(0, i), text.slice(i + 2)];
}
