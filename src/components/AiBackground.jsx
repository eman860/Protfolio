import React, { useEffect, useRef } from 'react';

/**
 * AiBackground — immersive technical canvas animation with:
 *  - Matrix rain columns (green binary/katakana characters)
 *  - Neural network nodes with pulsing connections
 *  - Circuit board traces with animated traveling dots
 *  - Mouse-following glow spotlight
 * Respects prefers-reduced-motion.
 */
export default function AiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const isMobile = W < 768;

    const mouse = { x: W / 2, y: H / 2 };

    /* ── 1. Matrix Rain ─────────────────────────────────────── */
    const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]()<>/\\+-=*&#@!%^~|?';
    const COL_SIZE = isMobile ? 16 : 18;
    const colCount = Math.floor(W / COL_SIZE);

    const cols = Array.from({ length: colCount }, () => ({
      y: Math.random() * H,
      speed: 0.5 + Math.random() * 1.2,
      length: 6 + Math.floor(Math.random() * 14),
      chars: Array.from({ length: 20 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
      mutateTimer: 0,
    }));

    /* ── 2. Neural Network Nodes ────────────────────────────── */
    const NODE_COUNT = isMobile ? 22 : 48;
    const CONNECT_DIST = isMobile ? 110 : 160;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.2,
      color: ['#38bdf8', '#818cf8', '#34d399', '#c084fc', '#f472b6'][Math.floor(Math.random() * 5)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    }));

    /* ── 3. Circuit Traces ──────────────────────────────────── */
    const TRACE_COUNT = isMobile ? 6 : 12;

    function buildTrace() {
      const segs = 3 + Math.floor(Math.random() * 4);
      const pts = [{ x: Math.random() * W, y: Math.random() * H }];
      for (let i = 0; i < segs; i++) {
        const prev = pts[pts.length - 1];
        const horizontal = Math.random() > 0.5;
        const dist = 60 + Math.random() * 180;
        pts.push({
          x: horizontal ? prev.x + (Math.random() > 0.5 ? dist : -dist) : prev.x,
          y: horizontal ? prev.y : prev.y + (Math.random() > 0.5 ? dist : -dist),
        });
      }
      return {
        pts,
        progress: Math.random(),
        speed: 0.0015 + Math.random() * 0.003,
        color: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'][Math.floor(Math.random() * 4)],
        alpha: 0.12 + Math.random() * 0.2,
        dotAlpha: 0.7 + Math.random() * 0.3,
      };
    }

    const traces = Array.from({ length: TRACE_COUNT }, buildTrace);

    /* ── Event Handlers ─────────────────────────────────────── */
    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    /* ── Draw Loop ───────────────────────────────────────────── */
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* ── Matrix Rain ── */
      cols.forEach((col, ci) => {
        col.mutateTimer++;
        if (col.mutateTimer > 8) {
          col.mutateTimer = 0;
          const ri = Math.floor(Math.random() * col.chars.length);
          col.chars[ri] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        const x = ci * COL_SIZE;
        ctx.font = `${COL_SIZE - 2}px 'JetBrains Mono', 'Courier New', monospace`;

        for (let row = 0; row < col.length; row++) {
          const y = col.y - row * COL_SIZE;
          if (y < 0 || y > H) continue;

          const frac = 1 - row / col.length;
          if (row === 0) {
            ctx.globalAlpha = 0.85;
            ctx.fillStyle = '#a7f3d0';
          } else {
            ctx.globalAlpha = frac * 0.22;
            ctx.fillStyle = '#22c55e';
          }

          const charIdx = (Math.floor(col.y / COL_SIZE) + row) % col.chars.length;
          ctx.fillText(col.chars[charIdx], x, y);
        }

        col.y += col.speed;
        if (col.y - col.length * COL_SIZE > H) {
          col.y = -COL_SIZE * 2;
          col.speed = 0.5 + Math.random() * 1.2;
          col.length = 6 + Math.floor(Math.random() * 14);
        }
      });

      /* ── Neural Network Lines ── */
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            ctx.globalAlpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.strokeStyle = '#818cf8';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* ── Neural Network Nodes ── */
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = W + 10;
        if (n.x > W + 10) n.x = -10;
        if (n.y < -10) n.y = H + 10;
        if (n.y > H + 10) n.y = -10;

        n.pulse += n.pulseSpeed;
        const pulsedAlpha = n.alpha + Math.sin(n.pulse) * 0.12;
        const pulsedR = n.r + Math.sin(n.pulse) * 0.6;

        ctx.globalAlpha = Math.max(0, pulsedAlpha);
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        if (!isMobile) {
          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 180) {
            const glow = (1 - mdist / 180) * 0.7;
            ctx.beginPath();
            ctx.arc(n.x, n.y, pulsedR * 3, 0, Math.PI * 2);
            ctx.fillStyle = n.color;
            ctx.globalAlpha = glow;
            ctx.fill();
          }
        }
      });

      /* ── Circuit Traces ── */
      traces.forEach((t, ti) => {
        ctx.globalAlpha = t.alpha;
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.moveTo(t.pts[0].x, t.pts[0].y);
        for (let p = 1; p < t.pts.length; p++) {
          ctx.lineTo(t.pts[p].x, t.pts[p].y);
        }
        ctx.stroke();

        const totalSegs = t.pts.length - 1;
        const globalProg = t.progress * totalSegs;
        const segIdx = Math.floor(globalProg);
        const segFrac = globalProg - segIdx;

        if (segIdx < totalSegs) {
          const a = t.pts[segIdx];
          const b = t.pts[segIdx + 1];
          const dotX = a.x + (b.x - a.x) * segFrac;
          const dotY = a.y + (b.y - a.y) * segFrac;

          ctx.globalAlpha = t.dotAlpha;
          ctx.shadowBlur = 12;
          ctx.shadowColor = t.color;
          ctx.beginPath();
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        t.progress += t.speed;
        if (t.progress >= 1) {
          traces[ti] = buildTrace();
          traces[ti].progress = 0;
        }
      });

      /* ── Mouse Spotlight ── */
      if (!isMobile) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
        grad.addColorStop(0, 'rgba(139, 92, 246, 0.06)');
        grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.globalAlpha = 1;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ai-bg-canvas"
      aria-hidden="true"
      style={{ opacity: 0.75 }}
    />
  );
}




