import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const openCaseStudy = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('frontend') || p.category.toLowerCase().includes('game');
    if (filter === 'enterprise') return p.category.toLowerCase().includes('enterprise') || p.category.toLowerCase().includes('automation');
    if (filter === 'ai') return p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('audio') || p.category.toLowerCase().includes('deep learning');
    return true;
  });

  const getCategoryCount = (catId) => {
    if (catId === 'all') return projects.length;
    if (catId === 'web') return projects.filter((p) => p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('frontend') || p.category.toLowerCase().includes('game')).length;
    if (catId === 'enterprise') return projects.filter((p) => p.category.toLowerCase().includes('enterprise') || p.category.toLowerCase().includes('automation')).length;
    if (catId === 'ai') return projects.filter((p) => p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('audio') || p.category.toLowerCase().includes('deep learning')).length;
    return 0;
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production applications, international conference research, enterprise billing systems, and responsive web products.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-category-bar">
          <button
            type="button"
            className={`project-tab-pill ${filter === 'all' ? 'is-active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({getCategoryCount('all')})
          </button>
          <button
            type="button"
            className={`project-tab-pill ${filter === 'web' ? 'is-active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Applications ({getCategoryCount('web')})
          </button>
          <button
            type="button"
            className={`project-tab-pill ${filter === 'enterprise' ? 'is-active' : ''}`}
            onClick={() => setFilter('enterprise')}
          >
            Enterprise & Systems ({getCategoryCount('enterprise')})
          </button>
          <button
            type="button"
            className={`project-tab-pill ${filter === 'ai' ? 'is-active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Research ({getCategoryCount('ai')})
          </button>
        </div>

        {/* Projects Grid: Large Editorial Cards */}
        <div className="projects-editorial-list">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card glass-panel ${project.featured ? 'is-featured' : ''}`}
              style={{ '--project-accent': project.accentColor }}
              onClick={() => openCaseStudy(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openCaseStudy(project);
                }
              }}
              data-cursor="VIEW"
            >
              {/* Card Header */}
              <div className="project-top-row">
                <div className="project-identity">
                  <span className="project-index-num">{project.number}</span>
                  <span className="project-category-tag">{project.category}</span>
                </div>

                <div className="project-badge-pill" style={{ color: project.accentColor, borderColor: `${project.accentColor}40` }}>
                  <span className="badge-icon">{project.icon}</span>
                  <span>{project.badge}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-tagline">{project.tagline}</p>

              {/* Problem / Solution Preview */}
              <div className="project-problem-solution-box">
                <div className="ps-item">
                  <span className="ps-label text-gradient">PROBLEM:</span>
                  <p className="ps-text">{project.problem}</p>
                </div>
                <div className="ps-item">
                  <span className="ps-label text-gradient">SOLUTION:</span>
                  <p className="ps-text">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="project-tech-chips">
                {project.techStack.map((tech) => (
                  <span className="project-tech-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer">
                <div className="project-primary-links" onClick={(e) => e.stopPropagation()}>
                  {project.liveUrl && project.liveUrl.startsWith('http') && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      data-cursor="DEMO"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>🚀 Live Demo</span>
                    </a>
                  )}

                  {project.github && project.github.startsWith('http') && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      data-cursor="CODE"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>📂 GitHub</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  className="btn btn-ghost btn-sm case-study-trigger"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCaseStudy(project);
                  }}
                  data-cursor="VIEW"
                >
                  <span>View Project</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>

              {/* Subtle Ambient Hover Glow */}
              <div
                className="project-ambient-glow"
                style={{ background: `radial-gradient(circle at 80% 20%, ${project.accentGlow}, transparent 70%)` }}
              />
            </article>
          ))}
        </div>
      </div>

      {/* Mini Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
