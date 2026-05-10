"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineArrowUpRight, HiOutlineChevronDown } from "react-icons/hi2";

const projects = [
  {
    title: "BlockTrack",
    subtitle: "On-Chain equipment tracking with immutable audit logs.",
    description:
      "A blockchain-based system for tracking physical equipment lifecycle, ownership, and maintenance records on-chain with immutable audit logs.",
    features: [
      "Smart contract-powered ownership and transfer history for every asset",
      "QR code scanning interface for real-time field updates from any device",
      "Tamper-proof maintenance logs with timestamped technician signatures",
      "Dashboard analytics showing equipment status, location, and uptime",
    ],
    tags: ["Solidity", "React", "Node.js", "IPFS", "Hardhat", "Web3.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Exness Clone",
    subtitle: "CFD trading platform with live charting and real-time price feeds.",
    description:
      "A pixel-accurate clone of the Exness CFD trading platform with live chart rendering, order management, and real-time price feeds.",
    features: [
      "Real-time candlestick charts with TradingView integration and custom indicators",
      "Order book and trade execution UI with simulated slippage and margin logic",
      "Multi-asset support across Forex, indices, commodities, and crypto pairs",
      "Responsive layout optimized for both desktop and tablet trading workflows",
    ],
    tags: ["React", "TypeScript", "WebSockets", "TradingView", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Second Brain",
    subtitle: "Knowledge management app for organizing ideas and resources in one place.",
    description:
      "A minimal, second-brain style app for organizing ideas, resources, and learning materials in one place.",
    features: [
      "Tag-based organization so users can quickly filter notes, resources, and tasks by topic or project",
      "Clean, distraction-free UI with full responsiveness for reading and editing on any device",
      "Support for sharing content and collaborating, making it easy to use as a personal wiki or learning hub",
      "Type-safe React + TypeScript codebase with a structured Node/Express backend for future feature growth",
    ],
    tags: [
      "Full-Stack",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Knowledge Management",
      "Responsive Design",
      "Tag-Based Organization",
    ],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="mt-14">
      <div className="mb-6">
        <h2
          className="text-[#f0f0f0] text-[25px] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Projects
        </h2>
        <p className="text-[#444] text-sm mt-1">
          Things I've built and shipped recently.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={project.title}
              className="bg-[#141414] border border-[#222] rounded-[10px] px-[18px] py-[14px] hover:bg-[#191919] hover:border-[#2a2a2a] transition-all"
            >
              {/* Header row */}
              <div
                className="flex items-start justify-between gap-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[#e8e8e8] text-[14px] font-semibold tracking-[-0.1px] mb-[3px]">
                    {project.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.55]">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-[1px]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#383838] hover:text-[#888] transition-colors p-[3px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={14} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#383838] hover:text-[#888] transition-colors p-[3px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiOutlineArrowUpRight size={15} />
                  </a>
                  <button
                    className="text-[#303030] hover:text-[#666] transition-colors p-[3px]"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, color 0.15s",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(index);
                    }}
                  >
                    <HiOutlineChevronDown size={13} />
                  </button>
                </div>
              </div>

              {/* ── Expanded body — unchanged from v1 ── */}
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: isOpen ? "600px" : "0px",
                  transition: "max-height 0.35s ease",
                }}
              >
                <div className="pt-[14px]">
                  {/* Divider */}
                  <div className="h-px bg-[#1a1a1a] mb-[14px]" />

                  {/* Monospace description */}
                  <p
                    className="text-[#888] text-[12.5px] leading-[1.9] mb-4 border-l border-[#222] pl-[14px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <p className="text-[11.5px] font-medium text-[#444] uppercase tracking-[0.08em] mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-[4px] mb-[14px]">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="text-[13px] text-[#777] leading-[1.7] pl-[14px] relative"
                      >
                        <span className="absolute left-0 text-[#333]">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-[6px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11.5px] text-[#555] border border-[#1f1f1f] rounded-[5px] px-[9px] py-[3px] bg-[#0d0d0d] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}