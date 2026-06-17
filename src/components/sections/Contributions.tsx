"use client";

import { useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Container from "../shared/Container";
import SmoothScrollReveal from "../shared/SmoothScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import { useTheme } from "next-themes";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContribStats {
  total: number;
  activeDays: number;
  totalDays: number;
  longestStreak: number;
  bestDay: { count: number; date: string } | null;
}

function dataKey(data: Activity[]): string {
  return data.length > 0 ? `${data.length}:${data[0]?.date ?? ""}` : "";
}

function computeStats(data: Activity[]): ContribStats {
  if (!data.length) {
    return { total: 0, activeDays: 0, totalDays: 0, longestStreak: 0, bestDay: null };
  }
  let total = 0, activeDays = 0, longestStreak = 0, currentStreak = 0;
  let bestDay: { count: number; date: string } | null = null;
  for (const a of data) {
    total += a.count;
    if (a.count > 0) {
      activeDays++;
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
      if (!bestDay || a.count > bestDay.count) bestDay = { count: a.count, date: a.date };
    } else {
      currentStreak = 0;
    }
  }
  return { total, activeDays, totalDays: data.length, longestStreak, bestDay };
}

function formatBestDay(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => ({ default: mod.GitHubCalendar })),
  { ssr: false }
);

// Teal theme matching the site's primary color
const calendarTheme = {
  light: ["#e8f4f2", "#a3d4cc", "#4db0a4", "#0d9488", "#0a6e65"],
  dark: ["#1a2625", "#003d38", "#006059", "#009e91", "#00c5b5"],
};

export default function Contributions() {
  const { resolvedTheme } = useTheme();
  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";
  const [stats, setStats] = useState<ContribStats | null>(null);
  const lastKeyRef = useRef("");

  const handleData = useCallback((data: Activity[]) => {
    const key = dataKey(data);
    if (key !== lastKeyRef.current) {
      lastKeyRef.current = key;
      setTimeout(() => setStats(computeStats(data)), 0);
    }
    return data;
  }, []);

  const cards = stats
    ? [
        {
          value: stats.total.toLocaleString(),
          label: "Total contributions",
          sublabel: "in the last year",
        },
        {
          value: stats.activeDays,
          label: "Active days",
          sublabel: `of ${stats.totalDays} days`,
        },
        {
          value: stats.longestStreak,
          label: "Longest streak",
          sublabel: "consecutive days",
        },
        {
          value: stats.bestDay ? stats.bestDay.count : "—",
          label: "Best day",
          sublabel: stats.bestDay ? formatBestDay(stats.bestDay.date) : "",
        },
      ]
    : null;

  return (
    <section id="contributions" className="py-16 md:py-24 bg-background">
      {/* max-w-7xl makes this section deliberately wider than other sections (max-w-6xl) */}
      <Container className="max-w-7xl">
        <SmoothScrollReveal>
          <SectionHeader
            eyebrow="Open Source"
            title="Contributions"
            description="My GitHub contribution activity over the past year."
          />
        </SmoothScrollReveal>

        {/* Stats row — taller, narrower cards matching Sharif's proportions */}
        {cards && (
          <SmoothScrollReveal delay={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border/60 px-4 py-3 text-left hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all duration-1000"
                >
                  <p className="text-2xl font-semibold text-primary leading-tight mb-0.5">
                    {card.value}
                  </p>
                  <p className="text-xs font-medium text-foreground/80">{card.label}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{card.sublabel}</p>
                </div>
              ))}
            </div>
          </SmoothScrollReveal>
        )}

        {/* Calendar */}
        <SmoothScrollReveal delay={0.1}>
          <div className="bg-card rounded-2xl border border-border/60 p-6 overflow-x-auto">
            <div className="flex justify-center min-w-[600px]">
              <GitHubCalendar
                username="Srabon444"
                colorScheme={colorScheme}
                theme={calendarTheme}
                fontSize={12}
                blockSize={13}
                blockMargin={4}
                transformData={handleData}
              />
            </div>
          </div>
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}
