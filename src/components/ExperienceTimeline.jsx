import React from 'react';
import { experiences } from '../data/portfolioData';

export default function ExperienceTimeline({ onOpenResume }) {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>04 // TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Industry <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical internships in enterprise Java architecture, database management, and machine learning pipelines.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="experience-timeline-wrap">
          {experiences.map((exp, idx) => (
            <div
              key={exp.role + exp.company}
              className="xp-timeline-card glass-panel"
              style={{ '--xp-accent': exp.accentColor }}
            >
              {/* Timeline Indicator Column */}
              <div className="xp-timeline-indicator">
                <div className="xp-node-icon" style={{ borderColor: exp.accentColor, background: `${exp.accentColor}18` }}>
                  <span>{exp.icon}</span>
                </div>
                {idx < experiences.length - 1 && <div className="xp-connecting-line" />}
              </div>

              {/* Card Content Column */}
              <div className="xp-card-content">
                <div className="xp-meta-row">
                  <div className="xp-company-box">
                    <h3 className="xp-role-name">{exp.role}</h3>
                    <div className="xp-company-detail">
                      <span className="xp-company-title">{exp.company}</span>
                      <span className="xp-sep">•</span>
                      <span className="xp-location">{exp.location}</span>
                    </div>
                  </div>

                  <div className="xp-badge-col">
                    <span className="xp-period-pill">{exp.period}</span>
                    <span className="xp-domain-tag" style={{ color: exp.accentColor, borderColor: `${exp.accentColor}40` }}>
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <p className="xp-summary-text">{exp.summary}</p>

                {/* Key Contributions */}
                <div className="xp-contributions-block">
                  <h4 className="contributions-label">Key Engineering Contributions:</h4>
                  <ul className="contributions-list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="xp-skills-strip">
                  {exp.skills.map((skill) => (
                    <span className="xp-skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Quick Callout Banner */}
        <div className="resume-banner glass-panel">
          <div className="banner-left">
            <span className="banner-icon">📄</span>
            <div>
              <h4 className="banner-title">Need the full official credential sheet?</h4>
              <p className="banner-sub">
                Inspect my ATS-optimized resume directly or download a clean PDF for review.
              </p>
            </div>
          </div>

          <div className="banner-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenResume}
              data-cursor="RESUME"
            >
              <span>View ATS Sheet</span>
            </button>
            <a
              href="/resume.pdf"
              download="Imman_Resume.pdf"
              className="btn btn-outline"
              data-cursor="PDF"
            >
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
