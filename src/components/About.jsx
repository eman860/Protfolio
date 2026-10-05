import React from 'react';
import profileImage from '../assets/photo2.jfif';
import { personalInfo, statistics } from '../data/portfolioData';
import { useScrollReveal, useStaggerReveal, useCountUp } from '../hooks/useScrollReveal';

const milestones = [
  {
    year: '2023 – 2027',
    title: 'B.E. Computer Science & Engineering',
    place: 'Annai Mira College of Engineering & Tech',
    detail: 'Focus on System Design, Data Structures & Algorithms, Java OOP, RDBMS. CGPA: 8.20.',
  },
  {
    year: '2025',
    title: 'ICCIS-3.0 International Conference Presentation',
    place: 'DDGDVC Conference',
    detail: 'Presented research on "Detection of Eye Diseases Using Deep Learning & Transfer Learning".',
  },
  {
    year: '2026',
    title: 'Dual Industry Internships',
    place: 'NEXTGEN & NEURA GLOBAL',
    detail: 'Shipped full-stack enterprise hospital booking in Java/MySQL and trained machine learning pipelines in Python.',
  },
];

/* Animated stat card with count-up & progress bar */
function StatCard({ stat }) {
  const { ref, count } = useCountUp(stat.value, { duration: 1400 });
  return (
    <div className="stat-card reveal-item" ref={ref}>
      <div className="stat-icon-row">
        <span className="stat-emoji">{stat.icon}</span>
        <span className="stat-number text-gradient">{count}</span>
      </div>
      <span className="stat-label">{stat.label}</span>
      <div className="stat-card-micro-bar" aria-hidden="true" />
    </div>
  );
}

const engineeringPillars = [
  { icon: '☕', label: 'Java Backend & OOP', desc: 'Enterprise Systems & RESTful APIs' },
  { icon: '⚛️', label: 'Modern Frontend', desc: 'React 18 & Fluid UI State' },
  { icon: '🧠', label: 'Applied AI & ML', desc: 'Deep Learning & Transfer Learning' },
  { icon: '🧩', label: 'Algorithmic Problem Solving', desc: 'Data Structures & Pattern Rigor' },
];

