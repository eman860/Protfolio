import React from 'react';
import { educationList, achievements } from '../data/portfolioData';

export default function EducationAndAchievements() {
  return (
    <section id="education" className="section-padding edu-achieve-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>07 // ACADEMIA & MILESTONES</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Research</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science engineering curriculum alongside published international conference research.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="edu-card glass-panel"
              style={{ '--edu-accent': edu.accentColor }}
            >
              <div className="edu-top-row">
                <div className="edu-icon-badge" style={{ borderColor: edu.accentColor, background: `${edu.accentColor}18` }}>
                  <span>{edu.icon}</span>
                </div>
                <div className="edu-status-tag">
                  <span className="status-live-dot" style={{ background: edu.accentColor }} />
                  <span>{edu.status}</span>
                </div>
              </div>

              <span className="edu-period">{edu.period}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              {/* Score Highlight Banner */}
              <div className="edu-score-pill" style={{ borderColor: `${edu.accentColor}40`, background: `${edu.accentColor}10` }}>
                <span className="score-main" style={{ color: edu.accentColor }}>{edu.grade}</span>
                <span className="score-sub">{edu.gradeSub}</span>
              </div>

              <p className="edu-desc">{edu.description}</p>

              {/* Coursework Tags */}
              <div className="edu-coursework-block">
                <span className="coursework-label">Core Coursework:</span>
                <div className="coursework-chips">
                  {edu.coursework.map((course) => (
                    <span className="course-chip" key={course}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conference Achievements Block */}
        <div className="achievements-card glass-panel">
          <div className="achieve-header">
            <div className="achieve-badge">
              <span className="badge-icon">🔬</span>
              <span>PEER-REVIEWED RESEARCH PUBLICATION</span>
            </div>
            <span className="achieve-date">September 2025</span>
          </div>

          {achievements.map((item) => (
            <div className="achieve-content" key={item.title}>
              <h3 className="achieve-title">{item.title}</h3>
              <p className="achieve-desc">{item.description}</p>

              <div className="achieve-actions">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  data-cursor="RESEARCH ↗"
                >
                  <span>📂 View Research Code on GitHub</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
