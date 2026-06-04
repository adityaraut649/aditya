"use client";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    company: "KodNest",
    role: "Full Stack Developer Intern",
    duration: "Aug, 2025 - May, 2026",
    location: "Bangalore, India - Remote",
    image: "./KodNest.jpg",
    badge: "Intern",
  },
  {
    company: "Personal Work",
    role: "Freelance",
    duration: "Nov, 2025 - Nov, 2025",
    location: "Bangalore, India - Remote",
    image: "./Freelance.jpg",
    badge: "Freelance",
  },
];

export default function Experience() {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-2 mb-2">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="
                flex items-center justify-between gap-3
                px-3.5 py-2.5
                rounded-[10px]
                border border-white/[0.08]
                bg-[#111]
                hover:bg-[#161616]
                hover:border-white/[0.13]
                transition-all
                "
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-[8px] border border-white/[0.08] bg-[#1a1a1a] overflow-hidden shrink-0">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[13px] font-medium text-white/80 tracking-[-0.01em]">
                  {exp.company}
                </p>
                <p className="text-[11px] text-white/30 mt-px">{exp.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {exp.badge && (
                <span className="text-[10px] px-2 py-px rounded-sm border border-white/[0.08] text-zinc-300 bg-white/[0.02]">
                  {exp.badge}
                </span>
              )}
              <p className="text-[12px] text-white/35">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium px-5 py-2 hover:bg-zinc-800 transition-all duration-200"
        >
          View all experience
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
