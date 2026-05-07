
import ContributionGraph from "./components/ContributionGraph";
import ProfileHeader from "./components/ProfileHeader";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ElsewhereSection from "./components/ElsewhereSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#e8e8e8] font-sans">
      {/* Mountain Hero Banner */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <img
          src="/mountain-bg.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/30 to-[#111111]" />
        
      </div>
      
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-5 pb-16 -mt-6 relative z-10">
        <ProfileHeader />
        <div className="mt-10">
          <InfoCard />
        </div>
        <div className="border-t border-[#2a2a2a] my-8"></div>

        {/* About */}
        <section className="mt-10">
            <p className="text-[#e8e8e8] text-lg font-semibold mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
              About
            </p>

            <p className="text-[#999] text-sm leading-relaxed mb-3">
              I Write Code, Break Things, Fix Them & Repeat —{" "}
              <span className="text-[#f1f1f1] text-[15px] italic">Usually In That Order.</span>
            </p>

            <p className="text-[#999] text-sm leading-relaxed mb-3">
              My background is in{" "}
              <span className="text-[#f1f1f1] text-[15px] italic">Electronic & Telecommunications Engineering</span>
              , but I've spent most of my time deep in software — writing backends, building interfaces,
              automating things, and occasionally reading source code at midnight just to understand how
              something works.
            </p>

            <ul className="space-y-2 mt-3">
              {[
                <>
                  Passionate about{" "}
                  <span className="text-[#f1f1f1] text-[15px] italic" >Open-Source</span> — It's been my playground
                  and classroom for how real software is built collaboratively.
                </>,
                <>
                  Focused on building{" "}
                  <span className="text-[#f1f1f1] text-[15px] italic">Tools, Systems, and Products</span> that are
                  actually useful — not just impressive on paper.
                </>,
                <>
                  Experienced with{" "}
                  <span className="text-[#f1f1f1] text-[15px] italic">Full-Stack Web Development</span> using
                  React, Node.js, and Express, bridging heavy backend logic with fluid UI.
                </>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#999]">
                  <span className="text-[#444] mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="border-t border-[#2a2a2a] my-8"></div>
            <ElsewhereSection />

        {/* Interests */}
        <section className="mt-8">
          <div className="border-t border-[#2a2a2a] my-8"></div>
          <p className="text-[#555] text-xl uppercase tracking-widest mb-4 font-medium">
            Interests
          </p>
          <ul className="space-y-2">
            {[
              "Developer tools & automation",
              "Backend systems & APIs",
              "Full-stack web development",
              "Open source collaboration",
              "Anything with an interesting problem worth solving",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#bbb]">
                <span className="text-[#444] mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />

        {/* GitHub Contribution Graph */}
        <section className="mt-10">
          <p className="text-[#555] text-xs uppercase tracking-widest mb-5 font-medium">Contributions</p>
          <ContributionGraph />
        </section>

        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
