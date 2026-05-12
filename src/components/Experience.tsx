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
];

export default function Experience() {
  return (
    <div className="max-w-[690px] mx-auto mt-10">
      {/* Main Container */}
      <div
  className="
    overflow-hidden
    rounded-[12px]
    border
    border-white/10
    bg-[#111111]
  "
>
  {experiences.map((exp, index) => (
    <div key={index}>
      <div
        className="
          group
          px-4
          py-3
          transition-all
          duration-300
          hover:bg-white/[0.02]
        "
      >
        <div className="flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Logo */}
            <div
              className="
                w-11
                h-11
                rounded-[12px]
                overflow-hidden
                border
                border-white/10
                bg-[#111111]
                shrink-0
              "
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className="
                    text-white
                    text-[15px]
                    font-medium
                    tracking-[-0.02em]
                  "
                >
                  {exp.company}
                </h3>

                {exp.badge && (
                  <span
                    className="
                      text-[10px]
                      px-1.5
                      py-[2px]
                      rounded-[12px]
                      border
                      border-white/10
                      text-zinc-500
                      bg-white/[0.02]
                    "
                  >
                    {exp.badge}
                  </span>
                )}
              </div>

              <p className="text-[13px] text-zinc-500 mt-[1px]">
                {exp.role}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="text-right shrink-0">
            <p className="text-[13px] text-zinc-300">
              {exp.duration}
            </p>

            <p className="text-[12px] text-zinc-600 mt-[1px]">
              {exp.location}
            </p>
          </div>
        </div>
      </div>

      {index !== experiences.length - 1 && (
        <div className="border-t border-white/10" />
      )}
    </div>
  ))}

  {/* Footer */}
  <div className="border-t border-white/10 p-3 flex justify-center">
    <Link
      to="/experience"
      className="
        group
        flex
        items-center
        gap-1
        rounded-[12px]
        border
        border-white/10
        px-3
        py-1.5
        text-sm
        text-white
        hover:bg-white/[0.03]
        transition-all
      "
    >
      View All

      <ArrowUpRight
        size={14}
        className="
          transition-transform
          duration-300
          group-hover:-translate-y-[1px]
          group-hover:translate-x-[1px]
        "
      />
    </Link>
  </div>
  </div>
    </div>
  )
}
