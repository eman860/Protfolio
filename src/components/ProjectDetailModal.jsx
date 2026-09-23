import React, { useEffect } from 'react';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="case-study-backdrop" onClick={onClose}>
      <div
        className="case-study-modal glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{ '--project-accent': project.accentColor }}
      >
        {/* Modal Header */}
        <div className="case-study-header">
          <div className="case-header-left">
            <span className="case-study-number">{project.number} // CASE STUDY</span>
            <div className="case-badge-pill" style={{ color: project.accentColor, borderColor: `${project.accentColor}50` }}>
              <span>{project.icon}</span>
              <span>{project.badge}</span>
            </div>
            <h2 className="case-study-title">{project.title}</h2>
            <p className="case-study-tagline">{project.tagline}</p>
          </div>

          <button
            type="button"
            className="case-study-close-btn"
            onClick={onClose}
            aria-label="Close Case Study"
          >
            ✕
          </button>
        </div>

        {/* Modal Body: Deep Dive Workflow */}
        <div className="case-study-body">
          {/* Tech Stack Pills */}
          <div className="case-tech-strip">
            {project.techStack.map((tech) => (
              <span className="case-tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {/* Deep Dive Grid: Problem -> Process -> Architecture -> Solution -> Result */}
          <div className="case-breakdown-grid">
            {/* 01 The Problem */}
            <div className="breakdown-card">
              <div className="breakdown-tag">
                <span className="breakdown-dot red-dot" />
                <span>01 // THE CHALLENGE</span>
              </div>
              <h4 className="breakdown-title">The Problem</h4>
              <p className="breakdown-text">{project.problem}</p>
            </div>

            {/* 02 The Engineering Process */}
            <div className="breakdown-card">
              <div className="breakdown-tag">
                <span className="breakdown-dot yellow-dot" />
                <span>02 // METHODOLOGY</span>
              </div>
              <h4 className="breakdown-title">Engineering Process</h4>
              <p className="breakdown-text">{project.process}</p>
            </div>

            {/* 03 System Architecture */}
            <div className="breakdown-card">
              <div className="breakdown-tag">
                <span className="breakdown-dot cyan-dot" />
                <span>03 // ARCHITECTURE</span>
              </div>
              <h4 className="breakdown-title">System Architecture</h4>
              <p className="breakdown-text">{project.architecture}</p>
            </div>

            {/* 04 Implemented Solution */}
            <div className="breakdown-card">
              <div className="breakdown-tag">
                <span className="breakdown-dot green-dot" />
                <span>04 // SOLUTION</span>
              </div>
              <h4 className="breakdown-title">Implemented Solution</h4>
              <p className="breakdown-text">{project.solution}</p>
            </div>
          </div>

          {/* Key Features & Results Banner */}
          <div className="case-results-card">
            <h4 className="results-heading">
              <span>★</span> Key Features & Proven Outcomes
            </h4>
            <div className="results-pills-row">
              {project.highlights.map((h) => (
                <span className="highlight-pill" key={h}>
                  ✓ {h}
                </span>
              ))}
            </div>
            <p className="results-summary">{project.result}</p>
          </div>
        </div>

        {/* Modal Footer: Action Links */}
        <div className="case-study-footer">
          <div className="case-links-group">
            {project.liveUrl && project.liveUrl.startsWith('http') && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>🚀 Launch Live Demo</span>
              </a>
            )}

            {project.github && project.github.startsWith('http') && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <span>📂 GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={onClose}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
