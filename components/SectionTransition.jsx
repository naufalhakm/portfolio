'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Wraps a section with an animated background wipe from bottom to top.
 * The outer container also has the bgColor set directly so there's
 * never a gap of a different color showing through.
 */
export default function SectionTransition({ bgColor = '#f5f0e8', children, className = '' }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.3'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Animated overlay wipe */}
      <motion.div
        aria-hidden
        style={{
          scaleY,
          transformOrigin: 'bottom',
          position: 'absolute',
          inset: 0,
          backgroundColor: bgColor,
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
