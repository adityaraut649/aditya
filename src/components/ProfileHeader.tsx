import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export default function ProfileHeader() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vraut3468@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start justify-between pt-2">
      <div className="flex items-center gap-4">
        {/* Avatar placeholder — initials */}
        <Avatar />
        <div>
          <div className="flex items-center gap-2.5">
            <h1
              className="text-[#e8e8e8] text-4xl tracking-[0.01em] leading-tight"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Aditya Rajendera Raut
            </h1>

            <BadgeCheck
              size={28}
              strokeWidth={2.5}
              className="fill-[#1d9bf0] text-black mt-1"
            />
          </div>

          <p className="text-[#666] text-base mt-0.5">
            I build things ·{" "}
            <button
              onClick={copyEmail}
              className="text-[#666] hover:text-[#999] transition-colors cursor-pointer"
              title="Copy email"
            >
              vraut3468@gmail.com
            </button>{" "}
            <span
              onClick={copyEmail}
              className="inline-block cursor-pointer hover:text-[#999] transition-colors text-[#444]"
              title={copied ? "Copied!" : "Copy email"}
            >
              {copied ? "✓" : "⎘"}
            </span>
          </p>

          <p className="text-[#555] text-base mt-1">
            22 · engineer · developer · builder
          </p>
        </div>
      </div>

      {/* Links icon row */}
      <div className="flex items-center gap-3 mt-1">
        <a
          href="https://github.com/adityaraut649"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#444] hover:text-[#888] transition-colors text-lg"
          title="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://x.com/A9449Raut"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#444] hover:text-[#888] transition-colors"
          title="Twitter / X"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 5.857zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-raut-%E2%9A%A1-6b7988215/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#444] hover:text-[#888] transition-colors"
          title="LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <Link
          to="/resume"
          className="text-[#444] hover:text-[#888] transition-colors text-xs border border-[#2a2a2a] px-2 py-1 rounded hover:border-[#3a3a3a]"
          title="Resume"
        >
          CV
        </Link>
      </div>
    </div>
  );
}
