const links = [
  { label: "GitHub", href: "https://github.com/adityaraut649", desc: "where the code lives" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-raut-%E2%9A%A1-6b7988215/", desc: "the professional one" },
  { label: "Twitter / X", href: "https://x.com/A9449Raut", desc: "mostly dev stuff" },
  { label: "Discord", href: "https://discord.com/channels/@me", desc: "catch me in OSS servers" },
  { label: "Dev.to", href: "https://dev.to/adityaraut649", desc: "occasional writing" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/10957452/aditya-raut", desc: "asking & answering" },
  { label: "LeetCode", href: "https://leetcode.com/u/pandas03/", desc: "solving problems" },
];

export default function ElsewhereSection() {
  return (
    <section className="mt-10">
      <p className="text-[#555] text-xs uppercase tracking-widest mb-4 font-medium">Elsewhere</p>
      <div className="space-y-0">
        {links.map((link, idx) => (
          <div
            key={link.label}
            className={`flex items-baseline gap-2 py-2.5 ${
              idx !== links.length - 1 ? "border-b border-[#1a1a1a]" : ""
            }`}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8e8e8] text-sm hover:text-white transition-colors font-medium min-w-[120px]"
            >
              {link.label}
            </a>
            <span className="text-[#444] text-sm">·</span>
            <span className="text-[#666] text-sm">{link.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
