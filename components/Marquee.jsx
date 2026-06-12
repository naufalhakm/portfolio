'use client';

import { motion } from 'framer-motion';

/**
 * Infinite horizontal scrolling marquee — like Glyphs Labs footer ticker.
 * Items repeat infinitely and scroll smoothly to the left.
 */
export default function Marquee({ items = [], speed = 30, separator = '·', dark = false }) {
  const textColor = dark ? '#f5f0e8' : '#1a1a14';
  const sepColor = dark ? '#d4522a' : '#d4522a';

  // Repeat items enough times to fill the screen
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '24px 0' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '32px' }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '32px' }}>
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: textColor,
            }}>
              {item}
            </span>
            <span style={{ color: sepColor, fontSize: '20px' }}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
