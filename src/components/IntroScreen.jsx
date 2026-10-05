import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ─── Boot sequence lines ───────────────────────────────────────── */
const BOOT_LINES = [
  { text: '> Initializing system kernel...', color: '#94a3b8' },
  { text: '> Mounting AI runtime environment...', color: '#38bdf8' },
  { text: '> Tech stack loaded  [Java · React · Python · MySQL]', color: '#34d399' },
  { text: '> Projects indexed   [8 enterprise-grade applications]', color: '#34d399' },
  { text: '> Experience modules [NEXTGEN · NEURA GLOBAL] — VERIFIED', color: '#a78bfa' },
  { text: '> Research paper     [ICCIS-3.0 Conference] — PUBLISHED', color: '#a78bfa' },
  { text: '> Neural interface calibrated — 100% operational', color: '#f472b6' },
  { text: '> Welcome to IMMAN.DEV', color: '#fbbf24' },
];

/* ─── Typewriter hook ───────────────────────────────────────────── */
function useTypewriter(lines, { charSpeed = 18, lineDelay = 100, startDelay = 800 } = {}) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    let timeout;

    const tick = () => {
      if (cancelled) return;
      if (lineIdx >= lines.length) { setDone(true); return; }
      const line = lines[lineIdx].text;
      if (charIdx <= line.length) {
        const slice = line.slice(0, charIdx);
        setDisplayedLines(prev => {
          const next = [...prev];
          next[lineIdx] = { text: slice, color: lines[lineIdx].color };
          return next;
        });
        charIdx++;
        timeout = setTimeout(tick, charSpeed);
      } else {
        lineIdx++;
        charIdx = 0;
        timeout = setTimeout(tick, lineDelay);
      }
    };

    timeout = setTimeout(tick, startDelay);
    return () => { cancelled = true; clearTimeout(timeout); };
  }, []);

  return { displayedLines, done };
}

