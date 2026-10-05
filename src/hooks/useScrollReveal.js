import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — triggers reveal when element enters viewport.
 * Returns a ref to attach to the target element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-revealed');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useStaggerReveal — triggers staggered reveal on children.
 * Returns a ref to attach to a container element.
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -40px 0px',
    once = true,
    childSelector = ':scope > *',
  } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      container.classList.add('is-revealed');
      container.querySelectorAll(childSelector).forEach((child) => {
        child.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.classList.add('is-revealed');
          const children = container.querySelectorAll(childSelector);
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('is-revealed'), i * 80);
          });
          if (once) observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, childSelector]);

  return ref;
}

/**
 * useCountUp — animates a number from 0 to target when in viewport.
 */
export function useCountUp(target, options = {}) {
  const ref = useRef(null);
  const [count, setCount] = useState('0');
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;

          const numStr = String(target).replace(/[^0-9.]/g, '');
          const num = parseFloat(numStr);
          const isFloat = numStr.includes('.');
          const suffix = String(target).replace(/[0-9.]/g, '');

          if (prefersReducedMotion || isNaN(num)) {
            setCount(String(target));
            return;
          }

          const duration = options.duration || 1500;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = num * ease;
            const display = isFloat
              ? current.toFixed(2) + suffix
              : Math.floor(current) + suffix;
            setCount(display);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, options.duration]);

  return { ref, count };
}

