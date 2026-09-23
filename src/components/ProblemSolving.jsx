import React from 'react';
import { dsaSummary, certifications } from '../data/portfolioData';

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="section-padding dsa-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>06 // ALGORITHMIC RIGOR</span>
          </div>
          <h2 className="section-title">
            Problem Solving & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Strengthening core Data Structures, algorithmic problem-solving patterns in Java, and verified course credentials.
          </p>
        </div>

        <div className="dsa-layout-grid">
          {/* Left: DSA Progress & Topics */}
          <div className="dsa-panel glass-panel">
            <div className="dsa-top-bar">
              <span className="dsa-badge">☕ Java Core DSA</span>
              <span className="dsa-solved-count text-gradient">{dsaSummary.solvedCount} Problems Solved</span>
            </div>

            <h3 className="dsa-heading">Data Structures & Algorithmic Focus</h3>
            <p className="dsa-subtext">
              Focused on foundational algorithmic complexity, space optimization, and interview-ready Java patterns.
            </p>

            {/* Topic Progress Bars */}
            <div className="dsa-topics-list">
              <div className="dsa-topic-item">
                <div className="topic-meta">
                  <span className="topic-name">Arrays & Two-Pointers</span>
                  <span className="topic-status">Core Focus</span>
                </div>
                <div className="topic-progress-track">
                  <div className="topic-progress-fill fill-cyan" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="dsa-topic-item">
                <div className="topic-meta">
                  <span className="topic-name">Strings & Pattern Matching</span>
                  <span className="topic-status">Active Practice</span>
                </div>
                <div className="topic-progress-track">
                  <div className="topic-progress-fill fill-indigo" style={{ width: '75%' }} />
                </div>
              </div>

              <div className="dsa-topic-item">
                <div className="topic-meta">
                  <span className="topic-name">Hash Maps & Hash Sets</span>
                  <span className="topic-status">Active Practice</span>
                </div>
                <div className="topic-progress-track">
                  <div className="topic-progress-fill fill-green" style={{ width: '70%' }} />
                </div>
              </div>

              <div className="dsa-topic-item">
                <div className="topic-meta">
                  <span className="topic-name">Object-Oriented Design in Java</span>
                  <span className="topic-status">Advanced</span>
                </div>
                <div className="topic-progress-track">
                  <div className="topic-progress-fill fill-orange" style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Verified Technical Certifications */}
          <div className="certs-panel glass-panel">
            <h3 className="certs-heading">Verified Credentials</h3>
            <p className="certs-subtext">
              Recognized technical coursework completed through industry programs and university benchmarks.
            </p>

            <div className="certs-cards-list">
              {certifications.map((cert) => (
                <div className="cert-item-card" key={cert.name}>
                  <div className="cert-icon-box">
                    <span>📜</span>
                  </div>
                  <div className="cert-info">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <h4 className="cert-name">{cert.name}</h4>
                  </div>
                  <span className="cert-badge">{cert.badge}</span>
                </div>
              ))}
            </div>

            <div className="dsa-note-card">
              <span className="note-icon">💡</span>
              <p className="note-text">
                All credentials support practical software delivery in production applications and enterprise Java backends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
