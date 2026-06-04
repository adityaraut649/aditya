"use client";

import { useState } from "react";
import { LuGraduationCap, LuChevronUp, LuChevronDown } from "react-icons/lu";

type Degree = {
  degree: string;
  period: string;
  bullets: string[];
  tags: string[];
};

type Institution = {
  name: string;
  logo: string;
  degrees: Degree[];
};

const education: Institution[] = [
  {
    name: "SANTA GADGE BABA AMRAVATI UNIVERSITY",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/42/Sant_Gadge_Baba_Amravati_University_logo.png",
    degrees: [
      {
        degree: "BE in Electronic & Telecommunication Engineering",
        period: "03.2021 — 05.2025",
        bullets: [
          "Focused on embedded systems, signal processing, and software development.",
          "Completed coursework in core ECE subjects and engineering fundamentals.",
        ],
        tags: [
          "DSA",
          "OS",
          "Networks",
          "DBMS",
          "Software Engineering",
          "Embedded Systems",
          "C++",
          "Python",
          "Java",
          "Matlab",
          "Machine Learning",
          "Object-Oriented Programming",
          "Distributed Systems",
        ],
      },
    ],
  },
];

function DegreeCard({ degree, period, bullets, tags }: Degree) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[10px] border border-white/[0.08] bg-[#111] overflow-hidden hover:border-white/[0.13] transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 hover:bg-[#161616] transition-colors text-left"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <LuGraduationCap size={15} className="text-white/25 shrink-0" />
          <div>
            <p className="text-[13px] font-medium text-white/80 tracking-[-0.01em]">
              {degree}
            </p>
            <p className="text-[11px] text-white/30 mt-px">{period}</p>
          </div>
        </div>
        <LuChevronDown
          size={13}
          className={`text-white/20 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-3.5 pb-3.5 border-t border-white/[0.06]">
          <ul className="mt-3 space-y-1.5">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[12px] text-[#777]"
              >
                <span className="text-[#444] mt-0.5 shrink-0">•</span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-[#555] bg-[#1a1a1a] border border-white/[0.07] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function EducationSection() {
  return (
    <section className="mt-10">
      <p
        className="text-[#f1f1f1] text-[25px] leading-none tracking-wide mb-5"
        style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
      >
        Education
      </p>
      <div className="space-y-5">
        {education.map((inst) => (
          <div key={inst.name}>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={inst.logo}
                alt={inst.name}
                className="w-7 h-7 rounded-full object-cover bg-[#1a1a1a]"
              />
              <p className="text-[12px] font-medium text-[#888] uppercase tracking-wider">
                {inst.name}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {inst.degrees.map((d) => (
                <DegreeCard key={d.degree} {...d} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
