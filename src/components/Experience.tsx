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
    <>
      {/* Top Border */}
      <div className="w-full h-px border-t  rounded-sm border-solid border-white/10 mt-10" />

      <div
        className="
          relative
          max-w-[690px]
          mx-auto
          border-l
          border-r
          border-solid
          border-white/10
        "
      >
        <div className="border-t border-solid border-white/10" />

        {/* Items */}
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="p-3 hover:bg-white/[0.02] transition">
              <div className="flex justify-between gap-4">
                {/* Left */}
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-[10px] border border-white/10 p-[2px] bg-[#0b0b0b]">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full rounded-[8px] object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold text-[1.15rem]">
                        {exp.company}
                      </h3>

                      {exp.badge && (
                        <span className="text-xs border border-white/10 rounded px-1 text-zinc-400">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-zinc-500">{exp.role}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p className="text-white text-sm font-medium">
                    {exp.duration}
                  </p>

                  <p className="text-zinc-500 text-sm">{exp.location}</p>
                </div>
              </div>
            </div>

            {index !== experiences.length - 1 && (
              <div className="border-t border-solid border-white/10" />
            )}
          </div>
        ))}

        {/* Bottom Border */}
        <div className="border-t border-solid border-white/10" />

        {/* Button */}
        <div className="p-3 flex justify-center">
          <Link
            to="/experience"
            className="
              group
              border
              border-white/15
              rounded-[10px]
              p-[2px]
            "
          >
            <div
              className="
                px-3
                py-1
                rounded-[8px]
                border
                border-white/10
                bg-white
                text-black
                flex
                items-center
                gap-1
                text-[0.95rem]
                font-medium
              "
            >
              View All
              <ArrowUpRight
                size={16}
                className="group-hover:scale-125 transition"
              />
            </div>
          </Link>
        </div>

        <div className="border-t border-solid border-white/10" />
      </div>
    </>
  );
}
