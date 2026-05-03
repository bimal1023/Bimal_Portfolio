'use client'

import { useSounds } from '@/hooks/useSound'

export default function Nav() {
  const { playPing } = useSounds()
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 48px',
        background: 'rgba(232, 244, 253, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(168, 212, 240, 0.4)',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '1.35rem',
          color: 'var(--ink)',
          letterSpacing: '-0.03em',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        BK{' '}
        <span
          style={{
            width: '8px',
            height: '8px',
            background: 'var(--accent-pink)',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }}
        />
      </a>

      <ul
        className="nav-links-mobile"
        style={{
          display: 'flex',
          gap: '36px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {(['About', 'Projects', 'Skills', 'Experience'] as const).map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--ink)')}
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = 'var(--ink-soft)')
              }
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={playPing}
            style={{
              background: 'var(--ink)',
              color: 'white',
              padding: '10px 22px',
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 24px rgba(26,26,46,0.25)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = ''
              el.style.boxShadow = ''
            }}
          >
            Say Hello 👋
          </a>
        </li>
      </ul>
    </nav>
  )
}
