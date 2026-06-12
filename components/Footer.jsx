'use client';

export default function Footer() {
  return (
    <footer data-theme="dark" style={{ backgroundColor: '#1a1a14', borderTop: '1px solid #2a2a1e', padding: '32px 48px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <p style={{ fontFamily: 'var(--font-syne)', color: '#a09880', fontSize: '13px', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} Naufal Hakim · Jakarta, Indonesia
        </p>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            { l: 'GitHub', h: 'https://github.com/naufalhakm' },
            { l: 'LinkedIn', h: 'https://www.linkedin.com/in/naufalhakm/' },
          ].map(({ l, h }) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ fontFamily: 'var(--font-syne)', color: '#a09880', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4522a'}
              onMouseLeave={e => e.currentTarget.style.color = '#a09880'}>
              {l}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-syne)', color: '#6b6554', fontSize: '12px' }}>
          Built with Next.js & Three.js
        </p>
      </div>
    </footer>
  );
}
