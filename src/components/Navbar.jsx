import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onOpenResume, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Reliable IntersectionObserver for section active states
    const sectionIds = navItems.map((item) => item.href.substring(1));
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-root ${scrolled ? 'is-scrolled' : ''}`}>
        <nav className="nav-container">
          {/* Brand Logo */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, '#home')}
            data-cursor="HOME"
          >
            <span className="brand-symbol">&lt;/&gt;</span>
            <div className="brand-info">
              <span className="brand-name">
                IMMAN<span className="brand-highlight">.DEV</span>
              </span>
              <span className="brand-live-badge">
                <span className="status-live-dot" />
                {personalInfo.status}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <ul className="nav-menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                  >
                    {item.label}
                    {isActive && <span className="nav-active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Quick Command Palette Button */}
            <button
              type="button"
              className="cmd-trigger-btn"
              onClick={onOpenCommandPalette}
              title="Open Command Palette (Ctrl+K)"
              aria-label="Open Command Palette"
            >
              <span className="cmd-icon">⌘</span>
              <span className="cmd-text">K</span>
            </button>

            {/* Resume Button */}
            <button
              type="button"
              className="btn btn-outline nav-resume-btn"
              onClick={onOpenResume}
            >
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-open' : ''}`}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-status-tag">
            <span className="status-live-dot" />
            <span>Available for Opportunities</span>
          </div>

          <ul className="mobile-nav-links">
            {navItems.map((item, idx) => (
              <li key={item.href} style={{ '--anim-delay': `${idx * 0.05}s` }}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`mobile-link ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
                >
                  <span className="mobile-link-idx">0{idx + 1}</span>
                  <span className="mobile-link-text">{item.label}</span>
                  <span className="mobile-link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              📄 View Complete Resume
            </button>

            <div className="mobile-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-link"
              >
                GitHub
              </a>
              <span className="social-divider">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-link"
              >
                LinkedIn
              </a>
              <span className="social-divider">•</span>
              <a href={`mailto:${personalInfo.email}`} className="mobile-social-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
