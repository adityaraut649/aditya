import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiOpenjdk,
  SiMysql,
} from "react-icons/si";
import { IconType } from "react-icons";

type Skill = { label: string; Icon?: IconType };
type Category = { category: string; items: Skill[] };

const stack: Category[] = [
  {
    category: "Languages",
    items: [
      { label: "JavaScript", Icon: SiJavascript },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Python", Icon: SiPython },
      { label: "Java", Icon: SiOpenjdk },
      { label: "C/C++", Icon: SiCplusplus },
      { label: "SQL", Icon: SiMysql },
      { label: "HTML & CSS", Icon: SiHtml5 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { label: "React", Icon: SiReact },
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Express", Icon: SiExpress },
      { label: "Spring Boot", Icon: SiSpring },
    ],
  },
  {
    category: "Tools",
    items: [
      { label: "Git", Icon: SiGit },
      { label: "GitHub", Icon: SiGithub },
      { label: "Docker", Icon: SiDocker },
      { label: "Linux", Icon: SiLinux },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Postman", Icon: SiPostman },
      { label: "REST APIs" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="mt-10">
      <p
        className="text-[#f1f1f1] text-[25px] leading-none tracking-wide mb-5"
        style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
      >
        Stack
      </p>
      <div className="space-y-5">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="text-[#444] text-xs mb-2.5 font-medium">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-[#aaa] text-xs bg-[#1a1a1a] border border-[#252525] px-3 py-1.5 rounded-full hover:border-[#333] hover:text-[#ccc] transition-colors duration-150"
                >
                  {Icon && <Icon size={12} className="flex-shrink-0" />}
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
