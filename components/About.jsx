'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import GrowLine from './GrowLine';
import Marquee from './Marquee';

function RevealLine({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div initial={{ y: '105%' }} animate={inView ? { y: '0%' } : {}}
        transition={{ duration: 0.85, delay, ease: [0.76, 0, 0.24, 1] }}>
        {children}
      </motion.div>
    </div>
  );
}

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-6% 0px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

const infoList = [
  { title: 'Languages', description: 'Golang · PHP · Python · JavaScript · SQL · C++ · GraphQL' },
  { title: 'Education', description: 'Computer Science — Binus University (GPA 3.88/4.0)\nComputer Engineering — IPB University (GPA 3.51/4.0)' },
  { title: 'Experience', description: '4+ years · HW Group & Arkademi\nBuilding scalable backend systems & AI-powered automation' },
];

const tools = ['Docker', 'AWS', 'GCP', 'Firebase', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'gRPC'];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#eee9de' }}>

      {/* Intro — centered */}
      <div style={{ padding: '120px 48px 80px', textAlign: 'center' }}>
        <FadeUp>
          <p style={{ fontFamily: 'var(--font-syne)', color: '#d4522a', marginBottom: '24px', fontSize: '12px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 600 }}>
            About Me
          </p>
        </FadeUp>

        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2.2rem, 5vw, 5rem)', lineHeight: 1.05, color: '#1a1a14', fontWeight: 700 }}>
          <RevealLine delay={0}>I build systems</RevealLine>
          <RevealLine delay={0.08}>
            <span style={{ color: '#d4522a' }}>that scale.</span>
          </RevealLine>
        </h2>

        <FadeUp delay={0.2}>
          <p style={{ fontFamily: 'var(--font-syne)', color: '#6b6554', fontSize: '18px', lineHeight: 1.8, maxWidth: '640px', margin: '40px auto 0' }}>
            Software engineer specializing in scalable backend systems and AI-powered automation. From slashing operational costs by 97% with AI agents to handling 60K+ concurrent uploads — I build systems that perform under pressure.
          </p>
        </FadeUp>
      </div>

      {/* Stats strip */}
      <div style={{ backgroundColor: '#ddd8cc', padding: '56px 48px' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            {[
              { n: '4', suffix: '+', label: 'Years Exp.' },
              { n: '10', suffix: '+', label: 'Projects' },
              { n: '97', suffix: '%', label: 'Cost Reduction' },
            ].map(({ n, suffix, label }) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 700, color: '#d4522a', lineHeight: 1 }}>
                  <AnimatedCounter target={n} suffix={suffix} duration={1800} />
                </p>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b6554', marginTop: '12px' }}>{label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Marquee — skills ticker */}
      <div data-theme="dark" style={{ backgroundColor: '#1a1a14' }}>
        <Marquee
          items={['Golang', 'Laravel', 'Python', 'AI Agents', 'Microservices', 'Docker', 'AWS', 'PostgreSQL', 'gRPC', 'Redis']}
          speed={35}
          dark
        />
      </div>

      {/* Details grid */}
      <div style={{ padding: '80px 48px 120px' }}>
        <GrowLine color="#d8d2c4" height={1} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', maxWidth: '1000px', margin: '48px auto 0' }} className="lg:grid-cols-2">

          {/* Left — Language/Edu/Experience cards with CLEAR spacing */}
          <div>
            {infoList.map(({ title, description }, i) => (
              <FadeUp key={title} delay={0.08 * i}>
                <div style={{ padding: '32px 0', borderBottom: '1px solid #d8d2c4' }}>
                  <p style={{ fontFamily: 'var(--font-syne)', color: '#d4522a', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-syne)', color: '#1a1a14', fontSize: '16px', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right — Tools + Resume */}
          <div>
            <FadeUp delay={0.15}>
              <p style={{ fontFamily: 'var(--font-syne)', color: '#d4522a', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '24px' }}>
                Tools & Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {tools.map(t => (
                  <span key={t}
                    className="transition-all duration-300"
                    style={{ fontFamily: 'var(--font-syne)', color: '#1a1a14', border: '1.5px solid #1a1a14', borderRadius: '999px', padding: '10px 24px', fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500, display: 'inline-flex', alignItems: 'center', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a1a14'; e.currentTarget.style.color = '#f5f0e8'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a14'; }}>
                    {t}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div style={{ marginTop: '56px' }}>
                <a href="/Naufal_Hakim_Software_Developer.pdf" target="_blank" rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-[1.02]"
                  style={{ fontFamily: 'var(--font-syne)', backgroundColor: '#1a1a14', color: '#f5f0e8', borderRadius: '999px', padding: '16px 40px', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d4522a'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a1a14'}>
                  Download Resume ↓
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
