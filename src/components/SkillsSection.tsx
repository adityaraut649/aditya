const stack = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++", "SQL", "HTML & CSS"] },
  { category: "Frameworks", items: ["React", "Node.js", "Express", "Spring Boot"] },
  { category: "Tools", items: ["Git & GitHub", "Docker", "Linux", "PostgreSQL", "MongoDB", "REST APIs", "Postman", "VS Code"] },
];

export default function SkillsSection() {
  return (
    <section className="mt-10">
      <p className="text-[#555] text-xs uppercase tracking-widest mb-5 font-medium">Stack</p>
      <div className="space-y-5">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="text-[#444] text-xs mb-2">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[#aaa] text-xs bg-[#1a1a1a] border border-[#252525] px-2.5 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
