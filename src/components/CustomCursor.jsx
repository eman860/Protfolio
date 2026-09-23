import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth trailing interpolation
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Event delegation for cursor context states
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, .project-card, .skill-card, .xp-card');
      if (!target) {
        setCursorVariant('default');
        setCursorText('');
        return;
      }

      const customLabel = target.getAttribute('data-cursor');
      if (customLabel) {
        setCursorVariant('text');
        setCursorText(customLabel);
      } else if (target.classList.contains('project-card')) {
        setCursorVariant('project');
        setCursorText('VIEW →');
      } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('subtle');
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [position.x, position.y]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        className={`custom-cursor-dot ${cursorVariant}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Outer trailing magnetic ring */}
      <div
        className={`custom-cursor-ring ${cursorVariant}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </>
  );
}
