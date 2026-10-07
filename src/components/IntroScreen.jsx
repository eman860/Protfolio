import React, { useEffect, useState, useCallback, useMemo } from 'react';

const TECH_PILLS = [
  { icon: '⚡', label: 'Full-Stack' },
  { icon: '🤖', label: 'AI & ML' },
  { icon: '☕', label: 'Java & Python' },
  { icon: '⚛️', label: 'React' },
];

const NAME_LETTERS = ['I', 'M', 'M', 'A', 'N'];

export default function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('entering'); // entering | active | exiting
  const [progress, setProgress] = useState(0);
  const [showPills, setShowPills] = useState(false);

  // Skip handler
  const handleSkip = useCallback(() => {
    if (phase === 'exiting') return;
    setPhase('exiting');
    setTimeout(() => onComplete(), 600);
  }, [phase, onComplete]);

  // Keyboard shortcut listener
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleSkip]);

  // Initial phase activation
  useEffect(() => {
    const t = setTimeout(() => setPhase('active'), 50);
    const t2 = setTimeout(() => setShowPills(true), 700);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  // Smooth numerical progress counter
  useEffect(() => {
    const duration = 2400; // ms
    const startTime = performance.now();

    const updateCounter = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Exit shortly after reaching 100%
        setTimeout(() => {
          setPhase('exiting');
          setTimeout(() => onComplete(), 650);
        }, 500);
      }
    };

    const rafId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  // Background floating dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 17) % 100,
      y: (i * 23) % 100,
      size: (i % 3) + 2,
      duration: 3 + (i % 4) * 1.5,
      delay: (i % 5) * 0.4,
    }));
  }, []);

  const isExiting = phase === 'exiting';
  const isActive  = phase === 'active';

  return (
    <div
      className={`si-root ${isActive ? 'si-active' : ''} ${isExiting ? 'si-exiting' : ''}`}
      aria-label="Portfolio intro screen"
      role="status"
    >
      {/* Perspective Cyber Horizon Grid */}
      <div className="si-cyber-grid" aria-hidden="true">
        <div className="si-grid-lines" />
        <div className="si-horizon-glow" />
      </div>

      {/* Ambient Aurora Orbs */}
      <div className="si-glow-orb si-glow-1" aria-hidden="true" />
      <div className="si-glow-orb si-glow-2" aria-hidden="true" />
      <div className="si-glow-orb si-glow-3" aria-hidden="true" />

      {/* Floating Stardust Particles */}
      <div className="si-particles-layer" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="si-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Skip Button */}
      <button
        type="button"
        className="si-skip"
        onClick={handleSkip}
        aria-label="Skip introduction"
      >
        <span>Skip</span>
        <kbd>ESC</kbd>
      </button>

      {/* Center Hero Block */}
      <div className="si-center">

        {/* 3D Gyroscope Orbiting Avatar */}
        <div className="si-gyro-wrap">
          {/* Outer Orbit Ring with traveling satellite */}
          <div className="si-orbit si-orbit-outer" aria-hidden="true">
            <span className="si-satellite si-sat-cyan" />
          </div>

          {/* Inner Counter-Orbit Ring with traveling satellite */}
          <div className="si-orbit si-orbit-inner" aria-hidden="true">
            <span className="si-satellite si-sat-purple" />
          </div>

          {/* Expanding Sonar Waves */}
          <div className="si-sonar-wave si-sonar-1" aria-hidden="true" />
          <div className="si-sonar-wave si-sonar-2" aria-hidden="true" />

          {/* Central Monogram Badge */}
          <div className="si-avatar" aria-hidden="true">
            <div className="si-avatar-glow" />
            <span className="si-avatar-letter">I</span>
          </div>
        </div>

        {/* Staggered 3D Animated Letters for Name */}
        <div className="si-name-wrap">
          <h1 className="si-name" aria-label="Imman">
            {NAME_LETTERS.map((char, idx) => (
              <span
                key={idx}
                className="si-char"
                style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <span className="si-name-badge">.DEV</span>
        </div>

        {/* Tagline with Pulsing Radar Dot */}
        <p className="si-tagline">
          <span className="si-tagline-dot" aria-hidden="true" />
          Software Developer &amp; AI Enthusiast
        </p>

        {/* Floating Animated Tech Pills */}
        <div className={`si-pills-row ${showPills ? 'si-pills-visible' : ''}`} aria-hidden="true">
          {TECH_PILLS.map((pill, i) => (
            <span
              key={pill.label}
              className="si-pill"
              style={{ animationDelay: `${0.8 + i * 0.12}s` }}
            >
              <span className="si-pill-icon">{pill.icon}</span>
              <span className="si-pill-text">{pill.label}</span>
            </span>
          ))}
        </div>

        {/* Precision Laser Telemetry & Progress Bar */}
        <div className="si-telemetry-box" aria-hidden="true">
          <div className="si-telemetry-header">
            <span className="si-tele-status">
              <span className="si-tele-blink">●</span> INITIALIZING SYSTEM
            </span>
            <span className="si-tele-pct">{progress}%</span>
          </div>

          <div className="si-progress-track">
            <div
              className="si-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="si-laser-spark" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

