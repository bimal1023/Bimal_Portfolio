'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #f8f4ff 0%, #fdf0f8 50%, #f0f8ff 100%)',
        maxWidth: '100%',
        padding: '100px 0',
      }}
    >
      <div
        style={{ maxWidth: '700px', margin: '0 auto', padding: '0 48px', textAlign: 'center' }}
        className="contact-inner-pad"
      >
        <div
          className="reveal"
          style={{
            background: 'white',
            borderRadius: '32px',
            padding: '56px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.08)',
            border: '1.5px solid rgba(139,92,246,0.12)',
          }}
        >
          <span
            style={{
              fontSize: '3rem',
              marginBottom: '20px',
              display: 'block',
              animation: 'wave 2s ease-in-out infinite',
            }}
          >
            👋
          </span>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-pink)',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              marginBottom: '16px',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Let&apos;s build something{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontStyle: 'italic' }}>
              together.
            </span>
          </h2>
          <p
            style={{
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              fontSize: '1rem',
              textAlign: 'center',
              marginTop: '12px',
            }}
          >
            I&apos;m open to internship opportunities, full-time roles, and interesting project
            collaborations. If you think we&apos;d work well together — reach out!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '36px' }}>
            <a
              href="mailto:bkumal@student.sjny.edu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '16px 28px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                background: 'white',
                color: 'var(--ink)',
                border: '1.5px solid rgba(0,0,0,0.12)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = ''
                el.style.boxShadow = ''
              }}
            >
              ✉️ bkumal@student.sjny.edu
            </a>

            <a
              href="https://www.linkedin.com/in/bimal-kumal-aa4101285/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '16px 28px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                background: '#0a66c2',
                color: 'white',
                border: '1.5px solid #0a66c2',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = ''
                el.style.boxShadow = ''
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/bimal1023"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '16px 28px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                background: 'var(--ink)',
                color: 'white',
                border: '1.5px solid var(--ink)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = ''
                el.style.boxShadow = ''
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-inner-pad {
            padding: 0 24px !important;
          }
          .contact-inner-pad > div {
            padding: 36px 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
