'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useSounds } from '@/hooks/useSound'
import { projects } from '@/data/projects'

export default function Projects() {
  useScrollReveal()
  const { playPop } = useSounds()

  return (
    <section
      id="projects"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
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
          Projects
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
          }}
        >
          Things I&apos;ve{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontStyle: 'italic' }}>
            built.
          </span>
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--ink-soft)',
            maxWidth: '560px',
            lineHeight: 1.65,
            marginBottom: '56px',
          }}
        >
          6 projects spanning AI agents, full-stack apps, deep learning, and statistical ML — each
          solving a real problem.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="project-card reveal"
            style={
              {
                background: 'white',
                borderRadius: '24px',
                padding: '36px',
                border: '1.5px solid rgba(0,0,0,0.07)',
                transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: `${0.05 * (i + 1)}s`,
                '--card-accent-color': project.accent,
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              playPop()
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(-6px)'
              el.style.boxShadow = '0 20px 56px rgba(0,0,0,0.12)'
              el.style.borderColor = project.accent
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = ''
              el.style.boxShadow = ''
              el.style.borderColor = 'rgba(0,0,0,0.07)'
            }}
          >
            <span style={{ fontSize: '2.2rem', marginBottom: '20px', display: 'block' }}>
              {project.emoji}
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: project.accent,
                marginBottom: '12px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {project.tag}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginBottom: '12px',
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: 'var(--ink-soft)',
                marginBottom: '24px',
              }}
            >
              {project.description}
            </p>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    background: 'rgba(0,0,0,0.05)',
                    color: 'var(--ink-soft)',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '14px' }}>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: project.accent,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '8px')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '5px')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects {
            padding: 80px 24px !important;
          }
          #projects > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
