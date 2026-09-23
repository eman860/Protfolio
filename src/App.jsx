import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechConstellation from './components/TechConstellation';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import GitHubActivity from './components/GitHubActivity';
import ProblemSolving from './components/ProblemSolving';
import EducationAndAchievements from './components/EducationAndAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './ResumeModal';
import CommandPalette from './components/CommandPalette';
import AiAssistant from './components/AiAssistant';
import EasterEggs from './components/EasterEggs';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Desktop Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Global Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCmdOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About onOpenResume={() => setResumeOpen(true)} />
        <TechConstellation />
        <ProjectsSection />
        <ExperienceTimeline onOpenResume={() => setResumeOpen(true)} />
        <GitHubActivity />
        <ProblemSolving />
        <EducationAndAchievements />
        <Contact />
      </main>

      {/* Futuristic Footer */}
      <Footer onTriggerEasterEgg={() => setEasterEggOpen(true)} />

      {/* Floating Ask Imman AI Button */}
      <button
        type="button"
        className="floating-ai-trigger"
        onClick={() => setAiOpen(true)}
        title="Ask Imman's AI Portfolio Assistant"
        aria-label="Open AI Assistant"
        data-cursor="AI ✦"
      >
        <span className="ai-btn-sparkle">✦</span>
        <span className="ai-btn-text">Ask Imman AI</span>
      </button>

      {/* Modals & Dialogs */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenAi={() => setAiOpen(true)}
        onTriggerEasterEgg={() => setEasterEggOpen(true)}
      />
      <AiAssistant isOpen={aiOpen} onClose={() => setAiOpen(false)} />
      <EasterEggs isOpen={easterEggOpen} onClose={() => setEasterEggOpen(false)} />
    </div>
  );
}
