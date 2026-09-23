import React, { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function EasterEggs({ isOpen, onClose }) {
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === KONAMI_CODE[konamiProgress]) {
        const nextProgress = konamiProgress + 1;
        if (nextProgress === KONAMI_CODE.length) {
          setShowModal(true);
          setKonamiProgress(0);
        } else {
          setKonamiProgress(nextProgress);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  const active = isOpen || showModal;

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  if (!active) return null;

  return (
    <div className="easter-egg-backdrop" onClick={handleClose}>
      <div
        className="easter-egg-terminal glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="term-btn term-red" onClick={handleClose} />
            <span className="term-btn term-yellow" />
            <span className="term-btn term-green" />
          </div>
          <span className="terminal-title">imman@developer-core:~</span>
        </div>

        <div className="terminal-body">
          <p className="term-line term-green-text">$ sudo hire imman --role="Software Engineer"</p>
          <p className="term-line">[SYSTEM] Authorizing elevated credentials...</p>
          <p className="term-line">[MATCH] Core competencies verified:</p>
          <p className="term-line term-cyan-text">&gt; Enterprise Java, JSP, Servlets, MySQL</p>
          <p className="term-line term-cyan-text">&gt; Python, Machine Learning & Deep Learning (ICCIS-3.0 Paper)</p>
          <p className="term-line term-cyan-text">&gt; Modern Frontend: React, JavaScript, CSS3 Design Systems</p>
          <p className="term-line term-cyan-text">&gt; 25+ Algorithmic Problems Solved | CGPA: 8.20</p>
          <p className="term-line term-yellow-text">
            [STATUS] Candidate available for immediate full-time / internship opportunities!
          </p>
          <p className="term-line">
            Contact: <a href="mailto:imman6230@gmail.com" className="term-link">imman6230@gmail.com</a> | +91 8610072497
          </p>
          <p className="term-line term-cursor-line">
            $ <span className="term-cursor">█</span>
          </p>
        </div>

        <div className="terminal-footer">
          <button type="button" className="btn btn-primary btn-sm" onClick={handleClose}>
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
