// src/Page/ExperiencePage.tsx
"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    company: "KodNest",
    role: "Full Stack Developer Intern",
    duration: "Jul, 2025 - May, 2026",
    location: "Bangalore, India - Remote",
    image: "./KodNest.jpg",
    badge: "Intern",

    bullets: [
      "Architected 'SalesSavvy,' a full-scale e-commerce platform, integrating a React frontend with a Spring Boot backend to handle seamless product management and user transactions.",
      "Engineered a Secure Authentication System using Spring Security and JWT, implementing robust authorization filters and JavaMailSender for secure email verification.",
      "Optimized Database Performance by designing efficient SQL schemas and implementing RESTful APIs that reduced data fetching latency for complex product catalogs.",
      "Integrated AI-driven insights into financial tracking modules, utilizing external APIs for sentiment analysis to provide users with smarter budgeting data",
    ],

    stack: [
      "React",
      "Tailwind",
      "TypeScript",
      "JavaScript",
      "Express",
      "Docker",
      "Java",
      "C/C++",
      "SQL",
      "HTML & CSS",
      "Spring",
      "Spring Boot",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-14 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Top Border */}
      <div className="w-full border-t border-dashed border-white/10" />

      {/* Header */}
      <div className="max-w-[690px] mx-auto border-x border-dashed border-white/10">
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="
                p-1
                rounded-md
                border
                border-transparent
                hover:border-white/10
                hover:bg-white/[0.03]
                transition
              "
            >
              <ArrowLeft size={18} />
            </Link>

            <h1 className="text-[1.15rem] font-bold text-white">Experiences</h1>
          </div>
        </div>

        <div className="border-t border-dashed border-white/10" />
      </div>

      {/* Content */}
      <div className="max-w-[690px] mx-auto border-x border-dashed border-white/10">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="m-1">
              <div className="flex flex-col">
                {/* Top Row */}
                <div className="p-3 flex justify-between gap-4">
                  {/* Left */}
                  <div className="flex gap-3 flex-1">
                    <div
                      className="
                        shrink-0
                        w-12
                        h-12
                        rounded-[10px]
                        border
                        border-white/10
                        p-[2px]
                        bg-[#0b0b0b]
                        overflow-hidden
                      "
                    >
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="
                          w-full
                          h-full
                          object-cover
                          rounded-[8px]
                          border
                          border-white/10
                        "
                      />
                    </div>

                    <div className="flex flex-col items-start gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="sm:text-[1.20rem] text-[1.05rem] font-semibold text-white leading-[0.9]">
                          {exp.company}
                        </h3>

                        {exp.badge && (
                          <span
                            className="
                              px-[4px]
                              py-0
                              text-xs
                              border
                              border-white/10
                              text-zinc-500
                              rounded-[4px]
                            "
                          >
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <p className="sm:text-sm text-xs text-zinc-500">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <p className="text-white font-medium sm:text-sm text-xs">
                      {exp.duration}
                    </p>

                    <p className="text-zinc-500 sm:text-sm text-xs">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="ml-4 mt-1 px-3 pb-3">
                  {/* Bullets */}
                  <div className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-zinc-600 shrink-0">•</span>

                        <p className="text-sm text-zinc-300 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex items-center gap-1.5 my-3 flex-wrap">
                    {exp.stack.map((item, i) => (
                      <span
                        key={i}
                        className="
                          text-xs
                          text-zinc-300
                          bg-zinc-900
                          px-1.5
                          py-0.5
                          rounded-[4px]
                          border
                          border-white/10
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {index !== experiences.length - 1 && (
              <div className="border-t border-dashed border-white/10" />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-[690px] mx-auto border-x border-dashed border-white/10">
        <div className="border-t border-dashed border-white/10" />

        <div className="p-4 flex justify-center">
          <p className="text-zinc-400 flex items-center gap-1">
            <span>Love what I do?</span>

            <a
              href="mailto:vraut3468@gmail.com"
              className="
                group
                inline-flex
                items-center
                font-medium
                text-white
              "
            >
              <span className="relative">
                Hire me!
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-full
                    h-px
                    bg-white
                    scale-x-0
                    group-hover:scale-x-100
                    origin-left
                    transition-transform
                  "
                />
              </span>
              <ArrowUpRight
                size={16}
                className="ml-1 group-hover:scale-125 transition"
              />
            </a>
          </p>
        </div>
        <div className="border-t border-dashed border-white/10" />
      </div>
    </div>
  );
}
