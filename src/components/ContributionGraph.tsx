"use client";

import React, { useEffect, useRef, useState } from "react";

// ── config ────────────────────────────────────────────────────────────────────
const GITHUB_USER = "adityaraut649";

const COLORS = ["#161b22", "#0d2d56", "#1a5a9a", "#2281d4", "#58b0f7"] as const;

const DAY_NAMES = ["", "Mon", "", "Wed", "", "Fri", ""] as const;
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

// ── types ─────────────────────────────────────────────────────────────────────
interface RawDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
interface Day extends RawDay {
  empty?: boolean;
}
interface ApiResponse {
  contributions: RawDay[];
  total: Record<string, number>;
}
interface MonthLabel {
  weekIndex: number;
  label: string;
}

// ── helpers ───────────────────────────────────────────────────────────────────
function buildWeeks(contributions: RawDay[]): Day[][] {
  if (!contributions.length) return [];
  const map: Record<string, RawDay> = {};
  contributions.forEach((d) => (map[d.date] = d));

  const start = new Date(contributions[0].date);
  const end = new Date(contributions[contributions.length - 1].date);
  const cur = new Date(start);
  cur.setDate(cur.getDate() - cur.getDay()); // rewind to Sunday

  const days: Day[] = [];
  while (cur <= end) {
    const iso = cur.toISOString().slice(0, 10);
    days.push(map[iso] ?? { date: iso, count: 0, level: 0, empty: true });
    cur.setDate(cur.getDate() + 1);
  }

  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  return weeks;
}

function getMonthLabels(weeks: Day[][]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const first = week.find((d) => d?.date);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (m !== lastMonth) {
      labels.push({ weekIndex: wi, label: MONTH_NAMES[m] });
      lastMonth = m;
    }
  });
  return labels;
}

// ── component ─────────────────────────────────────────────────────────────────
export default function ContributionGraph() {
  const [weeks, setWeeks] = useState<Day[][]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
        );
        if (!res.ok) throw new Error("User not found");
        const data: ApiResponse = await res.json();
        setWeeks(buildWeeks(data.contributions));
        setTotal(data.contributions.reduce((s, d) => s + d.count, 0));
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const monthLabels = getMonthLabels(weeks);
  const CELL = 9;
  const GAP = 2;
  const COL = CELL + GAP;

  return (
    // width:100% fills whatever column/card it sits in
    <section
      style={{
        width: "100%",
        background: "#111",
        borderRadius: 10,
        padding: "12px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        color: "#8b949e",
        boxSizing: "border-box",
      }}
    >
      {loading && (
        <p
          style={{
            fontSize: 13,
            color: "#7d8590",
            padding: "32px 0",
            textAlign: "center",
          }}
        >
          Loading contributions…
        </p>
      )}
      {error && (
        <p style={{ fontSize: 13, color: "#f85149" }}>Error: {error}</p>
      )}

      {!loading && !error && (
        // overflow-x:auto scrolls horizontally on narrow screens instead of overflowing
        <div style={{ width: "100%", overflowX: "auto" }}>
          <div style={{ display: "inline-block", minWidth: "max-content" }}>
            {/* month labels */}
            <div style={{ display: "flex", marginBottom: 4, marginLeft: 24 }}>
              {(() => {
                const items: React.ReactNode[] = [];
                let prev = 0;
                monthLabels.forEach((ml, i) => {
                  const span = ml.weekIndex - prev;
                  items.push(
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        width: span * COL,
                        fontSize: 11,
                        color: "#7d8590",
                      }}
                    >
                      {ml.label}
                    </span>,
                  );
                  prev = ml.weekIndex;
                });
                return items;
              })()}
            </div>

            {/* day labels + week grid */}
            <div style={{ display: "flex" }}>
              {/* weekday labels */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: GAP,
                  marginRight: 6,
                }}
              >
                {DAY_NAMES.map((name, i) => (
                  <div
                    key={i}
                    style={{
                      height: CELL,
                      fontSize: 10,
                      color: "#484f58",
                      display: "flex",
                      alignItems: "center",
                      minWidth: 28,
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* weeks */}
              <div style={{ display: "flex", gap: GAP }}>
                {weeks.map((week, wi) => (
                  <div
                    key={wi}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: GAP,
                    }}
                  >
                    {Array.from({ length: 7 }).map((_, di) => {
                      const day = week[di];
                      const bg =
                        !day || day.empty
                          ? "#0d1117"
                          : COLORS[Math.min(day.level, 4)];
                      return (
                        <div
                          key={di}
                          style={{
                            width: CELL,
                            height: CELL,
                            borderRadius: 2,
                            background: bg,
                            cursor: day && !day.empty ? "pointer" : "default",
                          }}
                          onMouseEnter={(e) => {
                            if (!day || day.empty) return;
                            const cnt = day.count;
                            const date = new Date(day.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            );
                            setTooltip({
                              text:
                                cnt === 0
                                  ? `No contributions on ${date}`
                                  : `${cnt} contribution${cnt !== 1 ? "s" : ""} on ${date}`,
                              x: e.clientX + 12,
                              y: e.clientY - 34,
                            });
                          }}
                          onMouseMove={(e) =>
                            setTooltip((t) =>
                              t
                                ? { ...t, x: e.clientX + 12, y: e.clientY - 34 }
                                : t,
                            )
                          }
                          onMouseLeave={() => setTooltip(null)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
                minWidth: "100%",
              }}
            >
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: "#7d8590",
                  textDecoration: "none",
                }}
              >
                {total.toLocaleString()} contributions in the last year
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 11,
                  color: "#7d8590",
                }}
              >
                Less
                {COLORS.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: CELL,
                      height: CELL,
                      borderRadius: 2,
                      background: c,
                    }}
                  />
                ))}
                More
              </div>
            </div>
          </div>
        </div>
      )}

      {/* tooltip */}
      {tooltip && (
        <div
          ref={tooltipRef}
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y,
            background: "#1c2128",
            border: "0.5px solid #30363d",
            color: "#e6edf3",
            borderRadius: 6,
            padding: "5px 10px",
            fontSize: 12,
            pointerEvents: "none",
            zIndex: 9999,
            whiteSpace: "nowrap",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
