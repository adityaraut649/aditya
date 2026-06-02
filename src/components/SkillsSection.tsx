// components/SkillsSection.tsx
"use client";

const items = [
  { label: "Java", src: "/tech-icons/java.svg" },
  { label: "JavaScript", src: "/tech-icons/javascript.svg" },
  { label: "TypeScript", src: "/tech-icons/typescript.svg" },
  { label: "React", src: "/tech-icons/react.svg" },
  { label: "Next.js", src: "/tech-icons/nextjs.svg" },
  { label: "Node.js", src: "/tech-icons/nodejs.svg" },
  { label: "Express", src: "/tech-icons/express.svg" },
  { label: "Python", src: "/tech-icons/python.svg" },
  { label: "FastAPI", src: "/tech-icons/fastapi.svg" },
  { label: "MongoDB", src: "/tech-icons/mongodb.svg" },
  { label: "PostgreSQL", src: "/tech-icons/postgresql.svg" },
  { label: "Redis", src: "/tech-icons/redis.svg" },
  { label: "SQL", src: "/tech-icons/sql.svg" },
  { label: "Docker", src: "/tech-icons/docker.svg" },
  { label: "AWS", src: "/tech-icons/AWS.svg" },
  { label: "Azure", src: "/tech-icons/Azure.svg" },
  { label: "Git", src: "/tech-icons/Git.svg" },
  { label: "Jira", src: "/tech-icons/Jira.svg" },
  { label: "Tailwind CSS", src: "/tech-icons/tailwind.svg" },
];

export default function SkillsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-[28px] font-semibold text-zinc-200">
        Stack I use
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        Technologies I work with to build products that solve real problems
      </p>

      <div className="relative mt-8 overflow-x-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...items, ...items].map(({ label, src }, index) => (
            <div
              key={`${label}-${index}`}
              className="mx-4 flex min-w-[100px] flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={src}
                alt={label}
                className="h-12 w-12 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
              />

              <span className="mt-3 text-xs font-medium text-zinc-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}