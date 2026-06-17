"use client";

import { useState, useCallback } from "react";
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

function computeStats(data: Activity[]): ContribStats {
  if (!data.length) {
    return { total: 0, activeDays: 0, totalDays: 0, longestStreak: 0, bestDay: null };
  }

  let total = 0;
  let activeDays = 0;
  let longestStreak = 0;
  let currentStreak = 0;
  let bestDay: { count: number; date: string } | null = null;

  for (const a of data) {
    total += a.count;
    if (a.count > 0) {
      activeDays++;
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
      if (!bestDay || a.count > bestDay.count) {
        bestDay = { count: a.count, date: a.date };
      }
    } else {
      currentStreak = 0;
    }
  }

  return { total, activeDays, totalDays: data.length, longestStreak, bestDay };
}

function formatBestDay(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => ({ default: mod.GitHubCalendar })),
  { ssr: false }
);

const statCards = (stats: ContribStats) => [
  {
    value: stats.total.toLocaleString(),
    label: `Total contributions in the last year`,
  },
  {
    value: stats.activeDays,
    label: `Active days of ${stats.totalDays} days`,
  },
  {
    value: stats.longestStreak,
    label: "Longest streak consecutive days",
  },
  {
    value: stats.bestDay
      ? `${stats.bestDay.count} on ${formatBestDay(stats.bestDay.date)}`
      : "—",
    label: "Best day",
  },
];

export default function Contributions() {
  const { resolvedTheme } = useTheme();
  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";
  const [stats, setStats] = useState<ContribStats | null>(null);

  const handleData = useCallback((data: Activity[]) => {
    setStats(computeStats(data));
    return data;
  }, []);

  const cards = stats ? statCards(stats) : null;

  return (
    <section id="contributions" className="py-16 md:py-24 bg-background">
      <Container>
        <SmoothScrollReveal>
          <SectionHeader
            eyebrow="Open Source"
            title="Contributions"
            description="My GitHub contribution activity over the past year."
          />
        </SmoothScrollReveal>

        {/* Stats row */}
        {cards && (
          <SmoothScrollReveal delay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border p-4 text-center hover:border-primary/30 transition-colors duration-200"
                >
                  <p className="text-xl sm:text-2xl font-bold text-primary mb-1 leading-tight">
                    {card.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{card.label}</p>
                </div>
              ))}
            </div>
          </SmoothScrollReveal>
        )}

        {/* Calendar */}
        <SmoothScrollReveal delay={0.1}>
          <div className="flex justify-center overflow-x-auto pb-2">
            <GitHubCalendar
              username="Srabon444"
              colorScheme={colorScheme}
              fontSize={12}
              blockSize={13}
              blockMargin={4}
              transformData={handleData}
            />
          </div>
        </SmoothScrollReveal>
      </Container>
    </section>
  );
}
