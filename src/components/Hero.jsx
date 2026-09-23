import React, { useEffect, useState } from 'react';
import HeroOrbCanvas from './HeroOrbCanvas';
import { personalInfo, kineticRoles, marqueeSkills } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = kineticRoles[roleIndex];
    let timer;

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % kineticRoles.length);
    } else {
      const speed = isDeleting ? 45 : 85;
      timer = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* 3D Wireframe Canvas Background */}
      <HeroOrbCanvas />

      {/* Grid Pattern and Ambient Glow */}
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-glow-orb orb-cyan" aria-hidden="true" />
      <div className="hero-glow-orb orb-indigo" aria-hidden="true" />

      {/* Subtle Floating Code Symbols */}
      <div className="floating-symbols" aria-hidden="true">
        <span className="symbol-item sym-1">&lt;div&gt;</span>
        <span className="symbol-item sym-2">&#123; ...code &#125;</span>
        <span className="symbol-item sym-3">λ =&gt; async</span>
        <span className="symbol-item sym-4">class System</span>
      </div>

      <div className="hero-container">
        {/* Availability Badge */}
        <div className="hero-status-pill">
          <span className="status-live-dot" />
          <span className="status-text">{personalInfo.status}</span>
        </div>

        {/* Primary Editorial Headline */}
        <h1 className="hero-headline">
          Hi, I'm <span className="hero-name-gradient">{personalInfo.name}</span>.
        </h1>

        {/* Kinetic Dynamic Role Typography */}
        <div className="hero-role-wrapper">
          <span className="hero-role-static">Specialized in </span>
          <span className="hero-role-dynamic">
            {text}
            <span className="role-blinking-cursor">|</span>
          </span>
        </div>

        {/* Secondary Subtitle */}
        <p className="hero-subheadline">
          {personalInfo.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="btn btn-primary hero-btn"
            data-cursor="EXPLORE"
          >
            <span>View My Work</span>
            <span className="btn-arrow">↓</span>
          </a>

          <a
            href="/resume.pdf"
            download="Imman_Resume.pdf"
            className="btn btn-outline hero-btn"
            data-cursor="RESUME"
          >
            <span>Download Resume</span>
            <span className="btn-icon">📄</span>
          </a>
        </div>

        {/* Quick Tech Preview Ticker */}
        <div className="hero-ticker-wrap">
          <div className="hero-ticker-track">
            {marqueeSkills.concat(marqueeSkills).map((item, idx) => (
              <span className="hero-ticker-chip" key={idx}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="hero-scroll-prompt"
          aria-label="Scroll to about section"
        >
          <span className="mouse-wheel-icon">
            <span className="wheel-dot" />
          </span>
          <span className="scroll-prompt-text">SCROLL TO EXPLORE</span>
        </a>
      </div>
    </section>
  );
}