export default function About({ onOpenResume }) {
  const sectionRef = useScrollReveal({ threshold: 0.05 });
  const leftRef = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  const rightRef = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  const statsRef = useStaggerReveal({ childSelector: '.stat-card' });
  const timelineRef = useStaggerReveal({ childSelector: '.journey-item', threshold: 0.05 });

  // Mouse spotlight tracker on cards
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--card-mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--card-mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header reveal-section" ref={sectionRef}>
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>01 // WHO I AM</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Bridging foundational computer science rigor with modern full-stack development and applied AI.
          </p>
        </div>

        {/* Split Layout */}
        <div className="about-split-grid">
          {/* Left Column */}
          <div className="about-left-col reveal-slide-right" ref={leftRef}>
            <div
              className="statement-card glass-panel card-spotlight"
              onMouseMove={handleMouseMove}
            >
              <div className="card-spotlight-border" aria-hidden="true" />
              <span className="quote-mark">"</span>
              <h3 className="about-big-statement">
                {personalInfo.aboutStatement}
              </h3>
              <p className="about-statement-sub">
                Engineering software is not just about writing syntax—it is about crafting reliable systems, intuitive digital products, and high-impact solutions.
              </p>

              {/* Profile Avatar Card — 2026 Perfected Design */}
              <div className="about-avatar-card">
                {/* Top-Right Live Status Pill */}
                <div className="avatar-card-status" title="Status: Available for opportunities">
                  <span className="status-live-dot" />
                  <span className="avatar-status-text">Available for Hire</span>
                </div>

                <div className="avatar-card-main">
                  {/* Avatar Frame with Precision Glow Ring */}
                  <div className="avatar-frame about-avatar-float">
                    <img
                      src={profileImage}
                      alt="Imman (Eman A)"
                      className="avatar-photo"
                      loading="lazy"
                    />
                    <div className="avatar-ambient-glow" aria-hidden="true" />
                    <span className="avatar-live-indicator" title="Active Developer" />
                  </div>

                  {/* Profile Metadata */}
                  <div className="avatar-meta">
                    <div className="avatar-name-row">
                      <h4 className="avatar-name">Imman</h4>
                      <svg
                        className="avatar-verified-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        title="Verified Developer"
                        aria-label="Verified Developer"
                      >
                        <circle cx="12" cy="12" r="10" fill="#38bdf8" />
                        <path
                          d="M8 12.2l2.6 2.6 5.4-5.6"
                          stroke="#070709"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="avatar-role">Full-Stack &amp; Java Developer</p>
                    <span className="avatar-location-line">📍 Tamil Nadu, India</span>
                  </div>
                </div>

                {/* Balanced Credential Chips */}
                <div className="avatar-chips-grid">
                  <div className="tag-chip">
                    <span className="chip-icon">🎓</span>
                    <span>B.E. CSE (CGPA 8.20)</span>
                  </div>
                  <div className="tag-chip">
                    <span className="chip-icon">🔬</span>
                    <span>AI Research (ICCIS-3.0)</span>
                  </div>
                  <div className="tag-chip">
                    <span className="chip-icon">💼</span>
                    <span>Dual Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right-col reveal-slide-left" ref={rightRef}>
            <div
              className="narrative-card glass-panel card-spotlight"
              onMouseMove={handleMouseMove}
            >
              <div className="card-spotlight-border" aria-hidden="true" />
              <h4 className="narrative-heading">
                Engineering with Purpose, Precision &amp; Curiosity
              </h4>
              <p className="narrative-text">
                I am a Computer Science &amp; Engineering undergraduate at <strong>Annai Mira College of Engineering and Technology</strong> (CGPA 8.20). My engineering philosophy blends strong fundamental software engineering principles—Object-Oriented Programming, relational data modeling, and algorithmic problem-solving—with modern frontend and backend architectures.
              </p>
              <p className="narrative-text">
                Having completed internships as a <strong>Java Full Stack Developer</strong> (building enterprise hospital management platforms) and an <strong>AI Intern</strong> (fine-tuning machine learning models), I enjoy taking projects from abstract concepts to production-grade deployments.
              </p>

              {/* Core Engineering Pillars */}
              <div className="about-pillars-container">
                <span className="pillars-label">CORE ENGINEERING PILLARS</span>
                <div className="about-pillars-grid">
                  {engineeringPillars.map((pillar, idx) => (
                    <div className="pillar-chip" key={idx}>
                      <span className="pillar-icon">{pillar.icon}</span>
                      <div className="pillar-content">
                        <span className="pillar-title">{pillar.label}</span>
                        <span className="pillar-desc">{pillar.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Grid — animated counters */}
              <div className="about-stats-grid" ref={statsRef}>
                {statistics.map((stat, i) => (
                  <StatCard stat={stat} key={i} />
                ))}
              </div>

              {/* Learning Journey Milestones */}
              <div className="journey-block">
                <h5 className="journey-heading">Engineering Milestones</h5>
                <div className="journey-timeline" ref={timelineRef}>
                  <div className="timeline-connector-beam" aria-hidden="true" />
                  {milestones.map((item, idx) => (
                    <div className="journey-item reveal-item" key={idx}>
                      <div className="journey-node">
                        <span className={`node-ring ${idx === milestones.length - 1 ? 'node-active' : ''}`} />
                        {idx === milestones.length - 1 && <span className="node-pulse" />}
                      </div>
                      <div className="journey-body">
                        <div className="journey-meta">
                          <span className="journey-year">{item.year}</span>
                          <span className="journey-place">{item.place}</span>
                        </div>
                        <h6 className="journey-title">{item.title}</h6>
                        <p className="journey-detail">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="about-action-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenResume}
                  data-cursor="RESUME"
                >
                  <span>Interactive Resume Sheet</span>
                  <span className="btn-arrow">→</span>
                </button>
                <a
                  href="#contact"
                  className="btn btn-outline"
                  data-cursor="CONTACT"
                >
                  <span>Let's Talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
