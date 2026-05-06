import { useMemo } from "react";

const MONTHS = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
const TOTAL_WEEKS = 52;

function getColor(level: number): string {
  switch (level) {
    case 0: return "#161b22";
    case 1: return "#0e4429";
    case 2: return "#006d32";
    case 3: return "#26a641";
    case 4: return "#39d353";
    default: return "#161b22";
  }
}

// Generate a realistic-looking contribution pattern
function generateContributions(): number[][] {
  const weeks: number[][] = [];
  const seed = 42;
  let rng = seed;
  const next = () => {
    rng = (rng * 1664525 + 1013904223) & 0xffffffff;
    return (rng >>> 0) / 0xffffffff;
  };

  for (let w = 0; w < TOTAL_WEEKS; w++) {
    const days: number[] = [];
    // More active on weekdays
    const baseActivity = next() > 0.3 ? 1 : 0;
    for (let d = 0; d < 7; d++) {
      const isWeekend = d === 0 || d === 6;
      let level = 0;
      if (baseActivity) {
        const r = next();
        if (isWeekend) {
          level = r > 0.6 ? 0 : r > 0.3 ? 1 : r > 0.15 ? 2 : 3;
        } else {
          level = r > 0.35 ? 0 : r > 0.2 ? 1 : r > 0.1 ? 2 : r > 0.04 ? 3 : 4;
        }
      } else {
        level = next() > 0.85 ? 1 : 0;
      }
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
}

export default function ContributionGraph() {
  const weeks = useMemo(() => generateContributions(), []);
  const totalContributions = useMemo(() => {
    return weeks.flat().reduce((sum, level) => sum + (level > 0 ? level * 3 + 1 : 0), 0);
  }, [weeks]);

  const cellSize = 11;
  const gap = 2;
  const totalWidth = TOTAL_WEEKS * (cellSize + gap);
  const totalHeight = 7 * (cellSize + gap);

  return (
    <div className="bg-[#0d1117] rounded-lg p-4 border border-[#21262d]">
      {/* Month labels */}
      <div className="flex mb-1 pl-0" style={{ width: totalWidth + 2 }}>
        {MONTHS.map((month) => (
          <div
            key={month}
            className="text-[#8b949e] text-[10px]"
            style={{ width: `${(TOTAL_WEEKS / MONTHS.length) * (cellSize + gap)}px` }}
          >
            {month}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <svg
          width={totalWidth + 2}
          height={totalHeight + 2}
          className="block"
        >
          {weeks.map((week, weekIdx) =>
            week.map((level, dayIdx) => (
              <rect
                key={`${weekIdx}-${dayIdx}`}
                x={weekIdx * (cellSize + gap)}
                y={dayIdx * (cellSize + gap)}
                width={cellSize}
                height={cellSize}
                rx={2}
                ry={2}
                fill={getColor(level)}
                className="transition-opacity hover:opacity-80"
              >
                <title>{`Level ${level}`}</title>
              </rect>
            ))
          )}
        </svg>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-[#8b949e] text-[11px]">
          <span className="text-[#26a641]">{totalContributions}</span> contributions in the last year on{" "}
          <a
            href="https://github.com/adityaraut649"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58a6ff] hover:underline"
          >
            GitHub
          </a>
          .
        </span>
        <div className="flex items-center gap-1.5 text-[#8b949e] text-[10px]">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              style={{
                width: 10,
                height: 10,
                backgroundColor: getColor(l),
                borderRadius: 2,
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
