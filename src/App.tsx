import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContributionGraph from "./components/ContributionGraph";
import ProfileHeader from "./components/ProfileHeader";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ElsewhereSection from "./components/ElsewhereSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// import InfoCard from "./components/InfoCard";
// import SpotifyCard from "./components/SpotifyCard";
import Oneko from "./components/Oneko";
import ExperienceSection from "./components/Experience";
import ResumePage from "./Page/ResumePage";
import ExperiencePage from "./Page/ExperiencePage";
import LastPlayed from "./components/LastPlayed";
import GamingCard from "./components/GamingCardProps";
import AboutSection from "./components/About";

function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Oneko />
      <div className="relative min-h-screen bg-[#111111] text-[#e8e8e8] font-sans">
        {/* Left dotted line */}
        <div
          className="fixed top-0 bottom-0 left-1/2 -translate-x-[336px] w-0 pointer-events-none hidden md:block"
          style={{ borderRight: "1px dashed #737373", opacity: 0.4 }}
        />

        {/* Right vertical dashed line */}
        <div
          className="fixed top-0 bottom-0 left-1/2 translate-x-[336px] w-0 pointer-events-none hidden md:block"
          style={{ borderRight: "1px dashed #737373", opacity: 0.4 }}
        />

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-3 sm:px-5 md:px-6 pb-16 relative z-10">
          {/* Mountain Hero Banner */}
          <div className="relative w-full h-28 xs:h-32 sm:h-48 md:h-64 overflow-hidden rounded-b-xl">
            <img
              src="/mountain-bg.jpg"
              alt="Mountain landscape"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/30 to-[#111111]" />
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#111111] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#111111] to-transparent" />
          </div>

          <ProfileHeader />
          <div className="mt-4 sm:mt-6">
            <AboutSection />
          </div>

          <div className="mt-6 sm:mt-10">
            <div className="mb-5">
              <p className="text-md text-zinc-500">
                Here are my{" "}
                <span className="font-medium text-zinc-100">socials</span>
              </p>
              <div className="sm:mt-2">
                <ElsewhereSection />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-10">
            <LastPlayed />
          </div>
          <div className="mt-4 sm:mt-6">
            <GamingCard
              artUrl="https://cdn2.unrealengine.com/twd-header-1920x1080-5c1249d4b639.jpg"
              logoUrl="https://www.shutterstock.com/image-vector/silhouette-walking-dead-logo-featuring-600w-2685969589.jpg"
              logoAlt="The Walking Dead"
              title="The Walking Dead"
              href="https://store.epicgames.com/en-US/collection/the-walking-dead"
              isActive={false}
            />
          </div>

          {/* <div className="mt-6 sm:mt-10">
            <SpotifyCard
              title="One Day"
              artist="Kodaline"
              albumImage="https://i.scdn.co/image/ab67616d0000485174b1285d420d4d8494c72df5"
              songUrl="https://open.spotify.com/track/1nqJvzF8URpip2qbg8izYb"
            />
          </div> */}

          {/* <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>
          <div className="mt-6 sm:mt-10">
            <InfoCard />
          </div>
          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div> */}

          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>

          <section className="mt-6 sm:mt-10">
            <p
              className="text-[#f1f1f1] text-[22px] sm:text-[25px] leading-none tracking-wide mb-5"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
              }}
            >
              Experience
            </p>
            <ExperienceSection />
          </section>

          
          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>
          <ProjectsSection />
          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>
          <SkillsSection />
          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>
          <EducationSection />
          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>

          <section className="mt-6 sm:mt-10">
            <p
              className="text-[#f1f1f1] text-[22px] sm:text-[25px] leading-none tracking-wide mb-5"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
              }}
            >
              Contributions
            </p>
            <ContributionGraph />
          </section>

          <div className="border-t border-[#2a2a2a] my-6 sm:my-8"></div>
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </BrowserRouter>
  );
}
