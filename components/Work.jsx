'use client';

import { motion } from 'framer-motion';
import HorizontalScroll from './HorizontalScroll';

const projects = [
  {
    number: '01',
    title: 'HW GROUP',
    role: 'AI & Automation Engineer',
    tags: ['Go', 'Python', 'Laravel', 'OpenClaw', 'AI'],
    year: 'Apr 2025–Present',
    desc: 'Architected Data Intelligence Agent using OpenClaw. Slashed automation costs by ~97% ($1,100/mo → $30/mo). Built face verification worker handling 60,000+ concurrent uploads with goroutines.',
    link: 'https://holywings.com/',
    color: '#d4522a',
    // Shape: rotating gear/cog for AI/automation
    shape: (
      <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
        <motion.path
          d="M60 20 L70 35 L85 30 L80 47 L98 52 L85 62 L95 78 L78 75 L72 92 L60 80 L48 92 L42 75 L25 78 L35 62 L22 52 L40 47 L35 30 L50 35 Z"
          stroke="currentColor" strokeWidth="1.5" fill="none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: 'center' }}
        />
        <motion.circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="1.5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'ARKADEMI',
    role: 'Backend Engineer',
    tags: ['Go', 'Laravel', 'MySQL', 'AWS', 'Docker'],
    year: 'Sep 2022–Feb 2025',
    desc: 'Developed LMS backend for Indonesia\'s leading e-learning platform. Migrated to Go with Clean Architecture. Moved millions of data using goroutines. Implemented RabbitMQ, Redis, Firebase.',
    link: 'https://www.arkademi.com',
    color: '#e8b84b',
    // Shape: stacked layers for architecture
    shape: (
      <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
        <motion.rect x="25" y="70" width="70" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"
          animate={{ y: [70, 68, 70] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.rect x="30" y="52" width="60" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"
          animate={{ y: [52, 49, 52] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
        <motion.rect x="35" y="34" width="50" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"
          animate={{ y: [34, 30, 34] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />
        <motion.polygon points="60,15 45,30 75,30" stroke="currentColor" strokeWidth="1.5" fill="none"
          animate={{ y: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }} />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Live Shopping',
    role: 'Thesis — Binus University',
    tags: ['Go', 'Python', 'YOLO', 'WebRTC', 'FAISS'],
    year: 'Sep 2025–Jan 2026',
    desc: 'Real-time live shopping assistant — auto-detects products during live streams using YOLO + CLIP + FAISS. Built with Go WebSocket/WebRTC SFU for bidirectional communication.',
    link: '#',
    color: '#4a7c59',
    // Shape: eye/camera for detection
    shape: (
      <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
        <motion.ellipse cx="60" cy="60" rx="40" ry="25" stroke="currentColor" strokeWidth="1.5"
          animate={{ ry: [25, 28, 25] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle cx="60" cy="60" r="12" stroke="currentColor" strokeWidth="1.5"
          animate={{ r: [12, 14, 12] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle cx="60" cy="60" r="5" fill="currentColor"
          animate={{ scale: [1, 0.8, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        {/* Scan lines */}
        <motion.line x1="20" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"
          animate={{ y1: [50, 70, 50], y2: [50, 70, 50] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Intellitalk',
    role: 'AI HR App — Hackathon',
    tags: ['Go', 'Next.js', 'MongoDB', 'OpenAI'],
    year: 'May–Jun 2023',
    desc: 'Self-interview application using AI to help HR interview candidates automatically. Go backend, Next.js frontend, MongoDB, powered by OpenAI for NLP and scoring.',
    link: '#',
    color: '#5a6ea0',
    // Shape: chat bubbles for conversation AI
    shape: (
      <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
        <motion.rect x="20" y="30" width="50" height="30" rx="8" stroke="currentColor" strokeWidth="1.5"
          animate={{ x: [20, 23, 20] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.polygon points="35,60 40,70 45,60" stroke="currentColor" strokeWidth="1.5" fill="none"
          animate={{ y: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.rect x="50" y="65" width="50" height="25" rx="8" stroke="currentColor" strokeWidth="1.5"
          animate={{ x: [50, 47, 50] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
        <motion.polygon points="85,90 80,98 75,90" stroke="currentColor" strokeWidth="1.5" fill="none"
          animate={{ y: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
        {/* Dots typing indicator */}
        <motion.circle cx="35" cy="45" r="2" fill="currentColor"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
        <motion.circle cx="43" cy="45" r="2" fill="currentColor"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
        <motion.circle cx="51" cy="45" r="2" fill="currentColor"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} />
      </svg>
    ),
  },
];

function ProjectSlide({ project }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '0 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
    }}>
      {/* Left — content */}
      <div style={{ maxWidth: '520px' }}>
        {/* Number label */}
        <p style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '12px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#a09880',
          marginBottom: '16px',
        }}>
          {project.number} / {project.role}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          color: '#1a1a14',
          lineHeight: 1.05,
          marginBottom: '12px',
        }}>
          {project.title}
        </h3>

        {/* Year */}
        <p style={{ fontFamily: 'var(--font-syne)', fontSize: '13px', color: '#a09880', marginBottom: '28px' }}>
          {project.year}
        </p>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '15px',
          lineHeight: 1.8,
          color: '#6b6554',
          marginBottom: '28px',
        }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-syne)',
              backgroundColor: '#1a1a14',
              color: '#f5f0e8',
              borderRadius: '999px',
              padding: '8px 20px',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 600,
              color: project.color, display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
            Visit Project ↗
          </a>
        )}
      </div>

      {/* Right — animated SVG shape */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: project.color,
        opacity: 0.45,
        width: '180px',
        height: '180px',
        marginLeft: 'auto',
        flexShrink: 0,
      }}>
        {project.shape}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <HorizontalScroll totalSlides={projects.length}>
      {projects.map((p) => (
        <div key={p.number} style={{ width: `${100 / projects.length}%`, height: '100%' }}>
          <ProjectSlide project={p} />
        </div>
      ))}
    </HorizontalScroll>
  );
}
