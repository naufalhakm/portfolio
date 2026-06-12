'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated number counter that counts up when visible.
 * Like Glyphs Labs stats section.
 */
export default function AnimatedCounter({ target, suffix = '', duration = 1500, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const num = parseInt(target, 10);
    if (isNaN(num)) {
      setCount(target); // for non-numeric like ∞
      return;
    }

    let start = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * num);
      setCount(value);
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(num);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  const display = typeof count === 'number' ? `${count}${suffix}` : count;

  return <span ref={ref} style={style}>{display}</span>;
}
