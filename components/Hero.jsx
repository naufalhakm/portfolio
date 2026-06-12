'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

function AnimatedWord({ word, delay }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: '120%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero({ isReady }) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', fn, { passive: true });
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', backgroundColor: '#f5f0e8' }}
    >
      {/* 3D canvas — right side */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full" style={{ zIndex: 0 }}>
        <Scene3D mouseRef={mouseRef} />
      </div>

      {/* Left fade for text readability */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(90deg, rgba(245,240,232,0.97) 20%, rgba(245,240,232,0.5) 55%, rgba(245,240,232,0) 85%)',
        zIndex: 1,
      }} />

      {/* Main content */}
      <div
        className="relative h-full flex flex-col justify-center"
        style={{ zIndex: 2, padding: '0 48px' }}
      >
        {/* Available badge */}
        {isReady && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4 mb-16 md:mb-20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ backgroundColor: '#d4522a' }} />
              <span className="relative inline-flex rounded-full h-3 w-3"
                style={{ backgroundColor: '#d4522a' }} />
            </span>
            <span className="text-xs tracking-[0.35em] uppercase font-medium"
              style={{ fontFamily: 'var(--font-syne)', color: '#6b6554' }}>
              Available for work
            </span>
          </motion.div>
        )}

        {/* Headline */}
        <h1
          className="font-bold tracking-tight max-w-4xl"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            lineHeight: 1.08,
            color: '#1a1a14',
          }}
        >
          {isReady && (
            <>
              <AnimatedWord word="Hi!" delay={0.4} />{' '}
              <AnimatedWord word="I'm" delay={0.5} />
              <br />
              <AnimatedWord word="Naufal" delay={0.62} />{' '}
              <span style={{ color: '#d4522a' }}>
                <AnimatedWord word="Hakim" delay={0.75} />
              </span>
            </>
          )}
        </h1>

        {/* Description — bigger text, generous line height, capped width */}
        {isReady && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-12 md:mt-16 text-lg md:text-xl leading-[1.75] max-w-xl"
            style={{ fontFamily: 'var(--font-syne)', color: '#6b6554' }}
          >
            AI & Automation Engineer / Backend Developer from Jakarta with 4+ years building scalable systems and intelligent automation. Go · Laravel · Python · AI Agents.
          </motion.p>
        )}

        {/* Buttons — generous padding, no overflow cutoff */}
        {isReady && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="flex flex-wrap gap-5 mt-14 md:mt-20"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg whitespace-nowrap"
              style={{ fontFamily: 'var(--font-syne)', backgroundColor: '#d4522a', color: '#fff', padding: '16px 40px' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b83e1f'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d4522a'}
            >
              Hire Me
            </a>
            <a
              href="/Naufal_Hakim_Software_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-sm tracking-[0.15em] uppercase font-semibold border-2 transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-syne)', color: '#1a1a14', borderColor: '#1a1a14', backgroundColor: 'transparent', padding: '14px 38px' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a1a14'; e.currentTarget.style.color = '#f5f0e8'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a14'; }}
            >
              My Resume
            </a>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator — bottom center */}
      {isReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ zIndex: 2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
              <rect x="1" y="1" width="20" height="32" rx="10" stroke="#a09880" strokeWidth="1.5" />
              <motion.circle cx="11" cy="11" r="3" fill="#d4522a"
                animate={{ cy: [10, 20, 10] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} />
            </svg>
          </motion.div>
          <span className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-syne)', color: '#a09880' }}>Scroll</span>
        </motion.div>
      )}
    </section>
  );
}
