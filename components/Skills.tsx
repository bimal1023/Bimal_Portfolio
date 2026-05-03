'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  useScrollReveal()

  return (
    <section
      id="skills"
      style={{
        background: 'var(--ink)',
        maxWidth: '100%',
        padding: '100px 0',
        color: 'white',
      }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}
        className="skills-inner-pad"
      >
        <div className="reveal">
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-pink)',
              marginBottom: '12px',
            }}
          >
            Skills
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            My toolkit.
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '560px',
              lineHeight: 1.65,
              marginBottom: '56px',
            }}
          >
            Languages, frameworks, and tools I work with daily.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '28px',
                transition: 'background 0.2s, transform 0.2s',
                animationDelay: `${0.05 * i}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(255,255,255,0.09)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(255,255,255,0.05)'
                el.style.transform = ''
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {group.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.85)',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: item.color,
                        flexShrink: 0,
                      }}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-inner-pad {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
