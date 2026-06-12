'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navLinks = ['Work', 'About', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Header — fully transparent, text uses mix-blend-mode for auto contrast */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          backgroundColor: 'transparent',
          mixBlendMode: 'difference',
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: '28px 48px' }}>
          {/* Logo */}
          <MagneticButton strength={0.2}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                fontFamily: 'var(--font-syne)',
                color: '#ffffff',
                fontSize: '20px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Naufal<span style={{ color: '#ffffff' }}>.</span>
            </button>
          </MagneticButton>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center" style={{ gap: '48px' }}>
            {navLinks.map(link => (
              <MagneticButton key={link} strength={0.3}>
                <button
                  onClick={() => go(link)}
                  style={{
                    fontFamily: 'var(--font-syne)',
                    color: '#ffffff',
                    fontSize: '13px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    opacity: 0.7,
                  }}
                >
                  {link}
                </button>
              </MagneticButton>
            ))}

            {/* CTA */}
            <MagneticButton strength={0.25}>
              <a
                href="#contact"
                style={{
                  fontFamily: 'var(--font-syne)',
                  border: '1.5px solid #ffffff',
                  color: '#ffffff',
                  borderRadius: '999px',
                  padding: '12px 32px',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Let's Talk
              </a>
            </MagneticButton>
          </nav>

          {/* Hamburger */}
          <MagneticButton strength={0.4}>
            <button onClick={() => setOpen(!open)}
              className="flex flex-col justify-center items-end gap-[6px] w-10 h-10 md:hidden"
              aria-label="Menu">
              <motion.span animate={open ? { rotate: 45, y: 8, width: '28px' } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-[2px] origin-center"
                style={{ width: '28px', backgroundColor: '#ffffff' }} />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[2px]"
                style={{ width: '20px', backgroundColor: '#ffffff' }} />
              <motion.span animate={open ? { rotate: -45, y: -8, width: '28px' } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-[2px] origin-center"
                style={{ width: '24px', backgroundColor: '#ffffff' }} />
            </button>
          </MagneticButton>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99] flex flex-col justify-center items-center gap-10"
            style={{ backgroundColor: '#1a1a14' }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link}
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}>
                <button onClick={() => go(link)}
                  className="text-[clamp(2.5rem,9vw,5rem)] font-bold leading-none transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#d4522a'}
                  onMouseLeave={e => e.currentTarget.style.color = '#f5f0e8'}>
                  {link}
                </button>
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute bottom-10 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: 'var(--font-syne)', color: '#6b6554' }}>
              © {new Date().getFullYear()} Naufal Hakim
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
