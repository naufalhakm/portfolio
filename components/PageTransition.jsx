'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Wraps a section and adds:
 * 1. Background color fade-in as section enters viewport
 * 2. Content slides up smoothly
 * 3. Optional parallax on children
 */
export default function PageTransition({ children, bgFrom = '#f5f0e8', bgTo = '#f5f0e8', dark = false }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.2'],
  });

  // Background color opacity (from 0 to 1 as section comes into view)
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Content slides up
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="relative" style={{ backgroundColor: bgFrom }}>
      {/* Animated color overlay */}
      <motion.div
        aria-hidden
        style={{
          opacity: bgOpacity,
          position: 'absolute',
          inset: 0,
          backgroundColor: bgTo,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content with slide-up */}
      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1 }}>
        {children}
      </motion.div>
    </div>
  );
}
