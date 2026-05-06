import { useState } from "react";

const projects = [
  {
    name: "Sales-Savvy",
    path: "adityaraut649/sales-savvy",
    href: "https://github.com/adityaraut649",
    description: "full-stack web app built with Spring Boot & React",
  },
  {
    name: "cli-tool",
    path: "adityaraut649/cli-tool",
    href: "https://github.com/adityaraut649",
    description: "command-line utility to automate boring stuff",
  },
  {
    name: "portfolio-site",
    path: "adityaraut649/portfolio",
    href: "https://github.com/adityaraut649/portfolio",
    description: "this very website — built with React & Tailwind",
  },
  {
    name: "api-wrapper",
    path: "adityaraut649/api-wrapper",
    href: "https://github.com/adityaraut649",
    description: "a clean wrapper around a messy public API",
  },
  {
    name: "study-notes",
    path: "adityaraut649/LearningPython",
    href: "https://github.com/adityaraut649/LearningPython.",
    description: "open notes from CS courses and self-study",
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="mt-10">
      <p className="text-[#555] text-xs uppercase tracking-widest mb-4 font-medium">Projects</p>
      <div className="space-y-0">
        {visible.map((project, idx) => (
          <div
            key={project.path}
            className={`flex items-baseline justify-between py-3 ${
              idx !== visible.length - 1 ? "border-b border-[#1e1e1e]" : ""
            }`}
          >
            <div className="flex-1 min-w-0 pr-4">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e8e8] text-sm font-medium hover:text-white transition-colors"
              >
                {project.name}
              </a>
              <span className="text-[#555] text-sm"> · {project.description}</span>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d3d3d] hover:text-[#555] transition-colors shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      {projects.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[#555] hover:text-[#888] text-sm mt-3 transition-colors"
        >
          {showAll ? "show less" : `show ${projects.length - 3} more`}
        </button>
      )}
    </section>
  );
}
