import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/adityaraut649",
    favicon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/pandas03/",
    favicon: "https://leetcode.com/favicon.ico",
  },
  {
    label: "X",
    href: "https://x.com/A9449Raut",
    favicon: "https://abs.twimg.com/favicons/twitter.3.ico",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aditya-raut-6b7988215/",
    favicon: "https://linkedin.com/favicon.ico",
  },
];

export default function Links() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"
        >
          {link.label === "GitHub" ? (
            <FaGithub className="h-4 w-4 text-zinc-300" />
          ) : (
            <img
              src={link.favicon}
              alt=""
              width={16}
              height={16}
              className="rounded-sm"
            />
          )}

          <span className="underline decoration-zinc-800 underline-offset-4 transition-colors group-hover:decoration-zinc-300">
            {link.label}
          </span>

          <ExternalLink
            size={12}
            className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}
