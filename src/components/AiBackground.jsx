import React, { useEffect, useRef } from 'react';

/**
 * AiBackground — lightweight canvas that draws:
 * - Slowly drifting particles (neural nodes)
 * - Thin connecting lines between nearby particles
 * - Mouse-following warm spotlight
 * Respects prefers-reduced-motion.
**/
export default function AiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Fewer particles on mobile
    const isMobile = W < 768;
    const COUNT = isMobile ? 25 : 55;
    const CONNECT_DIST = isMobile ? 100 : 140;

    const mouse = { x: W / 2, y: H / 2 };

    // Particle data
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.5 + 0.6,
      alpha: Math.random() * 0.5 + 0.15,
      color: ['#38bdf8', '#818cf8', '#34d399', '#c084fc'][Math.floor(Math.random() * 4)],
    }));

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connecting lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.12;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = '#818cf8';
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse proximity glow on nearby particles
      if (!isMobile) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const glow = (1 - dist / 150) * 0.6;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = glow;
            ctx.fill();
          }
        });
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ai-bg-canvas"
      aria-hidden="true"
      style={{ opacity: 0.65 }}
    />
  );
}
