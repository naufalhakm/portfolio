'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * A horizontal line that grows from left to right when it enters the viewport.
 * Like Glyphs Labs section dividers.
 */
export default function GrowLine({ color = '#1a1a14', height = 2, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{
          height: `${height}px`,
          backgroundColor: color,
          transformOrigin: 'left',
          width: '100%',
        }}
      />
    </div>
  );
}