/* ─── Main Component ────────────────────────────────────────────── */
export default function IntroScreen({ onComplete }) {
  const canvasRef = useRef(null);
  const orbRef = useRef(null);
  const [phase, setPhase] = useState('entering'); // entering | active | exiting
  const [scanY, setScanY] = useState(0);
  const { displayedLines, done } = useTypewriter(BOOT_LINES, {
    charSpeed: 16,
    lineDelay: 90,
    startDelay: 1000,
  });

  const progress = done ? 100 : Math.round((displayedLines.length / BOOT_LINES.length) * 100);

  /* Skip handler */
  const handleSkip = useCallback(() => {
    if (phase === 'exiting') return;
    setPhase('exiting');
    setTimeout(() => onComplete(), 800);
  }, [phase, onComplete]);

  /* Key listener */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') handleSkip();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleSkip]);

  /* Entrance animation */
  useEffect(() => {
    const t = setTimeout(() => setPhase('active'), 80);
    return () => clearTimeout(t);
  }, []);

  /* Auto-exit after typing finishes */
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setPhase('exiting');
      setTimeout(() => onComplete(), 800);
    }, 900);
    return () => clearTimeout(t);
  }, [done, onComplete]);

  /* Horizontal scan beam */
  useEffect(() => {
    let raf;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const pct = ((ts - start) % 2800) / 2800;
      setScanY(pct * 100);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf;

    const PARTICLE_COUNT = 80;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.2,
      color: ['#38bdf8', '#818cf8', '#34d399', '#c084fc', '#f472b6'][Math.floor(Math.random() * 5)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = '#818cf8';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  /* Orb canvas */
  useEffect(() => {
    const canvas = orbRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const SIZE = canvas.width = canvas.height = 260;
    const cx = SIZE / 2;
    let raf;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      t += 0.018;

      // Outer halo rings
      const rings = [
        { r: 118, lw: 0.5, alpha: 0.15 + 0.08 * Math.sin(t) },
        { r: 102, lw: 0.8, alpha: 0.2 + 0.1 * Math.sin(t + 1) },
        { r: 84, lw: 1.2, alpha: 0.28 + 0.12 * Math.sin(t + 2) },
      ];
      rings.forEach(({ r, lw, alpha }) => {
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = lw;
        ctx.beginPath();
        ctx.arc(cx, cx, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Rotating dashes
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + t * 0.7;
        const rx = cx + Math.cos(angle) * 92;
        const ry = cx + Math.sin(angle) * 92;
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = i % 3 === 0 ? '#c084fc' : '#38bdf8';
        ctx.beginPath();
        ctx.arc(rx, ry, i % 3 === 0 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Counter-rotating dashes
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 - t * 0.5;
        const rx = cx + Math.cos(angle) * 108;
        const ry = cx + Math.sin(angle) * 108;
        ctx.globalAlpha = 0.35;
        ctx.fillStyle = '#818cf8';
        ctx.beginPath();
        ctx.arc(rx, ry, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Core glow
      const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, 62);
      grad.addColorStop(0, `rgba(56, 189, 248, ${0.25 + 0.12 * Math.sin(t * 1.5)})`);
      grad.addColorStop(0.5, `rgba(129, 140, 248, ${0.12 + 0.08 * Math.sin(t)})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.globalAlpha = 1;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cx, 62, 0, Math.PI * 2);
      ctx.fill();

      // Pulsing inner ring
      ctx.globalAlpha = 0.5 + 0.3 * Math.sin(t * 2);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cx, 58 + 3 * Math.sin(t * 1.5), 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  const isExiting = phase === 'exiting';
  const isActive = phase === 'active';

  return (
    <div
      className={`is-root ${isActive ? 'is-active' : ''} ${isExiting ? 'is-exiting' : ''}`}
      aria-label="Portfolio loading screen"
      role="status"
    >
      {/* Scanlines overlay */}
      <div className="is-scanlines" aria-hidden="true" />

      {/* Horizontal scan beam */}
      <div
        className="is-scan-beam"
        style={{ top: `${scanY}%` }}
        aria-hidden="true"
      />

      {/* Particle neural canvas */}
      <canvas ref={canvasRef} className="is-canvas" aria-hidden="true" />

      {/* Skip button */}
      <button
        type="button"
        className="is-skip"
        onClick={handleSkip}
        aria-label="Skip introduction"
      >
        <span>SKIP</span>
        <kbd>ESC</kbd>
      </button>

      {/* HUD corner brackets */}
      <span className="is-corner is-tl" aria-hidden="true" />
      <span className="is-corner is-tr" aria-hidden="true" />
      <span className="is-corner is-bl" aria-hidden="true" />
      <span className="is-corner is-br" aria-hidden="true" />

      {/* Main center layout */}
      <div className="is-center">

        {/* Orb */}
        <div className="is-orb-wrap">
          <canvas ref={orbRef} className="is-orb-canvas" width="260" height="260" aria-hidden="true" />
          <div className="is-orb-core-label" aria-hidden="true">AI</div>
        </div>

        {/* Logo */}
        <div className="is-logo">
          <span className="is-logo-bracket">&lt;</span>
          <span className="is-logo-name">IMMAN</span>
          <span className="is-logo-dot">.DEV</span>
          <span className="is-logo-slash">/&gt;</span>
        </div>

        {/* Tagline */}
        <p className="is-tagline">Software Developer &amp; AI Enthusiast</p>

        {/* Terminal */}
        <div className="is-terminal" aria-live="polite" aria-label="Boot sequence output">
          <div className="is-terminal-bar">
            <span className="is-dot is-dot-r" />
            <span className="is-dot is-dot-y" />
            <span className="is-dot is-dot-g" />
            <span className="is-terminal-title">imman@portfolio:~</span>
            <span className="is-terminal-status">
              {done ? '● READY' : '● BOOTING'}
            </span>
          </div>
          <div className="is-terminal-body">
            {displayedLines.map((line, i) => (
              <div
                key={i}
                className={`is-tline ${i === displayedLines.length - 1 ? 'is-tline-active' : ''}`}
              >
                <span style={{ color: line.color }}>{line.text}</span>
                {i === displayedLines.length - 1 && !done && (
                  <span className="is-cursor" aria-hidden="true">█</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="is-progress-wrap" aria-hidden="true">
          <div className="is-progress-labels">
            <span>{done ? 'SYSTEM READY' : 'LOADING...'}</span>
            <span>{progress}%</span>
          </div>
          <div className="is-progress-track">
            <div
              className="is-progress-fill"
              style={{ width: `${progress}%` }}
            />
            <div
              className="is-progress-glow"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="is-progress-segments">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`is-seg ${i < Math.floor(progress / 5) ? 'is-seg-active' : ''}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
