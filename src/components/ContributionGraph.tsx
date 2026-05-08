import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USER = "adityaraut649";

export default function ContributionGraph() {
  return (
    <section className="border border-[#1a1a1a] bg-[#050505] p-5">
      <GitHubCalendar
        username={GITHUB_USER}
        colorScheme="dark"
        blockSize={11}
        blockMargin={4}
        fontSize={12}
        showMonthLabels={false}
        showWeekdayLabels={false}
        style={{ color: "#8b949e" }} // ← makes month labels visible
        theme={{
          dark: [
            "#0d1117",
            "#0e4429",
            "#006d32",
            "#26a641",
            "#39d353",
          ],
        }}
        renderBlock={(block, activity) =>
          React.cloneElement(
            block,
            { rx: 2 },
            <title>
              {`${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${activity.date}`}
            </title>
          )
        }
      />

      <div className="mt-4 flex items-center justify-between text-[11px]">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8b949e] transition hover:text-white"
        >
          @{GITHUB_USER}
        </a>

        <span className="text-[#6e7681]">GitHub Contributions</span>
      </div>
    </section>
  );
}