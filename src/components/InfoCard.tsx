"use client";

import { useEffect, useState } from "react";
import {
  LuBriefcase,
  LuCode,
  LuMapPin,
  LuClock,
  LuMail,
  LuGlobe,
} from "react-icons/lu";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ist = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(now);
      setTime(ist);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      <span className="font-semibold text-[#e8e8e8]">{time}</span> IST
      (UTC+5:30)
    </span>
  );
}

export default function InfoCard() {
  return (
    <div className="border border-[#222] rounded-xl p-4 space-y-2.5 font-mono text-sm text-[#888]">
      {/* Roles */}
      <div className="flex items-center gap-3">
        <LuBriefcase size={15} className="flex-shrink-0 text-[#555]" />
        <span>Software Developer</span>
      </div>
      <div className="flex items-center gap-3">
        <LuCode size={15} className="flex-shrink-0 text-[#555]" />
        <span>Full Stack · Builder</span>
      </div>

      <div className="border-t border-[#1e1e1e] my-1" />

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex items-center gap-3">
          <LuMapPin size={15} className="flex-shrink-0 text-[#555]" />
          <span>Nagpur, India</span>
        </div>
        <div className="flex items-center gap-3">
          <LuClock size={15} className="flex-shrink-0 text-[#555]" />
          <LiveClock />
        </div>
        <div className="flex items-center gap-3">
          <LuMail size={15} className="flex-shrink-0 text-[#555]" />
          <a
            href="mailto:your@email.com"
            className="hover:text-[#ccc] transition-colors truncate"
          >
            vraut3468@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <LuGlobe size={15} className="flex-shrink-0 text-[#555]" />
          <a
            href="https://aditya-delta-mauve.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccc] transition-colors truncate"
          >
            adityaraut069.com
          </a>
        </div>
      </div>
    </div>
  );
}
