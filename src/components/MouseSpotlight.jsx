import React, { useEffect, useRef } from 'react';

/**
 * MouseSpotlight — a subtle radial glow that follows the cursor.
 * Desktop only. Respects prefers-reduced-motion.
 */
export default function MouseSpotlight() {
  const spotRef = useRef(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const spot = spotRef.current;
    if (!spot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let currX = x;
    let currY = y;
    let raf;

    const handleMouseMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      // Smooth follow
      currX += (x - currX) * 0.08;
      currY += (y - currY) * 0.08;
      spot.style.left = currX + 'px';
      spot.style.top  = currY + 'px';
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="mouse-spotlight"
      aria-hidden="true"
    />
  );
}
