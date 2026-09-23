import React, { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-modal-toolbar">
          <div className="resume-toolbar-title">
            <span className="doc-icon">📄</span>
            <div>
              <h3>EMAN A — Official Resume</h3>
              <p>Full-Stack Developer & Java Specialist</p>
            </div>
          </div>

          <div className="resume-toolbar-actions">
            <a
              href="/resume.pdf"
              download="EMAN_A_Resume.pdf"
              className="btn btn-primary resume-action-btn"
              title="Download PDF to your computer"
            >
              <span>📥</span> Download PDF
            </a>
            <button
              type="button"
              className="btn btn-outline resume-action-btn"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <span>🖨️</span> Print / Save
            </button>
            <button
              type="button"
              className="resume-close-btn"
              onClick={onClose}
              title="Close modal (Esc)"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Paper Sheet Preview */}
        <div className="resume-paper-wrapper">
          <div className="resume-paper" id="printable-resume">
            {/* Header */}
            <header className="resume-header">
              <h1 className="resume-name">EMAN A</h1>
              <div className="resume-contact-bar">
                <a href="mailto:imman6230@gmail.com" className="resume-link">imman6230@gmail.com</a>
                <span className="sep">•</span>
                <a href="tel:+918610072497" className="resume-link">+91 8610072497</a>
                <span className="sep">•</span>
                <a href="https://www.linkedin.com/in/imman-10im" target="_blank" rel="noreferrer" className="resume-link">LinkedIn</a>
                <span className="sep">•</span>
                <a href="https://github.com/eman860" target="_blank" rel="noreferrer" className="resume-link">GitHub</a>
                <span className="sep">•</span>
                <a href="#home" onClick={onClose} className="resume-link">Portfolio</a>
              </div>
            </header>

            {/* Summary */}
            <section className="resume-section">
              <h2 className="resume-section-heading">SUMMARY</h2>
              <div className="resume-rule" />
              <p className="resume-summary-text">
                Full-stack developer in training with hands-on experience in Java, JSP, Servlets, MySQL, and JavaScript. Built and shipped a hospital appointment booking system end-to-end using REST-style CRUD operations and OOP principles during an internship. Currently strengthening Data Structures & Algorithms in Java for placement readiness, with a growing GitHub portfolio and working knowledge of Agile development practices.
              </p>
            </section>

            {/* Skills */}
            <section className="resume-section">
              <h2 className="resume-section-heading">SKILLS</h2>
              <div className="resume-rule" />
              <div className="resume-skills-grid">
                <div className="resume-skill-row">
                  <span className="skill-label">Programming Languages:</span>
                  <span className="skill-value">JavaScript | Java | Python | SQL</span>
                </div>
                <div className="resume-skill-row">
                  <span className="skill-label">Web Development:</span>
                  <span className="skill-value">HTML | CSS | Bootstrap | JSP</span>
                  <span className="skill-label ml-auto">Concepts:</span>
                  <span className="skill-value">OOP | Data Structures & Algorithms</span>
                </div>
                <div className="resume-skill-row">
                  <span className="skill-label">Databases:</span>
                  <span className="skill-value">SQL | Supabase</span>
                  <span className="skill-label ml-auto">OS:</span>
                  <span className="skill-value">Linux | Windows</span>
                  <span className="skill-label ml-auto">Version Control & Tools:</span>
                  <span className="skill-value">Git | GitHub | VS Code</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2 className="resume-section-heading">PROJECTS</h2>
              <div className="resume-rule" />

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">Hospital Appointment Booking System</span>
                  <span className="entry-date">June/2026</span>
                </div>
                <div className="entry-stack">Tech Stack: JSP | Java | HTML | SQL | Gemini AI</div>
                <ul className="entry-bullets">
                  <li>Developed the Apollo Hospital Appointment Booking System, a full-stack Java application enabling patients to book appointments with real-time scheduling and record management.</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">Billing Management System</span>
                  <span className="entry-date">Aug/2025</span>
                </div>
                <div className="entry-stack">Tech Stack: HTML | JavaScript | SQL</div>
                <ul className="entry-bullets">
                  <li>Designed a billing management system with automated invoice generation, tax calculation, and customer transaction tracking for efficient business billing.</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">E-Commerce Shopping Website</span>
                  <span className="entry-date">Sep/2024</span>
                </div>
                <div className="entry-stack">Tech Stack: HTML | CSS | Basic JavaScript | Bootstrap</div>
                <ul className="entry-bullets">
                  <li>Designed an e-commerce shopping website with product browsing, cart management, and secure user authentication for a seamless online shopping experience.</li>
                </ul>
              </div>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="resume-section-heading">EXPERIENCE</h2>
              <div className="resume-rule" />

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">NEURA GLOBAL, Artificial Intelligence Intern</span>
                  <span className="entry-date">Feb/2026 – Mar/2026 • Remote</span>
                </div>
                <ul className="entry-bullets">
                  <li>Built and trained machine learning models as part of the AI internship, gaining hands-on experience with model development and evaluation workflows.</li>
                  <li>Worked remotely in a collaborative environment, applying core ML concepts to real-world AI problems.</li>
                </ul>
              </div>

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">NEXTGEN, Java Full Stack Developer Intern</span>
                  <span className="entry-date">Jun/2026 – Jul/2026</span>
                </div>
                <ul className="entry-bullets">
                  <li>Developed a full-stack hospital appointment booking application for Apollo Hospital using Java, JSP/Servlets, and MySQL, covering both frontend and backend.</li>
                  <li>Designed the database schema and JSP-based dynamic pages to handle appointment scheduling, patient records, and end-to-end booking workflows.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section-heading">EDUCATION</h2>
              <div className="resume-rule" />

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">B.E. Computer Science and Engineering Pursuing, Annai Mira College Of Engineering And Tech</span>
                  <span className="entry-date">2027</span>
                </div>
                <div className="entry-meta">CGPA: 8.20 (Till 5th Sem)</div>
              </div>

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">HSC, GVC HR SEC SCHOOL</span>
                  <span className="entry-date">2023</span>
                </div>
                <div className="entry-meta">Score: 70%</div>
              </div>
            </section>

            {/* Achievements */}
            <section className="resume-section">
              <h2 className="resume-section-heading">ACHIEVEMENTS</h2>
              <div className="resume-rule" />

              <div className="resume-entry">
                <div className="entry-header">
                  <span className="entry-title">Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches</span>
                  <span className="entry-date">2025</span>
                </div>
                <div className="entry-stack">Third International Conference on Cyber and Information Security (ICCIS-3.0)</div>
                <ul className="entry-bullets">
                  <li>Presented a research paper, "Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches," at the Third International Conference on Cyber and Information Security (ICCIS-3.0) 2025, organized by the PG Department of Data Science, Dwaraka Doss Goverdhan Doss Vaishnav College (DDGDVC), held on 09.09.2025.</li>
                </ul>
              </div>
            </section>

            {/* Problem Solving */}
            <section className="resume-section">
              <h2 className="resume-section-heading">PROBLEM SOLVING</h2>
              <div className="resume-rule" />
              <p className="resume-plain-line">Solved 25+ DSA problems in Java (Arrays, Strings, Hashing)</p>
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h2 className="resume-section-heading">CERTIFICATIONS</h2>
              <div className="resume-rule" />
              <div className="resume-cert-line">
                <span><strong>Programming in Java:</strong> Udemy</span>
                <span className="sep">|</span>
                <span><strong>Programming in Python:</strong> Udemy</span>
                <span className="sep">|</span>
                <span><strong>Full Stack Development:</strong> Intern</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
