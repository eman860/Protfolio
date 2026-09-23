import React, { useEffect, useRef } from 'react';

export default function HeroOrbCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking for parallax rotation
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX - width / 2) / (width / 2);
      mouse.targetY = (clientY - height / 2) / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Geodesic 3D sphere vertex generation
    const NODE_COUNT = 48;
    let nodes = [];
    const radius = Math.min(width, height) * 0.28;

    const initNodes = () => {
      nodes = [];
      const currentRadius = Math.min(width, height) * (window.innerWidth < 768 ? 0.35 : 0.26);
      for (let i = 0; i < NODE_COUNT; i++) {
        // Fibonacci sphere distribution for uniform 3D point spacing
        const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
        const theta = Math.PI * (1 + 5 ** 0.5) * i;
        nodes.push({
          x: currentRadius * Math.sin(phi) * Math.cos(theta),
          y: currentRadius * Math.sin(phi) * Math.sin(theta),
          z: currentRadius * Math.cos(phi),
          baseRadius: 2.2 + Math.random() * 1.5,
          color: i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#818CF8' : '#34D399',
        });
      }
    };

    initNodes();

    // Background floating dust particles
    const dustParticles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      angleY += 0.004 + mouse.x * 0.004;
      angleX += 0.002 + mouse.y * 0.004;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle ambient radial glow behind orb
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        radius * 1.8
      );
      glowGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      glowGrad.addColorStop(0.5, 'rgba(129, 140, 248, 0.06)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Render drifting dust
      dustParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3D rotation projection matrices
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = nodes.map((node) => {
        // Rotate around Y
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;

        // Rotate around X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        // Perspective camera projection
        const fov = 450;
        const scale = fov / (fov + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return {
          px,
          py,
          scale,
          z: z2,
          color: node.color,
          baseRadius: node.baseRadius,
        };
      });

      // Sort points from back to front for proper z-depth rendering
      projected.sort((a, b) => a.z - b.z);

      // Draw constellation interconnected lines
      const maxDistance = 75;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projected.forEach((p) => {
        const r = Math.max(1, p.baseRadius * p.scale);
        const alpha = Math.min(1, Math.max(0.2, (p.scale - 0.4) * 1.5));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow halo on foreground nodes
        if (p.z > 0) {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.arc(p.px, p.py, r * 1.8, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-orb-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-orb-canvas" />
    </div>
  );
}
