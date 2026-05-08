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
        tags: ["DSA", "OS", "Networks", "DBMS", "Software Engineering", "Embedded Systems", "C++", "Python" , "Java", "Matlab" , "Machine Learning" , "Object-Oriented Programming", "Distributed Systems"],
      },
    ],
  },
];

function DegreeCard({ degree, period, bullets, tags }: Degree) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#1e1e1e] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#161616] transition-colors text-left"
      >
        <LuGraduationCap size={15} className="text-[#555] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[#e8e8e8] text-sm font-medium text-[15px] italic">{degree}</p>
          <p className="text-[#555] text-xs mt-0.5">{period}</p>
        </div>
        {open ? (
          <LuChevronUp size={14} className="text-[#444] flex-shrink-0" />
        ) : (
          <LuChevronDown size={14} className="text-[#444] flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-[#1e1e1e]">
          <ul className="mt-3 space-y-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#888]">
                <span className="text-[#444] mt-0.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[#666] text-xs bg-[#1a1a1a] border border-[#252525] px-2 py-0.5 rounded-md"
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
  className="text-[#f1f1f1] text-[22px] leading-none tracking-wide mb-5"
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
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <p className="text-[#ccc] text-sm font-medium">{inst.name}</p>
            </div>
            <div className="space-y-2 ml-1">
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