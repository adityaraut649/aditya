"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  backgroundImage?: string;
  tags: string[];
  github: string;
  live?: string;
  status?: "live" | "building" | "not-started";
}

const projects: Project[] = [
  {
    title: "VengenceUI",
    description:
      "VengenceUI helps you build your landing page by providing animated beautiful components.",
    imageSrc: "/project2.png",
    backgroundImage: "/b1.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/adityaraut649",
    live: "https://github.com/adityaraut649",
    status: "live",
  },
  {
    title: "Scribble3D",
    description:
      "Turn your sketches into 3D objects and worlds — no 3D skills required.",
    imageSrc: "/project1.png",
    backgroundImage: "/b2.png",
    tags: ["Next.js", "tldraw", "Three.js", "TypeScript"],
    github: "https://github.com/adityaraut649",
    status: "live",
  },
  {
    title: "Blueprint",
    description:
      "Blueprint is an AI UI builder that turns prompts into structured, production-ready interfaces.",
    imageSrc: "/coming.png",
    backgroundImage: "/b3.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Bun"],
    github: "https://github.com/adityaraut649",
    status: "building",
  },
  {
    title: "Inquiro",
    description:
      "Inquiro is an AI-powered search engine that helps you find information on the internet.",
    imageSrc: "/project3.png",
    backgroundImage: "/b4.png",
    tags: ["Next.js", "TypeScript", "Radix UI", "Gemini"],
    github: "https://github.com/adityaraut649",
    status: "not-started",
  },
  {
    title: "RepoLens",
    description:
      "An all-in-one GitHub explorer with tech stack insights, code browsing, and analytics.",
    imageSrc: "/Screenshot%202026-02-07%20225125.png",
    backgroundImage: "/b5.png",
    tags: ["Next.js", "Tailwind", "Radix UI", "Recharts"],
    github: "https://github.com/adityaraut649",
    status: "live",
  },
  {
    title: "MotionSuite",
    description:
      "motion-suite is a lightweight animation toolkit for React + Framer Motion.",
    imageSrc: "/project-image/image copy 2.png",
    backgroundImage: "/b1.png",
    tags: ["TypeScript", "Next.js", "React", "Framer Motion"],
    github: "https://github.com/adityaraut649",
    live: "https://github.com/adityaraut649",
    status: "live",
  },
];

const statusConfig = {
  live: { dot: "bg-emerald-500", label: "Live" },
  building: { dot: "bg-red-500", label: "Building" },
  "not-started": { dot: "bg-zinc-400", label: "Not Started" },
};

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const cfg = statusConfig[project.status ?? "live"];

  return (
    <div
      className="flex flex-col group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image card */}
      <div className="relative w-full aspect-[1.4] rounded-xl border border-zinc-800 bg-[#111111] shadow-sm p-4 pb-0 flex flex-col overflow-hidden transition-all duration-300 hover:border-zinc-700">
        {/* Ambient background */}
        {project.backgroundImage && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${project.backgroundImage}')` }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}

        {/* "View Project" label */}
        <motion.p
          className="absolute z-30 text-[10px] font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          animate={{
            left: hovered ? "50%" : "1rem",
            top: hovered ? "22%" : "1rem",
            x: hovered ? "-50%" : "0%",
            color: hovered ? "#ffffff" : "rgb(113,113,122)",
            opacity: hovered ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          View Project
        </motion.p>

        {/* Floating screenshot */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-[85%] rounded-t-[10px] bg-[#18181b] shadow-[0_-8px_30px_rgba(0,0,0,0.5)] z-20 border border-zinc-800 border-b-0"
          animate={{
            height: hovered ? "70%" : "78%",
            y: hovered ? 4 : 0,
            x: "-50%",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="size-full overflow-hidden rounded-t-[9px]">
            <img
              src={project.imageSrc}
              alt={`${project.title} preview`}
              className="size-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Content below card — overlaps up slightly */}
      <div className="-mt-1 pt-5 flex flex-col px-0.5">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-zinc-100">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-800 bg-zinc-900">
            <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            <span className="text-[11px] font-medium text-zinc-300">
              {cfg.label}
            </span>
          </div>
        </div>

        <p className="mt-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tags row — scrollable so they never wrap */}
        <div className="flex gap-1.5 mt-3 overflow-x-auto no-scrollbar pb-0.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 text-[11px] text-zinc-300 border border-zinc-800 rounded-sm px-2 py-1 bg-zinc-900"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm mt-2 border border-zinc-800 bg-zinc-900">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
              aria-label="Live site"
            >
              <Globe size={14} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={14} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1 text-[12px] font-medium text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors"
          >
            View Project
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="mt-8">
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      <p className="mt-3 inline-block border border-dashed border-[#737373]/30 bg-[#0f0f0f] px-4 py-[7px] text-[13px] font-mono text-zinc-400 rounded-none">
        I love designing and building thoughtful, production-grade applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 pt-6">
        {visible.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium px-5 py-2 hover:bg-zinc-800 transition-all duration-200"
          >
            View all projects
          </a>
        </motion.div>
      )}
    </section>
  );
}
