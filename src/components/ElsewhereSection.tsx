import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

type LinkItem = {
  label: string;
  href: string;
  username: string;
  Icon: IconType;
};

const links: LinkItem[] = [
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/A9449Raut",
    username: "@A9449Raut",
    Icon: FaXTwitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/adityaraut649",
    username: "adityaraut649",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-raut-%E2%9A%A1-6b7988215/",
    username: "aditya-raut",
    Icon: FaLinkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/pandas03/",
    username: "pandas03",
    Icon: SiLeetcode,
  },
];

export default function ElsewhereSection() {
  return (
    <section className="mt-10">
      <p
        className="text-[#f1f1f1] text-[25px] leading-none tracking-wide mb-5"
        style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
      >
        Let's connect
      </p>
      <div className="grid grid-cols-2 border border-[#222] rounded-lg overflow-hidden ">
        {links.map(({ label, href, username, Icon }, idx) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-4 bg-[#0e0e0e] hover:bg-[#161616] transition-colors duration-200
              ${idx % 2 === 0 ? "border-r border-[#222]" : ""}
              ${idx < links.length - 2 ? "border-b border-[#222]" : ""}
            `}
          >
            <Icon size={18} className="text-[#888] flex-shrink-0" />

            <div className="flex-1 min-w-0 hover-underline">
              <p className="text-[#e8e8e8] text-sm font-medium leading-tight truncate">
                {label}
              </p>
              <p className="text-[#555] text-xs mt-0.5 truncate">{username}</p>
            </div>

            <svg
              className="w-3 h-3 text-[#444] group-hover:text-[#666] flex-shrink-0 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
