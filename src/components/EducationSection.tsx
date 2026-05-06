export default function EducationSection() {
  return (
    <section className="mt-10">
      <p className="text-[#555] text-xs uppercase tracking-widest mb-4 font-medium">Education</p>
      <div className="flex items-baseline justify-between py-2">
        <div>
          <a
            href="https://sgbau.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8e8e8] text-sm font-medium hover:text-white transition-colors"
          >
            B.E. — Electronics & Telecommunications
          </a>
          <p className="text-[#555] text-xs mt-1">
            Relevant: DSA, OS, Networks, DBMS, Software Engineering, Embedded Systems
          </p>
        </div>
        <span className="text-[#444] text-xs shrink-0 ml-4">2021 – 2025</span>
      </div>
    </section>
  );
}
