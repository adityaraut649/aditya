import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

type LinkItem = {
  label: string;
  href: string;
  username: string;
  Icon: IconType;
  card?: {
    name: string;
    handle: string;
    bio: string;
    location: string;
    stats: { label: string; value: string }[];
    avatar?: string;
  };
};

const links: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/adityaraut649",
    username: "adityaraut649",
    Icon: FaGithub,
    card: {
      name: "Aditya Raut",
      handle: "adityaraut649",
      bio: "22 · Engineer / Developer",
      location: "Nagpur, India (UTC +5:30)",
      stats: [
        { label: "Repositories", value: "27" },
        { label: "Followers", value: "2" },
      ],
    },
  },
  {
    label: "Twitter",
    href: "https://x.com/A9449Raut",
    username: "@A9449Raut",
    Icon: FaXTwitter,
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

      <div className="flex flex-wrap gap-1.5">
        {links.map(({ label, href, username, Icon, card }) => (
          <div key={label} className="relative group">
            {/* Hover Card — appears above */}
            {card && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
                opacity-0 group-hover:opacity-100
                scale-95 group-hover:scale-100
                pointer-events-none group-hover:pointer-events-auto
                transition-all duration-200 ease-out
                w-[220px]"
              >
                <div className="rounded-xl border border-white/10 bg-[#0e0e0e] shadow-xl p-3 text-left">
                  {/* Avatar + name */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#222] overflow-hidden flex-shrink-0">
                      <img
                        src={`https://github.com/${card.handle}.png`}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#e8e8e8] text-sm font-semibold leading-tight">{card.name}</p>
                      <p className="text-[#555] text-xs">{card.handle}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[#aaa] text-xs mb-2">{card.bio}</p>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-[#666] text-xs mb-3">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    {card.location}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 pt-2 border-t border-white/5">
                    {card.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-[#e8e8e8] text-sm font-bold">{s.value}</p>
                        <p className="text-[#555] text-[10px]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0
                  border-l-4 border-r-4 border-t-4
                  border-l-transparent border-r-transparent border-t-white/10" />
              </div>
            )}

            {/* The Button */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-[4px] text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] [backdrop-filter:blur(6px)] text-neutral-300 px-3 py-1.5 !text-[12px]"
            >
              <span aria-hidden="true" className="absolute inset-0 rounded-[4px] overflow-hidden bg-[#0c0c0e] group-hover:bg-[#121214] border border-white/5 group-hover:border-white/10 transition-colors duration-200" />
              <span className="relative flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Icon size={14} />
                <span>{label}</span>
                <span className="overflow-hidden max-w-0 group-hover:max-w-[120px] transition-all duration-300 ease-in-out whitespace-nowrap text-[#888]">
                  · {username}
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}