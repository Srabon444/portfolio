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
