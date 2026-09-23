import React, { useMemo, useState } from 'react';
import { allSkills, skillCategories } from '../data/portfolioData';

export default function TechConstellation() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(allSkills[0]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return allSkills;
    return allSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="section-padding tech-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>02 // CAPABILITIES & ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            Technology <span className="text-gradient">Constellation</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive, battle-tested technical toolkit for enterprise Java backends, modern reactive frontends, and applied AI systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="tech-filter-bar">
          {skillCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? allSkills.length
                : allSkills.filter((s) => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`tech-filter-tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="tab-counter">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Main Constellation & Inspector Layout */}
        <div className="tech-layout-grid">
          {/* Left Grid: Constellation Cards */}
          <div className="tech-cards-grid">
            {filteredSkills.map((skill) => {
              const isSelected = hoveredSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  className={`skill-constellation-card ${isSelected ? 'is-inspected' : ''}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onClick={() => setHoveredSkill(skill)}
                  style={{
                    '--skill-color': skill.color,
                    '--skill-glow': skill.glowColor,
                  }}
                  data-cursor={skill.name}
                >
                  <div className="skill-icon-holder">{skill.icon}</div>
                  <div className="skill-card-info">
                    <span className="skill-card-name">{skill.name}</span>
                    <span className="skill-card-tag">{skill.tag}</span>
                  </div>
                  <div className="skill-card-glow-overlay" />
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Technology Inspector Panel */}
          <div className="tech-inspector-panel glass-panel">
            <div className="inspector-top-badge">
              <span className="status-live-dot" />
              <span>ACTIVE INSPECTOR</span>
            </div>

            {hoveredSkill ? (
              <div className="inspector-content">
                <div className="inspector-icon-wrap" style={{ borderColor: hoveredSkill.color }}>
                  {hoveredSkill.icon}
                </div>

                <div className="inspector-title-row">
                  <h3 className="inspector-title" style={{ color: hoveredSkill.color }}>
                    {hoveredSkill.name}
                  </h3>
                  <span className="inspector-level-badge">{hoveredSkill.level}</span>
                </div>

                <div className="inspector-meta-row">
                  <span className="inspector-meta-pill">Category: {hoveredSkill.category.toUpperCase()}</span>
                  <span className="inspector-meta-pill">Domain: {hoveredSkill.tag}</span>
                </div>

                <p className="inspector-desc">{hoveredSkill.description}</p>

                <div className="inspector-usage-block">
                  <span className="usage-label">Verified Production Application:</span>
                  <p className="usage-text">
                    Applied in real-world projects such as Hospital Appointment Booking System, NeuroBill, and deep learning classification pipelines.
                  </p>
                </div>
              </div>
            ) : (
              <div className="inspector-placeholder">
                <p>Hover over or click any technology card to view architectural details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
