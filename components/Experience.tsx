'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { workExperience, education, teachingAndAwards } from '@/data/experience'
import type { TimelineItem } from '@/data/experience'

function TimelineBlock({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div
          key={item.title}
          className="timeline-item reveal"
          style={{
            position: 'relative',
            marginBottom: '48px',
            animationDelay: item.animationDelay,
          }}
        >
          <div
            className="timeline-dot"
            style={{
              position: 'absolute',
              left: '-29px',
              top: '6px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: item.dotColor,
              border: '3px solid white',
              boxShadow: `0 0 0 2px ${item.dotColor}`,
            }}
          />
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--accent-purple)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '6px',
            }}
          >
            {item.date}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '4px',
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--ink-soft)',
              marginBottom: '10px',
            }}
          >
            {item.org}
          </div>
          <div
            className="timeline-body"
            style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ink-soft)' }}
          >
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  useScrollReveal()

  return (
    <section
      id="experience"
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
          Background
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
          Where I&apos;ve{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontStyle: 'italic' }}>
            been.
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
          Professional, academic, and teaching experience.
        </p>
      </div>

      <div style={{ marginBottom: '72px', maxWidth: '1000px' }}>
        <h3
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-blue)',
            marginBottom: '28px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Experience
        </h3>
        <TimelineBlock items={workExperience} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          maxWidth: '1000px',
        }}
        className="exp-grid"
      >
        <div>
          <h3
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-purple)',
              marginBottom: '28px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Education
          </h3>
          <TimelineBlock items={education} />
        </div>

        <div>
          <h3
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-pink)',
              marginBottom: '28px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Teaching &amp; Awards
          </h3>
          <TimelineBlock items={teachingAndAwards} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience {
            padding: 80px 24px !important;
          }
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
