import React from 'react';
import profileImage from '../assets/photo2.jfif';
import { personalInfo, statistics } from '../data/portfolioData';

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

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
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
          {/* Left Column: Big Editorial Statement & Profile Media */}
          <div className="about-left-col">
            <div className="statement-card glass-panel">
              <span className="quote-mark">“</span>
              <h3 className="about-big-statement">
                {personalInfo.aboutStatement}
              </h3>
              <p className="about-statement-sub">
                Engineering software is not just about writing syntax—it is about crafting reliable systems, intuitive digital products, and high-impact solutions.
              </p>

              {/* Profile Avatar Frame */}
              <div className="about-avatar-card">
                <div className="avatar-frame">
                  <img
                    src={profileImage}
                    alt="Imman (Eman A)"
                    className="avatar-photo"
                    loading="lazy"
                  />
                  <div className="avatar-ambient-glow" />
                </div>
                <div className="avatar-meta">
                  <span className="avatar-name">Eman A (Imman)</span>
                  <span className="avatar-role">Full-Stack & Java Developer</span>
                  <div className="avatar-chips">
                    <span className="tag-chip">B.E. CSE</span>
                    <span className="tag-chip">AI Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Interactive Metrics & Timeline */}
          <div className="about-right-col">
            <div className="narrative-card glass-panel">
              <h4 className="narrative-heading">
                Engineering with Purpose, Precision & Curiosity
              </h4>
              <p className="narrative-text">
                I am a Computer Science & Engineering undergraduate at <strong>Annai Mira College of Engineering and Technology</strong> (CGPA 8.20). My engineering philosophy blends strong fundamental software engineering principles—Object-Oriented Programming, relational data modeling, and algorithmic problem-solving—with modern frontend and backend architectures.
              </p>
              <p className="narrative-text">
                Having completed internships as a <strong>Java Full Stack Developer</strong> (building enterprise hospital management platforms) and an <strong>AI Intern</strong> (fine-tuning machine learning models), I enjoy taking projects from abstract concepts to production-grade deployments.
              </p>

              {/* Statistics Grid */}
              <div className="about-stats-grid">
                {statistics.map((stat, i) => (
                  <div className="stat-card" key={i}>
                    <div className="stat-icon-row">
                      <span className="stat-emoji">{stat.icon}</span>
                      <span className="stat-number text-gradient">{stat.value}</span>
                    </div>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Learning Journey Milestones */}
              <div className="journey-block">
                <h5 className="journey-heading">Engineering Milestones</h5>
                <div className="journey-timeline">
                  {milestones.map((item, idx) => (
                    <div className="journey-item" key={idx}>
                      <div className="journey-node">
                        <span className="node-ring" />
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
