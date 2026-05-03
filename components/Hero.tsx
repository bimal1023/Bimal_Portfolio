'use client'

import FloatingShapes from './FloatingShapes'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '100px 48px 60px',
        background: 'linear-gradient(180deg, #daeef9 0%, #e8f4fd 40%, #f0f8ff 100%)',
      }}
    >
      {/* Float scene */}
      <FloatingShapes />

      {/* Hero inner */}
      <div
        style={{
          maxWidth: '900px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.9)',
            border: '1.5px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '100px',
            padding: '8px 18px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--accent-purple)',
            marginBottom: '28px',
            animation: 'fadeSlideUp 0.6s ease both',
          }}
        >
          <span style={{ fontSize: '0.7rem' }}>✦</span>
          CS Student &amp; AI Engineer · New York
        </div>

        {/* Avatar */}
        <div
          style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 28px',
            position: 'relative',
            animation: 'fadeSlideUp 0.6s 0s ease both',
          }}
        >
          <div className="avatar-blob">🤖</div>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'var(--ink)',
            animation: 'fadeSlideUp 0.6s 0.1s ease both',
            marginBottom: '4px',
          }}
        >
          Hi, I&apos;m{' '}
          <span
            style={{
              color: 'var(--accent-pink)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            Bimal.
          </span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            color: 'var(--ink-soft)',
            margin: '18px 0 32px',
            animation: 'fadeSlideUp 0.6s 0.2s ease both',
            lineHeight: 1.5,
          }}
        >
          I build intelligent systems — from{' '}
          <em style={{ color: 'var(--accent-blue)', fontStyle: 'italic' }}>AI agents</em> to
          full-stack apps —<br />
          and I love making technology feel delightfully human.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            animation: 'fadeSlideUp 0.6s 0.3s ease both',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#projects"
            style={{
              background: 'var(--ink)',
              color: 'white',
              border: 'none',
              padding: '16px 36px',
              borderRadius: '100px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '0 12px 32px rgba(26,26,46,0.3)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = ''
              el.style.boxShadow = ''
            }}
          >
            View my work ↓
          </a>
          <a
            href="https://github.com/bimal1023"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'white',
              color: 'var(--ink)',
              border: '2px solid rgba(26,26,46,0.15)',
              padding: '16px 36px',
              borderRadius: '100px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
              el.style.borderColor = 'var(--accent-purple)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.transform = ''
              el.style.boxShadow = ''
              el.style.borderColor = 'rgba(26,26,46,0.15)'
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Clouds */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 160'%3E%3Cpath fill='%23f0f8ff' fill-opacity='1' d='M0,96 C240,160 480,32 720,96 C960,160 1200,32 1440,96 L1440,160 L0,160 Z'/%3E%3C/svg%3E\") bottom/cover no-repeat",
        }}
      />
    </section>
  )
}
