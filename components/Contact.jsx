'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [status, setStatus] = useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <section id="contact" ref={ref}
      className="relative overflow-hidden"
      data-theme="dark"
      style={{ backgroundColor: '#1a1a14' }}>

      {/* Big CTA centered */}
      <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 48px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.5em] uppercase font-semibold mb-10"
          style={{ fontFamily: 'var(--font-syne)', color: '#d4522a' }}>
          Get In Touch
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h2 initial={{ y: '105%' }} animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="font-bold"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, color: '#f5f0e8' }}>
            Let's build
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2 initial={{ y: '105%' }} animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, delay: 0.18, ease: [0.76, 0, 0.24, 1] }}
            className="font-bold italic"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, color: '#d4522a' }}>
            something great.
          </motion.h2>
        </div>

        {/* Direct CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}>
          <MagneticButton strength={0.2}>
            <a href="mailto:naufalhakim6b@gmail.com"
              className="inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-syne)', backgroundColor: '#d4522a', color: '#fff', padding: '18px 48px' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b83e1f'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d4522a'}>
              Start a Conversation →
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Form + links */}
      <div style={{ padding: '0 48px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', maxWidth: '900px', margin: '0 auto' }} className="lg:grid-cols-2">

          {/* Form */}
          <motion.form onSubmit={submit}
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col gap-8">
            <input type="text" placeholder="Your name" required
              className="w-full bg-transparent focus:outline-none transition-colors duration-300"
              style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8', borderBottom: '1px solid #3a3828', caretColor: '#d4522a', padding: '20px 0', fontSize: '16px' }}
              onFocus={e => e.target.style.borderBottomColor = '#d4522a'}
              onBlur={e => e.target.style.borderBottomColor = '#3a3828'} />
            <input type="email" placeholder="Email address" required
              className="w-full bg-transparent focus:outline-none transition-colors duration-300"
              style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8', borderBottom: '1px solid #3a3828', caretColor: '#d4522a', padding: '20px 0', fontSize: '16px' }}
              onFocus={e => e.target.style.borderBottomColor = '#d4522a'}
              onBlur={e => e.target.style.borderBottomColor = '#3a3828'} />
            <textarea placeholder="Tell me about your project" rows={4} required
              className="w-full bg-transparent focus:outline-none transition-colors duration-300 resize-none"
              style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8', borderBottom: '1px solid #3a3828', caretColor: '#d4522a', padding: '20px 0', fontSize: '16px' }}
              onFocus={e => e.target.style.borderBottomColor = '#d4522a'}
              onBlur={e => e.target.style.borderBottomColor = '#3a3828'} />
            <div className="mt-4">
              <button type="submit" disabled={status !== 'idle'}
                className="inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 disabled:opacity-50 whitespace-nowrap hover:scale-[1.02]"
                style={{ fontFamily: 'var(--font-syne)', backgroundColor: '#d4522a', color: '#fff', padding: '16px 40px' }}
                onMouseEnter={e => { if (status === 'idle') e.currentTarget.style.backgroundColor = '#b83e1f'; }}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d4522a'}>
                {status === 'idle' ? 'Send Message →' : status === 'sending' ? 'Sending…' : 'Sent ✓'}
              </button>
            </div>
          </motion.form>

          {/* Links */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col justify-center gap-16">

            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-4"
                style={{ fontFamily: 'var(--font-syne)', color: '#d4522a' }}>Email</p>
              <a href="mailto:naufalhakim6b@gmail.com"
                className="text-lg md:text-xl font-medium transition-colors duration-300"
                style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8' }}
                onMouseEnter={e => e.currentTarget.style.color = '#d4522a'}
                onMouseLeave={e => e.currentTarget.style.color = '#f5f0e8'}>
                naufalhakim6b@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-6"
                style={{ fontFamily: 'var(--font-syne)', color: '#d4522a' }}>Socials</p>
              <div className="flex flex-col gap-5">
                {[
                  { label: 'GitHub', href: 'https://github.com/naufalhakm' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naufalhakm/' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-5 border-b group/link transition-colors duration-300"
                    style={{ borderColor: '#2a2a1e' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#d4522a'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a1e'}>
                    <span className="text-base md:text-lg font-semibold"
                      style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8' }}>{label}</span>
                    <span className="text-xl transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      style={{ color: '#d4522a' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large BG watermark */}
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 0.03 } : {}}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute bottom-0 right-0 font-bold leading-none pointer-events-none select-none"
        style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(12rem, 30vw, 30rem)', color: '#f5f0e8' }}>
        NH
      </motion.div>
    </section>
  );
}
