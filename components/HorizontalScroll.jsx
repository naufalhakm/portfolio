'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function SlideCounter({ progress, total }) {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const unsubscribe = progress.on('change', (v) => {
      const idx = Math.floor(v * (total - 1)) + 1;
      setCurrent(Math.min(Math.max(idx, 1), total));
    });
    return unsubscribe;
  }, [progress, total]);

  return (
    <span style={{ fontFamily: 'var(--font-syne)', fontSize: '14px' }}>
      <span style={{ color: '#d4522a', fontWeight: 700, fontSize: '18px' }}>
        {String(current).padStart(2, '0')}
      </span>
      <span style={{ color: '#a09880' }}>
        {' / '}{String(total).padStart(2, '0')}
      </span>
    </span>
  );
}

export default function HorizontalScroll({ children, totalSlides = 4 }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Key fix: map full progress to exactly the distance needed
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(totalSlides - 1) * (100 / totalSlides)}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="work"
      style={{
        // Only need enough scroll for transitions between slides
        height: `${(totalSlides + 1) * 80}vh`,
        position: 'relative',
        backgroundColor: '#f5f0e8',
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '80px', /* account for fixed navbar height */
      }}>
        {/* Header — compact */}
        <div style={{
          padding: '16px 48px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-syne)', color: '#d4522a', fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>
              Selected Work
            </p>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#1a1a14', lineHeight: 1.1 }}>
              Things I've built.
            </h2>
          </div>
          <SlideCounter progress={scrollYProgress} total={totalSlides} />
        </div>

        {/* Slides */}
        <div style={{ flex: 1, position: 'relative', marginTop: '0' }}>
          <motion.div style={{
            x,
            display: 'flex',
            height: '100%',
            width: `${totalSlides * 100}%`,
          }}>
            {children}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div style={{ padding: '16px 48px 24px' }}>
          <div style={{ height: '2px', backgroundColor: '#e0dbd0', borderRadius: '1px', overflow: 'hidden' }}>
            <motion.div style={{
              width: progressWidth,
              height: '100%',
              backgroundColor: '#d4522a',
              borderRadius: '1px',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
