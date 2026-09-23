import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onTriggerEasterEgg }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="section-container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-box">
            <span className="footer-logo">
              &lt;/&gt; IMMAN<span className="brand-highlight">.DEV</span>
            </span>
            <p className="footer-tagline">
              Software Developer building modern web experiences, intelligent applications & digital products.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Connect</span>
            <ul className="footer-links-list">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`}>
                  Email ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-status-col">
            <span className="footer-col-title">System Status</span>
            <div className="footer-status-pill">
              <span className="status-live-dot" />
              <span>All Systems Nominal</span>
            </div>
            <button
              type="button"
              className="footer-terminal-btn"
              onClick={onTriggerEasterEgg}
              title="Click to view developer easter egg"
            >
              $ sudo status
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.fullName}. Built with curiosity + code.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            data-cursor="TOP"
          >
            <span>Back to Top</span>
            <span className="top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
